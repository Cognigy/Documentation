---
title: "Get Transcript"
slug: "get-transcript"
description: "The Get Transcript Node lets receive a real-time conversation transcript and store the result in the Input or Context object."
hidden: false
---

# Get Transcript

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/get-transcript.png" width="50%" />
</figure>

## Description

The Get Transcript Node lets you store conversation transcripts in the Input or Context object.

You can use the Get Transcript Node to provide conversation scripts to AI Agents and improve their performance or for further processing of the conversation with the user. For example, use the Get Transcript Node to:

- Provide targeted context to the AI Agent and prevent LLM hallucinations when a user wants to check the status of multiple orders.
- Send a summary of the interaction between the user and the AI Agent to your CRM system.

## Restrictions

- The Get Transcript Node stores only plain text in the conversation transcript. Structured data, such as [Text with Buttons and Text with Quick Replies](../basic/say.md#default-cognigyai-channel), isn't included in the transcript. You can access the full transcript in the [Transcript Explorer](../../../../insights/explorers/transcript.md) or with the [OData endpoint](../../../analyze/odata.md).

## Parameters

| Parameter | Type   | Description                                                                                                                                                                                                                                                                                        |
|-----------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Limit     | Slider | Sets the number of transcript steps to include. Each step is an input from any participant in the conversation. For example, if you specify `1`, only the last input is included in the transcript. This input can be, for instance, an AI Agent's message if it was the last in the conversation. |

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