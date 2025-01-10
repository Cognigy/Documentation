---
title: "Database" 
slug: "database" 
hidden: false 
tags:
  - Live Agent
  - Helm Values
  - Database
---

# Database

The database used by Live Agent is PostgreSQL. It can either run inside the Kubernetes cluster as an additional workload, or outside the cluster. You can also use a fully managed solution for PostgreSQL.

Compatible and tested PostgreSQL versions **>= 10** and **<= 15**

## Postgres Variables

| Key                        | Type   | Default                   | Description                                                                   |
|----------------------------|--------|---------------------------|-------------------------------------------------------------------------------|
| `postgresql.enabled`       | bool   | `true`                    | Set to `false` if using an external postgres, and modify the below variables. |
| `postgresql.nameOverride`  | string | `"postgresql"`            | Pod Name Override                                                             |
| `postgresql.auth.database` | string | `"live_agent_production"` |                                                                               |
| `postgresql.auth.username` | string | `"postgres"`              | Database User                                                                 |
| `postgresql.host`          | string | `"postgres"`              | Commented, unless using an external database.                                 |
| `postgresql.port`          | string | `"postgres"`              | Commented, unless using an external database.                                 |
| `postgresql.SSLMode`       | string | `"prefer"`                | Database SSL Mode (prefer, require, disable)                                  |

## Internal Setup

It is good practice to change the `postgres.auth.postgresqlPassword` in the `values.yaml` file. To do this, you can change the value or comment on the line `postgresqlPassword: postgres` before installing the Helm chart, which will autogenerate a password. An existing secret can also be used, and it needs to contain the keys `postgresql-password` and `password`.

## External Setup

1. Go to the `values.yaml` file and scroll down to `postgresql` field. Change the `enabled` value to `false`.

2. Type the user credentials and uncomment the properties `postgresqlHost`, `postgresqlPort`, giving them the correct values.

3. Define a password to access the external Postgres instance:
    - A. A secret is created by default. Edit the password inside the Postgres secret. The secret name is composed of the `release name` + `postgres`.
    - B. (Recommended) Define an existing secret. Create the secret and set the values inside the `values.yaml` file. The keys are `postgresql.existingSecret` and `postgresql.auth.secretKeys.adminPasswordKey`.
