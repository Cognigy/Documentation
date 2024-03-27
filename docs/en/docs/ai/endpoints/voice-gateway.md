---
title: "Cognigy Voice Gateway" 
slug: "voice-gateway" 
hidden: false 
---

# Cognigy Voice Gateway

[![Version badge](https://img.shields.io/badge/Updated in-v4.72-blue.svg)](../../release-notes/4.72.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/dea6737-bdb5548-EP_Voice_Gateway.png" width="100%" />
</figure>

Within the Cognigy.AI platform, you can connect Cognigy virtual agents to your contact center or other phone numbers using Cognigy Voice Gateway. 
This feature enables customers to speak with your virtual agents instead of writing to them.

## Generic Endpoint Settings

Find out about the generic Endpoint settings available with this Endpoint on the following pages:

- [Endpoints Overview](overview.md)
- [Data Protection & Analytics](data-protection-and-analytics.md)
- [Transformer Functions](transformers/transformers.md)
- [NLU Connectors](../resources/build/nlu-connectors.md)
- [Session Management](session-management.md)
- [Real Time Translation Settings](real-time-translation-settings.md)

!!! note "Contact Center & Phone number linking"
    To route your Contact Center or Phone Number to your Voice Gateway Endpoint, get in touch with us via an email to support@cognigy.com.

!!! warning "Rebranding of Voice Gateway with AudioCodes"
    With the native Voice Gateway integration to Cognigy AI the AudioCodes implementation will be rebranded from Voice Gateway to AudioCodes. This applies to the Flow Nodes and the Endpoint.

## Specific Endpoint Settings

### Voice Gateway Specific Nodes

Cognigy.AI comes with built-in Nodes to control Voice Gateway. See [Voice Gateway Nodes](../nodes/voice/voice-gateway/overview.md) for more information.

### Call Meta Data

Voice Gateway identifies information about the caller and adds it to the Cognigy [Input Object](../tools/interaction-panel/input.md)  as `input.data.numberMetaData`.

| Parameter          | Type    | Description                                                              | Example            |
|--------------------|---------|--------------------------------------------------------------------------|--------------------|
| headers            | JSON    | The SIP Headers of the call on INVITE, including Custom Headers          | See example below  |
| number             | string  | The phone number of the caller, including country code                   | +4921154591991     |
| country            | string  | The 2-character country code                                             | DE                 |
| countryCallingCode | string  | The calling code of the country                                          | 49                 |
| nationalNumber     | string  | The national number without the country code and without a leading zero. | 21154591991        |
| valid              | boolean | Whether the number is valid                                              | true               |
| valid              | string  | The type of number. See below.                                           | FIXED_LINE         |
| uri                | string  | The URI for the number                                                   | tel:+4921154591991 |

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

```json
{
  "from": "<caller-phone-number>",
  "to": "<sip-destination>",
  "call-id": "<id-value>",
  "allow": "NOTIFY, OPTIONS, BYE, INVITE, ACK, CANCEL, REFER",
  "X-Custom-Headers": "<custom-headers-value>",
  "X-Originating-Carrier": "<carrier-name>",
  "X-Voip-Carrier-Sid": "<id-value>",
  "X-Twilio-AccountSid": "<id-value>",
  "X-Twilio-CallSid": "<id-value>",
  "other-properties": "..."
}
```

!!! note "NumberMetaData in Tokens"
    All of the above are available as [Tokens](../resources/manage/tokens.md) inside Cognigy Text fields as well.

### Generic Settings

These settings will be valid for every session of this Endpoint. The **Set Session Config** or **Say** Nodes with **Activity Parameters** enabled can override the **Prosody Settings** option configured within the Endpoint.

| Parameter                  | Type   | Description                                                                                                               |
|----------------------------|--------|---------------------------------------------------------------------------------------------------------------------------|
| Prosody Settings           | Toggle | If enabled, this configuration will be used to specify changes to speed, pitch, and volume for the text-to-speech output. |
| Show Best Transcripts Only | Toggle | If enabled, only the best transcript in the input object is accessible, instead of all variations.                        |

#### Prosody Settings

| Parameter     | Type   | Description                                                                                     |
|---------------|--------|-------------------------------------------------------------------------------------------------|
| Output Speed  | Number | The change in the speaking rate for the contained text in percentage. Value range: -100 to 200. |
| Output Pitch  | Number | The baseline pitch for the contained text in percentage. Value range: -100 to 200.              |
| Output Volume | Number | The volume for the contained text in percentage. Value range: 10 to 200.                        |

##### Adapting Values for Your Chosen Speech Provider

As with all Speech Provider settings, there are certain differences in the use of this feature. Refer to your Speech Provider's documentation first to understand which values to add. An example would be the difference between Microsoft Azure and Google. For Microsoft Azure, users need to specify the `%` by which they would like to increase or decrease from the default settings. For instance, an example value could be `Output Speed -20%`, indicating a `20%` reduction from the default output speed of `100%`, resulting in a new output speed of `80%`. To achieve the same effect with Google, users need to add the final output speed in `%` to the Prosody Settings. For example, `Output Speed 80%` directly displays the new output speed, as with Google, the final output speed is directly added to the settings.

### Call Events

Allows activating call events for a Flow.
Select a call event from the [Voice Gateway Events](../../voicegateway/references/events/overview.md) list.
This event that will trigger the action.

If you have configured the same call event in both the Endpoint and the [Lookup](../nodes/logic/lookup.md) Node, the Endpoint settings will overwrite the Node settings.

#### Call Event Settings

!!! note
    As with all other Endpoint settings, you cannot test the Call Events settings in the Endpoint within the Interaction Panel.

| Parameter    | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 
|--------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Action       | Selector | Choose the action to be performed when the call event is detected: <br> - **Inject into current Flow** — inject the defined text and data payload into the current flow. <br> - **Execute Flow** — trigger a selected Flow when the call event is detected. <br> - **None** — no action will be taken when the call event is detected. <br> - **Transfer** — transfer a call in case [TRANSFER_DIAL_ERROR](../../voicegateway/references/events/TRANSFER_DIAL_ERROR.md) or [TRANSFER_REFER_ERROR](../../voicegateway/references/events/TRANSFER_REFER_ERROR.md) call events occur. This action for call events is configured similarly to [Call Failover](#call-failover). |
| Text Payload | String   | Enter the text that will be sent to your Flow. Available only for the **Inject into current Flow** action.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Data Payload | JSON     | Provide the data that will be sent into your Flow in JSON format. Available only for the **Inject into current Flow** action.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 
| Execute Flow | Selector | Execute the selected Flow. Flow execution will stop afterward. Available only for the **Execute Flow** action.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Call Failover

The Call Failover section is intended to handle runtime errors that occur on the Cognigy.AI side during the execution of a Flow.

!!! info "Feature availability"
    - If you use a SaaS Cognigy installation, contact the support team to activate this feature.
    - If you use an On-Premise Cognigy installation, activate this feature by adding `FEATURE_ENABLE_ENDPOINT_CALL_FAILOVER` in `values.yaml`.

| Parameter                   | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Transfer Type |
|-----------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Failover enabled            | Toggle        | If enabled, the configuration below will be used to perform a transfer in case of a runtime error                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -             |
| Transfer Type               | Dropdown      | There are two transfer types: <br> - **Refer** — forwarding an existing call. <br> - **Dial** — creating a new outgoing call. If you want to use this type and still have the old Node version, add a new Voice Gateway Transfer Node in the Flow Editor and manually transfer the required settings from the old Node.                                                                                                                                                                                                                                                                                                                                                                   | -             | 
| Reason                      | CognigyScript | The reason for the handover. It is shown in Voice Gateway logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | All           | 
| Target                      | CognigyScript | E.164 syntax or a SIP URI are supported.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | All           | 
| Caller ID                   | Number        | The caller ID. Some carriers, like Twilio, require a registered number for outgoing calls.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Dial          |
| Dial Music                  | URL           | Custom audio or ring-back which plays to the caller while the outbound call is ringing.  Only the `.wav` or `.mp3` formats are supported.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Dial          | 
| Timeout                     | Number        | The amount of time (in seconds) that the virtual agent will ring before a [no-answer](../../voicegateway/references/events/NO_ANSWER.md) timeout. The default value is 60 seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Dial          |
| Failover Transcribe Enabled | Toggle        | If enabled, transcriptions will be attempted in case of a failed call transfer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Dial          |
| STT Vendor                  | Selector      | Select the desired STT Vendor. For custom use all lowercase letters like microsoft, google, aws, nuance, or deepgram.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Dial          |
| STT Language                | Selector      | Select the desired STT Language. For custom languages, use the following format: de-DE, fr-FR, en-US.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Dial          |
| Disable STT Punctuation     | Toggle        | This parameter is active only when Google or Deepgram is selected in the STT Vendor setting.<br><br> Prevents the STT response from the virtual agent to include punctuation marks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Dial          |
| Deepgram Model              | Dropdown      | This parameter is active only when Deepgram is selected in the STT Vendor setting. <br><br> Choose a model for processing submitted audio. Each model is associated with a tier. Ensure that the selected tier is available for the chosen STT language.  For detailed information about Deepgram models, refer to the [Deepgram documentation](https://developers.deepgram.com/docs/model).                                                                                                                                                                                                                                                                                              | Dial          |
| Endpointing                 | Toggle        | This parameter is active only when Deepgram is selected in the STT Vendor setting. <br><br> Deepgram's Endpointing feature watches streaming audio for long pauses that signal the end of speech. When it spots an endpoint, it finalizes predictions and returns the transcript, marking it as complete with the `speech_final` parameter set to `true`.  For detailed information about Deepgram Endpointing, refer to the [Deepgram documentation](https://developers.deepgram.com/docs/endpointing).<br><br>The duration for detecting the end of speech is preconfigured with a default value (10 milliseconds). If you want to change this value, use the Endpointing Time setting. | Dial          |
| Endpointing Time            | Number        | This parameter is active only when Deepgram is selected in the STT Vendor setting and the Endpointing toggle is enabled. <br><br> Customize the duration (in milliseconds) for detecting the end of speech. The default is 10 milliseconds of silence. Transcripts are sent after detecting silence, and the system waits until the speaker resumes or the required silence time is reached. Once either condition is met, a transcript is sent back with `speech_final` set to `true`.                                                                                                                                                                                                   | Dial          |
| Smart Formatting            | Toggle        | This parameter is active only when Deepgram is selected in the STT Vendor setting. <br><br> Deepgram's Smart Format feature applies additional formatting to transcripts to optimize them for human readability. Smart Format capabilities vary between models. When Smart Formatting is turned on, Deepgram will always apply the best-available formatting for your chosen model, tier, and language combination. For detailed examples, refer to the [Deepgram documentation](https://developers.deepgram.com/docs/smart-format). <br><br> Note that when Smart Formatting is turned on, punctuation will be activated, even if you have the Disable STT Punctuation setting enabled.  | Dial          |
| Google Model                | Dropdown      | This parameter is active only when Google is selected in the STT Vendor setting.<br><br>Utilizes one of Google Cloud Speech-to-Text transcription models, with the `latest_short` model being the default choice. For a detailed list of Google models, refer to the [Transcription models](https://cloud.google.com/speech-to-text/docs/transcription-model#transcription_models)  section in the Google Documentation. Keep in mind that the `default` value is a Google Model type that can be used if other models don't suit your specific scenario.                                                                                                                                 | Dial          |
| Transcription Webhook       | URL           | The Webhook is triggered with an HTTP POST whenever an interim or final transcription is received. Uses the default recognizer. <br><br> Note that if the [Voice Copilot](voice-copilot.md) Endpoint is inactive, you can use any Webhook URL to receive voice call transcripts. However, when the Voice Copilot Endpoint is enabled, ensure that the specified Webhook URL is associated with it for processing.                                                                                                                                                                                                                                                                         | Dial          |
| STT Label                   | CognigyScript | The alternative name of the vendor is the one you [specify in the Voice Gateway Self-Service Portal](../../voicegateway/webapp/applications.md#add-additional-tts-and-stt-vendor). If you have created multiple speech services from the same vendor, use the label to specify which service to use.                                                                                                                                                                                                                                                                                                                                                                                      | Dial          |
| Audio Stream Selection      | Selector      | Select the source of the audio stream: <br> - **Caller/Called** - both the incoming and outgoing audio streams of the caller and the called party. <br> - **Caller** - the incoming and outgoing audio stream of the caller. <br>- **Called** - the incoming and outgoing audio stream of the called party. <br> <br> Ensure that the selected audio stream matches the language specified for transcription. If no audio stream is provided, the system will use the one set in the beginning, which should also match the language specified for transcription.                                                                                                                         | Dial          |
| Referred By                 | String        | This parameter is optional.<br><br> This setting allows you to change the original Referred By value, which can be a SIP URI or a user identifier such as a phone number. To define the Referred By value, you can use the following patterns:<br>- **SIP URI** - `sip:[referred-by]@custom.domain.com`. In this case, the entire SIP URI will be sent as the Referred-By header. Example: `"Referred-by": "sip:CognigyOutbound@custom.domain.com"`.<br>- **User Identifier** - `sip:[referred-by]@[SIP FROM Domain from carrier config]`. Example, `"Referred-By": "sip:CognigyOutbound@sip.cognigy.ai"`.                                                                                | Refer         |
| Custom Transfer SIP Headers | Toggle        | Data that needs to be sent as SIP headers in the generated SIP message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | All           |

## Handover Settings

You can use any [handover provider](../handover-providers/overview.md) within the Voice Gateway integration.
The Handover Settings enable your voice agent to route calls to the contact center, ensuring efficient communication and swift access to human assistance. 

In contrast to chatting, communication between actors during a voice call occurs using speech recognition technologies (text-to-speech and speech-to-text).
Using speech-to-text technology, the voice agent sends the conversation script from the end user to the human agent. 
Once the script is received, the human agent can respond using text. 
After that, the voice agent converts the human agent's message to speech using text-to-speech technology. 
Finally, the converted message is sent to the end user.

### Configuration

To activate the Handover Settings,
you need to add a [Handover to Agent](../nodes/service/handover-to-agent.md) Node in your voice Flow.
This Node transfers the conversation from the voice agent to the human agent.

### Example

In this example, an end user seeks billing assistance and interacts with actors in a customer service system via text-to-speech and speech-to-text technologies.

**End User:** Calls the customer service line. Speaks to the voice agent. Example: `Hello, I need assistance with my billing inquiry`.<br>
**Voice Agent:** Transcribes user's speech into text using speech-to-text technology. Example: `Hello, I need assistance with my billing inquiry`.<br>
**Voice Agent:** Determines the need for human assistance. Initiates handover to the human agent via handover provider.<br>
**Human Agent:** Receives a conversation script containing user's query.<br>
**Human Agent:** Types response on interface. Example: `Hello, thank you for reaching out. Let me check your billing details`.<br>
**Voice Agent:** Receives human agent's typed response. Converts the text message into speech using text-to-speech technology.<br>
**End User:** Hears human agent's response spoken by voice agent. Example: `Hello, thank you for reaching out. Let me check your billing details`.<br>
**End User / Human Agent:** The conversation between the end user and the human agent continues until the issue is resolved or the interaction is concluded.

### Multilingual Support

Within the Handover Settings, you can use translation into other languages.
Use the translation feature in the Handover Settings to overcome language barriers between end users and support staff. This feature is particularly useful in situations where there are no support staff proficient in the end user's language, and urgent issue resolution is necessary.

For example, if a user communicates in German, the voice agent responds accordingly. 
However, after transferring the call to the contact center, the dialogue is translated into English.
The human agent responds in English, and the response is translated into German for the end user via text-to-speech technology.
This method ensures seamless communication despite language differences.

Note that depending on the language and provider selected, 
translations may experience delays while they reach the contact center. 
If the speech-to-text fails to recognize speech for any reason, the message won't appear on the contact center's side. 
Plan for such scenarios within your Flow and configure the voice agent's behavior accordingly. 
This approach will ensure that the end user is aware that their message may not be delivered.
You can achieve this by adjusting timeout settings and error handling policies.

#### Configuration

To set up a multilingual Flow for the handover use case, follow these steps:

1. In your voice Flow, navigate to the [Set Session Config](../nodes/voice/voice-gateway/parameter-details.md) Node.
2. In the Node editor, go to the **Recognizer STT** section and activate the **Recognize Language** toggle.
3. From the **Alternative Language** list, select the additional languages, for example, `German` and `Italian`.
4. Click **Save Node**. 
5. Below the Set Session Config Node, add a [Lookup](../nodes/logic/lookup.md) Node. 
6. In the parent Lookup Node, select **CognigyScript** from the **Type** list and specify `input.data.payload.speech.language_code` in the **Operator** field. 
7. Click **Save Node**. 
8. In the case Nodes of the Lookup Node, specify the language codes, for example, `de-DE`, `it-IT`. 
9. Click **Save Node**. 
10. Below each case Node, add the second [Set Session Config](../nodes/voice/voice-gateway/parameter-details.md) Nodes.
11. Configure the TTS and STT settings for each of the Set Session Config Nodes. This means that one Node should have German language selected, while the other should have Italian. These Nodes will manage the voice agent's communication in the end user's language. 
12. Below each Set Session Config Node, add the [Set Translation](../nodes/other-nodes/set-translation.md) Nodes. These Nodes will perform translation of a text from the end user's language to the human agent's language. 
13. In the Set Translation Node, activate the **Translation Enabled** toggle. 
14. In the **User Input Language** field, specify the language of the user input, for example, `de`, `it`. 
15. In the **Flow Language** field, specify the language to translate to, for example, `en`. 
16. Save your changes. 
17. At the end of the Flow, place the [Handover to Agent](../nodes/service/handover-to-agent.md) Node.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/voice-gateway-handover.png" width="100%" />
</figure>

#### Example

In this example, an end user seeks billing assistance and interacts with actors in a customer service system via text-to-speech and speech-to-text technologies. The end user and human agent speak different languages, but this doesn't hinder their understanding, as the voice agent translates their speech into the required language for each party.

**End User:** Calls the customer service line. Speaks to the voice agent. Example: `Hallo, ich brauche Hilfe bei meiner Rechnungsanfrage`.<br>
**Voice Agent:** Determines the language and answers using the same language. Example: `Danke für die Informationen. Ich werde Sie an einen menschlichen Agenten weiterleiten, der Ihnen weiterhelfen kann`.<br>
**Voice Agent:** Transcribes user's speech into text using speech-to-text technology. Example: `Hello, I need assistance with my billing inquiry`.<br>
**Voice Agent:** Determines the need for human assistance and initiates the handover to the human agent via the handover provider.<br>
**Human Agent:** Receives a conversation script containing user's query.<br>
**Human Agent:** Types response on interface. Example: `I've found the issue. It seems there was an error in the billing statement. I'll correct it for you`.<br>
**Voice Agent:** Receives human agent's typed response. Converts the text message into speech using text-to-speech technology.<br>
**End User:** Hears human agent's response spoken by voice agent. Example: `Ich habe das Problem gefunden. Es scheint, dass es einen Fehler in der Rechnungsstellung gab. Ich werde es für dich korrigieren`.<br>
**End User/Human Agent:** The conversation between the end user and the human agent continues until the issue is resolved or the interaction is concluded.

