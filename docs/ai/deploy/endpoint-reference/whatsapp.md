---
title: "WhatsApp" 
slug: "whatsapp"
description: "The WhatsApp Endpoint enables you to connect AI Agents to the [WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/) via the [Facebook
(Meta) App Dashboard](https://developers.facebook.com/docs/development/create-an-app/app-dashboard/)."
hidden: false
tags:
  - whatsapp
  - whatsapp endpoint
---

# WhatsApp

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/whatsApp-endpoint.png" width="100%" />
</figure>

The WhatsApp Endpoint enables you to connect AI Agents to the [WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/) via the [Facebook
(Meta) App Dashboard](https://developers.facebook.com/docs/development/create-an-app/app-dashboard/).
This way, the AI Agent can send messages on WhatsApp Messenger and engage in conversations with your end users.

## Prerequisites

- [Registered as a Meta Developer](https://developers.facebook.com/docs/development/register).
- [Created a Facebook (Meta) Business account](https://business.facebook.com/).

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/overview.md) 
- [Session Management](../endpoints/session-management.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)  
- [Handover Settings](../endpoints/handover-settings.md)
- [File Storage](../endpoints/file-storage.md)
- [Inject and Notify](../endpoints/inject-and-notify.md)

## Specific Endpoint Settings

??? info "WhatsApp Setup"
    | Parameter       | Description                                                                                                                                                                                                               |
    |-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | App ID          | A unique App ID used by the Meta/Facebook App Dashboard to identify the WhatsApp app that communicates with the Cloud API.                                                                                                |
    | Access Token    | A token provided by the WhatsApp app on the Meta/Facebook App Dashboard that enables communication between Cognigy.AI and the WhatsApp Cloud API.                                                                         |
    | Phone Number ID | An ID for a phone number registered on the WhatsApp app or provided by the Facebook App Dashboard during setup for testing. This number will be used as an ID in the requests made to the WhatsApp Cloud API.             |
    | Verify Token    | A verification token for connecting the Cognigy WhatsApp Endpoint to the Meta/Facebook App Dashboard. This token needs to be generated on the Cognigy.AI side and can consist of letters, numbers, and punctuation marks. |
    | App Secret      | This parameter can be optional. It adds extra security by requiring both the Access Token and the App Secret for each request.                                                                                            |

??? info "WhatsApp Settings"
    | Parameter     | Description                                                                            |
    |---------------|----------------------------------------------------------------------------------------|
    | Message Delay | The amount of time to wait between sending AI Agent replies. Measured in milliseconds. |

??? info "Session Management"
    | Parameter          | Description                                                                                                   |
    |--------------------|---------------------------------------------------------------------------------------------------------------|
    | Session Expiration | The amount of inactivity after which a session expires. Measured in minutes. The default value is 30 minutes. |

## How to Set Up

To set up the WhatsApp Endpoint, follow these steps:

??? info "1. Configure a WhatsApp App"
    1. Go to the [Create an App Dashboard](https://developers.facebook.com/apps/) page. Click **Create app**, then select **Use Cases > Other**. 
    2. On the **Create an app** page, select **Business app type** and click **Next**. 
    3. Fill in the following fields:
        - **App name** — enter the app name that will show on your **My Apps** page and is associated with your app ID.
        - **Contact email** — enter the email address to contact you about your app. Make sure it is an address you check regularly. Meta/Facebook may contact you about policies, app restrictions, or recovery if your app is deleted or compromised.
        - **Business portfolio** — at this stage, this parameter is optional. Connecting a business portfolio to your app is only required for certain products and permissions.
    4. Enter your account password for confirmation. On the **Add products to your app** page, go to the **WhatsApp** card and click **Set up**. 
    5. You will be asked to add a Meta/Facebook existing Business Account. Select an account and click **Continue**. Confirm the account by going to your email and clicking the received link. 
    6. In the left-side menu of the [App Dashboard](https://developers.facebook.com/docs/development/create-an-app/app-dashboard) interface, select **WhatsApp > Quickstart**. 
    7. In the **WhatsApp Business Platform API** window, select your portfolio from the **Select business portfolio** list. If you don't have one, you need to create it. Click **Continue**. 
    8. In the upper-right corner, go to **WhatsApp > API Setup**. 
    9. In the **Temporary access token** field, copy the value and save it for later use. Note that this token is useful for testing purposes, but it expires after 23 hours. To get a permanent token, refer to the Get a Permanent Access Token section. 
    10. Go to the **Step 1: Select phone numbers** section. Copy the Phone Number ID that is placed under the **Test number** field and save it for later use. 
    11. Go to the **To** field. Click **Select a recipient phone number > Manage phone number list**. Specify your WhatsApp number to which you want to send messages. 
    12. Go to **Step 2: Send messages with the API**, and click **Send message**. You will receive a welcome message on WhatsApp Messenger. The sender will be specified as the number selected in **Step 1: Select phone numbers**. 
    13. In the left-side menu, go to **App settings > Basic**. Copy the ID from the **App ID** field and save it for later use. 
    14. Next to the **App secret** field, click **Show**, confirm the action by entering your password, then copy the secret and save it for later use.

??? info "2. Configure a WhatsApp Endpoint"
    1. In the left-side menu of the Cognigy.AI Project, go to **Deploy > Endpoints**. 
    2. On the **Endpoints** page, click **+ New Endpoint**. 
    3. In the **New Endpoint** section, do the following:
        1. Select the **WhatsApp** Endpoint type.
        2. Add a unique name.
        3. Select a relevant Flow from the list. 
    4. In the **Configuration Information** section, copy the Endpoint URL and save it for later use on the Meta/Facebook App Dashboard. 
    5. Activate the **Enable Endpoint** setting. 
    6. In the **WhatsApp Setup** section, in the **Verify Token** field, create a verification token for connecting the WhatsApp Endpoint to the WhatsApp app. The token can consist of letters, numbers, and punctuation marks. Save this token for later use on the Meta/Facebook App Dashboard. 
    7. Fill in the following fields:
        - **App ID** — enter the App ID that you copied and saved previously.
        - **Access Token** — enter the temporary access token that you copied and saved previously.
        - **Phone Number ID** — enter the Phone Number ID that you copied and saved previously.
        - **App Secret** — enter the App Secret a secret that you copied and saved previously. 
    Save changes.

??? info "3. Complete the WhatsApp Integration"
    1. Open your WhatsApp app that you configured previously. In the left-side menu, go to **WhatsApp > Configuration**.
    2. In the **Webhook** section, click **Edit**.
    3. In the **Edit webhook's callback URL** window, fill in the following fields:
        - **Callback URL** — enter the Webchat Endpoint URL in the Callback URL field.
        - **Verify Token** — enter the token you created in the **WhatsApp Setup** section in the **Verify Token** field.
    4. Click **Verify and Save**. The connection between Cognigy.AI and WhatsApp app will be established.
    5. Subscribe your webhook to the message event. In the **Webhook fields** section, click **Manage**.
    6. In the **Name** column, find `messages`, and in the **Subscribe** column, activate the option for this event.

??? info "4. Get a Permanent Access Token"
    To prevent your connection from expiring after 23 hours, replace the temporary access token with a permanent access token:

    1. On the Meta/Facebook App Dashboard, go to the Business settings of your app. To do so, click the blue link next to the business name.
    2. In the left-side menu of the app, go to **Users > System Users**. Click **Add**. 
    3. Specify a name in the **System Username** field and select a role from the **System User Role** list. Click **Create System User**. 
    4. On the **Assigned assets** page, click **Add Assets**. 
    5. Go to **Apps**, select the app, enable the **Manage App** option, and then save changes. 
    6. Click **Generate Token** and select the app from the **Select App** list for which you want to generate a token. 
    7. From the available permissions, select **whatsapp_business_messaging** and **whatsapp_business_management**, then click **Generate token**. 
    8. Go to the WhatsApp Endpoint on the Cognigy.AI platform. 
    9. In the **WhatsApp Setup** section, go to the **Access Token** field. Replace the temporary access token with the generated access token. Save changes.

## More Information

- [Help Center: WhatsApp Endpoint: Messages Types and Payload Examples](https://support.cognigy.com/hc/en-us/articles/5326454286108)