---
title: "Resolve Tool Action"
slug: "resolve-tool-action"
description: "The Resolve Tool Action Node is used to handle the result of a tool action that was triggered by the AI Agent."
hidden: false
---

# Resolve Tool Action

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/resolve-tool-action.png" width="80%" />
</figure>

## Description

{! _includes/ai/beta.md !}

The Resolve Tool Action Node is used to handle the result of a [tool action](ai-agent.md#ai-agent-tool-settings) that was triggered by the AI Agent.
When the AI Agent calls a tool to perform an action, the tool action is executed.
Once the action is completed, the Resolve Tool Action Node sends a response back to the AI Agent,
indicating the result of that action.
This approach helps the AI Agent process and make decisions based on the results of the tool actions it initiated.

## Settings

| Parameter     | Type          | Description                                                                                                  |
|---------------|---------------|--------------------------------------------------------------------------------------------------------------|
| Answer Text   | CognigyScript | Add the text that serves as the AI Agent's response to confirm that the requested action has been completed. |

### Debug Settings

| Parameter     | Type          | Description                                                                     |
|---------------|---------------|---------------------------------------------------------------------------------|
| Debug Message | Toggle        | Enable sending a debug message that displays the tool name and the answer text. |

## More Information

- [AI Agent](ai-agent.md)
- [AI Agent Handover](ai-agent-handover.md)
- [Agentic AI](../../../empower/agentic-ai/overview.md)