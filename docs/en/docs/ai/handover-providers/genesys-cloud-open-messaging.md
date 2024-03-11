---
title: "Genesys Cloud Open Messaging"
slug: "genesys-cloud-open-messaging"
hidden: false
---

# Genesys Cloud Open Messaging

[![Version badge](https://img.shields.io/badge/Updated in-v4.70-blue.svg)](../../release-notes/4.70.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/genesys.svg" width="80%" />
</figure>

<div class="divider"></div>

Cognigy includes Genesys Cloud as an additional handover provider, allowing Cognigy users to connect with human agents from Genesys Cloud.

Open messaging facilitates integrations between Genesys Cloud and a third-party messaging service through a webhook.

The Genesys Cloud Open Messaging handover is based on [Open Messaging APIs](https://developer.genesys.cloud/commdigital/digital/openmessaging/openmessaging-apis). [Open messaging](https://developer.genesys.cloud/commdigital/digital/openmessaging/) facilitates integrations between Genesys Cloud and a third-party messaging service through a webhook.

## Setup
<div class="divider"></div>

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
   - **Name** — enter a name for your integration. Copy and save this name. You need to specify this name in the **Deployment name** field on the Cognigy side.
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
12. Below the **Send Response** action, place the [Transfer to ACD](https://help.mypurecloud.com/articles/transfer-acd-action/) action to transfer an interaction to a queueing system.
13. In the **Queue** field of the **Transfer to ACD** action, select the queue to which you want to transfer the interaction.
14. In the upper-left corner, click **Save**, then **Publish**.

After creating your inbound message flow, you will see this flow in the architect list.

To learn more about designing the flow, see [Configure Inbound Message Flow](https://help.mypurecloud.com/articles/inbound-message-flows/) settings.

#### Set up Message Routing

To set up Message Routing, follow these steps:

1. Open the Genesys Cloud interface.
2. Go to **Admin > Routing > Message Routing**.
3. In the upper-right corner, click **+**.
4. On the **Message Route** tab, navigate to the **Select Flow** list.
5. From the **Select Flow** list, choose the Inbound Message Flow you created.
6. In the **Addresses** section, click **+**.
7. From the **Select Address** list, choose the Open Messaging platform you created and click **Add**.
8. Click **Save**.

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

To test connection, click **Open Demo Web Chat**.

## AI Copilot Workspace

Within Genesys integration, you can use [AI Copilot Workspace](../../ai-copilot/overview.md) as an assistant for your human agents. AI Copilot will be available as a standalone application via the following link:

{! _includes/ai-copilot/url-pattern.md !}

## More Information

- [Genesys Cloud Guest Chat](genesys-cloud-guest-chat.md)