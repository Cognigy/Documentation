---
title: "Real-time Translation" 
slug: "real-time-translation" 
hidden: false 
---

# Real-time Translation

_Real-time translation_ is a method where you don't need to pre-translate everything as you would with [Localization](../resources/manage/localization.md), settings. Even when using a machine for translation, it translates the conversation as it happens. 

With the **Real-time translation** feature, there's no need to have agents who speak all the required languages for your business. You can focus on just two or three core languages, but at the same time, by utilizing Cognigy's real-time translation capabilities, you can provide service to customers in up to a hundred languages.

You can configure the **Real-time translation** feature within the [Endpoint](../endpoints/overview.md) settings.
Real-time translation can be configured for any Endpoint type, including voice Endpoints, such as the Voice Gateway.

Use the **Real-time translation** feature for the translating a conversation between the following actors:

- [users and virtual agents]()
- [users and human agents]()


We can consider two use cases regarding the real-time translation:

- **Translation between User and Virtual Agent in real-time**, even with auto-detection
(working for Virtual Agents conversations and also for phone calls). 

- **Translation between User and a Human Agent (Live Agent) in real-time**, whilst keeping a record of both for compliance purposes.


## Real-Time Translation between a User and a Virtual Agent

In Cognigy.AI, Virtual Agents are deployed by [Endpoints](../resources/deploy/endpoints.md), for example, using the [Webchat Endpoint](../../ai/endpoints/webchat/webchat.md). 

In case you would like to have the chat available in another language, you can do this by activating the **Real Time Translation Settings** as follows:

**Example**: 

Webchat conversation with the **preselected** user language.

In Webchat, we're assuming that the language that is being typed in is Russian. The Virtual Agent content is being translated into Russian in real-time.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/preselected_user_language_1.png" width="70%" />
  <figcaption>Webchat Real-time translation and preselected language for user inputs</figcaption>
</figure>

The whole conversation of everything is translated including e.g. calendar of the date picker (day, month, week,...).

## Auto-Detect User Inputs

We can not just have a preselected language in the settings, but we can also say **Auto-Detect(auto)** as **User Input Language**.


<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/auto-detected_user_language.png" width="70%" />
  <figcaption>Auto-detected user input - german language)</figcaption>
</figure>

When auto-detection for user inputs is activated, then we have an extra setting: **Set user input language on execution count**.

- Use the slider to set the option **Set user input language on execution count** as you want. The slide bar can be set between "0" and "5".

**Example**:  slider is set to "1" which means: Whatever language the user is using on their first input is the language that the Virtual Agent will use from then on. These settings work with every language we support.


<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/Input_language_Auto-Detect_4.png" width="100%" />
  <figcaption>Endpoint Editor: "Auto-Detect" setting</figcaption>
</figure>

## Real-Time Translation between User and Live Agent

- In the Endpoint settings set "Flow" to "Handover", which will hand the conversation over to a Live Agent (human agent). 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/Endpoint_Editor_Webchat_Handover.png" width="100%" />
  <figcaption>Webchat Editor: set "Flow" to "Handover"</figcaption>
</figure>

**Example**:

- User language is assumed in the German language. 
- Handover Flow and Agent use the English language.

The  Webchat conversation of a user with the Virtual Agent starts. At any point of the conversation the user would like to talk to a human agent like "I would like to talk to a human Agent" and Cognigy Virtual Agent reacts to the Intent, stops the Flow execution, and leads the conversation over to a Live Agent who can overtake and continue with the conversation.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/Webchat_1.png" width="70%" />
  <figcaption>Webchat conversation with a users handover request</figcaption>
</figure>

Chat flow process between the user and Live Agent using real-time translation is as follows:

- The Live Agent will see in his chat the real-time translated user inputs in English and replies in English also.

- The user will get the real-time translated Live Agent replies in German in his Webchat application and replies in German.   


<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/real-time_translation_Webchat-Live_Agent_4.png" width="100%" />
  <figcaption>Live Agent (English) conversation with a user (German) in real-time translation</figcaption>
</figure>

With a click on **Resolve**, the Live Agent can close the conversation and the user is back to the Virtual Agent conversation as it was before.