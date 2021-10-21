# Storage

Live Agent uses [active storage](https://edgeguides.rubyonrails.org/active_storage_overview.html) for storing attachments. The default storage option is the local storage on your server.
But you can change it to use any cloud providers like AWS S3, Microsoft Azure and Google Cloud, etc. See below for additional values required.

| Name            | Type | Value | 
| --------------- | ----- | ---- | 
| `configmap.ACTIVE_STORAGE_SERVICE` | string | `"local"` |

[//]: <> (Commented for now as this is for thought for assets in the live chat widget attachments from Chatwoot)
[//]: <> (## Using CDN for asset delivery)
[//]: <> (If you have a high traffic website, we recommend to setup CDN for your asset delivery.)

[//]: <> (| Name            | Type | Value | )
[//]: <> (| --------------- | ----- | ---- | )
[//]: <> (| `configmap.ASSET_CDN_HOST` | string | `"<distribution>.cloudfront.net"` |)

## Using Amazon S3

You can get started with [Creating an S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html) and [Create an IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) to configure the following details.

| Name            | Type | Value | 
| --------------- | ----- | ---- | 
| `configmap.ACTIVE_STORAGE_SERVICE` | string | `"amazon"` |
| `configmap.S3_BUCKET_NAME` | string |  `""` |
| `configmap.AWS_ACCESS_KEY_ID`| string | `""` |
| `configmap.AWS_SECRET_ACCESS_KEY` | string | `""` |
| `configmap.AWS_REGION` | string | `""` |



## Using Google GCS

| Name            | Type | Value | 
| --------------- | ----- | ---- | 
| `configmap.ACTIVE_STORAGE_SERVICE` | string | `"google"` |
| `configmap.GCS_PROJECT` | string | `""` |
| `configmap.GCS_CREDENTIALS` | string | `""` |
| `configmap.GCS_BUCKET` | string | `""` |


the value of the `GCS_CREDENTIALS` should be a json formatted string containing the following keys

```bash
{
  "type": "service_account",
  "project_id" : "",
  "private_key_id" : "",
  "private_key" : "",
  "client_email" : "",
  "client_id" : "",
  "auth_uri" : "",
  "token_uri" : "",
  "auth_provider_x509_cert_url" : "",
  "client_x509_cert_url" : ""
}
```

## Using Microsoft Azure

| Name            | Type | Value | 
| --------------- | ----- | ---- | 
| `configmap.ACTIVE_STORAGE_SERVICE` | string | `"microsoft"` |
| `configmap.AZURE_STORAGE_ACCOUNT_NAME` | string | `""` |
| `configmap.AZURE_STORAGE_ACCESS_KEY` | string | `""` |
| `configmap.AZURE_STORAGE_CONTAINER` | string | `""` |



## Using Amazon S3 Compatible Service

To use an s3 compatible service such as [DigitalOcean Spaces](https://www.digitalocean.com/docs/spaces/resources/s3-sdk-examples/#configure-a-client), Minio etc..

| Name            | Type | Value | 
| --------------- | ----- | ---- | 
| `configmap.ACTIVE_STORAGE_SERVICE` | string | `"s3_compatible"` |
| `configmap.STORAGE_BUCKET_NAME` | string | `""` |
| `configmap.STORAGE_ACCESS_KEY_ID` | string | `""` |
| `configmap.STORAGE_SECRET_ACCESS_KEY` | string | `""` |
| `configmap.STORAGE_REGION` | string | `"nyc3"` |
| `configmap.STORAGE_ENDPOINT` | string | `"https://nyc3.digitaloceanspaces.com"` |

Set force_path_style to true if using minio

| Name            | Type | Value | 
| --------------- | ----- | ---- | 
| `configmap.STORAGE_FORCE_PATH_STYLE` | bool | `true` |
