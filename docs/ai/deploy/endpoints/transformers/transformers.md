---
 title: "Overview" 
 slug: "transformers" 
 hidden: false 
---
# Transformers

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="60" height="60"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://github.com/Cognigy/Transformers" target="_blank" >Cognigy/Transformers</a>
      </div>
      <div class="callout-subtext">
            Reference to Cognigy repository on GitHub
      </div>
   </div>
</blockquote>

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">📘</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019704899-Transformers-Overview" target="_blank" >Transformers Overview</a>
      </div>
      <div class="callout-subtext">
            Cognigy HelpCenter article
      </div>
   </div>
</blockquote>


## Description

Endpoint Transformers enable the modification of the Endpoint behavior. 

You can use them to:

- change the request payload from an Endpoint before being sent to the Flow
- change outputs from a Flow before they are sent to the user 
- create additional integrations with a custom-built endpoint
- transform the output of channel to work on another channel, e.g. convert Webchat output to WhatsApp compatible output
- handle Webhook events from custom services
- translate the messages from a user into the language of the Flow

The Transformers have full TypeScript support, meaning that the variables and NPM modules are typed, and it is possible to write custom interfaces in the Transformer. However, TypeScript knowledge is not required and plain JavaScript can be used as well.

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019893159-Cognigy-Sessions-Endpoint-Transformers" target="_blank" >Technical video "Endpoint Transformers"</a>
      </div>
      <div class="callout-subtext">
      Watch this Episode of Cognigy Sessions for a technical deep dive
      </div>
   </div>
</blockquote>

## Transformer Functions

The list below gives an overview of all the Transformer functions that are available. Each Transformer function has its own chapter that goes much more into detail.

| Transformer Function                                          | 	Description                                                                                                                                                                                                 |
|---------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [handleInput](input-transformer.md)                           | This Transformer function is executed when a user sends a message to an Endpoint, before the Flow is executed. The return value of the function will be sent to the Flow.                                    |
| [handleOutput](output-transformer.md)                         | 	This Transformer function is executed on each output from the Flow. For Webhook and Socket based Endpoints, the return value will be sent to the user. Read more [here](#different-base-transformer-types). |
| [handleExecutionFinished](execution-finished-transformer.md)	 | This Transformer function is executed when the Flow execution has finished. For REST based Endpoints, the return value will be sent to the user. Read more [here](#different-base-transformer-types).        |
| [handleNotify](notify-transformer.md)                         | This Transformer function is executed when the Endpoint Notify API is used. The return value of the function will be sent directly to the user as a notification.                                            |
| [handleInject](inject-transformer.md)                         | This Transformer function is executed when the Endpoint Inject API is used. The return value of the function will be sent to the Flow.                                                                       |


## Creating a Transformer

To create a Transformer for an Endpoint, open the ``Transformer Functions`` tab in the Endpoint. Here are the different [Transformer Settings](#transformer-settings) that can be configured, as well as the Transformer code editor.

!!! warning "Enabling Transformer Functions"
    Every Transformer function is disabled per default and has to be enabled separately in the [Transformer Settings](#transformer-settings) section.

The Transformer code editor has a default value for new Endpoints, which explains in brief how each Transformer function should be used. As soon as a specific Transformer has been enabled, the code in the corresponding Transformer function will be executed.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/deploy/endpoints/transformers/transformer-example.png" width="100%" />
   <figcaption>Persistent Menu</figcaption>
</figure>

## Transformer Settings

<figure>
  <img class="image-center" src="../../../../../_assets/ai/deploy/endpoints/transformers/transformer.png" width="100%" />
</figure>

In order to use a specific Transformer function, it has to be enabled in the Transformer Settings section. There is a toggle to enable each individual Transformer function. Transformer functions can thereby also be temporarily disabled without having to delete the code.

## Error handling in Transformers

The default error handling for Transformers is to log the error on the Logs page and then continue with the normal execution. This means that if something fails in the Transformer function, the message will still be processed as if the Transformer function wouldn't exist.

If the Transformer is a vital part of the pipeline, for instance, when building a custom Endpoint integration, then it might not make sense to execute the underlying Endpoint in case of an error. There is a setting called `Abort On Error`, which can be turned on to stop the execution fully after the Transformer has thrown an error. 

!!! warning "Line Number in Error Logs"
      When an error is thrown in a Transformer during execution, the line number where the error occurred will be listed in the log. The line number can be a bit incorrect, since it does not take lines occupied by interfaces and comments into account.

      Also note that if the error is caused by a return value validation error, no line number will be shown.

## Stopping Transformer Execution

Every Transformer function expects a certain return value, which it will then use in different ways depending on the specific Transformer function. In some cases, it might be desired to stop the execution completely, e.g. if the output from the Flow was already forwarded to another platform. In order to achieve this, the Transformer function can return a falsy value, e.g. null or void.

## Available Modules


### NPM Modules
The following NPM modules are available in the Transformer:

| NPM Modules 
|-------------|
| uuid        |
| crypto      |
| _ (Lodash)  |
| moment      |
| xmljs       |

### Text Cleaner Class

Transformers, like Code Nodes, can use the `getTextCleaner` function to retrieve an instance of the [Text Cleaner](../../../empower/nlu/text-cleaner.md) class, which exposes functions for cleaning text.

## Logging
It is possible to use the exposed modules `console.log`, `console.info` and `console.error` in the Transformers. This will make the log appear on the [Project Logs page](../../../test/logs.md) as a debug log, info log and error log respectively.

## Sending HTTP Requests
It is possible to send HTTP requests to external services from within a Transformer. All Transformer functions can access the `httpRequest` module for this purpose. The module is invoked as a function which takes a single configuration object as arguments. This object has the same format as the options object for the NPM module [Request](https://www.npmjs.com/package/request#requestoptions-callback). Example:


**HTTP Request**
```JavaScript
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

## Session Storage

The Session Storage is a storage object available to all Transformer functions and which will be available throughout the session. This can be used to store variables that have to be used later, in other Transformer functions, or to store conversation state. There is a function called `getSessionStorage` exposed to the Transformer functions, which takes the `userId` and `sessionId` as arguments. It will return a Promise, which resolves with the `sessionStorage` object, which can be manipulated as a normal object. Example:

!!! warning "Mutating Objects inside SessionStorage"
      Complex objects (e.g. Arrays) should not be mutated (e.g. pushed to) directly, but instead locally and the re-assigned to the sessionStorage. See below.

**Session Storage**

```JavaScript
const handleOutput: async ({ userId, sessionId }) => {
	const sessionStorage = await getSessionStorage(userId, sessionId);

	sessionStorage.test = "test";
  
  // Muting complex objects
  // Instead of changing the objects directly inside sessionStorage
  // change them locally and then assign them to the sessionStorage
  let tempArr = sessionStorage.arr || [];
  tempArr.push(1);
  tempArr.push(2);
  sessionStorage.arr = tempArr;
}
```

## Different Base Transformer Types

There are three different types of Transformers, and each Endpoint will implement one of them. Each Transformer type will have a slightly different way of handling the specific Transformer Functions.

The sections below give a quick overview of the different Transformer types. How every Transformer function works differently for every Transformer type is explained in the subchapters for the individual Transformer functions.

## REST Transformer
The REST Transformer is implemented for all Endpoints that are REST based, which means that they receive one message from the user and send one reply back. For these Endpoints, it is possible to have more Say Nodes in the Flow, but all outputs will be concatenated into one output which will then be sent to the user.

The REST-based endpoints are:

- Alexa
- Dialogflow
- Twilio
- Twilio SMS
- Microsoft Teams
- Userlike 
- AudioCodes
- REST

## Webhook Transformer
The Webhook Transformer is implemented for all Endpoints that are webhook based, which means that they receive one message from the user, but can reply to the user multiple times via a webhook URL.

The Webhook-based Transformers are: 

- Facebook (Meta) Messenger
- Slack           
- Microsoft Bot Framework  
- Sunshine Conversations   
- LINE            
- RingCentral Engage       
- Intercom        
- WhatsApp        
- Webhook         

## Socket Transformer
The Socket Transformer is implemented for all Endpoints that use sockets to communicate. These Endpoints are:

- Webchat
- Socket 

## Creating a Custom Endpoint
To create an integration with a custom channel, the first step is to figure out which type of Endpoint this custom channel is. When it is known whether the custom integration uses a REST based API, a Webhook API or is socket based, then the corresponding Endpoint can be created in Cognigy.AI. 

There is an example of a custom-built integration in the Example repository (see below).

## Example Repository

You can find example implementations for various transformers in our new [GitHub repository](https://github.com/Cognigy/TransformersSamples).

