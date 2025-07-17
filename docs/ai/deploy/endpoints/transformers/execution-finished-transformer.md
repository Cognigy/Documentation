---
title: "Execution Finished Transformer" 
slug: "execution-finished-transformer" 
hidden: false
description: "The Execution Finished Transformer converts Flow output after a Flow execution has finished. The return value of the execution finished transformer is sent to the Endpoint."
tags:
  - execution finished transformer
  - rest-based endpoints
  - output transformation
---

# Execution Finished Transformer

The _Execution Finished Transformer_ converts the Flow output after a Flow execution has finished. The return value of the execution finished transformer is sent to the Endpoint. This transformer applies only to REST-based Endpoints using the output transformer.

You can configure the execution finished transformer in the `handleExecutionFinished` function in the [Endpoint settings or via CLI](overview.md#working-with-transformers).

## Transformer Function Arguments

The following table shows an overview of the function arguments:

| Argument        | Description                                                                            |
|-----------------|----------------------------------------------------------------------------------------|
| endpoint        | The configuration object for the [Endpoint](#endpoint-configuration-object).           |
| outputs         | The `outputs` array from the output transformer. This array contains the Flow outputs. |
| processedOutput | The Flow output processed into the format that the Endpoint expects.                   |
| userId          | The unique ID of the user.                                                             |
| sessionId       | The unique ID of the session.                                                          |

{! _includes/ai/deploy/endpoint/transformers/endpoint-object.md !}

## Return Values

The return value of the execution finished transformer depends on the Endpoint type you are using. There is no validation of the execution finished transformer return value. If the execution finished transformer returns a falsy value, the output isn't sent to the Endpoint.

The execution finished transformer takes the `outputs` array from the output transformer and sends it to the Endpoint. For example, if you're using the execution finished transformer in an Alexa Endpoint, the return value format must meet the [Alexa message format](https://developer.amazon.com/en-US/docs/alexa/custom-skills/request-and-response-json-reference.html).

Here is an example of the correct return format for an [Alexa Endpoint](../../endpoint-reference/amazon-alexa.md):

```javascript
handleExecutionFinished: async ({ processedOutput, outputs, userId, sessionId, endpoint, response }) => {

    const text = outputs.reduce((processedOutput, output) => `${processedOutput}. ${output.text}`, "").trim();

    const responseToAlexa = {
        version: "1.0",
        response: {
            outputSpeech: {
                type: "SSML",
                ssml: `<speak>${text}</speak>`
            },
            shouldEndSession: false
        }
    };

    return responseToAlexa;
}
```
