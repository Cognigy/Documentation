---
 title: "Installation Updates" 
 slug: "installation-updates" 
 hidden: false 
---
# Installation Updates

For upgrading the Live Agent installation, once there is a new release, there are two ways:

- [Pulling and upgrading at the same time](#pulling-and-upgrading-at-the-same-time)
- [Pulling and modifying the `values.yaml` file](#pulling-and-modifying-the-valuesyaml-file)

!!! note
    Learn more about making upgrades and rollbacks at the [official Helm Docs](https://helm.sh/docs/intro/using_helm/#helm-upgrade-and-helm-rollback-upgrading-a-release-and-recovering-on-failure).

## Pulling and upgrading at the same time

The following command can be used to pull and upgrade the Live Agent Helm chart at the same time:

```sh
 helm upgrade cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version X.X.X --namespace live-agent -f custom-values.yaml
```

Note that the `custom-values.yaml` file can contain just the values that need to be overridden, such as ingresses configurations, replicas and resources. In this way, the new release won't break the existing setup. You can refer to the documentation and see the [release notes](../../../release-notes/index.md) related to Helm if it does.

## Pulling and modifying the `values.yaml` file

Run the following command:

```sh
helm pull oci://cognigy.azurecr.io/helm/live-agent --version X.X.X
```

This will download the Helm chart compressed.

`live-agent-X.X.X.tgz`

Now it can be uncompressed, the `values.yaml` file inside the folder needs to be modified according to your needs, and then, the chart can be upgraded by using the following command:

```sh
 helm upgrade cognigy-live-agent ./live-agent-X.X.X --namespace live-agent
```

## Troubleshooting

Both upgrade commands should automatically run a database migration job and apply every new change.

In case it fails, you can manually run the following command inside one of the main Live Agent pods:

```sh
bin/rails db:migrate
```
