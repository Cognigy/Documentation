---
 title: "WhatsApp" 
 slug: "whatsapp" 
 hidden: false 
---
# WhatsApp


<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/whatsApp-endpoint.png" width="100%" />
</figure>

Within our Cognigy.AI platform, you're able to connect Cognigy resources to the **WhatsApp** Cloud API access via Facebook Developer Dashboard by using our WhatsApp Endpoint integration. 

## Generic Endpoint Settings

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [Session Management]({{config.site_url}}ai/endpoints/session-management/)
- [Real Time Translation Settings]({{config.site_url}}ai/endpoints/real-time-translation-settings)  
- [Handover Settings]({{config.site_url}}ai/endpoints/handover-settings/)

!!! tip "Supports Inject & Notify"
    You can use the **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)** functionality with this type of Endpoint.

## Channel Specific Settings

<div class="divider"></div>

## WhatsApp Setup

The WhatsApp Setup dropdown menu is where Cognigy.AI is provided with the credentials to access the WhatsApp App, created on the Meta/Facebook Developer Dashboard.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/whatsapp-settings.png" width="100%" />
</figure>

### App ID

This value is a unique App ID used by Meta/Facebook Developer Dashboard to identify the WhatsApp App that communicates with the Cloud API. This is a required field.

### Access Token

Access token provided by WhatsApp App on Meta/Facebook Developer Dashboard that enables the communication between Cognigy.AI and WhatsApp Cloud API. This is a required field.


### Phone Number ID

Phone number ID is an ID for a phone number registered on the WhatsApp App or provided by Facebook Developer Dashboard while setting up for testing. This will be used as an ID in the requests made to the WhatsApp Cloud API. This is a required field.

### Verify Token

Verify token is used when verifying the endpoint URL on Meta/Facebook Developer Dashboard. They need to match to make the initial connection.

### App Secret

App Secret is an optional field. This field will be used to add an extra security layer where every request will not only be checked against the Access Token, but also the App Secret.

## WhatsApp Settings

### Message Delay

The amount of time to wait between sending bot replies. Measured in milliseconds.


!!! note "Help Center"
    For more information on how to configure the **Access Token**, **Phone Number**, **App ID** and **App Secret** head over to our Help Center article [**here**](https://support.cognigy.com/hc/en-us/articles/5326220817948).


## More Information

* [HelpCenter: WhatsApp Endpoint: Deploy Native Endpoint](https://support.cognigy.com/hc/en-us/articles/5326220817948)
* [HelpCenter: WhatsApp Endpoint: Get a Permanent Access Token](https://support.cognigy.com/hc/en-us/articles/5326310754332)
* [HelpCenter: WhatsApp Endpoint: Messages Types and Payload Examples](https://support.cognigy.com/hc/en-us/articles/5326454286108)