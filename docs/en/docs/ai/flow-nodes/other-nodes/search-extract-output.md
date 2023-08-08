---
title: "Search Extract Output"
slug: "search-extract-output"
description: "The Search Extract Output performs a content search, extracts, and outputs content from data previously uploaded to the knowledge store through a source file."
hidden: false
---

# Search Extract Output (Beta)

[![Version badge](https://img.shields.io/badge/Added in-v4.57(Beta)-purple.svg)](../../../release-notes/4.57.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/search-extract-output.png" width="80%"/>
</figure>

## Description
<div class="divider"></div>

This Node searches through data within the Knowledge AI solution, extracts a relevant answer via a generative AI model, and creates an output.

Before using this Node, ensure that you configured the `text-embedding-ada-002` model as well as the `text-davinci-003` or `gpt-3.5-turbo` models.
For more information, refer to the [list of supported providers](../../resources/build/llm.md).

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

For this mode, select models from the [list of supported providers](../../resources/build/llm.md) that cover both the `LLM Prompt Node & Search Extract Output Node` and `Knowledge Search` cases.

#### Search & Extract

Performs a search, extracts an answer, but does not perform an automatic output. Our customers can then manually create the output they desire.

In the Search & Extract mode, the following steps are involved:

1. The system performs a knowledge search and retrieves relevant information.
2. The retrieved data is directly sent to the LLM for extraction of key points or answers.
3. The LLM extracts the relevant information and writes it to the Input or Context objects.

For this mode, select models from the [list of supported providers](../../resources/build/llm.md) that cover both the `LLM Prompt Node & Search Extract Output Node` and `Knowledge Search` cases.

#### Search only

Performs a knowledge search and retrieves information without extraction or automatic output.

In the Search only mode, the following steps are involved:

1. The system performs a knowledge search and retrieves relevant information. 
2. The search response is stored in the Input or Context objects.

For this mode, select models from the [list of supported providers](../../resources/build/llm.md) that cover the `Knowledge Search` case.

### Knowledge Store

Select a store from the list to allow the Node to retrieve the data.

### Search Settings

| Parameter                 | Type          | Description                                                                                                                                                                                                                                                            |
|---------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Top K                     | Indicator     | The number of best-chunk knowledge search results to return.                                                                                                                                                                                                           |
| Where to store the result | Select        | The storage for the search results. Select a storage:<br> default - the content will be stored in the Input object (`input.knowledgeSearch`) <br> - Input - the content will be stored in the Input object.<br> - Context - the content will be stored in the Context. |
| String to search for      | CognigyScript | The string to search for in the knowledge store. A default value is stored in `input.text`.                                                                                                                                                                            |

### Extract Settings

| Parameter         | Type          | Description                                                                                                                                                                                   |
|-------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Prompt            | CognigyScript | The prompt to generate completions for.                                                                                                                                                       |
| Temperature       | Indicator     | The appropriate sampling temperature for the model. Higher values mean the model will take more risks.                                                                                        |
| Maximal Tokens    | Indicator     | The maximum number of tokens to generate in the completion.                                                                                                                                   |
| Presence Penalty  | Indicator     | Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood of talking about new topics.              |
| Frequency Penalty | Indicator     | Number between -2.0 and 2.0. The penalty assigns a lower probability to tokens frequently appearing in the generated text, encouraging the model to generate more diverse and unique content. |
| Use Stops         | Toggle        | Whether to use a list of stop words to let Generative AI know where the sentence stops.                                                                                                       |
| Stops             | Text          | Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.                                                                    |
| Timeout           | Number        | The maximum amount of time in milliseconds to wait for a response from the Generative AI Provider.                                                                                            |
| Timeout Message   | CognigyScript | The message to output if the timeout is reached.                                                                                                                                              |

### Output Settings

| Parameter            | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                 |
|----------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OutputMode           | Select        | This parameter allows you to choose between two options for the output:<br> - Text - select this option if you want the system to provide a basic text-based response as the output.<br>- Adaptive Card - select this option if you want a visual representation of an Adaptive Card as the output. Adaptive Cards are interactive and display rich content with buttons, images, and more. |
| Output Fallback Text | CognigyScript | The text to output if no answer was found.                                                                                                                                                                                                                                                                                                                                                  |


## More information

- [Knowledge Search Node](knowledge-search.md)
- [Knowledge Search Overview](../../knowledge-ai.md)
- [LLM](../../resources/build/llm.md)


