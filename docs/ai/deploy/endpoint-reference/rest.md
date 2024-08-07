---
title: "REST" 
slug: "rest" 
hidden: false 
---
# REST

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/REST.png" width="100%" />
</figure>

Within our **Cognigy.AI** platform, you're able to connect your Cognigy resources to your **Rest** client by using our Rest Endpoint integration.

## Generic Endpoint Settings

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/transformers.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connectors.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)

## Connect your Application

After creating a REST Endpoint, you are able to send **POST** requests to the **Endpoint URL**. The body of the requests should have the following format:

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

- *userId* – a user ID of the end user in form of a string
- *sessionId* – a unique ID that is used to track the current conversation in form of a string
- *text* – message text that should get processed by the assigned flow in form of a string
- *data* – message data that should get processed by the assigned flow in form of an object

!!! note "Sending text and data"
    By default, you can use the REST Endpoint to send either text or data to your Flow. You can choose to send both, but at least one is required. If invalid text and invalid data is specified, then the REST Endpoint throws an error.

!!! tip "Session ID"
    The sessionId is a unique identifier that is used to keep the state of a conversation. This means that you should generate a new unique ID whenever a new conversation starts, and not on every message. For testing purposes, you can use whatever string value you like as the sessionId, and change it whenever you want a new conversation to start.
The response contains the output text, output data and the outputStack, which is an array of all Flow outputs. Since the Rest Endpoint will concatenate all Flow Outputs (e.g. all Say Nodes) into one text / data output, you can use the outputStack for debugging purposes.

```JSON
{
    "text": "output2",
    "data": {
        "output": 2
    },
    "outputStack": [
        {
            "text": "output 1",
            "data": {
                "output": 1
            }
        },
        {
            "text": "output 2",
            "data": {
                "output": 2
            }
        }
    ]
}
```

!!! note "AI Default Channel Formats"
    You can find out more about the format for the default channels [**here**](../../build/node-reference/basic/code/ai-default-channel-formats.md).