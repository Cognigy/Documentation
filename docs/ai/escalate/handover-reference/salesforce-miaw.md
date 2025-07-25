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

[![Version badge](https://img.shields.io/badge/Added in-v2025.15-blue.svg)](../../../release-notes/2025.15.md)

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

## Restrictions

- The Salesforce MIAW handover connector supports attachments only when they're sent by end users through [Webchat v2](../../../webchat/v2/overview.md) or [Webchat v3](../../../webchat/v3/overview.md). Attachments sent by human agents from the Salesforce MIAW platform aren't supported.

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
    1. In the **Quick Find** box, enter **Flows**, then select **Flows**.
    2. To create a new flow, click **New** and select **Omni-Channel Flow**.
    3. On the **Manager** tab, create a **New Resource**.
        1. From the **Resource Type** list, select **Variable**.
        2. In the **API Name** field, enter `recordId`. 
        3. From the **Data Type** list, select **Text**.
        4. Activate **Available for Input**, then click **Done**.
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

    - **Send Transcript as first message** — the setting allows Salesforce to receive the conversation transcript as the first message. If the transcript exceeds 3000 characters, it is split into multiple messages. This setting is turned off by default.
    - **Conversation Routing Attributes** — the setting supports key-value pairs, where the keys are variables you manually specify in the Omni-Channel flow in Salesforce. To specify variables, follow the [Map Pre-Chat Values in Omni-Channel Flow](https://help.salesforce.com/s/articleView?id=service.miaw_map_messaging_2.htm) guide in the Salesforce documentation. Then, enter the key-value pairs in JSON format. For example:
       ```json
       {
         "customerName": "John Doe",
         "issueType": "Billing"
       }
       ```
       where `customerName` and `issueType` are variables you specified on the Salesforce side, and `John Doe` and `Billing` are the values you want to pass to the flow in Salesforce.
    - **Identity Token for Authenticated Users** — the setting allows you to specify an access token generated via the [Salesforce API](https://developer.salesforce.com/docs/service/messaging-api/references/miaw-api-reference?meta=generateAccessTokenForAuthenticatedUser). This token enables users who have already authenticated within your system to interact securely with Salesforce MIAW. Before using this token, [set up user verification](https://help.salesforce.com/s/articleView?id=sf.user_verification_setup.htm) on the SalesForce side. By default, the setting is turned off, meaning that unauthenticated users can interact with Salesforce MIAW. 

Test your Flow to ensure it works as expected. You can use Demo Webchat to send messages to the Salesforce contact center.  
On the Salesforce side, go to the Service Console. In the Service Console, open [Messaging Sessions](https://help.salesforce.com/s/articleView?id=service.livemessage_create_console_app.htm&type=5), and make sure that your human agent is online.

## Additional Configuration

### Agent Copilot Workspace

Within the Salesforce MIAW integration, you can use the [Agent Copilot workspace](../../../ai-copilot/overview.md) as an assistant to your human agents.

By default, two versions of the application are provided:

??? info "Standalone"
    Agent Copilot will be available as a standalone application via the following link: {! _includes/ai-copilot/url-pattern.md !}

??? info "Embedded"
    To use the embedded version of the Agent Copilot workspace, you need to update the settings on the Salesforce side and configure the Agent Copilot UI components.
    ??? info "1. Update Messaging Settings"
        1. In the [Salesforce](https://login.salesforce.com/) interface, go to **Setup > Messaging Settings** and select the messaging channel that you created previously.
        2. In the messaging channel, go to **Custom Parameters** and click **New**.
        3. In the **New Custom Parameter** window, configure the following parameters:
            - **Parameter Name** — enter **Copilot URL**.
            - **Parameter API Name** — the parameter API name will be generated automatically as soon as you enter the parameter name. Change the parameter API name if needed.
            - **Channel Variable Name** — the channel variable name will be generated automatically as soon as you enter the parameter name. Change the channel variable name if needed.
            - **Data Type** — select **String**.
            - **Maximum Length** — enter `255`. Save changes.
        4. In the **Parameter Mappings** section, click **New**.
        5. In the **New Parameter Mapping** window, configure the following parameters:
            - **Parameter** — select **Copilot URL** that was added under **Custom Parameters**.
            - **Flow Variable Name** — enter `copilotUrl`. <br> Save changes.

    ??? info "2. Update Embedded Service Deployments"
        1. In the **Quick Find** box, enter **Embedded Service Deployments** and follow the **Feature Settings > Service > Messaging** path.
        2. Select the deployment that you created previously, then select **Pre-Chat**.
        3. Enable the **Activate the pre-chat feature** setting. 
        4. Go to the **Visible Pre-Chat Fields** section, click **Add > Custom**.
        5. In the **New Custom** window, fill in the following fields:
            - **Field Type** — select **text**.
            - **Channel Variable Name** — select `Copilot_URL` that you added in **Messaging Settings** previously. <br> Save changes. 
        6. Click **Save**. On the **Embedded Service Deployment Settings** page, click **Publish**.

    ??? info "3. Update the Flow"
        1. In the **Quick Find** box, enter **Flows**, then select **Flows**.
        2. Go to the Flow that you created previously.
        3. On the **Manager** tab, create a **New Resource**.
            1. From the **Resource Type** list, select **Variable**.
            2. In the **API Name** field, enter `copilotUrl`.
            3. From the **Data Type** list, select **Text**.
            4. Activate **Available for Input**, then click **Done**.
        4. In the Flow editor, above the **Route Work** action, click **+** to add an element. Select **Update Records** from the list.
        5. In the **How to Find Records to Update and Set Their Values** section, select **Specify conditions to identify records**.
        6. In the **Update Records of This Object Type** section, select **Messaging Session** from the **Object** list.
        7. In the **Filter Messaging Session Records** section, configure the following fields: 
            - **Condition Requirement to Update Records** — select **All Conditions Are Met (AND)**. 
            - **Field** — enter `Id`.
            - **Operator** — select **Equals**.
            - **Value** — enter `recordId`.
        8. In the **Set Field Values for the Messaging Session Records** section, configure the following fields:
            - **Field** — enter `Copilot__c`.
            - **Value** — enter `copilotUrl`.
        9. Click **Save a New Version**, then **Activate**.

    ??? info "4. Configure UI Components"
        To configure the Agent Copilot UI components, refer to the [Salesforce Integrations](https://github.com/Cognigy/salesforce-integrations) documentation on GitHub. Once the components are configured, you can test the embedded Agent Copilot workspace using [Demo Webchat](../../../webchat/demo.md).

        If you used an embedded Agent Copilot workspace with the [deprecated Salesforce integration](salesforce.md) and migrated to Salesforce MIAW, you need to update the Agent Copilot UI components. Refer to the [Set up the Component](https://github.com/Cognigy/salesforce-integrations?tab=readme-ov-file#set-up-the-componentrefer) documentation on GitHub.

#### Automated Messaging Components

The Salesforce MIAW integration supports automated messaging components for sending auto-responses during messaging sessions, such as welcome messages, inactivity reminders, and survey links. To learn how to use these components, refer to the Salesforce documentation on [Salesforce documentation on Automated Messaging Components](https://help.salesforce.com/s/articleView?id=service.messaging_components_auto_response.htm&type=5).

### Prevent Auto Conversation Close

To help keep conversations going smoothly, you can control whether a Salesforce MIAW chat closes when a human agent is removed from the conversation. To do this, set the `DISABLE_ABORT_HANDOVER_ON_SALESFORCE_MIAW_PARTICIPANT_CHANGE` variable in the `values.yaml` file. By default, this variable is set to `false`. Setting it to `true` keeps the conversation open and continues polling for new events even if the human agent is no longer part of the chat.

## Troubleshooting

| Possible Error                                                                                  | How to Resolve                                                                                                                                                                                                                                                                                                                                              |
|-------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Could not find field `Copilot__c`. Make sure to add this field to your Salesforce installation. | An embedded Agent Copilot doesn't work. Make sure that you've updated the settings in Salesforce. Check your flow and make sure that `Copilot__c` is included in the **Update Records** action.                                                                                                                                                             |
| You are trying to pull data from a Live Chat transcript while you are on a Messaging session.   | This error occurs when you migrate from the [deprecated Salesforce integration](salesforce.md) to Salesforce MIAW without updating the Agent Copilot UI components. To update the components, refer to the [Set up the Component](https://github.com/Cognigy/salesforce-integrations?tab=readme-ov-file#set-up-the-componentrefer) documentation on GitHub. |
| Login to Omni-Channel failed.                                                                   | This error occurs when a resource limit is exceeded. In the Salesforce Console, delete old messaging sessions, chat transcripts, and chat sessions. This action frees up space.                                                                                                                                                                             |

## More Information

- [All Handover Providers](overview.md)
- [Handovers](../handovers.md)