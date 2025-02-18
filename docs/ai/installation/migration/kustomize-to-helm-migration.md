---
title: "Kustomize to Helm"
slug: "kustomize-to-helm-migration"
hidden: false
ignore_macros: true
---

# Kustomize to Helm 

## Prerequisites

- Kubernetes v1.21 - 1.23.
- Kubectl utility installed locally on Linux or macOS client host. The following guide does not support Windows client hosts.
- [Helm](https://helm.sh/) v3.8+ installed on the client host.
- [Yq](https://github.com/mikefarah/yq/) installed on the client host.
- Kubernetes cluster meets general Cognigy.AI [prerequisites](https://docs.cognigy.com/ai/installation/prerequisites/#whitelisting-of-domains), including hardware resources.
- Backup of Cognigy secrets for Kustomize installation (MongoDB and Redis connection strings) exists in the form of Kubernetes manifests.
- [Multi-replica MongoDB Helm Chart](https://github.com/Cognigy/cognigy-mongodb-helm-chart) is used. Cognigy.AI Helm Chart is incompatible with the single-replica MongoDB (mongo-server) installation. If you have not migrated from single to multi-replica, follow [migration guide](single-replica-mongoDB-to-multi-replica-mongoDB-migration.md). 
- Cognigy.AI Kustomize installation must be the same version as Cognigy.AI Helm Chart during migration.
- Cognigy.AI Kustomize installation must be >= v4.38.
- Snapshots/Backups of all PVCs/PVs (MongoDB, Redis-Persistent, flow-modules, flow-functions) are made before the migration starts.

## Migration Checklist 

There are 2 migration scenarios considered here:
   
- **Migration inside the existing cluster.** Cognigy.AI Helm Chart in the `cognigy-ai` namespace and MongoDB Helm Chart in the `mongodb` namespace are installed alongside the existing Kustomize installation. We strongly recommend this scenario as this process significantly simplifies the migration of the existing storage.
- **Migration to a new cluster.** Cognigy.AI and MongoDB Helm Charts are installed in a new cluster. This scenario is more complex than the first one. You will either need to ensure that underlying storage for existing PVCs can be reattached to the new cluster or restore the data from snapshots in the new cluster.

Before starting migration, do the following steps: 

- Make sure backups (snapshots) for all PVCs are created in your Cloud Provider, including MongoDB, redis-persistent, flow-modules, and functions.
- Make sure a backup of Cognigy secrets for Kustomize installation is present.
- Prepare `values_prod.yaml` values file for Cognigy.AI Helm Chart as described [here](https://github.com/Cognigy/cognigy-ai-helm-chart). Ensure that all adjustments (patches) of the current Kustomize installation done form your side are properly migrated to `values_prod.yaml` file: ENV variables, resource request/limits, replica counts, etc.
- Prepare the script from [Rename MongoDB Databases](#rename-mongodb-databases) section, fill in the required password values in advance.

## Preparation for Migration

This section describes the procedure to prepare the migration of Cognigy.AI from Kustomize to Helm. These steps can be performed in advance and without bringing your Cognigy.AI installation down.

### Secrets

During migration, Cognigy.AI product will be moved from `default` to a different namespace. In this document, we consider `cognigy-ai` as a target namespace, you can replace it with a namespace of your choice, but we strongly recommend using the `cognigy-ai` namespace. Hence, it is required to migrate the existing secrets to the new namespace and inform Helm release about the migrated secrets. To do so, execute the following steps:

1. The migration scripts can be found in [this](https://github.com/Cognigy/cognigy-ai-helm-chart) repository. Clone the repository and checkout to your current Cognigy.AI version:
    ```bash
    git clone https://github.com/Cognigy/cognigy-ai-helm-chart.git
    git checkout tags/<release>
    cd scripts/kustomize-to-helm-migration-scripts
    ```
2. Place a backup of existing secrets in the `secrets` folder.
3. Copy the `secrets` folder into the `kustomize-to-helm-migration-scripts` folder 
4. Make sure that all the existing secrets are stored in the `secrets` folder before running the script.
5. Execute the script, it will generate new secrets for the Helm installation in the `migration-secrets` folder:
    ```bash
    pip3 install -r requirements.txt
    python3 secret-migration.py -ns cognigy-ai
    ```
6. Apply the secrets into a new `cognigy-ai` namespace:
    ```bash
    kubectl create ns cognigy-ai
    kubectl apply -f migration-secrets
    ```
### Persistent Volumes

This subsection describes the migration of persistent volumes for AWS (EBS and EFS with efs-provisioner) and AZURE (Azure disk and Azure files). If your Cognigy.AI is deployed on a different cloud provider, you need to adapt the migration steps accordingly.

This subsection considers the **Migration inside the existing cluster** scenario. For the **Migration to a new cluster** scenario, you need to restore the data from snapshots of persistent volumes made in the old cluster. We do not provide any commands for the second case, as this process heavily depends on your cloud provider setup. Refer to your infrastructure data backup and restore processes and your cloud provider's documentation.

1. Create snapshots of existing Cognigy.AI PVCs: `flow-modules`, `functions`, `redis-persistent`
2. To avoid loss of PVs during the migration, set `Reclaim Policy` to `retain` for underlying PVs of 3 PVCs mentioned above and note down the corresponding PV names:
    ```bash
    # get the PV names for PVs attached to flow-modules`, `functions`, `redis-persistent` PVCs of Kustomize installation:
    kubectl get pv 
    # patch the reclaim policy for PV, set <pv-name> to the NAME from the previous command, repeat for all 3 PVCs:
    kubectl patch pv <pv-name> -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
    # check that reclaim policy has changed to Retain: 
    kubectl get pv
    ```
3. Get the PVs IDs and note them down:
    ```bash
    kubectl get pv | grep -E 'redis-persistent|flow-modules|functions'
    for i in $(kubectl get pv | grep -E 'redis-persistent|flow-modules|functions' | awk '{print $1}')
    do
    echo $i
    done
    ```
4. *(AWS only)* Get the IDs of underlying Volumes (EFS files shares) for all 2 PVs mentioned above and note them down. You will need to use these IDs in the following steps: 
    ```bash
    ## Get details of the PVs, set <pv-name> to the NAME of PV attached flow-modules, functions, and redis-persistent PVCs:
    kubectl describe pv <pv-name> 
    ## Example for `flow modules` and `functions` PVs on AWS: 
    Source:
    Type:      NFS (an NFS mount that lasts the lifetime of a pod)
    Server:    fs-000000000001a.efs.eu-central-1.amazonaws.com
    ```

5. *(AWS only)*: Set the IDs of `flow-modules` and `functions` volumes obtained in the previous step in your `values_prod.yaml` for Cognigy.AI Helm Chart:
    ```yaml
    # Example for AWS:
    efs:
      flowModules:
        id: "fs-000000000001a"
      functions:
        id: "fs-000000000001b"
    ```
6. *(AWS only)*: For the **Migration inside the existing cluster** scenario, add annotations and labels to existing `flow-modules` and `functions` storage classes and related role bindings:
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
7. Save backups of PVC manifests for Kustomize and Helm installations:
    ```bash
    kubectl get pvc -n=default redis-persistent -o yaml > redis-persistent-pvc-kustomize.yaml
    kubectl get pvc -n=default flow-modules -o yaml > flow-modules-pvc-kustomize.yaml
    kubectl get pvc -n=default functions -o yaml > functions-pvc-kustomize.yaml
    ```
8. Create another copy of PVC manifests, which will be modified in the next step:
    ```bash
    kubectl get pvc -n=default redis-persistent -o yaml > redis-persistent-pvc.yaml
    kubectl get pvc -n=default flow-modules -o yaml > flow-modules-pvc.yaml
    kubectl get pvc -n=default functions -o yaml > functions-pvc.yaml
    ```
9. Remove unnecessary fields from PVC:
    ```bash
    for i in redis-persistent-pvc flow-modules-pvc functions-pvc
    do
        yq -i 'del(.metadata.annotations, .metadata.finalizers, .metadata.labels,  .metadata.creationTimestamp, .metadata.resourceVersion, .metadata.uid, .status)' $i.yaml
    done
    ```
10. Edit PVC manifests saved in Step 8 for all 3 PVCs in the following way:

1. Change `metadata.namespace` to `cognigy-ai`. 
2. Add `meta.helm.sh/release-name: cognigy-ai` and `meta.helm.sh/release-namespace: cognigy-ai` under `metadata.annotations`. 
3. Add `app.kubernetes.io/managed-by: Helm` under `metadata.labels`.
4. Change `spec.volumeName` to the name of the respective PVs from Step 2.

### Traefik

If you use the `Traefik` reverse-proxy shipped with Cognigy.AI installation by default, you need to execute the following commands. You do not need to execute these commands if you use a 3rd-party reverse-proxy:
```bash
kubectl annotate clusterrole traefik meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label clusterrole traefik app.kubernetes.io/managed-by=Helm
kubectl annotate clusterrolebindings traefik meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label clusterrolebindings traefik app.kubernetes.io/managed-by=Helm
kubectl annotate ingressclass traefik meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label ingressclass traefik app.kubernetes.io/managed-by=Helm
```

## Migration 

This section describes the actual migration of Cognigy.AI from Kustomize to Helm. The migration will require downtime of your Cognigy.AI installation. Plan a maintenance window for at least 2 hours accordingly. 

### Rename MongoDB Databases
1. Scale down the current installation:
```bash
for i in $(kubectl get deployment --namespace default --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
do
    kubectl --namespace default scale --replicas=0 deployment $i
done
```
1. Rename the databases and create new users. In Cognigy.AI Helm Chart, we have renamed `service-analytics-collector-provider` database to `service-analytics-collector` and `service-analytics-conversation-collector-provider` to `service-analytics-conversation`. To rename the databases, execute the following script, fill in the password values in advance (see the comments inside the script). Check the root username for MongoDB Helm installation (`root` or `admin`) and use that as <root_username> while migrating the databases.

!!! warning "MongoDB Migration Script Compatibility"
    The script below is compatible with the [cognigy-mongodb-helm-chart](https://github.com/Cognigy/cognigy-mongodb-helm-chart) only. If you are using any other MongoDB service (for example, MongoDB Atlas), you need to find compatible commands for your database service to rename the databases.

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

### Migrate Persistent Volumes for Cognigy.AI

1. Attach PVCs of `flow-modules`, `functions` and `redis-persistent` of Cognigy.AI Helm release to the existing PVs of Kustomize installation:
    ```bash
    ## delete dynamically provisioned PVCs for flow-modules, functions and redis-persistent during Kustomization deployment
    kubectl delete pvc -n=default flow-modules 
    kubectl delete pvc -n=default functions 
    kubectl delete pvc -n=default redis-persistent  
    ## verify that dynamic PVCs are removed and that PVs from Kustomize installation still exist
    kubectl get pvc
    kubectl get pvc -n=cognigy-ai
    kubectl get pv
    # edit PVs for `flow-modules`, `functions` and `redis-persistent` and remove `spec.claimRef:` section completely
    kubectl patch pv <pv-name> -p '{"spec":{"claimRef": null}}' 
    # check that PVs status has changed from `Released` to `Available`
    kubectl get pv
    ```

2. Deploy the PVCs manifests, which have been modified in [Prepare Persistent Volumes](#persistent-volumes) section.

    ```bash
    # apply modified PVCs to the cluster
    kubectl apply -f redis-persistent-pvc.yaml
    kubectl apply -f flow-modules-pvc.yaml
    kubectl apply -f functions-pvc.yaml
    # check that status of PVs and PVCs has changed to Bound:
    kubectl get pv
    kubectl get pvc -n=cognigy-ai
    ```
### Migrate Cognigy.AI from Kustomize to Helm

Perform the following steps for Cognigy.AI migration:

1. Bring back the deployments of Cognigy.AI Helm Release:

    ```bash
    helm registry login cognigy.azurecr.io \
    --username <your-username> \
    --password <your-password>
    
    helm upgrade --install --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version HELM_CHART_VERSION --values values_prod.yaml
    ```
2. Verify that all deployments are in a ready state: 
    ```bash
    kubectl get deployments -n=cognigy-ai
    ```
3. *(Traefik as reverse-proxy only)* In case `EXTERNAL-IP` for `traefik` service of type `LoadBalancer` changes, update the DNS records to point to the new `EXTERNAL-IP` of `traefik` Service. If you're using Traefik Ingress with AWS Classic Load Balancer, change the CNAME of the DNS entries to the new `EXTERNAL-IP`. Check the new external IP/CNAME record with:
    ```bash
    kubectl get service -n=cognigy-ai traefik
    ```

## Rollback

In case Cognigy.AI Helm release does not function properly, and rollback is required, perform the following steps:

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
3. Restore PVCs for Kustomize installation:
    ```
    kubectl apply -f redis-persistent-pvc-kustomize.yaml
    kubectl apply -f flow-modules-pvc-kustomize.yaml
    kubectl apply -f functions-pvc-kustomize.yaml
    ```
4. Bring back Kustomize installation:
    ```
    cd kubernetes/core/<environment>/product
    kubectl apply -k ./
    ```
5. After Cognigy.AI Kustomize installation is up and running, you can clean up the Helm release by completely removing `cognigy-ai` namespace (the namespace of Helm release):
    ```
    kubectl delete namespace cognigy-ai
    ```

## Clean-up

After Cognigy.AI Helm release is up and running properly, you can clean up the Kustomize installation, for this execute the following steps: 

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

2. Delete the Kustomize deployments running in the `default` namespace:
```bash
for i in $(kubectl get deployment --namespace default --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')             
do
    kubectl --namespace default delete deployment $i
done
```

3. Delete the services in the `default` namespace:
```bash
for i in $(kubectl get service --namespace default --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}' | grep service-)
do
    kubectl --namespace default delete service $i
done
# delete rabbitmq, redis, redis-persistent, and traefik
kubectl --namespace default delete svc rabbitmq redis redis-persistent traefik
```
**Be careful while deleting service, do not delete the `kubernetes` service.**

4. Delete the ingresses in the `default` namespace:
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

6. *(Optional)* Delete PVC for single replica MongoDB setup in case of single-replica to multi-replica MongoDB migration:
```bash
kubectl delete pvc mongodb -n default
```




