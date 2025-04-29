---
title: "Genesys"
slug: "genesys"
hidden: false
---

# Genesys

[![Version badge](https://img.shields.io/badge/Added in-v4.64-blue.svg)](../../../release-notes/4.64.md)

<figure>
  <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/genesys.svg" width="100%" />
</figure>

The Genesys Endpoint connects AI Agents to the [Genesys Cloud CX platform](https://apps.mypurecloud.de/) using a [Genesys Bot Connector](https://help.mypurecloud.com/articles/about-genesys-bot-connector/).

## Prerequisites

- You need to have an account in [Genesys Cloud](https://apps.mypurecloud.de/).
- Activate the Genesys Endpoint on the Cognigy side:
    - If you have a shared or dedicated SaaS installation, contact Cognigy technical support.
    - If you have an on-premises installation, specify the following feature flags: 
        - `FEATURE_USE_GENESYS_BOT_CONNECTOR_ENDPOINT_WHITELIST="organization1,organization2"`. To enable the Genesys Endpoint for all organizations in your installation, use `*` instead of a list of organizations.
        - `FEATURE_ENABLE_AGENT_ASSIST_WORKSPACE_GENESYS_CREDENTIALS_WHITELIST="organization1,organization2"`. Add this feature flag to use Genesys [Notifications APIs](https://developer.genesys.cloud/notificationsalerts/notifications/notifications-apis) with AI Copilot. To enable this feature for all organizations within the Genesys Endpoint in your installation, use `*` instead of a list of organizations.

## Generic Endpoint Settings

Find out about the generic Endpoint settings available with this Endpoint on the following pages:

- [Endpoints Overview](../endpoints/overview.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)
- [Transformer Functions](../endpoints/transformers/transformers.md)

## Specific Endpoint Settings

### Genesys Bot Connector Setup

| Parameter    | Description                                                                                                                                                                                                        |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Verify Token | A verification token for connecting the Cognigy Genesys Endpoint to the Genesys Bot Connector. This token needs to be generated on the Cognigy.AI side and can consist of letters, numbers, and punctuation marks. |

## How to Set up

To set up the Genesys Endpoint, follow these steps:

1. [Configure Genesys Endpoint](#configure-genesys-endpoint)
2. [Configure Genesys](#configure-genesys-cloud-cx)

### Configure Genesys Endpoint

1. In the left-side menu of the Project, go to **Deploy > Endpoints**.
2. On the **Endpoints** page, click **+ New Endpoint**.
3. In the **New Endpoint** section, do the following: <br>
    1. Select the **Genesys** Endpoint type. <br>
    2. Add a unique name.<br>
    3. Select a relevant Flow from the list.<br>
4. In the **Configuration Information** section, copy the Endpoint URL and save it for later usage in Genesys.
5. Activate the **Enable Endpoint** setting.
6. In the **Genesys Bot Connector Setup** section, in the **Verify Token** field, create a verification token for connecting the Cognigy Genesys Endpoint to the Genesys Bot Connector. The token can consist of letters, numbers, and punctuation marks. Save this token for later usage in Genesys.
7. Click **Save**.

### (Optional) Activate AI Copilot

If you want to use [AI Copilot](../../../ai-copilot/overview.md) and [Notifications APIs](https://developer.genesys.cloud/notificationsalerts/notifications/notifications-apis) within the Genesys integration,
create credentials on the Genesys side and configure the **Copilot** settings in the Endpoint.

#### Create Credentials

To configure credentials, follow these steps:

1. Open the Genesys Cloud interface.
2. Go to **Admin > Integrations > OAuth**.
3. Click **+ Add Client**.
4. On the **Client Details** tab, provide a unique name in the **App Name** field.
5. On the **Roles** tab, activate the corresponding role for the client.
6. Return to the **Client Details** tab and select **Client Credentials** in the **Grand Types** list.
7. Click **Save**.
8. Copy the Client ID and Client Secret and save them for future use.
9. From the left-side menu, select **Authorized Applications**.
10. In the upper-right corner, click **+ Authorize a Client**.
11. In the **Authorize Client** window, enter the Client ID that you copied and saved previously.
12. Click **Authorize Client**.

#### Configure Settings for Agent AI Copilot

To configure the AI Copilot workspace settings, follow these steps:

1. In the **Genesys Endpoint settings**, navigate to the **Copilot** section.
2. Configure AI Copilot by creating an [AI Copilot config](https://api-trial.cognigy.ai/openapi#post-/v2.0/agentassistconfigs) and adding a Flow. For more information, refer to the [AI Copilot documentation](../../../ai-copilot/overview.md).
3. Set up Genesys Cloud Credentials:
    - **Connection Name** — create a unique name for your connection.
    - **oAuth2Url** — enter the login URL for Genesys Cloud customers, which varies by region, such as `mypurecloud.de` for Germany. You can use the base domain like `mypurecloud.com` or `cac1.pure.cloud`, omitting the `apps.` or `login.` part. For more information on Genesys Cloud regions, refer to [AWS regions for deployment](https://help.mypurecloud.com/articles/aws-regions-for-genesys-cloud-deployment/).
    - **oAuth2ClientId** — enter the Client ID that you generated [on the Genesys side](#create-credentials).
    - **oAuth2ClientSecret** — enter the Client Secret that you generated [on the Genesys side](#create-credentials).
    - **oAuth2Scope** — enter `*`. This system field is only necessary for authorizing the application.
4. Click **Create**.
5. Click **Save**.

### Configure Genesys Cloud CX

#### Create a Genesys Bot Connector

1. Open the Genesys Cloud interface.
2. Navigate to **Admin > Integrations**.
3. Click **+ Integrations** in the upper-right corner.
4. Choose the **Genesys Bot Connector** card and click **Install**.
5. Assign a unique name to your integration.
6. On the **Configuration** tab, navigate to the **Properties** section.
7. In the **Bot Connector Handle Utterance URI** field, input the Endpoint URL value saved earlier on the Cognigy side.
8. On the **Credentials** tab, click **+Add Credentials Field**. Enter the following credentials:<br>
    - **Field Name** — use `verify-token` as the name.<br>
    - **Value** — enter the token created earlier in the **Verify Token** field on the Cognigy side.
9. Click **Ok**, then **Save**.
10. On the **Details** tab, click **Copy Integration ID** and save this ID for later use.

Your integration will be listed among integrations.

#### Add a Bot for the Bot Connector Integration

1. Open the [Genesys Developer Tools](https://developer.genesys.cloud/developer-tools/#/api-explorer) interface.
2. From the left-side menu, select **API Explorer**.
3. Navigate to **Integrations > BotConnector**.
4. Select the **PUT: Set a list of botConnector bots plus versions for this integration** option from the list.
5. Fill in the **integrationId** field with the **Integration ID** that you copied and saved earlier.
6. Within the **BODY** editor, insert the following JSON:

      ```json
      {
         "chatBots": [
            {
               "id": "<your UUID>",
               "name": "Cognigy.AI Bot",
               "versions": [
                  {
                     "version": "1",
                     "supportedLanguages": ["en-us"],
                     "intents": [
                        {
                           "name": "Success",
                           "slots": {
                              "processedTimestamp": {
                                 "name": "processedTimestamp",
                                 "type": "integer"
                              }
                           }
                        }
                     ]
                  }
               ]
            }
         ]
      }   
      ```
   The `id` field should contain your UUID, which you can create using an [online UUID generator](https://www.uuidgenerator.net/version4).<br>

7. Click **Send Request**.

#### Build an Inbound Message Flow

To create a digital bot flow in Architect, configure the inbound message flow:

1. Go to **Admin > Architect**.
2. Click or hover over the **Flows** menu and select **Inbound Message**.
3. Click **Add**. The **Create Flow** dialog box opens.
4. In the **Name** field, specify a unique name for the inbound message flow.
5. Click the **Divisions** list and select the division in which to place the flow.
6. Click **Create Flow**. The flow's configuration page opens.
7. To configure a flow, click **Edit**.
8. Go to **Toolbox**.
9. Drag the **Call bot Connector** action and drop it onto the messaging flow editor. 
10. In the right-side **Call Bot Connector** window, fill in the following fields:
    - **Bot Integration** — select the integration you created.
    - **Bot Name** — select the bot you created.
    - **Bot Version** — select the bot version you created.
11. Drag the **Send Response** action and drop it below the **Success** action. 
12. Drag the **Send Response** action and drop it below the **Failure** action.
13. In the **Message Body** of the **Send Response** actions, specify `success message` and `fail message`. 
14. Below the **Send Response** actions, place the [Transfer to ACD](https://help.mypurecloud.com/articles/transfer-acd-action/) action to transfer an interaction to a queueing system. 
15. In the **Queue** field of the **Transfer to ACD** action, select the queue to which you want to transfer the interaction.
    
    <figure>
      <img src="../../../../_assets/ai/deploy/endpoint-reference/genesys-flow-example.png" width="100%"/>
    </figure>

16. In the upper-left corner, click **Save**, then **Publish**.

After creating your inbound message flow, you will see this flow in the architect list.

To learn more about designing the flow, see [Configure Inbound Message Flow](https://help.mypurecloud.com/articles/inbound-message-flows/) settings.

#### Configure a Messenger

To create a new version of a messenger configuration and a messenger deployment, follow these steps:

1. Go to **Admin > Message > Messenger Configurations**.
2. Click **+ New Configuration**.
3. In the **Name** field, provide a unique configuration name reflecting your bot integration.
4. From the **Select your Supported Languages** list, pick available UI languages and customize text labels. Browser language determines the user's language.
5. In the **Select Default Language** field, choose a default language for cases when browser language is not detected or is not on the list.
6. Click **Save New Version**. Your configuration will appear in the configuration list.
7. Go to **Admin > Message > Messenger Deployments**.
8. Click **+ New Deployment**.
9. In the **Name** field, enter a unique deployment name that corresponds to your messenger configuration.
10. From the **Select your Configuration** list, pick the message configuration you recently created.
11. In the **Restrict domain access** section, select **Allow all domains** or specify trusted domains where Messenger can run.
12. From the **Select your Architect Flow** list, choose an existing published inbound message flow to trigger bot behavior or connect users with agents. 
13. In the **Deploy your snippet** section, click **Copy to Clipboard** to copy a code snippet onto the website pages where you would like the Messenger to appear. After deploying the snippet, any future saved changes to the configuration and deployment will be applied automatically. 
14. Click **Save**. Your deployment will then appear in the deployment list. 
15. To test the AI Agent, visit [CodeSandbox](https://codesandbox.io/) and select a default **HTML** project. Paste the copied code snippet into the `<body>` element of the HTML document.

To check the AI Agent's performance, access the installation that your server administrator has deployed.

## What's Next?

Now you can configure Say, Question, and Optional Question Nodes by selecting the [Genesys](../../build/node-reference/basic/say.md) channel in the Node Editor settings. It's important to create messages that are compatible with the Genesys Endpoint, as the Genesys channel supports a [limited set of output types](../endpoints/content-conversion.md).