---
 title: "Migration guide for Helm dependencies in Live Agent 4.43" 
 slug: "migration-guide-helm-dependencies-4.43" 
 hidden: false 
---

# Migration guide for Helm dependencies in Live Agent 4.43

This is a migration guide for the Live Agent 4.43 version upgrade. This release upgrades the PostgreSQL and Redis dependency versions. This breaking change requires manual data migration if you are not using them externally.

In the case of Redis, it works out of the box, but for PostgreSQL, you need to migrate the data from the old database to the new one.

## Pre-migration preparations

### Change values.yaml

Values under `.Values.postgresql` are also affected. Make the necessary changes to your custom `values.yaml` file.

| Old Value                                     | New Value                                            |
| --------------------------------------------- | ---------------------------------------------------- |
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
## Old values
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

A backup pod is required to access the PostgreSQL database. This pod will create a backup and restore it to the new database. The size of the backup pod must be big enough to store the database data.

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
```

> Note: In the previous version `cognigy-live-agent-app` deployment is still called `cognigy-live-agent`

### 2. Attach a shell to the PostgreSQL backup pod and make a backup of the Live Agent database

Login to the postgres-backup pod and create a dump of the database `live_agent_production`

```sh
kubectl exec -n live-agent -it postgres-backup-0 -- bash

# inside the postgres-backup pod
cd /mnt/postgres-backup/

nohup time pg_dump --user $POSTGRES_USER --host cognigy-live-agent-postgresql -d live_agent_production > live_agent_production-postgres-dump.sql &

# (Not required, alternate of previous command) Take compressed dump, but this takes longer
nohup pg_dump --user $POSTGRES_USER --host cognigy-live-agent-postgresql -Fc -d live_agent_production > live_agent_production-postgres-dump.sql &
```

The prefix `nohup` and suffix `&` are used in the `pg_dump` command to run it in the background. You can bring background command of the current session with `fg` command and check the status of the background jobs with `jobs` command.

```sh
bash-5.1# jobs
[1]+  Running                 nohup pg_dump --user $POSTGRES_USER --host cognigy-live-agent-postgresql -d live_agent_production > live_agent_production-postgres-dump.sql &

# Once it is finished, check the output of the backup file
cat live_agent_production-postgres-dump.sql

exit
```

Once done `jobs` command should give no output.

### 4. Delete the current release plus the PVCs

This is done as the PostgreSQL and Redis versions have changed, and the PVCs are incompatible with the new versions.

```sh
# Delete the current release
helm delete -n live-agent cognigy-live-agent

# Check the PVCs
kubectl get pvc -n live-agent

# This will delete the database volumes, make sure a backup was done before proceeding
kubectl delete pvc -n live-agent <data-postgres>
kubectl delete pvc -n live-agent <redis>
```

### 5. Delete the PostgreSQL and Redis secrets. Or modify them with the new keys

The existing secrets need to be deleted or modified with the new keys. In the next step, a new release will be installed with the new secrets that are automatically generated if an existing secret is not specified in the values file.

#### Delete the secrets (recommended)

It is recommended to delete de existing secrets and leave this field commented in the values file for getting autogenerated ones.

```sh
# Delete the secrets
kubectl delete secret -n live-agent cognigy-live-agent-postgresql
kubectl delete secret -n live-agent cognigy-live-agent-redis
```

#### Modify the existing secrets

The new PostgreSQL secret is the only one changing while using internal PostgreSQL. It needs to contain the following keys:

```sh
# The PostgreSQL admin password (.Values.postgresql.auth.secretKeys.adminPasswordKey)
postgres-password
# New field - The PostgreSQL user password
password
```

The values `postgresql.auth.existingSecret` and `postgresql.auth.secretKeys.adminPasswordKey` are set to `postgres-password` and `password` by default and need to be uncommented for using the created secret.

### 6. Update and install the new version of the chart

In order to restore the backup done previously, it is necessary to install the new release without the migrations job running or the deployments accessing the DB as it is empty. Set the migrations job to false in the custom-values.yaml file and decrease the replica count to 0 for both the app and worker:

```yaml
# custom-values.yaml
app:
  replica: 0

worker:
  replica: 0

migrations:
  enabled: false
```

Install the new version of the chart:

```sh
helm upgrade cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version 4.43.0 --namespace live-agent -f custom-values.yaml
```

Then the only pods running will be the PostgreSQL and Redis ones.

### 8. Restore the DB backup into the new PostgreSQL pod

Attach a shell to the postgres-backup pod and restore the database `live_agent_production` into the new PostgreSQL pod.

```sh
# Login to the postgres-backup-0 pod
kubectl exec -n live-agent -it postgres-backup-0 -- bash

# Get the password of the new PostgreSQL from the `cognigy-live-agent-postgresql` secret key `postgres-password` and export it to `PGPASSWORD` env var
export PGPASSWORD=postgres

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

### 9. Update setting the migrations job to true in the `custom-values.yaml` file and increase the replica count to X for the app and worker

Disable the migrations job and decrease the replica count to the desired number for the app and worker in the custom-values.yaml file.

```yaml
# custom-values.yaml
app:
  replica: 2

worker:
  replica: 3

migrations:
  enabled: true
```

Upgrade the chart.

```sh
helm upgrade cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version 4.43.0 --namespace live-agent -f custom-values.yaml
```

### 10. Attach a shell to the app pod and remove the onboarding variable in Redis

This will ensure that the onboarding screen is not shown after accessing Live Agent.

```sh
# Attach a shell to the app pod
kubectl exec -it cognigy-live-agent-app-xxxxxxxxxx -- /bin/sh

# Execute a Rails console
RAILS_ENV=production bundle exec rails c

# Remove the onboarding variable from redis
::Redis::Alfred.delete(::Redis::Alfred::CHATWOOT_INSTALLATION_ONBOARDING)
```

### 11. Access Live Agent and verify the content

Now is the time to verify that everything is working as expected by checking existing conversations and settings are present. Once everything is verified, the backup can be deleted.

```sh
# Delete the backup pod deployemnt, service, Storage Class and pvc
kubectl delete statefulset -n live-agent postgres-backup
kubectl delete service -n live-agent postgres-backup
kubectl delete sc -n live-agent postgres-backup
kubectl delete pvc -n live-agent postgres-backup
```

If you have any issues, please please [reach us through support](https://support.cognigy.com/hc/en-us/requests/new?).
