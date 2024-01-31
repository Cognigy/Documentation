---
title: "Configuration"
slug: "configuration"
hidden: false
---

# AI Copilot Configuration

The AI Copilot configuration refers to the AI Copilot Config, which you can define via API to configure the position and size of the widgets in your grid. This functionality provides full flexibility to use the AI Copilot Workspace as efficiently as possible.

The workspace can be customized to display various types of content, such as HTML, adaptive cards, or iframes. While configuring your grid, you can choose the best placement for specific types of widgets.

The AI Copilot configurations can be created, modified, and deleted **only** using the [AI Copilot API](https://api-trial.cognigy.ai/openapi#get-/v2.0/agentassistconfigs).

## Grid

The AI Copilot workspace is based on a customizable grid layout where widgets can be added to display different information. 

The grid is fully customizable and gives you the possibility to configure the number of columns, rows, as well as the gaps between them.

## Tile ID

[![Version badge](https://img.shields.io/badge/Updated in-v4.54-blue.svg)](../release-notes/4.54.md)

Each tile must have a name, for example, `map`, `profile`, or `history`, that works as a unique identifier. This exact tile ID is needed for the AI Copilot Node configuration, to ensure the content is displayed in the right Widget.

If AI Copilot receives updates for a Tile ID not present in the AI Copilot configuration, the tile will not be rendered. In such cases, a warning indicator will be displayed in the lower-right corner of the workspace, indicating that an "unknown tile update" has been received.

## URL

[![Version badge](https://img.shields.io/badge/Updated in-v4.65-blue.svg)](../release-notes/4.65.md)

If you are using AI Copilot as a standalone application, the AI Copilot URL follows the pattern:

{! _includes/ai-copilot/url-pattern.md !}

If you are utilizing the embedded AI Copilot workspace, you can also use this URL to investigate the workspace before deploying it to production.

## Transcript Tile

The Transcript Tile in the AI Copilot workspace acts as a chat interface for human agents. It allows them to seamlessly read messages from end users and respond without having to switch back to the main chat interface.

To activate the Transcript Tile feature for the AI Copilot workspace, go to the **Endpoint Settings** editor and then to the **Copilot** section. This Tile is recommended only for contact centers that use a standalone AI Copilot workspace, such as the one provided by Genesys.

The Transcript Tile feature is intended specifically for [chat use cases](chat.md). For voice-related scenarios, use the [Copilot: Transcript Tile](../ai/flow-nodes/ai-copilot/transcript-tile.md) Node.

| Setting                                                                                            | Description                                                                                                                                                                               |
|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable Transcript Tile with ID 'transcript' in the AI Copilot Workspace                            | If the option is enabled, you can view the session messages on the Transcript Tile. To display this tile, you must include the `transcript` tile ID it in your AI Copilot Config via API. |
| Enable the chat input for the Transcript Tile to enable the agent to send messages to the customer | If the option is enabled, the human agent can send messages to the end user from the Transcript Tile.                                                                                     |
| Enable redaction of Transcript Tile messages                                                       | If the option is enabled, any sensitive information in the messages of the Transcript Tile will be masked.                                                                                |

## More Information

- [AI Copilot Workspace](overview.md)
- [Getting started with AI Copilot](getting-started.md)
- [AI Copilot Nodes](../ai/flow-nodes/ai-copilot/overview.md)
- [AI Copilot Embedding](embedding.md)
- [AI Copilot for Voice](voice/voice-overview.md)
- [AI Copilot for Chat](chat.md)
- [Integration with Contact Centers](contact-center-integration.md)