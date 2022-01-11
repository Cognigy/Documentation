---
 title: "Database" 
 slug: "database" 
 hidden: false 
---
# Database

The database used is PostgreSQL. It can either run inside of the Kubernetes cluster as an additional workload or outside of the cluster. You can also use a fully managed solution for PostgreSQL.

Compatible and tested PostgreSQL versions **>= 10** and **<= 14**

## Postgres variables

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `postgresql.enabled`              | bool | `true` | Set to `false` if using external postgres and modify the below variables. |
| `postgresql.nameOverride`         | string | `"postgresql"` | Pod name override |
| `postgresql.postgresqlDatabase`   | string | `"live_agent_production"` |
| `postgresql.postgresqlUsername`   | string | `"postgres"` | Database user |
| `postgresql.postgresqlHost`   | string | `"postgres"` | Commented unless using an external database |
| `postgresql.postgresqlPort`   | string | `"postgres"` | Commented unless using an external database |
| `configmap.POSTGRES_SSL_MODE`     | string | `"prefer"` | Database SSL mode  (prefer, disable, require)  |


## Internal setup

It is a good practice to change the `postgres.postgresqlPassword` at the `values.yaml` file. For that you can change the value or comment on the line `postgresqlPassword: postgres` before installing the Helm chart, which will autogenerate a password.

## External setup

1. Go to the `values.yaml` file and scroll down to `postgresql` field. Change the `enabled` value to `false`.

2. Type the username credentials and uncomment the properties `postgresqlHost`, `postgresqlPort`, giving them the right value.

3. Define a password to access the external Postgres instance:  
    - A. A secret is created by default. Edit the password inside the Postgres secret. The secret name is composed of the `release name` + `postgres`.
    - B. (Recommended) Define an existing secret. Create the secret and set the values inside the `values.yaml` file. The keys are `postgresql.existingSecret` and `postgresql.existingSecretPasswordKey`.