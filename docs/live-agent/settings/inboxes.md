---
title: "Inboxes" 
slug: "inboxes" 
hidden: false 
---

# Inboxes

[![Version badge](https://img.shields.io/badge/Updated in-v4.88-blue.svg)](../../release-notes/4.88.md)

_Inboxes_ are workspaces where human agents handle real-time chat interactions with customers and manage related tasks. Each Inbox ID represents the connection from Cognigy.AI to Live Agent. 

You can have an unlimited number of Inboxes in your Live Agent account, and you can view conversations specific to an Inbox by clicking on it. 

Within the Inbox setting, you can customize the appearance of the Inbox, add and remove agents,
configure message visibility for them, set up conversation routing, and add assistant bots.

## Create an Inbox

To create an Inbox in Live Agent, do the following:

1. Open the Live Agent interface. 
2. Go to **Settings > Inboxes**.
3. In the upper-right corner, click **+ Add Inbox**. Live Agent will show you a screen to set up your Inbox. 
4. On the **Inbox setup** page, fill in the following fields:
    - **Channel Name** — create a unique Inbox name. For example, `Cognigy Handover`. The name can contain any characters but can't start with `=`.
    - **Webhook URL** — enter the Cognigy.AI Endpoint Config URL domain name, extended by `/handover/liveagent`. For example, `https://endpoint-trial.cognigy.ai/handover/liveagent`. You can find the Endpoint Config URL in the **Configuration Information** section of your Endpoint.
5. In the **Pick agents for the inbox** list, select agents by either clicking it or hovering your cursor over it and then pressing ++enter++. You can select multiple agents from the list. Agents can belong to different inboxes simultaneously.
6. Click the **Create Cognigy.AI Inbox** button. Once you have successfully set up the Inbox, you are prompted in the next step to assign your agents to the new Inbox.
7. Select your required agents in the selection list and click **Add Agents**.

A new Live Agent Inbox has been created. You can configure the Inbox settings by clicking **More settings**.

The changes will be applied.

## Edit Inbox

To edit an Inbox, follow these steps:

1. In the Live Agent interface, go to **Settings > Inboxes**.
2. On the **Inboxes** page, click ![gear](../../_assets/icons/gear.svg) next to the Inbox you want to edit. 
4. In the **Inboxes Settings** section, update the following fields:
    - **Channel Avatar** — upload an image that represents the Inbox. The Channel Avatar helps you identify the Inbox visually. 
    - **Inbox Name**
    - **Cognigy Project ID** — enter the Project ID of the Project to which you want to assign the Inbox. You can [copy the Project ID](../../ai/build/projects.md#copy-the-project-id) from the Cognigy.AI interface. If you enter an invalid Project ID, you receive an error message and cannot update the Inbox. After you assign the Inbox to a Project, [copy the Inbox ID](#copy-inbox-id) and enter it in the **Live Agent Inbox Id** field of the respective Nodes of the Project, for example, the [Handover Agent](../../ai/build/node-reference/service/handover-to-agent.md#live-agent-settings) and [Check Agent Availability](../../ai/build/node-reference/service/check-agent-availability.md#settings) Nodes.
    - **Webhook URL** — enter the Cognigy.AI Endpoint Config URL domain name, extended by `/handover/liveagent`. For example, `https://endpoint-trial.cognigy.ai/handover/liveagent`. You can find the Endpoint Config URL in the **Configuration Information** section of your Endpoint.
5. Click **Update**.

## Copy Inbox ID

Each Inbox ID represents the connection from Cognigy.AI to Live Agent and is used in API and UI URL path names.

To connect an Inbox to Cognigy.AI,
copy the ID of the Inbox
and specify it in the **Live Agent Settings** section in the [Handover to Agent](../../ai/build/node-reference/service/handover-to-agent.md) Node on the Cognigy.AI side.

To copy an Inbox ID, follow these steps:

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. In the settings column, select **Inboxes**.
4. On the **Configuration** tab, go to the **Inbox ID** section.
5. Click **Copy**.

## Delete an Inbox

Deleting an Inbox is irreversible and will result in the loss of synchronization with Cognigy.AI.

To delete an Inbox within Live Agent, do the following:

1. Open the Live Agent interface.
2. Go to **Settings > Inboxes**. 
3. On the **Inboxes** page, to the right of the team you want to delete, click **Delete**. 
4. You are prompted to enter the Inbox name you want to delete. 
5. Click **Yes, Delete**.

The selected Inbox will be deleted.

## Control Conversation Routing within an Inbox

To configure the conversation assignments within Live Agent, do the following:

1. Go to Live Agent.
2. Go to **Settings > Inboxes**. 
3. On the **Inboxes** page, to the right of the Inbox you want to change, click **Settings** and open the **Collaborators** tab. 
4. In the **Conversation Assignment** sections, update the conversation assignment settings:
    - [Allow auto assignment](../conversation/conversation-routing/automatic-mode.md#automatic-assignment)
    - [Allow conversations to be reassigned](../conversation/conversation-routing/automatic-mode.md#automatic-reassignment)

The changes will be applied successfully.

## Add Agents to an Inbox

To add agents to an Inbox, do the following:

1. Open the Live Agent interface.
2. Go to **Settings > Inboxes**.
3. On the **Inboxes** page, to the right of the Inbox you want to change, click **Settings**.
4. On the **Collaborators** tab, go to the **Agents** section.
5. In the agent list, select agents by either clicking it or hovering your cursor over it and then pressing ++enter++. You can select multiple agents from the list. Agents can belong to different inboxes simultaneously.
6. Click **Update**.

The changes will be applied.

## Configure Agent Access to all Inbox Conversations

By default, your agents can see all messages within an Inbox. 
To change this behavior for agents with the `Agent` role, do the following:

1. Open the Live Agent interface.
2. Go to **Settings > Inboxes**.
3. On the **Inboxes** page, to the right of the Inbox you want to change, click **Settings** and open the **Collaborators** tab.
4. In the **Conversation Assignment** section, disable the **Allow Agents to see all conversations in this inbox** setting.

The changes will be applied. Note that this setting will not affect agents with the `Administrator` or `Supervisor` roles.
They will still be able to see all messages within the Inbox.

## Remove Agents from an Inbox

To remove the Inbox appearance, do the following:

1. Open the Live Agent interface.
2. Go to **Settings > Inboxes**.
3. On the **Inboxes** page, to the right of the Inbox you want to change, click **Settings**.
4. On the **Collaborators** tab, go to the **Agents** section.
5. In the agent list, remove an agent by clicking **x** on the right side of the agent's name.
6. Click **Update**.

## Add an AI Copilot Bot 

Within an Inbox, you can add one or multiple AI Copilot Bots that will assist your human agents.
To create such a bot, you need to have a separate Flow and Endpoint on the Cognigy.AI side.
For more details, refer to [AI Copilot Bot](../assistants/ai-copilot-bot.md). 

## More Information

- [Agents](agents.md)
- [AI Copilot Bot](../assistants/ai-copilot-bot.md)
- [Conversation Routing](../conversation/conversation-routing/overview.md)