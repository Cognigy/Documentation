---
title: "Installation using Helm" 
slug: "installation-using-helm" 
hidden: false 
---

# Installation using Helm

Helm Chart is a tool for easily deploying resources into a Kubernetes cluster. To get started, install it by referring to the [official documentation](https://helm.sh/docs/intro/install/).

For the Helm chart installation, the Helm package needs to be pulled from the Cognigy OCI registry. There are two ways of pulling the Helm Chart. First, you need to have access to the OCI registry `cognigy.azurecr.io` in both of them (Are the same credentials as for the Docker registry). Then do the following:

1. Set the following environment variable for running all the commands below:

   ```sh
   HELM_EXPERIMENTAL_OCI=1
   ```

2. Login to the OCI prod registry with the following command:

   ```sh
   helm registry login cognigy.azurecr.io
   ```

## Pulling and installing at the same time (preferred)

The following command can be used to install and pull the Live Agent Helm chart at the same time:

```sh
helm install cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version X.X.X --namespace live-agent -f custom-values.yaml
```

Note that the `custom-values.yaml` file can contain just the values that need to be overridden, such as ingresses configurations, replicas and resources. In this way, the new release won't break the existing setup. You can refer to the documentation and see the [release notes](../../../release-notes/index.md) related to Helm if it does.

## Pulling and modifying the `values.yaml` file

Run the following command:

```sh
helm pull oci://cognigy.azurecr.io/helm/live-agent --version X.X.X
```

This will download the Helm chart compressed.

`live-agent-X.X.X.tgz`

Now it can be uncompressed, the `values.yaml` file inside the folder needs to be modified according to your needs and then, the chart can be installed by using the following command:

```sh
helm install cognigy-live-agent ./live-agent-X.X.X --namespace live-agent
```

## After running the `helm install` command

>**Note:** Our Helm chart has been tested and is compatible with API version v2. Older versions are not compatible.

This command will create the secrets, deploy the pods, and run a job building the tables on the Database. Also, remember that if you have a secret for pulling Docker images, it must also be applied to the namespace where Live Agent will be installed. After some time, the following message should appear.

```
NOTES:
Thank you for installing live-agent.

Your release is named cognigy-live-agent with version .

The following secrets have been created:
- cognigy-live-agent-postgresql
- cognigy-live-agent-redis

To learn more about the release, try:

  $ helm status cognigy-live-agent
  $ helm get all cognigy-live-agent

NOTE: It may take a few minutes for the LoadBalancer IP to be available.
You can watch the status by running
'kubectl get svc -w cognigy-live-agent'
```

For learning about customizing your installation, head over to Helm Docs [Customizing the chart before installing](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing).

Once you have a good understanding of how customizing works, you can look at the section [Helm Values](../helm-values/helm-values.md), which contains a brief explanation about each value and its purpose.
