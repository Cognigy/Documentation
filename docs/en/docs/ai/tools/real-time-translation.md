---
title: "Real-time Translation" 
slug: "real-time-translation" 
hidden: false 
---

# Real-time Translation

_Real-time translation_ instantly converts languages during live conversations, eliminating the need for pre-translation in typical [localization](../resources/manage/localization.md) scenarios.

With the Real-time translation feature, there's no need to have agents who speak all the required languages for your business. You can focus on just two or three core languages, but at the same time, by utilizing Cognigy's real-time translation capabilities, you can provide service to customers in up to a hundred languages.

You can configure the Real-time translation feature within the [Real Time Translation](../endpoints/real-time-translation-settings.md) settings in the Endpoint.
Real-time translation can be configured for any Endpoint type, including voice Endpoints, such as the Voice Gateway.

Use this feature for the translating a conversation between the following actors:

- [users and virtual agents](#users-and-a-virtual-agents)
- [users and human agents](#users-and-a-virtual-agents)

## Users and a Virtual Agents

Translation between a user and a virtual agent in real-time works for text-based and voice conversations.

### Webchat Endpoint Example

Conditions:

- Webchat conversation with the **pre-selected** user language.
- User's language is Russian.

Result:

Virtual agent's content is translated into Russian in real time. Everything in the conversation is translated, including components like the date picker (day, month, week).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/preselected_user_language_1.png" width="70%" />
  <figcaption>Webchat Real-time translation and pre-selected language for user inputs</figcaption>
</figure>

### Users and Human Agents

Conversations with real-time translation between the user and a human agent are recorded for compliance purposes.

In your Flow, a **Handover to Agent** Node must be added.

### Webchat Endpoint with Chatwoot Handover Example

Conditions:

- User's language is German. 
- Human Agent's language is English.

Result:

The Webchat conversation between a user and the virtual agent begins.
At any point in the conversation, if the user expresses a desire to speak to a human agent,
such as saying `I would like to talk to a human agent`,
Cognigy Virtual Agent recognizes this intent, stops the Flow execution,
and transfers the conversation to a Live Agent who can then take over and continue the interaction.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/Webchat_1.png" width="70%" />
  <figcaption>Webchat conversation with a users handover request</figcaption>
</figure>

The chat flow process between the user and the human agent, which involves real-time translation, proceeds as follows:

- The human agent sees real-time translated user inputs in English and responds in English.
- The user receives real-time translated responses from the human agent in German within their Webchat application and replies in German.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/real-time_translation_Webchat-Live_Agent_4.png" width="100%" />
  <figcaption>A human agent (English) conversation with a user (German) in real-time translation</figcaption>
</figure>

By clicking Resolve, the human agent can close the conversation, and the user is returned to the virtual agent conversation as before.

## More Information

- [Real Time Translation Settings](../endpoints/real-time-translation-settings.md)
- [Automatic Translation](auto-localization.md)
- [Localization](../resources/manage/localization.md)