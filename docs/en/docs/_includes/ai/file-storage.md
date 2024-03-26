By default, users cannot attach files to a chat message. If you want to allow users to upload files via drag and drop or by clicking the attachment symbol, connect to one of the following file storage providers:

- Azure - specify a unique connection name and [Azure Blob Storage Container](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction) credentials: containerName, account, and accountKey.
- AWS - specify a unique connection name and [Amazon S3 Bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) credentials: secretAccessKey, region, bucketName.
- Google Cloud - specify a unique connection name and [Google Cloud Storage Bucket](https://cloud.google.com/storage/docs/buckets) credentials: bucketName, clientName, privateKey.
