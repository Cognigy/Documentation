---
title: "Redis: Single Replica to Redis HA Migration"
slug: "single-replica-redis-to-redis-ha-migration"
hidden: false
---

# Redis: Single Replica to Redis in High Availability (HA) Mode Migration

Starting from Cognigy.AI release v4.65, the single-replica Redis setup is deprecated and replaced with Redis in High Availability (HA) Mode.

## Prepare Redis and Redis persistent HA Configuration 

Before upgrading to Cognigy.AI v4.65, you must perform the following steps and modify the `values.yaml` of your Cognigy.AI Helm Release accordingly.

### Self-Managed Redis Installations

If you do not use Redis and Redis persistent services delivered with AI Helm Chart and prefer self-managed external Redis services instead, ensure that you have the following variables in your `values.yaml`:
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
2. Remove the `statefulRedis` and `statefulRedisPersistent` sections from `values.yaml` and skip the remaining steps in this migration guide.
### Cloud Infrastructure Configuration 

1. Redis and Redis persistent in HA mode are provisioned with 3 replicas to increase service availability. Ensure that your Kubernetes cluster has enough free capacity for additional Redis and Redis persistent pods in HA setups. In total, both configurations require an additional provision of 3 CPU cores and 3 GB RAM in the cluster.
2. Check `reclaimPolicy` for the existing `redis-persistent` StorageClass with the following command:
```bash
kubectl get storageclass redis-persistent -o yaml
```
If `reclaimPolicy: Delete`, you can skip the [Persistent Volume Clean-up](#persistent-volume-clean-up) section of this guide. If `reclaimPolicy: Retain` is set, you must manually clean up the Persistent Volume and the underlying disk as described in the [Persistent Volume Clean-up](#persistent-volume-clean-up) section.
3. Redis HA default settings imply that you run your cluster with 3 Availability Zones (AZ) (Cognigy.AI recommended setup), and
the Helm Release spawns HA replicas across 3 AZs. If your cluster is provisioned without Availability Zones, override zonal `podAntiAffinity` in `values.yaml`:
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
4. If your cloud provider is neither AWS nor Azure, create `redis-persistent-ha` StorageClass manually. Set all
the parameters for the new `redis-persistent-ha` StorageClass equal to the existing `redis-persistent` StorageClass: 
    * Get existing `redis-persistent` StorageClass and store it in the `redis-persistent-ha.yaml` file:
    ```shell
    kubectl get storageclass redis-persistent -o yaml > redis-persistent-ha.yaml
    ```
    * Open the `redis-persistent-ha.yaml` file in a text editor. Change the `name:` field to `redis-persistent-ha`. Remove the `uid:`, `resourceVersion:` and `creationTimestamp:` fields.
    * Save the file and create the new `redis-persistent-ha` StorageClass by applying it to the cluster: `kubectl apply -f redis-persistent-ha.yaml`.
    * Check that the new StorageClass is created in the cluster: `kubectl get storageclass redis-persistent-ha -o yaml`.
5. If your cloud provider is either AWS or Azure, the `redis-persistent-ha` StorageClass will be created automatically. **Before upgrading the Helm Release**, ensure that: 
     * On AWS: the `gp3` storage and the `ebs.csi.aws.com` provisioner are enabled in your cluster.
     * On Azure:  the `Premium_LRS` storage account type and the  `disk.csi.azure.com` provisioner are enabled in your cluster.
     * Alternatively, you can override `redisPersistentHa` settings under `storageClass:` section to match the parameters of the existing `redis-persistent` StorageClass, see `values.yaml` for [AWS](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/c0474cfe67bbf28fa1aea728118a2ae5b0676498/values.yaml#L3909) and [Azure](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/c0474cfe67bbf28fa1aea728118a2ae5b0676498/values.yaml#L3954) reference.

### Migrate Custom Redis and Redis Persistent Configuration 

- If you do not have any custom configuration under the `statefulRedis` and `statefulRedisPersistent` sections in your Cognigy.AI Helm Release `values.yaml`, skip this section. 
- If you have a custom configuration under the `statefulRedis`and/or `statefulRedisPersistent` sections, you need to copy it under `redisHa`
and `redisPersistentHa` respectively as follows:

    * If `statefulRedis.auth.password` is defined in `cleartext`, copy its value under `redisHa.auth.password`.
    * If `statefulRedisPersistent.auth.password` is defined in `cleartext`, copy its value under `redisPersistentHa.auth.password`.
    * If a custom `statefulRedis.auth.existingSecret` is defined, copy its value under `redisHa.auth.existingSecret`. Ensure that the corresponding custom secret exists in the cluster.
    * If a custom `statefulRedisPersistent.auth.existingSecret` is defined copy its value under `redisPersistentHa.auth.existingSecret`. Ensure that the corresponding custom secret exists in the cluster.
    * If custom `resources` for `statefulRedis` are defined in your `values.yaml`, copy the `resources` section (including both `requests` and `limits`) to  `redisHa.replica.resources`. Set the `maxmemory` setting under the `redisHa.replica.configuration` parameter to 85% of  `resources.limits.memory`.  Refer to [values.yaml](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/c0474cfe67bbf28fa1aea728118a2ae5b0676498/values.yaml#L4494) for details. 
    * If custom `resources` for `statefulRedisPersistent` are defined in your `values.yaml`, copy the `resources` section (including both `requests` and `limits`) to `redisPersistentHa.replica.resources`. Refer to [values.yaml](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/c0474cfe67bbf28fa1aea728118a2ae5b0676498/values.yaml#L4575) for details.

## Upgrade Cognigy.AI Helm Release to v4.65

1. Double check that all parameters in your `values.yaml` are adjusted as described above.
2. Perform the upgrade of the Cognigy.AI Helm Release to v4.65 as usual. During the upgrade:

    * New `redis-ha-node` and `redis-persistent-ha-node` StatefulSets, along with their corresponding pods, will be created in the cluster.
    * Old `redis` and `redis-persistent` Deployments and corresponding pods will be removed from the cluster.
    * Cognigy.AI services will reconnect to Redis and Redis persistent HA setups.
    * Verify that all the pods are running as expected by executing: `kubectl get pods -n=cognigy-ai`.

## Persistent Volume Clean-up

After upgrading Cognigy.AI to v4.65 and verifying that the release works properly, you can clean up the remaining persistent 
volume (PV) for the old `redis-persistent` Deployment:

1. If `reclaimPolicy: Delete` was set for the old `redis-persistent` `StorageClass`, skip this section. The underlying PV and PVC will be deleted automatically.
2. If `reclaimPolicy: Retain` was set for the old `redis-persistent` `StorageClass`, manually remove the PV associated with the old  `redis-persistent` Deployment and the underlying disk in your cloud infrastructure:

    * Get PVs in your cluster: `kubectl get pv`.
    * Write down the name of the PV in the `Released` state and CLAIM: `cognigy-ai/redis-persistent` (referenced below as `PV_NAME`).
    * Delete the `pv` with `kubectl delete pv PV_NAME`.
    * Delete the storage disk corresponding to `PV_NAME` in your cloud environment.