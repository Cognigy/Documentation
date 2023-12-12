---
title: "Copilot: Sentiment Tile"
slug: "sentiment-tile"
hidden: false
---

# Copilot: Sentiment Tile

[![Version badge](https://img.shields.io/badge/Added in-v4.60-blue.svg)](../../../release-notes/4.60.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/sentiment-tile.png" width="80%"/>
</figure>

## Description

This Node performs sentiment analysis on the most recent input and provides insights into the emotional tone
(positive, negative, or neutral) of the last user inputs.
It continuously evaluates the sentiment of customer interactions,
such as chat conversations or phone calls, in real time.
This real-time analysis offers immediate feedback to agents regarding the emotional tone of the customer within the AI Copilot Workspace.
For instance, if the sentiment becomes negative during a conversation,
the system can promptly alert the human agent to take appropriate action.

Before using this Node, set the Generative AI provider in the [Settings](../../generative-ai.md#set-up-generative-ai) and select the appropriate model in the [supported model list](../../resources/build/llm.md#supported-models).

## Settings

| Parameter                | Type          | Description                                                                                                                                    |
|--------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Tile ID                  | CognigyScript | The ID that you created in the AI Copilot configuration.                                                                                       |
| Sentiment Analysis Input | Select        | The number of user inputs that should be analyzed by a model. You can choose whether you want to analyze the last input or the last 10 inputs. |

## Use Case

Differing from the [Copilot: Transcript Tile](transcript-tile.md) Node, this Node allows you to analyze a larger part of the conversation, extending beyond the user's latest message. This node helps provide a more objective conversation assessment and empowers the management of the customer's overall impression.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/sentiment-tile-example.png" width="80%"/>
  <figcaption>Sentiment Tile Widget in AI Copilot</figcaption>
</figure>

## More Information

- [Copilot: Transcript Tile](transcript-tile.md)
- [Copilot: Next Action Tile](next-action-tile.md)
- [Copilot: Identity Tile](identity-tile.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../ai-copilot/overview.md)