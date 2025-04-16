---
title: "Migration guide for Redis Sentinel in Live Agent 4.53"
slug: "migration-guide-for-redis-sentinel-in-live-agent"
description: "This migration guide assists in upgrading the Redis chart to use Redis Sentinel for high availability in Live Agent version 4.53 and later versions."
hidden: false
---

# Migration guide for Redis Sentinel in Live Agent 4.53

[![Version badge](https://img.shields.io/badge/Added in-v4.53-blue.svg)](../../../release-notes/4.53.md)

This migration guide is for the Live Agent 4.53 version upgrade. This release upgrades the Redis chart to use Redis Sentinel for high availability.

## Perform a Standard Upgrade

The first step is to perform a standard upgrade of the Live Agent chart to the desired new version to ensure the migration job is run before enabling Redis Sentinel.

If the values were not specified previously, ensure that Sentinel mode is disabled in the `values.yaml` file.

```yaml
# ...

redis:
  enabled: true
  sentinel:
    enabled: false
# ...
```

Upgrade the chart to the latest version.

```bash
 helm upgrade cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version X.X.X --namespace live-agent -f custom-values.yaml
```

## Change values.yaml

The new values for version 4.53 already include the new Redis Sentinel configuration. If you use a custom `values.yaml` file, ensure it does not override the new Redis Sentinel configuration.

```yaml
# ...

redis:
  enabled: true
  sentinel:
    enabled: true
# ...
```

## Change the Migration Job Hooks

The migration job hooks must be temporarily changed to `post-install,post-upgrade` to run the migration job after the upgrade. Otherwise, the migration job will run before new Redis pods are created, resulting in a failed migration.

```yaml
# migration job (uncomment if needed)
migration:
  enabled: true
  hooks:
    migrate:
      # the setting here will override the default, which is "post-install,pre-upgrade"
      hookAnnotation: "post-install,post-upgrade"
```

### Upgrade the chart

Upgrade the chart to the latest version.

```bash
 helm upgrade cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version X.X.X --namespace live-agent -f custom-values.yaml
```

### Verify Functionality and Pod Status

Ensure that the pods are running and the application is functioning correctly, including passing the startup health check.

```bash
kubectl get pods
```

### Remove the Old PVCs and PVs

Remove the previous PVCs used by the Redis pods before the upgrade. They are typically named as follows:

- `redis-data-cognigy-live-agent-redis-master-0`
- `redis-data-cognigy-live-agent-redis-replicas-0`

To remove the previous PVCs and PVS, follow these steps:

1. Check that PVCs' status is now `Released`:
   ```bash
   kubectl get pvc -n live-agent
   ```
2. Delete PVCs.
   ```bash
   kubectl delete pvc redis-data-cognigy-live-agent-redis-master-0 -n live-agent
   kubectl delete pvc redis-data-cognigy-live-agent-redis-replicas-0 -n live-agent
   ```
3. Check that the PVs are now `Available`.
   ```bash
   kubectl get pv
   ```
4. Delete PVs.
   ```bash
   kubectl delete pv <pv_name> # replace <pv_name> with the name of the PV associated with the deleted PVCs
   ```

## Remove the Migration Job Hooks after the Upgrade

Remove the migration job hooks from the `values.yaml` file that was added in the previous step and revert to the default value after the upgrade.

```yaml
# migration job (uncomment if needed)
# migration:
#   enabled: true
#   hooks:
#     migrate:
#       hookAnnotation: "post-install,pre-upgrade"
```

If you have any issues, [contact technical support](https://support.cognigy.com/hc/en-us/requests/new?).
