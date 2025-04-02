---
title: "Add Transcript Steps"
slug: "add-transcript-steps"
description: "The Add Transcript Steps Node lets you add a step for one of the conversation actor's to simulate an input or output."
hidden: false
---

# Add Transcript Steps

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/add-transcript-step.png" width="50%" />
</figure>

## Description

!!! warning
    This Node isn't compatible with the `@cognigyRecentConversation` and `@cognigyRecentUserInputs` tags in the [LLM Prompt Node](llm-prompt.md).

The Add Transcript Steps Node adds a step for one of the conversation actors to simulate an input or output.

## Parameters

| Parameter | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Role      | Selector      | Define the role of the entity interacting with the system. Select one of the following roles:<ul><li>`User` — the end user who initiates the interaction.</li><li>`Assistant` — the AI Agent responsible for processing the request and providing a response.</li><li>`Agent` — the human agent involved in the conversation, usually in a support or service capacity.</li><li>`System` — the Cognigy.AI system managing the conversation Flow.</li><li>`Tool` — the tool used by the AI Agent to fulfill a task, such as accessing external APIs or databases.</li></ul> |
| Type      | Selector      | Only the `Input` type is available. This type means the provided data is processed as text input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Text      | CognigyScript | Add content to be used as input for the system. The AI Agent processes and analyzes this text for tasks such as intent recognition, response generation, or other tasks depending on the configuration.                                                                                                                                                                                                                                                                                                                                                                    |
| Data      | JSON          | Include additional structured information that complements the content from the **Text** field. For example, `{ "type": "motivational" }` can be used to categorize the input or provide context to influence how the system processes the text.                                                                                                                                                                                                                                                                                                                           |

## More Information

- [Get Transcript](get-transcript.md)
- [Agentic AI](../../../empower/agentic-ai/overview.md)