---
title: "Overview" 
slug: "transformers"
description: "Cognigy.AI's Endpoint Transformers are used to manipulate the data sent between a Flow and an Endpoint."
hidden: false 
tags:
  - endpoint transformers
  - data transformation
  - flow integration
  - custom endpoints
---

# Transformers

_Endpoint Transformers_ are functions that convert the text and data sent between the [Endpoint](../overview.md) and the [Flow](../../../build/flows/overview.md) as well as through the [Inject and Notify API requests](../inject-and-notify.md). These functions allow you to manipulate the data from the user input, the Flow output, and third-party API services.

Transformers fully support TypeScript and JavaScript, including [npm modules](#npm-modules).

You can use transformers to:

- Convert request payloads from an Endpoint before sending them to a Flow, for example, to encrypt data.
- Convert the Flow output before sending it to an Endpoint.
- Translate messages from the user into the Flow language.
- Customize the default and custom Endpoint interfaces.
- Convert a channel output to be compatible with another channel. For example, convert a [Webchat output](../../endpoint-reference/webchat.md) into a [WhatsApp-compatible output](../../endpoint-reference/whatsapp.md).
- Create [custom Endpoints](#create-a-custom-endpoint) for additional integrations and handle webhook events from the custom Endpoints.

Depending on the [type of the Endpoint](#endpoint-types) in which you use the transformers, they may work differently.

To learn more about Endpoint transformers, watch this webinar:

<div style="text-align:center;">
  <iframe width="701" height="438" src="https://www.youtube.com/embed/DfMr8RspF9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Restrictions

- You can't send HTTP requests from transformers to other Endpoints.

## Limitations

- You can only send one HTTP request per execution from a transformer.

## Endpoint Types

There are three different types of Endpoints based on the underlying technology.

=== "REST-based Endpoints"

      REST-based Endpoints receive messages from the user and send one reply back. For these Endpoints, you can add more than one Say Node in the Flow, but all the outputs are processed only after the Flow execution has finished. The outputs are concatenated into one message and then sent to the user. The REST-based Endpoints are:

      - Alexa
      - Dialogflow
      - Twilio
      - Twilio SMS
      - Microsoft Teams
      - Userlike 
      - AudioCodes
      - REST

=== "Webhook-based Endpoints"

      Webhook-based Endpoints receive messages from the user and reply to the user after each input. For these Endpoints, you can process each output after the user input. The webhook-based Endpoints are: 

      - Facebook (Meta) Messenger
      - Slack           
      - Microsoft Bot Framework  
      - Sunshine Conversations   
      - LINE            
      - RingCentral Engage       
      - Intercom        
      - WhatsApp        
      - Webhook         

=== "Socket-based Endpoints"

      Socket-based Endpoints receive messages from the user and can reply to the user after each input. For these Endpoints, you can process each output after the user input. The socket-based Endpoints are:

      - Webchat
      - Socket

## Transformer Functions

The transformer function determines the transformer you use in the [Endpoint settings](../overview.md). The following table provides an overview of the transformer functions:

| Transformer Function    | Transformer                                             | Description                                                                                                                                                                                                                                                                                                        |
|-------------------------|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| handleInput             | [Input](input-transformer.md)                           | Executes when a user input is sent to an Endpoint, before the Flow is executed. The return value is sent to the Flow.                                                                                                                                                                                              |
| handleOutput            | [Output](output-transformer.md)                         | Executes when a Flow sends an output to an Endpoint. For webhook- and socket-based Endpoints, the return value of each output is sent to the user. For REST-based Endpoints, the return value is stored and can be sent to the user after the Flow execution has finished with the execution finished transformer. |
| handleExecutionFinished | [Execution finished](execution-finished-transformer.md) | Executes when the Flow execution has finished. The return value is sent to the user. In this case, all outputs are concatenated and sent to the user. Applies only to REST-based Endpoints in which you use an output transformer.                                                                                 |
| handleNotify            | [Notify](notify-transformer.md)                         | Executes when you use the [Notify API request](../inject-and-notify.md). The return value is sent directly to the user.                                                                                                                                                                                            |
| handleInject            | [Inject](inject-transformer.md)                         | Executes when you use the [Inject API request](../inject-and-notify.md). The return value is sent to the Flow.                                                                                                                                                                                                     |

## Working with Transformers

=== "GUI"
      You can configure the transformer functions in the **Transformer Functions** section of the Endpoint settings. You need to activate the transformer functions individually and provide the corresponding code in the **Transformer** editor.

=== "API"
    You can configure transformer settings using the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#post-/v2.0/endpoints).

=== "CLI"
      You can configure the transformer functions locally and deploy them with the [Cognigy CLI](https://github.com/Cognigy/Cognigy-CLI). To do this, follow these steps:
   
      1. In **Deploy > Endpoints**, select an Endpoint and activate the [transformer functions](#transformer-settings) you want to use in the Endpoint settings.
      2. [Clone your AI Agent](https://github.com/Cognigy/Cognigy-CLI?tab=readme-ov-file#command-clone) to your local machine.
      3. Make the changes to the transformer functions in the `transformers.ts` file in your Endpoint's folder, for example, `<root-directory>/agent/endpoints/Webchat/transformer.ts`, where Webchat is the name of your Endpoint.
      4. [Restore the AI Agent](https://github.com/Cognigy/Cognigy-CLI?tab=readme-ov-file#command-restore) to Cognigy.AI.

### Transformer Settings

| Setting                               | Type        | Description                                                                                                                                       |
|---------------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Abort on Error in Transformer         | Toggle      | If activated, an error during the execution of a transformer function terminates the transformer execution.                                       |
| Enable Input Transformer              | Toggle      | Activates the Input transformer function.                                                                                                         |
| Enable Output Transformer             | Toggle      | Activates the Output transformer function.                                                                                                        |
| Enable Execution Finished Transformer | Toggle      | Activates the Execution Finished transformer function.                                                                                            |
| Enable Notify Transformer             | Toggle      | Activates the Notify transformer function.                                                                                                        |
| Enable Inject Transformer             | Toggle      | Activates the Inject transformer function.                                                                                                        |
| Transformer                           | Code editor | This code editor includes the code for each transformer function. By default, the code editor includes one instance of each transformer function. |

### Available JavaScript Modules

#### npm Modules

The following npm modules are available for use in a transformer:

- `uuid` — for generating UUIDs.
- `crypto` — for encrypting data.
- `_` (Lodash) — for manipulating arrays, objects, and strings.
- `moment` — for manipulating dates and times.
- `xmljs` — for manipulating XML data.

#### Text Cleaner Class

Transformers can use the `getTextCleaner` function to retrieve an instance of the [Text Cleaner](../../../empower/nlu/text-cleaner.md) class, which allows you to preprocess user input.

### Send HTTP Requests

You can send HTTP requests to external services from a transformer. All transformer functions can access the `httpRequest` module. The module is invoked as a function that takes a single configuration object as argument. This object has the same format as the options object for the NPM module [Request](https://www.npmjs.com/package/request#requestoptions-callback).

??? info "HTTP Request Example"

      ```JavaScript
      handleInput: async () => {
          const result = await httpRequest({
              uri: "<uri>",
              method: "POST",
              body: {},
              json: true
          });
          
          console.log(result);
          return result;
      }
      ```

### Session Storage

The session storage is a storage object available to all transformer functions that persists throughout a session. You can use the session storage to store variables for later use in other transformer functions or to store the conversation state. To access the stored data, use the `getSessionStorage` function inside the transformer functions. The `getSessionStorage` function takes the `userId` and `sessionId` as arguments and returns a promise. The returned promise resolves with the `sessionStorage` object, which can be manipulated as a regular object.

!!! warning "Mutating Objects in the Session Storage Object"
    You shouldn't mutate complex objects, such as arrays, directly. Instead, you should mutate them locally and then re-assign them to the session storage object.

??? info "Session Storage Example"

      ```javascript
      const handleOutput: async ({ userId, sessionId }) => {
          const sessionStorage = await getSessionStorage(userId, sessionId);

          sessionStorage.test = "test";
      
          // Mutating complex objects
          // Instead of changing the objects directly inside sessionStorage,
          // change them locally and then assign them to the sessionStorage
          let tempArr = sessionStorage.arr || [];
          tempArr.push(1);
          tempArr.push(2);
          sessionStorage.arr = tempArr;
      }
      ```

### Stop Transformer Execution

Every transformer function expects a certain return value that is further processed in an Endpoint or Flow. In certain cases, you may want to stop the execution completely, for example, if the output from a Flow is forwarded to another platform. To stop the transformer execution, set the transformer function to return a falsy value, such as `null` or `void`.

### Error Handling in Transformers

By default, transformers log errors on the [Logs](../../../test/logs.md) page and continue with the Flow execution. This means that if an error occurs during the transformer execution, the user input is still processed.

If the transformer is essential to the pipeline, for example, when building a custom Endpoint integration, you may want to prevent the Flow execution after an error in the transformer execution. To do this, activate the **Abort on Error in Transformer** setting in the [transformer settings](#transformer-settings).

!!! warning "Line Number in Error Logs"
    - When an error occurs during the transformer execution, the logs list the line number where the error occurred. The line number may be incorrect because the logs don't account for lines used for interfaces and comments.
    - Errors caused by a return value validation error don't show a line number in the logs.

### Log Transformer Events

With the following methods, you can log transformer events on the [Logs page](../../../test/logs.md):

- `console.log` — as a `debug` log entry.
- `console.info` — as an `info` log entry.
- `console.error` — as an `error` log entry.

### Create a Custom Endpoint

With transformers, you can create an integration with a custom Endpoint that isn't supported by Cognigy.AI by default. To create a custom Endpoint, you need to know the Endpoint type of the channel. Then, you can use a transformer to call the custom Endpoint service.

## Transformer Examples

You can find examples of various transformers in the [Cognigy GitHub repository](https://github.com/Cognigy/TransformersSamples).

## More Information

- [Cognigy Help Center: Transformers Overview](https://support.cognigy.com/hc/en-us/articles/360019704899-Transformers-Overview)
- [Transformers GitHub repository](https://github.com/Cognigy/TransformersSamples)