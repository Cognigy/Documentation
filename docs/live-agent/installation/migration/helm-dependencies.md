---
 title: "Migration guide for Helm dependencies in Live Agent 4.44" 
 slug: "migration-guide-helm-dependencies-4.44" 
 hidden: false 
---

# Migration guide for Helm dependencies in Live Agent 4.44

[![Version badge](https://img.shields.io/badge/Added in-v4.44-blue.svg)](../../../release-notes/4.44.md)

This is a migration guide for the Live Agent 4.44 version upgrade. This release upgrades the PostgreSQL and Redis dependency versions. This breaking change requires manual data migration if you are not using them externally.

In the case of Redis, it works out of the box, but for PostgreSQL, you need to migrate the data from the old database to the new one.

## Pre-Migration preparations

### Change values.yaml

Values under `.Values.postgresql` are also affected. Make the necessary changes to your custom `values.yaml` file.

| Old Value                                     | New Value                                            |
|-----------------------------------------------|------------------------------------------------------|
| `Values.postgresql.postgresqlDatabase`        | `Values.postgresql.auth.database`                    |
| `Values.postgresql.postgresqlUsername`        | `Values.postgresql.auth.username`                    |
| `Values.postgresql.postgresqlPassword`        | `Values.postgresql.auth.postgresPassword`            |
| `Values.postgresql.postgresqlHost`            | `Values.postgresql.host`                             |
| `Values.postgresql.postgresqlPort`            | `Values.postgresql.port`                             |
| `Values.postgresql.existingSecret`            | `Values.postgresql.auth.existingSecret`              |
| `Values.postgresql.existingPasswordSecretKey` | `Values.postgresql.auth.secretKeys.adminPasswordKey` |

The cognigy-live-agent deployment is now called `cognigy-live-agent-app`. The change also applies to the service and ingress in your custom `values.yaml` file.

#### Old values

```yaml
ingress:
  enabled: true
  annotations:
    kubernetes.io/ingress.class: traefik
  hosts:
    - host: '<host>'
      paths:
        - path: /
          pathType: Prefix
          backend:
            service:
              # Same value as service.name above
              name: cognigy-live-agent
              port:
                number: 3000

service:
  name: cognigy-live-agent
  internalPort: 3000
  targetPort: 3000
  type: ClusterIP
  annotations: {}
```

#### New values

```yaml
ingress:
  enabled: true
  annotations:
    kubernetes.io/ingress.class: traefik
  hosts:
    - host: '<host>'
      paths:
        - path: /
          pathType: Prefix
          backend:
            service:
              # Same value as service.name above
              name: cognigy-live-agent-app
              port:
                number: 3000

service:
  name: cognigy-live-agent-app
  internalPort: 3000
  targetPort: 3000
  type: ClusterIP
  annotations: {}
```

### Create backup-pod.yaml

A backup pod is required to access the PostgreSQL database. This pod will create a backup and restore it to the new database. The size of the backup pod must be at least three times bigger to store the dump.

#### Calculate the size of the database

For knowing the size of the database, you can run the following command:

```sh
kubectl exec -n live-agent -it <postgresql-pod-name> -- psql -U <postgresql-username> -d live_agent_production -c "SELECT pg_database_size('live_agent_production')/1024/1024/1024 AS size_in_gb;"
```

The output will be something like this:

```sh
 size_in_gb
------------
  1.0000000
(1 row)
```

The size of the backup pod should be at least 3 GB.

#### backup-pod.yaml

```yaml
# Create a new file backup-pod.yaml
apiVersion: storage.k8s.io/v1
allowVolumeExpansion: true
kind: StorageClass
metadata:
  name: postgres-backup
provisioner: ebs.csi.aws.com
volumeBindingMode: WaitForFirstConsumer
parameters:
  type: gp3
  encrypted: 'true'
  fsType: ext4
reclaimPolicy: Retain

---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  labels:
    app: postgres-backup
  name: postgres-backup
  namespace: live-agent
spec:
  serviceName: postgres-backup
  replicas: 1
  selector:
    matchLabels:
      app: postgres-backup
  template:
    metadata:
      name: postgres-backup
      labels:
        app: postgres-backup
    spec:
      containers:
        - image: postgres:11-alpine
          name: postgres-backup
          env:
            - name: POSTGRES_PASSWORD
              value: postgres # This is the password for the postgres admin user (can be obtained from the secret `cognigy-live-agent-postgresql`)
            - name: PGPASSWORD
              value: postgres # This is the password for the postgres admin user (can be obtained from the secret `cognigy-live-agent-postgresql`)
            - name: POSTGRES_USER
              value: postgres # This is the username specified in the values.yaml file
            # - name: PGDATA
            # value: /var/lib/postgresql/data/pgdata
          ports:
            - containerPort: 5432
          resources: {}
          volumeMounts:
            - mountPath: /mnt/postgres-backup
              name: postgres-backup-claim
      restartPolicy: Always
  volumeClaimTemplates:
    - metadata:
        name: postgres-backup-claim
      spec:
        accessModes: ['ReadWriteOnce']
        storageClassName: 'postgres-backup'
        resources:
          requests:
            storage: 100Gi # This is the size of the backup pod

---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: postgres-backup
  name: postgres-backup
  namespace: live-agent
spec:
  ports:
    - name: 'postgres-backup'
      port: 5432
      targetPort: 5432
  selector:
    app: postgres-backup
  clusterIP: None
```

To deploy the backup pod, run the following command:

```sh
kubectl apply -n live-agent -f backup-pod.yaml
```

## Migration steps

### Step 1. Set the replica count to 0

For app and worker replica sets, specify `0` in the replica count. It ensures that the database will not have any activity and the data will be backed up safely.

```sh
kubectl scale --replicas=0 -n live-agent deployment/cognigy-live-agent
kubectl scale --replicas=0 -n live-agent deployment/cognigy-live-agent-worker
kubectl scale --replicas=0 -n live-agent deployment/cognigy-live-agent-odata
```

!!! note
    In the previous version, the `cognigy-live-agent-app` deployment is still called `cognigy-live-agent`.

### Step 2. Attach a shell to the PostgreSQL backup pod and make a backup of the Live Agent database

Log in to the postgres-backup pod and create a dump of the `live_agent_production` database.

```sh
kubectl exec -n live-agent -it postgres-backup-0 -- bash

# Inside the PostgreSQL backup pod
cd /mnt/postgres-backup/

nohup time pg_dump --user $POSTGRES_USER --host cognigy-live-agent-postgresql -d live_agent_production > live_agent_production-postgres-dump.sql &

# (Alternative) Take a compressed dump, but this takes longer
nohup pg_dump --user $POSTGRES_USER --host cognigy-live-agent-postgresql -Fc -d live_agent_production > live_agent_production-postgres-dump.sql &
```

The prefix `nohup` and suffix `&` are used in the `pg_dump` command to run it in the background. You can bring the background command of the current session with the `fg` command and check the status of the background jobs with the `jobs` command.

```sh
bash-5.1# jobs
[1]+  Running                 nohup pg_dump --user $POSTGRES_USER --host cognigy-live-agent-postgresql -d live_agent_production > live_agent_production-postgres-dump.sql &

# Once it has finished, check the output of the backup file
cat live_agent_production-postgres-dump.sql

exit
```

Once done, `jobs` command should give no output.

### Step 3. Delete the current release and check PVC reclaim policy

When the PostgreSQL and Redis versions have changed, the PVCs become incompatible with the new versions. To recover compatibility, delete the current release and the PVCs, then check the Live Agent PVC reclaim policy.

```sh
# Check that PVs are set as Retain:
kubectl get pv
# Patch the reclaim policy for the EFS storage PV, set <pv-name> to the name from the previous command
# Repeat for any PV related to LA that is not set to "Retain"
kubectl patch pv <pv-name> -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
# Check that the reclaim policy is set to "Retain":
kubectl get pv

# Delete the current release
helm delete -n live-agent cognigy-live-agent

# Change the EFS storage PV status from "Released" to "Available"
kubectl patch pv <pv-name> -p '{"spec":{"claimRef": null}}'

# Check the PVCs
kubectl get pvc -n live-agent

# These commands will delete the database volumes. Make sure a backup was done before proceeding
kubectl delete pvc -n live-agent <data-postgres>
kubectl delete pvc -n live-agent <redis>
kubectl delete pvc -n live-agent <redis-replica>
```

### Step 4. Delete or modify existing database secrets

The existing secrets need to be deleted or modified with the new keys.
The system automatically generates new secrets in a new release
if existing secrets are not specified in the `values.yaml` file.

=== "Delete the secrets (recommended)"

    We recommend deleting the existing secrets and leaving the password fields commented in the values file for getting autogenerated ones.

    ```sh
    # Delete the secrets
    kubectl delete secret -n live-agent cognigy-live-agent-postgresql
    kubectl delete secret -n live-agent cognigy-live-agent-redis
    ```

=== "Modify the existing secrets"

    As an alternative to deleting the secrets, you can modify the existing ones. The only change when using internal PostgreSQL is the new PostgreSQL secret. It needs to contain the following keys:

    ```sh
    # The PostgreSQL admin password (.Values.postgresql.auth.secretKeys.adminPasswordKey)
    postgres-password
    # New field - The PostgreSQL user password
    password
    ```

    The values `postgresql.auth.existingSecret` and `postgresql.auth.secretKeys.adminPasswordKey` are set to `postgres-password` and `password` by default and need to be uncommented for using the created secret.   

### Step 5. Install the chart version 4.44.0

To restore the previous backup, install the new release without the migration job running or the deployments accessing the DB as it is empty. Set the migrations job to false in the custom-values.yaml file and decrease the replica count to 0 for both the app and worker:

```yaml
# custom-values.yaml
app:
  replica: 0

worker:
  replica: 0

odata:
  enabled: false

migration:
  enabled: false
```

Install the new version of the chart:

```sh
helm install cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version 4.44.0 --namespace live-agent -f custom-values.yaml
```

Then the only pods running will be the EFS, PostgreSQL and Redis ones.

### Step 6. Restore backup to the new PostgreSQL pod

Attach a shell to the PostgreSQL backup pod and restore the 'live_agent_production' database to the new PostgreSQL pod.

```sh
# Log in to the postgres-backup-0 pod
kubectl exec -n live-agent -it postgres-backup-0 -- bash

# Get the password of the new PostgreSQL from the `cognigy-live-agent-postgresql` secret key `postgres-password` and export it to `PGPASSWORD` environment variable
export PGPASSWORD=<password>

# Connect to the newly deployed PostgreSQL DB with the `psql` command
psql --host cognigy-live-agent-postgresql -U postgres -d postgres -p 5432

# List details of DBs
\l+

DROP DATABASE live_agent_production;

create database live_agent_production;

grant all privileges on database live_agent_production to postgres;

# List details of DBs
\l+

# quit
\q

cd /mnt/postgres-backup/

# Restore the data from old postgres. This takes some time
nohup time psql --host cognigy-live-agent-postgresql -U postgres -d live_agent_production < live_agent_production-postgres-dump.sql &

# (Optional) Once restored, check postgres disk usages
PGPASSWORD=postgres psql --host cognigy-live-agent-postgresql -U postgres -d postgres -p 5432
# List details of DBs
\l+
```

### Step 7. Change custom-values.yaml

Enable the migration job and increase the replica count to the desired number for the app and worker in the custom-values.yaml file.

```yaml
# custom-values.yaml
app:
  replica: 2

worker:
  replica: 3

# In case the OData service was enabled, enable it again
odata:
  enabled: true

migration:
  enabled: true
```

Upgrade the chart.

```sh
helm upgrade cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version 4.44.0 --namespace live-agent -f custom-values.yaml
```

### Step 8. Attach a shell and remove the onboarding variable

Attach the shell to the app pod and remove the onboarding variable in Redis. It ensures that the onboarding screen is not shown after accessing Live Agent.

```sh
# Attach a shell to the app pod
kubectl exec -n live-agent -it cognigy-live-agent-app-xxxxxxxxxx -- /bin/sh

# Execute a Rails console
RAILS_ENV=production bundle exec rails c

# Remove the onboarding variable from Redis
::Redis::Alfred.delete(::Redis::Alfred::CHATWOOT_INSTALLATION_ONBOARDING)
```

### Step 9. Access Live Agent and verify the content

Check existing conversations and settings to ensure everything is working as expected. Once everything has been checked, you can delete the backup.

```sh
# Delete the backup pod deployment, service, Storage Class and pvc
kubectl delete statefulset -n live-agent postgres-backup
kubectl delete service -n live-agent postgres-backup
kubectl delete sc postgres-backup
kubectl delete pvc -n live-agent <postgres-backup-pvc>
```

Remember to review that the released persistent volumes are deleted. If you have any issues, [contact technical support](https://support.cognigy.com/hc/en-us/requests/new?).
