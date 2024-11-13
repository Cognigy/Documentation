---
title: "Resolve Tool Action"
slug: "resolve-tool-action"
description: "This Node lets configure and control how an AI Agent responds after completing an action, as well as to enable debugging information."
hidden: false
---

# Resolve Tool Action

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/resolve-tool-action.png" width="80%" />
</figure>

## Description

This Node allows configuration and control of how an AI Agent responds after completing an action triggered by an [AI Agent tool](ai-agent.md#ai-agent-tool-settings).

## Settings

| Parameter     | Type          | Description                                                                                                  |
|---------------|---------------|--------------------------------------------------------------------------------------------------------------|
| Answer Text   | CognigyScript | Add the text that serves as the AI Agent's response to confirm that the requested action has been completed. |
| Debug Message | Toggle        | Enable sending a debug message that displays the tool name and the generated answer text.                    |