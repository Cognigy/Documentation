1. Open the Cognigy.AI interface.
2. Go to **Build > LLM**.
3. Click **+New LLM**.
4. In the **New LLM** window, select a model from the **Model Type** list.
5. Add a unique name and description for your model.
6. From the **Provider** list, select an LLM's provider:

    === "Microsoft Azure OpenAI"
        7.1 From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
            - **Model Type** — select **Chat** or **Completion** type. You can skip this field and choose any value; this field does not affect the Azure model configuration.<br>
            - **Model Name** — specify an ID of the model that you want to use as a custom. To find model IDs, refer to the [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) documentation.<br>
        7.2 Click **Save**.<br>
        7.3 On the LLM Editor page, go to the **Generative AI Connection** field.<br>
        7.4 On the right side of the field, click **+**.<br>
        7.5 Fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **apiKey** — add an [Azure API Key](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart?tabs=command-line&pivots=rest-api#retrieve-key-and-endpoint). This value can be found in the **Keys & Endpoint** section when examining your resource from the Azure portal. You can use either `KEY1` or `KEY2`.<br>
        7.6 Click **Create**.<br>
        7.7 Fill in the remaining fields:<br>
            - **Resource Name** — add a [resource name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource). To find this value, go to the **Microsoft Azure** home page. Under **Azure services**, click **Azure OpenAI**. In the left-side menu, under the **Azure AI Services** section, select **Azure Open AI**. Copy the desired resource name from the **Name** column.<br>
            - **Deployment Name** — add a [deployment name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#deploy-a-model). To find this value, go to the **Microsoft Azure** home page. Under **Azure services**, click **Azure OpenAI**. In the left-side menu, under the **Azure AI Services** section, select **Azure Open AI**. Select a resource from the **Name** column. On the resource page, go to **Resource Management > Model deployments**. On the **Model deployments** page, click **Manage Deployments**. On the **Deployments** page, copy the desired deployment name from the **Deployment name** column.<br>
            - **Api Version** — add an [API version](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference#rest-api-versioning). The API version to use for this operation in the `YYYY-MM-DD` format. Note that the version may have an extended format, for example, `YYYY-MM-DD-preview`. <br>
            - **Custom URL** — this parameter is optional. To control the connection between your clusters and the Azure OpenAI provider, you can route connections through dedicated proxy servers, creating an additional layer of security. To do this, specify the URL in the following pattern: `https://<resource-name>.openai.azure.com/openai/deployments/<deployment-name>/completions?api-version=<api-verson>`. When a Custom URL is added, the **Resource Name**, **Deployment Name**, and **API Version** fields will be ignored.

    === "OpenAI"
        7.1 From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
            - **Model Type** — select **Chat** for models that correspond to the `https://api.openai.com/v1/chat/completions` API Edpoint, or Completion type for those that correspond to the `https://api.openai.com/v1/completions` API Endpoint. For more information, refer to the [OpenAI Text Generation Models](https://platform.openai.com/docs/guides/text-generation) documentation. <br>
            - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Azure OpenAI Service models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) documentation.<br>
        7.2 Click **Save**.<br>
        7.3 On the LLM Editor page, go to the **Generative AI Connection** field.<br>
        7.4 On the right side of the field, click **+**.<br>
        8.5 Fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **apiKey** — add an API Key from your OpenAI account. You can find this key in the [User settings](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key) of your OpenAI account.<br>
        7.6 Click **Create**.<br>

    === "Anthropic"
        7.1 From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
            - **Model Type** — select **Chat** for models that support the Messages API, and select **Completion** for models that support the Completions API. For mor information, refer to the [Anthropic Model Comparison (API format)](https://docs.anthropic.com/claude/docs/models-overview#model-comparison) documentation.<br>
            - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Anthropic](https://docs.anthropic.com/claude/docs/models-overview) documentation.<br>
        7.2 Click **Save**.<br>
        7.3 Fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **apiKey** — add an API Key that you generated via [Account Settings](https://console.anthropic.com/docs/api#accessing-the-api) in Anthropic.<br>
        7.4 Click **Create**.<br>

    === "Google"
        7.1 From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
            - **Model Type** — select the **Completion** type. <br>
            - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Google Vertex AI](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versioning) documentation. Note that only the `text-bison` models are supported by Cognigy.<br>
        7.2 Click **Save**.<br>
        7.3 Fill in the **Connection name** field by specifying a unique name for your connection.<br>
        7.4 To upload the JSON file with a key for your model, you need to obtain this key. Go to the Google Vertex AI console.<br>
        7.5 Click the **Enable All Recommended APIs** button to activate an API connection, if it is not activated. Make sure that the Vertex AI API are enabled.<br>
        7.6 In the left-side menu, go to the **IAM & Admin > Service Accounts**.<br>
        7.7 Select **Actions** and click **Manage Keys**.<br>
        7.8 On the **Keys** page, select **Add Key** and click **Create new Key**.<br>
        7.9 In the appeared window, select the **JSON** key type and click **Create**. The file will be downloaded.<br>
        7.10 In Cognigy, in the **New Connection** window, click **Upload JSON file** and upload the file.<br>
        7.11 Click **Create**.<br>
        7.12 Fill in the remaining fields:<br>
            - **Location** — add a [region](https://cloud.google.com/vertex-ai/docs/general/locations) for the model. For example, `us-central1`.<br>
            - **API Endpoint** — add a [service endpoint](https://cloud.google.com/vertex-ai/docs/reference/rest#service-endpoint) for the model. For example, `us-central1-aiplatform.googleapis.com`. Note that the endpoint should be specified without `https://` or `http://`. <br>
            - **Publisher** — add an owner's name of the model. If not specified, `Google` will be used by default.
               This parameter is optional.<br>

    === "Aleph Alpha"
        7.1 From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
            - **Model Type** — select the **Completion** type.<br>
            - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Aleph Alpha](https://docs.anthropic.com/claude/docs/models-overview) documentation.<br>
        7.2 Click **Save**.<br>
        7.3 Fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **Token** — specify a key that you created in your [Aleph Alpha account](https://docs.aleph-alpha.com/docs/introduction/model-card/).<br>
        7.3 Click **Create**.<br>
        7.4 Fill in the remaining field:<br>
            - **Custom URL** — this parameter is optional. To control the connection between your clusters and the Aleph Alpha provider, you can route connections through dedicated proxy servers, creating an additional layer of security. To do this, specify the base URL. For example, `https://api.aleph-alpha.com`.

8. To apply changes, click **Save**.
9. To check if the connection was set up, click **Test**.

When the model is added, you will see it in the list of models.

To apply this model for Cognigy features, go to the settings by clicking **Manage LLM Features**.