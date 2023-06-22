---
title: "Automation Rules"
slug: "Automation Rules"
hidden: false
---
# Automations

Automation can replace and automate existing processes that require manual effort.
You can do many things with automation, including adding labels and assigning conversations to the best agent.
So the team focuses on what they do best and spends less time on manual tasks.

Click on the **Automation** inside the setting section.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-automation-rules.png" width="100%" alt="Automation Rules Section " />
  <figcaption>Automation Rules Section</figcaption>
</figure>

### Automation Events
Automation Events are triggers on when you want your automation executed. Live agent currently supports three kinds of events.

- Conversation created — this will trigger when a new conversation is created in your system. This will include conversations created by all channels.
- Conversation updated — this will trigger when a conversation is updated.
- Message created — this will be triggered when any new message inside a conversation is created.

### Automation Conditions

Conditions are criteria that will be checked before the action is executed.
The conditions are evaluated in the order they are defined.

| Conversation Created | Conversation Updated | Message Updated  |
|----------------------|----------------------|------------------|
| Conversation Status  | Conversation Status  | Message Type     |
|                      | Assignee             | Message Contains |
|                      | Team                 |                  |

### Automation Actions

Actions are tasks/processes that are executed whenever the respective conditions are met.

Live agent currently supports the following actions:

- Assign a Conversation to a team.
- Assign a label to a conversation.
- Send an email to a team.

### Creating Automations

Click on the **+ Add Automation Rule** button to open the Automation creation modal.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-add-automation.png" width="100%" alt="Live Agent Add Automation" />
  <figcaption>Live Agent Add Automation</figcaption>
</figure>

1. Give your automation a name.
2. Add a description (optional).
3. Select an event.
4. Add conditions.
5. Add actions.
6. You can chain multiple conditions with the `AND` or `OR` operator, like in the example below.

Example: When Agent Assist is active and a new conversation is created with the `Open` status, the conversation is assigned to a team.

- Add a name and a description
- Select event as Conversation Created
- Add two conditions and join them with the AND operator, Condition 1 - Conversation Status as Open and Condition 2 - Inbox as Agent Assist bot-default from the dropdown.
Add an action: Assign the conversation to the Sales team by selecting it from the dropdown menu. Make sure to create the Sales team before performing this action.
<figure>
<img src="{{config.site_url}}live-agent/images/LA-add-automation-rules.png" width="100%" alt="Live Agent Add Automation Rules" />
  <figcaption>Live Agent Add Automation Rules</figcaption>
</figure>

### Editing Automations

To edit an automation rule, click the **Edit** icon next to the desired automation rule in the list.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-edit-automation-rules.png" width="100%" alt="Live Agent Edit Automation Rules" />
  <figcaption>Live Agent Edit Automation Rules</figcaption>
</figure>

### Clone Automation

To make a copy of existing automation, click on the clone icon from the Automation list you want to copy.
This will create a replica of the automation with the same conditions and actions.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-clone-automation-rules.png" width="100%" alt="Live Agent Edit Automation Rules" />
  <figcaption>Live Agent Edit Automation Rules</figcaption>
</figure>

### Deleting Automations

To delete an automation rule, click **Delete** next to the desired Automation in the list. Note that this action is permanent and cannot be undone.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-delete-automation-rules.png" width="100%" alt="Live Agent Edit Automation Rules" />
  <figcaption>Live Agent Edit Automation Rules</figcaption>
</figure>