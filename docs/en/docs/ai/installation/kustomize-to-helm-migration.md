---
title: "Cognigy.AI Kustomize-to-Helm Migration Guide"
slug: "kustomize-to-helm-migration"
hidden: false
ignore_macros: true
---

# Cognigy.AI Kustomize-to-Helm Migration Guide

## Prerequisites

- Kubernetes v1.21 - 1.23
- Kubectl utility installed locally on Linux or MacOS. Windows client hosts are not supported by the following guide.
- Helm version 3.8.x
- Kubernetes cluster meets general Cognigy.AI [prerequisites](https://docs.cognigy.com/ai/installation/prerequisites/#whitelisting-of-domains) **including hardware resources**
- Backup of Cognigy secrets for kustomize installation (MongoDB and Redis connection strings) exists in a form of kubernetes manifests
- **Cognigy.AI kustomize installation must be at the same version as Cognigy.AI Helm Chart during migration**
- Cognigy.AI kustomize installation must be >= v4.32
- Snapshots/Backups of all PVCs/PVs (MongoDB, Redis-Persistent, flow-modules, flow-functions) are made before the migration starts

## Preparation for Migration 

The following guide includes two sections:

- [Single Replica MongoDB to Multi Replica MongoDB Migration](#single-replica-mongodb-to-multi-replica-mongodb-migration)
- [Cognigy.AI Kustomize to Helm Migration](#cognigyai-kustomize-to-helm-migration)

Cognigy.AI Helm Chart is not compatible with the legacy single-replica MongoDB installation and is compatible with Cognigy's [MongoDB Helm Chart](https://github.com/Cognigy/cognigy-mongodb-helm-chart) only. You can skip the first section if you already have multi-replica MongoDB installed with our MongoDB Helm Chart.

Before starting migration, prepare following steps: 

- make sure backups (snapshots) for all PVCs are created in your Cloud Provider including: MongoDB, redis-persistent, flow-modules, functions
- make sure a backup of Cognigy secrets for kustomize installation is present
- (Single replica MongoDB to Multi replica MongoDB Migration only): prepare `values_prod.yaml` values file for MongoDB Helm Chart as described [here](https://github.com/Cognigy/cognigy-mongodb-helm-chart)
- prepare `values_prod.yaml` values file for Cognigy.AI Helm Chart as described [here](https://github.com/Cognigy/cognigy-ai-helm-chart). **Make sure all adjustments (patches) of the current kustomize installation done form your side are properly migrated to `values_prod.yaml` file!** i.e. ENV variables, resource request/limits, replica counts etc.
- prepare the script from [Kustomize to Helm Migration](#kustomize-to-helm-migration) section, fill in required password values in advance.

## Single replica MongoDB to Multi replica MongoDB Migration

The migration process from a single replica to a  multi-replica setup involves several steps. These are described in the following section. In this guide 
we assume that the "old" MongoDB installation is deployed in `default` namespace and we will install the "new" MongoDB ReplicaSet into the `mongodb` namespace .

### Setting up Multi-Replica MongoDB Helm Chart

1. Set up the 3 replica MongoDB cluster following the [official guide](https://github.com/Cognigy/cognigy-mongodb-helm-chart) here.
2. **Important:** you will need to set the root password in the new setup to the same value as in the old one. You can find out the root password for the existing installation by executing the following command on the current Kubernetes cluster:
```
kubectl get secret -n default cognigy-mongo-server -ojsonpath='{.data.mongo-initdb-root-password}' | base64 --decode
```
Use this password as `auth.rootPassword` in the `values` file for the new setup.

### Modifying MongoDB Connection String Secrets

To access MongoDB database, Cognigy.AI services use specific secrets which contain a database connection string. The secrets must be adjusted for the new MongoDB setup. To automate this process, a script can be found in [this](https://github.com/Cognigy/cognigy-mongodb-helm-chart) repository. **Please make sure that all the old secrets are stored in `secrets` folder before executing the script:**
```bash
git clone https://github.com/Cognigy/cognigy-mongodb-helm-chart.git
cd scripts
chmod +x secrets-migration.sh
./secrets-migration.sh
```
The script will ask for the old MongoDB connection string, i.e.: `mongo-server:27017` and for a replacement containing the new connection string, i.e.: `mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-1.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-2.mongodb-headless.mongodb.svc.cluster.local:27017`.

```bash
./secrets-migration.sh
Enter current MongoDB host: mongo-server:27017
Enter new MongoDB host(s): mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-1.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-2.mongodb-headless.mongodb.svc.cluster.local:27017
```

The script will store all relevant old secrets in a folder called `original_secrets` and the adjusted ones in a folder called `new_secrets`.

### MongoDB Data Migration

1. Before starting the MongoDB data migration, you need to scale down the cognigy-ai installation:
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
3. To migrate the actual data, connect to the primary MongoDB pod. For example if  `mongodb-0` is the primary node:
    ```bash
    kubectl exec -it mongodb-0 -n mongodb -- bash
    ```
4. If you are setting up the Multi-replica MongoDB setup **on the same Kubernetes cluster where single-replica MongoDB is running** then, after attaching to the primary pod of the multi-replica  MongoDB setup, execute the following command to take a dump of an existing database and restore it in the multi-replica MongoDB:

    ```bash
    mongodump --archive --authenticationDatabase admin -u admin -p <password> --host "mongo-server.default.svc:27017" | mongorestore --host "mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017" --authenticationDatabase admin -u root -p <password> --archive --drop
    ```
5. If you are setting up the Multi-replica MongoDB setup **on a different Kubernetes cluster**, then you need to skip steps 3 and 4. You have to dump the existing database to a local filesystem and import it into the multi-replica setup afterwards. The time of this operation heavily depends on the size of your database and your internet connection speed. To speed up the process, you can execute the commands from a server running in the same datacenter where your k8 cluster runs:

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
   Here `mongodb-0` considered as the primary node, change it in case you have different primary node(i.e. `mongodb-1` or `mongodb-2`)

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
During migration Cognigy.AI product will be moved from `default` to a different namespace. In this document we consider `cognigy-ai` as target namespace, you can replace it with namespace of your choice, but we strongly recommend to use `cognigy-ai` namespace. Hence, it is required to migrate the existing secrets to the new namespace, and also we need to inform Helm about the migrated secrets. To do so, execute the following steps:

1. Download [migration scripts](https://docs.cognigy.com/downloads/kustomize-to-helm-migration-scripts.zip)
2. Unzip the `kustomize-to-helm-migration-scripts.zip` folder.
3. Place backup of existing secrets in `secrets` folder.
4. Make sure that all the existing secrets are stored in `secrets` folder before running the script
5. Copy `secret-migration.py` to the same folder where `secrets` folder is located
6. Execute the script, the script will generate new secrets for Helm installation in `migration-secrets` folder:
```bash
pip3 install -r kustomize-to-helm-migration-scripts/secret-migration/requirements.txt 
python3 secret-migration.py -ns cognigy-ai
```
7. Apply the secrets into the new `cognigy-ai` namespace:
```bash
kubectl create ns cognigy-ai
kubectl apply -f migration-secrets
```

### Kustomize to Helm Migration

1. Scale down the current installation:
```
for i in $(kubectl get deployment --namespace default --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
do
    kubectl --namespace default scale replicas=0 deployment $i
done
```
2. Rename the databases and create new users. In Cognigy.AI Helm Chart we have renamed `service-analytics-collector-provider` database to `service-analytics-collector` and `service-analytics-conversation-collector-provider` to `service-analytics-conversation`. To rename the databases, execute following script, fill in the password values in advance (see the comments inside the script):
```bash
kubectl exec -it -n mongodb mongodb-0 bash

# rename the service-analytics-collector-provider, set admin root password in <password>
mongodump -u admin -p <password> --authenticationDatabase admin --host "mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-1.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-2.mongodb-headless.mongodb.svc.cluster.local:27017" --archive --db=service-analytics-collector-provider | mongorestore -u admin -p <password> --authenticationDatabase admin --archive --nsFrom='service-analytics-collector-provider.*' --nsTo='service-analytics-collector.*'

# rename the service-analytics-conversation-collector-provider, set admin root password in <password>
mongodump -u admin -p <password> --authenticationDatabase admin --host "mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-1.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-2.mongodb-headless.mongodb.svc.cluster.local:27017" --archive --db=service-analytics-conversation-collector-provider | mongorestore -u admin -p <password> --authenticationDatabase admin --archive --nsFrom='service-analytics-conversation-collector-provider.*' --nsTo='service-analytics-conversation.*'

# Create service-analytics-collector user in service-analytics-collector db
# Get the existing password from `cognigy-service-analytics-collector-provider` secret and put it into <password-service-analytics-collector>:
mongo -u admin -p $MONGODB_ROOT_PASSWORD --authenticationDatabase admin
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
**Important note: This scripts is compatible with the [cognigy-mongodb-helm-chart](https://github.com/Cognigy/cognigy-mongodb-helm-chart) only! 
If you are using any other MongoDB service (for example, Mongodb Atlas), then you need to find out compatible commands for your setup to rename the databases.**
3. Migrate the storage. You need to migrate following PVCs from `default` to `cognigy-ai` namespace:

 - `flow-modules`
 - `functions`
 - `redis-persistent`

Make sure that the PVCs are linked to the existing PVs so that you don't lose any data. **We strongly recommend to do a backup (snapshots) of the existing PVs before**. We are not providing any instruction here as storage provisioning is cloud-specific and the customer needs to come up with data migration process in accordance with their cloud infrastructure.
4. Deploy the Helm Chart:
   Refer to original [docs](https://github.com/Cognigy/cognigy-ai-helm-chart) for details
    1. Login into Cognigy Helm Registry (provide your Cognigy Container Registry credentials):
   ```bash
   helm registry login cognigy.azurecr.io \
   --username <your-username> \
   --password <your-password>
   ```
    2. Then deploy the Chart:
   ```bash
   helm upgrade --install --namespace <target namespace> cognigy-ai    oci://cognigy.azurecr.io/helm/cognigy.ai --version HELM_CHART_VERSION --values values_prod.yaml
   ```
5. OPTIONALLY: In case of any changes, update the DNS records to point to the new LoadBalancer Service. If you're using Traefik Ingress with AWS Classic Load Balancer, change the CNAME of the DNS entries to the new Load Balancer IP/CNAME.

## Clean-up

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







