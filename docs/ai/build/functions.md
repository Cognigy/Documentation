---
title: "Functions"
slug: "functions"
description: "Cognigy.AI Functions are code blocks that can be executed within your Cognigy.AI installation and assist you with long-running asynchronous processes, such as interacting with third-party systems through HTTP API."
hidden: false
tags: 
    - Functions
    - JavaScript
    - API Integration
---

# Functions

_Functions_ are JavaScript functions that you can define and execute in Cognigy.AI. You can use Functions to assist with long-running and asynchronous processes, such as interacting with third-party systems through HTTP API.

The execution of Functions is independent of Flows, but you can trigger them from a Flow. You can also use the [Inject & Notify](../deploy/endpoints/inject-and-notify.md) APIs in a Function to send results back into a Flow.

You can access the `parameters` and `api` objects from the Function's arguments.

## Limitations

- The maximum run-time of a Function instance is 15 minutes. For on-premises installations, you can change this limit via the `FUNCTION_EXECUTION_MAX_EXECUTION_TIME_IN_MINUTES` environment variable in the `values.yaml` file.
- You can define a Function only in JavaScript or TypeScript.

## Working with Functions

=== "GUI"
    You can view, create, edit, and delete Functions in **Build > Functions**. To define, trigger, and monitor a Function, use the **Code** and **Instances** tabs.

    Also, you can trigger a Function from the Flow editor by using the [Trigger Function Node](node-reference/service/trigger-function.md).

=== "API"
    You can view, create, edit, and delete Functions using the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#tag--Functions-v2.0). Using this API, you can also monitor, trigger, and stop a Function instance.

## Examples

??? info "Interact with Third-Party Systems"

    You can use HTTP requests to interact with third-party systems.

    #### GET Request

    ```JavaScript
    export default async ({ parameters, api }: IFunctionExecutionArguments) => {
        const response = await api.httpRequest({
            method: "get",
            url: "https://example.com/api/v2",
            headers: {
                "Accept": "application/json"
            }
        });
    }
    ```

    #### POST Request

    ```JavaScript
    export default async ({ parameters, api }: IFunctionExecutionArguments) => {
        const response = await api.httpRequest({
            method: "post",
            url: "https://api.github.com/repos/octocat/Hello-World/issues",
            headers: {
                "Accept": "application/vnd.github.v3+json",
                "Authorization": "Bearer <your-github-token>"
            },
            data: {
                "title": "Found a bug",
                "body": "I'm having a problem with this.",
                "labels": ["bug"]
            }
        });
    }
    ```

??? info "Interact with Flows"

    Functions can interact with Flows through the [Inject & Notify](../deploy/endpoints/inject-and-notify.md) APIs.

    The following examples assume that you pass `userId` and `sessionId` through the Function's parameters.

    #### Injecting Text into a Flow

    ```JavaScript
    export default async ({ parameters, api }: IFunctionExecutionArguments) => {
        const { userId, sessionId } = parameters;

        api.inject({
            userId,
            sessionId,
            text: "This text was injected through a Function"
        });
    }
    ```

    #### Sending a Notification

    ```JavaScript
    export default async ({ parameters, api }: IFunctionExecutionArguments) => {
        const { userId, sessionId } = parameters;

        api.notify({
            userId,
            sessionId,
            text: "This text was injected through a Function"
        });
    }
    ```

Find more Function examples in the Cognigy's [Function](https://github.com/Cognigy/Functions?tab=readme-ov-file) repository.

## Use Case

Functions can help you handle HTTP requests that exceed the timeout in the [HTTP Request Node](../../ai/build/node-reference/service/http-request.md). The HTTP Request Node allows direct access to API responses from the Flow, which is not possible with Functions. However, Functions allow you to work with slower APIs or long-running processes.

## More Information

- [Inject & Notify](../deploy/endpoints/inject-and-notify.md)
- [Trigger Function Node](node-reference/service/trigger-function.md)

<!--

Cognigy Functions are a big leap forward when it comes to running asynchronous code in the background. 
Functions allow you to schedule long-running code (e.g. 10 minutes!) in the background. 
Functions can be triggered and started via our [RESTful API](https://api-trial.cognigy.ai/openapi) or from within your Flows. Your code in Functions will be executed in a save containment and can inject results back into your users' conversational sessions. 

**Cognigy Functions** improves the AI solution and enables you to create asynchronous solutions in addition to the Cognigy Flows feature, which creates synchronous solutions. 

As soon as you e.g. have to start a polling job on a third-party system (e.g. an RPA tool), you need an application that can poll the external system and then use Cognigy **inject/notify API** to resolve with some data.

Cognigy Functions provides a tool for you that can be used to implement operations like this and e.g. kick-off a polling job.

Cognigy Functions are a way for you to implement long-running custom-code which can be started from within a Flow but is not limited to the execution time of such. It can interact with third-party platforms and APIs. Cognigy Functions can be started using some **Trigger**, will then be executed and can "report" their status back into a Flow using inject/notify.

Good examples for a Cognigy function are:

•	you want to start polling a third-party system for updates, e.g. while you integrate your bots with something like an RPC tool.
•	you want to execute complex code in an asynchronous way without your Flows being slow.
•	you have code that runs for quite some time, e.g. 10 minutes—without actually being responsible to run/host the code.

-->