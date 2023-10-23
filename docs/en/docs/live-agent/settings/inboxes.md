---
title: "Inboxes" 
slug: "inboxes" 
hidden: false 
---
# Inboxes

_Inboxes_ are workspaces where human agents handle real-time chat interactions with customers and manage related tasks. Each Inbox ID represents the connection from Cognigy.AI to Live Agent. 

You can have an unlimited number of Inboxes in your Live Agent account, and you can view conversations specific to an Inbox by clicking on it. Additionally, there are several settings you can change in already existing Inboxes.

## Create an Inbox

To create an Inbox in Live Agent, follow these steps:

1. Open the Live Agent interface. 
2. Go to **Settings > Inboxes**.
3. In the upper-right corner, click the **+ Add Inbox** button. Live Agent will show you a screen to set up your Inbox. 
4. On the Inbox setup page, fill in the following fields:
    - **Channel Name** — create a unique Inbox name. For example, `Cognigy Handover`.
    - **Webhook URL** — enter the Cognigy.AI Endpoint Config URL domain name, extended by `/handover/liveagent`. For example, `https://endpoint-trial.cognigy.ai/handover/liveagent`. You can find the Endpoint Config URL in the **Configuration Information** section of your Endpoint.
5. In the **Pick agents for the inbox** list, select agents by either clicking it or hovering your cursor over it and then pressing ++enter++. You can select multiple agents from the list. Agents can belong to different inboxes simultaneously.
6. Click the **Create Cognigy.AI Inbox** button. Once you have successfully set up the Inbox, you are prompted in the next step to assign your Agents to the new Inbox.
7. Select your required Agents in the selection list and click **Add Agents**.

A new Live Agent Inbox has been created. You can configure the Inbox settings by clicking **More settings**.

### Add Agents to an Inbox

1. Open the Live Agent interface.
2. Go to **Settings > Inboxes**.
3. On the **Inboxes** page, to the right of the Inbox you want to change, click **Settings**.
4. On the **Collaborators** tab, go to the **Agents** section.
5. In the agent list, select agents by either clicking it or hovering your cursor over it and then pressing ++enter++. You can select multiple agents from the list. Agents can belong to different inboxes simultaneously.
6. Click **Update**.
7. _(Optional)_  If you want your agents to see all messages within the Inbox, not just their own, enable the **Allow Agents to see all conversations in this inbox** setting in the **Conversation Assignment** section.

### Remove Agents from an Inbox

1. Open the Live Agent interface.
2. Go to **Settings > Inboxes**.
3. On the **Inboxes** page, to the right of the Inbox you want to change, click **Settings**.
4. On the **Collaborators** tab, go to the **Agents** section. 
5. In the agent list, remove an agent by clicking **x** on the right side of the agent's name.
6. Click **Update**.

## Configure an Inbox Appearance

To configure the Inbox appearance, do the following:

1. Open the Live Agent interface.
2. Go to **Settings > Inboxes**. 
3. On the **Inboxes** page, to the right of the Inbox you want to change, click **Settings**. 
4. In the **Inboxes Settings** tab window, you can update the following fields as needed:
   - **Channel Avatar** - upload an image or icon that represents the Inbox. It is used for visual identification. 
   - **Inbox Name** - edit the name of the Inbox here, which can be helpful for organizational purposes.
5. Click **Update**.

The Inboxes fields and settings will be updated.

## Delete an Inbox

To delete an Inbox within Live Agent, do the following:

1. Open the Live Agent interface.
2. Go to **Settings > Inboxes**. 
3. On the **Inboxes** page, to the right of the team you want to delete, click **Delete**. 
4. You are prompted to enter the Inbox name you want to delete. 
5. Click **Yes, Delete**.

Deleting an Inbox is irreversible and will result in the loss of synchronization with Cognigy.AI.

## Copy an Inbox ID

Each Inbox ID represents the connection from Cognigy.AI to Live Agent and is used in API and User Interface URL path names.

To connect an Inbox to Cognigy.AI,
copy the ID of the Inbox
and specify it in the **Live Agent Settings** section in the [Handover to Agent](../../ai/tools/agent-handover.md) Node on the Cognigy.AI side.

To copy an Inbox ID, follow these steps:

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. In the settings column, select **Inboxes**.
4. On the **Configuration** tab, go to the **Inbox ID** section.
5. Click **Copy**.

## Control Conversation Routing within an Inbox

To configure the conversation assignments within Live Agent, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. In the settings column, select **Inboxes**.
4. On the **Inboxes** page, to the right of the Inbox you want to change, click **Settings** and open the **Collaborators** tab. When editing an Inbox in this field, you can define the following options:

    4.1 **Enable** or **Disable** the automatic assignment of conversations to the Agents added to this Inbox. To set up the auto-assignment of conversations you can activate following options:

    - Consider conversation count
    - Consider conversation skills
    - Consider conversation languages
    - Consider conversation priority
   
    You can choose to assign conversations based on the number of conversations an agent is currently handling, the skills of the agent and the skills required for the conversation, the languages of the agent and the languages required for the conversation, and the priority of the conversation. You can use a combination of these options.

    4.2 **Enable** or **Disable** reassignment of a conversation to active Agents in this Inbox when the current Agent goes offline.

    4.3 **Enable** or **Disable** all conversations in this Inbox to be seen for all Agents, even if they are not assigned to any of them.



------

5. In the **Inboxes Collaborators** tab window, you can update the following fields as needed:
   - Conversation Assignment: Update conversation assignment settings. Details see below the section [Conversation Assignments](#conversation-assignments) below.


   - Configure Assist Bots Settings: You can add and configure a new [Assist Bot](./../conversation/assist-bot.md). 
