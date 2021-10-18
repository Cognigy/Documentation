# Installation Updates

For upgrading the Live Agent installation, once you have the new package version, run the following command:

```sh
 helm upgrade --namespace your-namespace cognigy-live-agent ./cognigy-live-agent
```

>**Note:** Learn more about making upgrades and rollbacks at the [official docs](https://helm.sh/docs/intro/using_helm/#helm-upgrade-and-helm-rollback-upgrading-a-release-and-recovering-on-failure)

It should run a database migration job automatically and apply every new change. 


In case it fails, you can run the following command manually inside one of the main Live Agent pod:

```sh
bin/rails db:migrate
```
