---
 title: "Redis" 
 slug: "redis" 
 hidden: false 
---
# Redis

Redis is an in-memory data structure store used for caching and having a better performance across the application. It can either run inside of the Kubernetes cluster as an additional workload or outside of the cluster. You can also use a fully managed solution for PostgreSQL.

Compatible and tested Redis versions **>= 5** and **<= 6**

## Redis variables

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `redis.enabled`       | Bool | true | Set to `false` if using external redis and modify the below variables. |
| `redis.host`      | string | `Internal Redis Deployment Name` | Redis host name                                                            | `"cognigy-live-agent-redis-master"`                         |
| `redis.auth.password` | string | `"redis"` | Redis password |
| `redis.master.persistence.enabled` | bool | `true` | Persistence can be disabled completely, if you want your data to just exist as long as the server is running. |
| `redis.nameOverride` | string | `"live-agent-redis"` | Override the deployment name if internal Redis is enabled |
| `configmap.REDIS_SENTINELS` | string | `""` | Redis Sentinel can be used by passing list of sentinel host and ports. For example, `sentinel_host1:port1`, `sentinel_host2:port2` |
| `configmap.REDIS_SENTINEL_MASTER_NAME` | string | `""` | Redis sentinel master name is required when using sentinel. |

## Internal setup

It is a good practice to change the `redis.auth.password` at the `values.yaml` file. For that, you can change the value or comment on the line `password: redis` before installing the Helm chart, which will autogenerate a password. 

## External setup

1. Go to the `values.yaml` file and scroll down to `redis` field. Change the `enabled` value to `false`.

2. Type the username credentials and uncomment the properties `host`, `port`, giving them the right value.

3. Define a password to access the external Redis instance:  
    - A. A secret is created by default. Edit the password inside the Redis secret. The secret name is composed of the `release name` + `redis`.
    - B. (Recommended) Define an existing secret. Create the secret and set the values inside the `values.yaml` file. The keys are `redis.existingSecret` and `redis.existingSecretPasswordKey`.