---
title: "Voice Copilot"
slug: "voice-copilot"
hidden: false
---

# Voice Copilot

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/c514dae-EP_webhook.png" width="100%" />
</figure>

When a transfer occurs, the new AAV triggers its own flow, which, in turn, generates a dashboard in Genesis.

The use case is that a human agent, for example, in Genesys, receives transcripts from a transferred call.

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