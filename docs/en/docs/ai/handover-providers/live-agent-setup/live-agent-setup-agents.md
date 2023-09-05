---
title: "Add Agents and Admins" 
slug: "add-agents-and-admins" 
hidden: false 
---

# Add Agents and Admins to Live Agent

Once you have [set up your Endpoint and Flow for Handover to Live Agent](live-agent-setup-handover.md), tested a Conversation, you can then proceed to add new Agents and Admins and assign them to Inboxes in Live Agent.

## Create a User

To create a User, follow these steps:

1. Open the Cognigy.AI interface. If the Agent or Admin you want to add already exists as a User in Cognigy.AI, proceed to [Adding Live Agent Roles to Users](#Adding-Live-Agent-Roles-to-Users).
2. In the upper-right corner, click **User Menu > Access Control**.
3. In the upper-left corner of the **Users** page, click **+ Create new User**. 
4. In the **New User** window, fill in the following fields:
    - **Display Name** — enter the name that you want to be displayed for this user. For example, `John Doe`.
    - **Email Address** — enter the user's email address. For example, `johndoe@example.com`.
    - **Password** — set a password for the user's account. A user can change a password later.
5. Click **Save**.

Once a user has been created, you can assign Live Agent roles to this user.

## Add Live Agent Roles to Users

Cognigy Live Agent has three different user roles:

- `Administrator`
- `Agent`
- `Supervisor`

For more information, see [Live Agent Roles](../../../live-agent/roles.md).

To add one of these roles to users, follow these steps:

1. Open the Cognigy.AI interface.
2. In the upper-right corner, click **User Menu > Access Control**. 
3. Select a user you would like to assign roles to.
4. On the User page, go to the **Global Roles** section. 
5. Click **+** and select the needed role. 
6. Assign one of the following roles:
    - `liveAgentAdmin` — for users intended to have Admin rights in Live Agent.
    - `liveAgentAgent` — for users intended to have Agent rights in Live Agent.

After assigning the Live Agent Role to the user, you can add them to an Inbox.

## Add Agents to an Inbox

To add an Agent to an Inbox, follow these steps:

1. Open the Live Agent interface.
2. In the left-side menu, click **Settings**.
3. Go to **Inboxes**, select an Inbox and click the gear icon next to your Inbox.
4. Open the **Collaborators** tab. 
5. Go to the **Agents** section, click the Agent list and select Agents from this list. 
6. Click **Update**.

When the Agents have been included in the Inbox, you can [add another Inbox for your Project](https://docs.cognigy.com/ai/handover-providers/live-agent-setup/live-agent-setup-additional-inbox/).