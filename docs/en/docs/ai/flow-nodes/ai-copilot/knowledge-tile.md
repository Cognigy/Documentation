---
title: "Copilot: Knowledge Tile"
slug: "knowledge-tile"
hidden: false
---

# Copilot: Knowledge Tile

[![Version badge](https://img.shields.io/badge/Added in-v4.66-blue.svg)](../../../release-notes/4.66.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/knowledge-tile.png" width="80%"/>
</figure>

## Description

This Node is designed to provide potential answers to human agents regarding customer questions.
The Node creates an [AI Copilot widget](../../../ai-copilot/plug-and-play-widgets.md) that consists of a search bar and a response form.
Additionally, it will provide meta-source links,
information about the files from which knowledge was derived and hints for further questions.
The human agent uses the search bar to access a knowledge base and find information to respond to customer queries.
Responses are generated based on a Large Language Model via Cognigy Knowledge AI.

Before using the Copilot: Knowledge Tile Node, configure the Generative AI provider in the [Settings](../../generative-ai.md#set-up-generative-ai) and select the appropriate model from the [supported model list](../../resources/build/llm.md#supported-models).
This Node supports models with the LLM Prompt Node and the Search Extract Output Node Cognigy features.

To set up the Copilot: Knowledge Tile Node, you need two Nodes for the Flow configuration: one to initiate the knowledge search process and the second one to execute it.
Additionally, to prevent the content of other widgets from updating during the Node's operation,
move the Nodes under the Else child Node of the If Node.
For more information, refer to the [Configuration](#configuration) section.

## Settings

### General Settings 

| Parameter       | Type          | Description                                                          |
|-----------------|---------------|----------------------------------------------------------------------|
| Tile ID         | CognigyScript | The ID that you created in the AI Copilot configuration.             |
| Knowledge Store | Select        | Select a store from the list to allow the Node to retrieve the data. |

### Search Settings

| Parameter                 | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|---------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Context-Aware Search      | Select        | Considering the transcript's context for the search. It allows a virtual agent to answer follow-up questions. You can select one of the following options:<br>- **On** — is the default option. When this setting is enabled, it affects tokenization costs, which impact the amount of memory, computational power, and overall expenses needed for running an OpenAI or Azure OpenAI model. To get a better understanding of how the feature works in practice, see [Examples](#examples). <br> - **Off** — the setting is turned off. |
| Transcript Steps          | Indicator     | Number of prior transcript steps to use in a context-aware search. This parameter is active when the Context-Aware Search setting is enabled.                                                                                                                                                                                                                                                                                                                                                                                            |
| Where to store the result | Select        | The storage for the search results. Select a storage:<br> - **default** — the content will be stored in the Input object (`input.knowledgeSearch`). <br> - **Input** — the content will be stored in the Input object.<br> - **Context** — the content will be stored in the Context.                                                                                                                                                                                                                                                    |
| String to search for      | CognigyScript | The string to search for in the knowledge store. A default value is stored in `input.text`.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Source Tags               | CognigyScript | The tags serve to refine the scope of your knowledge search, allowing you to include only the most pertinent sections of the knowledge base and, as a result, improve the accuracy of search outputs. <br><br> Before specIfying tags, ensure that they were provided during the upload of the source file for this knowledge source. Add tags by specIfying each tag separately and pressing **enter**. The maximum number of tags is 5.                                                                                                |

{! _includes/ai/knowledge-ai/tags.md !}

### Error Handling

| Parameter                      | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                            |
|--------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Select Error Handling Approach | Select | You can select one of the Error Handling options:<br>- **Stop Flow Execution** — terminate the current Flow execution.<br>- **Continue Flow Execution** — allow the Flow to continue executing, bypassing the error and proceeding to the next steps.<br>- **Go to Node** — redirect the workflow to a specIfic Node in the Flow, which can be useful for error recovery or customized error handling. |
| Error Message (optional)       | Text   | Active when the **Continue Flow Execution** option is selected. Optional message to output If the Search or Extract service fails.                                                                                                                                                                                                                                                                     |
| Select Flow                    | Select | Active when the **Go to Node** option is selected. Select a Flow from the available options.                                                                                                                                                                                                                                                                                                           |
| Select Node                    | Select | Active when the **Go to Node** option is selected. Select a Node from the available options.                                                                                                                                                                                                                                                                                                           |

## Configuration

To use the Copilot: Knowledge AI widget, configure the following Flow:

1. Add an **If** Node. 
2. Open the **If** Node editor. 
3. In the **Condition** field, specIfy the following condition: `input.data._cognigy._agentAssist.payload.tileId === "tile-id"`, where `tile-id` is a Knowledge tile ID that you created in the AI Copilot configuration via API. 
4. In the **Knowledge Store** field, select the source that you want to use for searching knowledge. 
5. Below the **Then** child Node, place the **Copilot: Knowledge Tile** Node. 
6. Below the **Else** child Node, add the other Copilot tile Nodes. This step is necessary to ensure that the content of these Nodes does not get updated during the operation of the **Copilot: Knowledge Tile** Node. Note that the 
7. Below the **Copilot: Knowledge Tile** Node and other tile Nodes, place the **Once** child Node. 
8. Below the **On First Time** child Node, add a duplicate of the **Copilot: Knowledge Tile** Node.

!!! tip
    If the Flow is not working or issues arise with the Knowledge Source, try creating a new Agent and running the Flow in it.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/knowledge-tile-flow.png" width="80%"/>
  <figcaption>The Knowledge Tile Flow</figcaption>
</figure>

Test your Flow by using a [Demo Webchat](../../endpoints/webchat/integrated-demo-page.md) in the Webchat Endpoint. You can use Live Agent as a handover provider or any other available provider.

{! _includes/ai/nodes/forwarder.md !}

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/knowledge-tile-example.png" width="80%"/>
  <figcaption>The Knowledge Tile Widget in AI Copilot</figcaption>
</figure>

## More Information

- [Copilot: Transcript Tile](transcript-tile.md)
- [Copilot: Sentiment Tile Node](sentiment-tile.md)
- [Copilot: Identity Tile](identity-tile.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../ai-copilot/overview.md)