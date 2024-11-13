---
title: "Add Transcript Steps"
slug: "add-transcript-steps"
hidden: false
---

# Add Transcript Steps

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/add-transcript-steps.png" width="80%" />
</figure>

## Description

The Add Transcript Steps Node allows you to add an additional step for one of the conversation actor's inputs to simulate that input.

## Settings

| Parameter | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|-----------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Role      | Selector      | Defines the role of the entity interacting with the system. Possible roles include: <br>- `User` — the end user who initiates the interaction.<br>- `Assistant` — the AI Agent responsible for processing the request and providing a response.<br>- `Agent` — the human agent involved in the conversation, usually in a support or service capacity.<br>- `System` — the Cognigy.AI system managing the conversation Flow.<br>- `Tool` — a tool used by the AI Agent to fulfill a task, such as accessing external APIs or databases. |
| Type      | Selector      | Currently, only the `Input` type is available. This specifies that the data being provided is input text that will be processed by the system.                                                                                                                                                                                                                                                                                                                                                                                          |
| Text      | CognigyScript | The actual content to be used as input for the system. This text is processed and analyzed by the AI, either for intent recognition, response generation, or other tasks depending on the configuration.                                                                                                                                                                                                                                                                                                                                |
| Data      | JSON          | Allows you to include additional structured information that supplements the main input text. For example, `{ "type": "motivational" }` can be used to categorize the input or provide context to influence how the system processes the text. This can be useful for customizing the AI's response based on specific data.                                                                                                                                                                                                             |
