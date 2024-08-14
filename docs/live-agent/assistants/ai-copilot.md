---
title: "AI Copilot"
slug: "ai-copilot"
hidden: false
---
# AI Copilot in Live Agent

[![Version badge](https://img.shields.io/badge/Added in-v4.51-blue.svg)](../../release-notes/4.51.md)

{! _includes/ai-copilot/before-you-begin.md !}

{! _includes/live-agent/assistant-setup.md !}

## Set up an Endpoint

To configure your Endpoint:

1. Go to **Deploy > Endpoints**.
2. Go to your **Webchat** Endpoint.
3. Scroll down to **Handover Settings** and select **Cognigy Live Agent** from the list.
4. Go to the **Copilot** section.
5. In the **Copilot Config** field, select a config you recently created via [API](https://api-trial.cognigy.ai/openapi#post-/v2.0/agentassistconfigs).
6. Click **Save**.
7. In Live Agent, go to **Profile settings > AI Copilot** and select **Enable AI Copilot Workspace**. Alternatively, you can activate the Workspace for all human agents in your project. To do this, go to **Settings > Account Settings > AI Copilot Workspace** and select **Enable AI Copilot Workspace**, then click **Update Settings**.

The Endpoint setup is completed.

## Test AI Copilot Workspace

To test AI Copilot, follow these steps:

1. Start a Webchat session.
2. Complete the handover process to Live Agent.
3. Once the handover is complete, send a message as a human agent.
4. After that, send a message as the user in Webchat.

<figure>
    <img class="image-center" src="../../../../_assets/live-agent/la-agent-assist-webchat.png" width="50%" />
</figure>

Once the human agent receives this message, the testing behavior will vary depending on how you configured the Endpoint beforehand.

This Workspace is accessible from the right side of the conversation chat.
      
<figure>
 <img class="image-center" src="../../../../_assets/live-agent/la-agent-assist-workspace.png" width="90%" />
</figure>

If the testing is successful, the AI Copilot setup is complete.

## Troubleshooting

### Transcript Tile Not Sending Messages

To send messages from the Transcript Tile chat to the end user's conversation chat, assign a human agent.
If the conversation remains unassigned, the Transcript Tile will not operate properly, as there will be no human agent to associate with the message when it is created.

## More Information 

- [AI Copilot Overview](../../ai-copilot/overview.md)
- [Getting started with AI Copilot](../../ai-copilot/getting-started.md)