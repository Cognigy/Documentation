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
            - **Connection name** — create a unique name for your connection.
            - **apiKey** — add an [Azure API Key](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart?tabs=command-line&pivots=rest-api#retrieve-key-and-endpoint). This value can be found in the **Keys & Endpoint** section when examining your resource from the Azure portal. You can use either `KEY1` or `KEY2`.<br>
            - **resourceName** — add a [resource name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource). This value can be found under **Resource Management > Deployments** in the Azure portal or alternatively under **Management > Deployments** in Azure OpenAI Studio.<br>
        8.2 Click **Create**.<br>
        8.3 Fill in the remaining fields:<br>
            - **deploymentName** — add a [model name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#deploy-a-model).<br>
            - **apiVersion** — add an [API version](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference#rest-api-versioning). The API version to use for this operation in the `YYYY-MM-DD` format.<br>

    === "OpenAI"
        8.1 Fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **apiKey** — add an API Key from your OpenAI account. You can find this key in the [User settings](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key) of your OpenAI account.<br>
        8.2 Click **Create**.<br>
    
    === "Anthropic"
        8.1 Fill in the following fields:<br>
            - **Connection name** — create a unique name for your connection.<br>
            - **apiKey** — add an API Key that you generated via [Account Settings](https://console.anthropic.com/docs/api#accessing-the-api) in Anthropic.<br>
        8.2 Click **Create**.<br>

9. To apply changes, click **Save**.
10. To check if the connection was set up, click **Test**.

When the model is added, you will see it in the list of models.

To apply this model for Cognigy features, go to the settings by clicking **Manage LLM Features**.