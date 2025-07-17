---
title: "Output Transformer"
slug: "output-transformer"
description: "The Output Transformer converts the Flow output before it's sent to the Endpoint. This allows you to manipulate the Flow output before it's sent to the Endpoint."
hidden: false
tags:
  - output transformer
  - flow output
  - data transformation
---

# Output Transformer

The _Output Transformer_ converts the Flow output. This transformer allows you to manipulate the Flow output before it's sent to the Endpoint.

You can configure the output transformer in the `handleOutput` function in the [Endpoint settings or via CLI](overview.md#working-with-transformers).

The output transformer works differently for the following [Endpoint types](overview.md#endpoint-types):

=== "REST-based Endpoints"

    When using output transformers in REST Endpoints, you can't send multiple Flow outputs to the user. However, you can still have multiple Say Nodes in a Flow that are triggered by each user input.
    
    In this case, the `handleOutput` function stores the Say Node outputs in the `outputs` array. You can process the stored outputs with the [execution finished transformer](execution-finished-transformer.md), which concatenates them into one output when the Flow execution has finished. This approach allows you to manipulate each Flow output in the `handleOutput` function and then concatenate them into one output with the execution finished transformer.

    ```mermaid
    graph LR
    A[Flow output 1] --> B[Output Transformer]
    C[Flow output 2] --> B[Output Transformer]
    D[Flow output 3] --> B[Output Transformer]
    B --> E[outputs Array]
    E --> F[Execution Finished Transformer]
    F -- concatenated messages --> G[Endpoint]
    G --> H[User]
    ```

=== "Webhook- and Socket-based Endpoints"

    When using output transformers in Webhook and Socket Endpoints, each Flow output is sent to the user. The return value of the `handleOutput` function is sent directly to the user and must comply with the [channel](../../../build/nodes/channels.md) format.

    In this case, the `handleOutput` function takes an additional argument: `processedOutput`. This argument contains the output that would be sent as the correct format corresponding to the specific channel.

    ```mermaid
    graph LR
    A[Flow output 1] --> B[Output Transformer]
    C[Flow output 2] --> B[Output Transformer]
    D[Flow output 3] --> B[Output Transformer]
    B -- message 1 --> E[Endpoint]
    B -- message 2 --> E[Endpoint]
    B -- message 3 --> E[Endpoint]
    E -- message 1 --> F[User]
    E -- message 2 --> F[User]
    E -- message 3 --> F[User]
    ```

## Transformer Function Arguments

Depending on the Endpoint type you are using, the function arguments vary:

=== "REST-based Endpoints"
    | Argument  | Description                                                                  |
    |-----------|------------------------------------------------------------------------------|
    | endpoint  | The configuration object for the [Endpoint](#endpoint-configuration-object). |
    | output    | The raw output from the Flow.                                                |
    | userId    | The unique ID of the user.                                                   |
    | sessionId | The unique ID of the session.                                                |

=== "Webhook- and Socket-based Endpoints"
    | Argument        | Description                                                                                                                                                           |
    |-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | endpoint        | The configuration object for the [Endpoint](#endpoint-configuration-object).                                                                                          |
    | output          | The raw output from the Flow.                                                                                                                                         |
    | processedOutput | The processed output from the Flow to comply with the Endpoint format. This is the data that the Endpoint sends to the user if the output transformer isn't executed. |
    | userId          | The unique ID of the user.                                                                                                                                            |
    | sessionId       | The unique ID of the session.                                                                                                                                         |

{! _includes/ai/deploy/endpoint/transformers/endpoint-object.md !}

## Return Values

The output transformer return value depends on the Endpoint type in which you use the transformer. There is no validation of the output transformer return value. If the output transformer returns a falsy value, the output is discarded and not stored in the `outputs` array.

=== "REST-based Endpoints"

    The `handleOutput` function returns a value and stores it in the `outputs` array. You can access this array with the `handleExecutionFinished` function. You can set the format of the `outputs` array items in the `handleOutput` function. By default, the `outputs` array entries have `text` and `data` properties. You can change the output format as follows:

    ??? info "Modify the Return Value Format"

        ```JavaScript
        handleOutput: async ({ processedOutput, output, endpoint, userId, sessionId }) => {
          const modifiedOutput = {
            text: "text",
            data: {}
            // ...
          };
    
          return modifiedOutput;
        }
        ```

=== "Webhook- and Socket-based Endpoints"

    The output transformer must return a value that can be sent directly to the specific channel. For example, if you're using the output transformer in a Sunshine Conversations Endpoint, the return value format must meet the [Sunshine Conversations message format](https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/sending-messages/).

    ??? info "Format Example for Sunshine Conversations Endpoints"

        ```javascript
        handleOutput: async ({ processedOutput, output, endpoint, userId, sessionId }) => {
            const requestPayload = {
                author: {
                    type: "business"
                },
                content: {
                    type: "text",
                    text: "Hello world"
                }
            };
            
            return requestPayload;
        }
        ```

## More Information

- [Execution Finished Transformer](execution-finished-transformer.md)