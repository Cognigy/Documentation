---
title: "Genesys Cloud Open Messaging"
slug: "genesys-cloud-open-messaging"
hidden: false
---

# Genesys Cloud Open Messaging

[![Version badge](https://img.shields.io/badge/Updated in-v4.72-blue.svg)](../../../release-notes/4.72.md)

<figure>
  <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/genesys.svg" width="80%" />
</figure>

Cognigy includes Genesys Cloud as an additional handover provider, allowing Cognigy users to connect with human agents from Genesys Cloud.

Open messaging facilitates integrations between Genesys Cloud and a third-party messaging service through a webhook.

The Genesys Cloud Open Messaging handover is based on [Open Messaging APIs](https://developer.genesys.cloud/commdigital/digital/openmessaging/openmessaging-apis). [Open messaging](https://developer.genesys.cloud/commdigital/digital/openmessaging/) facilitates integrations between Genesys Cloud and a third-party messaging service through a webhook.

## Setup

### Prerequisites

- You need to have an account in [Genesys Cloud](https://login.genesys.pure.cloud/).
- Activate Genesys Cloud Open Messaging on the Cognigy side:
   - If you have a shared or dedicated SaaS installation, contact Cognigy technical support.
   - If you have an on-premise installation, specify the following feature flags: `FEATURE_ENABLE_GENESYS_CLOUD_OM="true"`, `FEATURE_ENABLE_GENESYS_CLOUD_OM_WHITELIST="organisation1,organisation2"`, `FEATURE_USE_GENESYS_BOT_CONNECTOR_ENDPOINT_WHITELIST="organisation1,organisation2"`. To enable the Genesys Cloud Open Messaging handover provider for all organizations in your installation, use `*` instead of a list of organizations.

### Configure Genesys Cloud Open Messaging

Before starting the integration with Cognigy, create Genesys Cloud Open Messaging on the Genesys side.

#### Create a Platform

To create a platform config for Genesys Cloud Open Messaging, follow these steps:

1. Open the Genesys Cloud interface.
2. Go to **Admin > Message > Platform Configs**.
3. In the upper-right corner, click **+ Create Profile**.
4. In the **Create a configuration profile** window, specify a unique platform config name and click **Create**.
5. In the left-side menu, select **Platforms**.
6. On the **Platforms** page, click **+ Create new Integration > Open Messaging**.
7. On the **Open Messaging** page, fill in the following fields:
    - **Name** — enter a name without spaces for your integration. Copy and save this name. You need to specify this name in the **Deployment name** field on the Cognigy side.
    - **Outbound Notification Webhook URL** — enter `https://endpoint-<your-environment>/handover/genesysCloudOM`. For example, `https://endpoint-app.cognigy.ai/handover/genesysCloudOM`, where environment is `app.cognigy.ai`.
    - **Outbound Notification Webhook Signature Secret Token** — enter the secret into the X-Hub-Signature-256 header generation for webhook requests sent to the outbound notification webhook URL. For the secret, you can choose any arbitrary but sufficiently random string that you want. The external service should use the secret and signature to validate the message originating from Genesys Cloud. This validation is optional but recommended. For more information about validation, see [Validate webhook notifications in the Genesys Cloud Developer Center](https://developer.genesys.cloud/commdigital/digital/openmessaging/validate). Copy and save this token for future usage on the Cognigy side. Note that if you did not copy and save this token at once, after saving the platform configuration, you will need to recreate this token.
8. Click **Save**.
9. From the **Platform Config** list, select the config that you created on the **Platform Configs** page.
10. From the **Supported Content Profile** list, select `default`.
11. Click **Save**.

Your Open Messaging platform will appear in the platform list.

#### Create a Queue

To create a Queue, follow these steps:

1. Open the Genesys Cloud interface.
2. Go to **Admin > Contact Center > Queues**.
3. On the **Queues** page, click **Create Queue**.
4. In the left-side **Create Queue** window, fill in the following fields:
    - **Name** — enter a unique name of the queue. Save and copy this name for later use.
    - **Division** — select `Home`.
5. Click **Save**. Your queue will appear in the queue list.
6. Open the queue settings by selecting this queue from the list.
7. Copy the Queue ID from the page URL. To do this, navigate to the page URL and find the ID between `/queues/` and `/general`. For example, in the URL, `https://apps.mypurecloud.de/directory/#/admin/organization/queues/d59d0280-6664-4896-ad42-1a2715b7178e/general`, the ID `d59d0280-6664-4896-ad42-1a2715b7178e` should be copied.
8. Save the Queue ID for later use in Cognigy.

#### Create an Inbound Message Flow

To create an Inbound Message flow, follow these steps:

1. Open the Genesys Cloud interface.
2. Go to **Admin > Architect**.
3. Click or hover over the **Flows** menu and select **Inbound Message**.
4. Click **Add**. The **Create Flow** dialog box opens.
5. In the **Name** field, specify a unique name for the inbound message flow.
6. Click the **Divisions** list and select the division in which to place the flow.
7. Click **Create Flow**. The flow's configuration page opens.
8. To configure a flow, click **Edit**.
9. Go to **Toolbox**.
10. Drag the **Send Response** action and drop it onto the messaging flow editor.
11. In the **Message Body** of the **Send Response** action, specify `Connected`. 
12. The steps 12–14 are optional.
    Follow them if you want to add a [new embedded version of AI Copilot](#embedded) within your handover.<br>
    *(Optional)* Below the **Send Response** action, add [Get Participant Data](https://help.mypurecloud.com/articles/get-participant-data-action/) action.
13. *(Optional)* In the **Get Participant Data** editor, add the following variables:
    - `queueId`
    - `myLanguage`
    - `mySkills`
    - `userId`
14. *(Optional)* for debugging purposes, you can send this data to the human agent within a conversation. To do that, below the **Get Participant Data** action, add the second **Send Response** action. In the message body, specify variables in a [message sequence with the String Builder](https://help.mypurecloud.com/articles/set-up-a-message-sequence-with-the-string-builder/). 
15. Below the **Send Response** action, place the [Transfer to ACD](https://help.mypurecloud.com/articles/transfer-acd-action/) action to transfer an interaction to a queueing system. 
16. In the **Queue** field of the **Transfer to ACD** action, select the queue to which you want to transfer the interaction. 
17. In the upper-left corner, click **Save**, then **Publish**.

After creating your inbound message flow, you will see this flow in the architect list.

To learn more about designing the flow, see [Configure Inbound Message Flow](https://help.mypurecloud.com/articles/inbound-message-flows/) settings.


#### Set up Message Routing

To set up Message Routing, follow these steps:

1. Open the Genesys Cloud interface.
2. Go to **Admin > Routing > Message Routing**.
3. In the upper-right corner, click **+ Attach New Addresses to a Flow**.
4. On the **Attach New Addresses** page, navigate to the **Select Flow** list.
5. From the **Select Flow** list, choose the Inbound Message Flow you created.
6. From the **Select Addresses** section, choose the Open Messaging platform you created and click **Attach Address**. 
7. Click **Save**.

Your Message Routing configuration will appear in the message routing list.

#### Configure Credentials

To configure credentials, follow these steps:

1. Open the Genesys Cloud interface.
2. Go to **Admin > Integrations > OAuth**.
3. Click **+ Add Client**.
4. On the **Client Details** tab, provide a unique name in the **App Name** field.
5. On the **Roles** tab, activate the corresponding role for the client. The role must contain at least a minimum scope of the following permissions:
    - `messaging:integration:view` (Messaging > Integration > View)
    - `conversations:message:receive` (Conversation > Message > Receive)
    - `conversations:message:create` (Conversation > Message > Create)
    - `conversation:webmessaging:view` (Conversation > Webmessaging > View)
    - `conversation:message:view` (Conversation > Message > View)
    - `analytics:conversationDetail:view` (Analytics > Conversation Detail > View)
6. Return to the **Client Details** tab and select **Client Credentials** in the **Grand Types** list.
7. Click **Save**.
8. Copy the Client ID and Client Secret and save them for future use.
9. From the left-side menu, select **Authorized Applications**.
10. In the upper-right corner, click **+ Authorize a Client**.
11. In the **Authorize Client** window, enter the Client ID that you copied and saved previously.
12. Click **Authorize Client**.

Once your client is authorized, you can start configuring Genesys Handover Provider on the Cognigy side.

### Create an Endpoint

To start using Genesys Cloud as a handover provider with Cognigy.AI, follow these steps:

1. Open the Cognigy.AI interface.
2. Go to **Deploy > Endpoints**.
3. Open the Endpoint where you want to enable Handover to Genesys Cloud.
4. In the **Configuration Information** section, copy the Config URL and save it for future use.
5. Scroll down to **Handover Settings** and select **Genesys Cloud Open Messaging** from the list.
6. Fill in the following fields:
    - **Host** — enter the login URL for Genesys Cloud customers, which varies by region, such as `mypurecloud.de` for Germany. You can use the base domain like `mypurecloud.com` or `cac1.pure.cloud`, omitting `apps.` or `login.` part. For more on Genesys Cloud regions, refer to [AWS regions for deployment](https://help.mypurecloud.com/articles/aws-regions-for-genesys-cloud-deployment/).
    - **Deployment Name** — specify the Open Messaging platform name that you created [on the Genesys side](#create-a-platform).
    - **Queue** — enter the Queue ID that you copied when you created a queue [on the Genesys side](#create-a-queue).
    - **Webhook Secret** — specify the Outbound Notification Webhook Signature Secret Token that you created [on the Genesys side](#create-a-platform).
    - **Client ID** — enter the Client ID that you generated [on the Genesys side](#configure-credentials).
    - **Client Secret** — enter the Client Secret that you generated [on the Genesys side](#configure-credentials).
7. Activate the **Send Profile information** setting if you want to send user information, such as the first and last name, to the human agent.
8. Click **Save**.

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

To test connection, click **Open Demo Web Chat**.

#### (Optional) Send Genesys Status and Bot Messages to End Users

_(Optional)_ Status and Bot Messages configured within Genesys can be sent to the Cognigy Flow and displayed to the user at the Endpoint.

By default, human agents receive messages from the Genesys bot that are configured in the Inbound Message flow on the Genesys side. Suppose you have configured the conversation status and wait time: in that case, such information will be displayed only to the human agent in the conversation as separate messages from the Genesys bot. However, this information could be useful to the end user. To resend messages from the Genesys bot to the end user, you need to extend the main Flow on the Cognigy side by adding additional Nodes below the Handover to Agent Node. In the Queue flow in Genesys, for example, this feature allows to display the queue position to the user while they are waiting for the available human agent. 

If you wish to display Queue Position messages to the users, be sure to configure a Queue Message Flow in Genesys first.

To enable this feature, use the `GENESYS_CLOUD_OM_HANDLE_BOT_MESSAGE: "true"` feature flag.

To display Genesys Status and Bot messages, follow these steps within your Cognigy Flow:

1. In your chosen Handover Flow, set a **Lookup** Node below the **Handover to Agent** Node. Set **Lookup** Node as your Entrypoint.
2. For the **Type** field within the **Lookup** Node, select **Handover Status**.
3. For the child **Case** Node, specify `genericHandoverUpdate` in the **Value** field.
4. Add your **Say** Node under the **Case** Node to display the messages to the end user. Select **Text** from the **Output Type** list, and in the **Text** field enter the following **CognigyScript**:  `{{ "{{ input.data.request.text }}" }}`. The script will then query Genesys for the relevant data, such as a queue position.
5. In the Handover Settings of the **Say** Node, select **User Only** as the Handover Output Destination.
6. To display all incoming Genesys Status or Bot messages, add a **Go To** Node below the **Say** Node.
7. Open the **Go To** Node. From the **Select Node** list, choose **Lookup**. Scroll down to the **Advanced** section. From the **Execution Mode** list,  select **Go to Node and wait for Input**.

The **Main Flow** on Cognigy.AI should look like this:

<figure>
  <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/genesys/genesys-flow-sample.png" width="80%" />
</figure>


If you use AI Copilot, configure the **Lookup Node** and the **Go To Node** for the the Genesys Status and Bot Messages feature within your AI Copilot flow. Ensure to set the structure above the actual AI Copilot Nodes.

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

- [Create a script](#create-a-script)
- [Add the script to the Inbound Message flow](#add-the-script-to-the-inbound-message-flow)

#### Create a Script

To create a script, follow these steps:

1. Go to Endpoint **Settings > Copilot**.
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
12. In the upper-right corner, go to the **Variables** tab.
13. On the **Variables** tab, go to the **Basic Types** section and click **String**.
14. Create a new variable:<br>
    14.1 In the **Name** field, enter `userId`.<br>
    14.2 In the **Description** field, enter `Cognigy variable`.<br>
    14.3 Enable the **Input** toggle.<br>
    14.4 Click **Apply**.<br>
15. In the upper-left corner of the script page, click **Script > Properties**.
16. In the **Script Properties** section, activate the **Inbound** and **Message** features.
17. In the upper-left corner of the script page, click **Script > Save**, then **Publish**.

#### Add the Script to the Inbound Message Flow

To add the Script to the Inbound Message Flow, follow these steps:

1. Open the Genesys Cloud interface.
2. Go to **Admin > Architect**.
3. Click or hover over the **Flows** menu and select **Inbound Message**.
4. From the flow list, select a flow that you created before.
5. To configure a flow, click **Edit**.
6. In the flow editor, ensure that both the **Get Participant Data** action is added. If you haven't done so already, refer to steps 12-14 in the [Create an Inbound Message Flow](#create-an-inbound-message-flow) section. 
7. Below the **Get Participant Data** action, place [Set Screen Pop](https://help.mypurecloud.com/articles/set-screen-pop-action/) action. The **Set Screen Pop** action must be positioned above the **Transfer to ACD** action.
8. From the **Message Script** list of the **Set Screen Pop** action, select the script created before. 
9. In the **Inputs** action, add `userId` in the **userId** field. 
10. In the upper-left corner, click **Save**, then **Publish**.

## More Information

- [Genesys Cloud Guest Chat](genesys-cloud-guest-chat.md)

