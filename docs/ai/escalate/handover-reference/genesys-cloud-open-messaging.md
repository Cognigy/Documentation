---
title: "Overview"
slug: "genesys-cloud-open-messaging"
description: "Cognigy includes Genesys Cloud Open Messaging as an additional handover provider, allowing Cognigy.AI users to connect with human agents from Genesys Cloud."
search:
  boost: 2
hidden: false
tags:
  - Genesys Cloud Open Messaging
  - handover provider
  - Genesys OM
---

# Genesys Cloud Open Messaging

[![Version badge](https://img.shields.io/badge/Updated in-v4.100-blue.svg)](../../../release-notes/4.100.md)

<figure>
  <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/genesys.svg" width="80%" />
</figure>

The Genesys Cloud Open Messaging handover connector bridges Cognigy.AI and [Genesys](https://login.mypurecloud.com/),
enabling end users to connect with human agents working in a contact center that uses Genesys.

The Genesys Cloud Open Messaging handover connector is based on [Open Messaging APIs](https://developer.genesys.cloud/commdigital/digital/openmessaging/openmessaging-apis). [Open messaging](https://developer.genesys.cloud/commdigital/digital/openmessaging/) facilitates integrations between Genesys Cloud and a third-party messaging service through a webhook.

## Prerequisites

- Access to [Genesys Cloud](https://login.mypurecloud.com/).
- Created Endpoint [compatible with Genesys Cloud Open Messaging](../../deploy/endpoints/handover-settings.md#endpoints-compatible-with-handover-providers).
- Activate Genesys Cloud Open Messaging on the Cognigy.AI side:
    - If you have a shared or dedicated SaaS installation, contact Cognigy technical support.
    - If you have an on-premises installation, specify the following feature flags: `FEATURE_ENABLE_GENESYS_CLOUD_OM="true"`, `FEATURE_ENABLE_GENESYS_CLOUD_OM_WHITELIST="organization1,organization2"`, `FEATURE_USE_GENESYS_BOT_CONNECTOR_ENDPOINT_WHITELIST="organization1,organization2"`. To enable the Genesys Cloud Open Messaging handover provider for all organizations in your installation, use `*` instead of a list of organizations.
- To detect handover completion in Genesys:
    - Starting from Cognigy 4.100, migrate to [Amazon EventBridge](genesys-cloud-open-messaging-with-amazon-eventbridge.md) using the Amazon EventBridge Genesys connector to send requests to Cognigy.AI.
    - For Cognigy 4.99 and earlier versions, you have two options:
        - By default, Cognigy 4.99 and earlier use a WebSocket connection via the Notifications API to detect handover completion in Genesys. However, this approach has [limitations](https://developer.genesys.cloud/notificationsalerts/notifications/#usage-limitations) and may not always be reliable.
        - As an alternative, you can configure [HTTP webhooks](genesys-cloud-open-messaging-handover-end-detection.md) using Triggers and Web Services Data Actions to send requests to Cognigy.AI.

## Configuration on the Handover Provider Side

Before starting the integration with Cognigy, build the Genesys Cloud Open Messaging configuration on the Genesys side.

??? info "1. Create a Platform"
    To create a platform config for Genesys Cloud Open Messaging, follow these steps:

    1. In the Genesys Cloud interface, go to **Admin > Message > Platform Configs**.
    2. In the upper-right corner, click **+ Create Profile**.
    3. In the **Create a configuration profile** window, specify a unique platform config name and click **Create**.
    4. In the left-side menu, select **Platforms**.
    5. On the **Platforms** page, click **+ Create new Integration > Open Messaging**.
    6. On the **Open Messaging** page, fill in the following fields:
        - **Name** — enter a name without spaces for your integration. Copy and save this name. You need to specify this name in the **Deployment name** field on the Cognigy side.
        - **Outbound Notification Webhook URL** — enter `https://endpoint-<your-environment>/handover/genesysCloudOM`. For example, `https://endpoint-app.cognigy.ai/handover/genesysCloudOM`, where environment is `app.cognigy.ai`.
        - **Outbound Notification Webhook Signature Secret Token** — enter the secret into the X-Hub-Signature-256 header generation for webhook requests sent to the outbound notification webhook URL. For the secret, you can choose any arbitrary but sufficiently random string that you want. The external service should use the secret and signature to validate the message originating from Genesys Cloud. This validation is optional but recommended. For more information about validation, see [Validate webhook notifications in the Genesys Cloud Developer Center](https://developer.genesys.cloud/commdigital/digital/openmessaging/validate). Copy and save this token for future usage on the Cognigy side. Note that if you did not copy and save this token at once, after saving the platform configuration, you will need to recreate this token.
    7. Click **Save**.
    8. From the **Platform Config** list, select the config that you created on the **Platform Configs** page.
    9. From the **Supported Content Profile** list, select `default`. Save changes.

    Your Open Messaging platform will appear in the platform list.

??? info "2. Create a Queue"
    To create a Queue, follow these steps:

    1. In the Genesys Cloud interface, go to **Admin > Contact Center > Queues**.
    2. On the **Queues** page, click **Create Queue**.
    3. In the left-side **Create Queue** window, fill in the following fields:
        - **Name** — enter a unique name of the queue. Save and copy this name for later use.
        - **Division** — select `Home`.
    4. Click **Save**. Your queue will appear in the queue list.
    5. Open the queue settings by selecting this queue from the list.
    6. Copy the Queue ID from the page URL. To do this, navigate to the page URL and find the ID between `/queues/` and `/general`. For example, in the URL, `https://apps.mypurecloud.de/directory/#/admin/organization/queues/d59d0280-6664-4896-ad42-1a2715b7178e/general`, the ID `d59d0280-6664-4896-ad42-1a2715b7178e` should be copied.
    7. Save the Queue ID for later use in Cognigy.AI.

??? info "3. Create an Inbound Message Flow"
    To create an Inbound Message flow, follow these steps:

    1. In the Genesys Cloud interface, go to **Admin > Architect**.
    2. Click or hover over the **Flows** menu and select **Inbound Message**.
    3. Click **Add**. The **Create Flow** dialog box opens.
    4. In the **Name** field, specify a unique name for the inbound message flow.
    5. Click the **Divisions** list and select the division in which to place the flow.
    6. Click **Create Flow**. The flow's configuration page opens.
    7. To configure a flow, click **Edit**, then go to **Toolbox**.
    8. Drag the **Send Response** action and drop it onto the messaging flow editor.
    9. In the **Message Body** of the **Send Response** action, specify `Connected`. 
    10. The steps 11–13 are optional. Follow them if you want to add a [new embedded version of AI Copilot](#embedded) within your handover.
    11. *(Optional)* Below the **Send Response** action, add [Get Participant Data](https://help.mypurecloud.com/articles/get-participant-data-action/) action.
    12. *(Optional)* In the **Get Participant Data** editor, add the following variables:
        - `queueId`
        - `myLanguage`
        - `mySkills`
        - `userId`
    13. *(Optional)* for debugging purposes, you can send this data to the human agent within a conversation. To do that, below the **Get Participant Data** action, add the second **Send Response** action. In the message body, specify variables in a [message sequence with the String Builder](https://help.mypurecloud.com/articles/set-up-a-message-sequence-with-the-string-builder/). 
    14. Below the **Send Response** action, place the [Transfer to ACD](https://help.mypurecloud.com/articles/transfer-acd-action/) action to transfer an interaction to a queueing system. 
    15. In the **Queue** field of the **Transfer to ACD** action, select the queue to which you want to transfer the interaction. 
    16. In the upper-left corner, click **Save**, then **Publish**.

    After creating your inbound message flow, you will see this flow in the architect list.

    To learn more about designing the flow, refer to the [Configure Inbound Message Flow](https://help.mypurecloud.com/articles/inbound-message-flows/) documentation.

??? info "4. Set up Message Routing"
    To set up Message Routing, follow these steps:

    1. Open the Genesys Cloud interface.
    2. Go to **Admin > Routing > Message Routing**.
    3. In the upper-right corner, click **+ Attach New Addresses to a Flow**.
    4. On the **Attach New Addresses** page, navigate to the **Select Flow** list.
    5. From the **Select Flow** list, choose the Inbound Message Flow you created.
    6. From the **Select Addresses** section, choose the Open Messaging platform you created and click **Attach Address**. Save changes.

    Your Message Routing configuration will appear in the message routing list.

??? info "5. Configure Credentials"
    To configure credentials, follow these steps:

    1. In the Genesys Cloud interface, go to **Admin > Integrations > OAuth**, then click **+ Add Client**. 
    2. On the **Client Details** tab, provide a unique name in the **App Name** field.
    3. On the **Roles** tab, activate the corresponding role for the client. The role must contain at least a minimum scope of the following permissions:
        - `messaging:integration:view` (Messaging > Integration > View)
        - `conversations:message:receive` (Conversation > Message > Receive)
        - `conversations:message:create` (Conversation > Message > Create)
        - `conversation:webmessaging:view` (Conversation > Webmessaging > View)
        - `conversation:message:view` (Conversation > Message > View)
        - `analytics:conversationDetail:view` (Analytics > Conversation Detail > View)
    4. Return to the **Client Details** tab and select **Client Credentials** in the **Grand Types** list.
    5. Click **Save**.
    6. Copy the Client ID and Client Secret and save them for future use.
    7. From the left-side menu, select **Authorized Applications**.
    8. In the upper-right corner, click **+ Authorize a Client**.
    9. In the **Authorize Client** window, enter the Client ID that you copied and saved previously.
    10. Click **Authorize Client**.

    Once your client is authorized, you can start configuring Genesys Handover Provider on the Cognigy side.

## Configuration on the Cognigy.AI Side

??? info "1. Create a Handover Connector (Beta)"
    !!! note
        This feature is in Beta. We encourage you to try it out and provide us with feedback.

    1. Go to **Deploy > Handover Providers**.
    2. Click **+ New Hanvover Provider** and select **Genesys Open Messaging** from the list.
    3. Scroll down to **Handover Settings** and select **Genesys Cloud Open Messaging** from the list.
    4. Fill in the following fields:
        - **Host** — enter the login URL for Genesys Cloud customers, which varies by region, such as `mypurecloud.de` for Germany. You can use the base domain like `mypurecloud.com` or `cac1.pure.cloud`, omitting `apps.` or `login.` part. For more on Genesys Cloud regions, refer to [AWS regions for deployment](https://help.mypurecloud.com/articles/aws-regions-for-genesys-cloud-deployment/).
        - **Deployment Name** — specify the Open Messaging platform name that you created [on the Genesys side](#configuration-on-the-handover-provider-side).
        - **Queue ID** — enter the Queue ID that you copied when you created a queue [on the Genesys side](#configuration-on-the-handover-provider-side).
        - **Webhook Secret** — specify the Outbound Notification Webhook Signature Secret Token that you created [on the Genesys side](#configuration-on-the-handover-provider-side).
        - **Client ID** — enter the Client ID that you generated [on the Genesys side](#configuration-on-the-handover-provider-side.
        - **Client Secret** — enter the Client Secret that you generated [on the Genesys side](#configuration-on-the-handover-provider-side).
    5. Activate the **Send Profile information** setting if you want to send user information, such as the first and last name, to the human agent. Save changes.

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

To test connection, click **Open Demo Web Chat** in your Endpoint.

## Additional Configuration

??? info "Send Genesys Bot Messages to End Users"

    !!! note
        Before using this feature, add the `GENESYS_CLOUD_OM_HANDLE_BOT_MESSAGE: "true"` feature flag.

    By default, the Genesys Inbound Message flow routes messages to human agents only. 
    You can configure your settings so that not only humans but end users receive these messages.
    Forwarding messages to the end user can be helpful in the following use cases:

    - when the conversation status or wait time information is relevant to the end user.
    - to provide the end user with updates and transparency throughout the interaction.
    - to allow the end user to make informed decisions while waiting for a human agent, such as requesting a callback.

    The Genesys Inbound flow is responsible for message configuration.
    However, if you want to use additional logic,
    such as allowing end users to see their queue position,
    set up the [In-Queue Message flow](https://help.mypurecloud.com/articles/work-with-in-queue-flows/) in Genesys in addition to the Genesys Inbound flow.

    Cognigy.AI is responsible for message roting logic. Follow the instructions to configure this logic:

    1. In your chosen Handover Flow, set a **Lookup** Node below the **Handover to Agent** Node. Set **Lookup** Node as your Entrypoint.
    2. For the **Type** field within the **Lookup** Node, select **Handover Status**.
    3. For the child **Case** Node, specify `genericHandoverUpdate` in the **Value** field.
    4. Add your **Say** Node under the **Case** Node to display the messages to the end user. Select **Text** from the **Output Type** list, and in the **Text** field enter the following **CognigyScript**:  `{{ "{{ input.data.request.text }}" }}`. The script will then query Genesys for the relevant data, such as a queue position.
    5. In the Handover Settings of the **Say** Node, select **User Only** from the **Handover Output Destination** list.
    6. To display all incoming Genesys Status or Bot messages, add a **Go To** Node below the **Say** Node.
    7. Open the **Go To** Node. From the **Select Node** list, choose **Lookup**. Scroll down to the **Advanced** section. From the **Execution Mode** list, select **Go to Node and wait for Input**.

    The main Flow on Cognigy.AI should look like this:

    <figure>
      <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/genesys/genesys-flow-sample.png" width="80%" />
    </figure>

{! _includes/ai/providers/genesys/filter-transcript-messages.md !}

### AI Copilot Workspace

Within the Genesys integration, you can use the [AI Copilot workspace](../../../ai-copilot/overview.md) as an assistant for your human agents.

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

- [Genesys Cloud Guest Chat](genesys-cloud-guest-chat.md)
- [All Handover Providers](overview.md)
- [Handovers](../handovers.md)