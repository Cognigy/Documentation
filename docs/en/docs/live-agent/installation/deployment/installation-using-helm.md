# Installation using Helm

Helm is a tool for easily deploying resources into a Kubernetes cluster. For the Helm chart installation, a Helm package will be provided. Once you have downloaded, install it in your Kubernetes cluster with the following command:

```sh
helm install --namespace your-namespace cognigy-live-agent ./cognigy-live-agent
```

It will create the secrets, deploy the pods, and run a job for creating the tables on the Database. After a while, the following message should display.

For customising the installation head over to [Helm Values](/live-agent/installation/configuration/helm-values/)
