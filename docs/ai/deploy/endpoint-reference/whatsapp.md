---
title: "WhatsApp" 
slug: "whatsapp" 
hidden: false 
---

# WhatsApp

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/whatsApp-endpoint.png" width="100%" />
</figure>

Within our Cognigy.AI platform, you're able to connect Cognigy resources to the **WhatsApp** Cloud API access via Facebook (Meta) Developer Dashboard by using our WhatsApp Endpoint integration. 

## Generic Endpoint Settings

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/transformers.md) 
- [Session Management](../endpoints/session-management.md)
- [Real Time Translation Settings](../endpoints/real-time-translation-settings.md)  
- [Handover Settings](../endpoints/handover-settings.md)
- [File Storage](../endpoints/file-storage.md)

!!! tip "Supports Inject & Notify"
    You can use the **[Inject & Notify](../endpoints/inject-and-notify.md)** functionality with this type of Endpoint.

## Prerequisites

- [Registration as a Meta Developer](https://developers.facebook.com/docs/development/register)
- Facebook (Meta) Business account

## How to Set up

To set up the WhatsApp Endpoint, follow these steps:

1. [Configure a WhatsApp Endpoint]()

2. [Configure WhatsApp]()

### WhatsApp

1. Go to the [Create an App Dashboard](https://developers.facebook.com/apps/) page.
2. Click **Create app**, then select **Use Cases > Other**.
3. On the **Create an app** page, select **Business app type** and click **Next**.
4. Fill in the following fields:
    - **App name** - add the app name that will show on your My Apps page and is associated with your app ID. You can change the name later in Settings.
    - **Contact email** - add the email address we'll use to contact you about your app. Make sure it is an address you check regularly. We may contact you about policies, app restrictions, or recovery if your app is deleted or compromised.
    - **Business portfolio** - at this stage, this parameter is optional. Connecting a business portfolio to your app is only required for certain products and permissions. You'll be asked to connect a business portfolio when you request access to those products.
5. Enter your account password for confirmation.
6. On the **Add products to your app** page, go to the **WhatsApp** card and click **Set up**.
7. You will be asked to add a Meta/Facebook existing Business Account. Select your desired account and click **Continue**.
8. Confirm the account by going to your email and clicking the received link.
9. In the left-side menu of the [App Dashboard](https://developers.facebook.com/docs/development/create-an-app/app-dashboard) interface, select **WhatsApp > Quickstart**.
10. In the **WhatsApp Business Platform API** window, select your portfolio from the **Select business portfolio** list. If you do not have one, you need to create it. Click **Continue**.
11. In the upper-right corner, go to **WhatsApp > API Setup**.
12. In the **Temporary access token** field, copy the value and save it for later use.
13. Go to the **Step 1: Select phone numbers** section. Copy the Phone Number ID that is placed under the **Test number** field and save it for later use.
14. Go to the **To** field. Click **Select a recipient phone number > Manage phone number list**. Specify your WhatsApp number to which you want to send messages.
15. Go to **Step 2: Send messages with the API**, and click **Send message**. You will receive a welcome message in the WhatsApp chat. The sender will be specified as the number selected in **Step 1: Select phone numbers**. 
16. In the left-side menu, go to **App settings > Basic**. Copy the id from the **App ID** field and save it for later use.
17. Next to the **App secret** field, click **Show**, confirm the action by entering your password, then copy the secret.

## Configure the Endpoint Settings

1. Go to the Cognigy.AI interface.
2. In the left-side menu of your project, click **Deploy > Endpoints**.
3. On the **Endpoints** page, click **+ New Endpoint**.
4. In the **New Endpoint** section, do the following:
    - **4.1** Select the **WhatsApp** Endpoint type.
    - **4.2** Add a unique name.
    - **4.3** Select a relevant Flow from the list.
5. In the **Configuration Information** section, copy the Endpoint URL and save it for later use in the WhatsApp integration.
6. Activate the **Enable Endpoint** setting.
7. In the **WhatsApp Setup** section, in the **Verify Token** field, create a verification token for connecting the WhatsApp Endpoint to the WhatsApp App. The token can consist of letters, numbers, and punctuation marks. Save this token for later use in Genesys.
8. Fill in the following fields:
    - **App ID** - a unique App ID used by the Meta/Facebook Developer Dashboard to identify the WhatsApp App that communicates with the Cloud API.
    - **Access Token** - a token provided by the WhatsApp App on the Meta/Facebook Developer Dashboard that enables communication between Cognigy.AI and the WhatsApp Cloud API. This is a required field.
    - **Phone Number ID** - the Phone Number ID is an ID for a phone number registered on the WhatsApp App or provided by the Facebook Developer Dashboard during setup for testing. This will be used as an ID in the requests made to the WhatsApp Cloud API. This is a required field.
    - **App Secret** - a secret that provides an extra layer of security, where every request will be checked not only against the Access Token but also the App Secret.
9. Click **Save**.

## Complete the WhatsApp Integration

1. In the left-side menu, go to **WhatsApp > Configuration**.
2. In the **Webhook** section, click **Edit**.
3. In the **Edit webhook's callback URL** window, fill in the following fields:
    - **Callback URL**: Add the Webchat Endpoint URL into the Callback URL field.
    - **Verify Token**: Add the token you created in the WhatsApp Endpoint Setup section to the Verify Token field.
4. Click **Verify and Save**.
5. Subscribe your webhook to the message event. In the **Webhook fields** section, click **Manage**.
6. In the **Name** column, find `messages`, and in the **Subscribe** column, activate the option.

## Channel Specific Settings

## WhatsApp Settings

### Message Delay

The amount of time to wait between sending bot replies. Measured in milliseconds.

## More Information

* [HelpCenter: WhatsApp Endpoint: Deploy Native Endpoint](https://support.cognigy.com/hc/en-us/articles/5326220817948)
* [HelpCenter: WhatsApp Endpoint: Get a Permanent Access Token](https://support.cognigy.com/hc/en-us/articles/5326310754332)
* [HelpCenter: WhatsApp Endpoint: Messages Types and Payload Examples](https://support.cognigy.com/hc/en-us/articles/5326454286108)