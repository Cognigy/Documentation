---
title: "Add Transcript Steps"
slug: "add-transcript-steps"
description: "The Add Transcript Steps Node lets you add a step for one of the conversation actor's to simulate an input or output."
hidden: false
---

# Add Transcript Steps

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/add-transcript-steps.png" width="80%" />
</figure>

## Description

!!! warning
    This Node is not compatible with the `@cognigyRecentConversation` and `@cognigyRecentUserInputs` tags in the [LLM Prompt Node](../service/llm-prompt.md).

The Add Transcript Steps Node lets you add a step for one of the conversation actor's to simulate an input or output.

## Settings

| Parameter | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-----------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Role      | Selector      | Define the role of the entity interacting with the system. Select one of the following roles: <br>- `User` — the end user who initiates the interaction.<br>- `Assistant` — the AI Agent responsible for processing the request and providing a response.<br>- `Agent` — the human agent involved in the conversation, usually in a support or service capacity.<br>- `System` — the Cognigy.AI system managing the conversation Flow.<br>- `Tool` — the tool used by the AI Agent to fulfill a task, such as accessing external APIs or databases. |
| Type      | Selector      | Only the `Input` type is available. This type means the provided data will be processed as text input.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Text      | CognigyScript | Add content to be used as input for the system. The AI Agent processes and analyzes this text for tasks such as intent recognition, response generation, or other tasks depending on the configuration.                                                                                                                                                                                                                                                                                                                                             |
| Data      | JSON          | Include additional structured information that complements the content from the **Text** field. For example, `{ "type": "motivational" }` can be used to categorize the input or provide context to influence how the system processes the text.                                                                                                                                                                                                                                                                                                    |

## More Information

- [Get Transcript](get-transcript.md)
- [Agentic AI](../../../empower/agentic-ai/overview.md)