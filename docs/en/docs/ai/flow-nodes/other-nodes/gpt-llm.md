---
title: "GPT LLM"
slug: "gpt-llm"
description: "The Cognigy GPT LLM Node allows using Generative AI for creating relevant content."
hidden: false
---

# GPT LLM (Beta)

[![Version badge](https://img.shields.io/badge/Updated in-v4.55(Beta)-purple.svg)](../../../release-notes/4.55.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/gpt-llm.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

The GPT LLM Node allows using Generative AI for creating relevant content. To do that, you need to add a text prompt that helps Generative AI continue the text. 

Before using this Node, set the Generative AI provider in the [Settings](../../generative-ai.md#set-up-generative-ai).

To display the output of the GPT LLM Node to the user, follow these steps:

1. In the Flow editor, add a Say Node below the GPT LLM Node.
2. In the **Output Type** field, select **Text**.
3. In the **Text** field, specify `{{ " {{ input.generativeAi }}" }}`.
4. Click **Save Node**.

## Settings

| Parameter                 | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                            |
|---------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Prompt                    | CognigyScript | The prompt to generate completions for. You can add special tags in the prompt, read more in [Additional tags](#additional-tags).                                                                                                                                                                                                                                                                      |
| Sampling Method           | Select        | Methods:<br/>- **Temperature** — determines the level of randomness in the generated text. A higher temperature allows for more diverse and creative outputs, while a lower temperature leads to more predictable and consistent outputs with the training data.<br> - **Top Percentage** — specifies the percentage of the most probable outputs for generation, resulting in more consistent output. |
| Maximal Tokens            | Indicator     | The maximum number of tokens to generate in the completion.                                                                                                                                                                                                                                                                                                                                            |
| Presence Penalty          | Indicator     | Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood of talking about new topics.                                                                                                                                                                                                                       |
| Frequency Penalty         | Indicator     | Number between -2.0 and 2.0. The penalty assigns a lower probability to tokens frequently appearing in the generated text, encouraging the model to generate more diverse and unique content.                                                                                                                                                                                                          |
| Use Stops                 | Toggle        | Whether to use a list of stop words to let Generative AI know where the sentence stops.                                                                                                                                                                                                                                                                                                                |
| Stops                     | Text          | Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.                                                                                                                                                                                                                                                                             |
| Timeout                   | Number        | The maximum amount of milliseconds to wait for a response from the Generative AI Provider.                                                                                                                                                                                                                                                                                                             |
| Where to store the result | Select        | You can store the result in the Input or Context.                                                                                                                                                                                                                                                                                                                                                      |
| Input Key to store Result | CognigyScript | Filled in by default.                                                                                                                                                                                                                                                                                                                                                                                  |

## Additional tags

You can inject the recent conversation in the **Prompt** field by using the these tags:

- `@cognigyRecentConversation` — the tag is replaced with a string that can contain up to 10 recent virtual agent and 10 user outputs, for example:
   ```text
   Agent: agentOutput1
   User: userOutput1
   Agent: agentOutput2
   User: userOutput2
   ```
- `@cognigyRecentUserInputs` — the tag is replaced with a string that can contain up to 10 recent user outputs, for example:
       
    ```text
    User: userOutput1
    User: userOutput2
    ```
  
    If you want to access only the last user input, specify `Text` token in the **Prompt** field.


When adding a tag, ensure that you leave a line break before and after the tag, for example:

```text
A user had a conversation with a chatbot. The conversation history so far is:
@cognigyRecentConversation

Describe the user sentiment in one very short line.
```

## More information

- [Generative AI](../../generative-ai.md)
- [GPT Conversation Node](gpt-conversation.md)

