---
title: "Automation Rules"
slug: "Automation Rules"
hidden: false
---

# Automation

_Automation Rules_
can replace and automate existing processes that require manual effort.
You can do many things with automation, including adding labels and assigning conversations to the best agent.
So the team focuses on what they do best and spends less time on manual tasks.

Click on the **Automation** inside the setting section.

### Automation Events

Automation Events are triggers on when you want your automation executed. Live agent currently supports three kinds of events.

| Events               | Description                                                                                                          |
|----------------------|----------------------------------------------------------------------------------------------------------------------|
| Conversation created | Triggers when a new conversation is created in your system. This will include conversations created by all channels. |
| Conversation updated | Triggers when a conversation is updated.                                                                             |
| Message created      | Triggers when any new message inside a conversation is created.                                                      |
| Conversation opened  | Triggers when a conversation is opened in your system.                                                               |


### Automation Conditions

Conditions are criteria that will be checked before the action is executed.
The conditions are evaluated in the order they are defined.

| Conditions      | Description | Applicable Events                                                                |
|-----------------|-------------|----------------------------------------------------------------------------------|
| Assignee        |             | Conversation updated, Conversation opened                                        |
| Status          |             | Conversation created, Conversation updated                                       |
| Inbox           |             | Conversation created, Conversation updated, Conversation opened, Message created |
| Priority        |             | Conversation created, Conversation updated, Conversation opened                  |
| Team            |             | Conversation updated, Conversation opened                                        |
| Message Type    |             | Message created                                                                  |
| Message Content |             | Message created                                                                  |

### Automation Actions

Actions are tasks/processes that are executed whenever the respective conditions are met.

Live agent currently supports the following actions:

- Assign a Conversation to a team.
- Assign a label to a conversation.
- Send an email to a team.

### Create Automations

Click the **+ Add Automation Rule** button to open the Automation creation modal.

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

### Edit Automations

To edit an automation rule, click the **Edit** icon next to the desired automation rule in the list.

### Clone Automation

To make a copy of existing automation, click on the clone icon from the Automation list you want to copy.
This will create a replica of the automation with the same conditions and actions.

### Delete Automations

To delete an automation rule, click **Delete** next to the desired Automation in the list. Note that this action is permanent and cannot be undone.