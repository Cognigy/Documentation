---
 title: "Azure Bot Services" 
 slug: "azure-bot-services" 
 hidden: false 
---
# Azure Bot Services

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/501691c-AzureBotServices.PNG" width="100%" />
</figure>

Within our **COGNIGY.AI** platform you're able to connect your Cognigy Agent to **Azure Bot Services** by using our Azure Bot Services Endpoint integration.

## Generic Endpoint Settings

<div class="divider"></div>

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Session Management]({{config.site_url}}ai/endpoints/session-management/)
- [Handover Settings]({{config.site_url}}ai/endpoints/handover-settings/) 

???+ success "Supports Inject & Notify"
    You can use the **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)** functionality with this type of Endpoint.

## Channel Specific Settings

<div class="divider"></div>
The **Bot Framework Settings** dropdown menu is where Cognigy.AI needs to be provided with the credentials to connect with an Azure Bot Services deployment.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/71157ce-azureSettings.PNG" width="100%" />
</figure>

### Microsoft App Id

This value is the **Microsoft App ID** which is obtained in the settings page of your bot in the Azure Bot Services Dashboard.

### Microsoft App Password

This value is the **Microsoft App Password** of your Bot, also referred to as the **Client Secret**. This is obtained by creating a new Client Secret in the App Registrations page for your bot in the Azure Bot Services Dashboard.

???+ info "Help Center"
    More detailed information on how to set up a **Azure Bot Services** Endpoint please refer to our Help Center articles [**here**](https://support.cognigy.com/hc/en-us/articles/360016183720).

### Microsoft Teams

[![Version badge](https://img.shields.io/badge/Added in-v4.9.0-blue.svg)]({{config.site_url}})

As of release v4.9 the display changes for clicked postback buttons in a Microsoft Teams chat. 

When clicking the postback button in a [quick reply]({{config.site_url}}ai/flow-nodes/message/say/#text-with-quick-replies), [gallery]({{config.site_url}}ai/flow-nodes/message/say/#gallery), [list]({{config.site_url}}ai/flow-nodes/message/say/#list), or [button]({{config.site_url}}ai/flow-nodes/message/say/#text-with-buttons) configuration, the button title is displayed now on the user side of the chat. For other Azure bot service channels, this change is not relevant.


<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/0d08fc8-Azur_Bot_Service_with_Microsoft_Teams_chat_1.svg" width="100%" />
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/c891b0a-Eatery_make_order_2.svg" width="100%" />
</figure>

## More information


- [Help Center: Microsoft Bot Framework Deployment ](https://support.cognigy.com/hc/en-us/articles/360016183720-Microsoft-Bot-Framework-Deploy-an-Endpoint)
- [Help Center: Microsoft Bot Framework Adaptive Cards](https://support.cognigy.com/hc/en-us/articles/360016184000-Microsoft-Bot-Framework-Using-Adaptive-Cards)