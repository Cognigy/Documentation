---
title: "Genesys Cloud Guest Chat" 
slug: "genesys-cloud-guest-chat" 
hidden: false 
---

# Genesys Cloud Guest Chat

[![Version badge](https://img.shields.io/badge/Updated in-v4.90-blue.svg)](../../../release-notes/4.72.md)

<figure>
  <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/genesys.svg" width="80%" />
</figure>

## Description

!!! warning
    Due to [Genesys ACD Web Chat v2 deprecation](https://help.mypurecloud.com/articles/deprecation-predictive-engagement-support-for-acd-web-chat-version-2/), Cognigy will deprecate the Genesys Cloud Guest Chat handover on June 11, 2025. If you're a new user looking to connect to Genesys, create a new [Genesys Cloud Open Messaging](genesys-cloud-open-messaging.md) handover.
    For existing users, we strongly advise migrating to the [Genesys Cloud Open Messaging](genesys-cloud-open-messaging.md) handover before the deprecation date.

Cognigy includes Genesys Cloud as an additional handover provider, allowing Cognigy users to connect with human agents from Genesys Cloud.

The Genesys Cloud Guest Chat handover is based on [Genesys Guest Chat APIs](https://developer.genesys.cloud/commdigital/digital/webchat/guestchat). These APIs contain functionality to create a new chat conversation, retrieve previous chat history, send messages, set the typing indicator, and leave the chat. Receiving messages, membership changes, and other real-time events are available via a WebSocket connection.

## Setup


### Prerequisites

- You need to have an account in [Genesys Cloud](https://login.mypurecloud.com/).

### Configure Handover Settings

In [Handover to Agent](../../build/node-reference/service/handover-to-agent.md) Node, configure the following settings:

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
3. Scroll down to **Handover Settings** and select **Genesys Cloud Guest Chat** from the list.
4. To fill in the required fields and complete your setup, read the [Genesys Cloud Handover Integration](https://support.cognigy.com/hc/en-us/articles/6229147435292) article in the Cognigy Help Center. 

{! _includes/ai/providers/genesys/filter-transcript-messages.md !}

## AI Copilot Workspace

Within Genesys integration, you can use [AI Copilot Workspace](../../../ai-copilot/overview.md) as an assistant for your human agents.

By default, two versions of the application are provided:

- [Standalone](#standalone)
- [Embedded](#embedded)

### Standalone

AI Copilot will be available as a standalone application via the following link:

{! _includes/ai-copilot/url-pattern.md !}

### Embedded 

By default, you can use the embedded version of the AI Copilot workspace, but it will overlap part of the screen with the conversation. To place the workspace to the right of the chat with the conversation, follow these steps:

#### Create a Script

1. Go to **Endpoint Settings > Copilot**.
2. Copy the Copilot Embedding URL by clicking on it.
3. Go to Genesys Cloud.
4. Open the **Admin** tab.
5. Under **Contact Center**, click **Scripts**.
6. Click **Create**.
7. Type a name for the script.
8. Select the **Blank Script** template and click **+ Create**.
9. On the script page, go to the **Add Components** tab.
10. Under the **Components** section, select **Web Page**. In the **Web Page Source** field, enter the Copilot Embedding URL that you copied before.
11. In the **Layout** section, change the size of Width and Height by clicking the **Stretch** button.
12. In the upper-left corner of the script page, click **Script > Properties**.
13. In the **Script Properties** section, activate the **Inbound** and **Message** features.
14. In the upper-left corner of the script page, click **Script > Save**, then **Publish**.

#### Create an Inbound Chat Flow

Create an Inbound Chat flow in Genesys and add your script to it. To do that, follow these steps:

1. Open the Genesys Cloud interface.
2. Go to **Admin > Architect**.
3. Click or hover over the **Flows** menu and select **Inbound Chat**.
4. Click **Add**. The **Create Flow** dialog box opens.
5. In the **Name** field, specify a unique name for the inbound chat flow.
6. Click the **Divisions** list and select the division in which to place the flow.
7. Click **Create Flow**. The flow's configuration page opens.
8. To configure a flow, click **Edit**.
9. Go to **Toolbox**.
10. Drag the **Send Response** action and drop it onto the messaging flow editor.
11. In the **Message Body** of the **Send Response** action, specify `Connected`.
12. Below the **Send Response** action, place the [Set Screen Pop](https://help.mypurecloud.com/articles/set-screen-pop-action/) action.
13. From the **Message Script** list of the **Set Screen Pop** action, select the script created before.
14. Below the **Set Screen Pop** action, place the [Transfer to ACD](https://help.mypurecloud.com/articles/transfer-acd-action/) action to transfer an interaction to a queueing system.
15. In the **Queue** field of the **Transfer to ACD** action, select the queue to which you want to transfer the interaction.
16. In the upper-left corner, click **Save**, then **Publish**.

## More Information

- [Genesys Cloud Open Messaging](genesys-cloud-open-messaging.md)