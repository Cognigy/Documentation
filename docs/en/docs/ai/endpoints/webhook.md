# Webhook

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/c514dae-EP_webhook.png" width="100%" />
</figure>

Within our **COGNIGY.AI** platform you're able to connect your Cognigy resources to your **Webhook** by using our Webhook Endpoint integration.

A **Webhook** (sometimes called web callback or HTTP push API) provides information as soon as it is available, to the specified callback URL.

## Generic Endpoint Settings

<div class="divider"></div>

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU Connectors]({{config.site_url}}ai/resources/build/NLUconnectors/)
- [Handover Settings]({{config.site_url}}ai/endpoints/handover-settings/) 

???+ success "Supports Inject & Notify"
    You can use the **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)** functionality with this type of Endpoint.

## Connect your Application

<div class="divider"></div>

You need to run a Webserver that receives POST calls. Enter the **Webhook URL** of your application to which the outputs of the assigned flow get sent to. The **User** and **Password** fields are only used in case you have defined basic authentication for your Webserver.

All **POST** requests that are sent to the **Endpoint URL** are processed by the assigned *Flow* and the triggered outputs are forwarded to the **Webhook URL**. The body of the requests should have the following format:

```JSON
{
  "userId":"userId",
  "sessionId": "someUniqueId",
  "text":"message text",
  "data": {
    "key": "value"
  }
}
```

**Parameters**
*userId* - a user ID of the user who has access to the REST Endpoint in form of a string
*sessionId* - a unique ID that is used to track the current conversation in form of a string
*text* - message text that should get processed by the assigned flow in form of a string
*data* - message data that should get processed by the assigned flow in form of an object

???+ info "Sending text and data"
    You can use the Webhook Endpoint to send either text or data to your Flow. You can choose to send both, but at least one is required. If invalid text and invalid data is specified, then the Webhook Endpoint throws an error.

???+ info "SessionID"
    The sessionId is a unique identifier that is used to keep the state of a conversation. This means that you should generate a new unique ID whenever a new conversation starts, and not on every message. For testing purposes, you can use whatever string value you like as the sessionId, and change it whenever you want a new conversation to start.