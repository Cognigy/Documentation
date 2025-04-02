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

The Get Transcript Node lets you receive a real-time conversation transcript and store the result in the Input or Context object.

To provide the transcript to the AI Agent, go to the [AI Agent Node](../ai/ai-agent.md).
In the **Job Description** or **Instructions and Context** field,
specify the path to the Input or Context object where the transcript is stored.

## Parameters

| Parameter | Type   | Description                                                                                                                                                                                                                                                                                          |
|-----------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Limit     | Slider | Determine how many transcript steps to include. Each step is an input from any participant in the conversation. For example, if you specify `1`, only the last input is included in the transcript. This input could be, for instance, an AI Agent's message if it was the last in the conversation. |

### Storage

| Parameter      | Type          | Description                                                                                                                                                          |
|----------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Store Location | Selector      | Determine how to save the result:<ul><li>**Input** — stores the result in the Input object.</li><li>**Context** — stores the result in the Context object.</li></ul> |
| Input Key      | CognigyScript | The parameter appears when **Input** is selected. The result is stored in the `transcript` Input object by default. You can specify another value.                   |
| Context Key    | CognigyScript | The parameter appears when **Context** is selected. The result is stored in the `transcript` Context object by default. You can specify another value.               |

## More Information

- [Add Transcript Steps](add-transcript-steps.md)
- [Agentic AI](../../../empower/agentic-ai/overview.md)