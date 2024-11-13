---
title: "Get Transcript"
slug: "get-transcript"
hidden: false
---

# Get Transcript

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/get-transcript.png" width="80%" />
</figure>

## Description

The Get Transcript Node allows AI Agent
to receive a real-time transcript of the conversation and store the result in the Input or Context object.

To provide the transcript to the agent, specify in the job prompt a reference to the input or context object where the agent is stored.

## Settings

| Parameter | Type    | Description                                                                                                                     |
|-----------|---------|---------------------------------------------------------------------------------------------------------------------------------|
| Limit     | Slider  | Determine how many transcript steps to include. One transcript step consists of a pair: one user input and one AI Agent output. |

### Storage

| Parameter      | Type          | Description                                                                                                                                              |
|----------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Store Location | Selector      | Determine how to save the result:<br> - **Input** — stores the result in the Input object. <br> - **Context** — stores the result in the Context object. |
| Input Key      | CognigyScript | The parameter appears when **Input** is selected. The result is stored in the `transcript` Input object by default. You can specify another value.       |
| Context Key    | CognigyScript | The parameter appears when **Context** is selected. The result is stored in the `transcript` Context object by default. You can specify another value.   |

