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

**Agent Handover Processes** can be integrated in a Flow by using the **Handover Node**. If this Node is triggered, a Handover request from the customer is sent to the **Contact Center Service** that has been configured in the [Endpoint Handover Settings]({{config.site_url}}ai/endpoints/handover-settings/). A human agent can then intercept and take over the conversation from the virtual agent.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/a26ae2b-handover.PNG" width="100%" />
</figure>

Once a Handover has been initiated, the normal execution of the Flow is paused until the customer who is waiting for a support agent cancels the request, or until an agent finishes the conversation. Before the conversation with an agent has started, the customer can cancel the request and go back to the normal flow execution by triggering a selected intent or a dedicated quick reply.

## Handover Node
<div class="divider"></div>

The Handover Node has the following fields:

|Parameter|	Type	|Description|
|--|--|--|
|Text Message|	CognigyScript|	Default text to output if the Handover was requested|
|Cancel Intent Name|	CognigyScript|	The intent the user has to trigger to cancel the Handover request|
|Unavailable Message|	CognigyScript|	Default text to output if the Live Chat service is unavailable|
|Unsupported Channel Message|	CognigyScript|	Default text to output if the channel that the user is using, does not support Live Chat|
|Quick Reply Text|	CognigyScript|	The text for a quick reply button that cancels the Handover request|