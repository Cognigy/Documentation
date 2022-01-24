---
 title: "Installation Updates" 
 slug: "installation-updates" 
 hidden: false 
---
# Installation Updates

For upgrading the Live Agent installation, once you have the new package version, run the following command:

```sh
 helm upgrade --namespace your-namespace cognigy-live-agent ./cognigy-live-agent
```

>**Note:** Learn more about making upgrades and rollbacks at the [official Helm Docs](https://helm.sh/docs/intro/using_helm/#helm-upgrade-and-helm-rollback-upgrading-a-release-and-recovering-on-failure)

This command should automatically run a database migration job and apply every new change. 


In case it fails, you can manually run the following command inside one of the main Live Agent pods:

```sh
bin/rails db:migrate
```
