---
title: "Resolve Tool Action"
slug: "resolve-tool-action"
description: "The Resolve Tool Action lets configure and control how an AI Agent responds after completing an action, as well as to enable debugging information."
hidden: false
---

# Resolve Tool Action

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/resolve-tool-action.png" width="80%" />
</figure>

## Description

{! _includes/ai/beta.md !}

The Resolve Tool Action Node lets you configure and control how an AI Agent responds after completing an action triggered by an [AI Agent tool](ai-agent.md#ai-agent-tool-settings).

## Settings

| Parameter     | Type          | Description                                                                                                  |
|---------------|---------------|--------------------------------------------------------------------------------------------------------------|
| Answer Text   | CognigyScript | Add the text that serves as the AI Agent's response to confirm that the requested action has been completed. |
| Debug Message | Toggle        | Enable sending a debug message that displays the tool name and the generated answer text.                    |

## More Information

- [AI Agent](ai-agent.md)
- [AI Agent Handover](ai-agent-handover.md)
- [Agentic AI](../../../empower/agentic-ai.md)