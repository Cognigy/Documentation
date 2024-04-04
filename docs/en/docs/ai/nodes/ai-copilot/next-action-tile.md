---
title: "Copilot: Next Action Tile"
slug: "next-action-tile"
hidden: false
---

# Copilot: Next Action Tile

[![Version badge](https://img.shields.io/badge/Added in-v4.72-blue.svg)](../../../release-notes/4.72.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/ai-copilot/next-action-tile.png" width="80%"/>
</figure>

## Description
<div class="divider"></div>

This Node is designed
to determine the appropriate next step or action in a conversation or process based on the user's input or the current context.
This Node helps guide a conversation flow and ensures that the system responds effectively to user requests or queries.

## Settings

| Parameter       | Type          | Description                                                                                                                                                                                                    |
|-----------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tile ID         | CognigyScript | The ID created in the AI Copilot configuration.                                                                                                                                                                |
| Type            | Select        | Choose from the following types: <br> - **Text** — the text you want to display in the next action widget.<br>- **Knowledge Assist** — the text from the Knowledge Store to display in the next action widget. |
| Text            | CognigyScript | Enter the text you want to display in the next action widget.                                                                                                                                                  |
| Knowledge Store | Select        | Choose a store from the list to allow the Node to retrieve the data.                                                                                                                                           |

### Enable Copy to Clipboard Button

{! _includes/ai/nodes/forwarder.md !}
  
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
| Select Error Handling Approach | Select | You can select one of the Error Handling options:<br>- **Stop Flow Execution** — terminate the current Flow execution.<br>- **Continue Flow Execution** — allow the Flow to continue executing, bypassing the error and proceeding to the next steps.<br>- **Go to Node** — redirect the workflow to a specific Node in the Flow, which can be useful for error recovery or customized error handling. |
| Error Message (optional)       | Text   | Active when the **Continue Flow Execution** option is selected. Optional message to output if the Search or Extract service fails.                                                                                                                                                                                                                                                                     |
| Select Flow                    | Select | Active when the **Go to Node** option is selected. Select a Flow from the available options.                                                                                                                                                                                                                                                                                                           |
| Select Node                    | Select | Active when the **Go to Node** option is selected. Select a Node from the available options.                                                                                                                                                                                                                                                                                                           |

## Use Case

This Node helps the human agent by providing guidance and predefined instructions based on the user's question. 
For instance, if a user asks about the latest release version, the agent can give them both the answer and links to important updates in that release.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/ai-copilot/next-action-tile-example.png" width="80%"/>
  <figcaption>The Next Action Tile Widget in AI Copilot</figcaption>
</figure>

## More Information

- [Copilot: Transcript Tile](transcript-tile.md)
- [Copilot: Sentiment Tile Node](sentiment-tile.md)
- [Copilot: Identity Tile](identity-tile.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../ai-copilot/overview.md)