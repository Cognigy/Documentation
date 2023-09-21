---
title: "Sentiment Assist"
slug: "sentiment-assist"
hidden: true
---

# Sentiment Assist

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/agent-assist/sentiment-assist.png" width="100%" />
</figure>

## Description

This Node performs sentiment analysis on the most recent input and provides insights into the emotional tone
(positive, negative, or neutral) of the last user inputs.
It continuously evaluates the sentiment of customer interactions,
such as chat conversations or phone calls, in real time.
This real-time analysis offers immediate feedback to agents regarding the emotional tone of the customer.
For instance, if the sentiment becomes negative during a conversation,
the system can promptly alert the human agent to take appropriate action.

Before using this Node, set the Generative AI provider in the [Settings](../../generative-ai.md#set-up-generative-ai) and select the appropriate model in the [supported model list](../../resources/build/llm.md#supported-models).

## Settings

| Parameter                | Type          | Description                                                   |
|--------------------------|---------------|---------------------------------------------------------------|
| Tile ID                  | CognigyScript | The ID that you created in the Agent Assist configuration.    |
| Sentiment Analysis Input | Select        | The number of user inputs that should be analyzed by a model. |


