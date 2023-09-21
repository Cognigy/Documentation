---
 title: "Real-time Translation" 
 slug: "real-time-translation" 
 hidden: false 
---
# Real-time Translation

As of Cognigy.AI 4.10.0 real-time translation has been added to our Conversational AI product.

Real-time translation is a type of translation where not everything has to be pre-translated or pre-localized (see [Localization]({{config.site_url}}ai/resources/manage/localization/), even if it is done with machine translation, but where the translation machine translates the conversation as it happens.

Virtual Agents are deployed in Cognigy.AI with so-called [Endpoints]({{config.site_url}}ai/resources/deploy/endpoints/). Webchat, for example, is such an Endpoint and is linked to the currently selected Flow of the Virtual Agent.
Real-time translation works on chats and for all our Endpoint types (for example the "Voice Gateway" Endpoint). The Voice Gateway (VG) can be configured in the settings for real-time translation in the same way as for a Webchat.

- You do not need to have agents that speak all the required languages of your business. You can concentrate on two or three core languages but using Cognigy real-time translation capabilities you can serve customers in a hundred languages.
 
- Real-time translation by Cognigy.AI works with any Live Agent system like Genesys, LivePerson, Ring Central,... 

- Cognigy.AI can act as a real-time translation service provider for your global service communications and also work with third-party contact center systems.

We can consider two use cases regarding the real-time translation:

- **Translation between User and Virtual Agent in real-time**, even with auto-detection
(working for Virtual Agents conversations and also for phone calls). 

- **Translation between User and a Human Agent (Live Agent) in real-time**, whilst keeping a record of both for compliance purposes.


## Real-Time Translation between User and Virtual Agent

in Cognigy.AI Virtual Agents are deployed by [Endpoints]({{config.site_url}}ai/resources/deploy/endpoints/), for example, using the [Webchat Endpoint]({{config.site_url}}ai/endpoints/webchat/webchat/). 

In case you would like to have the chat available in another language, you can do this by activating the **Real Time Translation Settings** as follows:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/Webchat_real-time_translation_settings_4.png" width="100%" />
  <figcaption>Endpoint Editor: Real Time Translation Settings</figcaption>
</figure>

1. Go to the Endpoint editor and activate **Real Time Translation** in the **Real Time Translation Settings**.

2. **Enable Translation** by moving the slider.
3. Select the **User Input Language** in a drop-down menu.
4. Select the **Flow Language** in a drop-down menu.
5. Confirm with **Save** the settings.
6. To check functionality, click on **Open Webchat** to chat with the Virtual Agent. 

**Example**: 

Webchat conversation with the **preselected** user language.

In Webchat, we're assuming that the language that is being typed in is Russian. The Virtual Agent content is being translated into Russian in real-time.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/preselected_user_language_1.png" width="70%" />
  <figcaption>Webchat Real-time translation and preselected language for user inputs</figcaption>
</figure>

The whole conversation of everything is translated including e.g. calendar of the date picker (day, month, week,...).


## Real-Time Translation Settings

The configuration options and their functions are listed below:

| Parameter                                  | 	Description                                                                                                                 |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Configured Translation Provider            | 	The currently selected translation provider.                                                                                |
| Enable Translation                         | Whether Translation is enabled for the Endpoint.                                                                             |
| User Input Language                        | 	The language of the user inputs.                                                                                            |
| Flow Language                              | 	The language of the Flow outputs.                                                                                           |
| Set user input language on execution count | 	If the input language is set to 'Auto-Detect', it will be fixed to its current value on this execution count.               |
| No-Translation Marker                      | 	Do not translate texts encapsulated in this marker (e.g. 'I love the Cognigy.AI platform' will not translate 'Cognigy.AI'). |
| Always remove No-Translation Markers       | 	Whether we remove No-Translation Markers, even if the translation is not enabled.                                           |
| Prevent payloads from being translated     | If active, prevents all user inputs based on [payloads]() to be translated.                                                  |

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