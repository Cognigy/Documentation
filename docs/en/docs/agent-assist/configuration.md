---
title: "Configuration"
slug: "configuration"
hidden: false
---

# Agent Assist Workspace Configuration

The Agent Assist configuration refers to the Agent Assist Config which you can define via API to configure the position and size of the widgets in your grid. This gives full  flexibility to use the Agent  Assist Workspace as efficient as possible.​ 

The workspace can be customized to display various types of content, such as HTML, adaptive cards, or iframes. While configuring your grid you can choose the best placement for specific types of widgets.

The Agent Assist configurations can be created, modified, and deleted **only** using the [Agent Assist API](https://api-trial.cognigy.ai/openapi#get-/v2.0/agentassistconfigs).

## Grid

The Agent Assist workspace is based on a customizable grid layout where widgets can be added to display different information. 

The gird is fully customizable and gives you the possibility to configure the number of columns, rows, as well as the gaps between them.

## Tile ID

Each tile must have a name, for example, `map`, `profile`, or `history`, that works as a unique identifier. This exact tile ID is needed for the Agent Assist Node configuration, to ensure the content is displayed in the right Widget.

## More information

- [Agent Assist Workspace](overview.md)
- [Getting started with Agent Assist](getting-started.md)
- [Agent Assist Nodes](../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist Embedding](embedding.md)
- [Agent Assist for Voice](../agent-assist/voice-agent-assist/voice-overview.md)
- [Agent Assist for Chat](chat-agent-assist.md)
- [Integration with Contact Centers](contact-center-integration.md)


