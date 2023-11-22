---
title: "Voice Copilot"
slug: "voice-copilot"
hidden: false
---

# Voice Copilot

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/voice-copilot.png" width="100%" />
</figure>

The Voice Copilot Endpoint is used for integration between [AI Copilot](../../agent-assist/overview.md) and [Genesys Cloud](https://apps.mypurecloud.de/). If you use [AI Copilot for voice](../../agent-assist/voice-agent-assist/voice-overview.md) with the [Webhook](webhook.md) Endpoint,
you can switch to a specific Voice Copilot Endpoint.
This eliminates the need for a separate Code Node to create a webhook URL,
as all the necessary logic is already included in the Voice Copilot Endpoint.

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

## Configure Voice Gateway Nodes

Within your voice Flow, configure the Transfer Nodes:

1. In the left-side menu of your Agent, click **Build > Flows**. 
2. Select a voice Flow from the list.
3. Go to the Voice Gateway Transfer Node.
4. In the Transfer Node, select the **Dial Transfer** type and activate the **Enable Copilot** setting.
5. Click **Save Node**.

When a transfer occurs, AI Copilot triggers its own Flow, resulting in the generation of an AI Copilot workspace in Genesys. Subsequently, a human agent on the Genesys side receives transcripts from the transferred call within the AI Copilot workspace.

## More Information

- [AI Copilot](../../agent-assist/overview.md)
- [Voice Gateway](../../voicegateway/overview.md)