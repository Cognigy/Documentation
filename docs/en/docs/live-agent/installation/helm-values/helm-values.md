---
 title: "Helm Values" 
 slug: "helm-values" 
 hidden: false 
---
# Helm Values
## Quick Introduction
Helm values are all the variables used for configuring the Live Agent app and resources. These are stored on a file called `values.yaml`. It can be edited as desired to configure Live Agent behavior. Here is an example of this file:
```yaml
# Defining Ingress host
    ./cognigy-live-agent
```
The above command sets the Live Agent certificate file path to `/etc/ca.pem`. More information can be found at the Helm documentation [Template and Values](https://helm.sh/docs/chart_best_practices/values).
Next, you can find a definition for each of these values, to understand how to modify them accordingly. 
## Specific Configurations
For specific values and logic, here you can utilize these dedicated sections:
- [Database]({{config.site_url}}live-agent/installation/helm-values/database/)
- [Redis]({{config.site_url}}live-agent/installation/helm-values/redis/)
| Name                | Description                                          | Value                 |
| ------------------- | ---------------------------------------------------- | --------------------- |
| `image.repository`  | Live Agent Image Repository                           | `cognigy.azurecr.io/live-agent`    |
| `image.tag`         | Live Agent Image Tag                                  | `e.g. 2.0.0`              |
| `image.pullPolicy`  | Live Agent Image Pull Policy                          | `IfNotPresent`         |
| `odata.image.repository`  | Live Agent Image Repository                           | `cognigy.azurecr.io/live-agent-odata`    |
| `odata.image.tag`         | Live Agent Image Tag                                  | `e.g. 1.0.0`              |
| `odata.image.pullPolicy`  | Live Agent Image Pull Policy                          | `IfNotPresent`         |
## ConfigMap Values
| Name                                | Description                                                                | Default Value                                              |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `configmap.CHATWOOT_INSTALLATION_ENV`     | Sets Live Agent installation method.                                  | `"helm"`                                                   |
| `configmap.ENABLE_ACCOUNT_SIGNUP`         |  `true` : default option, allows sign ups, `false` : disables all the end points related to sign ups, `api_only`: disables the UI for signup, but you can create sign ups via the account APIs.  | `"false"`                                                  |
| `configmap.FORCE_SSL`                     | Force all access to the app over SSL, default is set to false.                  | `"false"`                                                  |
| `configmap.RAILS_ENV`                     | Sets rails environment.                                                         | `"production"`                                             |
| `configmap.RAILS_MAX_THREADS`             | Number of threads each worker will use.                                         | `"5"`                                                      |
| `configmap.SECRET_KEY_BASE`               | Used to verify the integrity of signed cookies. Ensure a secure value is set.   | `"wsedrfghjhygtfrdecfvbhnygtfvbtyftctdrxresxcygvujhb"`     |
| `configmap.USE_INBOX_AVATAR_FOR_BOT`      | Bot Customizations                                                              | `"true"`                                                   |
### Cognigy
#### App Platform Token
Cognigy.AI uses the app platform token to perform operations using the Live Agent API. These include synchronising data and creating it (e.g. Inboxes and accounts). The value is automatically created when installing Live Agent with a random string. It can be set using an existing secret to have constant values (recommended).
| Name                                | Description                                                                | Default Value                                       |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `cognigyPlatformAppToken.existingSecret`     | Cognigy App Platform Token Secret Name                 | `""`                                                                     |
| `cognigyPlatformAppToken.existingSecretKey`     | Cognigy App Platform Token Secret Key                 | `""`                                                                     |
#### URL
#### OAuth Values
These are the values used for enabling the Cognigy authentication in Live Agent. This allows Cognigy users to log into Live Agent with their same credentials.
| Name                                | Description                                                                | Default Value                                       |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `configmap.COGNIGY_OAUTH_CLIENT_ID`     | OAuth Client ID                 | `"cognigy-live-agent"`                                                                     |
| `configmap.COGNIGY_OAUTH_SITE`          | Cognigy API Site                | `"https://api-installation.cognigy.ai"`                                                    |
| `configmap.COGNIGY_OAUTH_AUTHORIZE_URL` | Cognigy OAuth API Authorize URL | `"https://installation.cognigy.ai/login?cognigy-live-agent=true"`                          |
| `configmap.COGNIGY_OAUTH_TOKEN_URL`     | OAuth Token URL                 | `"https://api-installation.cognigy.ai/auth/oauth2/token"`                                  |
For the OAuth client secret, the following values must be set:
| Name                                | Description                                                                | Default Value                                       |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `cognigyOAuth.existingSecret`     | Secret Name for The OAuth Client Secret                 | `""`                                                                     |
| `cognigyOAuth.existingSecretKey`          | Secret key For The OAuth Client Secret                | `""`                                                    |
### Rest Client SSL
In case you have a custom Certificate Authority (CA) to trust, or if you need SSL to be disabled, these settings are necessary.
| Name                                | Description                                                                | Default Value                                              |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `configmap.REST_CLIENT_SSL_VERIFICATION`  | Rest client config for webhooks API channel.                                     | `"true"`                                                   |
| `configmap.SSL_CA_FILE`                   | CA File Name                                                                    | `"ca.pem"`                                                 |
| `configmap.SSL_CLIENT_CERT`               | Client Cert, X509 Format                                                        | `""`                                                       |
| `configmap.SSL_CLIENT_KEY`                | RSA key content, if there is not passphrase.                                    | `""`                                                       |
| `configmap.SSL_CLIENT_KEY_PASSPHRASE` | RSA key passphrase, if there is not passphrase.                           | `""`                                                       |
| `configmap.LOG_LEVEL`                     | string                                                              | `"info"`                                                   |
| `configmap.LOG_SIZE`                      | string                                                              | `"500"`                                                    |                                                      |
### Push Notifications
For enabling push notifications, you need to provide the following values, as Live Agent uses [VAPID](https://datatracker.ietf.org/doc/html/draft-ietf-webpush-vapid-01) to be more secure. They can be generated by using [this tool](https://d3v.one/vapid-key-generator).
| Name                                | Description                                                                | Default Value                                       |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
## OData
| Key |Description | Type | Default Value |
|-----|------|---------|---------|
| `odata.enabled`     | Enable OData service and endpoint          |  Boolean   | `true`                                                                     |
| `odata.configmap.ODATA_PROTOCOL`          | http or https        |  String     | `"https"`                                                    |
| `autoscaling.maxReplicas` | int | `100` |
| `autoscaling.minReplicas` | int | `1` |
| `autoscaling.targetCPUUtilizationPercentage` | int | `80` |
| `frontendUrlOverride`                  | By default the Frontend URL is the Ingress host. Override it with this property in case it is necessary.                      | `"https://live-agent-domain.com/"`                                   |
| `fullnameOverride` | string | `""` |
| `hooks.affinity` | object | `{}` |
| `hooks.migrate.env` | list | `[]` |