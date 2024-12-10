---
title: "Resolve Tool Action"
slug: "resolve-tool-action"
description: "The Resolve Tool Action Node sends a response to a tool call to the AI Agent after completing a tool action."
hidden: false
---

# Resolve Tool Action

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/resolve-tool-action.png" width="80%" />
</figure>

## Description

{! _includes/ai/beta.md !}

The Resolve Tool Action Node sends an answer as the response to a tool call to the AI Agent after completing a [tool action](ai-agent.md#ai-agent-tool).

When the AI Agent calls a tool to perform an action, the tool action is executed.
Once the action is completed, the Resolve Tool Action Node sends a response back to the AI Agent,
indicating the result of that action.
This approach helps the AI Agent process and make decisions based on the results of the tool actions it initiated.

!!! note
    Sending the result is optional. If the Tool Action is not resolved, the tool call is discarded after reaching the end of the branch and you may need to manually return to the AI Agent by using a [Go To](../logic/go-to.md) Node.

## Settings

| Parameter   | Type          | Description                                                                                                                                          |
|-------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Answer Text | CognigyScript | Specify the text that is sent to the AI Agent in response to the tool call to inform it about success, failure, or other details of the Tool Action. |

### Debug Settings

| Parameter     | Type          | Description                                                                     |
|---------------|---------------|---------------------------------------------------------------------------------|
| Debug Message | Toggle        | Enable sending a debug message that displays the tool name and the answer text. |

## More Information

- [AI Agent](ai-agent.md)
- [AI Agent Handover](ai-agent-handover.md)
- [Agentic AI](../../../empower/agentic-ai/overview.md)