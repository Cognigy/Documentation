---
 title: "Cognigy Voice Gateway" 
 slug: "cognigy-vg" 
 hidden: false 
---
# Cognigy Voice Gateway

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/dea6737-bdb5548-EP_Voice_Gateway.png" width="100%" />
</figure>

Within our **COGNIGY.AI** platform you are able to connect your **Agent** to your Contact Center or other phone numbers using our **Voice Gateway**, allowing customers to speak to your **Agent** instead of just writing with it.

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360017522940-Cognigy-Sessions-Building-a-Phone-Bot-with-Voice-Gateway" target="_blank" >Techinar video "Building a Phone Bot with Voice Gateway"</a>
      </div>
      <div class="callout-subtext">
      Watch this Episode of Cognigy Sessions for a technical deep dive
      </div>
   </div>
</blockquote>


## Voice Gateway specific Nodes

Cognigy.AI comes with a large number of inbuilt Nodes to control the Voice Gateway. See [Voice Gateway Nodes]({{config.site_url}}ai/flow-nodes/vg/voice-gateway/) for more information.

## Number Meta Data

Cognigy Voice Gateway identifies information about the caller and adds it to the Cognigy [Input]({{config.site_url}}ai/tools/interaction-panel/input/) Object as `input.data.numberMetaData`.

| Parameter   | Type |Description|Example|
| ----------- | ------------------------------------ |||
| number      | string |The phone number of the caller, including country code|+4921154591991|
| country     | string |The 2-character country code|DE|
| countryCallingCode | string |The calling code of the country|49|
| nationalNumber      | string |The national number without the country code and without a leading zero.|21154591991|
| valid      | boolean |Whether the number is valid|true|
| valid      | string |The type of number. See below.|FIXED_LINE|
| uri      | string |The URI for the number|tel:+4921154591991|

`numberMetaData.type` can be any of:

- PREMIUM_RATE
- TOLL_FREE
- SHARED_COST
- VOIP
- PERSONAL_NUMBER
- PAGER
- UAN
- VOICEMAIL
- FIXED_LINE_OR_MOBILE
- FIXED_LINE
- MOBILE


???+ info "NumberMetaData in Tokens"
    All of the above are available as [Tokens]({{config.site_url}}ai/resources/manage/tokens/) inside Cognigy Text fields as well.

## Generic Endpoint Settings

<div class="divider"></div>

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Session Management]({{config.site_url}}ai/endpoints/session-management/)
- [Real Time Translation Settings]({{config.site_url}}ai/endpoints/real-time-translation-settings) 

???+ info "Contact Center & Phone number linking"
    To link a **Voice Gateway** **Endpoint** to a phone number, please contact your **Cognigy** representative in order to provision and configure a VG instance.

???+ warning "AudioCodes VoiceAI Connect"
    Cognigy VG is 100% compatible with [AudioCodes VoiceAI Connext](https://voiceaiconnect.audiocodes.com), where you can sign up for free and get a phone number within minutes.