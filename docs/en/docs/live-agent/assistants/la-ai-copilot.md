---
title: "LA AI Copilot"
slug: "la-ai-copilot"
hidden: false
---
# LA AI Copilot 

{! _includes/live-agent/assistant-setup.md !}

## Set up an Endpoint

To configure your Endpoint:

1. Go to **Deploy > Endpoints**.
2. Go to your **Webchat** Endpoint.
3. Scroll down to **Handover Settings** and select **Cognigy Live Agent** from the list.
4. Go to the **Copilot** section.
5. In the **Copilot Config** field, select **None**.
6. In the **Copilot Flow** field, select the name of the AI Copilot Flow you've created in the previous step.
7. Click **Save**.

The Endpoint setup is completed.

## Test LA AI Copilot

To test LA AI Copilot, follow these steps:

1. Start a Webchat session.
2. Complete the handover process to Live Agent.
3. Once the handover is complete, send a message as an Agent.
4. After that, send a message as the user in Webchat.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-webchat_f.png" width="50%" />
</figure>

Once the human agent receives this message, the testing behavior will vary depending on how you configured the Endpoint beforehand:

1. The human agent will receive a dropdown menu **Assist**. 
2. In this menu, the human agent will find the results from the Flow sent via LA AI Copilot.
       <figure>
           <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-agentview_f.png" width="55%" />
       </figure>
3. The human agent can click the blue arrow to forward content to the user.
      <figure>
           <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-agentview-forward_f.png" width="55%" />
      </figure>

       <figure>
           <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-webchat-complete_f.png" width="50%" />
       </figure>

If the testing is successful, the LA AI Copilot setup is complete.

## Troubleshooting

### The Transcript Tile Not Sending Messages

To send a message from the Transcript Tile chat to the conversation chat with the end user,
it is necessary to assign a human agent.
If the conversation remains unassigned, the Transcript Tile will not operate properly, as there will be no human agent to associate with the message when it is created.

## More Information

- [AI Copilot in Live Agent](ai-copilot.md)
- [AI Copilot Overview](../../ai-copilot/overview.md)