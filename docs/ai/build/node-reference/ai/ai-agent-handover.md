---
title: "AI Agent Handover"
slug: "ai-agent-handover"
description: "The AI Agent Handover Node is used to transfer the conversation to another AI Agent Node or Flow, which will be triggered and executed as soon as this Node is activated."
hidden: false
---

# AI Agent Handover

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/ai-agent-handover.png" width="80%" />
</figure>

## Description

{! _includes/ai/beta.md !}

The AI Agent Handover Node is used to transfer the conversation to another AI Agent Node or Flow, which will be triggered and executed as soon as this Node is activated.

## Settings

| Parameter   | Type     | Description                                                                                                                                                                                                                                                                |
|-------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Select Flow | Selector | Select the target Flow that is switched to whenever the Flow execution triggers the AI Agent Handover Node.                                                                                                                                                                |
| Select Node | Selector | Select the target Node that is switched to whenever the Flow execution triggers the Go To Node. A Node must be set as an Entrypoint before it can be selected. To set any Node as an Entrypoint, use the [Set Entrypoint](../../nodes/overview.md#set-entrypoint) setting. | 

### Advanced

| Parameter     | Type   | Description                                                                                     |
|---------------|--------|-------------------------------------------------------------------------------------------------|
| Parse Intents | Toggle | Enable the system to check for Intents in the correct sub Flow, rather than in the parent Flow. |
| Parse Slots   | Toggle | Enable the system to check for Slots in the correct sub Flow, rather than in the parent Flow.   |

## More Information

- [AI Agent](ai-agent.md)
- [Resolve Tool Action](resolve-tool-action.md)
- [Agentic AI](../../../empower/agentic-ai.md)