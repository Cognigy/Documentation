---
title: "Storage" 
slug: "storage"
hidden: false 
tags:
  - Live Agent
  - Helm Values
  - Storage
---

# Storage

Live Agent uses [active storage](https://edgeguides.rubyonrails.org/active_storage_overview.html) for storing attachments. The default storage option is the local storage on your server, or with an NFS server (preferred way) and CDNs from any cloud provider such as AWS S3, Microsoft Azure and Google Cloud, etc. See below for the additional values required.

## Using a NFS Server

### AWS

When using AWS, [an existing Elastic File System or EFS must be setup](https://aws.amazon.com/efs/). Based on your EFS, fill in the following values:

| Name                               | Type   | Value       |
|------------------------------------|--------|-------------|
| `storage.cloudProvider`            | string | `"aws"`     |
| `storage.fileSystemId`             | string | `""`        |
| `storage.provisionerName`          | string | `""`        |
| `storage.region`                   | string | `""`        |
| `configmap.ACTIVE_STORAGE_SERVICE` | string | `"local"`   |

### Azure

When using Azure, a Network File System or NFS server must be set up. Based on your NFS server, fill in the following values:

| Name                               | Type   | Value     |
|------------------------------------|--------|-----------|
| `storage.size`                     | string | `"10Gi"`  |
| `storage.cloudProvider`            | string | `"azure"` |
| `storage.nfsServer`                | string | `""`      |
| `configmap.ACTIVE_STORAGE_SERVICE` | string | `"local"` |

## Using a CDN

Set the following value to `"cdn"` to use a Content Delivery network or CDN, and fill in the remaining values based on the provider that you want to use.

| Name                    | Type   | Value   |
|-------------------------|--------|---------|
| `storage.cloudProvider` | string | `"cdn"` |

[//]: <> (Commented for now as this is for thought for assets in the live chat widget attachments from Chatwoot)
[//]: <> (## Using CDN for asset delivery)
[//]: <> (If you have a high traffic website, we recommend to setup CDN for your asset delivery.)

[//]: <> (| Name            | Type | Value | )
[//]: <> (| --------------- | ----- | ---- | )
[//]: <> (| `configmap.ASSET_CDN_HOST` | string | `"<distribution>.cloudfront.net"` |)

### Using Amazon S3

You can start by creating an [S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html)
and [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)
to configure the following details.

| Name                               | Type   | Value      |
|------------------------------------|--------|------------|
| `configmap.ACTIVE_STORAGE_SERVICE` | string | `"amazon"` |
| `configmap.S3_BUCKET_NAME`         | string | `""`       |
| `configmap.AWS_ACCESS_KEY_ID`      | string | `""`       |
| `configmap.AWS_SECRET_ACCESS_KEY`  | string | `""`       |
| `configmap.AWS_REGION`             | string | `""`       |

A secret must be set up for setting the `AWS_SECRET_ACCESS_KEY` environment variable.

| Name                                          | Type   | Value                     |
|-----------------------------------------------|--------|---------------------------|
| `storage.secretAccessKey.environmentVariable` | string | `"AWS_SECRET_ACCESS_KEY"` |
| `storage.secretAccessKey.existingSecret`      | string | `"<secret-name>"`         |
| `storage.secretAccessKey.existingSecretKey`   | string | `"<secret-key>"`          |

### Using Google GCS

| Name                               | Type   | Value      | 
|------------------------------------|--------|------------|
| `configmap.ACTIVE_STORAGE_SERVICE` | string | `"google"` |
| `configmap.GCS_PROJECT`            | string | `""`       |
| `configmap.GCS_BUCKET`             | string | `""`       |

A secret must be set up for setting the `GCS_CREDENTIALS` environment variable. 

| Name                                          | Type   | Value               |
|-----------------------------------------------|--------|---------------------|
| `storage.secretAccessKey.environmentVariable` | string | `"GCS_CREDENTIALS"` |
| `storage.secretAccessKey.existingSecret`      | string | `"<secret-name>"`   |
| `storage.secretAccessKey.existingSecretKey`   | string | `"<secret-key>"`    |

The value of the `GCS_CREDENTIALS` should be a JSON formatted string, containing the following keys.

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

### Using Microsoft Azure

| Name                                   | Type   | Value         |
|----------------------------------------|--------|---------------|
| `configmap.ACTIVE_STORAGE_SERVICE`     | string | `"microsoft"` |
| `configmap.AZURE_STORAGE_ACCOUNT_NAME` | string | `""`          |
| `configmap.AZURE_STORAGE_CONTAINER`    | string | `""`          |

A secret must be set up for setting the `AZURE_STORAGE_ACCESS_KEY` environment variable. 

| Name                                          | Type   | Value                        |
|-----------------------------------------------|--------|------------------------------|
| `storage.secretAccessKey.environmentVariable` | string | `"AZURE_STORAGE_ACCESS_KEY"` |
| `storage.secretAccessKey.existingSecret`      | string | `"<secret-name>"`            |
| `storage.secretAccessKey.existingSecretKey`   | string | `"<secret-key>"`             |

### Using Amazon S3 Compatible Service

To use an S3 compatible service such as [DigitalOcean Spaces](https://www.digitalocean.com/docs/spaces/resources/s3-sdk-examples/#configure-a-client), Minio etc..

| Name                               | Type   | Value                                   |
|------------------------------------|--------|-----------------------------------------|
| `configmap.ACTIVE_STORAGE_SERVICE` | string | `"s3_compatible"`                       |
| `configmap.STORAGE_BUCKET_NAME`    | string | `""`                                    |
| `configmap.STORAGE_ACCESS_KEY_ID`  | string | `""`                                    |
| `configmap.STORAGE_REGION`         | string | `"nyc3"`                                |
| `configmap.STORAGE_ENDPOINT`       | string | `"https://nyc3.digitaloceanspaces.com"` |

A secret must be set up for setting the `STORAGE_SECRET_ACCESS_KEY` environment variable. 

| Name                                          | Type   | Value                         |
|-----------------------------------------------|--------|-------------------------------|
| `storage.secretAccessKey.environmentVariable` | string | `"STORAGE_SECRET_ACCESS_KEY"` |
| `storage.secretAccessKey.existingSecret`      | string | `"<secret-name>"`             |
| `storage.secretAccessKey.existingSecretKey`   | string | `"<secret-key>"`              |

Set force_path_style to true if using minio.

| Name                                 | Type | Value  |
|--------------------------------------|------|--------|
| `configmap.STORAGE_FORCE_PATH_STYLE` | bool | `true` |

## Using a single PVC (Not recommended)

A local Persistent Volume Claim (PVC) is available for storage. However, it is not recommended for scaling up deployments as there is only one PVC per deployment. 

| Name                    | Type           | Value      |
|-------------------------|----------------|------------|
| `storage.cloudProvider` | string         | `"none"`   |
| `storage.size`          | string         | `"10Gi"`   |