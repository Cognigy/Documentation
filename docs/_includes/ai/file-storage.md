
=== "Azure Blob Storage Container"
    1. Make sure that you have access to [Azure Blob Storage Container](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction) and at least one container has been created, or [create a new one](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal#create-a-container). Note that the container must be publicly available; otherwise, users cannot upload files via the chat interface.
    2. Open the [Azure portal](https://portal.azure.com/#home). 
    3. In the **Azure services** section, select **Storage Accounts**.
    4. On the **Storage accounts** page, select the account from the **Name** column.
    5. In the left-side menu, navigate to **Data storage > Containers**. Copy the name of the target container from the **Name** column. This container will store user-uploaded files. Save the container name for later use.
    6. In the left-side menu, go to **Security + networking** and select **Access Keys**. 
    7. On the **Access Keys** page, copy the name from the **Storage account name** field and the key from the **Key** field for later use. 
    8. On the Cognigy.AI side, open the Project that contains the Endpoint for which you want to configure file uploads. In the left-side menu of the Project, go to **Deploy > Endpoints**. On the **Endpoints** page, select one of the Endpoints that supports file uploads or create a new one.
    9. Depending on the Endpoint you select, proceed as follows:
        - **Webchat v3** — go to **Webchat Behavior > Attachment Upload** on the **Endpoint Settings** page. Activate the **Allow Attachment Upload** setting.
        - **Other Endpoints** — go to the **File Storage** section on the **Endpoint Settings** page.
    10. From the **File Storage Provider** list, select **Azure**. 
    11. Next to the **Azure Connection**, click **+**. 
    12. In the **New Connection** window, fill in the following fields:
        - **Container Name** — the name of the container that you copied and saved previously.
        - **Account** — enter the storage account name that you copied and saved previously.
        - **Account Key** — enter the key that you copied and saved previously.
    13. Click **Create**, then **Save**.

=== "Amazon S3 Bucket"
    1. Make sure that you have access to [Amazon S3 Bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) and that at least one bucket has been created, or [create a new one](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html). Note that the bucket must be publicly available; otherwise, users cannot upload files via the chat interface.
    2. Open the [Amazon S3 console](https://console.aws.amazon.com/s3/).
    3. On the **Amazon S3** page, go to the **General purpose buckets** tab.
    4. From the **Name** column, copy the name of the target bucket from the **Name** column. This bucket will store user-uploaded files. Save the bucket name for later use.
    5. From the **AWS Region** column, copy the region ID, for example, `us-east-1`, and save it for later use.
    6. In the upper-right corner, go to your account, then select **Security credentials**.
    7. On the **My Security Credentials** page, go to **Access keys** and click **Create access key**.
    8. On the **Alternatives to root user access keys** page, review the security recommendations. To continue, select the option, and then click **Create access key**. On the **Retrieve access key** page, your access key ID is displayed.
    9. Under **Secret access key**, click **Show** and then copy the access key ID and secret key from your browser window and save them for later use. Click **Done**. If you want to use temporary access with MFA instead of a secret key, you need a [session token](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html#:~:text=Returns%20a%20set%20of%20temporary,key%2C%20and%20a%20security%20token). To set up a session token, obtain this value via AWS API and specify the token in the `AWS_SESSION_TOKEN` variable in the `values.yaml` file. For more information, read [Using temporary credentials with AWS resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html). 
    10. On the Cognigy.AI side, open the Project that contains the Endpoint for which you want to configure file uploads. In the left-side menu of the Project, go to **Deploy > Endpoints**. On the **Endpoints** page, select one of the Endpoints that supports file uploads or create a new one.
    11. Depending on the Endpoint you select, proceed as follows:
        - **Webchat v3** — go to **Webchat Behavior > Attachment Upload** on the **Endpoint Settings** page. Activate the **Allow Attachment Upload** setting.
        - **Other Endpoints** — go to the **File Storage** section on the **Endpoint Settings** page.
    12. From the **File Storage Provider** list, select **AWS**. 
    13. Next to **Google Cloud Connection**, click **+**.
    14. In the **New Connection** window, fill in the following fields:
        - **Access Key ID** — enter the access key ID that you copied and saved previously.
        - **Secret Access Key** — enter the secret key that you copied and saved previously.
        - **Region** — enter the AWS region that you copied and saved previously.
        - **Bucket Name** — enter the name of the bucket that you copied and saved previously.
    15. Click **Create**, then **Save**.

=== "Google Cloud Storage Bucket"
    1. Make sure that you have access to [Google Cloud Storage](https://cloud.google.com/storage/docs/) and that at least one bucket has been created, or [create a new one](https://cloud.google.com/storage/docs/creating-buckets). Note that the bucket must be [publicly available](https://cloud.google.com/storage/docs/access-control/making-data-public); otherwise, users cannot upload files via the chat interface.
    2. Open the [Google Cloud console](https://console.cloud.google.com/).
    3. In the left-side menu, select **Cloud Storage > Buckets**.
    4. On the **Buckets** page, copy the name of the target bucket from the **Bucket** column. This bucket will store user-uploaded files. Save the bucket name for later use.
    5. In the left-side menu, select **IAM & Admin > Service Accounts**.
    6. From the **Email** field, copy the email address and save it for later use.
    7. In the **Actions** column, click **Actions > Manage Keys**.
    8. On the **Keys** tab, click **Add Key > Create New Key** and select the JSON key type. The key will be downloaded to your computer. Open the JSON file and copy the entire value of the `private_key` parameter, including the lines:
       ```txt
       -----BEGIN PRIVATE KEY-----
       -----END PRIVATE KEY-----
       ```
       Save the key for later use.
    9. On the Cognigy.AI side, open the Project that contains the Endpoint for which you want to configure file uploads. In the left-side menu of the Project, go to **Deploy > Endpoints**. On the **Endpoints** page, select one of the Endpoints that supports file uploads or create a new one.
    10. Depending on the Endpoint you select, proceed as follows:
        - **Webchat v3** — go to **Webchat Behavior > Attachment Upload** on the **Endpoint Settings** page. Activate the **Allow Attachment Upload** setting.
        - **Other Endpoints** — go to the **File Storage** section on the **Endpoint Settings** page.
    11. From the **File Storage Provider** list, select **Google Cloud**.
    12. Next to **Google Cloud Connection**, click **+**.
    13. In the **New Connection** window, fill in the following fields:
        - **Bucket Name** — enter the bucket name that you copied and saved previously.
        - **Client Email** — enter the email address that you copied and saved previously.
        - **Private Key** — enter the key that you copied and saved previously.
    14. Click **Create**, then **Save**.