---
 title: "Inject & Notify" 
 slug: "inject-and-notify" 
 hidden: false 
---
# Inject & Notify

Usually a Chat is an immediate interaction between the User and a Bot. However, sometimes the Bot might need to handle an external long-running process with uncertain execution length and use the result for the running chat session. For example, the Bot user is uploading a document to the Bot, which the Bot has then to upload to an external platform, which then will be analyzed by the external platform and the result should be then used by the Bot in a response to the user. 

As soon as you have those long-running processes, you can no longer handle this within Cognigy.AI alone. The external long-running process needs to trigger Cognigy.AI after it is finished, so that the Chat can continue properly.

For this use case, Cognigy.AI provides the Notify and Inject-API.

## Inject

Our inject API can be used to send an arbitrary pair of **text** and **data** into our system. The input will then get forwarded into the flow. The correct flow is determined by the endpoint which itself is identified using the given **URLToken**. Inject should be used if you want to send complex information to the bot user. You can e.g. build a flow that generates a nice **list** or **gallery element** based on a certain input. You send a simple message into your flow, e.g. "makeGallery" and the flow sends the composed gallery through the correct endpoint to the bot user. Notify can't be utilized for this.

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoints/inject.png" width="100%" />
  <figcaption>Schema which shows the data-flow during an inject call</figcaption>
</figure>

## Notify

Notify, in contrast to inject, can only be used to send a simple **text** and/or **data** message directly to the user. The message will not get forwarded into a flow and hence you don't have further controlled about what the user actually gets.

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoints/notify.png" width="100%" />
  <figcaption>Schema which shows the data-flow during a notify call</figcaption>
</figure>

## Triggering the External long-running process

Our /inject and /notify APIs need a certain payload you will need to send, in order to use their functionality. The necessary data you will need is exposed within the [Input Object](../../test/interaction-panel/input.md) and can therefore easily be accessed with [CognigyScript](../../build/cognigyscript.md) and the JSON syntax. Take a look at our [API Reference](https://api-trial.cognigy.ai/openapi#post-/v2.0/endpoint/inject.md) to get more information about /inject and /notify.

You can use the [HTTP Request-Node](../../build/node-reference/service/http-request.md) to trigger the external long-running process, where you can send the necessary information for notify and inject next to the external specific payload.


| Field in Inject & Notify | Cognigy Script |
|--------------------------|----------------|
| text                     | ci.text        |
| data                     | ci.data        |
| sessionId                | ci.sessionId   |
| userId                   | ci.userId      |
| URLToken                 | ci.URLToken    |

## Notify and Inject in Transformers


If you do not have control of the payload that the external service sends to the Inject or Notify API, then it can be controlled by using the [Notify Transformer](transformers/notify-transformer.md) or [Inject Transformer](transformers/inject-transformer.md). This allows you to transform the request and extract the necessary fields from the request body as described above before the actual Notify / Inject API is called.

The API URL for the Notify and Inject APIs are different if the Transformer should be executed. For these APIs, the request should not be sent to the API service, but instead to the Endpoint service, meaning that you need to use the base Endpoint URL for your system (e.g. https://endpoint-demo.cognigy.ai). The API URLs are the following:

Notify: {endpoint-url}/notify/{URLToken}

inject: {endpoint-url}/inject/{URLToken}

Where the URLToken is the URLToken of the Endpoint that should be executed. The Transformer functions should also be implemented in this Endpoint.

!!! warning "API Differences"
    The URL for the Notify and Inject API is different if a Transformer should be used. The API URL is then:

    Notify: {endpoint-url}/notify/{URLToken}

    inject: {endpoint-url}/inject/{URLToken}

## Channel Support

Our inject- and notify-APIs don't support all channels we are compatible with. The main reason for this is, that we can't send messages to some of our endpoints at any time. In the case of Alexa we e.g. can't send a message to an Alexa powered device, as a communication channel can only be initialized from their side.

The following list shows all endpoints both APIs are compatible with:

- [Facebook (Meta) Messenger](../endpoint-reference/facebook-messenger.md)
- [LINE Messenger](../endpoint-reference/line-messenger.md)
- [Azure Bot Services](../endpoint-reference/azure-bot-services.md)
- [RingCentral Engage](../endpoint-reference/ringcentral-engage.md)
- [Slack](../endpoint-reference/slack.md)
- [Socket](../endpoint-reference/socketio.md)
- [Sunshine Conversations](../endpoint-reference/sunshine-conversations.md)
- [Voice Gateway](../endpoint-reference/voice-gateway.md)
- [AudioCodes](../endpoint-reference/audiocodes.md) (Inject/Notify is only supported when the Async Mode setting is enabled)
- [WhatsApp](../endpoint-reference/whatsapp.md)
- [Webchat](../endpoint-reference/webchat.md)
- [Webhook](../endpoint-reference/webhook.md)