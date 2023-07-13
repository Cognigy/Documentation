---
 title: "Azure Bot Services" 
 slug: "azure-bot-services" 
 hidden: false 
---
# Azure Bot Services

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/501691c-AzureBotServices.PNG" width="100%" />
</figure>

Within our **Cognigy.AI** platform you're able to connect your Cognigy Agent to **Azure Bot Services** by using our Azure Bot Services Endpoint integration.

## Generic Endpoint Settings

<div class="divider"></div>

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Session Management]({{config.site_url}}ai/endpoints/session-management/)
- [Handover Settings]({{config.site_url}}ai/endpoints/handover-settings/)
- [Real Time Translation Settings]({{config.site_url}}ai/endpoints/real-time-translation-settings) 

!!! tip "Supports Inject & Notify"
    You can use the **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)** functionality with this type of Endpoint.

## Channel Specific Settings

<div class="divider"></div>
The **Azure Bot Services Settings** dropdown menu is where Cognigy.AI needs to be provided with the credentials to connect with an Azure Bot Services deployment.

### Access Scope

This settings determines who can access this application, choosing being **Multi Tenant** and **Single Tenant**.

#### Restrict to Azure AD Accounts

When choosing **Multi Tenant**, you will have an additional toggle. The **Restrict to Azure AD Accounts** setting prevents public access to your Endpoint, and only allows access to Teams accounts that are managed by an organization in Azure Active Directory.

### Microsoft App ID

This value is the **Microsoft App ID** which is obtained in the settings page of your bot in the Azure Bot Services Dashboard.

### Microsoft App Password

This value is the **Microsoft App Password** of your Bot, also referred to as the **Client Secret**. This is obtained by creating a new Client Secret in the App Registrations page for your bot in the Azure Bot Services Dashboard.

### SSO Connection Name

This value is the **SSO Connection Name** when using this endpoint with an SSO integration.

!!! note "Help Center"
    More detailed information on how to set up an **Azure Bot Services** Endpoint refer to our Help Center articles [**here**](https://support.cognigy.com/hc/en-us/articles/360016183720).

### Microsoft Teams

[![Version badge](https://img.shields.io/badge/Added in-v4.9.0-blue.svg)]({{config.site_url}})

As of release v4.9 the display changes for clicked postback buttons in a Microsoft Teams chat. 

When clicking the postback button in a [quick reply]({{config.site_url}}ai/flow-nodes/message/say/#text-with-quick-replies), [gallery]({{config.site_url}}ai/flow-nodes/message/say/#gallery), [list]({{config.site_url}}ai/flow-nodes/message/say/#list), or [button]({{config.site_url}}ai/flow-nodes/message/say/#text-with-buttons) configuration, the button title is displayed now on the user side of the chat. For other Azure bot service channels, this change is not relevant.


<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/Azure_Bot_Service_with_Microsoft_Teams_chat_1.svg" width="100%" />
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/c891b0a-Eatery_make_order_2.svg" width="100%" />
</figure>

### Channel Priority when using Azure Bot Services

You can use the Azure Bot Services Endpoint to serve multiple channels, such as Line, Messenger, Microsoft Teams, and others. 

To define where the output will be delivered, select these channels in the Say, Question, or Optional Question Nodes. 

However, the sequence of using these channels in the Node is determined by their fixed priority.

Priority rules exist for the following supported Azure Bot Services channels:

- Line
- Messenger
- Microsoft Teams
- Slack
- SMS
- Azure Bot Services
- AI

#### Examples

Consider the following examples when using the Azure Bot Services Endpoint from the perspective of channel priority.

**Example 1**

The Say Node is configured with AI, Azure Bot Services, and Microsoft Teams channels.

Result: The user will receive the text output from the Microsoft Teams channel.

**Example 2**

The Question Node is configured with AI and Azure Bot Services channels.

Result: The user will receive the text output from the Azure Bot Services channel.

**Example 3**

The Optional Qestion Node is configured with only the AI channel.

Result: The user will receive the text output from the AI channel.

## More information


- [Help Center: Microsoft Bot Framework Deployment ](https://support.cognigy.com/hc/en-us/articles/360016183720-Microsoft-Bot-Framework-Deploy-an-Endpoint)
- [Help Center: Microsoft Bot Framework Adaptive Cards](https://support.cognigy.com/hc/en-us/articles/360016184000-Microsoft-Bot-Framework-Using-Adaptive-Cards)