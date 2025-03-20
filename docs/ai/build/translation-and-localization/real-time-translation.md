---
title: "Real-Time Translation" 
slug: "real-time-translation" 
hidden: false 
---

# Real-Time Translation

_Real-Time Translation_ instantly translates languages during conversations, eliminating the need for pre-translation, as in typical [localization](localization.md) scenarios.

With real-time translation, you don't need human agents for every language nor to pre-localize your Flow. You can focus on a few key languages while still serving customers in many others.

## Key Features

- [Multilingual AI](#users-and-ai-agents). Your [voice](../../overview/getting-started-with-voice-agent.md) and [chat](../../overview/getting-started-with-digital-agent.md) AI Agents can switch languages in real time, even if you only have configured your Flow in English. With this approach, you can reach a greater audience in their native language with low effort.
- [Real-time translation between users and human agents](#users-and-human-agents). Users and human agents with different can write in different languages in their after a [handover](../../escalate/handovers.md), but they'll receive messages translated into their own language in real time.

## Prerequisites

- You have configured a [machine translation provider](#configure-a-machine-translation-provider).

## Compatibility with Machine Translation Providers

{! _includes/ai/build/translation-and-localization/compatibility-with-machine-translation-providers.md !}

## Configure a Machine Translation Provider

{! _includes/ai/build/translation-and-localization/configure-a-machine-translation-provider.md !}

## How to Use Real-Time Translation

You can configure the real-time translation feature in the [Real Time Translation](../../deploy/endpoints/real-time-translation-settings.md) settings in the Endpoint editor. All Endpoints, including voice Endpoints, such as Voice Gateway, support real-time translation.

### Users and AI Agents

Real-time translation between a user and an AI Agent works for text-based and voice conversations.

### Users and Human Agents

Real-time translation between a user and a human agent works for text-based conversations after a user triggers a [Handover to Agent Node](../node-reference/service/handover-to-agent.md) in the [Flow](../flows/overview.md). Conversations with real-time translation between the user and the human agent are recorded for compliance purposes.

After the human agent takes over the conversation, the user can keep writing in their original language while the human agent receives real-time translation of the user's input. The human agent can respond in their language, and the user receives real-time translation of the human agent's response. The following image shows real-time translation example, where the user is writing in German and the human agent is responding in English.

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/translation-and-localization/real-time-translation.png" width="70%" />
</figure>

## More Information

- [Real-Time Translation Settings](../../deploy/endpoints/real-time-translation-settings.md)
- [Automatic Translation](auto-translation.md)
- [Localization](localization.md)