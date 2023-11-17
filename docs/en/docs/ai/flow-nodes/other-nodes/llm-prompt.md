---
title: "LLM Prompt"
slug: "llm-prompt"
description: "The Cognigy LLM Prompt Node allows using Generative AI for creating relevant content."
hidden: false
---

# LLM Prompt

[![Version badge](https://img.shields.io/badge/Updated in-v4.64-blue.svg)](../../../release-notes/4.64.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/llm-prompt.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

The LLM Prompt Node allows using Generative AI for creating relevant content.

Before using this Node, set the Generative AI provider in the [Settings](../../generative-ai.md#set-up-generative-ai).
You can configure the Node to either use the default model defined in the Settings or choose a specific configured LLM.

The Node supports the following modes:

- **Chat**. This mode is activated by default and is preferable for dynamic conversations and interactions with the model.
  It takes into account the context of messages from the user and the bot,
  depending on the chosen number of transcript turns (messages) in the **Transcript Steps** setting.
- **Prompt**. This mode is preferable for single-turn tasks or generating text based on a single prompt.

If your LLM provider doesn't support Chat mode, Cognigy will automatically convert the Chat request to a Prompt request.

### Storing Results

To store the model output and then display the output of the LLM Prompt Node to the user, select **Store to Input** or **Store to Context** in the [Storage & Streaming Options](#storage--streaming-options) section.

### Streaming Results

If you want the output result to be immediately displayed in the chat, without saving it in the Input or Context objects and utilizing the Say Node, select the **Stream to Output** setting in the [Storage & Streaming Options](#storage--streaming-options) section.

## Settings

### Instruction

This is either the prompt for completions or the system message for chat.

Additionally, you can inject the recent conversation into the **Prompt** field by using these tags:

- `@cognigyRecentConversation` — the tag is replaced with a string that can contain up to 10 recent virtual agent and 10 user outputs, for example:
   ```text
   Bot: agentOutput1
   User: userOutput1
   Bot: agentOutput2
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

Both tags can include an optional turn limit parameter, which is appended to the tag. 

Examples:
```typescript
@cognigyRecentConversation:3 // returns the last 3 turns of the conversation.
@cognigyRecentUserInputs:2 // return the last 2 user inputs
```

### Advanced

| Parameter                 | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                            |
|---------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sampling Method           | Select        | Methods:<br/>- **Temperature** — determines the level of randomness in the generated text. A higher temperature allows for more diverse and creative outputs, while a lower temperature leads to more predictable and consistent outputs with the training data.<br> - **Top Percentage** — specifies the percentage of the most probable outputs for generation, resulting in more consistent output. |
| Maximal Tokens            | Indicator     | The maximum number of tokens to generate in the completion.                                                                                                                                                                                                                                                                                                                                            |
| Presence Penalty          | Indicator     | Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood of talking about new topics.                                                                                                                                                                                                                       |
| Frequency Penalty         | Indicator     | Number between -2.0 and 2.0. The penalty assigns a lower probability to tokens frequently appearing in the generated text, encouraging the model to generate more diverse and unique content.                                                                                                                                                                                                          |
| Use Stops                 | Toggle        | Whether to use a list of stop words to let Generative AI know where the sentence stops.                                                                                                                                                                                                                                                                                                                |
| Stops                     | Text          | Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.                                                                                                                                                                                                                                                                             |
| Timeout                   | Number        | The maximum amount of milliseconds to wait for a response from the Generative AI Provider.                                                                                                                                                                                                                                                                                                             |

### Storage & Streaming Options

| Parameter                   | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-----------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| How to handle the result    | Select        | Determine how to handle the prompt result:<br> - **Store in Input** — stores the result in the Input object. To print the prompt result, use the LLM Prompt Result Token in the Say Node. <br> - **Store in Context** — stores the result in the Input object in the Context. To print the prompt result, use the LLM Prompt Result Token in the Say Node. <br>- **Stream to Output** — streams the result directly into the output. This means that the model provides prompts directly into the conversation chat, and you don't need to use the LLM Prompt Result token and Say node. This result won't be stored in either the Input or the Context. Note that streaming may not be supported by all [Cognigy LLM Prompt Node](../../resources/build/llm.md#supported-models) providers, such as Google[^*]. If streaming is not supported, the result will be written to the Input object. |
| Input Key to store Result   | CognigyScript | The parameter is active when **Store in Input** selected. The result is stored in the `promptResult` Input object by default. You can specify another value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Context Key to store Result | CognigyScript | The parameter is active when **Store in Context** selected. The result is stored in the `promptResult` Context object by default. You can specify another value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Stream Output Tokens        | CognigyScript | The parameter is active when **Stream to Output** is selected. Tokens after which to output the stream buffer. The tokens can be punctuation marks or symbols, such as `\n`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

[^*]: Note that not all LLM models support streaming.

### Debugging Options

When using the Interaction Panel, you can trigger two types of debug logs. These logs are only available when using the Interaction Panel and are not intended for production debugging. You can also combine both log types.

| Parameter                  | Type   | Description                                                                                                                                                                     |
|----------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Log Token Count            | Toggle | Log the number of consumed LLM tokens for the request and completion. Cognigy uses the GPT-3 tokenizer algorithm, so actual token usage may differ depending on the model used. |
| Log Request and Completion | Toggle | Log both the request sent to the LLM provider and the subsequent completion.                                                                                                    |

## More Information

- [LLM](../../resources/build/llm.md)
- [Generative AI](../../generative-ai.md)
- [GPT Conversation Node](gpt-conversation.md)