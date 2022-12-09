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
- Using multi replica mongoDB Helm chart, check [the migration guide](https://docs.cognigy.com/ai/installation/single-replica-mongoDB-to-multi-replica-mongoDB-migration/) if required
- **Cognigy.AI kustomize installation must be at the same version as Cognigy.AI Helm Chart during migration**
- Cognigy.AI kustomize installation must be >= v4.38
- Snapshots/Backups of all PVCs/PVs (MongoDB, Redis-Persistent, flow-modules, flow-functions) are made before the migration starts

## Preparation for Migration 

Cognigy.AI Helm Chart is not compatible with the legacy single-replica MongoDB (mongo-server) installation and is compatible with Cognigy [MongoDB Helm Chart](https://github.com/Cognigy/cognigy-mongodb-helm-chart) only. You can follow [the migration guide](https://docs.cognigy.com/ai/installation/single-replica-mongoDB-to-multi-replica-mongoDB-migration/) if you have not migrated to multi-replica mongodb yet. 

There are 2 migration scenarios considered here:
   
- Migration inside the existing cluster: Cognigy.AI Helm chart in `cognigy-ai` namespace and MongoDB Helm Chart in `mongodb` namespace are installed alongside the existing kustomize installation. **We recommend following this process as it significantly simplifies migration of existing storage**.
- Migration to a new cluster: Cognigy.AI and MongoDB Helm Charts are installed in a new cluster. This scenario is more complex than the first one. You will either need to ensure that underlying storage for existing PVCs can be reattached to the new cluster or restore the data from snapshots in the new cluster.

Before starting migration, prepare following steps: 

- make sure backups (snapshots) for all PVCs are created in your Cloud Provider including: MongoDB, redis-persistent, flow-modules, functions
- make sure a backup of Cognigy secrets for kustomize installation is present
- prepare `values_prod.yaml` values file for Cognigy.AI Helm Chart as described [here](https://github.com/Cognigy/cognigy-ai-helm-chart). **Make sure all adjustments (patches) of the current kustomize installation done form your side are properly migrated to `values_prod.yaml` file!** i.e. ENV variables, resource request/limits, replica counts etc.
- prepare the script from [Rename MongoDB Databases](#rename-mongodb-databases) section, fill in required password values in advance.

## Cognigy.AI Kustomize to Helm migration

This section describes the procedure to migrate Cognigy.AI from Kustomize to Helm. There are several steps which can be done beforehand, which mean before bring down the cognigy-ai. The steps are following

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
### Prepare storage migration

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
3. Get the PVs IDs and note it down
```bash
kubectl get pv | grep -E 'redis-persistent|flow-modules|functions'
for i in $(kubectl get pv | grep -E 'redis-persistent|flow-modules|functions' | awk '{print $1}')
do
echo $i
done
```
4. (**AWS only**): Get the IDs of underlying Volumes (EFS files shares) for all 2 aforementioned PVs and note them down. You will need to use these IDs in the following steps. 
```bash
## Get details of the PVs, set <pv-name> to the NAME of PV attached flow-modules, functions and redis-persistent PVCs:
kubectl describe pv <pv-name> 
## Example for `flow modules` and `functions` PVs on AWS: 
Source:
Type:      NFS (an NFS mount that lasts the lifetime of a pod)
Server:    fs-000000000001a.efs.eu-central-1.amazonaws.com
```

5. (**AWS only**): Set the IDs of `flow-modules` and `functions` volumes obtained in the previous step in your `values_prod.yaml` for Cognigy.AI Helm Chart:
```yaml
# Example for AWS:
efs:
  flowModules:
    id: "fs-000000000001a"
  functions:
    id: "fs-000000000001b"
```
6. (**AWS only**): For "Migration inside the existing cluster" scenario, add annotations and labels to existing `flow-modules` and `functions` storage classes and related rolebindings 
```bash
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
7. Save backups of PVC manifests for kustomize and Helm installations:
```bash
kubectl get pvc -n=default redis-persistent -o yaml > redis-persistent-pvc-kustomize.yaml
kubectl get pvc -n=default flow-modules -o yaml > flow-modules-pvc-kustomize.yaml
kubectl get pvc -n=default functions -o yaml > functions-pvc-kustomize.yaml
```
Create another copy of PVC manifests which will be modified in next step

    ```bash
    kubectl get pvc -n=default redis-persistent -o yaml > redis-persistent-pvc.yaml
    kubectl get pvc -n=default flow-modules -o yaml > flow-modules-pvc.yaml
    kubectl get pvc -n=default functions -o yaml > functions-pvc.yaml
    ```
8. Edit PVC manifests saved in step 7 for all 3 PVCs and change `metadata.namespace` to `cognigy-ai`. Also add `meta.helm.sh/release-name: cognigy-ai` and `meta.helm.sh/release-namespace: cognigy-ai` under `metadata.annotations`. Also add `app.kubernetes.io/managed-by: Helm` under `metadata.labels`. **Beside that make sure `spec.volumeName` to the name of the respective PVs from step 2**.

### Prepare Traefik

If you use `Traefik` reverse-proxy shipped with Cognigy.AI installation by default, you need to execute following commands. You do not need to execute these commands if you use 3rd-party reverse-proxy:
```bash
kubectl annotate clusterrole traefik meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label clusterrole traefik app.kubernetes.io/managed-by=Helm
kubectl annotate clusterrolebindings traefik meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label clusterrolebindings traefik app.kubernetes.io/managed-by=Helm
kubectl annotate ingressclass traefik meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label ingressclass traefik app.kubernetes.io/managed-by=Helm
```
From here on all the steps need to be executed during downtime. 

### Rename MongoDB Databases
1. Scale down the current installation:
```bash
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

Attach PVCs of `flow-modules`, `functions` and `redis-persistent` of Cognigy.AI Helm release to the existing PVs of kustomize installation:
```bash
## delete dynamically provisioned PVCs for flow-modules, functions and redis-persistent during kustomization deployment
kubectl delete pvc -n=default flow-modules 
kubectl delete pvc -n=default functions 
kubectl delete pvc -n=default redis-persistent  
## verify that dynamic PVCs are removed and that PVs from kustomize installation still exist
kubectl get pvc
kubectl get pvc -n=cognigy-ai
kubectl get pv
# edit PVs for `flow-modules`, `functions` and `redis-persistent` and remove `spec.claimRef:` section completely
kubectl patch pv <pv-name> -p '{"spec":{"claimRef": null}}' 
# check that PVs status has changed from `Released` to `Available`
kubectl get pv
```

After that deploy the PVCs file which has been modified in [Prepare storage migration](#prepare-storage-migration) section

```bash
# apply modified PVCs to the cluster
kubectl apply -f redis-persistent-pvc.yaml
kubectl apply -f flow-modules-pvc.yaml
kubectl apply -f functions-pvc.yaml
# check that status of PVs and PVCs has changed to Bound:
kubectl get pv
kubectl get pvc -n=cognigy-ai
```
### Migrate Cognigy-ai
to migrate the cognigy-ai follow the below steps

1. Bring back the deployments of Cognigy.AI Helm Release:

```bash

helm registry login cognigy.azurecr.io \
--username <your-username> \
--password <your-password>

helm upgrade --install --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version HELM_CHART_VERSION --values values_prod.yaml
```
2. Verify that all deployments are in ready state: 
```bash

kubectl get deployments -n=cognigy-ai
```
3. (**Traefik as reverse-proxy only**): In case `EXTERNAL-IP` for `traefik` service of type `LoadBalancer` changes, update the DNS records to point to the new `EXTERNAL-IP` of `traefik` Service. If you're using Traefik Ingress with AWS Classic Load Balancer, change the CNAME of the DNS entries to the new `EXTERNAL-IP`. Check the new external IP/CNAME record with:
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




