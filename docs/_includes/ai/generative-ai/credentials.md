1. In the left-side menu of the Project, go to **Build > LLM**.
2. Click **+New LLM**.
3. In the **New LLM** window, select a model from the **Model Type** list.
4. Add a unique name and description for your model.
5. From the **Provider** list, select an LLM's provider:

    === "Microsoft Azure OpenAI"
        1. From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
            - **Model Type** — select **Chat** for models that support the Chat Completions API,**Completion** for the Completions API, or **Embedding** for the Embedding API. For more information, refer to the [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) documentation.<br>
            - **Model Name** — specify an ID of the model that you want to use as a custom. To find model IDs, refer to the [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) documentation.<br>
        2. Click **Save**.<br>
        3. On the LLM Editor page, go to the **Generative AI Connection** field.<br>
        4. On the right side of the field, click **+**.<br>
        5. In the **Connection name**, enter a unique name for your connection.<br>
        6. From the **Connection Type** list, select one of the following authorization methods:<br>
            - **API Key** — add an [Azure API Key](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart?tabs=command-line&pivots=rest-api#retrieve-key-and-endpoint). This value can be found in the **Keys & Endpoint** section when examining your resource from the Azure portal. You can use either `KEY1` or `KEY2`.<br>
            - **OAuth2** — this method is experimental, hidden behind the `FEATURE_ENABLE_OAUTH2_AZURE_CONNECTION_WHITELIST` feature flag, and may encounter some issues. Add credentials for the [OAuth 2.0 authorization code flow](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow). OAuth 2.0 offers more control and security than API keys by allowing specific permissions, expiring tokens, and reducing exposure through short-lived tokens instead of constant client secret use. To use this type of connection, fill in the following fields:<br>
                - **Client ID** — add the Application (client) ID assigned to your app, can be found in the in Azure AI app registration overview.<br>
                - **Client Secret** — add the application secret created in the **Certificates & secrets** section of the Azure AI app registration portal.<br>
                - **OAuth URL** — add the URL to retrieve the access token. The URL should be in the `https://<your-domain>.com/as/token.oauth2` format.<br>
                - **Scope** — add a list of scopes for user permissions, for example, `urn:grp:chatgpt`. <br>
        7. Click **Create**.<br>
        8. Fill in the remaining fields:<br>
            - **Resource Name** — add a [resource name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource). To find this value, go to the **Microsoft Azure** home page. Under **Azure services**, click **Azure OpenAI**. In the left-side menu, under the **Azure AI Services** section, select **Azure Open AI**. Copy the desired resource name from the **Name** column.<br>
            - **Deployment Name** — add a [deployment name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#deploy-a-model). To find this value, go to the **Microsoft Azure** home page. Under **Azure services**, click **Azure OpenAI**. In the left-side menu, under the **Azure AI Services** section, select **Azure Open AI**. Select a resource from the **Name** column. On the resource page, go to **Resource Management > Model deployments**. On the **Model deployments** page, click **Manage Deployments**. On the **Deployments** page, copy the desired deployment name from the **Deployment name** column.<br>
            - **Api Version** — add an [API version](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference#rest-api-versioning). The API version to use for this operation in the `YYYY-MM-DD` format. Note that the version may have an extended format, for example, `YYYY-MM-DD-preview`. <br>
            - **Custom URL** — this parameter is optional. To control the connection between your clusters and the Azure OpenAI provider, you can route connections through dedicated proxy servers, creating an additional layer of security. To do this, specify the URL in the following pattern:`https://<resource-name>.openai.azure.com/openai/deployments/<deployment-name>/<model-type>?api-version=<api-verson>`. When a Custom URL is added, the **Resource Name**, **Deployment Name**, and **API Version** fields will be ignored.

    === "OpenAI"
        1. From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
            - **Model Type** — select **Chat** for the `https://api.openai.com/v1/chat/completions` API, Completion for the `https://api.openai.com//v1/completions` API, and Embedding for the `https://api.openai.com//v1/embeddings` API. For more information, refer to the [OpenAI Text Generation Models](https://platform.openai.com/docs/guides/text-generation) documentation.<br>
            - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Azure OpenAI Service models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) documentation.<br>
        2. Click **Save**.<br>
        3. On the LLM Editor page, go to the **Generative AI Connection** field.<br>
        4. On the right side of the field, click **+**.<br>
        5. Fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **apiKey** — add an API Key from your OpenAI account. You can find this key in the [User settings](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key) of your OpenAI account.<br>
        6. Click **Create**.<br>

    === "Anthropic"
        1. From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
            - **Model Type** — select **Chat** for models that support the Messages API, **Completion** for the Completions API, or **Embedding** for the Embeddings API. For more information, refer to the [Anthropic Model Comparison (API format)](https://docs.anthropic.com/claude/docs/models-overview#model-comparison) documentation.<br>
            - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Anthropic](https://docs.anthropic.com/claude/docs/models-overview) documentation.<br>
        2. Click **Save**.<br>
        3. Fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **apiKey** — add an API Key that you generated via [Account Settings](https://console.anthropic.com/docs/api#accessing-the-api) in Anthropic.<br>
        4. Click **Create**.<br>

    === "Google Vertex AI"
        1. From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
            - **Model Type** — select the **Completion** type. <br>
            - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Google Vertex AI](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versioning) documentation. Note that, within this connection, Cognigy supports only the `text-bison` models.<br>
        2. Click **Save**.<br>
        3. Fill in the **Connection name** field by specifying a unique name for your connection.<br>
        4. To upload the JSON file with a key for your model, you need to obtain this key. Go to the Google Cloud console and find Vertex AI via the search bar.<br>
        5. On the **Vertex AI** page, click the **Enable All Recommended APIs** button to activate an API connection, if it is not activated. Ensure that the Vertex AI API is enabled.<br>
        6. In the left-side menu, go to the **IAM & Admin > Service Accounts**.<br>
        7. Select **Actions** and click **Manage Keys**.<br>
        8. On the **Keys** page, select **Add Key** and click **Create new Key**.<br>
        9. In the appeared window, select the **JSON** key type and click **Create**. The file will be downloaded.<br>
        10. In Cognigy, in the **New Connection** window, click **Upload JSON file** and upload the file.<br>
        11. Click **Create**.<br>
        12. Fill in the remaining fields:<br>
            - **Location** — add a [region](https://cloud.google.com/vertex-ai/docs/general/locations) for the model. For example, `us-central1`.<br>
            - **API Endpoint** — add a [service endpoint](https://cloud.google.com/vertex-ai/docs/reference/rest#service-endpoint) for the model. For example, `us-central1-aiplatform.googleapis.com`. Note that the endpoint should be specified without `https://` or `http://`. <br>
            - **Publisher** — add an owner's name of the model. If not specified, `Google` will be used by default.
               This parameter is optional.

    === "Google Gemini"
        1. From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
            - **Model Type** — select the **Chat** type. <br>
            - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Google Gemini](https://ai.google.dev/gemini-api/docs/models/gemini) documentation. Note that, within this connection, Cognigy supports only the `gemini` models.<br>
        2. Click **Save**.<br>
        3. Fill in the **Connection name** field by specifying a unique name for your connection.<br>
        4. To upload the JSON file with a key for your model, you need to obtain this key. If you have previously used a key for the Google Vertex AI connection, you can also use this key for Google Gemini; proceed to step 6.10 to add the key. If you're setting up the connection for the first time, go to the Google Cloud console and find Vertex AI via the search bar.<br>
        5. On the **Vertex AI** page, click the **Enable All Recommended APIs** button to activate an API connection, if it is not activated. Ensure that the Vertex AI API is enabled. <br>
        6. In the left-side menu, go to the **IAM & Admin > Service Accounts**.<br>
        7. Select **Actions** and click **Manage Keys**.<br>
        8. On the **Keys** page, select **Add Key** and click **Create new Key**.<br>
        9. In the appeared window, select the **JSON** key type and click **Create**. The file will be downloaded.<br>
        10. In Cognigy, in the **New Connection** window, click **Upload JSON file** and upload the file.<br>
        11. Click **Create**.<br>
        12. In the **Location** field, add a [region](https://cloud.google.com/vertex-ai/docs/general/locations) for the model. For example, `us-central1`.

    === "Aleph Alpha"
        1. From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
            - **Model Type** — select the **Completion** type.<br>
            - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Aleph Alpha](https://docs.aleph-alpha.com/docs/Deprecated%20Luminous/Deprecated-Luminous/model-card/) documentation.<br>
        2. Click **Save**.<br>
        3. Fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **Token** — specify a key that you created in your [Aleph Alpha account](https://docs.aleph-alpha.com/).<br>
        4. Click **Create**.<br>
        5. Fill in the remaining field:<br>
            - **Custom URL** — this parameter is optional. To control the connection between your clusters and the Aleph Alpha provider, you can route connections through dedicated proxy servers, creating an additional layer of security. To do this, specify the base URL. For example, `https://api.aleph-alpha.com`.

    === "Amazon Bedrock"
        1. From the **Model** list, select **Custom Model** and configure the following fields:<br>
            - **Model Type** — select the **Chat** type for models that support the [Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html). Note that the model will only work if your AWS administrator gives you [access to this model](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html).<br>
            - **Model Name** — specify an ID of the model that you want to use as a custom. To find model IDs, refer to the [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html) documentation.<br>
        2. Click **Save**.<br>
        3. Fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **Access Key ID** — specify an Access Key ID. Log in to the AWS Management Console, go to the IAM dashboard, select **Users**, and choose the IAM user. Navigate to the **Security credentials** tab, and under **Access keys**, create a new access key if one hasn't been created. Copy the Access Key ID provided after creation.<br>
            - **Secret Access Key** — specify a Secret Access Key. After creating the access key, you'll be prompted to download a file containing the Access Key ID and the Secret Access Key. Alternatively, you can retrieve the Secret Access Key by navigating to the IAM dashboard, selecting the user, going to the **Security credentials** tab, and clicking **Show** next to the Access Key ID to reveal and copy the Secret Access Key.<br>
        4. Click **Create**.<br>
        5. Fill in the remaining field:<br>
            - **Region** — enter the AWS region where your model is located, for example, `us-east-1` for the US East (N. Virginia) region.<br>

    === "OpenAI-Compatible LLMs"
        1. From the **Model** list, select **Custom Model** and configure the following fields:<br>
            - **Model Type** — select the **Chat** type. <br>
            - **Model Name** — specify the name of the model from your LLM provider. To find model names, refer to the LLM provider's documentation.<br>
        2. Click **Save**.<br>
        3. In LLM editor, click **+** next to the **Generative AI Connection** field and fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **API Key** — enter the API key for your LLM provider.<br>
        4. Click **Create**.<br>
        5. Enter the base URL in the **Base URL** field.<br>

6. To apply changes, click **Save**.
7. To check if the connection was set up, click **Test**.

When the model is added, you will see it in the list of models.

To apply this model for Cognigy.AI features, go to the settings by clicking **Manage LLM Features**.