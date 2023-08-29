---
title: "Genesys Cloud Open Messaging"
slug: "genesys-cloud-open-messaging"
hidden: false
---

# Genesys Cloud Open Messaging

[![Version badge](https://img.shields.io/badge/Updated in-v4.58-blue.svg)](../../release-notes/4.58.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/genesys.svg" width="80%" />
</figure>


## Description

<div class="divider"></div>

Cognigy includes Genesys Cloud as an additional handover provider, allowing Cognigy users to connect with human agents from Genesys Cloud.

Open messaging facilitates integrations between Genesys Cloud and a third-party messaging service through a webhook.

The Genesys Cloud Open Messaging handover is based on [Open Messaging APIs](https://developer.genesys.cloud/commdigital/digital/openmessaging/openmessaging-apis). [Open messaging](https://developer.genesys.cloud/commdigital/digital/openmessaging/) facilitates integrations between Genesys Cloud and a third-party messaging service through a webhook.

## Setup
<div class="divider"></div>

### Prerequisites

- You need to have an account in [Genesys Cloud](https://login.genesys.pure.cloud/).

### Configure Handover Settings

In [Handover to Agent](../tools/agent-handover.md) Node, configure the following settings:

- **Language** — specify a language for the conversation. For example, `english`, `spanish`, `german`.
- **Skills** — define skills for the conversation. For example, `escalation`.
- **Priority** — set the priority for the conversation. For example, `1`. If a priority is set, it triggers a flow in Genesys to prioritize or de-prioritize the conversation within the queue. Note that this functionality requires the appropriate flow to be set up in Genesys.
- **Custom Attributes** — add custom attributes in the `Key: Value` format, which allows you to include additional information.
  For example:
  ```json
  {
      "section": "section A",
      "region": "Europe"
  }
  ```
### Create an Endpoint

To start using Genesys Cloud as a handover provider with Cognigy.AI:

1. Go to **Deploy > Endpoints**.
2. Open the Endpoint where you want to enable Handover to Genesys Cloud.
3. In the **Configuration Information** section, copy the Config URL and save it for future use.
4. Scroll down to **Handover Settings** and select **Genesys Cloud Open Messaging** from the list.
5. In the **Webhook Secret** field, create a webhook secret. The webhook can contain lettes, numbers, and punctuation marks. 

To fill in the rest required fields and complete your setup, read the [Genesys Cloud Handover Integration](https://support.cognigy.com/hc/en-us/articles/6229147435292) article in Cognigy Help Center.

### Genesys Cloud Open Messaging

1. Open the Genesys Cloud interface. 
2. Go to Admin > Message > Platforms. 
3. On the Platforms page, click + Create new Integration > Open Messaging. 
4. On the Open Messaging page, fill in the following fields:
    - **Name** — enter a name for your integration. 
    - **Outbound Notification Webhook URL** — enter the Config URL that you copied and saved previously. 
    - **Outbound Notification Webhook Signature Secret Token** — enter the webhook secret that you created and saved on the Cognigy Endpoint side.
5. Click **Save**.










