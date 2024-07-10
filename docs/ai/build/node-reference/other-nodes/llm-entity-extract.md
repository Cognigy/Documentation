---
title: "LLM Entity Extract"
slug: "llm-entity-extract"
description: "The LLM Entity Extract Node utilizes a chosen LLM to extract entities, such as product codes, booking codes, and customer IDs, from a given string."
hidden: false
---

# LLM Entity Extract

[![Version badge](https://img.shields.io/badge/Added in-v4.72-blue.svg)](../../../../release-notes/4.72.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/llm-entity-extract.png" width="100%"/>
</figure>

## Description

This Node utilizes a chosen LLM to extract entities, such as product codes, booking codes, and customer IDs, from a given string.

The LLM Entity Extract Node is suitable for both chat and voice use cases. In a chat interface, it can process text inputs, while in a voice interface, it can recognize and analyze spoken language.

Before using this Node, set the Generative AI provider in the [Settings](../../../empower/generative-ai.md#set-up-generative-ai).
You can configure the Node to either use the default model defined in the Settings or choose a specific configured LLM.

To output the result, below the LLM Entity Extract Node, add a [Say Node](../basic/say.md). In the **Text** field of the Say Node, use a key specified in the [Storage Options](#storage-options), for example, `{{ "{{input.extractedEntity}}" }}`.

## Settings

### Large Language Model

Select a model or use the default one.

### Entity

| Parameter          | Type          | Description                                                                                                          |
|--------------------|---------------|----------------------------------------------------------------------------------------------------------------------|
| Entity Name        | CognigyScript | The name of the entity to extract. For example, `customerID`.                                                        |
| Entity Description | CognigyScript | A sentence which describes the entity. For example, `An alphanumeric string of 6 characters, e.g. ABC123 or 32G5FD`. |

### Input Examples

| Parameter        | Type          | Description                                                                                                                                 |
|------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Example Input    | Text          | Examples of text inputs. For example, `My ID is AB54EE, is that ok?`, `That would be ah bee see double 4 three`, `I guess it's 49 A B 8 K`. |
| Extracted Entity | CognigyScript | Examples of extracted entities. For example, `AB54EE`, `ABC443`, `49AB8K`.                                                                  |                                                                  |

Alternatively, you can add input examples in the **Use JSON Editor** code field. For example:

```json
{
  "My ID is AB54EE, is that ok?": "AB54EE",
  "That would be ah bee see double 4 three": "ABC443",
  "I guess it's 49 A B 8 K": "49AB8K"
}
```

### Advanced

| Parameter       | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-----------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Temperature     | Indicator | The appropriate sampling temperature for the model. Higher values mean the model will take more risks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Timeout         | Number    | The maximum amount of milliseconds to wait for a response from the Generative AI Provider.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Response Format | Select    | Choose the format for the model's output result. You can select one of the following options:<br>- **None** — no response format is specified, or do not request with an LLM provider that does not accept any response format or does not support it or could use provider's default in-built response format. This option is selected by default.<br>- **Text** — the model returns messages in text format.<br>- **JSON Object** — the model returns messages in JSON format. In contrast to the [LLM Prompt](../service/llm-prompt.md) Node, you don't need to return the model to return the JSON object. It's already configured to do so. Note that not all LLMs may support this parameter, which could cause model calls to fail. For more information, refer to the LLM provider's API documentation. |

### Storage Options

| Parameter                   | Type          | Description                                                                                                                                                                         |
|-----------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| How to handle the result    | Select        | Determine how to handle the prompt result:<br> - **Store in Input** — stores the result in the Input object. <br> - **Store in Context** — stores the result in the Context object. |
| Input Key to store Result   | CognigyScript | The parameter appears when **Store in Input** is selected. The result is stored in the `extractedEntity` Input object by default. You can specify another value.                    |
| Context Key to store Result | CognigyScript | The parameter appears  when **Store in Context** is selected. The result is stored in the `extractedEntity` Context object by default. You can specify another value.               |

### Debugging Options

When using the Interaction Panel, you can trigger two types of debug logs. These logs are only available when using the Interaction Panel and are not intended for production debugging. You can also combine both log types.

| Parameter                  | Type   | Description                                                                                                                                                                     |
|----------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Log Token Count            | Toggle | Log the number of consumed LLM tokens for the request and completion. Cognigy uses the GPT-3 tokenizer algorithm, so actual token usage may differ depending on the model used. |
| Log Request and Completion | Toggle | Log both the request sent to the LLM provider and the subsequent completion.                                                                                                    |

## More Information

- [Question Node: LLM-extracted Entity](../basic/question.md#llm-entity-extraction-options)
