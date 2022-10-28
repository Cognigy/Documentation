---
 title: "Functions" 
 slug: "functions" 
 hidden: false 
---
# Functions 

## Introduction
<div class="divider"></div>

Cognigy Functions are Code Blocks that can be run inside your Cognigy.AI installation and help you with long-running asynchronous processes, e.g. interaction with third-party systems HTTP APIs.

???+ info "Maximum runtime"
    By default, the maximum runtime for an instance of a Cognigy Function is limited to 15 minutes. On-premise customers with their own Cognigy.AI installation can adjust this limit.

They are independent of Flows but can be triggered from a Flow and can also use the "inject" and "notify" APIs to send their results back into a Flow.

When running a Function, you can pass additional parameters which are then available in the Function Code.

You can start using Functions by navigating to "Functions" in the "Build" section of the Agent Sidebar.
<br>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/7471441-Screenshot_2021-05-17_Functions_in_Robins_lokaler_Mllplanet_Cognigy_AI.png" width="100%" />
</figure>

## Configuration and Monitoring
<div class="divider"></div>

The "Function Editor" lets you define a Code snippet in JavaScript or TypeScript language.

You can access the `parameters` and `api` objects from the Function's arguments.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/3b09091-MicrosoftTeams-image_2.png" width="100%" />
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
You can use Functions to interact with Flows using the [Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/) APIs.
The following examples assume that you pass the userId and sessionId through the Function's Parameters.

````JavaScript
const { userId, sessionId } = parameters;

api.inject({
    userId,
    sessionId,
    text: "This text was injected though a Function"
});
````

**Performing a "Notify" call**
````JavaScript
const { userId, sessionId } = parameters;

api.notify({
    userId,
    sessionId,
    text: "This text was injected though a Function"
});
````

### Monitoring

By switching to the "Instances" Tab, you can see an execution history for the currently edited Function.
Each execution will list its current execution status, the trigger source, the start time and the finish time.

By hovering an item, you can also see the parameters that were provided for this individual execution.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/84dc43a-Screen_Shot_03-26-21_at_12.31_AM.JPG" width="100%" />
</figure>

## Triggering a Function
<div class="divider"></div>

Cognigy Functions can be triggered in three different ways: By pressing the "Run" button in the UI, by executing a "Trigger Function" Node or by calling the REST API.

## Using the UI
While visiting the "Function Editor" page for a Function, you can click the "Run" button on the top left of the page. This will run the Function without parameters. 
If you want to also provide parameters, you can click the "Arrow Button" next to the "Run" button.
This will open a Dialog where you can define additional parameters as a JSON object.

## Using the REST API
You can trigger a Function by using the REST API, documented in our [OpenAPI documentation](
https://api-trial.cognigy.ai/openapi#post-/v2.0/functions/-functionId-/trigger).

## Using a Node
It is also possible to trigger a Function from a Flow by using the [Trigger Function]({{config.site_url}}ai/flow-nodes/logic/trigger-function/) Node.

<!--

Cognigy Functions are a big leap forward when it comes to running asyncronous code in the background. 
Functions allow you to schedule long-running code (e.g. 10 minutes!) in the background. 
Functions can be triggered and started via our [RESTful API](https://api-trial.cognigy.ai/openapi) or from within your Flows. Your code in Functions will be executed in a save containment and can inject results back into your users conversational sessions. 

**Cognigy Functions** improves the AI solution and enables you to create asynchronous solutions in addition to the Cognigy Flows feature, which creates synchronous solutions. 

As soon as you e.g. have to start a polling job on a third-party system (e.g. an RPA tool), you need an application that can poll the external system and then use Cognigys **inject/notify API** to resolve with some data.

Cognigy Functions provides a tool for you that can be used to implement operations like this and e.g. kick-off a polling job.

Cognigy Functions are a way for you to implement long-running custom-code which can be started from within a Flow but is not limited to the execution time of such. It can interact with third-party platforms and APIs. Cognigy Functions can be started using some **Trigger**, will then be executed and can "report" their status back into a Flow using inject/notify.

Good examples for a Cognigy function are:

•	you want to start polling a third-party system for updates, e.g. while you integrate your bots with something like an RPC tool.
•	you want to execute complex code in an asynchronous way without your Flows being slow.
•	you have code that runs for quite some time, e.g. 10 minutes - without actually being responsible to run/host the code.

-->