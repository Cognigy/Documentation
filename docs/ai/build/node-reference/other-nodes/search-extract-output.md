---
title: "Search Extract Output"
slug: "search-extract-output"
description: "The Search Extract Output performs a content search, extracts, and outputs content from data previously uploaded to the Knowledge Store through a source file."
hidden: false
---

# Search Extract Output

[![Version badge](https://img.shields.io/badge/Updated in-v4.84-blue.svg)](../../../../release-notes/4.84.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/search-extract-output.png" width="80%"/>
</figure>

## Description

{! _includes/release-notes/order-property-deprecation.md !}

This Node searches through data within the Knowledge AI solution, extracts a relevant answer via a generative AI model, and creates an output.

Before using this Node,
ensure that you configured the `text-embedding-ada-002` model as well as the
`text-davinci-003 (deprecated)`  or `gpt-3.5-turbo` models.
For more information, refer to the [list of supported providers](../../../empower/llms.md).

## Settings

### Mode

There are three modes that offer different levels of data extraction and presentation.

#### Search & Extract & Output

Performs a search, extracts an answer, and outputs the result as text or adaptive card.

In the Search & Extract & Output mode, the following steps are involved:

1. The system performs a knowledge search and retrieves relevant information.
2. The retrieved data is sent to a Language Model (LLM) for further processing. 
3. The LLM extracts key points or answers from the search results, filtering out unnecessary details. 
4. The extracted information is stored in the Input or Context objects. 
5. The system automatically outputs the result from the LLM as either plain text or an adaptive card.

For this mode, select models from the [list of supported providers](../../../empower/llms.md) that cover both the `LLM Prompt Node & Search Extract Output Node` and `Knowledge Search` cases.

#### Search & Extract

Performs a search, extracts an answer, but does not perform an automatic output. Our customers can then manually create the output they desire.

In the Search & Extract mode, the following steps are involved:

1. The system performs a knowledge search and retrieves relevant information.
2. The retrieved data is directly sent to the LLM for extraction of key points or answers.
3. The LLM extracts the relevant information and writes it to the Input or Context objects.

For this mode, select models from the [list of supported providers](../../../empower/llms.md) that cover both the `LLM Prompt Node & Search Extract Output Node` and `Knowledge Search` cases.

#### Search Only

Performs a knowledge search and retrieves information without extraction or automatic output.

In the Search only mode, the following steps are involved:

1. The system performs a knowledge search and retrieves relevant information. 
2. The search response is stored in the Input or Context objects.

For this mode, select models from the [list of supported providers](../../../empower/llms.md) that cover the `Knowledge Search` case.

### Knowledge Store

Select a store from the list to allow the Node to retrieve the data.

### Search Settings

| Parameter                   | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Context-Aware Search        | Select        | Considering the transcript's context for the search. It allows an AI Agent to answer follow-up questions. You can select one of the following options:<br>- **On** — is the default option. When this setting is enabled, it affects tokenization costs, which impact the amount of memory, computational power, and overall expenses needed for running an OpenAI or Azure OpenAI model. To get a better understanding of how the feature works in practice, see [Examples](#examples). <br> - **Off** — the setting is turned off.                                                                                                                                                                                                                                                                       |
| Transcript Steps            | Indicator     | Number of prior transcript steps to use in a context-aware search. This parameter is active when the Context-Aware Search setting is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Where to store the result   | Select        | The storage for the search results. Select a storage:<br> - **default** — the content will be stored in the Input object (`input.knowledgeSearch`). <br> - **Input** — the content will be stored in the Input object.<br> - **Context** — the content will be stored in the Context.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| String to search for        | CognigyScript | The string to search for in the Knowledge Store. A default value is stored in `input.text`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Source Tags                 | CognigyScript | The tags serve to refine the scope of your knowledge search, allowing you to include only the most pertinent sections of the knowledge base and, as a result, improve the accuracy of search outputs. <br><br> Before specifying tags, ensure that they were provided during the upload of the source file for this Knowledge Source. Add Tags by specifying each Tag separately and pressing ++enter++. The maximum number of tags is 5. <br><br>When you specify multiple Source Tags, the Search Extract Output Node defaults to an `AND` operator, meaning it only considers Sources that have all the specified Tags. This approach ensures the search results are precise and highly relevant to the end user's query. To change this behavior, go to the **Match Types for Source Tags** parameter. |
| Match Types for Source Tags | Select        | The operator to filter Knowledge Sources by Source Tags. Select one of the following options:<br> - **AND** — the default value, requires all tags to match across multiple Knowledge Sources. Consider the following example: there are Knowledge Sources with Tags `S-a`, `S-b`, and `S-c`. When you use the `AND` operator to filter by `S-a` and `S-b`, only Sources with both Tags `S-a` and `S-b` will be included in the search results.<br> - **OR** — requires at least one tag to match across multiple Knowledge Sources. Consider the following example: there are Knowledge Sources with Tags `S-a`, `S-b`, and `S-c`. When you use the `OR` operator to filter by `S-a` or `S-b`, any Source with either Tag `S-a` or `S-b` will be included in the search results.                          |

{! _includes/ai/knowledge-ai/tags.md !}

### Extract Settings

| Parameter         | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Prompt            | CognigyScript | The prompt for generating completions. This prompt is designed for ChatGPT-based models. The behavior of this prompt may vary depending on the model used. You can change the prompt at your discretion. <br><br> In the prompt, the following tags are used to retrieve information from the Knowledge Store and Input object to ensure that the LLM receives all the necessary information to generate the most accurate response: <br>- `@answerLanguage` - the language determined based on the end user's message used to communicate with the AI Agent in the conversation.<br>- `@foundDocuments` - the top-k knowledge results determined from the end user's question.<br>- `@userInput` - the message that the end user sent to the AI Agent in the conversation. |
| Temperature       | Indicator     | The appropriate sampling temperature for the model. Higher values mean the model will take more risks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Maximal Tokens    | Indicator     | The maximum number of tokens to generate in the completion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Presence Penalty  | Indicator     | Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood of talking about new topics.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Frequency Penalty | Indicator     | Number between -2.0 and 2.0. The penalty assigns a lower probability to tokens frequently appearing in the generated text, encouraging the model to generate more diverse and unique content.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Use Stops         | Toggle        | Whether to use a list of stop words to let Generative AI know where the sentence stops.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Stops             | Text          | Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Timeout           | Number        | The maximum amount of time in milliseconds to wait for a response from the Generative AI Provider.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Timeout Message   | CognigyScript | The message to output if the timeout is reached.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Output Settings

| Parameter            | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                         |
|----------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OutputMode           | Select        | This parameter allows you to choose between two options for the output:<br> - **Text** — select this option if you want the system to provide a basic text-based response as the output.<br>- **Adaptive Card** — select this option if you want a visual representation of an Adaptive Card as the output. Adaptive Cards are interactive and display rich content with buttons, images, and more. |
| Output Fallback Text | CognigyScript | The text to output if no answer was found.                                                                                                                                                                                                                                                                                                                                                          |

### Error Handling

| Parameter                      | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                            |
|--------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Select Error Handling Approach | Select | You can select one of the Error Handling options:<br>- **Stop Flow Execution** — terminate the current Flow execution.<br>- **Continue Flow Execution** — allow the Flow to continue executing, bypassing the error and proceeding to the next steps.<br>- **Go to Node** — redirect the workflow to a specific Node in the Flow, which can be useful for error recovery or customized error handling. |
| Error Message (optional)       | Text   | Active when the **Continue Flow Execution** option is selected. Optional message to output if the Search or Extract service fails.                                                                                                                                                                                                                                                                     |
| Select Flow                    | Select | Active when the **Go to Node** option is selected. Select a Flow from the available options.                                                                                                                                                                                                                                                                                                           |
| Select Node                    | Select | Active when the **Go to Node** option is selected. Select a Node from the available options.                                                                                                                                                                                                                                                                                                           |

## Examples

### Context-Aware Search

By [considering the context](#search-settings),
the search can help users find information within a transcript more quickly,
as it understands the nuances of the content.
When enabling a context-aware search system,
you can configure the number of prior transcript steps to use in the search to suit your specific requirements.
The number of prior transcript steps affects the depth of context considered when retrieving search results.

In the following table, a dialogue between the user and the AI Agent is presented, showing the agent's responses in both the enabled and disabled modes of the Context-Aware Search feature.

| <div style="width:430px">Context-Aware Search is off</div>                                                                                                                                                                                                                                                                                                  | Context-Aware Search is on                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **user:** What animals are allowed on a plane?<br> **AI Agent:** Passengers are allowed to bring a maximum of two animals (dogs or cats) on the plane, either in the cabin or in the cargo hold, as long as they are in approved transport containers.<br> **user:** Give me more details! <br> **AI Agent:** Unfortunately, I cannot answer your question. | **user:** What animals are allowed on a plane?<br> **AI Agent:** Passengers are allowed to bring a maximum of two animals (dogs or cats) on the plane, either in the cabin or in the cargo hold, as long as they are in an approved transport container.<br> **user:** Give me more details! <br> **AI Agent:** The approved transport container for animals on a plane must have a maximum size of 118 cm (55 x 40 x 23 cm) or 47 in (22 x 16 x 9 in) and a total weight, including the animal, not exceeding 8 kg. The container should be escape-proof, leak-proof, bite-proof, and lined with absorbent material. Only one transport container per passenger is allowed in the cabin, and the number of animals per container is limited to one, with exceptions for specific cases. |


## More Information

- [Knowledge Search Node](knowledge-search.md)
- [Knowledge Search Overview](../../../empower/knowledge-ai/overview.md)
- [LLM](../../../empower/llms.md)


