1. In the left-side menu of the Project, go to **Manage > Settings**.
2. Go to the **Voice Preview Settings** section and select one of the following providers:

    === "Microsoft Azure Speech Services"
        1. Next to the **Speech Connection** field, click ![plus-sign](https://docs.cognigy.com/_assets/icons/plus-sign.svg) to enter credentials.<br>
        2. In the **New Connection** window, fill in the following fields:<br>
            - **Connection** — specify a unique connection name.<br>
            - **API Key** — specify an API key for Microsoft Azure Speech Services. Log in to the Azure portal, navigate to your Speech Services resource, and copy the API key labeled as **Key1** from the **Keys and Endpoint** section. For more information, read the [Microsoft Azure AI documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/text-to-speech-quickstart?tabs=command-line#set-up).<br>
            - **Region** — this parameter is optional. Enter a specific region if necessary.<br>

    === "Google Speech Services"
        1. Next to the **Speech Connection** field, click ![plus-sign](https://docs.cognigy.com/_assets/icons/plus-sign.svg) to enter credentials.<br>
        2. In the **New Connection** window, specify a unique name for your connection in the **Connection** field.<br>
        3. Click **Upload JSON File** and upload the JSON file that you received from Google Speech Services. To obtain a JSON key file for accessing the Google Speech Services, first create a service account in the Google Cloud Console under **IAM & Admin**. Assign the appropriate roles, generate a JSON key file for the service account, and download this key.<br>
 
    === "Amazon Polly"
        1. Next to the **Speech Connection** field, click ![plus-sign](https://docs.cognigy.com/_assets/icons/plus-sign.svg) to enter credentials.<br>
        2. In the **New Connection** window, fill in the following fields:<br>
            - **Access Key ID** — specify an Access Key ID. Log in to the AWS Management Console, go to the IAM dashboard, select **Users**, and choose the IAM user. Navigate to the **Security credentials** tab, and under **Access keys**, create a new access key if one hasn't been created. Copy the Access Key ID provided after creation.<br>
            - **Secret Access Key** — specify a Secret Access Key. After creating the access key, you'll be prompted to download a file containing the Access Key ID and the Secret Access Key. Alternatively, you can retrieve the Secret Access Key by navigating to the IAM dashboard, selecting the user, going to the **Security credentials** tab, and clicking **Show** next to the Access Key ID to reveal and copy the Secret Access Key.<br>
            - **Session Token** — this parameter is optional. If you use temporary security credentials, obtain the token when using AWS STS (Security Token Service) to assume a role or federate users.<br>
            - **Region** — this parameter is optional. Enter the AWS region where your Amazon Polly resources are located, for example, `us-east-1` for the US East (N. Virginia) region.<br>
    === "Deepgram"
        1. Next to the **Speech Connection** field, click ![plus-sign](https://docs.cognigy.com/_assets/icons/plus-sign.svg) to enter credentials.
        2. In the **New Connection** window, fill in the following fields:
            - **Connection** — specify a unique connection name.
            - **API Key** — specify an API key for Deepgram. To obtain the API key, log in to the Deepgram Console, navigate to the Settings of your Deepgram Project, and select **API Keys**. For more information, read the [Deepgram documentation](https://developers.deepgram.com/docs/create-additional-api-keys).

3. Click **Create**.
4. To check the connection, click **Test**.