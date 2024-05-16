---
 title: "NLU Transformers" 
 slug: "nlu-transformers" 
 hidden: false 
---
# NLU Transformers


NLU Transformers are used to customize the pipeline in NLU Connectors. This makes it possible to change the incoming message from the endpoint before it is sent to the NLU engine, and to change the response from the NLU engine before it is sent to the Flow execution.

NLU Transformers are available for Cognigy NLU, as well as for Alexa, DialogFlow, Microsoft LUIS and Watson Assistant connectors.

When using Cognigy NLU, no Connector is required. However, to use Transformers for Cognigy NLU, it is necessary to explicitly create a Cognigy NLU Connector and select this Connector in the Endpoint.

It is also possible to write a custom NLU Connector, without using one of the NLU providers that are available in the different Connectors, by creating a Code NLU Connector and write a custom NLU pipeline in the [Code Transformer](#nlu-code-transformer).

## NLU Transformers

To create a **NLU Transformer** for a Cognigy NLU, Alexa, DialogFlow, LUIS or Watson Assistant Connector, open the **Transformer Functions** tab in the NLU Connector. Here are the different [Transformer Settings](#transformer-settings) that can be configured, as well as the Transformer code editor.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/NLU_Transformer.png" width="100%" />
</figure>

### preNlu
The transformer function ``preNlu`` has the parameters ``text``, ``data`` and ``language``, as received from the Endpoint. It has to return ``text`` and ``data``, which can be changed in the function, before being sent to the NLU engine.

This preNlu transformer function can be used for typical NLP steps such as stop word removal, punctuation removal, noise removal, text normalization, spell checking, ...

### postNlu
The transformer function ``postNlu`` has the parameters ``text``, ``data``, ``nluResult`` and ``connectorOutput``, as received from the NLU engine.

The ``connectorOutput`` is the raw output from the NLU engine like DialogFlow, LUIS or Watson. It has more data than ``nluResult``, where the raw data from the NLU engine was already filtered and mapped to use in the Flow execution.

The function has to return ``data`` and ``nluResult``, which can be changed in the function, before processing the Flow.

## NLU Code Transformer


The NLU Code transformer makes it possible to write a custom NLU pipeline. To create a NLU Transformer, open the **Transformer Functions** tab in the Code Connector. Here are the different [Transformer Settings](#transformer-settings) that can be configured, as well as the Transformer code editor.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/NLU_Code_Transformer.png" width="100%" />
</figure>

The transformer function ``preNlu`` has the parameters ``text``, ``data`` and ``language``, as received from the Endpoint. The function has to return ``data`` and ``nluResult``, which will be sent to the Flow execution.

## Available Modules


### Sending HTTP Requests
It is possible to send HTTP requests to external services, like 3rd party NLU engines, from within a Transformer. All Transformer functions can access the `httpRequest` module for this purpose. The module is invoked as a function which takes a single configuration object as arguments. This object has the same format as the options object for the NPM module [Request](https://www.npmjs.com/package/request#requestoptions-callback). Example:

```ts
handleInput: async () => {
  const result = await httpRequest({
    uri: "some-uri",
    method: "POST",
    body: {},
    json: true
  });
  
  console.log(result);
  return result;
}
``` 

!!! warning "Limitations for the httpRequest module"
    It is per default only possible to send one HTTP request per Transformer execution, and it is per default not possible to send HTTP requests to other Endpoints.

### Cognigy NLU
It is possible to execute Cognigy NLU from within a Transformer. All NLU Transformer functions can access the `getCognigyNlu`  function. This function takes string as arguments.
Example:

```ts
const cognigyNluResult = await getCognigyNlu(text + "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
``` 

### Session Storage
The Session Storage is a storage object available to all Transformer functions and which will be available throughout the session. This can be used to store variables that have to be used later, in other Transformer functions, or to store conversation state. There is a function called `getSessionStorage` exposed to the Transformer functions. It will return a Promise, which resolves with the `sessionStorage` object, which can be manipulated as a normal object. Example:

!!! warning "Mutating Objects in SessionStorage"
    When wanting to change objects inside SessionStorage, it is best practice to not change them directly, but change them locally and later assign.

```ts
const sessionStorage = await getSessionStorage();

sessionStorage.test = "test";

// Muting complex objects
// Instead of changing the objects directly inside sessionStorage
// change them locally and then assign them to the sessionStorage
let tempArr = sessionStorage.arr || [];
tempArr.push(1);
tempArr.push(2);
sessionStorage.arr = tempArr;
``` 

### NPM Modules
The following NPM modules are available in the Transformer:

- uuid
- crypto
- _ (Lodash)
- moment

### Logging
It is possible to use the exposed modules `console.log`, `console.info` and `console.error` in the Transformers. This will make the log appear on the [Project Logs page](../../../test/logs.md) as a debug log, info log and error log respectively.

## Transformer Settings


### Enable
In order to use a specific Transformer function, it has to be enabled in the Transformer Settings section. There is a toggle to enable each individual Transformer function. Transformer functions can be temporarily disabled without having to delete the code.

### Error handling in Transformers
The default error handling for Transformers is to log the error on the logs page and then continue with the normal execution. This means that if something fails in the Transformer function, the message will still be processed as if the Transformer function wouldn't exist. There is a setting **Abort On Error**, which can be turned on to stop the execution fully after the Transformer has thrown an error. 

### Debug Transformer Stack
If the **Debug Transformer Stack** setting is enabled, the different inputs and outputs from the Transformers are exposed input object in the interaction panel. Note that this only works when writing in the interaction panel, it is not part of the input object when using other endpoints.
Example:

```json
{
   "transformerStack":{
      "preNluInput":{
         "text":"hi!!!"
      },
      "preNluOutput":{
         "text":"hi",
         "data":{

         }
      },
      "postNluInput":{
         "text":"hi",
         "data":{

         },
         "nluResult":{
            "intent":"",
            "intentScore":0,
            "slots":{

            },
            "type":"Greeting"
         },
         "connectorOutput":null
      },
      "postNluOutput":{
         "data":{

         },
         "nluResult":{
            "intent":"myIntent",
            "intentScore":1,
            "slots":{

            },
            "type":"Greeting"
         }
      }
   }
}
``` 