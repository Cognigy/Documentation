By default, users cannot attach files to a chat message. If you want to allow users to upload files via drag and drop or by clicking the attachment symbol, connect to one of the following file storage providers:

=== "Azure Blob Storage Container"
      1. Make sure that you have access to [Azure Blob Storage Container](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction). Open the [Azure portal](https://portal.azure.com/#home).
      2. In the **Azure services** section, select **Storage Accounts**.
      3. On the **Storage Accounts** page, copy the container name from the **Name** column and save it for later use.
      4. In the left-side menu, go to **Security + networking** and select **Access Keys**.
      5. On the **Access Keys** page, copy the name from the **Storage account name** field and the key from the **Key** field for later use.
      6. Go to the Endpoint on the Cognigy.AI side, use the existing one or create a new one.
      7. On the **Endpoints Settings** page, go to the **File Storage** section.
      8. From the **File Storage Provider** list, select **Azure**.
      9. Next to the **Azure Connection**, click **+**.
      10. In the **New Connection** window, fill in the following fields:
          - **Container Name** - enter the Container Name that you copied and saved previously.
          - **Account** - enter the Storage account name that you copied and saved previously.
          - **Account Key** - enter the key that you copied and saved previously.
      11. Click **Create**, then **Save**.

=== "Amazon S3 Bucket"
   1. Specify a unique connection name and [Amazon S3 Bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) credentials: secretAccessKey, region, bucketName.

=== "Google Cloud Storage Bucket"
   1. Specify a unique connection name and [Google Cloud Storage Bucket](https://cloud.google.com/storage/docs/buckets) credentials: bucketName, clientName, privateKey.
