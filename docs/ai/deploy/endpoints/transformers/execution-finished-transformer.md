---
 title: "Execution Finished Transformer" 
 slug: "execution-finished-transformer" 
 hidden: false 
---
# Execution Finished Transformer

The `Execution Finished Transformer` is triggered when the Flow execution has finished. However, the behavior of the Transformer function differs greatly depending on which [base type](transformers.md#different-base-transformer-types) of Transformer is being used, which is described in more detail below.

The `Execution Finished Transformer` is configured by implementing the `handleExecutionFinished` function in the Transformer in the Endpoint.

 <figure>
  <img class="image-center" src="../../../../../_assets/ai/deploy/endpoints/transformers/alexa-transformer.png" width="100%" />
  <figcaption>Execution Finished Transformer Example</figcaption>
</figure>

## Differences between Transformer Types

## REST Transformers

For REST-based Transformers, the output to the user will be sent in this Transformer function.

The handleExecutionFinished function will in this case get a further argument, called `processedOutput`. This variable contains the output that would be sent *as-is* to the channel, meaning that it is in the correct format corresponding to the specific channel. An example can be seen [here](#return-values-of-the-transformer). It also gets access to the list of outputs that were processed in the Output Transformer.

## Webhook and Socket Transformers
The `Execution Finished Transformer` does not have an important function for Webhook and Socket based endpoints. More information [here](#return-values-of-the-transformer).

## Transformer Function Arguments

The `handleExecutionFinished` function gets a configuration object as an argument. An overview of the keys in the object can be seen below

| Argument        | Description                                                                                                                                                                                  | Webhook Transformers | REST Transformers | Socket Transformers |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|-------------------|---------------------|
| endpoint        | The configuration object for the Endpoint. Contains the URLToken etc.                                                                                                                        | X                    | X                 | X                   |
| outputs         | A list of all the outputs from the Flow. This outputs in the list could be influenced in the Output Transformer for REST Endpoints                                                           |                      | X                 |                     |
| processedOutput | The output that was processed into the format that the specific channel expects. This is what would normally be sent to the channel if the Execution Finished Transformer would be disabled. |                      | X                 |                     |
| userId          | The unique ID of the user.                                                                                                                                                                   | X                    | X                 | X                   |
| sessionId       | The unique ID of the conversation.                                                                                                                                                           | X                    | X                 | X                   |

## Return Values of the Transformer

The return value of the `Execution Finished Transformer` depends on the base type of Transformer. There is no validation of the return value of the Execution Finished Transformer.

## REST Transformers

The `Execution Finished Transformer` has to return an output, which can be sent directly to the specific channel without making any further modifications. This means that if the Transformer is active in a `Alexa` Endpoint, then the format has to be according to the message format described in the documentation for Alexa.

Here is an example of the correct return format for an Alexa Endpoint:

**Webhook / Socket Return Format**
```JavaScript
handleExecutionFinished: async ({ processedOutput, outputs, userId, sessionId, endpoint, response }) => {
    /**
     * Combine all of the Flow outputs into one message
     */
    const text = outputs.reduce((mergedOutput, output) => `${mergedOutput}. ${output.text}`, "").trim();

    const responseToAlexa = {
        version: "1.0",
        response: {
            outputSpeech: {
                type: 'SSML',
                ssml: `<speak>${text}</speak>`
            },
            shouldEndSession: false
        }
    };

    return responseToAlexa;
}
```

If the `Execution Finished Transformer` returns falsy, then the output will not be sent to the user, and will thereby be discarded.

## Webhook and Socket Transformers

The `Execution Finished Transformer` does not have any special functionality and therefore does not have any return value. At this point, all outputs have been sent to the user, and it is possible to use the Transformer to e.g. send logging information to an external system.