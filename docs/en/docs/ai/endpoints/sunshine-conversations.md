# Sunshine Conversations

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/2ae70b9-SunshineConversations.PNG" width="100%" />
</figure>

Within our **COGNIGY.AI** platform you're able to connect your Cognigy Agent to your **Sunshine Conversations application** by using our Sunshine Conversations Endpoint.

???+ info "Where is the Smooch Endpoint?"
    This Endpoint was previously known as the Smooch Endpoint. Smooch was acquired by Zendesk in 2019 and renamed to Sunshine Conversations.

## Generic Endpoint Settings

<div class="divider"></div>

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU Connectors]({{config.site_url}}ai/resources/build/NLUconnectors/)
- [Session Management]({{config.site_url}}ai/endpoints/session-management/)
- [Handover Settings]({{config.site_url}}ai/endpoints/handover-settings/) 

???+ success "Supports Inject & Notify"
    You can use the **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)** functionality with this type of Endpoint.


# Channel Specific Settings

<div class="divider"></div>

The values of the following fields are used to communicate with your Sunshine Conversations app. All values can be retrieved from the Sunshine Conversations platform.

### API Version

Cogngiy.AI supports the V1.1 and V2 APIs offered by Sunshine Conversations. The selection in this field must match the API version used to create the webhook integration in the Sunshine conversations app.

### Key ID

The API Key ID from your Sunshine Conversations app. This value is typically in the format "app_XXXXXXXXXXXXXXXXXXXXXXXX" and must be the API Key ID associated with the secret entered in the following field.

### Secret

Your Sunshine Conversations app's Key ID SECRET that is a randomly generated API key secret from Sunshine Conversations. The value of this field must be the SECRET associated with the API Key ID entered in the previous field.

### URI

The URI where we send messages to your Sunshine Conversations app. E.g. https://app.smooch.io (ensure the "/" is omitted from the end of the URI)



???+ info "Help Center"
    More detailed information on how to set up a **Sunshine Conversations** Endpoint please refer to our Help Center articles [**here**](https://support.cognigy.com/hc/en-us/articles/360016307699).


## More information

- [Help Center: Sunshine Conversations Deployment](https://support.cognigy.com/hc/en-us/articles/360016307699-Sunshine-Conversations-Deploy-an-Endpoint)
- [Help Center: Sunshine Conversations Zendesk Handovers](https://support.cognigy.com/hc/en-us/articles/360016224599-Sunshine-Conversations-Zendesk-Handovers)