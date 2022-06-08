---
 title: "Automation Rules" 
 slug: "Automation Rules" 
 hidden: false 
---
# Automations

Automation can replace and automate existing processes that require manual effort. 
You can do many things with automation, including adding labels and assigning conversation to the best agent. 
So the team focuses on what they do best and spends more little time on manual tasks.

Click on the **Automation** inside the setting section .

<figure>
<img src="{{config.site_url}}live-agent/images/LA-automation-rules.png" width="100%" alt="Automation Rules Section " />
  <figcaption>Automation Rules Section</figcaption>
</figure>

### Automation Events
Automation Events are triggers on when you want your automation executed. Live agent currently supports three kinds of events.

- Conversation created - this will trigger when a new conversation is created in your system. This will include conversations created by all channels.
- Conversation updated - this will trigger when a conversation is updated.
- Message created - this will be triggered when any new message inside a conversation is created.

### Automation Conditions

Conditions are a criteria that will be checked before the action is executed. 
The conditions are evaluated in the order they are defined.

| Conversation Created   | Conversation Updated   | Message Updated     |
|------------------------|------------------------|---------------------|
| Conversation Status	   | Conversation Status    | Message Type        |
| Browser Language       | Browser Language       | Message Contains    |
| Country                | Country                |                     |
| Referrer Link          | Referrer Link          |                     |
|                        | Assignee               |                     |
|                        | Team                   |                     |

### Automation Actions

Actions are tasks/processes that are executed whenever respective conditions are met.

Live agent currently supports the following actions:

- Assign conversation to a team.
- Assign label to a conversation.
- Send email to a team.

### Creating Automations

Click on the **+ Add Automation Rule** button open the Automation creation modal.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-add-automation.png" width="100%" alt="Live Agent Add Automation" />
  <figcaption>Live Agent Add Automation</figcaption>
</figure>

- Give your automation a name.
- Add a description (optional).
- Select an event.
- Add conditions.
- Add actions.
- You can chain multiple conditions with the AND or OR operator, like the below example.

Example - Assigning a conversation to a team when the agent assist is active and Status is Open, when a new conversation is created.

- Add a name and a description
- Select event as Conversation Created
- Add two conditions and join them with the AND operator, Condition 1 - Conversation Status as Open and Condition 2 - Inbox as Agent Assist bot-default from the dropdown.
- Add an action - Assign a team and select the team sales from the dropdown. (You need to create your team first)

<figure>
<img src="{{config.site_url}}live-agent/images/LA-add-automation-rules.png" width="100%" alt="Live Agent Add Automation Rules" />
  <figcaption>Live Agent Add Automation Rules</figcaption>
</figure>

### Editing Automations

To edit an automation, click on the **Edit** icon from the automations list you want to edit.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-edit-automation-rules.png" width="100%" alt="Live Agent Edit Automation Rules" />
  <figcaption>Live Agent Edit Automation Rules</figcaption>
</figure>

### Clone Automation

To make a copy of an existing automation, just click on the clone icon from the automations list you want to copy. 
This will create an exact replica of the automation with the same conditions and actions.

### Deleting Automations
To delete an automation, click on the delete button from the list, note that this is permanent and cannot be undone.






