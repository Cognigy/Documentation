---
title: "LLM Prompt"
slug: "llm-prompt"
description: "The Cognigy LLM Prompt Node allows using Generative AI for creating relevant content."
hidden: false
---

# LLM Prompt

[![Version badge](https://img.shields.io/badge/Updated in-v4.70-blue.svg)](../../../release-notes/4.70.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/llm-prompt.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

The LLM Prompt Node lets you use prompts with different LLM models to generate text and/or structured content.

Before using this Node, set the Generative AI provider in the [Settings](../../generative-ai.md#set-up-generative-ai).
You can configure the Node to either use the default model defined in the Settings or choose a specific configured LLM.

The Node supports the following modes:

- **Chat**. This mode is activated by default and is preferable for dynamic conversations and interactions with the model.
  It takes into account the context of messages from the user and the bot,
  depending on the chosen number of transcript turns (messages) in the **Transcript Turns** setting.
- **Prompt**. This mode is preferable for single-turn tasks or generating text based on a single prompt.

If your LLM provider doesn't support Chat mode, Cognigy will automatically convert the Chat request to a Prompt request.

### Storing Results

To store the model output, select **Store to Input** or **Store to Context** in the [Storage & Streaming Options](#storage--streaming-options) section.

Additionally,
you can display stored output to the user
by enabling the [Output result immediately](#storage--streaming-options) option or using the Say Node and LLM Prompt token.

### Streaming Results

In Stream mode, LLM generates tokens and returns them one by one to Cognigy to ensure low-latency responses.
Cognigy monitors for delimiter tokens ([Stream Output Tokens](#storage--streaming-options)),
which serve as markers indicating when to output the token buffer.
These tokens could be `.`, `!`, `?`, or any other symbols that act as delimiters for complete logical statements.
When Cognigy detects one of these tokens, it promptly flushes the token buffer into the voice or text chat.

To enable this mode, go to the [Storage & Streaming Options](#storage--streaming-options) section.

## Settings

### Instruction

This is either the prompt for completions or the system message for chat.

Additionally, you can inject the recent conversation into the **Instruction (System Message/Prompt)** field by using these tags:

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

  If you want to access only the last user input, specify `Text` token in the **Instruction (System Message/Prompt)** field.


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
@cognigyRecentUserInputs:2 // returns the last 2 user inputs.
```

### Advanced

| Parameter         | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sampling Method   | Select    | Methods:<br/>- **Temperature** — determines the level of randomness in the generated text. A higher temperature allows for more diverse and creative outputs, while a lower temperature leads to more predictable and consistent outputs with the training data.<br> - **Top Percentage** — specifies the percentage of the most probable outputs for generation, resulting in more consistent output.                                                                                                                                                                                                                                                                                                                                                                                                          |
| Maximal Tokens    | Indicator | The maximum number of tokens to generate in the completion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Presence Penalty  | Indicator | Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood of talking about new topics.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Frequency Penalty | Indicator | Number between -2.0 and 2.0. The penalty assigns a lower probability to tokens frequently appearing in the generated text, encouraging the model to generate more diverse and unique content.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Use Stops         | Toggle    | Whether to use a list of stop words to let Generative AI know where the sentence stops.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Stops             | Text      | Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Timeout           | Number    | The maximum amount of milliseconds to wait for a response from the Generative AI Provider.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Response Format   | Select    | Choose the format for the model's output result. You can select one of the following options:<br>**None** — no response format is specified, or do not request with an LLM provider that does not accept any response format or does not support it.<br>- **Text** — the model returns messages in text format. This option is selected by default.<br>- **JSON Object** — the model returns messages in JSON format. To use this option, instruct the model to generate JSON via a system or user message in the **Instruction (System Message/Prompt)** field. For example, `Take the user message and return it as JSON in the following format {"message": "THE_MESSAGE"}`. Note that this parameter may not be supported by all LLMs. For more information, refer to the LLM provider's API documentation. |
| Seed              | Number    | Use this parameter for consistent output when referring to the same LLM Prompt Node multiple times. Specify any integer number, for example, `123`. The number in the Seed field and the prompt in the **Instruction (System Message/Prompt)** field should remain unchanged during subsequent references to the Node.<br>Note that in OpenAI, this parameter is in [Beta](https://platform.openai.com/docs/api-reference/chat/create#chat-create-seed) and is supported only by [certain models](https://cookbook.openai.com/examples/reproducible_outputs_with_the_seed_parameter).                                                                                                                                                                                                                           |

### Storage & Streaming Options

| Parameter                   | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-----------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| How to handle the result    | Select        | Determine how to handle the prompt result:<br> - **Store in Input** — stores the result in the Input object. To print the prompt result, use the LLM Prompt Result Token in the Say Node or enable the **Output result immediately** option. <br> - **Store in Context** — stores the result in the Context object. To print the prompt result, use the LLM Prompt Result Token in the Say Node or enable the **Output result immediately** option. <br>- **Stream to Output** — streams the result directly into the output. This means that the model provides prompts directly into the conversation chat, and you don't need to use the LLM Prompt Result token and Say node. By default, this result won't be stored in either the Input or the Context. You can change this behavior by activating the **Store Copy in Input** option. Note that streaming may not be supported by all [Cognigy LLM Prompt Node](../../resources/build/llm.md#supported-models) providers, such as Google[^*]. If streaming is not supported, enabling the **Store Copy in Input** option will save the result to the Input object. |
| Input Key to store Result   | CognigyScript | The parameter appears when **Store in Input** is selected. The result is stored in the `promptResult` Input object by default. You can specify another value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Context Key to store Result | CognigyScript | The parameter appears  when **Store in Context** is selected. The result is stored in the `promptResult` Context object by default. You can specify another value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Stream Output Tokens        | CognigyScript | The parameter appears when **Stream to Output** is selected. Tokens after which to output the stream buffer. The tokens can be punctuation marks or symbols, such as `\n`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Output result immediately   | Toggle        | The parameter appears when you select either **Store in Input** or **Store in Context**. This parameter allows you to output results immediately without using the Say Node and LLM Prompt token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Store Detailed Results      | Toggle        | The parameter appears when you select either **Store in Input** or **Store in Context**, or when you enable **Store Copy in Input**. This parameter allows you to save detailed results of the LLM's generated output. By default, the result is stored in the `promptResult` object. You can specify another value in the **Context Key for the Result** field to save it in the Context object, or in the **Input Key for the Result** to save it in the Input object. The object contains keys such as `result`, `finishReason`, and `usage`. It may also include `detailedResult` if completion models are used, as well as `firstChunk` and `lastChunk` in some streaming results, depending on the LLM provider.                                                                                                                                                                                                                                                                                                                                                                                                    | 
| Store Copy in Input         | Toggle        | The parameter appears when **Stream to Output** is selected. In addition to streaming the result to the output, store a copy in the Input object by specifying a value in the **Input Key to store Result** field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Input Key to store Result   | CognigyScript | The parameter appears when **Store Copy in Input** is selected. The result is stored in the `promptResult` Input object by default. You can specify another value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |


[^*]: Note that not all LLM models support streaming.

### Debugging Options

When using the Interaction Panel, you can trigger two types of debug logs. These logs are only available when using the Interaction Panel and are not intended for production debugging. You can also combine both log types.

| Parameter                  | Type   | Description                                                                                                                                                                     |
|----------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Log Token Count            | Toggle | Log the number of consumed LLM tokens for the request and completion. Cognigy uses the GPT-3 tokenizer algorithm, so actual token usage may differ depending on the model used. |
| Log Request and Completion | Toggle | Log both the request sent to the LLM provider and the subsequent completion.                                                                                                    |

### Custom Options

These settings are helpful if you need to use parameters that are not included in the LLM Prompt Node or if you need to overwrite existing ones.

| Parameter              | Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|------------------------|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Custom Model Options   | JSON | Additional parameters for the LLM model. You can specify individual parameters as well as entire functions. These parameters customize the behavior of the model, such as adjusting temperature, top_k, or presence_penalty. Note that if you use a parameter already set in the Node, for example, temperature, it will be overwritten. To view the full list of available parameters for your model, refer to the LLM provider's API documentation. For example, [OpenAI](https://platform.openai.com/docs/api-reference/chat/create) or [Azure OpenAI](https://learn.microsoft.com/en-us/javascript/api/@azure/openai/getchatcompletionsoptions?view=azure-node-preview#@azure-openai-getchatcompletionsoptions-toolchoice).<br><br> **Examples:** `{ "logprobs": true }`, `{ "temperature": 0.7 }` |
| Custom Request Options | JSON | Additional parameters for the LLM request. These parameters customize the request itself, such as setting parameters related to timeout, retries, or headers. For more information, refer to the LLM provider's API documentation. <br><br> **Examples:** `{ "timeout": 5000 }`, `{ "headers": { "Authorization": "Bearer <token>" } }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## More Information

- [LLM](../../resources/build/llm.md)
- [Generative AI](../../generative-ai.md)
- [GPT Conversation Node](gpt-conversation.md)