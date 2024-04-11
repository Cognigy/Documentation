---
title: "Copilot: Sentiment Tile"
slug: "sentiment-tile"
hidden: false
---

# Copilot: Sentiment Tile

[![Version badge](https://img.shields.io/badge/Updated in-v4.73-blue.svg)](../../../release-notes/4.73.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/ai-copilot/sentiment-tile.png" width="80%"/>
</figure>

## Description
<div class="divider"></div>

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

### UI Preferences

| Parameter             | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-----------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Font size             | Select | The font size of the widget title in the AI Copilot workspace. in the AI Copilot workspace. The following sizes are available:<br>- **xl** (Extra Small) — the smallest size available.<br>- **sm base** (Small Base) — baseline size for other sizes.<br>- **lg** (Large) — the standard large size, typically larger than the medium or small sizes.<br>- **xl** (Extra Large) — the standard large size.<br>- **2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl** (Larger Sizes) — progressively larger sizes, with `xl` representing extra large and the numbers indicating gradations of that size. |

## Use Case

Differing from the [Copilot: Transcript Tile](transcript-tile.md) Node, this Node allows you to analyze a larger part of the conversation, extending beyond the user's latest message. This node helps provide a more objective conversation assessment and empowers the management of the customer's overall impression.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/ai-copilot/sentiment-tile-example.png" width="80%"/>
  <figcaption>Sentiment Tile Widget in AI Copilot</figcaption>
</figure>

## More Information

- [Copilot: Transcript Tile](transcript-tile.md)
- [Copilot: Next Action Tile](next-action-tile.md)
- [Copilot: Identity Tile](identity-tile.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../ai-copilot/overview.md)