---
title: "Cognigy.AI Kustomize-to-Helm Migration Guide"
slug: "kustomize-to-helm-migration"
hidden: false
ignore_macros: true
---

# Cognigy.AI Kustomize-to-Helm Migration Guide

## Prerequisites

- Kubernetes v1.21 - 1.23
- Kubectl utility installed locally on Linux or MacOS client host. **Windows client hosts are not supported by the following guide**.
- [Helm](https://helm.sh/) v3.8+ installed on the client host.
- Kubernetes cluster meets general Cognigy.AI [prerequisites](https://docs.cognigy.com/ai/installation/prerequisites/#whitelisting-of-domains) **including hardware resources**
- Backup of Cognigy secrets for kustomize installation (MongoDB and Redis connection strings) exists in a form of kubernetes manifests
- **Cognigy.AI kustomize installation must be at the same version as Cognigy.AI Helm Chart during migration**
- Cognigy.AI kustomize installation must be >= v4.38
- Snapshots/Backups of all PVCs/PVs (MongoDB, Redis-Persistent, flow-modules, flow-functions) are made before the migration starts

## Preparation for Migration 

The following guide includes two sections:

- [Single Replica MongoDB to Multi Replica MongoDB Migration](#single-replica-mongodb-to-multi-replica-mongodb-migration)
- [Cognigy.AI Kustomize to Helm Migration](#cognigyai-kustomize-to-helm-migration)

Cognigy.AI Helm Chart is not compatible with the legacy single-replica MongoDB (mongo-server) installation and is compatible with Cognigy [MongoDB Helm Chart](https://github.com/Cognigy/cognigy-mongodb-helm-chart) only. You can skip the first section if your installation already includes multi-replica MongoDB Helm Chart.

There are 2 migration scenarios considered below:
   
- Migration inside the existing cluster: Cognigy.AI and MongoDB Helm Charts are installed alongside the existing kustomize installation but in separate namespaces (`mongodb` and `cognigy-ai` namespaces). We recommend to follow this process as it significantly simplifies migration of existing storage.
- Migration to a new cluster: Cognigy.AI and MongoDB Helm Charts are installed in a new cluster. This scenario is more complex than the first one. You will either need to ensure that underlying storage for existing PVCs can be reattached to the new cluster or restore the data from snapshots in the new cluster.

Before starting migration, prepare following steps: 

- make sure backups (snapshots) for all PVCs are created in your Cloud Provider including: MongoDB, redis-persistent, flow-modules, functions
- make sure a backup of Cognigy secrets for kustomize installation is present
- (Single replica MongoDB to Multi replica MongoDB Migration only): prepare `values_prod.yaml` values file for MongoDB Helm Chart as described [here](https://github.com/Cognigy/cognigy-mongodb-helm-chart)
- prepare `values_prod.yaml` values file for Cognigy.AI Helm Chart as described [here](https://github.com/Cognigy/cognigy-ai-helm-chart). **Make sure all adjustments (patches) of the current kustomize installation done form your side are properly migrated to `values_prod.yaml` file!** i.e. ENV variables, resource request/limits, replica counts etc.
- prepare the script from [Rename MongoDB Databases](#rename-mongodb-databases) section, fill in required password values in advance.

## Single replica MongoDB to Multi replica MongoDB Migration

The migration process from a single replica to a  multi-replica setup with MongoDB Helm Chart involves several steps. These steps are described in the following section. In this guide we assume that the "old" MongoDB installation is deployed in `default` namespace, and we will install the "new" MongoDB ReplicaSet into the `mongodb` namespace. As stated above, we strongly recommend to perform migration inside the existing cluster as it simplifies data migration process. 

### Setting up Multi-Replica MongoDB Helm Chart

1. Set up a 3 replica MongoDB Helm Release following the [official guide](https://github.com/Cognigy/cognigy-mongodb-helm-chart) here.
2. **Important:** you will need to set the root password in the new setup to the same value as in the old one. You can find out the root password for the existing installation by executing the following command on the current Kubernetes cluster:
```
kubectl get secret -n default cognigy-mongo-server -ojsonpath='{.data.mongo-initdb-root-password}' | base64 --decode
```
Use this password as `auth.rootPassword` and `metrics.password` in the `values_prod.yaml` file for the new setup.

### Modifying MongoDB Connection String Secrets

To access MongoDB database, Cognigy.AI services use kubernetes secrets which contain a database connection string. The secrets must be adjusted for the new MongoDB setup. To automate this process, a script can be found in [this](https://github.com/Cognigy/cognigy-mongodb-helm-chart) repository. **Please make sure that all old secrets are stored in `secrets` folder before executing the script:**
```bash
git clone https://github.com/Cognigy/cognigy-mongodb-helm-chart.git
cd scripts
chmod +x secrets-migration.sh
./secrets-migration.sh
```
The script will ask for the current MongoDB connection string, i.e.:
```
mongo-server:27017
```
and for a replacement containing the new connection string, i.e:
```
mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-1.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-2.mongodb-headless.mongodb.svc.cluster.local:27017
```
execute the script: 
```bash
./secrets-migration.sh
Enter current MongoDB host: mongo-server:27017
Enter new MongoDB host(s): mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-1.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-2.mongodb-headless.mongodb.svc.cluster.local:27017
```
The script will store all relevant old secrets in a folder called `original_secrets` and the adjusted ones in a folder called `new_secrets`.

### MongoDB Data Migration

1. This step will require downtime of your Cognigy.AI installation. Before starting the MongoDB data migration, you need to scale down the Cognigy.AI installation deployments:
    ```bash
    for i in $(kubectl get deployment --namespace default --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}'|grep service-)
    do
    kubectl --namespace default scale --replicas=0 deployment $i
    done
    ```

2. Find out the primary node of the new mongoDB cluster by executing `rs.status()`:
    ```bash
    kubectl exec -it -n mongodb mongodb-0 bash
    mongo -u root -p $MONGODB_ROOT_PASSWORD --authenticationDatabase admin
    rs.status()
    ```
3. If you are setting up the Multi-replica MongoDB setup **on a different Kubernetes cluster**, then skip to step 5. If you are setting up the Multi-replica MongoDB setup **on the same Kubernetes cluster where single-replica MongoDB is running** then, connect to the primary MongoDB pod. For example if  `mongodb-0` is the primary node:
    ```bash
    kubectl exec -it mongodb-0 -n mongodb -- bash
    ```
4. After attaching to the primary pod of the multi-replica MongoDB setup, execute the following command to take a dump of an existing database and restore it in the multi-replica MongoDB:

    ```bash
    mongodump --archive --authenticationDatabase admin -u admin -p <password> --host "mongo-server.default.svc:27017" | mongorestore --host "mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017" --authenticationDatabase admin -u root -p <password> --archive --drop
    ```
5. If you are setting up the Multi-replica MongoDB setup **on a different Kubernetes cluster**, you have to dump the existing database to your local client filesystem and import it into the multi-replica setup afterwards. The time of this operation heavily depends on the size of your database and your internet connection speed. To speed up the process, you can execute the commands from a server running in the same datacenter where your kubernetes clusters run. In case you follow this scenario, we strongly recommend to test dump process in advance to evaluate the downtime duration:

    1.  To make a dump to the local file system, log in into the old single replica MongoDB pod:
    ```bash
    kubectl exec -it deployment/mongo-server -- bash
    mkdir -p ./tmp/backup
    mongodump --authenticationDatabase admin -u admin -p <password> --host "mongo-server.default.svc:27017" --out ./tmp/backup
    exit
    kubectl cp -n default <mongodb-pod-id>:/tmp/backup <path-to-the-local-directory>
    ```
    2. Import the data into multi-replica MongoDB cluster:
    ```bash
    kubectl cp -n mongodb <path-to-the-local-directory> mongodb-0:/tmp/
    kubectl exec -it mongodb-0 -n mongodb -- bash
    mongorestore --host "mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017" --authenticationDatabase admin -u root -p <password> ./tmp/<backup-folder>
    ```
   Here `mongodb-0` considered as the primary node, change it in case you have different primary node i.e. `mongodb-1` or `mongodb-2`.

6. Replace the existing secrets with new secrets:
    ```bash
    kubectl replace -f new_secrets
    ```
   In case of a rollback, the old secrets can be restored by executing:
    ```bash
    kubectl delete -f new_secrets
    kubectl apply -f original_secrets
    ```
7. Scale up all the deployments back to check if everything works as expected.
8. Move the secrets from `new_secrets` to `secrets` folder and delete `original_secrets` folder.

## Cognigy.AI Kustomize to Helm migration

This section describes the procedure to migrate Cognigy.AI from Kustomize to Helm.

### Secrets Migration
During migration Cognigy.AI product will be moved from `default` to a different namespace. In this document we consider `cognigy-ai` as target namespace, you can replace it with namespace of your choice, but we strongly recommend to use `cognigy-ai` namespace. Hence, it is required to migrate the existing secrets to the new namespace, and also to inform Helm release about the migrated secrets. To do so, execute the following steps:

1. The migration scripts can be found in [this](https://github.com/Cognigy/cognigy-ai-helm-chart) repository. Clone the repository and checkout to your current Cognigy.AI version:
```bash
git clone https://github.com/Cognigy/cognigy-ai-helm-chart.git
git checkout tags/<release>
cd scripts/kustomize-to-helm-migration-scripts
```
2. Place backup of existing secrets in `secrets` folder.
3. Copy the `secrets` folder into the `kustomize-to-helm-migration-scripts` folder 
4. Make sure that all the existing secrets are stored in `secrets` folder before running the script
5. Execute the script, it will generate new secrets for Helm installation in `migration-secrets` folder:
```bash
pip3 install -r requirements.txt
python3 secret-migration.py -ns cognigy-ai
```
6. Apply the secrets into the new `cognigy-ai` namespace:
```bash
kubectl create ns cognigy-ai
kubectl apply -f migration-secrets
```

### Rename MongoDB Databases
1. Scale down the current installation:
```
for i in $(kubectl get deployment --namespace default --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
do
    kubectl --namespace default scale --replicas=0 deployment $i
done
```
2. Rename the databases and create new users. In Cognigy.AI Helm Chart we have renamed `service-analytics-collector-provider` database to `service-analytics-collector` and `service-analytics-conversation-collector-provider` to `service-analytics-conversation`. To rename the databases, execute following script, fill in the password values in advance (see the comments inside the script). **Check the root username for MongoDB Helm installation (`root` or `admin`) and use that as <root_username> while migrating the databases**:
```bash
kubectl exec -it -n mongodb mongodb-0 bash

# rename the service-analytics-collector-provider, set admin root password in <password>
mongodump -u <root_username> -p <password> --authenticationDatabase admin --host "mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-1.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-2.mongodb-headless.mongodb.svc.cluster.local:27017" --archive --db=service-analytics-collector-provider | mongorestore -u admin -p <password> --authenticationDatabase admin --archive --nsFrom='service-analytics-collector-provider.*' --nsTo='service-analytics-collector.*'

# rename the service-analytics-conversation-collector-provider, set admin root password in <password>
mongodump -u <root_username> -p <password> --authenticationDatabase admin --host "mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-1.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-2.mongodb-headless.mongodb.svc.cluster.local:27017" --archive --db=service-analytics-conversation-collector-provider | mongorestore -u admin -p <password> --authenticationDatabase admin --archive --nsFrom='service-analytics-conversation-collector-provider.*' --nsTo='service-analytics-conversation.*'

# Create service-analytics-collector user in service-analytics-collector db
# Get the existing password from `cognigy-service-analytics-collector-provider` secret and put it into <password-service-analytics-collector>:
mongo -u <root_username> -p $MONGODB_ROOT_PASSWORD --authenticationDatabase admin
use service-analytics-collector
db.createUser({
	user: "service-analytics-collector",
	pwd: "<password-service-analytics-collector>",
	roles: [
		{ role: "readWrite", db: "service-analytics-collector" }
	]
});

# Create service-analytics-conversation user in service-analytics-conversation db
# Get the existing password from `cognigy-service-analytics-conversation-collector-provider` secret and put it into <password-service-analytics-conversation>:
use service-analytics-conversation
db.createUser({
	user: "service-analytics-conversation",
	pwd: "<password-service-analytics-conversation>",
	roles: [
		{ role: "readWrite", db: "service-analytics-conversation" }
	]
});

exit
exit
```
???+ attention "MongoDB Migration Script Compatibility"
    The script above is compatible with the [cognigy-mongodb-helm-chart](https://github.com/Cognigy/cognigy-mongodb-helm-chart) only! If you are using any other MongoDB service (for example, Mongodb Atlas), then you need to find out compatible commands for your database service to rename the databases.

### Migrate Persistent Volumes for Cognigy.AI

???+ attention "Persistent Volumes Migration Scenario"
    In this subsection we consider "Migration inside the existing cluster" scenario. For "Migration to a new cluster" scenario you will need to restore the data from snapshots of persistent volumes made in the old cluster. We do not provide any commands for the second case, as this process heavily depends on your cloud provider.  Please, refer to your infrastructure data backup and restore processes and to the documentation of your cloud provider. 

1. Create snapshots of existing Cognigy.AI PVCs: `flow-modules`, `functions`, `redis-persistent`
2. To avoid loss of PVs during the migration, set `Reclaim Policy` to `retain` for underlying PVs of 3 aforementioned PVCs and note down the corresponding PV names:
```bash
# get the PV names for PVs attached to flow-modules`, `functions`, `redis-persistent` PVCs of kustomize installation:
kubectl get pv 
# patch the reclaim policy for PV, set <pv-name> to the NAME from the previous command, repeat for all 3 PVCs:
kubectl patch pv <pv-name> -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
# check that reclaim policy has changed to Retain: 
kubectl get pv
```

3. Get the IDs of underlying Volumes (disks or files shares) for all 3 aforementioned PVs and note them down. You will need to use these IDs in the following steps. Note: the result of this operation depends on your cloud provider, refer to official Kubernetes documentation for supported [Volume Types](https://kubernetes.io/docs/concepts/storage/volumes/):
```bash
## Get details of the PVs, set <pv-name> to the NAME of PV attached flow-modules, functions and redis-persistent PVCs:
kubectl describe pv <pv-name> 
## Example for `flow modules` and `functions` PVs on AWS: 
Source:
Type:      NFS (an NFS mount that lasts the lifetime of a pod)
Server:    fs-000000000001a.efs.eu-central-1.amazonaws.com
## Example for `flow modules` and `functions` PVs on Azure: 
Source:
Type:             AzureFile (an Azure File Service mount on the host and bind mount to the pod)
SecretName:       azure-storage-account-000000000000000000001a-secret
SecretNamespace:  default
ShareName:        kubernetes-dynamic-pvc-0000001a-0000-0000-0000-00000000001a
## Example for `redis-persistent` PVs on AWS: 
Source:
Type:       AWSElasticBlockStore (a Persistent Disk resource in AWS)
VolumeID:   aws://eu-central-1a/vol-000000000001a
## Example for `redis-persistent` PVs on Azure:
Source:
Type:              CSI (a Container Storage Interface (CSI) volume source)
Driver:            disk.csi.azure.com
FSType:
VolumeHandle:      /subscriptions/00000000-0000-0000-0000-00000001a/resourceGroups/mc_your_cluster/providers/Microsoft.Compute/disks/pvc-00000000-0000-0000-0000-00000001a
```

4. (**AWS only**): Set the IDs of `flow-modules` and `functions` volumes obtained in the previous step in your `values_prod.yaml` for Cognigy.AI Helm Chart:
```yaml
# Example for AWS:
efs:
  flowModules:
    id: "fs-000000000001a"
  functions:
    id: "fs-000000000001b"
```
5. (**Traefik as reverse-proxy only**): If you use `Traefik` reverse-proxy shipped with Cognigy.AI 
installation by default, you need to execute following commands. You do not need to execute these commands if you use 3rd-party reverse-proxy:
```bash
kubectl annotate clusterrole traefik meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label clusterrole traefik app.kubernetes.io/managed-by=Helm
kubectl annotate clusterrolebindings traefik meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label clusterrolebindings traefik app.kubernetes.io/managed-by=Helm
kubectl annotate ingressclass traefik meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label ingressclass traefik app.kubernetes.io/managed-by=Helm
```

6. For "Migration inside the existing cluster" scenario, add annotations and labels to existing `flow-modules` and `functions` storage classes and related rolebindings  (AWS only):
```
## annotate `flow-modules` and `functions` StorageClasses
kubectl annotate storageclass flow-modules meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label storageclass flow-modules app.kubernetes.io/managed-by=Helm
kubectl annotate storageclass functions meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label storageclass functions app.kubernetes.io/managed-by=Helm

## AWS only: annotate related ClusterRoleBindings
kubectl annotate clusterrolebindings efs-provisioner-flow-modules meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label clusterrolebindings efs-provisioner-flow-modules app.kubernetes.io/managed-by=Helm
kubectl annotate clusterrolebindings efs-provisioner-functions meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label clusterrolebindings efs-provisioner-functions app.kubernetes.io/managed-by=Helm
```

7. Deploy Cognigy.AI Helm Chart with the prepared `values_prod.yaml`, refer to the original [docs](https://github.com/Cognigy/cognigy-ai-helm-chart) for details:
    1. Login into Cognigy Helm Registry (provide your Cognigy Container Registry credentials):
   ```bash
   helm registry login cognigy.azurecr.io \
   --username <your-username> \
   --password <your-password>
   ```
    2. Then deploy the Cognigy.AI Chart:
   ```bash
   helm upgrade --install --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version HELM_CHART_VERSION --values values_prod.yaml
   ```
8. Save backups of PVC manifests for kustomize and Helm installations:
```bash
kubectl get pvc -n=cognigy-ai redis-persistent -o yaml > redis-persistent-pvc.yaml
kubectl get pvc -n=cognigy-ai flow-modules -o yaml > flow-modules-pvc.yaml
kubectl get pvc -n=cognigy-ai functions -o yaml > functions-pvc.yaml
kubectl get pvc -n=default redis-persistent -o yaml > redis-persistent-pvc-kustomize.yaml
kubectl get pvc -n=default flow-modules -o yaml > flow-modules-pvc-kustomize.yaml
kubectl get pvc -n=default functions -o yaml > functions-pvc-kustomize.yaml
```

9. (**non-AWS cloud providers only**): Attach PVCs of `flow-modules`, `functions` and `redis-persistent` of Cognigy.AI Helm release to the existing PVs of kustomize installation:
```bash
## scale down the Cognigy.AI Helm Chart deployments 
for i in $(kubectl get deployment --namespace cognigy-ai --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
do
    kubectl --namespace cognigy-ai scale --replicas=0 deployment $i
done
## delete dynamically provisioned PVCs for flow-modules, functions and redis-persistent
kubectl delete pvc -n=cognigy-ai flow-modules 
kubectl delete pvc -n=cognigy-ai functions 
kubectl delete pvc -n=cognigy-ai redis-persistent  
kubectl delete pvc -n=default flow-modules 
kubectl delete pvc -n=default functions 
kubectl delete pvc -n=default redis-persistent  
## verify that dynamic PVCs are removed and that PVs from kustomize installation still exist
kubectl get pvc
kubectl get pvc -n=cognigy-ai
kubectl get pv
# edit PVs for `flow-modules`, `functions` and `redis-persistent` and remove `spec.claimRef:` section completely
kubectl edit pv <pv-name>
# check that PVs status has changed from `Released` to `Available`
kubectl get pv
# edit PVC manifests saved in step 7 for all 3 PVCs and change `spec.volumeName` to the name of the respective PVs from step 2
vi redis-persistent-pvc.yaml
vi flow-modules-pvc.yaml
vi functions-pvc.yaml
# apply modified PVCs to the cluster
kubectl apply -f redis-persistent-pvc.yaml
kubectl apply -f flow-modules-pvc.yaml
kubectl apply -f functions-pvc.yaml
# check that status of PVs and PVCs has changed to Bound:
kubectl get pv
kubectl get pvc -n=cognigy-ai
```

10. (**AWS only**): Attach `redis-persistent` PVC of Cognigy.AI Helm release to the existing PVs of kustomize installation:
```bash
## scale down the Cognigy.AI Helm Chart deployments 
for i in $(kubectl get deployment --namespace cognigy-ai --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
do
    kubectl --namespace cognigy-ai scale --replicas=0 deployment $i
done
## delete dynamically provisioned PVCs for redis-persistent:
kubectl delete pvc -n=cognigy-ai redis-persistent  
kubectl delete pvc -n=default redis-persistent  
## verify that the dynamic PVC is removed and that the PV from kustomize installation still exist:
kubectl get pvc
kubectl get pvc -n=cognigy-ai
kubectl get pv
# edit PV for `redis-persistent` and remove `spec.claimRef:` section completely:
kubectl edit pv <pv-name>
# if you migrate the installation to a new cluster change spec.awsElasticBlockStore.volumeID to the volumeID obtained in step 3, e.g.: `aws://eu-central-1a/vol-000000000001a`
# check that PVs status has changed from `Released` to `Available`
kubectl get pv
# edit the PVC manifests saved in step 7 for and change `spec.volumeName` to the name of the respective PV for redis-persistent from the step 2
vi redis-persistent-pvc.yaml
# apply the modified PVC to the cluster
kubectl apply -f redis-persistent-pvc.yaml
# check that status of PV/PVC has changed to Bound:
kubectl get pv
kubectl get pvc -n=cognigy-ai
```
11. Bring back the deployments of Cognigy.AI Helm Release:
```bash
helm upgrade --install --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version HELM_CHART_VERSION --values values_prod.yaml
```
12. Verify that all deployments are in ready state: 
```bash
kubectl get deployments -n=cognigy-ai
```
13. (**Traefik as reverse-proxy only**): In case `EXTERNAL-IP` for `traefik` service of type `LoadBalancer` changes, update the DNS records to point to the new `EXTERNAL-IP` of `traefik` Service. If you're using Traefik Ingress with AWS Classic Load Balancer, change the CNAME of the DNS entries to the new `EXTERNAL-IP`. Check the new external IP/CNAME record with:
```bash
kubectl get service -n=cognigy-ai traefik
```

## Rollback
in case Cognigy.AI Helm release does not function properly and rollback is required, perform following steps:

1. Scale down the Cognigy.AI Helm Release deployments
```bash
 
for i in $(kubectl get deployment --namespace cognigy-ai --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
do
    kubectl --namespace cognigy-ai scale --replicas=0 deployment $i
done
```
2. Delete PVCs for Helm Release:
```
kubectl delete pvc -n=cognigy-ai flow-modules 
kubectl delete pvc -n=cognigy-ai functions 
kubectl delete pvc -n=cognigy-ai redis-persistent  
```
3. restore PVCs for kustomize installation:
```
kubectl apply -f redis-persistent-pvc-kustomize.yaml
kubectl apply -f flow-modules-pvc-kustomize.yaml
kubectl apply -f functions-pvc-kustomize.yaml
```
4. Bring back kustomize installation:
```
cd kubernetes/core/<environment>/product
kubectl apply -k ./
```
5. After Cognigy.AI kustomize installation is up and running you can clean up Helm release by completely removing `cognigy-ai` namespace ( the namespace of Helm release):
```
kubectl delete namespace cognigy-ai
```

## Clean-up
After Cognigy.AI Helm release is up and running properly you can clean up the kustomize installation, for this execute following steps: 

1. Drop old databases in MongoDB (set `MONGODB_ROOT_USER` to `root` or `admin` in accordance with `values_prod.yaml` in MongoDB Helm Chart):
```bash
kubectl exec -it -n mongodb mongodb-0 -- bash
mongo -u $MONGODB_ROOT_USER -p $MONGODB_ROOT_PASSWORD --authenticationDatabase admin

# Drop service-analytics-collector-provider
use service-analytics-collector-provider
db.dropDatabase()

# Drop service-analytics-conversation-collector-provider
use service-analytics-conversation-collector-provider
db.dropDatabase()
```

2. Delete the kustomize deployments running in `default` namespace:
```bash
for i in $(kubectl get deployment --namespace default --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')             
do
    kubectl --namespace default delete deployment $i
done
```

3. Delete the services in `default` namespace:
```bash
for i in $(kubectl get service --namespace default --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}' | grep service-)
do
    kubectl --namespace default delete service $i
done
# delete rabbitmq, redis, redis-persistent and traefik
kubectl --namespace default delete svc rabbitmq redis redis-persistent traefik
```
**Be very careful while deleting service, do not delete the `kubernetes` service**

4. Delete the ingresses in `default` namespace:
```bash
for i in $(kubectl get ingress --namespace default --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
do
    kubectl delete ingress $i --namespace default
done
```

5. Delete PVCs from `default` namespace (if still present): 
```bash
kubectl delete pvc -n=default flow-modules
kubectl delete pvc -n=default functions
kubectl delete pvc -n=default redis-persistent
```

6. (Optionally): Delete PVC for single replica MongoDB setup in case of single-replica to multi-replica MongoDB migration:
```bash
kubectl delete pvc mongodb -n default
```




