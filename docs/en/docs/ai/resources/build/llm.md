---
title: "LLM"
slug: "llm"
hidden: false
---
# Large Language Models (LLMs)

Large Language Models (LLMs) are powerful artificial intelligence models designed to process and generate human-like text based on the input provided. These models are trained on vast amounts of text data, allowing them to learn patterns, syntax, and semantic relationships between words and phrases. LLMs are capable of understanding and generating coherent and contextually relevant responses in natural language.

LLMs help Cognigy virtual agents understand and respond to user input in a natural way. These models make conversations more engaging by generating relevant and contextually appropriate responses. LLMs also assist in managing dialogues and providing multilingual support, enhancing the overall conversational experience for user.


## Supported Models

In the table below, there are LLMs supported by Cognigy.

| Models/<br>Cognigy Features | Intent Sentence Generation | AI Enhanced Outputs | Lexicon Generation | Flow Generation | GPT Conversation Node | GPT Prompt Node | Generate Node Output | Knowledge Search |
|-----------------------------|----------------------------|---------------------|--------------------|-----------------|-----------------------|-----------------|----------------------|------------------|
| **Microsoft Azure OpenAI**  |                            |                     |                    |                 |                       |                 |                      |                  |
| gpt-3.5-turbo (ChatGPT)     | +                          | +                   | +                  | +               | -                     | +               | -                    | -                |
| text-davinci-003            | +                          | +                   | +                  | +               | +                     | +               | +                    | -                |
| text-embedding-ada-002      | -                          | -                   | -                  | -               | -                     | -               | -                    | +                |
| **Open AI**                 |                            |                     |                    |                 |                       |                 |                      |                  |
| gpt-3.5-turbo (ChatGPT)     | +                          | +                   | +                  | +               | -                     | +               | -                    | -                |
| text-davinci-003            | +                          | +                   | +                  | +               | +                     | +               | +                    | -                |
| text-embedding-ada-002      | -                          | -                   | -                  | -               | -                     | -               | -                    | +                |
| **Anthropic**               |                            |                     |                    |                 |                       |                 |                      |                  |
| claude-v1-100k              | -                          | -                   | -                  | -               | -                     | +               | -                    | -                |
| claude-instant-v1           | -                          | -                   | -                  | -               | -                     | +               | -                    | -                |


## Add a model

To add a model to Cognigy.AI, follow these steps:

1. Open the Cognigy.AI interface.
2. Go to **Build > LLM**. 
3. Click **+New Model**. 
4. Select a model from the list. 
5. Add a unique name and description for your model. 
6. In the **LLM Editor** window, go to the **Generative AI Connection** field. 
7. On the right side of the field, click **+**. 
8. Depends on your model provider, fill in the following fields:

    === "Microsoft Azure OpenAI"
        - Connection name -  create a unique name for your connection.
        - apiKey - add an [Azure API Key](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart?tabs=command-line&pivots=rest-api#retrieve-key-and-endpoint). This value can be found in the **Keys & Endpoint** section when examining your resource from the Azure portal. You can use either `KEY1` or `KEY2`.
        - resourceName - add a [resource name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource). It must be the mane that you specified in the **Instance details > Name** section in Azure. Also, this value can be found under **Resource Management > Deployments** in the Azure portal or alternatively under **Management > Deployments** in Azure OpenAI Studio.
        - deploymentName - add a [model name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#deploy-a-model). 
        - apiVersion - add an [API version](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference#rest-api-versioning). The API version to use for this operation in the `YYYY-MM-DD` format.

    === "OpenAI"
        - Connection name - create a unique name for your connection.
        - apiKey - add an API Key from your OpenAI account. You can find this key in the [User settings](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key) of your OpenAI account. 

    === "Anthropic"
        - Connection name - create a unique name for your connection.
        - apiKey - add an API Key that you generated via [Account Settings](https://console.anthropic.com/docs/api#accessing-the-api) in Anthropic.

9. Click **Create**.
10. To apply changes, click **Save**.

When the model is added, you will see it in the list of models.

To apply Cognigy features for this model, go to the settings by clicking **Manage LLM Features**.

## Apply a model

To apply a model, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu, click **Manage > Settings**.
3. In the **Generative AI Settings** section, activate **Enable Generative AI Features**. This setting is toggled on by default if you have previously set up the Generative AI credentials. 
4. Navigate to the desired feature and choose a model from the list. If there are no models available for the selected feature, the system will automatically select **None**. 
5. Click **Save**.

