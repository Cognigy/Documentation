---
title: "Agent Assist Workspace Setup"
slug: "la-agent-assist-workspace-setup"
hidden: false
---
# Agent Assist Workspace Setup

{! _includes/ai/providers/live-agent/agent-assist-setup.md. !}

## Set up an Endpoint

To configure your Endpoint:

1. Go to **Deploy > Endpoints**.
2. Go to your **Webchat** Endpoint.
3. Scroll down to **Handover Settings** and select **Cognigy Live Agent** from the list.
4. Go to the **Agent Assist (beta)** section.
5. In the **Agent Assist Config** field, select a config you recently created via [API](https://api-trial.cognigy.ai/openapi#post-/v2.0/agentassistconfigs).
6. Click **Save**.
7. In Live Agent, go to **Profile settings > Agent Assist Workspace** and select **Enable Agent Assist Workspace**. Alternatively, you can activate the Workspace for all human agents in your project. To do this, go to **Settings > Account Settings > Agent Assist Workspace** and select **Enable Agent Assist Workspace**, then click **Update Settings**.

The Endpoint setup is completed.

## Test Agent Assist Workspace

To test Agent Assist, follow these steps:

1. Start a Webchat session.
2. Complete the handover process to Live Agent.
3. Once the handover is complete, send a message as an Agent.
4. After that, send a message as the user in Webchat.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-webchat.png" width="50%" />
</figure>

Once the human agent receives this message, the testing behavior will vary depending on how you configured the Endpoint beforehand.

This Workspace is accessible from the right side of the conversation chat.
      
<figure>
 <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/agent-assist-la.png" width="90%" />
</figure>

If the testing is successful, the Agent Assist setup is complete.

## More information 

- [Agent Assist Workspace Overview](../../agent-assist/overview.md)
- [Getting started with Agent Assist Workspace](../../agent-assist/getting-started.md)