---
title: "Real-Time Translation" 
slug: "real-time-translation" 
hidden: false 
---

# Real-Time Translation

_Real-time translation_ instantly converts languages during live conversations, eliminating the need for pre-translation, as usually required in typical [localization](localization.md) scenarios.

With the Real-time translation feature, there's no need to have agents who speak all the required languages for your business. You can focus on just two or three core languages, but at the same time, by utilizing Cognigy's real-time translation capabilities, you can provide service to customers in up to a hundred languages.

You can configure the Real-time translation feature within the [Real Time Translation](../../deploy/endpoints/real-time-translation-settings.md) settings in the Endpoint.
Real-time translation can be configured for any Endpoint type, including voice Endpoints, such as the Voice Gateway.

Use this feature for translating a conversation between the following actors:

- [users and AI Agents](#users-and-ai-agents)
- [users and human agents](#users-and-human-agents)

## Users and AI Agents

Translation between a user and an AI Agent in real-time works for text-based and voice conversations.

### Webchat Endpoint Example

Conditions:

- Webchat conversation with the **pre-selected** user language.
- User's language is Russian.

Result:

AI Agent's content is translated into Russian in real time.
Everything in the conversation is translated, including components such as the date picker (day, month, week).

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/translation-and-localization/preselected_user_language_1.png" width="70%" />
  <figcaption>Webchat Real-time translation and pre-selected language for user inputs</figcaption>
</figure>

## Users and Human Agents

Conversations with real-time translation between the user and a human agent are recorded for compliance purposes.

In your Flow, a **Handover to Agent** Node must be added.

### Chatwoot Handover Example

Conditions:

- User's language is German. 
- Human Agent's language is English.

Result:

The Webchat conversation between a user and the AI Agent begins.
At any point in the conversation, if the user expresses a desire to speak to a human agent,
such as saying `I would like to talk to a human agent`,
Cognigy AI Agent recognizes this intent, stops the Flow execution,
and transfers the conversation to a Live Agent who can then take over and continue the interaction.

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/translation-and-localization/Webchat_1.png" width="70%" />
  <figcaption>Webchat conversation with a users handover request</figcaption>
</figure>

The chat flow process between the user and the human agent, which involves real-time translation, proceeds as follows:

- The human agent sees real-time translated user inputs in English and responds in English.
- The user receives real-time translated responses from the human agent in German within their Webchat application and replies in German.

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/translation-and-localization/real-time_translation_Webchat-Live_Agent_4.png" width="100%" />
  <figcaption>A human agent (English) conversation with a user (German) in real-time translation</figcaption>
</figure>

By clicking **Resolve**, the human agent can close the conversation, and the user is returned to the AI Agent conversation as before.

## More Information

- [Real Time Translation Settings](../../deploy/endpoints/real-time-translation-settings.md)
- [Automatic Translation](auto-translation.md)
- [Localization](localization.md)