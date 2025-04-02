---
title: "LLM Prompt"
slug: "llm-prompt"
description: "The Cognigy LLM Prompt Node allows using Generative AI for creating relevant content."
hidden: false
---

# LLM Prompt

[![Version badge](https://img.shields.io/badge/Updated in-v4.97-blue.svg)](../../../../release-notes/4.97.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/llm-prompt.png" width="50%" />
</figure>

## Description

The LLM Prompt Node lets you use prompts with different LLM models to generate text or structured content.

Before using this Node, set the Generative AI provider in the [Settings](../../../empower/generative-ai.md#set-up-generative-ai).

The Node supports the following modes:

- **Chat**. This mode is activated by default and is preferable for dynamic conversations and interactions with the model.
  It takes into account the context of messages from the user and the agent,
  depending on the chosen number of transcript turns (messages) in the **Transcript Turns** setting.
- **Prompt**. This mode is preferable for single-turn tasks or generating text based on a single prompt.

If your LLM provider doesn't support Chat mode, Cognigy.AI automatically converts the Chat request to a Prompt request.

## Parameters

### Large Language Model

The selected **Default** model is the model that you specified in **Settings > Generative AI Settings** of your Project.

You can select a different model from the list or override the selected model using the Custom Model Options parameter.

### Instruction

This is either the prompt for completions or the system message for chat.

Additionally, you can inject the recent conversation into the **Instruction (System Message/Prompt)** field by using these tags:

- `@cognigyRecentConversation` — the tag is replaced with a string that can contain up to 10 recent AI Agent and 10 user outputs, for example:
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

### Chat Mode

Activate the toggle to enable Chat mode.

??? info "Advanced"

    | Parameter         | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    |-------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Sampling Method   | Select    | Methods:<ul><li>**Temperature** — determines the level of randomness in the generated text. A higher temperature allows for more diverse and creative outputs, while a lower temperature leads to more predictable and consistent outputs with the training data.</li><li>**Top Percentage** — specifies the percentage of the most probable outputs for generation, resulting in more consistent output.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | Maximal Tokens    | Indicator | The maximum number of tokens to generate in the completion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | Presence Penalty  | Indicator | Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood of talking about new topics.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | Frequency Penalty | Indicator | Number between -2.0 and 2.0. The penalty assigns a lower probability to tokens frequently appearing in the generated text, encouraging the model to generate more diverse and unique content.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
    | Use Stops         | Toggle    | Whether to use a list of stop words to let Generative AI know where the sentence stops.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | Stops             | Text      | Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | Timeout           | Number    | The maximum number of milliseconds to wait for a response from the Generative AI Provider.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | Response Format   | Select    | Choose the format for the model's output result. You can select one of the following options:<ul><li>**None** — no response format is specified, or do not request with an LLM provider that does not accept any response format or does not support it or could use provider's default in-built response format. This option is selected by default.</li><li>**Text** — the model returns messages in text format.</li><li>**JSON Object** — the model returns messages in JSON format. To use this option, instruct the model to generate JSON via a system or user message in the **Instruction (System Message/Prompt)** field. For example, `Take the user message and return it as JSON in the following format {"message": "THE_MESSAGE"}`. Note that this parameter may not be supported by all LLMs. For more information, refer to the LLM provider's API documentation.</li></ul> |
    | Seed              | Number    | Use this parameter for consistent output when referring to the same LLM Prompt Node multiple times. Specify any integer number, for example, `123`. The number in the Seed field and the prompt in the **Instruction (System Message/Prompt)** field should remain unchanged during subsequent references to the Node.<br>Note that in OpenAI, this parameter is in [Beta](https://platform.openai.com/docs/api-reference/chat/create#chat-create-seed) and is supported only by [certain models](https://cookbook.openai.com/examples/reproducible_outputs_with_the_seed_parameter).                                                                                                                                                                                                                                                                                                        |

??? info "Storage & Streaming Options"

    | Parameter                     | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    |-------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | How to handle the result      | Select        | Determine how to handle the prompt result:<ul><li>**Store in Input** — stores the result in the Input object. To print the prompt result, use the LLM Prompt Result Token in the Say Node or enable the **Output result immediately** option.</li><li>**Store in Context** — stores the result in the Context object. To print the prompt result, use the LLM Prompt Result Token in the Say Node or enable the **Output result immediately** option.</li><li>**Stream to Output** — streams the result directly into the output. This means that the model provides prompts directly into the conversation chat, as soon as a Stream Buffer Flush Token is matched, and you don't need to use the LLM Prompt Result token and Say Node. By default, this result won't be stored in either the Input or the Context. You can change this behavior by activating the **Store Copy in Input** option. Note that streaming may not be supported by all [Cognigy LLM Prompt Node](../../../empower/llms/model-support-by-feature.md) providers, such as Google[^*]. If streaming is not supported, enabling the **Store Copy in Input** option will save the result to the Input object.</li></ul> |
    | Input Key to store Result     | CognigyScript | The parameter appears when **Store in Input** is selected. The result is stored in the `promptResult` Input object by default. You can specify another value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | Context Key to store Result   | CognigyScript | The parameter appears when **Store in Context** is selected. The result is stored in the `promptResult` Context object by default. You can specify another value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | Stream Buffer Flush Tokens    | Text Array    | The parameter appears when **Stream to Output** is selected. It defines tokens that trigger the stream buffer to flush to the output. The tokens can be punctuation marks or symbols, such as `\n`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | Stream Buffer Flush Overrides | Text Array    | The parameter appears when **Stream to Output** is selected. It allows using regular expressions (without leading or trailing slashes) to control stream buffer flushing. A trailing `$` is automatically added to match patterns at the end of the buffer. For example, `\d+\.` checks for a number followed by a dot at the end of the string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | Output result immediately     | Toggle        | The parameter appears when you select either **Store in Input** or **Store in Context**. This parameter allows you to output results immediately without using the Say Node and LLM Prompt token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | Store Detailed Results        | Toggle        | The parameter appears when you select either **Store in Input** or **Store in Context**, or when you enable **Store Copy in Input**. This parameter allows you to save detailed results of the LLM's generated output. By default, the result is stored in the `promptResult` object. You can specify another value in the **Context Key for the Result** field to save it in the Context object, or in the **Input Key for the Result** to save it in the Input object. The object contains keys such as `result`, `finishReason`, and `usage`. It may also include `detailedResult` if completion models are used, as well as `firstChunk` and `lastChunk` in some streaming results, depending on the LLM provider.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | Store Copy in Input           | Toggle        | The parameter appears when **Stream to Output** is selected. In addition to streaming the result to the output, store a copy in the Input object by specifying a value in the **Input Key to store Result** field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | Input Key to store Result     | CognigyScript | The parameter appears when **Store Copy in Input** is selected. The result is stored in the `promptResult` Input object by default. You can specify another value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    
    **Streaming Results**

    In Stream mode, LLM generates tokens and returns them one by one to Cognigy.AI to ensure low-latency responses.
    Cognigy.AI monitors delimiter tokens (Stream Buffer Flush Tokens),
    which serve as markers indicating when to output the token buffer.
    These tokens could be `.`, `!`, `?`, or any other symbols that act as delimiters for complete logical statements.
    When Cognigy.AI detects one of these tokens, it promptly flushes the token buffer into the voice or text chat.

    The preconfigured overrides are listed in the table.

    | Regex                                 | Description                                | Example    |
    |---------------------------------------|--------------------------------------------|------------|
    | `\d+\.`                               | A number followed by a dot.                | 26.08      |
    | `\b(?:Dr|Ms|Mr|Mrs|Prof|Sr|Jr|ca)\.`  | Common abbreviations followed by a dot.    | Mr.        |
    | `\b[A-Z]\.`                           | A single capital letter followed by a dot. | M. Smith   |
    | `\.\.\.`                              | Three dots used for omission.              | ...        |
    | `\b.\..\.`                            | Two-letter abbreviations.                  | i.e., e.g. |

    [^*]: Note that not all LLM models support streaming.

??? info "Error Handling"

    | Parameter                      | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                              |
    |--------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Log to System Logs             | Toggle | Log errors to the system logs. They can be viewed on the [Logs](../../../test/logs.md) page of your Project. The parameter is inactive by default.                                                                                                                                                                                                                                                                       |
    | Select Error Handling Approach | Select | You can select one of the Error Handling options:<ul><li>**Stop Flow Execution** — terminate the current Flow execution.</li><li>**Continue Flow Execution** — allow the Flow to continue executing, bypassing the error and proceeding to the next steps.</li><li>**Go to Node** — redirect the workflow to a specific Node in the Flow, which can be useful for error recovery or customized error handling.</li></ul> |
    | Error Message (optional)       | Text   | The parameter appears when **Continue Flow Execution** is selected. Add an message to output if the LLM Prompt Node fails.                                                                                                                                                                                                                                                                                               |
    | Select Flow                    | Select | The parameter appears when **Go to Node** is selected. Select a Flow from the available options.                                                                                                                                                                                                                                                                                                                         |
    | Select Node                    | Select | The parameter appears when **Go to Node** is selected. Select a Node from the available options.                                                                                                                                                                                                                                                                                                                         |

??? info "Custom Options"

    These settings are helpful if you need to use parameters that are not included in the LLM Prompt Node or if you need to overwrite existing ones.

    | Parameter              | Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    |------------------------|------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Custom Model Options   | JSON | Additional parameters for the LLM model. You can specify individual parameters as well as entire functions. These parameters customize the behavior of the model, such as adjusting temperature, top_k, or presence_penalty. Note that if you use a parameter already set in the Node, for example, temperature, it will be overwritten. To view the full list of available parameters for your model, refer to the LLM provider's API documentation. For example, [OpenAI](https://platform.openai.com/docs/api-reference/chat/create) or [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/).<br><br> **Examples:** <ul><li>`{ "logprobs": true }`</li><li>`{ "temperature": 0.7 }`</li><li>`{ "model": "claude-3-opus-20240229" }` (see Forcing Model Versions)</li></ul> |
    | Custom Request Options | JSON | Additional parameters for the LLM request. These parameters customize the request itself, such as setting parameters related to timeout, retries, or headers. For more information, refer to the LLM provider's API documentation. <br><br> **Examples:** <br>- `{ "timeout": 5000 }`<br> - `{ "headers": { "Authorization": "Bearer <token>" } }`                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
  
    **Forcing Model Versions**

    You can force the LLM Prompt Node to use a specific model version by including it in the Custom Model Options.
    This means that the LLM Prompt Node will use the specified version of the language model instead of the default or any other available versions. This allows for more control over the behavior of the LLM Prompt Node, ensuring it utilizes the desired model version for generating prompts or responses.

    You can use models from any LLM provider supported by Cognigy, including those not yet directly integrated.
    However, you can only replace one model with another within the same provider.

    Let's consider an example with the Anthropic provider:
    how to force the LLM Prompt Node to use the model version `claude-3-sonnet-20240229`,
    despite the LLM resource defaulting to the `claude-3-opus-20240229` model:

    1. [Create an Anthropic LLM resource](../../../empower/llms/providers/anthropic.md) for Claude-1, for example, `claude-3-opus-20240229`.
    2. Create a Flow and add an LLM Prompt Node to it.
    3. In the LLM Prompt Node, select the model `claude-3-opus-20240229` from the **Large Language Model** list.
    4. Override the model selection. In the **Custom Model Options** field, specify the custom model options as follows: `{ "model": "claude-3-sonnet-20240229" }`.
    5. Click **Save Node**.

    The LLM Prompt Node now utilizes the `claude-3-sonnet-20240229` model.

    Below, you'll find documentation for supported models:

    - [Aleph Alpha Models](https://docs.aleph-alpha.com/)
    - [Anthropic Models](https://docs.anthropic.com/claude/docs/models-overview)
    - [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models)
    - [OpenAI Models](https://platform.openai.com/docs/models)


??? info "Debugging Settings"

    When using the Interaction Panel, you can trigger two types of debug logs. These logs are only available when using the Interaction Panel and are not intended for production debugging. You can also combine both log types.

    | Parameter                  | Type   | Description                                                                                                                                                                                                                                                                                         |
    |----------------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Show Token Count           | Toggle | Send a debug message containing the input, output, and total token count. The message appears in the Interaction Panel when Debug Mode is enabled. Cognigy.AI uses the GPT-3 tokenizer algorithm, so actual token usage may vary depending on the model used. The parameter is inactive by default. |
    | Log Request and Completion | Toggle | Send a debug message containing the request sent to the LLM provider and the subsequent completion. The message appears in the Interaction Panel when Debug Mode is enabled. The parameter is inactive by default.                                                                                  |

## More Information

- [LLM](../../../empower/llms/overview.md)
- [Generative AI](../../../empower/generative-ai.md)
- [GPT Conversation Node](gpt-conversation.md)