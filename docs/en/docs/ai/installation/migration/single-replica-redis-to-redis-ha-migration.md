---
title: "Redis: Single Replica to Redis HA Migration"
slug: "single-replica-redis-to-redis-ha-migration"
hidden: false
ignore_macros: true
---
# Redis: Single Replica to Redis in High Availability (HA) Mode Migration

Starting Cognigy.AI release v4.65 single replica Redis setup is deprecated and is replaced with Redis in High 
Availability (HA) Mode.

!!! warning "You must perform the following steps before upgrading Cognigy.AI to v4.65 and modify `values.yaml` of your Cognigy.AI Helm Release accordingly"

## Prepare Redis and Redis persistent HA Configuration 

### Self-managed Redis installations

If you do not use Redis and Redis persistent services delivered with AI Helm Chart and use self-managed external Redis services
instead, which means that you have the following variables in your `values.yaml`:
```yaml
statefulRedis:
  enabled: false

statefulRedisPersistent:
  enabled: false
```
1. To continue using self-managed Redis installations, disable new Redis and Redis persistent HA deployments with the following setting in `values.yaml`:
   ```yaml
   redisHa:
     enabled: false
     
   redisPersistentHa:
     enabled: false
   ```
2. Remove `statefulRedis` and `statefulRedisPersistent` sections from `values.yaml` and skip the rest of this migration guide.
   

### Cloud Infrastructure Configuration 

1. Redis and Redis persistent in HA mode are provisioned with 3 replicas to increase availability of the services. Make 
sure your Kubernetes cluster has enough free capacity for additional Redis and Redis persistent pods in HA setups. 
In total, both setups require 3 CPU cores and 3GB RAM additionally to be provisioned in the cluster.
2. Check `reclaimPolicy`for existing `redis-persistent` StorageClass with the following command:
```bash
kubectl get storageclass redis-persistent -o yaml
```
If `reclaimPolicy: Delete`, you can skip [Persistent Volume Clean-up](#persistent-volume-clean-up) section of this guide, if `reclaimPolicy: Retain` you will need to clean up PV and the underlying disk manually as described in [Persistent Volume Clean-up](#persistent-volume-clean-up) section.
3. Redis HA default settings imply that you run your cluster with 3 Availability Zones (AZ) (Cognigy.AI recommended setup) and
Helm Release spawns HA replicas across 3 AZs. If your cluster is provisioned without Availability Zones, override zonal `podAntiAffinity` in `values.yaml`:
```yaml
redisHa:
  replica:
    affinity:
      podAntiAffinity:
        requiredDuringSchedulingIgnoredDuringExecution: []

redisPersistentHa:
  replica:
    affinity:
      podAntiAffinity:
        requiredDuringSchedulingIgnoredDuringExecution: []
```
4. If your cloud provider is not AWS or Azure, you will need to create `redis-persistent-ha` StorageClass manually. Set all
the parameters for the new `redis-persistent-ha` StorageClass equal to the existing `redis-persistent` StorageClass: 
    * get existing `redis-persistent` StorageClass and store it in `redis-persistent-ha.yaml` file:
    ```shell
    kubectl get storageclass redis-persistent -o yaml > redis-persistent-ha.yaml
    ```
    * open `redis-persistent-ha.yaml` file in a text editor. Change `name:` field to `redis-persistent-ha`. Remove `uid:`, `resourceVersion:` and `creationTimestamp:` fields.
    * save the file and create the new `redis-persistent-ha` StorageClass by applying it to the cluster: `kubectl apply -f redis-persistent-ha.yaml` 
    * check that the new StorageClass is created in the cluster: `kubectl get storageclass redis-persistent-ha -o yaml`
5. If your cloud provider is AWS or Azure `redis-persistent-ha` StorageClass will be created automatically. However, you will need to **ensure before upgrading the Helm Release** that: 
     * on AWS: `gp3` storage and `ebs.csi.aws.com` provisioner are enabled in your cluster
     * on Azure: `Premium_LRS` storage account type and `disk.csi.azure.com` provisioner are enabled in your cluster
     * Alternatively, you can override `redisPersistentHa` settings under `storageClass:` section to match the parameters of the existing `redis-persistent` StorageClass, see [values.yaml](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/main/values.yaml) for reference.

### Migrate Custom Redis and Redis persistent Configuration 

1. If you do not have any custom configuration under `statefulRedis` and `statefulRedisPersistent` sections in your 
Cognigy.AI Helm Release `values.yaml` skip this section. 
2. If you have custom configuration under `statefulRedis`and/or `statefulRedisPersistent` you need to copy it under `redisHa`
and `redisPersistentHa` respectively as follows:

    * if `statefulRedis.auth.password` is defined in cleartext copy its value under `redisHa.auth.password`
    * if `statefulRedisPersistent.auth.password` is defined in cleartext copy its value under `redisPersistentHa.auth.password`
    * if custom `statefulRedis.auth.existingSecret` is defined copy its value under `redisHa.auth.existingSecret`. The corresponding custom secret must exist in the cluster! 
    * if custom `statefulRedisPersistent.auth.existingSecret` is defined copy its value under `redisPersistentHa.auth.existingSecret`. The corresponding custom secret must exist in the cluster!
    * if custom `resources` for `statefulRedis` are defined in your `values.yaml`, copy the `resources` section (including both `requests` and `limits`) to  `redisHa.replica.resources`. Set `maxmemory` setting under `redisHa.replica.configuration` parameter to 85% of `resources.limits.memory`, see [values.yaml](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/main/values.yaml) for reference. 
    * if custom `resources` for `statefulRedisPersistent` are defined in your `values.yaml`, copy the `resources` section (including both `requests` and `limits`) to  `redisPersistentHa.replica.resources`. Set `maxmemory` setting under `redisPersistentHa.replica.configuration` parameter to 85% of `resources.limits.memory`, see [values.yaml](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/main/values.yaml) for reference.

## Cognigy.AI Helm Release Upgrade
1. Double check that all parameters in your `values.yaml` are adjusted as described above.
2. Perform upgrade of Cognigy.AI Helm Release as usual. During the upgrade:

    * new `redis-ha-node` and `redis-persistent-ha-node` StatefulSets and corresponding pods will be created in the cluster
    * old `redis` and `redis-persistent` Deployments and corresponding pods will be removed from the cluster
    * Cognigy.AI services will reconnect to Redis and Redis persistent HA setups.

## Persistent Volume Clean-up
1. If `reclaimPolicy: Delete` for old `redis-persistent` `StorageClass` was set, skip this section. The underlying PV and PVC will be deleted automatically
2. If `reclaimPolicy: Retain` for old `redis-persistent` `StorageClass` was set, remove manually the PV for old `redis-persistent` Deployment and underlying disk in your cloud infrastructure:

    * get PVs in your cluster: `kubectl get pv`
    * write down the name of the PV in `Released` state and CLAIM: `cognigy-ai/redis-persistent` (referenced below as `PV_NAME`)
    * delete the pv with `kubectl delete pv PV_NAME`
    * delete the storage disk corresponding to `PV_NAME` in your cloud environment
