# LINE Messenger

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/16e06a7-Line.PNG" width="100%" />
</figure>

Within our **COGNIGY.AI** platform you're able to connect your Cognigy resources to your **LINE** channel by using our Line Endpoint integration. 

## Generic Endpoint Settings

<div class="divider"></div>

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers) 
- [NLU Connectors]({{config.site_url}}ai/resources/build/NLUconnectors)
- [Session Management]({{config.site_url}}ai/endpoints/session-management/)
- [Handover Settings]({{config.site_url}}ai/endpoints/handover-settings/) 

???+ success "Supports Inject & Notify"
    You can use the **[Inject & Notify](doc:inject-notify)** functionality with this type of Endpoint.

## Channel Specific Settings

<div class="divider"></div>

The **Line Setup** dropdown menu is where Cognigy.AI needs to be provided with the credentials to connect with a **Line Channel**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/d0d13cd-lineSetup.PNG" width="100%" />
</figure>

### Channel Access Token

This value is the Line **Channel Access Token** which is obtained from the Line Developer account for each channel that is deployed. This token should be associated with the secret provided below.

### Channel Secret

This value is the Line **Channel Secret** which is associated to a channel access token. This value is obtained from the Line Developer account for each channel that is deployed.

???+ info "Help Center"
    More detailed information on how to set up a **Line Messenger** Endpoint please refer to our Help Center articles [**here**](https://support.cognigy.com/hc/en-us/articles/360016222819).

## More information 

- [Help Center: Line Deployment](https://support.cognigy.com/hc/en-us/articles/360016222819)