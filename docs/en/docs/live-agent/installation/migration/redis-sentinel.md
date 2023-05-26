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

Values under `.Values.redis` need to be changed to contain the `.Values.redis.sentinel` option enabled like this:

```yaml
# ...

redis:
  enabled: true
  fullnameOverride: redis-ha
  image:
    registry: docker.io
    repository: bitnami/redis
    tag: 7.0.7-debian-11-r7
    pullSecrets: []
  commonConfiguration: |-
    appendonly no
    protected-mode no
    repl-diskless-sync no
    save 60 1
    stop-writes-on-bgsave-error no
  replica:
    replicaCount: 3
    resources:
      limits:
        cpu: 500m
        memory: 512Mi
      requests:
        cpu: 200m
        memory: 100Mi
    podLabels:
      uniquezone: "la-redis-ha"
    affinity:
      podAntiAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
                - key: "uniquezone"
                  operator: In
                  values:
                    - "la-redis-ha"
            topologyKey: "topology.kubernetes.io/zone"
    persistence:
      enabled: true
      size: 16Gi
  # Enabling sentinel
  sentinel:
    enabled: true
    image:
      registry: docker.io
      repository: bitnami/redis-sentinel
      tag: 7.0.7-debian-11-r6
      pullSecrets: []
    automateClusterRecovery: true
    downAfterMilliseconds: 2000
    failoverTimeout: 10000
    resources:
      limits:
        cpu: 500m
        memory: 512Mi
      requests:
        cpu: 200m
        memory: 100Mi
  metrics:
    enabled: true
    image:
      registry: docker.io
      repository: bitnami/redis-exporter
      tag: 1.45.0-debian-11-r22
      pullSecrets: []
    resources:
      limits:
        cpu: 200m
        memory: 200Mi
      requests:
        cpu: 50m
        memory: 50Mi
    serviceMonitor:
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
