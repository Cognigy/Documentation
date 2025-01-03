---
title: "Voice Copilot"
slug: "voice-copilot"
hidden: false
---

# Voice Copilot

[![Version badge](https://img.shields.io/badge/Updated in-v4.66-blue.svg)](../../../release-notes/4.66.md)

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/voice-copilot.png" width="100%" />
</figure>

This Endpoint is intended for voice use cases
to receive the transcription of the audio stream and execute the AI Copilot Flow.
The Endpoint splits audio streams into user and agent input.
When the transcription is sent to this Endpoint, Cognigy will receive two variables:
`user ID` and `session ID`, which help identify the AI Copilot workspace to be updated.

The Voice Copilot Endpoint works with any [handover provider](../../escalate/handover-reference/overview.md) supported by Cognigy.

## Prerequisites

For version 4.65 and later, this Endpoint is enabled by default.
 
For version 4.64 and earlier, enable this Endpoint on the Cognigy.AI side:
 
- If you have a shared or dedicated SaaS installation, contact Cognigy technical support. 
- If you have an on-premises installation, specify the following feature flag: `FEATURE_ENABLE_AGENT_ASSIST_VOICE: true`.

## Generic Endpoint Settings

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview](../endpoints/overview.md)
- [Transformer Functions](../endpoints/transformers/transformers.md)

## Configure Voice Copilot Endpoint

1. In the left-side menu of your Agent, click **Deploy > Endpoints**.
2. On the **Endpoints** page, click **+ New Endpoint**.
3. In the **New Endpoint** section, do the following: <br>
    1. Select the **Voice Copilot** Endpoint type. <br>
    2. Add a unique name.<br>
    3. Select a relevant Flow from the list.<br>
4. In the **Configuration Information** section, copy the Endpoint URL. Save it for later usage in the Transfer Node for the scenario [Cognigy.AI in Front](#cognigyai-in-front).
5. Activate the **Enable Endpoint** setting. 
6. Click **Save**.

## Cognigy.AI in Front

If Cognigy.AI in Front, you need to configure the Transfer Node:

1. In the left-side menu of your Agent, click **Build > Flows**. 
2. Select a voice Flow from the list.
3. Go to the Voice Gateway Transfer Node.
4. In the Transfer Node, select the **Dial** transfer type.<br>
    1. Activate the **Enable Copilot** setting.<br>
    2. Define the **Copilot Headers Key**. The key is provider-dependent. For example, for Genesys, the key is `User-to-User`. The generated value becomes accessible after engaging the **Transfer** Node, located in the input object as `{{ "{{input.UUIValue}}" }}`. Note that you do not need to handle this value manually. It is automatically generated and added to the header.<br>
    3. In the **Transcribe** section, navigate to the **Transcription Webhook** field. Enter the Voice Copilot Endpoint URL, which you need to copy from the **Endpoint URL** field of the Endpoint. For example, `https://endpoint.cognigy.ai/<your-endpoint-id>`. This setup ensures that the Voice Copilot Endpoint receives the transcription, corresponding session, and user ID, ensuring the transcript is correctly matched with the AI Copilot workspace.<br> 
5. Click **Save Node**.

## SIPREC Contact Center Integration in Front

When the contact center is in front, you do not have to configure the Transfer Node.

SIPREC is an open SIP-based protocol for call recording in contact centers. Session Border Controllers (SBC) are used to integrate SIPREC with the contact center. 

When a call is transferred to a human agent, audio from the SIPREC call is transcribed by Voice Gateway and sent to the Voice Copilot Endpoint for processing. The system replaces the traditional Cognigy session ID and user ID with a specific ID from the Contact Center. For instance, the original Cognigy session ID and user ID can be replaced with Agent ID and Conversation ID respectively.

## More Information

- [AI Copilot](../../../ai-copilot/overview.md)
- [Voice Gateway](../../../voice-gateway/overview.md)