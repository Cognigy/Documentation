---
title: "Copilot: Next Action Tile"
slug: "next-action-tile"
hidden: true
---

# Copilot: Next Action Tile

[![Version badge](https://img.shields.io/badge/Added in-v4.60-blue.svg)](../../../release-notes/4.60.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/next-action-tile.png" width="80%"/>
</figure>

## Description

This Node is designed
to determine the appropriate next step or action in a conversation or process based on the user's input or the current context.
This Node helps guide a conversation flow and ensures that the system responds effectively to user requests or queries.

## Settings

| Parameter | Type          | Description                                                                                                               |
|-----------|---------------|---------------------------------------------------------------------------------------------------------------------------|
| Tile ID   | CognigyScript | The ID that you created in the Agent Assist configuration.                                                                |
| Text      | CognigyScript | Enter the text you want to display in the next action widget. This text is an essential part of guiding the conversation. |

## Use Case

The Next Action Assist helps the human agent by providing guidance and predefined instructions based on the user's question. 
For instance, if a user asks about the latest release version, the agent can give them both the answer and links to important updates in that release.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/next-action-tile-example.png" width="80%"/>
  <figcaption>Next Action Tile Widget in AI Copilot</figcaption>
</figure>

## More Information

- [Copilot: Transcript Tile](transcript-tile.md)
- [Copilot: Sentiment Tile Node](sentiment-tile.md)
- [Copilot: Identity Tile](identity-tile.md)
- [Agent Assist Nodes](overview.md)
- [Agent Assist](../../../ai-copilot/overview.md)