---
title: "Genesys Cloud Guest Chat" 
slug: "genesys-cloud-guest-chat" 
hidden: false 
---

# Genesys Cloud Guest Chat

[![Version badge](https://img.shields.io/badge/Updated in-v4.52-blue.svg)](../../release-notes/4.52.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/genesys.svg" width="80%" />
</figure>

## Description

<div class="divider"></div>

Cognigy includes Genesys Cloud as an additional handover provider, allowing Cognigy users to connect with human agents from Genesys Cloud.

The Genesys Cloud Guest Chat handover is based on [Genesys Guest Chat APIs](https://developer.genesys.cloud/commdigital/digital/webchat/guestchat). These APIs contain functionality to create a new chat conversation, retrieve previous chat history, send messages, set the typing indicator, and leave the chat. Receiving messages, membership changes, and other real-time events are available via a WebSocket connection.

## Setup
<div class="divider"></div>

### Prerequisites

- You need to have an account in [Genesys Cloud](https://login.genesys.pure.cloud/).

### Configure Handover Settings

In [Handover to Agent](../nodes/service/handover-to-agent.md) Node, configure the following settings:

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
3. Scroll down to **Handover Settings** and select ** Genesys Cloud Guest Chat** from the list.
4. To fill in the required fields and complete your setup, read the [Genesys Cloud Handover Integration](https://support.cognigy.com/hc/en-us/articles/6229147435292) article in Cognigy Help Center. 

## AI Copilot Workspace

Within Genesys integration, you can use [AI Copilot Workspace](../../ai-copilot/overview.md) as an assistant for your human agents. AI Copilot will be available as a standalone application via the following link:

{! _includes/ai-copilot/url-pattern.md !}

### Embedded AI Copilot

For Embedded AI Copilot for Genesys, follow these steps:

1. Go to Endpoint Settings > Copilot.
2. Copy the Copilot Embedding URL by clicking on it.
3. Go to Genesys Cloud.
4. Open the Admin tab.
5. Under Contact Center, click Scripts.
6. Click Create. 
7. Type a name for the script. 
8. Select the **Blank Script** template and click **+ Create**. 
9. On the script page, go to the **Add Components** tab. 
10. Under the **Components** section, select **Web Page**. In the **Web Page Source** field, enter the Copilot Embedding URL that you copied before.
11. _(Optional)_ In the Layout section, change the size of Width and Height by clicking the **Stretch** button.
12. In the upper-left corner of the script page, click **Script > Properties**.
13. In the **Script Properties** section, activate the **Inbound** and **Message** features.
14. In the upper-left corner of the script page, click **Script > Save**. 
15. Go back to the Admin tab add select **Architect**.

## More Information

- [Genesys Cloud Open Messaging](genesys-cloud-open-messaging.md)