1. Open the Cognigy.AI interface.
2. Go to **Build > LLM**.
3. Click **+New LLM**.
4. In the **New LLM** window, select a model from the **Model Type** list.
5. Add a unique name and description for your model and click **Save**.
6. In the **LLM Editor** window, go to the **Generative AI Connection** field.
7. On the right side of the field, click **+**.
8. Depends on your model provider, do the following:

    === "Microsoft Azure OpenAI"
        8.1 Fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **apiKey** — add an [Azure API Key](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart?tabs=command-line&pivots=rest-api#retrieve-key-and-endpoint). This value can be found in the **Keys & Endpoint** section when examining your resource from the Azure portal. You can use either `KEY1` or `KEY2`.<br>
            - **Resource Name** — add a [resource name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource). To find this value, go to the **Microsoft Azure** home page. Under **Azure services**, click **Azure OpenAI**. In the left-side menu, under the **Azure AI Services** section, select **Azure Open AI**. Copy the desired resource name from the **Name** column.<br>
        8.2 Click **Create**.<br>
        8.3 Fill in the remaining fields:<br>
            - **Deployment Name** — add a [deployment name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#deploy-a-model). To find this value, go to the **Microsoft Azure** home page. Under **Azure services**, click **Azure OpenAI**. In the left-side menu, under the **Azure AI Services** section, select **Azure Open AI**. Select a resource from the **Name** column. On the resource page, go to **Resource Management > Model deployments**. On the **Model deployments** page, click **Manage Deployments**. On the **Deployments** page, copy the desired deployment name from the **Deployment name** column.<br>
            - **Api Version** — add an [API version](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference#rest-api-versioning). The API version to use for this operation in the `YYYY-MM-DD` format. Note that the version may have an extended format, for example, `2023-03-15-preview`. <br>
            - **Custom URL** — this parameter is optional. To control the connection between your clusters and the Azure OpenAI provider, you can route connections through dedicated proxy servers, creating an additional layer of security. To do this, specify the URL in the following pattern: `https://<resource-name>.openai.azure.com/openai/deployments/<deployment-name>/completions?api-version=<api-verson>`. When a Custom URL is added, the **Resource Name**, **Deployment Name**, and **API Version** fields will be ignored.

    === "OpenAI"
        8.1 Fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **apiKey** — add an API Key from your OpenAI account. You can find this key in the [User settings](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key) of your OpenAI account.<br>
        8.2 Click **Create**.<br>
        8.3 Fill in the remaining field:<br>
            - **Custom Model** - specify the particular model you want to use. This parameter is helpful when you have multiple types of models on the LLM provider side and intend to utilize a specific model type. For example, if you have GPT-4, you can specify `gpt-4-0613` for your use case. This parameter is optional. When a custom model is added, the default LLM Model will be ignored. For more information about provider's models, refer to the [OpenAI documentation](https://platform.openai.com/docs/models/overview).<br>

    === "Anthropic"
        8.1 Fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **apiKey** — add an API Key that you generated via [Account Settings](https://console.anthropic.com/docs/api#accessing-the-api) in Anthropic.<br>
        8.2 Click **Create**.<br>

    === "Google"
        8.1 Fill in the **Connection name** field by specifying a unique name for your connection.<br>
        8.2 To upload the JSON file with a key for your model, you need to obtain this key. Go to the Google Vertex AI console.<br>
        8.3 Click the **Enable All Recommended APIs** button to activate an API connection, if it is not activated. Make sure that the Vertex AI API are enabled.<br>
        8.4 In the left-side menu, go to the **IAM & Admin > Service Accounts**.<br>
        8.5 Select **Actions** and click **Manage Keys**.<br>
        8.6 On the **Keys** page, select **Add Key** and click **Create new Key**.<br>
        8.7 In the appeared window, select the **JSON** key type and click **Create**. The file will be downloaded.<br>
        8.8 In Cognigy, in the **New Connection** window, click **Upload JSON file** and upload the file.<br>
        8.9 Click **Create**.<br>
        8.10 Fill in the remaining fields:<br>
            - **Location** — add a [region](https://cloud.google.com/vertex-ai/docs/general/locations) for the model. For example, `us-central1`.<br>
            - **API Endpoint** — add a [service endpoint](https://cloud.google.com/vertex-ai/docs/reference/rest#service-endpoint) for the model. For example, `us-central1-aiplatform.googleapis.com`. Note that the endpoint should be specified without `https://` or `http://`. <br>
            - **Publisher** — add an owner's name of the model. If not specified, `Google` will be used by default.
               This parameter is optional.<br>

    === "Aleph Alpha"
        8.1 Fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **Token*** — specify a key that you created in your [Aleph Alpha account](https://docs.aleph-alpha.com/docs/account/#create-a-new-token).<br>
        8.2 Click **Create**.<br>
        8.3 Fill in the remaining field:<br>
            - **Custom Model** - specify a particular model you want to use, for example, `luminous-base`. This parameter is optional. When a custom model is added, the default LLM Model will be ignored. For more information about the provider's models, refer to the [Aleph Alpha documentation](https://docs.aleph-alpha.com/docs/introduction/model-card).<br>  

9. To apply changes, click **Save**.
10. To check if the connection was set up, click **Test**.

When the model is added, you will see it in the list of models.

To apply this model for Cognigy features, go to the settings by clicking **Manage LLM Features**.