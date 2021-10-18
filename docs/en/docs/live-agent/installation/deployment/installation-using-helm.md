# Installation using Helm

Helm is a tool for easily deploying resources into a Kubernetes cluster. First, install it following the [official documentation](https://helm.sh/docs/intro/install/)

For the Helm chart installation, a Helm package will be provided. Once you have downloaded, install it in your Kubernetes cluster with the following command:

```sh
helm install --namespace your-namespace cognigy-live-agent ./cognigy-live-agent
```

>**Note:** Out Helm chart is compatible and has been tested with API version v2. Older versions are not compatible.

It will create the secrets, deploy the pods, and run a job building the tables on the Database. After a while, the following message should display.

```
NOTES:
Thank you for installing live-agent.

Your release is named cognigy-live-agent with version .

The following secrets have been created:
- cognigy-live-agent-postgresql
- cognigy-live-agent-redis
- cognigy-live-agent-smtp

To learn more about the release, try:

  $ helm status cognigy-live-agent
  $ helm get all cognigy-live-agent

NOTE: It may take a few minutes for the LoadBalancer IP to be available.
You can watch the status by running
'kubectl get svc -w cognigy-live-agent'
```

For learning about customizing the installation, head over to the docs [Customizing the chart before installing](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing). 

Once you have a good understanding of how customizing works, you can look at the section [Helm Values](/live-agent/installation/helm-values/), which contains a brief explanation about each value its purpose.
