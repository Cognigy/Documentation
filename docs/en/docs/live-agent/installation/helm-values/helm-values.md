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
ingress:
  enabled: false
  annotations:
    kubernetes.io/ingress.class: traefik
  hosts:
    - host: "live-agent-domain.com"
      paths:
        - path: /
          pathType: Prefix
          backend:
            service:
              name: live-agent

configmap:
  # Comment about a commented variable, it is ignored
  # REST_CLIENT_SSL_VERIFICATION=false
  FORCE_SSL: true
```

Apart from modifying or commenting the variables inside the `values.yaml` file, parameters can be modified also using the `--set key=value[,key=value]` argument to `helm install`. For example:

```sh
helm install my-release \
  --set configmap.SSL_CA_FILE="/etc/ca.pem"\
    ./cognigy-live-agent
```

The above command sets the Live Agent certificate file path to `/etc/ca.pem`. More information can be found at the Helm documentation [Template and Values](https://helm.sh/docs/chart_best_practices/values).

It is recommended to create a `custom-values.yaml` and add the key-values that need to be overridden instead of modifying the `values.yaml` file directly. Then at the moment of performing install/upgrade commands, it would be as easy as using the argument at the end like this:

```sh
helm install cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version X.X.X --namespace live-agent -f custom-values.yaml
```

Next, you can find a definition for each of these values, to understand how to modify them accordingly. 

## Specific Configurations

For specific values and logic, here you can utilize these dedicated sections:

- [Database]({{config.site_url}}live-agent/installation/helm-values/database/)
- [Redis]({{config.site_url}}live-agent/installation/helm-values/redis/)
- [Storage]({{config.site_url}}live-agent/installation/helm-values/storage/)
- [SMTP]({{config.site_url}}live-agent/installation/helm-values/smtp/)
- [Email Templates]({{config.site_url}}live-agent/installation/helm-values/email-templates/)

## Image Values

| Name                | Description                                          | Value                 |
| ------------------- | ---------------------------------------------------- | --------------------- |
| `image.repository`  | Live Agent Image Repository                           | `cognigy.azurecr.io/live-agent`    |
| `image.tag`         | Live Agent Image Tag                                  | `e.g. 2.0.0`              |
| `image.pullPolicy`  | Live Agent Image Pull Policy                          | `IfNotPresent`         |
| `image.pullSecretName`  | Live Agent Image Pull secret name                          | `cognigy-registry-token`         |
| `odata.image.repository`  | Live Agent OData Image Repository                           | `cognigy.azurecr.io/live-agent-odata`    |
| `odata.image.tag`         | Live Agent OData Image Tag                                  | `e.g. 1.0.0`              |
| `odata.image.pullPolicy`  | Live Agent OData Image Pull Policy                          | `IfNotPresent`         |
| `odata.image.pullSecretName`  | Live Agent OData Image Pull secret name                          | `cognigy-registry-token`         |


## ConfigMap Values

### App Values

| Name                                | Description                                                                | Default Value                                              |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `configmap.FORCE_SSL`                     | Force all access to the app over SSL, default is set to false.                  | `"false"`                                                  |
| `configmap.SECRET_KEY_BASE`               | Used to verify the integrity of signed cookies. Ensure a secure value is set.   | `"wsedrfghjhygtfrdecfvbhnygtfvbtyftctdrxresxcygvujhb"`     |
| `configmap.USE_INBOX_AVATAR_FOR_BOT`      | Bot Customizations                                                              | `"true"`                                                   |
| `configmap.FRONTEND_EXTERNAL_URL`     | Set a different Frontend URL for external systems to access Live Agent (e.g. request file upload)                                  | `""` |

### Cognigy

#### App Platform Token

Cognigy.AI uses the app platform token to perform operations using the Live Agent API. These include synchronising data and creating it (e.g. Inboxes and accounts). The value is automatically created when installing Live Agent with a random string. It can be set using an existing secret to have constant values (recommended).

| Name                                | Description                                                                | Default Value                                       |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `cognigyPlatformAppToken.existingSecret`     | Cognigy App Platform Token Secret Name                 | `""`                                                                     |
| `cognigyPlatformAppToken.existingSecretKey`     | Cognigy App Platform Token Secret Key                 | `""`                                                                     |

#### URL

| Name                                | Description                                                                | Default Value                                              |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `configmap.COGNIGY_AI_UI_BASE_URL_WITH_PROTOCOL`     | URL used for accesing Cognigy.AI from Live Agent.                                  | `""`                                                   |

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

### Push Notifications

For enabling push notifications, you need to provide the following values, as Live Agent uses [VAPID](https://datatracker.ietf.org/doc/html/draft-ietf-webpush-vapid-01) to be more secure. They can be generated by using [this tool](https://d3v.one/vapid-key-generator).

| Name                                | Description                                                                | Default Value                                       |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `configmap.VAPID_PUBLIC_KEY`     | VAPID public key                 | `"`                                                                     |
| `configmap.VAPID_PRIVATE_KEY`          | VAPID private key                | `""`                                                    |

## OData

| Key |Description | Type | Default Value |
|-----|------|---------|---------|
| `odata.enabled`     | Enable OData service and endpoint          |  Boolean   | `true`                                                                     |
| `odata.configmap.ODATA_PROTOCOL`          | http or https        |  String     | `"https"`                                                    |

## Other Values

| Key | Type | Default Value |
|-----|------|---------|
| `affinity` | object | `{}` |
| `frontendUrlOverride`                  | By default the Frontend URL is the Ingress host. Override it with this property in case it is necessary.                      | `"https://live-agent-domain.com/"`                                   |
| `fullnameOverride` | string | `""` |
| `hooks.affinity` | object | `{}` |
| `hooks.migrate.env` | list | `[]` |
| `hooks.migrate.hookAnnotation | string | `"post`-install,post-upgrade"` |
| `hooks.migrate.resources.limits.memory` | string | `"1000Mi"` |
| `hooks.migrate.resources.requests.memory` | string | `"1000Mi"` |
| `ingress.annotations` | object | `{}` |
| `ingress.enabled` | bool | `false` |
| `ingress.hosts[0].host` | string | `""` |
| `ingress.hosts[0].paths[0].backend.service.name` | string | `"live-agent"` |
| `ingress.hosts[0].paths[0].backend.service.port.number` | int | `3000` |
| `ingress.hosts[0].paths[0].path` | string | `"/"` |
| `ingress.hosts[0].paths[0].pathType` | string | `"Prefix"` |
| `ingress.tls` | list | `[]` |
| `nameOverride` | string | `""` |
| `nodeSelector` | object | `{}` |
| `podAnnotations` | object | `{}` |
| `podSecurityContext` | object | `{}` |
| `resources` | object | `{}` |
| `securityContext` | object | `{}` |
| `service.port` | int | `80` |
| `service.type` | string | `"ClusterIP"` |
| `serviceAccount.annotations` | object | `{}` |
| `serviceAccount.create` | bool | `true` |
| `serviceAccount.name` | string | `""` |
| `services.annotations` | object | `{}` |
| `services.internlPort` | int | `3000` |
| `services.name` | string | `"live-agent"` |
| `services.targetPort` | int | `3000` |
| `services.type` | string | `"LoadBalancer"` |
| `tolerations` | list | `[]` |
| `app.replica` | int | `1` |
| `worker.replica` | int | `1` |
