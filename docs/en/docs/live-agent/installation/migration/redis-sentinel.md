---
 title: "Migration guide for setting up Redis Sentinel in existing Live Agent installation" 
 slug: "migration-guide-for-setting-up-redis-sentinel-in-existing-live-agent-installation"
 hidden: false 
---

# Migration guide for setting up Redis Sentinel in Live Agent

[![Version badge](https://img.shields.io/badge/Added in-v4.53-blue.svg)](../../../release-notes/4.53.md)

This is a migration guide for the Live Agent 4.53 version upgrade. This release upgrades the Redis chart to use Redis Sentinel for high availability.

## Perform a normal upgrade

The first step is to perform a normal upgrade of the Live Agent chart to the new desired version for ensuring the migrations job is run before the Redis Sentinel is enabled.

```bash
helm upgrade --install live-agent cognigy/live-agent --version 4.53.0
```

## Change values.yaml

The new values for version 4.53 already contain the new Redis Sentinel configuration. If you are using a custom values.yaml file, you need to ensure it is not overriding the new Redis Sentinel configuration.

```yaml
# ...

redis:
  enabled: true
  sentinel:
    enabled: true
# ...
```

## Change temporarily the migration job hooks

The migration job hooks need to be changed temporarily to `post-install,post-upgrade` in order to run the migration job after the upgrade. Otherwise, the migration job will run before new Redis pods are created, and the migration will fail.

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

### Check everything is working

Check that the pods are running and the application is working. This means the startup health check is passing.

```bash
kubectl get pods
```

### Remove the old PVCs and PVs

Remove the old PVCs that were used by the Redis pods before the upgrade. They are usually named as:

- redis-data-cognigy-live-agent-redis-master-0
- redis-data-cognigy-live-agent-redis-replicas-0

Check their status is now `Released`:

```bash
kubectl get pvc -n live-agent
```

Delete them:

```bash
kubectl delete pvc redis-data-cognigy-live-agent-redis-master-0 -n live-agent
kubectl delete pvc redis-data-cognigy-live-agent-redis-replicas-0 -n live-agent
```

Check the PVs are now `Available`:

```bash
kubectl get pv
```

Delete them:

```bash
kubectl delete pv <pv_name> # replace <pv_name> with the name of the PV for the PVCs that were deleted
```

## Remove the migration job hooks after the upgrade

Remove the migration job hooks from the values.yaml file that was added in the previous step and leave the default value after the upgrade.

```yaml
# migration job (uncomment if needed)
# migration:
#   enabled: true
#   hooks:
#     migrate:
#       hookAnnotation: "post-install,pre-upgrade"
```

If you have any issues, [contact technical support](https://support.cognigy.com/hc/en-us/requests/new?).
