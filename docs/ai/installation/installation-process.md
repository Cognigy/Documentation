---
title: "Installation Process"
slug: "installation-process"
hidden: false
---
# Install Cognigy.AI

## Install Helm Charts 

To install Cognigy.AI perform the following steps: 

1. Install MongoDB database with [MongoDB Helm Chart for Cognigy.AI](https://github.com/Cognigy/cognigy-mongodb-helm-chart). For up-to-date installation instructions, refer to [README.md](https://github.com/Cognigy/cognigy-mongodb-helm-chart#readme).
2. Install Cognigy.AI with [Cognigy.AI Helm Chart](https://github.com/Cognigy/cognigy-ai-helm-chart). For up-to-date installation instructions, refer to [README.md](https://github.com/Cognigy/cognigy-ai-helm-chart#readme).


Once both Helm releases are successfully installed, you can open a web-browser and visit the URL, which you have set in `serviceUi.host` parameter Cognigy.AI Helm release. You should be able to see the login screen of Cognigy.AI frontend application:

<figure>
  <img class="image-center" src="../../../../_assets/ai/installation/cognigy-ai-login-screen.png" width="90%" />
  <figcaption>Login screen of Cognigy.AI v4</figcaption>
</figure>

## Retrieve Login Credentials

Once you are able to see the Cognigy.AI login screen, you might wonder which credentials can be used to log in. We chose not to add default `admin` user with static-credentials as such users will often not get properly removed from systems and leave software products exposed to potential security attacks. Our system creates random credentials on startup if no credentials exist within the system yet. The credentials will get printed into `service-security` deployment logs during its first start-up, to retrieve the initial credentials execute: 

```bash
kubectl logs -f -n=cognigy-ai --tail 100 deployment/service-security
```

You should see something along the following lines with initial user credentials (email and password): 

```bash
{"level":"info","time":"2022-07-18T14:07:53.328Z","name":"SECURITY","message":"This is the initial user account you can use to login","meta":{},"traceId":""}
{"level":"info","time":"2022-07-18T14:07:53.328Z","name":"SECURITY","message":"email: userc3c6ee0f61@cognigy.com","meta":{},"traceId":""}
{"level":"info","time":"2022-07-18T14:07:53.328Z","name":"SECURITY","message":"password: 1caf47b6b79efc59d5f11fde0669b261aA1!","meta":{},"traceId":""}
```

It may happen that `service-security` deployment gets restarted several times during provisioning and the initial logs are not visible anymore. If `service-security` has restarted only once, you can obtain the logs of the previous container with `--previous` flag:

```bash
kubectl logs -n=cognigy-ai --previous deployment/service-security
```
If `service-security` was restarted several times, to reset init user credentials, you will need to drop `service-security` database in MongoDB database and restart `service-security` deployment. 

**IMPORTANT: All Organizations and Users will be lost during this process. Perform it only during initial Cognigy.AI setup**.  Here is a separate document on how to [Reset Initial Credentials](reset-init-user-credentials.md).

## License Key Activation
Once you obtained the initial user credentials, visit the web interface of Cognigy.AI,
but replace the URL ending `/login` with `/license`.
This will open our license activation screen, which looks quite similar to the login-form but with an additional license-key field:

<figure>
  <img class="image-center" src="../../../../_assets/ai/installation/cognigy-ai-license-key.png" width="90%" />
  <figcaption>Activating Cognigy.AI Product License</figcaption>
</figure>


Paste initial credentials (email and password) and your license-key (including both `====BEGIN LICENSE====` and `=====END LICENSE=====` delimiters) and click `Activate license`. If everything worked, the application will redirect to the login screen on which you can log in to finally get start to use Cognigy.AI.

!!! warning "Limited Windows support"
    If you open and save the file with the license key on a Windows machine, it may become corrupted with hidden windows characters. Use a Linux machine to copy the license or a Windows text editor, which can handle linux files properly, e.g. [Notepad++](https://notepad-plus-plus.org/)

!!! warning "Manage Secrets with Argo CD"
    If you're using [Argo CD](https://argo-cd.readthedocs.io/en/stable/) to manage the deployment of Cognigy.AI, note that Argo CD doesn't support the [lookup function](https://helm.sh/docs/chart_template_guide/functions_and_pipelines/#using-the-lookup-function) from Helm. Read more details about this issue on [GitHub](https://github.com/argoproj/argo-cd/issues/5202). Cognigy.AI relies heavily on the lookup function to generate secrets dynamically. Since Argo CD doesn't support the lookup function, Cognigy.AI will change the value of the secret with every update. 

    To avoid this, you can use the option of `existingSecret`. All secret templates are structured so that when `existingSecret` is defined, the lookup function won't be used, preventing the previously mentioned issue. The example shows how to use `existingSecret`: 

    ```yaml
    dbConnectionString:
      enabled: true
      services:
        serviceAi:
          enabled: true
          serviceName: service-ai
          auth:
            existingSecret: "<secret-name>"
    ```
    We suggest to follow the below sequence: 

    1. Let the Helm chart create all the secrets during the first-time installation of Cognigy.AI.
    2. Take a backup of the secrets by following [Backups](backups.md).
    3. Backport the name of all relavent secrets to the `values.yaml` file as `existingSecret`. 
    
    New secrets are frequently added to Cognigy.AI, so you need to review the newly created secrets after each update and backport them as `existingSecret`. You can identify new secrets by checking `creationTimestamp`. To list secrets with their `creationTimestamp`, run the following command:

    ```bash
    kubectl get secrets -n <namespace> -o custom-columns="NAME:.metadata.name,CREATED:.metadata.creationTimestamp"
    ```


     
