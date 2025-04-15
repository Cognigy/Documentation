---
title: "Genesys Cloud Guest Chat" 
slug: "genesys-cloud-guest-chat" 
hidden: false 
---

# Genesys Cloud Guest Chat

[![Version badge](https://img.shields.io/badge/Updated in-v4.97-blue.svg)](../../../release-notes/4.97.md)

<figure>
  <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/genesys.svg" width="80%" />
</figure>

## Description

!!! warning
    Due to [Genesys ACD Web Chat v2 deprecation](https://help.mypurecloud.com/articles/deprecation-predictive-engagement-support-for-acd-web-chat-version-2/), Cognigy will deprecate the Genesys Cloud Guest Chat handover on June 11, 2025. If you're a new user looking to connect to Genesys, create a new [Genesys Cloud Open Messaging](genesys-cloud-open-messaging.md) handover.
    For existing users, we strongly advise migrating to the [Genesys Cloud Open Messaging](genesys-cloud-open-messaging.md) handover before the deprecation date.

The Genesys Cloud Guest Chat handover connector bridges Cognigy.AI and [Genesys](https://login.mypurecloud.com/),
enabling end users to connect with human agents working in a contact center that uses Genesys Cloud Guest Chat.

The Genesys Cloud Guest Chat handover connector is based on [Genesys Guest Chat APIs](https://developer.genesys.cloud/commdigital/digital/webchat/guestchat). These APIs contain functionality to create a new chat conversation, retrieve previous chat history, send messages, set the typing indicator, and leave the chat. Receiving messages, membership changes, and other real-time events are available via a WebSocket connection.

## Prerequisites

- Access to [Genesys Cloud](https://login.mypurecloud.com/).
- Created Endpoint [compatible with Genesys Cloud Guest Chat](../../deploy/endpoints/handover-settings.md#endpoints-compatible-with-handover-providers).

## Configuration on the Handover Provider Side

??? info "1. Create a Handover Connector (Beta)"

    !!! note
        This feature is in Beta. We encourage you to try it out and provide us with feedback.

    1. Go to **Deploy > Handover Providers**.
    2. Click **+ New Hanvover Provider** and select **Genesys Guest Chat** from the list.
    4. To fill in the required fields and complete your setup, read the [Genesys Cloud Handover Integration](https://support.cognigy.com/hc/en-us/articles/6229147435292) article in the Cognigy Help Center. 

??? info "2. Configure Handover Settings"
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

## Additional Configuration

{! _includes/ai/providers/genesys/filter-transcript-messages.md !}

### AI Copilot Workspace

Within Genesys integration, you can use the [AI Copilot workspace](../../../ai-copilot/overview.md) as an assistant for your human agents.

By default, two versions of the application are provided:

??? info "Standalone"
    AI Copilot will be available as a standalone application via the following link: {! _includes/ai-copilot/url-pattern.md !}

??? info "Embedded"
    By default, you can use the embedded version of the AI Copilot workspace, but it will overlap part of the screen with the conversation. To place the workspace to the right of the chat with the conversation, follow these steps:

    ??? info "1. Create a Script"
        To create a script, follow these steps:
    
        1. In Cognigy.AI, go to Endpoint **Settings > Copilot**.
        2. Copy the Copilot Embedding URL by clicking on it.
        3. In Genesys Cloud, open the **Admin** tab.
        4. Under **Contact Center**, click **Scripts**, then **Create**. Type a name for the script.
        5. Select the **Blank Script** template and click **+ Create**.
        6. On the script page, go to the **Add Components** tab.
        7. Under the **Components** section, select **Web Page**. In the **Web Page Source** field, enter the Copilot Embedding URL that you copied before.
        8. In the **Layout** section, change the size of width and height by clicking the **Stretch** button.
        9. In the upper-right corner, go to the **Variables** tab.
        10. On the **Variables** tab, go to the **Basic Types** section and click **String**.
        11. Create a new variable:<br>
            1. In the **Name** field, enter `userId`.
            2. In the **Description** field, enter `Cognigy variable`.
            3. Enable the **Input** toggle and click **Apply**.
        12. In the upper-left corner of the script page, click **Script > Properties**.
        13. In the **Script Properties** section, activate the **Inbound** and **Message** features.
        14. In the upper-left corner of the script page, click **Script > Save**, then **Publish**.

    ??? info "2. Add the Script to the Inbound Message Flow"
        To add the Script to the Inbound Message Flow, follow these steps:
    
        1. In the Genesys Cloud interface, go to **Admin > Architect**.
        2. Click or hover over the **Flows** menu and select **Inbound Message**.
        3. From the flow list, select a flow that you created before.
        4. To configure a flow, click **Edit**.
        5. In the flow editor, ensure that both the **Get Participant Data** action is added. If you haven't done so already, refer to steps 12-14 in the [Create an Inbound Message Flow](#create-an-inbound-message-flow) section. 
        6. Below the **Get Participant Data** action, place [Set Screen Pop](https://help.mypurecloud.com/articles/set-screen-pop-action/) action. The **Set Screen Pop** action must be positioned above the **Transfer to ACD** action.
        7. From the **Message Script** list of the **Set Screen Pop** action, select the script created before. 
        8. In the **Inputs** action, add `userId` in the **userId** field. 
        9. In the upper-left corner, click **Save**, then **Publish**.

## More Information

- [Genesys Cloud Open Messaging](genesys-cloud-open-messaging.md)