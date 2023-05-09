---
 title: "Twilio" 
 slug: "twilio" 
 hidden: false 
---
# Twilio

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/7db29f9-Twilio.PNG" width="100%" />
</figure>

Within our **Cognigy.AI** platform you're able to connect your Cognigy Agent to your **Twilio** channel by using our Twilio Endpoint. This allows you to build Bots your users can talk to or chat with via SMS.

## Twilio Voice, Twilio SMS / WhatsApp, Twilio Autopilot

<div class="divider"></div>

You can select between **three different types of Twilio Endpoints**
- *Twilio*, which is the Twilio Voice Endpoint
- *Twilio SMS*, which allows you to send SMS and WhatsApp messages
- *Twilio Autopilot*, which allows you to use the Autopilot NLU capabilities

For all Endpoint types, you'll have to obtain a phone number. A short description about how to gather a Twilio phone number can be found on our help center pages listed below. After obtaining a number you're able to deploy and use a Twilio Endpoint.

## Generic Endpoint Settings

<div class="divider"></div>

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Session Management]({{config.site_url}}ai/endpoints/session-management/)
- [Real Time Translation Settings]({{config.site_url}}ai/endpoints/real-time-translation-settings)

## Channel Specific Settings
## Twilio Endpoint Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/7db29f9-Twilio.PNG" width="100%" />
</figure>


The **Twilio Settings** dropdown menu is available in a standard **Twilio** type endpoint and provides options to configure the interaction between Cognigy.AI a Twilio deployment.

 <div class="center-image">
 <img src="{{config.site_url}}ai/endpoints/images/c69d7a2-TwilioSettings.PNG" width="80%" style="margin-bottom: 5px">
 </div>

### STT / TTS Language

Here you are able to configure the language that the Speech-To-Text and Text-To-Speech services use when messages are communicated between Twilio and Cognigy.AI.

### Voice

This dropdown menu allows the delivery voice of a Twilio voice bot to be customized. You can select a Twilio voice from a list.

 <div class="center-image">
 <img src="{{config.site_url}}ai/endpoints/images/8e51d15-Screen_Shot_06-08-21_at_12.18_PM_002.PNG" width="70%" style="margin-bottom: 5px">
 </div>

## Twilio Autopilot Endpoint Settings

 <div class="center-image">
 <img src="{{config.site_url}}ai/endpoints/images/23c2c49-TwilioAutopilot.PNG" width="30%" style="margin-bottom: 5px">
 </div>

 The **Twilio Autopilot Settings** dropdown menu is available in a **Twilio Autopilot** type endpoint and provides options to configure the interaction between Cognigy.AI a Twilio Autopilot deployment.

### Parse Slots

Enable this toggle to allow the slots found by Twilio Autopilot to be passed to Cognigy.AI and processed by the Cognigy NLU.

!!! note "Help Center"
    More detailed information on how to set up a **Twilio** Endpoint refer to our Help Center articles [**here**](https://support.cognigy.com/hc/en-us/articles/360016308619).


## More information
- [Help Center: Twilio Intro](https://support.cognigy.com/hc/en-us/articles/360016308619-Twilio-Intro)
- [Help Center: Twilio Prerequisites](https://support.cognigy.com/hc/en-us/articles/360016308859-Twilio-Prerequisites)
- [Help Center: Twilio Deploy a Voice Endpoint](https://support.cognigy.com/hc/en-us/articles/360016308979-Twilio-Deploy-a-Voice-Endpoint)
- [Help Center: Twilio Deploy an SMS and WhatsApp Endpoint](https://support.cognigy.com/hc/en-us/articles/360016273320-Twilio-Deploy-an-SMS-and-WhatsApp-Endpoint)
- [Help Center: Twilio Deploy an Autopilot Endpoint](https://support.cognigy.com/hc/en-us/articles/360016309439-Twilio-Deploy-an-Autopilot-Endpoint)
- [Help Center: Twilio Trigger a Call](https://support.cognigy.com/hc/en-us/articles/360016273540-Twilio-Trigger-a-Call)
- [Help Center: Twilio WhatsApp](https://support.cognigy.com/hc/en-us/articles/360016309659-Twilio-WhatsApp )
- [Help Center: Twilio Forward a Call](https://support.cognigy.com/hc/en-us/articles/360016309779-Twilio-Forward-a-call)
- [Help Center: Twilio Security](https://support.cognigy.com/hc/en-us/articles/360016309919-Twilio-Security)