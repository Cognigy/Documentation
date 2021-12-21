---
 title: "Helm values" 
 slug: "index" 
 hidden: false 
---
# Helm values

## Quick introduction

Helm values are all the variables used for configuring the Live Agent app and resources. These are stored on a file called `values.yaml`. It can be edited with complete freedom to set the Live Agent behaviour. An example of this file:

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

The above command sets the Live Agent certificate file path to `/etc/ca.pem`. More information can be found at the Helm documentation [Template and Values](https://helm.sh/docs/chart_best_practices/values)

Next, you can find a definition for each of these values to understand how to modify them accordingly. 

## Specific configurations

For specific values and logic, here you can find dedicated sections:

- [Database]({{config.site_url}}live-agent/installation/helm-values/database/)
- [Redis]({{config.site_url}}live-agent/installation/helm-values/redis/)
- [Storage]({{config.site_url}}live-agent/installation/helm-values/storage/)
- [SMTP]({{config.site_url}}live-agent/installation/helm-values/smtp/)
- [Email Templates]({{config.site_url}}live-agent/installation/helm-values/email-templates/)

## Image Values

| Name                | Description                                          | Value                 |
| ------------------- | ---------------------------------------------------- | --------------------- |
| `image.repository`  | Live Agent image repository                           | `cognigy.azurecr.io/live-agent`    |
| `image.tag`         | Live Agent image tag                                  | `e.g. 7166`              |
| `image.pullPolicy`  | Live Agent image pull policy                          | `IfNotPresent`         |


## ConfigMap Values

### App Values

| Name                                | Description                                                                | Default Value                                              |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `configmap.CHATWOOT_INSTALLATION_ENV`     | Sets Live Agent installation method.                                  | `"helm"`                                                   |
| `configmap.ENABLE_ACCOUNT_SIGNUP`         |  `true` : default option, allows sign ups, `false` : disables all the end points related to sign ups, `api_only`: disables the UI for signup but you can create sign ups via the account apis.  | `"false"`                                                  |
| `configmap.FORCE_SSL`                     | Force all access to the app over SSL, default is set to false.                  | `"false"`                                                  |
| `configmap.RAILS_ENV`                     | Sets rails environment.                                                         | `"production"`                                             |
| `configmap.RAILS_MAX_THREADS`             | Number of threads each worker will use.                                         | `"5"`                                                      |
| `configmap.SECRET_KEY_BASE`               | Used to verify the integrity of signed cookies. Ensure a secure value is set.   | `"wsedrfghjhygtfrdecfvbhnygtfvbtyftctdrxresxcygvujhb"`     |
| `configmap.USE_INBOX_AVATAR_FOR_BOT`      | Bot customizations                                                              | `"true"`                                                   |

### Rest Client SSL

In case you have a custom CA to trust or that need SSL to be disabled, these settings are necessary.

| Name                                | Description                                                                | Default Value                                              |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `configmap.REST_CLIENT_SSL_VERIFICATION`  | Rest client config for webhooks API channel                                     | `"true"`                                                   |
| `configmap.SSL_CA_FILE`                   | CA file name                                                                    | `"ca.pem"`                                                 |
| `configmap.SSL_CLIENT_CERT`               | Client cert X509 format.                                                        | `""`                                                       |
| `configmap.SSL_CLIENT_KEY`                | RSA key content, if there is not passphrase.                                    | `""`                                                       |
| `configmap.SSL_CLIENT_KEY_PASSPHRASE` | RSA key passphrase, if there is not passphrase.                           | `""`                                                       |

### Logging Values

| Name                                | Type                                                                | Default Value                                              |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `configmap.RAILS_LOG_TO_STDOUT`           | string                                                              | `"true"`                                                   |
| `configmap.LOG_LEVEL`                     | string                                                              | `"info"`                                                   |
| `configmap.LOG_SIZE`                      | string                                                              | `"500"`                                                    |                                                      |

### Third party credentials

| Name                                | Type                                                                 | Default Value                                              |
| ----------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| `configmap.S3_BUCKET_NAME`                | S3 bucket name                                                       | `""`                                                       |
| `configmap.AWS_ACCESS_KEY_ID`             | Amazon access key ID                                                 | `""`                                                       |
| `configmap.AWS_ENDPOINT_URL`              | [Storage Configuration]({{config.site_url}}live-agent/installation/configuration/storage/) | `""`                                                       |
| `configmap.AWS_REGION`                    | Amazon region                                                        | `""`                                                       |
| `configmap.AWS_SECRET_ACCESS_KEY`         | Amazon secret key ID                                                 | `""`                                                       |

## Other Values

| Key | Type | Default Value |
|-----|------|---------|
| `affinity` | object | `{}` |
| `autoscaling.enabled` | bool | `false` |
| `autoscaling.maxReplicas` | int | `100` |
| `autoscaling.minReplicas` | int | `1` |
| `autoscaling.targetCPUUtilizationPercentage` | int | `80` |
| `frontendUrlOverride`                  | By default the Frontend URL is the Ingress host. Override it with this property in case it is necessary                      | `"https://live-agent-domain.com/"`                                   |
| `fullnameOverride` | string | `""` |
| `hooks.affinity` | object | `{}` |
| `hooks.migrate.env` | list | `[]` |
| `hooks.migrate.hookAnnotation | string | `"post`-install,post-upgrade"` |
| `hooks.migrate.resources.limits.memory` | string | `"1000Mi"` |
| `hooks.migrate.resources.requests.memory` | string | `"1000Mi"` |
| `imagePullSecrets` | list | `[]` |
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
| `web.replica` | int | `1` |
| `worker.replica` | int | `1` |
