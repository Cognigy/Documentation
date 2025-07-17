
=== "Azure Blob Storage Container"
    1. Go to the [Azure portal](https://portal.azure.com/#home) and select **Storage Accounts** in the **Azure services** section.
    2. On the **Storage accounts** page, select the account from the **Name** column.
    3. In the left-side menu, navigate to **Data storage > Containers**. Copy the name of the target container from the **Name** column. This container will store user-uploaded files. Save the container name for later use.
    4. In the left-side menu, go to **Security + networking** and select **Access Keys**. 
    5. On the **Access Keys** page, copy the name from the **Storage account name** field and the key from the **Key** field for later use. 
    6. On the Cognigy.AI side, open the Project that contains the Endpoint for which you want to configure a file storage. Go to **Deploy > Endpoints** and select an Endpoint or create one.
    7. Depending on the Endpoint you select, proceed as follows:
        - **Webchat v3** — activate the **Allow Attachment Upload** setting in **Webchat Behavior** in the **Attachment Upload** section and select **Azure** from the **File Storage Provider** list.
        - **Other Endpoints** — go to the **File Storage** section and select **Azure** from the **File Storage Provider** list.
    8. Next to the **Azure Connection**, click **+** and fill in the following fields:
        - **Container Name** — enter the name of the container that you copied and saved previously.
        - **Account Name** — enter the storage account name that you copied and saved previously.
        - **Account Key** — enter the key that you copied and saved previously.
    9. Click **Create**, then **Save**.

=== "Amazon S3 Bucket"
    1. Make sure that you have access to [Amazon S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) or to an Amazon S3-compatible cloud, for example, [Open Telekom Cloud](https://docs.otc.t-systems.com/), [DigitalOcean Spaces](https://docs.digitalocean.com/products/spaces/), [Backblaze B2](https://www.backblaze.com/docs). You need to have at least one bucket or to [create a new one](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html). The bucket must be publicly accessible; otherwise, users can't upload files via the chat interface. For an Amazon S3-compatible cloud storage, you need similar information as described in the following steps.
    2. In the [Amazon S3 console](https://console.aws.amazon.com/s3/), go to the **General purpose buckets** tab.
    3. From the **Name** column, copy the name of the target bucket. This bucket will store user-uploaded files. Save the bucket name for later use.
    4. From the **AWS Region** column, copy the region ID, for example, `us-east-1`, and save it for later use.
    5. In the upper-right corner, go to your account, then select **Security credentials**.
    6. On the **My Security Credentials** page, go to **Access keys** and click **Create access key**.
    7. On the **Alternatives to root user access keys** page, review the security recommendations. To continue, select the option, and then click **Create access key**. On the **Retrieve access key** page, your access key ID is displayed.
    8. Under **Secret access key**, click **Show** and then copy the access key ID and secret key from your browser window and save them for later use. Click **Done**. If you want to use temporary access with MFA instead of a secret key, you need a [session token](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html#:~:text=Returns%20a%20set%20of%20temporary,key%2C%20and%20a%20security%20token). To set up a session token, obtain this value via AWS API and specify the token in the `AWS_SESSION_TOKEN` variable in the `values.yaml` file. For more information, read [Using temporary credentials with AWS resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html). 
    9. On the Cognigy.AI side, open the Project that contains the Endpoint for which you want to configure a file storage. Go to **Deploy > Endpoints** and select an Endpoint or create one.
    10. Depending on the Endpoint you select, proceed as follows:
        - **Webchat v3** — activate the **Allow Attachment Upload** setting in **Webchat Behavior** in the Attachment Upload** section and select **AWS** from the **File Storage Provider** list.
        - **Other Endpoints** — go to the **File Storage** section and select **AWS** from the **File Storage Provider** list.
    11. Next to **AWS Connection**, click **+** and fill in the following fields:
        - **Access Key ID** — enter the access key ID that you copied and saved previously.
        - **Secret Access Key** — enter the secret key that you copied and saved previously.
        - **Region** — enter the AWS region that you copied and saved previously.
        - **Bucket Name** — enter the name of the bucket that you copied and saved previously.
        - **Custom URL** — enter the custom URL of your S3-compatible storage. This parameter applies only for Amazon S3-compatible cloud storages.
    12. Click **Create**, then **Save**.

=== "Google Cloud Storage Bucket"
    1. In the [Google Cloud console](https://console.cloud.google.com/), select **Cloud Storage > Buckets** in the left-side menu.
    2. On the **Buckets** page, copy the name of the target bucket from the **Bucket** column. This bucket will store user-uploaded files. Save the bucket name for later use.
    3. In the left-side menu, select **IAM & Admin > Service Accounts**.
    4. From the **Email** field, copy the email address and save it for later use.
    5. In the **Actions** column, click **Actions > Manage Keys**.
    6. On the **Keys** tab, click **Add Key > Create New Key** and select the JSON key type. The key will be downloaded to your computer. Open the JSON file and copy the entire value of the `private_key` parameter, including the lines:
       ```txt
       -----BEGIN PRIVATE KEY-----
       -----END PRIVATE KEY-----
       ```
       Save the key for later use.
    7. On the Cognigy.AI side, open the Project that contains the Endpoint for which you want to configure a file storage. Go to **Deploy > Endpoints** and select an Endpoint or create one.
    8. Depending on the Endpoint you select, proceed as follows:
        - **Webchat v3** — activate the **Allow Attachment Upload** setting in **Webchat Behavior** in the Attachment Upload** section and select **Google Cloud** from the **File Storage Provider** list.
        - **Other Endpoints** — go to the **File Storage** section and select **Google Cloud** from the **File Storage Provider** list.
    9. Next to **Google Cloud Connection**, click **+** and fill in the following fields:
        - **Bucket Name** — enter the bucket name that you copied and saved previously.
        - **Client Email** — enter the email address that you copied and saved previously.
        - **Private Key** — enter the key that you copied and saved previously.
    10. Click **Create**, then **Save**.
