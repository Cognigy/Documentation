---
 title: "Transfer" 
 slug: "transfer-vg" 
 hidden: false 
---

# Transfer

[![Version badge](https://img.shields.io/badge/Updated in-v4.44-blue.svg)](./../../../release-notes/4.50.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/vgv2-transfer-node.png" width="100%" />
  <figcaption>Voice Gateway Transfer Node</figcaption>
</figure>

## Description

<div class="divider"></div>

The Transfer Node allows you to transfer an ongoing call to a Tel or SIP target.

## Settings

### General settings

| Parameter              | Type          | Description                                                                                                                                                                                                                                                                                                 | Transfer Type |
|------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Transfer Type          | Dropdown      | - `Refer` - forwarding an existing call. <br> - `Dial` - creating a new outgoing call. If you want to use this type and still have the old Node version, add a new Voice Gateway Transfer Node in the Flow Editor and manually transfer the required settings from the old Node.                            | -             | 
| Reason                 | CognigyScript | The reason for the handover. It is shown in Voice Gateway logs.                                                                                                                                                                                                                                             | All           | 
| Target                 | CognigyScript | E.164 syntax or a SIP URI are supported.                                                                                                                                                                                                                                                                    | All           | 
| Caller ID              | Number        | The caller ID. Some carriers, like Twilio, require a registered number for outgoing calls.                                                                                                                                                                                                                  | Dial          | 
| Dial Music             | URL           | Custom audio or ring-back which plays to the caller while the outbound call is ringing.  Only the `.wav` or `.mp3` formats are supported.                                                                                                                                                                   | Dial          | 
| Custom SIP Headers     | JSON          | Array of objects listing SIP headers that should be sent to the transferee. Each object comprises a name and a value attribute.                                                                                                                                                                             | All           |

### Transcribe

| Parameter              | Type     | Description                                                                                                                                                                                                                                                                                                 | Transfer Type |
|------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| STT Vendor             | Selector | This option is only available on Voice Gateway. Select the desired STT Vendor. For custom use all lowercase letters like microsoft, google, aws, or nuance.                                                                                                                                                 | Dial          |
| STT Language           | Selector | Select the desired STT Language. For custom languages, use the following format: de-DE, fr-FR, en-US.                                                                                                                                                                                                       | Dial          |
| Transcription Webhook  | URL      | The Webhook is triggered with an HTTP POST whenever an interim or final transcription is received. Uses the default recognizer.                                                                                                                                                                             | Dial          |
| Audio Stream Selection | Selector | Select the source of the audio stream: <br> - **Caller/Called** - both the incoming and outgoing audio streams of the caller and the called party. <br> - **Caller** - the incoming and outgoing audio stream of the caller. <br>- **Called** - the incoming and outgoing audio stream of the called party. | Dial          |
