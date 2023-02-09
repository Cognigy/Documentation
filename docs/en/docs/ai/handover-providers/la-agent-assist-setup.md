---
 title: "Agent Assist Setup" 
 slug: "la-agent-assist-setup" 
 hidden: false 
---
# Agent Assist Setup

## Setting up a Flow

<div class="divider"></div>

Agent Assist uses a **Flow** to provide additional information to your Agents in realtime. 

To setup Agent Assist for Live Agent, first you will need to create a new Flow within your Project.

  <figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-flows.png" width="75%" />
    </figure>

During an active Live Agent handover, all customer inputs will be shot against this Flow and the outputs of the Flow are displayed to the human agent as part of the conversation.

Agent Assist messages are only shown based on customer inputs that are received during an active handover, that is after the human agent has initially responded.

!!! warning 
    You don't need to include the Handover Node in the Agent Assist Flow. Using the Handover Node in the main Live agent flow is enough for the configuration process.
     

You could create Intents, for example, and use Lookup Nodes in combination with Say Nodes to provide helpful information to your Agents based on customer inputs.



<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-flow-example.png" width="75%" />
    </figure>


## Setting up your Endpoint
<div class="divider"></div>

Now that you have setup your Flow, you will need to configure your Endpoint.

Click Deploy and then Endpoints. Go to your Webchat Endpoint.

Scroll down and click on Handover Settings. At the bottom you will find a field for **Agent Assist Flow**. 

Here, click the dropdown menu and select the name of the Agent Assist Flow you've created in the previous step.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-endpoint.png" width="75%" />
    </figure>

Clive Save and you are finished with your Endpoint setup.

## Testing Agent Assist
<div class="divider"></div>

To test Agent Assist, start a Webchat and complete handover to Live Agent. 

After the handover is complete, send a message as an Agent. Then, send a message as the user in Webchat.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-webchat.png" width="75%" />
    </figure>

Once the Agent has received this message, they will receive a dropdown menu labeled *Assist*. In this menu, they will find the results from the Flow sent via Agent Assist.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-agentview.png" width="75%" />
    </figure>

The Agent can click the blue arrow to forward content to the customer.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-agentview-forward.png" width="75%" />
    </figure>

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-webchat-complete.png" width="75%" />
    </figure>

## Setup Complete
<div class="divider"></div>

This completes the setup for Agent Assist!

For more, please visit our Live Agent documentation here: 

- [**Live Agent Overview**]({{config.site_url}}live-agent/overview/)