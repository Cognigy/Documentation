---
title: "Get Transcript"
slug: "get-transcript"
description: "The Get Transcript Node lets receive a real-time conversation transcript and store the result in the Input or Context object."
hidden: false
tags: 
  - get transcript
  - include rich media context
---

# Get Transcript

[![Version badge](https://img.shields.io/badge/Updated in-v2025.17-blue.svg)](../../../../release-notes/2025.17.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/get-transcript.png" width="50%" />
</figure>

## Description

The Get Transcript Node lets you store conversation transcripts in the Input or Context object. For more information on the keys included in the `transcript` object, refer to [Input Object](../../ai-agent-memory/input.md#nested-objects).

You can use the Get Transcript Node to provide conversation scripts to AI Agents and improve their performance or for further processing of the conversation with the user. For example, use the Get Transcript Node to:

- Provide targeted context to the AI Agent and prevent LLM hallucinations when a user wants to check the status of multiple orders.
- Send a summary of the interaction between the user and the AI Agent to your CRM system.

## Parameters

| Parameter | Type   | Description                                                                                                                                                                                                                                                                                        |
|-----------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Limit     | Slider | Sets the number of transcript steps to include. Each step is an input from any participant in the conversation. For example, if you specify `1`, only the last input is included in the transcript. This input can be, for instance, an AI Agent's message if it was the last in the conversation. |

### Advanced

| Parameter                  | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|----------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Include Rich Media Context | Toggle | Controls whether _context_ is added to the transcript. In this case, _context_ refers to text extracted from rich media (Text with Buttons and Quick Replies). This text provides AI Agents with additional information, improving their responses.<br><br>If the [Textual Description](../basic/say.md#output-type) parameter in the Say, Question, or Optional Question Node is filled, the context is taken only from this parameter. If the **Textual Description** parameter is empty, the context is taken from the button titles and alt text in Text with Buttons and Quick Replies. By default, the **Include Rich Media Context** parameter is active. When this parameter is inactive, no context is added.<br><br>**Examples**:<ul><li>If **Textual Description** is filled:<p>Textual Description: `Select your preferred delivery option: Standard Delivery or Express Delivery`.</p><p>Quick Replies' buttons: `Standard Delivery`, `Express Delivery`.</p><p>Context added to the transcript: `Select your preferred delivery option: Standard Delivery or Express Delivery`.</p></li><li>If **Textual Description** is empty:<p>Textual Description: empty.</p><p>Quick Replies' buttons: `Standard Delivery`, `Express Delivery`.</p><p>Context added to the transcript: `Standard Delivery`, `Express Delivery`.</p></li><li>If **Include Rich Media Context** is inactive:<p>No context is added to the transcript.</p></li></ul> |

### Storage

| Parameter      | Type          | Description                                                                                                                                                       |
|----------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Store Location | Selector      | Sets where to save the result:<ul><li>**Input** — stores the result in the Input object.</li><li>**Context** — stores the result in the Context object.</li></ul> |
| Input Key      | CognigyScript | The parameter appears when **Input** is selected. The result is stored in the `transcript` Input object by default. You can specify another key.                  |
| Context Key    | CognigyScript | The parameter appears when **Context** is selected. The result is stored in the `transcript` Context object by default. You can specify another key.              |

### Provide Conversation Transcripts to AI Agents

To provide the transcript to AI Agents, add the Get Transcript Node before one of the following Nodes:

- [AI Agent Node](../ai/ai-agent.md) — retrieve the transcript from the [Input or Context object](#storage) using CognigyScript in the **Job Description** or **Instructions and Context** field. For example, `{{"{{input.transcript}}"}}`.
- [LLM Prompt Node](llm-prompt.md) — retrieve the transcript from the [Input or Context object](#storage) using CognigyScript in the **System Prompt** field. For example, `{{"{{input.transcript}}"}}`.

## More Information

- [Add Transcript Steps](add-transcript-steps.md)
- [Agentic AI](../../../empower/agentic-ai/overview.md)