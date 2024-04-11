---
title: "Copilot: Transcript Tile"
slug: "transcript-tile"
hidden: false
---

# Copilot: Transcript Tile

[![Version badge](https://img.shields.io/badge/Updated in-v4.73-blue.svg)](../../../release-notes/4.73.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/ai-copilot/transcript-tile.png" width="80%"/>
</figure>

## Description
<div class="divider"></div>

This Node captures the most recent customer response and displays it on a designated Widget within the AI Copilot Workspace.

Additionally, the Copilot: Transcript Tile offers the option to enable Sentiment Analysis,
which allows for assessing the user's speech tone.
This sentiment analysis can provide insights into whether the user's response is positive, negative, or neutral.
Before using this option,
set the Generative AI provider in the [Settings](../../generative-ai.md#set-up-generative-ai)
and select the appropriate model in the [supported model list](../../resources/build/llm.md#supported-models).

## Settings

| Parameter        | Type          | Description                                                                                                                                                                                                                          |
|------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tile ID          | CognigyScript | The ID that you created in the AI Copilot configuration.                                                                                                                                                                             |
| Enable sentiment | Toggle        | The option allows you to decide whether sentiment analysis should be applied to the customer's voice input. Enabling this option means that the system will assess the emotional tone (positive, negative, or neutral) of the input. |

### UI Preferences

| Parameter            | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|----------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Font size            | Select | The font size of the widget title in the AI Copilot workspace. The following sizes are available:<br>- **xl** (Extra Small) — the smallest size available.<br>- **sm base** (Small Base) — baseline size for other sizes.<br>- **lg** (Large) — the standard large size, typically larger than the medium or small sizes.<br>- **xl** (Extra Large) — the standard large size.<br>- **2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl** (Larger Sizes) — progressively larger sizes, with `xl` representing extra large and the numbers indicating gradations of that size. |
| Transcript font size | Select | The font size of the transcript message. The sizes available for the Font size parameter are also applicable here.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Use Case

This Node is well-suited for scenarios involving voice calls,
where a human agent needs to listen to the user's speech and make quick decisions.
In such cases, the Copilot: Transcript Tile plays a crucial role in recording and presenting the user's spoken responses.
This approach allows human agents to have immediate access to this information,
thereby facilitating more effective and efficient communication and decision-making during voice call interactions.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/ai-copilot/transcript-tile-example.png" width="80%"/>
    <figcaption>Transcript Tile Widget in AI Copilot</figcaption>
</figure>

## More Information

- [Copilot: Next Action Tile](next-action-tile.md)
- [Copilot: Sentiment Tile](sentiment-tile.md)
- [Copilot: Identity Tile](identity-tile.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../ai-copilot/overview.md)