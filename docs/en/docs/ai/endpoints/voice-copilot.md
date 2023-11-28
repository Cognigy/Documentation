---
title: "Voice Copilot"
slug: "voice-copilot"
hidden: false
---

# Voice Copilot

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/voice-copilot.png" width="100%" />
</figure>

This Endpoint is intended for voice use cases to receive the transcription of the audio stream and execute the agent assist flow. The Endpoint splits audio streams into user and agent input. When the transcription is sent to this Endpoint, Cognigy will receive two variables: `user ID` and `session ID`, which help identify the AI Copilot workspace to be updated.

This endpoint Voice Copilot works with any [handover provider](../../ai/handover-providers/overview.md) supported by Cognigy.

## Prerequisites

- You need to have an account in [Genesys Cloud](https://apps.mypurecloud.de/).
- Activate this Endpoint on the Cognigy side:
    - If you have a shared or dedicated SaaS installation, contact Cognigy technical support.
    - If you have an on-premise installation, specify the following feature flag: `FEATURE_ENABLE_AGENT_ASSIST_VOICE: true`.

## Generic Endpoint Settings

<div class="divider"></div>

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview](overview.md)
- [Transformer Functions](transformers/transformers.md)

## Configure Voice Copilot Endpoint

1. In the left-side menu of your Agent, click **Deploy > Endpoints**.
2. On the **Endpoints** page, click **+ New Endpoint**.
3. In the **New Endpoint** section, do the following: <br>
   3.1 Select the **Voice Copilot** Endpoint type. <br>
   3.2 Add a unique name.<br>
   3.3 Select a relevant Flow from the list.<br>
4. In the **Configuration Information** section, copy the Endpoint URL and save it for later usage in Genesys.
5. Activate the **Enable Endpoint** setting. 
6. Click **Save**.

## Cognigy.AI in Front

If Cognigy.AI in Front, you need to configure the Transfer Node:

1. In the left-side menu of your Agent, click **Build > Flows**. 
2. Select a voice Flow from the list.
3. Go to the Voice Gateway Transfer Node.
4. In the Transfer Node, select the **Dial** transfer type.<br>
   4.1 Activate the **Enable Copilot** setting.<br>
   4.2 Define the **Copilot Headers Key**. The key is provider-dependent. For example, for Genesys, the key is `User-to-User`. The generated value becomes accessible after engaging the **Transfer** Node, located in the input object as `{{ "{{input.UUIValue}}" }}`. Note that you do not need to handle this value manually. It is automatically generated and added to the header.<br>
   4.3 In the **Transcribe** section, navigate to the **Transcription Webhook** field. Enter the Voice Copilot Endpoint URL with `user ID` and `session ID`. This setup ensures that the Voice Copilot Endpoint receives not only the transcription but also the corresponding session and user ID, making sure the transcript is correctly matched with the workspace. For example, `https://endpoint-dev.cognigy.ai/<your-endpoint-id>?userId={{"{{input.userId}}"}}&sessionId={{"{{input.sessionId}}"}}`.
5. Click **Save Node**.

## SIPREC Contact Center Integration in Front

When the contact center is in front, you do not have to configure the Transfer Node.

SIPREC is an open SIP based protocol for call recording in contact centers. Session Border Controllers (SBC) are used to integrate SIPREC with the contact center. 

When a call is transferred to a human agent, audio from the SIPREC call is transcribed by Voice Gateway and sent to the Voice Copilot Endpoint for processing. The system replaces the traditional Cognigy session ID and user ID with a specific ID from the Contact Center. For instance, the original Cognigy session ID and user ID can be replaced with Agent ID and Conversation ID respectively.

## More Information

- [AI Copilot](../../ai-copilot/overview.md)
- [Voice Gateway](../../voicegateway/overview.md)