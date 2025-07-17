---
 title: "Inject and Notify" 
 slug: "inject-and-notify" 
 description: "Inject and Notify API requests allow you to handle external processes that need to communicate back to an active session in Cognigy.AI."
 hidden: false
 tags:
  - api
  - external processes
  - inject
  - notify
---
# Inject and Notify

The _Inject_ and _Notify_ API requests handle external processes that need to communicate back to an active session in Cognigy.AI. You can use these API requests when an AI Agent needs to run external processes, for example, document analysis, outside of Cognigy.AI before continuing the conversation. After the external process has concluded, it needs to trigger Cognigy.AI.

## Limitations

{! _includes/ai/ac-endpoint-deprecation.md !}

Only the following Endpoints support the inject and notify API requests:

- [Facebook (Meta) Messenger](../endpoint-reference/facebook-messenger.md)
- [LINE Messenger](../endpoint-reference/line-messenger.md)
- [Azure Bot Services](../endpoint-reference/azure-bot-services.md)
- [RingCentral Engage](../endpoint-reference/ringcentral-engage.md)
- [Slack](../endpoint-reference/slack.md)
- [Socket](../endpoint-reference/socketio.md)
- [Sunshine Conversations](../endpoint-reference/sunshine-conversations.md)
- [Voice Gateway](../endpoint-reference/voice-gateway.md)
- [AudioCodes](../endpoint-reference/audiocodes.md)
- [WhatsApp](../endpoint-reference/whatsapp.md)
- [Webchat](../endpoint-reference/webchat.md)
- [Webhook](../endpoint-reference/webhook.md)

## Inject

An [inject API request](https://api-trial.cognigy.ai/openapi#post-/v2.0/endpoint/inject) sends text and data from an external service to a Flow. This approach allows you to convert them into complex information, for example, into lists and galleries, and then send it to the user through the Endpoint. You can send a simple message to your Flow, for example, "makeList", along with the data from an external API request, and use the Nodes in the Flow to recognize the message and send a list to the user with information from an external API.

## Notify

A [notify API request](https://api-trial.cognigy.ai/openapi#post-/v2.0/endpoint/notify) sends text or data to the user through the Endpoint. With this approach, the user receives the text or data from the external API without any additional Flow logic.

## How to Use Inject and Notify

You can use the [HTTP Request Node](../../build/node-reference/service/http-request.md) or [Code Node](../../build/node-reference/basic/code/overview.md) to trigger external processes through the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi) and pass the necessary data to the [inject](https://api-trial.cognigy.ai/openapi#post-/v2.0/endpoint/inject) and [notify](https://api-trial.cognigy.ai/openapi#post-/v2.0/endpoint/notify) API requests in addition to the specific external payload.

You can retrieve the necessary data for the inject and notify payload from the [Input object](../../build/ai-agent-memory/input.md) with [CognigyScript](../../build/cognigyscript.md), as follows:

| Payload Parameter | CognigyScript  |
|-------------------|----------------|
| text              | ci.text        |
| data              | ci.data        |
| sessionId         | ci.sessionId   |
| userId            | ci.userId      |
| URLToken          | ci.URLToken    |

For more information, refer to the [Inject](https://api-trial.cognigy.ai/openapi#post-/v2.0/endpoint/inject) and [Notify](https://api-trial.cognigy.ai/openapi#post-/v2.0/endpoint/notify) API references.

## Inject and Notify in Transformers

There are cases where you don't have control over the payload that the external process sends to the inject or notify API requests. In these cases, you can use the [notify](transformers/notify-transformer.md) or [inject](transformers/inject-transformer.md) transformers to change the request and extract the necessary parameters from the request body before calling the actual notify or inject API.

The URL for the inject and notify APIs is different when you use transformers. For these APIs, you shouldn't send the request to the API service but to the Endpoint service. You need to use the base [Endpoint URL](../endpoints/overview.md) from the Endpoint settings, for example, `https://endpoint-trial.cognigy.ai`:

- Notify: `https://endpoint-trial.cognigy.ai/notify/{URLToken}`
- Inject: `https://endpoint-trial.cognigy.ai/inject/{URLToken}`

Where the `URLToken` is the URL Token of the Endpoint that should be executed. The transformer functions are applied to this Endpoint.

## More Information

- [Cognigy.AI API](https://api-trial.cognigy.ai/openapi)
- [Inject Transformer](transformers/inject-transformer.md)
- [Notify Transformer](transformers/notify-transformer.md)
