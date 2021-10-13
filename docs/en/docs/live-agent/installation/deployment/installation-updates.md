# Installation Updates

For upgrading the Live Agent installation, once you have the new package version, run the following command:

```sh
 helm upgrade --namespace your-namespace cognigy-live-agent ./cognigy-live-agent
```

It should run a database migration job automatically and apply every new change. 


In case it fails, you can run the following command manually inside the main Live Agent pod:

```sh
bin/rails db:migrate
```
