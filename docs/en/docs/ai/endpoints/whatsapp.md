---
 title: "WhatsApp" 
 slug: "whatsapp" 
 hidden: false 
---
# WhastApp

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/whatsApp-endpoint.png" width="100%" />
</figure>

Within our **COGNIGY.AI** platform you're able to connect your Cognigy resources to your **WhatsApp** Cloud API access via Facebook Developer Dashboard by using our WhatsApp Endpoint integration. 

## Generic Endpoint Settings

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [Handover Settings]({{config.site_url}}ai/endpoints/handover-settings/)

???+ success "Supports Inject & Notify"
    You can use the **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)** functionality with this type of Endpoint.

## Channel Specific Settings

<div class="divider"></div>

## WhatsApp Settings

This dropdown menu is where your Cognigy.AI is provided with the credentials to access your WhatsApp App created on the Meta/Facebook Developer Dashboard.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/whatsapp-settings.png" width="100%" />
</figure>

### App ID

This value is a unique App ID used by Meta/Facebook Developer Dashboard to identify your WhatsApp app that communicated with the Cloud API. This is a required field.

### App Secret

App secret is an optional field. This field will be used if you decide to add an extra security layer where every request will not only be checked against your Bearer token, but also the App Secret.

### Bearer Token

Bearer token provided by WhatsApp App on Meta/Facebook Developer Dashboard that enables the communication between Cognigy.AI and WhatsApp Cloud API. This is a required field.

### Phone Number ID

Phone number ID is an ID for a phone number registered on your WhatsApp app or provided by Facebook Developer Dashboard while setting us for testing. This will be used as an ID in the requests made to the WhatsApp cloud API. This is a required field.


???+ info "Help Center"
    For more information on how to configure the **Bearer Token**, **Phone Number**, **App ID** and **App Secret** head over to our Help Center article [**here**]().


## More information

* [Helpcenter: WhatsApp Endpoint: Deployment]()
* [Helpcenter: WhatsApp Endpoint: Get a Permanent Token]()
* [Helpcenter: WhatsApp Endpoint: Messages Types and Templates]()

!!! My WordDoc that needs to be added to Help center. + Links above added: [https://cognigy-my.sharepoint.com/:w:/p/e_helms/EQlep0VWJNFGtrsw8p5NnzwBKi6WY_t-Z1zyezclQQyJXQ?e=fT35By](https://cognigy-my.sharepoint.com/:w:/p/e_helms/EQlep0VWJNFGtrsw8p5NnzwBKi6WY_t-Z1zyezclQQyJXQ?e=fT35By)