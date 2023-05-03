---
 title: "Agent Assist Setup" 
 slug: "la-agent-assist-setup" 
 hidden: false 
---
# Agent Assist Setup

## Set up a Flow

<div class="divider"></div>

Agent Assist uses a **Flow** to provide additional information to your Agents in realtime. 

To set up Agent Assist for Live Agent, first you will need to create a new Flow within your Project.

  <figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-flows.png" width="75%" />
    </figure>

During an active Live Agent handover, all customer inputs will be shot against this Flow and the outputs of the Flow are displayed to the human agent as part of the conversation.

Agent Assist messages are only shown based on customer inputs that are received during an active handover, that is after the human agent has initially responded.

!!! warning 
    You don't need to include the Handover Node in the Agent Assist Flow. Using the Handover Node in the main Live Agent Flow is enough for the configuration process.
     
You could create Intents, for example, and use Lookup Nodes in combination with Say Nodes to provide helpful information to your Agents based on customer inputs.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-flow-example.png" width="75%" />
    </figure>


## Set up an Endpoint
<div class="divider"></div>

To configure your Endpoint:

=== "Agent Assist"
    1. Go to **Deploy > Endpoints**. 
    2. Go to your **Webchat** Endpoint.
    3. Scroll down to **Handover Settings** and select **Cognigy Live Agent** from the list.
    4. Go to the **Agent Assist (beta)** section.
    5. In the **Agent Assist Flow** field, select the name of the Agent Assist Flow you've created in the previous step.
    6. Click **Save**.

=== "Agent Assist Workspace"
    1. Go to **Deploy > Endpoints**. 
    2. Go to your **Webchat** Endpoint.
    3. Scroll down to **Handover Settings** and select **Cognigy Live Agent** from the list.
    4. Go to the **Agent Assist (beta)** section.
    5. In the **Agent Assist Config** field, select a config that you recently created via [API](https://api-trial.cognigy.ai/openapi#post-/v2.0/agentassistconfigs).
    6. Click **Save**.
    7. In Live Agent, go to **Profile settings > Agent Assist Workspace** and select **Enable Agent Assist Workspace**. Alternatively, you can activate the Workspace for all human agents in your project. To do this, go to **Settings > Account Settings > Agent Assist Workspace** and select **Enable Agent Assist Workspace**.

The Endpoint setup is completed.

## Test Agent Assist
<div class="divider"></div>

To test Agent Assist, start a Webchat and complete handover to Live Agent. 

After the handover is complete, send a message as an Agent. Then, send a message as the user in Webchat.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-webchat.png" width="75%" />
    </figure>


Once the human agent has received this message, the behavior of testing will differ depending on how you configured the Endpoint before:

=== "Agent Assist"

    1. The human agent will receive a dropdown menu labeled *Assist*. 
    2. In this menu, the human agent will find the results from the Flow sent via Agent Assist.
           <figure>
               <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-agentview.png" width="75%" />
           </figure>
    3. The human agent can click the blue arrow to forward content to the user.
          <figure>
               <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-agentview-forward.png" width="75%" />
          </figure>
    
           <figure>
               <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-webchat-complete.png" width="75%" />
           </figure>

=== "Agent Assist Workspace"
    
     The human agent will receive a link to the Workspace in the conversation chat. 
     This Workspace is also accessible from the right side of the chat.
      
       <figure>
         <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/agent-assist-la.png" width="75%" />
       </figure>

If the testing is successful, the Agent Assist setup is complete.