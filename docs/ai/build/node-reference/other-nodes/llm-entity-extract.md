---
title: "LLM Entity Extract"
slug: "llm-entity-extract"
description: "The LLM Entity Extract Node utilizes a chosen LLM to extract entities, such as product codes, booking codes, and customer IDs, from a given string."
hidden: false
---

# LLM Entity Extract

[![Version badge](https://img.shields.io/badge/Added in-v4.97-blue.svg)](../../../../release-notes/4.97.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/llm-entity-extract.png" width="50%"/>
</figure>

## Description

This Node uses a Large Language Model (LLM) to extract entities, such as product codes, booking codes, and customer IDs, from a given string.

The LLM Entity Extract Node is suitable for both chat and voice use cases. In a chat interface, it can process text inputs, while in a voice interface, it can recognize and analyze spoken language.

Before using this Node, set the Generative AI provider in the [Settings](../../../empower/generative-ai.md#set-up-generative-ai).
You can configure the Node to either use the default model defined in the Settings or choose a specific configured LLM.

To output the result, below the LLM Entity Extract Node, add a [Say Node](../basic/say.md). In the **Text** field of the Say Node, use a key specified in the Storage Options, for example, `{{ "{{input.extractedEntity}}" }}`.

## Parameters

| Parameter            | Type          | Description                                                                                                                                                                                                                              |
|----------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Large Language Model | List          | Select a model or use the default one.                                                                                                                                                                                                   |
| Entity Name          | CognigyScript | The name of the entity to extract. For example, `customerID`.                                                                                                                                                                            |
| Entity Description   | CognigyScript | A sentence which describes the entity. For example, `An alphanumeric string of 6 characters, e.g. ABC123 or 32G5FD`.                                                                                                                     |
| Example Input        | Text          | Examples of text inputs. For example, `My ID is AB54EE, is that ok?`, `That would be ah bee see double 4 three`, `I guess it's 49 A B 8 K`. Alternatively, you can clicke **Show JSON Editor** and add input examples in the code field. |
| Extracted Entity     | CognigyScript | Examples of extracted entities. For example, `AB54EE`, `ABC443`, `49AB8K`.                                                                                                                                                               |

### JSON Input Examples

```json
{
  "My ID is AB54EE, is that ok?": "AB54EE",
  "That would be ah bee see double 4 three": "ABC443",
  "I guess it's 49 A B 8 K": "49AB8K"
}
```

??? info "Advanced"

    | Parameter       | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
    |-----------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Temperature     | Indicator | The appropriate sampling temperature for the model. Higher values mean the model will take more risks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | Timeout         | Number    | The maximum amount of milliseconds to wait for a response from the Generative AI Provider.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | Response Format | Select    | Choose the format for the model's output result. You can select one of the following options:<ul><li>**None** — no response format is specified, or do not request with an LLM provider that does not accept any response format or does not support it or could use provider's default in-built response format. This option is selected by default.</li><li>**Text** — the model returns messages in text format.</li><li>**JSON Object** — the model returns messages in JSON format. In contrast to the [LLM Prompt](../service/llm-prompt.md) Node, you don't need to return the model to return the JSON object. It's already configured to do so. Note that not all LLMs may support this parameter, which could cause model calls to fail. For more information, refer to the LLM provider's API documentation.</li></ul> |

??? info "Storage Options"

    | Parameter                   | Type          | Description                                                                                                                                                                                     |
    |-----------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | How to handle the result    | Select        | Determine how to handle the prompt result:<ul><li>**Store in Input** — stores the result in the Input object.</li><li>**Store in Context** — stores the result in the Context object.</li></ul> |
    | Input Key to store Result   | CognigyScript | The parameter appears when **Store in Input** is selected. The result is stored in the `extractedEntity` Input object by default. You can specify another value.                                |
    | Context Key to store Result | CognigyScript | The parameter appears  when **Store in Context** is selected. The result is stored in the `extractedEntity` Context object by default. You can specify another value.                           |

??? info "Debugging Options"

    When using the Interaction Panel, you can trigger two types of debug logs. These logs are only available when using the Interaction Panel and are not intended for production debugging. You can also combine both log types.

    | Parameter                  | Type   | Description                                                                                                                                                                                                                                                                                         |
    |----------------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Show Token Count           | Toggle | Send a debug message containing the input, output, and total token count. The message appears in the Interaction Panel when Debug Mode is enabled. Cognigy.AI uses the GPT-3 tokenizer algorithm, so actual token usage may vary depending on the model used. The parameter is inactive by default. |
    | Log Request and Completion | Toggle | Send a debug message containing the LLM provider and the subsequent completion. The message appears in the Interaction Panel when Debug Mode is enabled. The parameter is inactive by default.                                                                                                      |

## More Information

- [Question Node: LLM-extracted Entity](../basic/question.md#)
