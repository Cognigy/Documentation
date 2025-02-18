---
title: "MongoDB: Single to Multi Replica"
slug: "single-replica-mongoDB-to-multi-replica-mongoDB-migration"
hidden: false
ignore_macros: true
---

# MongoDB: Single to Multi Replica  

The migration process from a single replica to a multi-replica setup with MongoDB Helm Chart involves several steps. These steps are described in the following section. In this guide, we assume that the old MongoDB installation is deployed in the `default` namespace, and we will install the new MongoDB ReplicaSet into the `mongodb` namespace. We strongly recommend performing migration inside the existing cluster as it simplifies the data migration process. 

## Setting up Multi-Replica MongoDB Helm Chart

1. Set up a 3-replica MongoDB Helm Release following the [official guide](https://github.com/Cognigy/cognigy-mongodb-helm-chart) here.
2. You will need to set the root password in the new setup to the same value as in the old one. You can find out the root password for the existing installation by executing the following command on the current Kubernetes cluster:
```
kubectl get secret -n default cognigy-mongo-server -ojsonpath='{.data.mongo-initdb-root-password}' | base64 --decode
```
Use this password as `auth.rootPassword` and `metrics.password` in the `values_prod.yaml` file for the new setup.

## Modifying MongoDB Connection String Secrets

To access MongoDB, Cognigy.AI services use Kubernetes secrets, which contain a database connection string. The secrets must be adjusted for the new MongoDB setup. To automate this process, a script can be found in [this](https://github.com/Cognigy/cognigy-mongodb-helm-chart) repository. Ensure that all old secrets are stored in `secrets` folder before executing the script:**
```bash
git clone https://github.com/Cognigy/cognigy-mongodb-helm-chart.git
cd scripts
chmod +x secrets-migration.sh
./secrets-migration.sh
```
The script will ask for the current MongoDB connection string, for example:
```
mongo-server:27017
```
and for a replacement containing the new connection string, for example:
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

## MongoDB Data Migration

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

3. If you are setting up the Multi-replica MongoDB setup:
   
    * on a different Kubernetes cluster, skip to step 5. 
    * on the same Kubernetes cluster where single-replica MongoDB is running, connect to the primary MongoDB pod. For example, if  `mongodb-0` is the primary node:
    ```bash
    kubectl exec -it mongodb-0 -n mongodb -- bash
    ```

4. After attaching to the primary pod of the multi-replica MongoDB setup, execute the following command to take a dump of an existing database and restore it in the multi-replica MongoDB:
    ```bash
    mongodump --archive --authenticationDatabase admin -u admin -p <password> --host "mongo-server.default.svc:27017" | mongorestore --host "mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017" --authenticationDatabase admin -u root -p <password> --archive --drop
    ```

5.  If you are setting up the multi-replica MongoDB setup **on a different Kubernetes cluster**, you have to dump the existing database to your local client filesystem and import it into the multi-replica setup afterward. The time of this operation heavily depends on the size of your database and your internet connection speed. To speed up the process, you can execute the commands from a server running in the same data center where your Kubernetes clusters run. In case you follow this scenario, we strongly recommend testing the dump process in advance to evaluate the downtime duration:

    1.  To make a dump to the local file system, log in to the old single replica MongoDB pod:
    ```bash
    kubectl exec -it deployment/mongo-server -- bash
    mkdir -p ./tmp/backup
    mongodump --authenticationDatabase admin -u admin -p <password> --host "mongo-server.default.svc:27017" --out ./tmp/backup
    exit
    kubectl cp -n default <mongodb-pod-id>:/tmp/backup <path-to-the-local-directory>
    ```
    2. Import the data into a multi-replica MongoDB cluster:
    ```bash
    kubectl cp -n mongodb <path-to-the-local-directory> mongodb-0:/tmp/
    kubectl exec -it mongodb-0 -n mongodb -- bash
    mongorestore --host "mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017" --authenticationDatabase admin -u root -p <password> ./tmp/<backup-folder>
    ```
   Here `mongodb-0` considered the primary node. Change it if you have different primary node, for example,`mongodb-1` or `mongodb-2`.

6. Replace the existing secrets with new secrets:
    ```bash
    kubectl replace -f new_secrets
    ```
   In case of a rollback, the old secrets can be restored by executing the following:
    ```bash
    kubectl delete -f new_secrets
    kubectl apply -f original_secrets
    ```
7. Scale up all the deployments back to check if everything works as expected.
8. Move the secrets from the `new_secrets` folder to `secrets` folder and delete the `original_secrets` folder.