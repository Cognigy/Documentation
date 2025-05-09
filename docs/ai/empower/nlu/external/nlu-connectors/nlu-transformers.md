---
title: "NLU Transformers" 
slug: "nlu-transformers"
description: "NLU Transformers are used to customize the pipeline in NLU Connectors. By using NLU Transformers, you can change the incoming message from the Endpoint before it's sent to the NLU engine, and to change the response from the NLU engine before it's sent to the Flow execution."
hidden: false
tags:
  - nlu-transformers
  - nlu
---
# NLU Transformers

_NLU Transformers_ are used to customize the NLU Connectors pipeline.

With transformers, you can:

- Modify the incoming message from the Endpoint before it's sent to the NLU engine.
- Adjust the response from the NLU engine before it reaches the Flow execution.

NLU transformers are available for Cognigy NLU, as well as for Alexa, DialogFlow, Microsoft LUIS, and Watson Assistant connectors.

## NLU Code transformer

With the NLU Code transformer, you can write a custom NLU pipeline in the Code Editor.

| **Function** | **Parameters**                                 | **Description**                                                                                                                                                                                                                       | **Return**                                                       |
|--------------|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| `preNlu`     | `text`, `data`, `language`                     | The `preNlu` transformer function processes data before sending it to the NLU engine. This function can perform tasks such as stop word removal, punctuation cleanup, noise reduction, text normalization, and spell checking.        | Returns modified `text` and `data` to be sent to the NLU engine. |
| `postNlu`    | `text`, `data`, `nluResult`, `connectorOutput` | The `postNlu` transformer function works with the raw NLU results. `connectorOutput` is the unfiltered output from the NLU engine, for example, DialogFlow, LUIS, or Watson, while `nluResult` contains the filtered and mapped data. | Returns modified `data` and `nluResult` to process the Flow.     |

## Transformer Settings

You can control the NLU Code transformer's behavior by enabling or disabling functions in the Transformer Settings.

| **Setting**                   | **Description**                                                                                                                                                                                                                                                                                     |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Abort on Error in Transformer | Stops the execution of the transformer if an error occurs, preventing further processing. By default, transformer errors are logged on the Logs page, and execution continues normally. This means that if the transformer fails, the message is still processed as if the transformer didn't exist |                                                                                                                                                                   |
| Enable pre NLU Transformer    | Activates the `pre` function in the transformer before the NLU engine processes the input, allowing for pre-processing.                                                                                                                                                                             |
| Enable post NLU Transformer   | Activates the `post` function in the transformer after the NLU engine processes the input, allowing for post-processing.                                                                                                                                                                            |
| Debug Transformer Stack       | Displays the input and output data from each transformer in the Input object within the Interaction Panel, helping you track how data changes at each transformation step. This setting doesn't apply to Endpoints.                                                                                 |

??? info "Example of the `transformerStack` object in the Interaction Panel"
    ```json
    {
      "transformerStack": {
        "preNluInput": {
          "text": "hi!!!"
        },
        "preNluOutput": {
          "text": "hi",
          "data": {}
        },
        "postNluInput": {
          "text": "hi",
          "data": {},
          "nluResult": {
            "intent": "",
            "intentScore": 0,
            "slots": {},
            "type": "Greeting"
          },
          "connectorOutput": null
        },
        "postNluOutput": {
          "data": {},
          "nluResult": {
            "intent": "myIntent",
            "intentScore": 1,
            "slots": {},
            "type": "Greeting"
          }
        }
      }
    }
    ``` 


## Available Modules

??? info "httpRequest"

    !!! warning "Limitations for the `httpRequest` module"
        - You can send one HTTP request per transformer execution.
        - You can't send HTTP requests to other Endpoints.
    
    You can send HTTP requests to external services, for example, third-party NLU engines, from within a transformer. 
    All transformer functions can access the `httpRequest` module for this purpose. 
    The module is invoked as a function which takes a single configuration object as arguments. 
    This object has the same format as the options object for the NPM module [Request](https://www.npmjs.com/package/request#requestoptions-callback).

    Example:

    ```js
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

??? info "getCognigyNlu"

    You can execute Cognigy NLU from within a transformer. All NLU transformer functions can access the `getCognigyNlu` function. This function takes string as arguments.
    
    Example:
    
    ```js
    const cognigyNluResult = await getCognigyNlu(text + "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    ``` 

??? info "getSessionStorage"

    `SessionStorage` is a storage object available to all transformer functions and stays active throughout the session. 
    This object can store variables for later use in other functions or track the conversation state. 
    You can access it using the `getSessionStorage` function.
    This function returns a Promise that resolves to the `sessionStorage` object, which you can use as a JavaScript regular object.
    
    Modifying variables inside `StorageSession` can lead to several problems:

    - **Inconsistent State** You might change the object in a way that other parts of your application don’t expect, which can cause errors or unexpected results.
    - **Asynchronous Issues**. Since JavaScript is asynchronous, other operations might try to access the session storage before your changes are applied, causing issues such as reading outdated data.

    Instead, make changes locally (in a temporary variable or copy) and then assign the updated value back to `SessionStorage`.

    Example:

    ```js
    // Retrieve the sessionStorage object
    const sessionStorage = await getSessionStorage(); 
    
    // Make a copy of the array from sessionStorage (or initialize if it doesn't exist)
    let tempArr = sessionStorage.arr || []; // Default to an empty array if 'arr' doesn't exist
    
    // Modify the local copy (add new items to the array)
    tempArr.push(1);  // Add item 1
    tempArr.push(2);  // Add item 2
    
    // Save the modified array back to sessionStorage
    sessionStorage.arr = tempArr;  // Update sessionStorage with the new array
    ``` 

??? info "NPM Modules"
    The following NPM modules are available in the transformer:
    
    | **Module**     | **Description**                                                                     |
    |----------------|-------------------------------------------------------------------------------------|
    |   uuid         | Generates unique identifiers (UUIDs) for items or sessions in applications.         |
    |   crypto       | Provides cryptographic functions like hashing, encryption, and decryption.          |
    |  _ (Lodash)    | A utility library offering functions for manipulating arrays, objects, and strings. |
    |   moment       | A library for parsing, manipulating, and displaying dates and times in JavaScript.  |

??? info "Logging"
    You can use the exposed modules `console.log`, `console.info`, and `console.error` in the transformers to display logs on the [Logs page](../../../../test/logs.md).

## More Information

- [Overview](../nlu-connector-reference/all-nlu-connectors.md)