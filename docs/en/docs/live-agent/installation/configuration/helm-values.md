# Helm values

Here is a description of all the values used inside the Helm package.

## Image Values

| Name                | Description                                          | Value                 |
| ------------------- | ---------------------------------------------------- | --------------------- |
| `image.repository`  | Live Agent image repository                           | `cognigy.azurecr.io/live-agent`    |
| `image.tag`         | Live Agent image tag                                  | `7166`              |
| `image.pullPolicy`  | Live Agent image pull policy                          | `IfNotPresent`         |


## ConfigMap Values

### App Values

| Name                                | Description                                                                | Default Value                                              |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `configmap.CHATWOOT_INSTALLATION_ENV`     | Sets Live Agent installation method.                                  | `"helm"`                                                   |
| `configmap.ENABLE_ACCOUNT_SIGNUP`         |  `true` : default option, allows sign ups, `false` : disables all the end points related to sign ups, `api_only`: disables the UI for signup but you can create sign ups via the account apis.  | `"false"`                                                  |
| `configmap.FORCE_SSL`                     | Force all access to the app over SSL, default is set to false.                  | `"false"`                                                  |
| `configmap.FRONTEND_URL`                  | Replace with the URL you are planning to use for your app.                      | `"http://0.0.0.0:3000/"`                                   |
| `configmap.RAILS_ENV`                     | Sets rails environment.                                                         | `"production"`                                             |
| `configmap.RAILS_MAX_THREADS`             | Number of threads each worker will use.                                         | `"5"`                                                      |
| `configmap.SECRET_KEY_BASE`               | Used to verify the integrity of signed cookies. Ensure a secure value is set.   | `"wsedrfghjhygtfrdecfvbhnygtfvbtyftctdrxresxcygvujhb"`     |
| `configmap.SENTRY_DSN`                    | Sentry data source name.                                                        | `""`                                                       |
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
| `configmap.AWS_ENDPOINT_URL`              | [Storage Configuration](/live-agent/installation/configuration/storage/) | `""`                                                       |
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


Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`. For example,

```sh
helm install my-release \
  --set configmap.FRONTEND_URL="live-agent.yourdomain.com"\
    ./cognigy-live-agent
```

The above command sets the Live Agent server frontend URL to `live-agent.yourdoamain.com`.

Alternatively, a YAML file that specifies the values for the parameters can be provided while installing the chart. For example,

```sh
helm install my-release -f values.yaml ./cognigy-live-agent
```

> **Note:** You can use the default values.yaml file