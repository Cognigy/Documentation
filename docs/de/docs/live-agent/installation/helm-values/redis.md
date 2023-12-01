---
 Titel: "Redis" 
 Schnecke: "Redis" 
 ausgeblendet: false 
---

# Redis

Redis ist ein In-Memory-Datenstrukturspeicher, der zum Zwischenspeichern und Verbessern der Leistung in der gesamten Anwendung verwendet wird.
Sie kann entweder innerhalb des Kubernetes-Clusters als zusätzliche Workload oder außerhalb des Clusters ausgeführt werden.
Sie können auch eine vollständig verwaltete Lösung für PostgreSQL verwenden.

Kompatible und getestete Redis-Versionen sind **>= 5** und **<= 7**

## Redis Variables

| Key                                | Type   | Default                          | Description                                                                                                                           |
|------------------------------------|--------|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `redis.enabled`                    | Bool   | true                             | Set to `false` if using external redis and modify the below variables.                                                                |
| `redis.host`                       | string | `Internal Redis Deployment Name` | Redis Host Name                                                                                                                       |
| `redis.auth.password`              | string | `"redis"`                        | Redis Password                                                                                                                        |
| `redis.master.persistence.enabled` | bool   | `true`                           | Persistence can be disabled completely, if you want your data to only exist while the server is running.                              |
| `redis.nameOverride`               | string | `"live-agent-redis"`             | Override the deployment name, if internal Redis is enabled.                                                                           |
| `redis.sentinelMasterName`         | string | `""`                             | A Redis sentinel master name is required when using sentinel.                                                                         |
| `redis.sentinels`                  | string | `""`                             | Redis Sentinel can be used by passing a list of sentinel hosts and ports. For example: `sentinel_host1:port1`, `sentinel_host2:port2` |

## Internal Setup

It is a good practice to change the `redis.auth.password` in the `values.yaml` file. To do this, you can change the value, or comment, on the line `password: redis` before installing the Helm chart, which will autogenerate a password.

## External Setup

1. Go to the `values.yaml` file and scroll down to the `redis` field. Change the `enabled` value to `false`.

2. Type the user credentials, and uncomment the properties `host` and `port`, assigning them the correct values.

3. Define a password to access the external Redis instance:
   - A. A secret is created by default. Edit the password inside the Redis secret. The secret name is composed of the `release name` + `redis`.
   - B. (Recommended) Define an existing secret. Create the secret and set the values inside the `values.yaml` file. The keys are `redis.existingSecret` and `redis.existingSecretPasswordKey`.
