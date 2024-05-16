---
 title: "Output Transformer" 
 slug: "output-transformer" 
 hidden: false 
---
# Output Transformer

The `Output Transformer` is triggered on every output from the Flow. However, the behavior of the Transformer function differs greatly depending on which [base type](transformers.md#different-base-transformer-types) of Transformer is being used, which is described in more detail below.

The `Output Transformer` is configured by implementing the `handleOutput` function in the Transformer in the Endpoint.

 <figure>
  <img class="image-center" src="../../../../../_assets/ai/deploy/endpoints/transformers/output-transformer.png" width="100%" />
  <figcaption>Output Transformer Example</figcaption>
</figure>

## Differences between Transformer Types

## REST Transformers
For REST-based Transformers, it is impossible to send multiple outputs to the user, but it is still possible to have multiple Say Node executions in a Flow per input from the user. All outputs are therefore stored in a 'buffer' and will be merged into one output when execution has finished. This means the return value of the handleOutput function will *not* be sent to the user, but will instead be stored in the buffer and processed in the `handleExecutionFinished` Transformer. It is therefore possible to influence the final output to the user by manipulating every individual output in the handleOutput function and returning them.

## Webhook and Socket Transformers
For Webhook and Socket-based Transformers, the output from the Flow is sent to the user as soon as it is output. This means that the return value of the handleOutput function will be sent directly to the user without any further changes. This has the implication that it is the responsibility of the Transformer editor to make sure that the format of the return value of the handleOutput function is in the correct format corresponding to the format used by the channel. It is therefore necessary to read the documentation for the channel in question to determine the format needed to send a message to the user.

The handleOutput function will in this case get one further argument, called `processedOutput`. This variable contains the output that would be sent *as-is* to the channel, meaning that it is in the correct format corresponding to the specific channel. An example can be seen [here](#return-values-of-the-transformer)

## Transformer Function Arguments

The `handleOutput` function gets a configuration object as an argument. An overview of the keys in the object can be seen below

| Argument        | 	Description                                                                                                                                                  | 	Webhook Transformers | 	REST Transformers | 	Socket Transformers |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|--------------------|----------------------|
| endpoint        | 	The configuration object for the Endpoint. Contains the URLToken etc.                                                                                        | 	X	                   | X                  | 	X                   |
| output          | The raw output from the Flow.                                                                                                                                 | 	X                    | 	X	                | X                    |
| processedOutput | 	The output that was processed into the format that the specific channel expects. This is what is sent to the user if the Output Transformer is not executed. | 	X	                   || 	X                 |
| userId          | 	The unique ID of the user.                                                                                                                                   | 	X                    | 	X	                | X                    |
| sessionId       | 	The unique ID of the conversation.                                                                                                                           | 	X                    | 	X                 | 	X                   |

## Return Values of the Transformer

The return value of the `Output Transformer` depends on the type of Transformer. There is no validation of the return value of the Output Transformer.

## REST Transformers
The `Output Transformer` has to return an output, which will be stored in an `outputs` array, which is available in the `handleExecutionFinished` Transformer function. The outputs would normally have the format as seen below, but it is also possible to store a different output format into the outputs array.

**Rest Return format**
```JavaScript
handleOutput: async ({ }) => {
  const modifiedOutput = {
    text: "someText",
    data: {}
  };
 
  return modifiedOutput;
}
```

If the `Output Transformer` returns a falsy value, then specific output will not be stored in the `outputs` array, and will essentially be discarded.

## Webhook and Socket Transformers
The `Output Transformer` has to return an output, which can be sent directly to the specific channel without making any further modifications. This means that if the Transformer is active in a `Sunshine Conversations` Endpoint, then the format has to be according to the message format described in the Sunshine Conversations documentation.

Here is an example of the correct return format for a Sunshine Conversations Endpoint:

**Webhook / Socket Return format**
```JavaScript
handleOutput: async ({ }) => {
   const requestPayload = {
	   role: "appMaker",
     type: "text",
		 text: "some text"
   };
  
  return requestPayload;
}
```
If the `Output Transformer` returns falsy, then the output will not be sent to the user, and will thereby be discarded.