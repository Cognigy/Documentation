---
title: "AI Agent Handover"
slug: "ai-agent-handover"
description: "The AI Agent Handover Node is used to transfer the conversation to another AI Agent Node or Flow, which will be triggered and executed as soon as this Node is activated."
hidden: false
---

# AI Agent Handover

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/ai-agent-handover.png" width="40%" />
</figure>

## Description

{! _includes/ai/beta.md !}

The AI Agent Handover Node transfers the conversation to another AI Agent Node or Flow and executes it.

## Parameters

| Parameter   | Type     | Description                                                                                                                                                                             |
|-------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Select Flow | Selector | Select the target Flow to trigger.                                                                                                                                                      |
| Select Node | Selector | Select a Node to trigger. You must set the Node as an Entrypoint before you can select it. To set the Node as an Entrypoint, use the [Set Entrypoint](../../nodes/overview.md) setting. |

### Advanced

| Parameter     | Type   | Description                                                                                       |
|---------------|--------|---------------------------------------------------------------------------------------------------|
| Parse Intents | Toggle | Enable the system to check for Intents in the correct child Flow, rather than in the parent Flow. |
| Parse Slots   | Toggle | Enable the system to check for Slots in the correct child Flow, rather than in the parent Flow.   |

## More Information

- [AI Agent](ai-agent.md)
- [Resolve Tool Action](resolve-tool-action.md)
- [Agentic AI](../../../empower/agentic-ai/overview.md)