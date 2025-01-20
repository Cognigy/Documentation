---
title: "Add Another Inbox" 
slug: "live-agent-setup-additional-inbox" 
hidden: false 
---

# Add another Inbox for your Project

You can create extra Inboxes in Live Agent and configure them for handover within your Flows.

## Add an Additional Inbox

To add another Inbox in Live Agent, follow these steps:

1. In the sidebar of the Live Agent dashboard, click **Inboxes**.
2. In the upper-right corner, click the **+ Add Inbox** button. Live Agent will show you a screen to set up your Inbox.

    <figure>
        <img src="../../../../_assets/live-agent/getting-started/LA_Inbox_setup.png" width="80%" alt="Live Agent Inbox Setup">
      <figcaption></figcaption>
    </figure>

3. On the Inbox setup page, fill in the following fields:
    - **Channel Name** — create a unique Inbox name. For example, `Cognigy Handover`.
    - **Webhook URL** — enter the Cognigy.AI Endpoint Config URL domain name, extended by `/handover/liveagent`. For example, `https://endpoint-trial.cognigy.ai/handover/liveagent`. You can find the Endpoint Config URL in the **Configuration Information** section of your Endpoint.

        <figure>
            <img src="../../../../_assets/live-agent/getting-started/LA_Config_URL.png" width="80%">
        </figure>

4. Click the **Create Cognigy.AI Inbox** button. Once you have successfully set up the Inbox, you are prompted in the next step to assign your Agents to the new Inbox. 
5. Select your required Agents in the selection list and click **Add Agents**. 

A new Live Agent Inbox has been created.

### Find Account and Inbox IDs

The new Inbox is defined by an Account ID and an Inbox ID. The Inbox ID is required to configure the **Handover to Agent** Node.

Both IDs can be found in the Live Agent URL after creating the Inbox.

To locate them, follow these steps:

1. Go to **Settings > Inboxes**.
2. In the **Inboxes** list, find the Inbox that you have created before, and click the **Settings** icon next to the Inbox. 

The Inbox settings will be displayed,
and you will see the address line of your browser as follows:
`https://liveagent-<your-environment>/app/accounts/<account-id>/settings/inboxes/<inbox-id>`.
For example, in the URL `https://liveagent-dev.cognigy.ai/app/accounts/2/settings/inboxes/32852`, the Account ID is `2`,
and the Inbox ID is `32852`.

<figure>
    <img src="../../../../_assets/live-agent/getting-started/LA_Inbox_URL.png" width="80%">
</figure>

## Configure a Flow for Handover to the Additional Inbox

To configure a Flow for a Handover to a Live Agent, follow these steps:

1. In the Cognigy.AI interface, open the Flow that contains the Handover Node.

    <figure>
        <img src="../../../../_assets/live-agent/Flow_handover_node_config.png" width="80%">
    </figure>

2. Click the **Handover to Agent** Node to open the Node Editor.
3. In the **Live Agent Settings** section, enter the Inbox Id of your new Live Agent Inbox.  
4. Click **Save Node**.

Your Flow is now configured for a Live Agent Handover.  

## What's Next?

- [Explore Conversation Workflow](../../../live-agent/conversation/overview.md)
- [Configure Conversation Routing](../../conversation/conversation-routing/overview.md)
- [Customize your Live Agent by changing the Account Settings](../../settings/overview.md)
    - [Group human agents in Teams](../../settings/teams.md)
    - [Organize your work by adding Labels](../../settings/labels.md)

