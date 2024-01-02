---
title: "Configuration"
slug: "configuration"
hidden: false
---

# AI Copilot Configuration

The AI Copilot configuration refers to the AI Copilot Config, which you can define via API to configure the position and size of the widgets in your grid. This functionality provides full flexibility to use the Agent Assist Workspace as efficiently as possible.

The workspace can be customized to display various types of content, such as HTML, adaptive cards, or iframes. While configuring your grid you can choose the best placement for specific types of widgets.

The AI Copilot configurations can be created, modified, and deleted **only** using the [AI Copilot API](https://api-trial.cognigy.ai/openapi#get-/v2.0/agentassistconfigs).

## Grid

The AI Copilot workspace is based on a customizable grid layout where widgets can be added to display different information. 

The gird is fully customizable and gives you the possibility to configure the number of columns, rows, as well as the gaps between them.

## Tile ID

[![Version badge](https://img.shields.io/badge/Updated in-v4.54-blue.svg)](../release-notes/4.54.md)

Each tile must have a name, for example, `map`, `profile`, or `history`, that works as a unique identifier. This exact tile ID is needed for the AI Copilot Node configuration, to ensure the content is displayed in the right Widget.

If AI Copilot receives updates for a Tile ID not present in the AI Copilot configuration, the tile will not be rendered. In such cases, a warning indicator will be displayed in the lower-right corner of the workspace, indicating that an "unknown tile update" has been received.

## URL

[![Version badge](https://img.shields.io/badge/Updated in-v4.65-blue.svg)](../release-notes/4.65.md)

If you are using AI Copilot as a standalone application, the AI Copilot URL follows the pattern:

{! _includes/ai-copilot/url-pattern.md !}

## More Information

- [AI Copilot Workspace](overview.md)
- [Getting started with AI Copilot](getting-started.md)
- [AI Copilot Nodes](../ai/flow-nodes/ai-copilot/overview.md)
- [AI Copilot Embedding](embedding.md)
- [AI Copilot for Voice](voice/voice-overview.md)
- [AI Copilot for Chat](chat.md)
- [Integration with Contact Centers](contact-center-integration.md)