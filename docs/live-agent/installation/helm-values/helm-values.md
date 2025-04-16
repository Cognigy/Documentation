---
title: "Helm Values" 
slug: "helm-values" 
hidden: false 
tags:
  - Live Agent
  - Helm Values
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
              name: cognigy-live-agent-app

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

For specific values and logic, here you can use these dedicated sections:

- [Database](database.md)
- [Redis](redis.md)
- [Storage](storage.md)
- [SMTP](smtp.md)
- [Email Templates](email-templates.md)

## Images

| Name                         | Description                             | Value                                 |
|------------------------------|-----------------------------------------|---------------------------------------|
| `image.repository`           | Live Agent Image Repository             | `cognigy.azurecr.io/live-agent`       |
| `image.tag`                  | Live Agent Image Tag                    | `e.g. 2.0.0`                          |
| `image.pullPolicy`           | Live Agent Image Pull Policy            | `IfNotPresent`                        |
| `image.pullSecretName`       | Live Agent Image Pull secret name       | `cognigy-registry-token`              |
| `odata.image.repository`     | Live Agent OData Image Repository       | `cognigy.azurecr.io/live-agent-odata` |
| `odata.image.tag`            | Live Agent OData Image Tag              | `e.g. 1.0.0`                          |
| `odata.image.pullPolicy`     | Live Agent OData Image Pull Policy      | `IfNotPresent`                        |
| `odata.image.pullSecretName` | Live Agent OData Image Pull secret name | `cognigy-registry-token`              |

## Cognigy

### App Platform Token

Cognigy.AI uses an App Platform Token to perform operations,
 such as synchronizing and creating data (for example, Inboxes and accounts),
using the Live Agent API.
For this, Live Agent and Cognigy.AI need to have secrets set to matching values.

#### Live Agent Secret

The recommendation is to create a new secret under the Live Agent namespace and reference it in the Helm values. Otherwise, it will automatically create a secret called `live-agent-cognigy-live-agent-cognigy-platform-app-token` with a random value (this secret will be persisted and not changed in future Helm upgrades).

| Name                                        | Description                            | Default Value |
|---------------------------------------------|----------------------------------------|---------------|
| `cognigyPlatformAppToken.existingSecret`    | Cognigy App Platform Token Secret Name | `""`          |
| `cognigyPlatformAppToken.existingSecretKey` | Cognigy App Platform Token Secret Key  | `""`          |

> Note: The secret key value must be a random alphanumeric string of 24 characters, similar to `V65Xyf6pphEeac64g2d92pvw`

#### Cognigy.AI Secret

The following Helm values need to be set up:

```yaml
cognigyLiveAgent:
  ## Existing secret with live-agent credentials. The secret must have the following key:
  ##   "cognigy-live-agent-platform-token": The token for cognigy live agent
  existingSecret: ""
```

#### Troubleshooting

If the secrets are the same value, but the integration is not working (for example, handover or preconfigured Live Agent not working), perform the following:

1. Restart the `live-agent-cognigy-live-agent-XXX` app pod in the Live Agent namespace.
2. Restart the following Cognigy.AI pods in the Cognigy.AI namespace:
   - service-handover
   - service-security
   - service-api
   - service-resources
   - service-ui

### OAuth

These are the values used for enabling the Cognigy authentication in Live Agent. This allows Cognigy users to log in to Live Agent with their same credentials.

| Name                                    | Description                     | Default Value                                                     |
|-----------------------------------------|---------------------------------|-------------------------------------------------------------------|
| `configmap.COGNIGY_OAUTH_CLIENT_ID`     | OAuth Client ID                 | `"cognigy-live-agent"`                                            |
| `configmap.COGNIGY_OAUTH_SITE`          | Cognigy API Site                | `"https://api-installation.cognigy.ai"/v2.0`                      |
| `configmap.COGNIGY_OAUTH_AUTHORIZE_URL` | Cognigy OAuth API Authorize URL | `"https://installation.cognigy.ai/login?cognigy-live-agent=true"` |
| `configmap.COGNIGY_OAUTH_TOKEN_URL`     | OAuth Token URL                 | `"https://api-installation.cognigy.ai/auth/oauth2/token"`         |

For the OAuth client secret, create a secret in the Live Agent namespace and then set the following values:

| Name                             | Description                             | Default Value |
|----------------------------------|-----------------------------------------|---------------|
| `cognigyOAuth.existingSecret`    | Secret Name for The OAuth Client Secret | `""`          |
| `cognigyOAuth.existingSecretKey` | Secret key For The OAuth Client Secret  | `""`          |

> Note: The secret key value must be a random alphanumeric string of 64 characters, similar to `DUSOBAPM2L5V3CNLBw48surpgzrpk6bji9fav65xyf6ppheeac64g2d92pvwouhm`

#### Cognigy.AI

The following Helm values need to be set up:

```yaml
cognigyEnv:
  ...
  COGNIGY_LIVE_AGENT_API_BASE_URL_WITH_PROTOCOL: <live-agent-url>"
  CLIENT_ID_COGNIGY_LIVE_AGENT: "cognigy-live-agent"
  CLIENT_SECRET_COGNIGY_LIVE_AGENT: "<secret-value>"
  REDIRECT_URI_COGNIGY_LIVE_AGENT: "<live-agent-url>/omniauth/cognigy/callback"
  COGNIGY_LIVE_AGENT_UI_BASE_URL_WITH_PROTOCOL: "<live-agent-url>"
  FEATURE_USE_COGNIGY_LIVE_AGENT: "true"
```

#### Troubleshooting

If the secrets and configmaps are the same value, but the integration is not working (for example, OAuth configuration error "Something is wrong with the OAuth configuration"), perform the following:

1. Restart the `cognigy-live-agent-app-XXX` app pod in the Live Agent namespace.
2. Restart the following Cognigy.AI pods in the Cognigy.AI namespace:
   - service-security
   - service-api
   - service-resources
   - service-ui

### Insights

In order to send analytics about conversations from Live Agent to Insights, there is a need to set the following Helm values:

| Name                        | Description                                                                                  | Default Value                                                  |
|-----------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| `cognigyInsights.apiUrl`    | This is the url of the service collector and will consist of the service name and namespace. | `"http://service-collector.cognigy-ai.svc.cluster.local:8000"` |
| `cognigyInsights.secret`    | Secret name containing the key and value for the API key                                     | `""`                                                           |
| `cognigyInsights.secretKey` | Secret key that points to the value for the API key                                          | `""`                                                           |

The value for the secret key is obtained from the secret
contained in the Cognigy.AI namespace with the name "overview-collector-api-key"
and a key called Secret.
The URL needs to point to the Insights service-collector local address.

#### Troubleshooting

If these values are not set, conversation analytics data will not be sent to Insights and a warning log will be displayed when Live Agent pod starts.

```
Data will not be sent to Cognigy Insights, as neither of the following environment variables were set: COGNIGY_INSIGHTS_API_KEY and COGNIGY_INSIGHTS_API_BASE_URL_WITH_PROTOCOL
```

### URLs

| Name                                              | Description                                           | Default Value                             |
|---------------------------------------------------|-------------------------------------------------------|-------------------------------------------|
| `configmap.COGNIGY_AI_UI_BASE_URL_WITH_PROTOCOL`  | URL used for accessing Cognigy.AI UI from Live Agent. | `""https://installation.cognigy.ai""`     |
| `configmap.COGNIGY_AI_API_BASE_URL_WITH_PROTOCOL` | URL for performing requests to Cognigy.AI API         | `""https://api-installation.cognigy.ai""` |

## File Upload Antivirus Scan

In order to enable the antivirus file upload scan, the following values must be enabled:

| Name                      | Description                                              | Default Value |
| ------------------------- | -------------------------------------------------------- | ------------- |
| `antivirusScan.enabled`   | Boolean to enable file upload antivirus scan             | `false`       |
| `antivirusScan.resources` | Recommended values are already set for the pod resources |               |

It will scan the file uploading for viruses and block the upload if a virus is found. It scans any file uploaded contained in a message as an attachment, including the ones from Live Agent UI and Cognigy.AI Webchat.

## App

| Name                                 | Description                                                                                       | Default Value |
| ------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------- |
| `configmap.FORCE_SSL`                | Force all access to the app over SSL, default is set to false.                                    | `"false"`     |
| `configmap.GOOGLE_MAPS_API_TOKEN`    | This value is used to load a Google Maps map with the location shared by the user.                | `""`          |
| `configmap.USE_INBOX_AVATAR_FOR_BOT` | Bot Customizations                                                                                | `"true"`      |
| `configmap.FRONTEND_EXTERNAL_URL`    | Set a different Frontend URL for external systems to access Live Agent (e.g. request file upload) | `""`          |
| `configmap.SENTRY_DSN`               | Sentry DSN for error tracking                                                                     | `""`          |

### Cookies Integrity

Live Agent uses a secure stored for signing cookies. The `SECRET_KEY_BASE` value must be set to a secure value. The default value is set to a random string, but it is recommended to change it to a secure value.

> Note: Previously the `SECRET_KEY_BASE` was set directly under the `configmap` section. This is now deprecated and should be set under the `cookiesIntegrity` section. For previous installations, it is recommended to create an existing secret, otherwise the value will change, and all the Live Agent user sessions will expire.

```yaml
cookiesIntegrity:
  # Uncomment these lines in case there is an existing secret and don't want to create it on install
  # existingSecret: "<secret-name>"
  # existingSecretKey: "<secret-key>"
```

### Rest Client SSL

Live Agent performs requests to Cognigy.AI APIs. If you are running Cognigy.AI services with a Self-Signed Certificate with Custom Certificate Authority (CA) to trust, or if you need SSL to be disabled, these settings are necessary.

#### Certificates Verification

| Name                          | Description                         | Default Value |
| ----------------------------- | ----------------------------------- | ------------- |
| `restClient.ssl.verification` | Enable SSL certificate verification | `"true"`      |

#### Self-Signed Certificate with Custom Certificate Authority

Create a secret with a key named the certificate file name (e.g. `cert.pem`). It will be mounted in the pod file system to be trusted by the Live Agent app. The value must contain the certificate file content without extra tabs/spaces. Then fill in the following values:

| Name                         | Description    |
| ---------------------------- | -------------- |
| `restClient.ssl.CASecret`    | CA secret name |
| `restClient.ssl.CASecretKey` | CA secret key  |

Ensure pods are restarted after updating the values.

#### Client Certificate

For using a client certificate, create a secret containing the client certificate, the client certificate key and the key passphrase (if the key has a passphrase). Then fill in the following values:

| Name                                          | Description                                                                       |
|-----------------------------------------------|-----------------------------------------------------------------------------------|
| `restClient.ssl.clientCertSecret`             | Client cert secret name                                                           |
| `restClient.ssl.clientCertSecretKey`          | Client cert secret key. Its value must be in X509 format                          |
| `restClient.ssl.clientKeySecretKey`           | Client key secret key. Its value must be as an RSA Key content                    |
| `restClient.ssl.clientKeySecretPassphraseKey` | Client key passphrase secret key. Leave it commented if the key has no passphrase |

Ensure pods are restarted after updating the values.

## OData

| Key                              | Description                       | Type    | Default Value |
|----------------------------------|-----------------------------------|---------|---------------|
| `odata.enabled`                  | Enable OData service and endpoint | Boolean | `true`        |
| `odata.configmap.ODATA_PROTOCOL` | http or https                     | String  | `"https"`     |

## Other

| Key                                                     | Type                                                                                                     | Default Value                        |
|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------|--------------------------------------|
| `affinity`                                              | object                                                                                                   | `{}`                                 |
| `frontendUrlOverride`                                   | By default the Frontend URL is the Ingress host. Override it with this property in case it is necessary. | `"https://<live-agent-domain>.com/"` |
| `fullnameOverride`                                      | string                                                                                                   | `""`                                 |
| `hooks.affinity`                                        | object                                                                                                   | `{}`                                 |
| `hooks.migrate.env`                                     | list                                                                                                     | `[]`                                 |
| `hooks.migrate.hookAnnotation                           | string                                                                                                   | `"post`-install,post-upgrade"`       |
| `hooks.migrate.resources.limits.memory`                 | string                                                                                                   | `"1000Mi"`                           |
| `hooks.migrate.resources.requests.memory`               | string                                                                                                   | `"1000Mi"`                           |
| `ingress.annotations`                                   | object                                                                                                   | `{}`                                 |
| `ingress.enabled`                                       | bool                                                                                                     | `false`                              |
| `ingress.hosts[0].host`                                 | string                                                                                                   | `""`                                 |
| `ingress.hosts[0].paths[0].backend.service.name`        | string                                                                                                   | `"cognigy-live-agent-app"`           |
| `ingress.hosts[0].paths[0].backend.service.port.number` | int                                                                                                      | `3000`                               |
| `ingress.hosts[0].paths[0].path`                        | string                                                                                                   | `"/"`                                |
| `ingress.hosts[0].paths[0].pathType`                    | string                                                                                                   | `"Prefix"`                           |
| `ingress.tls`                                           | list                                                                                                     | `[]`                                 |
| `nameOverride`                                          | string                                                                                                   | `""`                                 |
| `nodeSelector`                                          | object                                                                                                   | `{}`                                 |
| `podAnnotations`                                        | object                                                                                                   | `{}`                                 |
| `podSecurityContext`                                    | object                                                                                                   | `{}`                                 |
| `resources`                                             | object                                                                                                   | `{}`                                 |
| `securityContext`                                       | object                                                                                                   | `{}`                                 |
| `service.port`                                          | int                                                                                                      | `80`                                 |
| `service.type`                                          | string                                                                                                   | `"ClusterIP"`                        |
| `serviceAccount.annotations`                            | object                                                                                                   | `{}`                                 |
| `serviceAccount.create`                                 | bool                                                                                                     | `false`                              |
| `serviceAccount.name`                                   | string                                                                                                   | `""`                                 |
| `services.annotations`                                  | object                                                                                                   | `{}`                                 |
| `services.internlPort`                                  | int                                                                                                      | `3000`                               |
| `services.name`                                         | string                                                                                                   | `"cognigy-live-agent-app"`           |
| `services.targetPort`                                   | int                                                                                                      | `3000`                               |
| `services.type`                                         | string                                                                                                   | `"LoadBalancer"`                     |
| `tolerations`                                           | list                                                                                                     | `[]`                                 |
| `app.replica`                                           | int                                                                                                      | `1`                                  |
| `app.extraVolumes`                                      | object                                                                                                   | `{}`                                 |
| `app.extraVolumeMounts`                                 | object                                                                                                   | `{}`                                 |
| `worker.replica`                                        | int                                                                                                      | `1`                                  |
| `worker.extraVolumes`                                   | object                                                                                                   | `{}`                                 |
| `worker.extraVolumeMounts`                              | object                                                                                                   | `{}`                                 |
