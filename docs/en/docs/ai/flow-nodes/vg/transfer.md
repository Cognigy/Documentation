---
title: "Transfer" 
slug: "transfer-vg" 
hidden: false 
---

# Transfer

[![Version badge](https://img.shields.io/badge/Updated in-v4.62-blue.svg)](./../../../release-notes/4.62.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/vg/transfer.png" width="80%" />
  <figcaption>Voice Gateway Transfer Node</figcaption>
</figure>

## Description

<div class="divider"></div>

The Transfer Node allows you to transfer an ongoing call to a Tel or SIP target.

## Settings

### General settings

| Parameter     | Type          | Description                                                                                                                                                                                                                                                                                                             | Transfer Type |
|---------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Transfer Type | Dropdown      | There are two transfer types: <br> - **Refer** — forwarding an existing call. <br> - **Dial** — creating a new outgoing call. If you want to use this type and still have the old Node version, add a new Voice Gateway Transfer Node in the Flow Editor and manually transfer the required settings from the old Node. | -             | 
| Reason        | CognigyScript | The reason for the handover. It is shown in Voice Gateway logs.                                                                                                                                                                                                                                                         | All           | 
| Target        | CognigyScript | E.164 syntax or a SIP URI are supported.                                                                                                                                                                                                                                                                                | All           | 
| Caller ID     | Number        | The caller ID. Some carriers, like Twilio, require a registered number for outgoing calls.                                                                                                                                                                                                                              | Dial          | 
| Dial Music    | URL           | Custom audio or ring-back which plays to the caller while the outbound call is ringing.  Only the `.wav` or `.mp3` formats are supported.                                                                                                                                                                               | Dial          | 
| Timeout       | Number        | The amount of time (in seconds) that the virtual agent will ring before a [no-answer](../../../voicegateway/references/events/NO_ANSWER.md) timeout. The default value is 60 seconds.                                                                                                                                   | Dial          |

### Transcribe

| Parameter              | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Transfer Type |
|------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| STT Vendor             | Selector | This option is only available on Voice Gateway. Select the desired STT Vendor. For custom use all lowercase letters like microsoft, google, aws, or nuance.                                                                                                                                                                                                                                                                                                                                                                                                       | Dial          |
| STT Language           | Selector | Select the desired STT Language. For custom languages, use the following format: de-DE, fr-FR, en-US.                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Dial          |
| Google Model           | Dropdown | This parameter is active only when Google is selected in the STT Vendor setting.<br><br>Utilizes one of Google Cloud Speech-to-Text transcription models, with the `latest_short` model being the default choice. For a detailed list of Google models, refer to the [Transcription models](https://cloud.google.com/speech-to-text/docs/transcription-model#transcription_models)  section in the Google Documentation. Keep in mind that the `default` value is a Google Model type that can be used if other models don't suit your specific scenario.         | Dial          |
| Transcription Webhook  | URL      | The Webhook is triggered with an HTTP POST whenever an interim or final transcription is received. Uses the default recognizer.                                                                                                                                                                                                                                                                                                                                                                                                                                   | Dial          |
| Audio Stream Selection | Selector | Select the source of the audio stream: <br> - **Caller/Called** - both the incoming and outgoing audio streams of the caller and the called party. <br> - **Caller** - the incoming and outgoing audio stream of the caller. <br>- **Called** - the incoming and outgoing audio stream of the called party. <br> <br> Ensure that the selected audio stream matches the language specified for transcription. If no audio stream is provided, the system will use the one set in the beginning, which should also match the language specified for transcription. | Dial          |

### Answering Machine Detection

Answering Machine Detection (AMD) determines whether an outgoing call has been answered by a human or a machine (such as a voicemail or answering machine). When AMD is enabled, events are generated in the Flow to indicate the detection result, allowing you to take specific actions based on the outcome.

For example, if a call is transferred to a user and AMD detects a machine, you will receive an event indicating the machine detection.

| Parameter                    | Type     | Description                                                                                                                                                                             | Transfer Type |
|------------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Answering Machine Detection  | Toggle   | Indicates whether a call has been answered by a human agent or a machine.                                                                                                               | Dial          |
| Redirect on machine detected | Selector | Redirects the call back to the Flow in case a machine was detected.                                                                                                                     | Dial          |
| Redirect text                | Text     | Text to say after machine was detected before going back to the Flow. For example, `Mailbox detected, your call will be redirected back to the virtual agent. Please stay in the call`. | Dial          |

### Advanced

| Parameter                   | Type   | Description                                                                                                                     | Transfer Type |
|-----------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------|---------------|
| Custom Transfer SIP Headers | Toggle | Data that needs to be sent as SIP headers in the generated SIP message.                                                         | All           |
| Transfer SIP Headers        | JSON   | Array of objects listing SIP headers that should be sent to the transferee. Each object comprises a name and a value attribute. | All           |