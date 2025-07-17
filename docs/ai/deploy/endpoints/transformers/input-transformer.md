---
title: "Input Transformer" 
slug: "input-transformer" 
hidden: false
description: "The Input Transformer converts the user input after it's sent to an Endpoint. This allows you to manipulate the user input data before it is sent to the Flow, for example, to communicate with external systems, to implement integrations with a custom channel, and much more."
tags:
  - input transformer
  - user input
  - data transformation
  - endpoint integration
  - custom channels
  - external integrations
---
# Input Transformer

The _Input Transformer_ converts the user input after it's sent to an Endpoint. This allows you to manipulate the user input data before it is sent to the Flow, for example, to communicate with external systems, to implement integrations with a custom channel, and much more.

You can configure the input transformer in the `handleInput` function in the [Endpoint settings or via CLI](overview.md#working-with-transformers).

## Restrictions

{! _includes/ai/deploy/endpoint/transformers/return-value-rule-set.md !}

## Transformer Function Arguments

Depending on the Endpoint type in which you want to use the transformer, the function arguments vary:

=== "Webhook- and REST-based Endpoints"
    | Argument | Description                                                                  |
    |----------|------------------------------------------------------------------------------|
    | endpoint | The configuration object for the [Endpoint](#endpoint-configuration-object). |
    | request  | The Express request object with a JSON-parsed body.                          |
    | response | The Express response object.                                                 |

=== "Socket-based Endpoints"
    | Argument | Description                                                                                                                                              |
    |----------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
    | endpoint | The configuration object for the [Endpoint](#endpoint-configuration-object).                                                                             |
    | payload  | The payload object contains the userId, sessionId, text, and data that was sent through the socket. The payload also contains the channel of the client. |

{! _includes/ai/deploy/endpoint/transformers/endpoint-object.md !}

## Return Values

The input transformer returns the user ID, session ID, text, and data, which are subsequently sent to the Flow. These values are extracted from the Endpoint payload. The payload format is specific to the Endpoint type you use, for example, Alexa or Facebook (Meta) Messenger. Read the documentation of the [specific Endpoint](../../endpoint-reference/overview.md) to know how to format the payload.

??? info "Example of Transformer Return Values"

    ```javascript
    return {
        userId: payload.userId,
        sessionId: payload.sessionId,
        text: payload.text,
        data: { "test": 1 }
    };
    ```

### Undefined Return Values

If the transformer returns `undefined` for `userId`, `sessionId`, `text`, or `data`, this means that the transformer uses the value from the Endpoint.

??? info "Example of Undefined Return Values"

    The following example overwrites `text` and `data`, but uses the `userId` and `sessionId` from the Endpoint:

    ```javascript
        return {
            userId: undefined,
            sessionId: undefined,
            text: payload.text,
            data: { "test": 1 }
        };
    ```

### Endpoints Event Messages

The Webchat and the Socket.IO Endpoints output event messages that indicate user activity, such as whether the user is connected (`user-connected`) or disconnected  (`user-disconnected`). These event messages neither trigger Flows nor are counted. The event messages inform [handover providers](../../../escalate/handovers.md) about user activity, allowing human agents to determine if the user is still engaged in the conversation. You can access the event messages with the `data._cognigy.event` property in the return value of the input transformer.

??? info "Example of Return Values with Event Messages"

    ```javascript
    return {
        "userId": payload.userId,
        "sessionId": payload.sessionId,
        "text": payload.text,
        "data": {
            "_cognigy": {
                  "event": {
                    "type": "user-connected"
                }
            }
        }
    }
    ```

If you want to access event messages in the input transformer, don't modify them. The event messages are only recognized if their data payload follows a specific format. The following code snippet shows how to use event messages in the input transformer:

??? info "Example of Input Transformer with Event Messages"

    ```javascript
    {

    handleInput: async ({ payload, endpoint }) => {
      if (!!payload.data?._cognigy?.event) {
    // pass on "event messages" without modification
          return payload;
        }

        // rest of your input transformer code
      }
    }
    ```

### Transformers and Conversation Counts

Conversations in Cognigy.AI are counted if the input transformer returns any result but falsy.

## More Information

- [Endpoints](../overview.md)
- [Transformers](overview.md)
- [Transformers GitHub repository](https://github.com/Cognigy/TransformersSamples)