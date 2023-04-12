---
 title: "Agent Handover" 
 slug: "agent-handover" 
 hidden: false 
---
# Agent Handover

Human support **Agent Handover** is a critical tool for incorporating virtual agents into existing contact center workflows. Direct communication between virtual agents and human agents will enrich the experience of a customer beyond the capabilities of a Conversational AI.

## Handover Processes
<div class="divider"></div>

If a request from a user is an edge case that is just too specific to be handled by the Bot, the bot can offer the user to be forwarded to a support agent, a real human, that can intercept the conversation and help the customer manually without the need to change channels.

**Agent Handover Processes** can be integrated in a Flow by using the **Handover to Agent Node**. If this Node is triggered, a Handover request from the customer is sent to the **Contact Center Service** that has been configured in the [Endpoint Handover Settings]({{config.site_url}}ai/endpoints/handover-settings/). A human agent can then intercept and take over the conversation from the virtual agent.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/handover-flow.png" width="100%" />
</figure>

Once a Handover has been initiated, the normal execution of the Flow is paused until the customer who is waiting for a support agent cancels the request, or until an agent finishes the conversation. Before the conversation with an agent has started, the customer can cancel the request and go back to the normal flow execution by triggering a selected intent or a dedicated quick reply.

!!! note "New Handover Node"
    The old Handover Node has been replaced with a `Handover To Agent` Node. The content below is only applicable to the new `Handover to Agent` Node


When the Handover is finished, the Flow execution will continue below the Handover to Agent Node. A handover property will be added to the input object, which exposes information about why the handover was finished. The object that is exposed has the following structure:

```JavaScript
{
    "handover": {
        "status": "completed"
    }
}
```

The status can have the following values:

| Handover Status  | Description |
| -- | -- |
| completed | The Handover was finished by the agent |
| cancelled | The user has cancelled the Handover request |
| error | An error occurred when requesting the Handover |

In case of an error, the handover object is extended to contain additional information:

```JavaScript
{
    "handover": {
        "status": "completed",
        "error": {
          "reason": "unsupported",
          "message": ""
        }
    }
}
```

The error reason can either be `unsupported` in case the user channel does not support doing a Handover, or `error` if something went wrong when contacting the Handover Provider.

There is also a `Handover Status` [Token]({{config.site_url}}ai/resources/manage/tokens/) which can be used to access the handover status in the Flow.

### Handling the Handover Status
To configure different behavior of the Virtual Agent based on the Handover status, you can use a `Lookup` Node to handle the different possible outcomes of a Handover. In the `Lookup` Node you can select to lookup on the `Handover Status`.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/handover-node-usage.png" width="100%" />
</figure>

## Handover to Agent Node
<div class="divider"></div>

The `Handover to Agent` Node has the following fields:

|Parameter|	Type	|Description|
|--|--|--|
|Handover Accepted Message|	CognigyScript|	The message to output if the Handover was requested|
|Repeat Handover Accepted Message | Toggle | Whether to re-output the Handover Accepted Message when the user sends a message while waiting in the queue for an agent |
|Cancel Intent |	CognigyScript|	The intent the user has to trigger to cancel the Handover request|
|Cancel Button Text |	CognigyScript|	The text for a quick reply button that cancels the Handover request when clicked|

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/handover-node-settings.png" width="100%" />
</figure>

## Handover Providers

For a list of supported Handover services, refer to the [Handover Providers Overview]({{config.site_url}}ai/handover-providers/overview/).