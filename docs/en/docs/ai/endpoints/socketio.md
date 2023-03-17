---
 title: "Socket.io" 
 slug: "socketio" 
 hidden: false 
---
# Socket.io

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/603e5e6-socket-io-logo.svg" width="100%" />
</figure>

Within our **Cognigy.AI** platform you're able to connect your Cognigy resources to your **socket.io** client by using our Socket Endpoint integration.

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

???+ success "Supports Inject & Notify"
    You can use the **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)** functionality with this type of Endpoint.

## Connect your Application

<div class="divider"></div>

### URL Token

The URL Token is the last part of the displayed Endpoint URL:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/dfe50b1-EP_Socket_URL_token.png" width="100%" />
</figure>

In the given example you would connect to **https://endpoint-trial.cognigy.ai**.

### Sending Messages

Messages are sent by using the **processInput** event with a payload of the following format:

```JSON
{
    "URLToken": "urlToken",
    "sessionId": "sessionId",
    "userId": "user@cognigy.com",
    "passthroughIP": "127.0.0.1",
    "resetFlow": "false",  // Resets the flow and starts a new one from the beginning
    "text": "Example text",  // Can be skipped with "resetFlow": true
    "data": {
        "key": "value"
    }
}
```

When the `resetFlow` flag is set to `true`, the new flow will start from the beginning. Such payload may or may not have a message. If it does then this message will become the first one in a new flow. Don't forget to set `resetFlow` flag to `false` when sending the following messages, otherwise each such message will start a new flow.

### Receiving Messages

Messages can be received by listening to the **output** event. The responses have the following format:

```JSON
{
  "type":"output",
  "data":
  {
    "text":"responseText",
    "data":
    {
      "key":"value"
    }
  }
}
```

### Cognigy Socket Client
Cognigy provides a socket client for connecting with a Cognigy Socket Endpoint. The documentation and open source code for this client is available on the [Cognigy GitHub Page](https://github.com/Cognigy/SocketClient)