---
title: "Salesforce MIAW" 
slug: "Salesforce-MIAW" 
description: "The Salesforce MIAW handover connector bridges Cognigy.AI and Salesforce Messaging for In-App and Web."
hidden: false
tags:
   - contact centers
   - handover provider
   - salesforce
   - salesforce miaw
   - salesforce messaging for in-app and web
---

# Salesforce MIAW

[![Version badge](https://img.shields.io/badge/Added in-v4.99-blue.svg)](../../../release-notes/4.99.md)

<figure>
  <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/salesforce.svg" width="100%" />
  <figcaption>Salesforce MIAW</figcaption>
</figure>

## Description

The Salesforce MIAW handover connector bridges Cognigy.AI and [Salesforce Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5),
enabling end users to connect with human agents working in a contact center that uses Salesforce.

## Prerequisites

- Access to [Salesforce](https://login.salesforce.com/).
- Created Endpoint [compatible with Salesforce](../../deploy/endpoints/handover-settings.md#endpoints-compatible-with-handover-providers).
- Give [Salesforce users access](https://help.salesforce.com/s/articleView?id=service.miaw_non_agent_permissions_1.htm&type=5).

## Configuration on the Handover Provider Side

??? info "1. Configure Omni-Channel Settings"
    1. Log in to [Salesforce](https://login.salesforce.com/).
    2. On the **Salesforce home** page, select **Setup** in the upper-right corner, then select **Setup** from the menu.
    3. In the **Quick Find** box, enter **Omni-Channel Settings** and follow the **Feature Settings > Service > Omni-Channel** path.
    4. On the **Omni-Channel Settings** page, ensure that the **Enable Omni-Channel** setting is activated.
    5. In the **Quick Find** box, enter **Service Channels** and follow the **Feature Settings > Service > Omni-Channel** path.
    6. Create a channel by clicking **New**. Fill in the following fields:
        - **Service Channel Name** – enter the name of your channel, for example, `Messaging`.
        - **Developer Name** – the developer name will be generated automatically as soon as you enter the service channel name. Change the developer name if needed.
        - **Salesforce Object** – select **Messaging Session**. In case the **Messaging Session** is not available for you, select **Case**.

??? info "2. Create a Queue"
    1. In the **Quick Find** box, enter **Queues** and follow the **Users > Queues** path.
    2. Create a new queue by clicking **New**. Fill in the following fields:
        - **Label** – enter the name of your channel, for example, `Messaging`.
        - **Queue Name** – the queue name will be generated automatically as soon as you enter the channel name. Change the queue name if needed.
    3. In the **Supported Objects** section, add the following options: 
        - **Messaging User**
        - **Messaging Session**
        - **Chat Session**
        - **Case** (if you selected **Case** as a Salesforce object in the **Service Channels** settings)
    4. In the **Queue Members** section, add the human agents you want to include in the queue. Save Changes.

??? info "3. Create a Flow"
    1. In the **Quick Find** box, enter **Flows**, and select **Flows**.
    2. To create a new flow, click **New** and select **Omni-Channel Flow**.
    3. On the **Manager** tab, create a **New Resource**.
        1. From the **Resource Type** list, select **Variable**.
        2. In the **API Name** field, enter `recordId`. 
        4. From the **Data Type** list, select **Text**.
        3. Activate **Available for Input**, then click **Done**.
    4. In the Flow editor, click **+** to add an element. Select **Route Work** from the list.
    5. In the **Label** field, specify **Custom Action**. The value in the **API Name** field will be generated automatically.
    6. In the **Set Input Values** section, configure the following fields:
        - **Record ID Variable** — select `recordId`.
        - **Service Channel** — select the service channel that you created previously.
        - **Route To** — select **Queue**.
        - **Queue ID** — select the ID related to your queue that you created previously.
    7. Click **Save**. Fill it the following fields:
        - **Flow Label** — enter the name of your flow.
        - **Flow API Name** — the flow API name will be generated automatically. Change flow API name if needed.
    8. Click **Activate**, then **Publish**.
    At this stage, you will route your flow via the queue. You can also configure routing for a specific agent, bot, or skill. For more details, refer to the Salesforce [documentation](https://help.salesforce.com/s/articleView?id=service.omnichannel_routing_targets.htm&type=5).

??? info "4. Create a Messaging Channel"
    1. In the **Quick Find** box, enter **Messaging Settings** and follow the **Feature Settings > Service > Messaging** path.
    2. On the **Messaging Settings** page, click **New Channel**. Select **Messaging for In-App and Web**. Fill in the following fields:
        - **Channel Name** — enter the name of your messaging channel.
        - **Developer Name** — the developer name will be created automatically.
    3. In the **Omni-Channel Routing** section, configure the following fields:
        - **Routing Type** — select Omni-Flow.
        - **Flow Definition** — enter the Flow name that you created.
        - **Fallback Queue** — enter the queue name that you created.
        Save the changes.
    4. Ensure that your channel is active. On the **Messaging Settings** page, check if the channel is marked as **Active** in the **Active** column. If not, select your channel and click **Activate** in the upper-right corner.

??? info "5. Create an Embedded Service"
    1. In the **Quick Find** box, enter **Embedded Service Deployments** and follow the **Feature Settings > Service > Messaging** path.
    2. On the **Embedded Service Deployments** page, click **New Deployment**.
    3. Select the **Messaging for In-App and Web** type, then **Custom Client**. Fill in the following fields:
        - **Embedded Service Deployment Name** — enter the name of your deployment.
        - **API Name** — the API name will be created automatically. Change API name if needed.
    6. From the **Messaging Channel** list, select the channel you created previously. Save changes.
    7. Go to **Code Snippet**. Copy the *OrganizationId`, `DeveloperName`, and `Url` values for later use in Cognigy.AI.
    8. Click **Done**. Check whether your deployment is active and publish it. The deployment will take about 10 minutes. Afterward, you can go to Cognigy.AI to configure the handover settings.

## Configuration on the Cognigy.AI Side

??? info "1. Create a Handover Connector (Beta)"

    !!! note 
        This feature is in Beta. We encourage you to try it out and provide us with feedback.

    1. Go to **Build > Handover Providers** and click **+ New Handover Provider**.
    2. In the **New Handover Provider** window, select **Salesforce MIAW** from the list and name the connector.
    3. _(Optional)_ Activate the **Forward Events to the Flow** setting. This setting forwards any event to the Flow, which can be handled in the Lookup Node. Select the **Handover Status** type in the Lookup Node. In the Case Node, select **Events** from the **Handover Status** list. Agent Replies and Conversation Closed events are not forwarded.
    4. Fill in the following fields:

    | **Field**                       | **Description**                                                                         |
    |---------------------------------|-----------------------------------------------------------------------------------------|
    | Base URL                        | The URL of your configured service in Salesforce, copied from `Url`.                    |
    | Organization ID                 | The unique identifier of your organization in Salesforce, copied from `OrganizationId`. |
    | Embedded Service Developer Name | The ID of your deployment in Salesforce, copied from `DeveloperName`.                   |
    | Capabilities Version            | The API version is `1`.                                                                 |

??? info "2. Add a Handover to Agent Node"
    In the **Salesforce Settings** section of the [Handover to Agent](../../build/node-reference/service/handover-to-agent.md) Node, configure the following settings:

    - **Send Transcript as a first message** — the setting allows Salesforce to receive the conversation transcript as a first message. This setting is turned off by default.
    - **Conversation Routing Attributes** — the setting supports key-value pairs which allow you to specify information that can be used in the Omni-Channel flow in Salesforce.

Test your Flow to ensure it works as expected. You can use Demo Webchat to send messages to the Salesforce contact center.  
On the Salesforce side, go to the Service Console. In the Service Console, open [Messaging Sessions](https://help.salesforce.com/s/articleView?id=service.livemessage_create_console_app.htm&type=5), and make sure that your human agent is online.

## Additional Configuration

### AI Copilot Workspace

Within the Salesforce MIAW integration, you can use the [AI Copilot workspace](../../../ai-copilot/overview.md) as an assistant to your human agents.

Salesforce MIAW supports the AI Copilot workspace only as a standalone application:

??? info "Standalone"
    AI Copilot will be available via the following link: {! _includes/ai-copilot/url-pattern.md !}

## More Information

- [All Handover Providers](overview.md)
- [Handovers](../handovers.md)