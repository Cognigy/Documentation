---
title: "AI Copilot Whisper"
slug: "ai-copilot-whisper"
hidden: false
tags:
  - Live Agent
  - Assistant
  - Whisper
---

# AI Copilot Whisper 

{! _includes/live-agent/assistant-setup.md !}
 
### Supported Output Types

AI Copilot Whisper supports all output types that can be selected in the [Say](../../ai/build/node-reference/overview.md), [Question](../../ai/build/node-reference/overview.md), or [Optional Question](../../ai/build/node-reference/overview.md) Nodes.

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

## Test AI Copilot Whisper

To test AI Copilot Whisper, follow these steps:

1. Start a Webchat session.
2. Complete the handover process to Live Agent.
3. Once the handover is complete, send a message as a human agent.
4. After that, send a message as the user in Webchat.

<figure>
    <img class="image-center" src="../../../../_assets/live-agent/la-agent-assist-webchat_f.png" width="70%" />
</figure>

Once the human agent receives this message, the testing behavior will vary depending on how you configured the Endpoint beforehand:

1. The human agent will receive a dropdown menu **AI Copilot**. 
2. In this menu, the human agent will find the results from the Flow sent via AI Copilot Whisper.
       <figure>
           <img class="image-center" src="../../../../_assets/live-agent/la-agent-assist-agentview_f.png" width="65%" />
       </figure>
3. The human agent can click the blue arrow to forward content to the user.
      <figure>
           <img class="image-center" src="../../../../_assets/live-agent/la-agent-assist-agentview-forward_f.png" width="80%" />
      </figure>

       <figure>
           <img class="image-center" src="../../../../_assets/live-agent/la-agent-assist-webchat-complete_f.png" width="70%" />
       </figure>

If the testing is successful, the AI Copilot Whisper setup is complete.

## More Information

- [AI Copilot in Live Agent](ai-copilot.md)
- [AI Copilot Overview](../../ai-copilot/overview.md)