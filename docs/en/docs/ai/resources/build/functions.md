---
title: "Functions" 
slug: "functions" 
description: "Cognigy Functions are code blocks that can be executed within your Cognigy.AI installation and assist you with long-running asynchronous processes, such as interacting with third-party systems through HTTP API."
hidden: false 
---
# Functions 

Cognigy Functions are code blocks that can be executed within your Cognigy.AI installation and assist you with long-running asynchronous processes, such as interacting with third-party systems through HTTP API.

Functions are independent of Flows but can be triggered from a Flow and can also use the [Inject & Notify](../../endpoints/inject-and-notify.md) APIs to send their results back into a Flow.

When running a Function, you can pass additional parameters, which are then available in the Function Code.

You can start using Functions by navigating to **Build > Functions** in the left-side menu.
<br>

## Limitations

The maximum runtime for an instance of a Cognigy Function is limited to 15 minutes. If you have On-premise environment, you can change this limit.

## Configuration and Monitoring

The **Function Editor** lets you define a Code snippet in JavaScript or TypeScript language.

You can access the `parameters` and `api` objects from the Function's arguments.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Function_editor.png" width="100%" />
</figure>

## Interacting with Third-Party Systems

You can use HTTP requests to interact with third-party systems.

````JavaScript
const response = await api.httpRequest({
    method: "get",
    url: "https://example.com/api/v2",
    headers: {
        "Accept": "application/json"
    }
});
````

## Interacting with Flows

You can use Functions to interact with Flows using the [Inject & Notify](../../endpoints/inject-and-notify.md) APIs.

The following examples assume that you pass `userId` and `sessionId` through the Function's Parameters.

````JavaScript
const { userId, sessionId } = parameters;

api.inject({
    userId,
    sessionId,
    text: "This text was injected through a Function"
});
````

**Performing a "Notify" call**

````JavaScript
const { userId, sessionId } = parameters;

api.notify({
    userId,
    sessionId,
    text: "This text was injected through a Function"
});
````

### Monitoring

By switching to the **Instances** tab, you can see an execution history for the currently edited Function. Each execution will list its current execution status, the trigger source, the start time and the finish time.

By hovering an item, you can also see the parameters that were provided for this individual execution.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Function_instances.png" width="100%" />
</figure>

## Triggering a Function

Cognigy Functions can be triggered in three different ways:

- [Using the UI](#using-the-ui)
- [Using the REST API](#using-the-rest-api)
- [Using a Node](#using-a-node)

### Using the UI

On the **Function Editor** page, click the **Run** button in the upper-left corner of the page.
This action will run the Function without parameters. 

To run a Function with parameters, click the **Arrow** button next to the **Run** button.
This action will open a dialog, where you can define additional parameters as a JSON object.

### Using the REST API

You can trigger a Function by using the REST API.
For more information, read the [OpenAPI](https://api-trial.cognigy.ai/openapi#post-/v2.0/functions/-functionId-/trigger) documentation.

### Using a Node

To trigger a Function from a Flow, use the [Trigger Function](../../flow-nodes/logic/trigger-function.md) Node.

## More Information

- [Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)
- [OpenAPI documentation](https://api-trial.cognigy.ai/openapi#post-/v2.0/functions/-functionId-/trigger)
- [Trigger Function]({{config.site_url}}ai/flow-nodes/logic/trigger-function/)

<!--

Cognigy Functions are a big leap forward when it comes to running asynchronous code in the background. 
Functions allow you to schedule long-running code (e.g. 10 minutes!) in the background. 
Functions can be triggered and started via our [RESTful API](https://api-trial.cognigy.ai/openapi) or from within your Flows. Your code in Functions will be executed in a save containment and can inject results back into your users conversational sessions. 

**Cognigy Functions** improves the AI solution and enables you to create asynchronous solutions in addition to the Cognigy Flows feature, which creates synchronous solutions. 

As soon as you e.g. have to start a polling job on a third-party system (e.g. an RPA tool), you need an application that can poll the external system and then use Cognigy **inject/notify API** to resolve with some data.

Cognigy Functions provides a tool for you that can be used to implement operations like this and e.g. kick-off a polling job.

Cognigy Functions are a way for you to implement long-running custom-code which can be started from within a Flow but is not limited to the execution time of such. It can interact with third-party platforms and APIs. Cognigy Functions can be started using some **Trigger**, will then be executed and can "report" their status back into a Flow using inject/notify.

Good examples for a Cognigy function are:

•	you want to start polling a third-party system for updates, e.g. while you integrate your bots with something like an RPC tool.
•	you want to execute complex code in an asynchronous way without your Flows being slow.
•	you have code that runs for quite some time, e.g. 10 minutes - without actually being responsible to run/host the code.

-->