---
title: "Inboxes" 
slug: "inboxes" 
hidden: false 
---
# Inboxes

Inboxes are workspaces where human Agents handle real-time chat interactions with customers and manage related tasks. So an Inbox shows the connection from Cognigy.AI to Live Agent. You can have unlimited Inboxes in your Live Agent account and you can see conversations specific to an Inbox by clicking on it. Also, there are some settings you can change in already existing Inboxes.

You can create a new Inbox for your project within Live Agent on the **Settings > Inboxes** page.

## Create an Inbox

To add another Inbox in Live Agent, follow these steps:

1. Open the Live Agent interface. 
2. Go to **Insights > Inboxes**. 
3. In the upper-right corner, click the **+ Add Inbox** button. Live Agent will show you a screen to set up your Inbox. 
4. On the Inbox setup page, fill in the following fields:
    - **Channel Name** — create a unique Inbox name. For example, `Cognigy Handover`.
    - **Webhook URL** — enter the Cognigy.AI Endpoint Config URL domain name, extended by `/handover/liveagent`. For example, `https://endpoint-trial.cognigy.ai/handover/liveagent`. You can find the Endpoint Config URL in the **Configuration Information** section of your Endpoint.
5. Click the **Create Cognigy.AI Inbox** button. Once you have successfully set up the Inbox, you are prompted in the next step to assign your Agents to the new Inbox.
6. Select your required Agents in the selection list and click **Add Agents**.

A new Live Agent Inbox has been created. You can configure the Inbox settings by clicking **More settings**.

## Configure Inbox Settings

To configure the Inbox settings within Live Agent, do the following:

1. Open the Live Agent interface.
2. Go to **Insights > Inboxes**. 
3. On the **Inboxes** page, to the right of the Inbox you want to change, click **Settings**. 
4. In the **Inboxes Settings** tab window, you can update the following fields as needed:
   - Inbox Settings: You can change **Channel Avatar**, **Inbox Name** and **Webhook URL**.
   - Configure Assist Bots Settings: You can add and configure a new [Assist Bot](./../conversation/assist-bot.md).
5. In the **Inboxes Collaborators** tab window, you can update following fields as needed:
   - Agents: Add or remove Agents from this Inbox, using the selection list.
   - Conversation Assignment: Update conversation assignment settings. Details see below section [Conversation Assignments](#conversation-assignments) below.
6. In the **Inboxes Configuration** tab window, you will find:
   - Inbox identifier**: Use the `inbox_identifier` token shown here to authenticate your API clients. Click on "Copy" to have it available when it is required in another application.  
   - Inbox ID: Inbox ID that is used on the API and User interface URL pathnames. Click on "Copy" to have it available when it is required in another application .
7. Click **Update** to confirm a changed settings.

The Inboxes fields and settings will be updated.

## Delete an Inbox

To delete an Inbox within Live Agent, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. In the settings column, select **Inboxes**.
4. On the **Teams** page, to the right of the team you want to delete, click **Delete**.
5. You are prompted to enter the Inbox name you want to delete, e.g. 'Virtual Agent with Live Agent', then click '**Delete Virtual Agent with Live Agent**' to confirm. 
When the Inbox is mapped to a Cognigy.AI project, an info will be displayed.
When you delete an Inbox, it will be irrevocable. And the synchronization with Cognigy.AI will be lost.

## Conversation Assignments

To configure the conversation assignments within Live Agent, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. In the settings column, select **Inboxes**.
4. On the **Inboxes** page, to the right of the Inbox you want to change, click **Settings** and open the **Collaborators** tab. When editing an Inbox in this field you can define following options:

    4.1 **Enable** or **Disable** the automatic assignment of conversations to the Agents added to this Inbox. To set up the auto-assignment of conversations you can activate following options:

    - Consider conversation count
    - Consider conversation skills
    - Consider conversation languages
    - Consider conversation priority
   
    You can choose to assign conversations based on the number of conversations an agent is currently handling, the skills of the agent and the skills required for the conversation, the languages of the agent and the languages required for the conversation, and the priority of the conversation. You can use a combination of these options.

    4.2 **Enable** or **Disable** reassignment of a conversation to active Agents in this Inbox when the current Agent goes offline.

    4.3 **Enable** or **Disable** all conversations in this Inbox to be seen for all Agents, even if they are not assigned to any of them.
