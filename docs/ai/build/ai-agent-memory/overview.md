---
title: "Overview"
slug: "overview"
description: "In Cognigy.AI, the AI Agent's memory is stored in Cognigy.AI objects which you can access using CognigyScript and Tokens."
hidden: false
tags:
    - ai agent memory
    - cognigy.ai objects
    - input object
    - context object
    - profile object
    - memory access
---

# AI Agent Memory

In Cognigy.AI, the _AI Agent Memory_ refers to the data from the user, user input, or conversation the AI Agent can retrieve. The AI Agent memory is stored in Cognigy.AI objects which you can access using [CognigyScript](../cognigyscript.md) and [Tokens](../tokens.md). You can retrieve the stored information to generate context-aware AI Agent answers and control your Flows better, for example, with [Intent Conditions](../../empower/nlu/intents/conditions.md).

Cognigy.AI objects are JSON objects that store different types of information:

- [Input object](input.md) — the user input information, such as the [Intents](../../empower/nlu/intents/overview.md) in the user's message, the [Channel](../nodes/channels.md) through which the user interacts with the AI Agent, and other relevant metadata.
- [Context object](context.md) — session-specific information, such as selected products or the user's current location.
- [Profile object](profile.md) — [Contact Profile](../../analyze/contact-profiles.md) data, such as user names and email addresses.

## How to Access the AI Agent's Memory

The following table shows how to access values from the Input, Context, and Profile objects with CognigyScript:

|                  | Input                  | Context                           | Profile                       |
|------------------|------------------------|-----------------------------------|-------------------------------|
| Variable         | `input`                | `context`                         | `profile`                     |
| Shortcut         | `ci`                   | `cc`                              | `cp`                          |
| Example          | `{{"{{input.text}}"}}` | `{{"{{context.selectedHotel}}"}}` | `{{"{{profile.firstname}}"}}` |
| Shortcut Example | `{{"{{ci.text}}"}}`    | `{{"{{cc.selectedHotel}}"}}`      | `{{"{{cp.firstname}}"}}`      |

### Lifespan of Cognigy.AI Objects

The lifespan of Cognigy.AI objects varies depending on their type:

- **Input** — each new user input and Flow execution generates a new Input object.
- **Context** — kept throughout the entire chat or call session.
- **Profile** — stored persistently to preserve information, such as user name, throughout conversations.

The following image shows a comparison of the lifespans of Cognigy.AI objects:

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/lifespan.png" width="70%" />
</figure> 
