---
title: "Automation Rules"
slug: "Automation Rules"
hidden: false
---

# Automation

[![Version badge](https://img.shields.io/badge/Updated in-v4.61-blue.svg)](../../release-notes/4.61.md)

_Automation Rules_ are a powerful tool to enhance efficiency and streamline processes by automating various tasks within your workflow. With these rules, you can easily assign conversations to specific agents or teams, add labels, adjust priorities, and more without manual intervention. By leveraging Automation Rules, you save time and resources, allowing your team to focus on their core competencies and minimize the time spent on routine tasks.

## Automation Rule Components

Each automation rule contains the following components:

- [Events](#events)
- [Conditions](#conditions)
- [Actions](#actions)

### Events

Automation Events serve as triggers for when you want your automation to be executed.

| Events               | Description                                                                                                          |
|----------------------|----------------------------------------------------------------------------------------------------------------------|
| Conversation created | Triggers when a new conversation is created in your system. This will include conversations created by all channels. |
| Conversation updated | Triggers when a conversation is updated.                                                                             |
| Message created      | Triggers when any new message inside a conversation is created.                                                      |
| Conversation opened  | Triggers when a conversation is reopened in your system.                                                             |

### Conditions

Conditions are the criteria that are verified before executing the action. The conditions are evaluated in the order they are defined.

| Condition Types | Description                             | Applicable Events                                                                |
|-----------------|-----------------------------------------|----------------------------------------------------------------------------------|
| Assignee        | Based on conversation assignee.         | Conversation updated, Conversation opened                                        |
| Status          | Based on conversation status.           | Conversation created, Conversation updated                                       |
| Inbox           | Based on the Inbox of the conversation. | Conversation created, Conversation updated, Conversation opened, Message created |
| Priority        | Based on the conversation's priority.   | Conversation created, Conversation updated, Conversation opened                  |
| Team            | Based on the assigned team.             | Conversation updated, Conversation opened                                        |
| Message Type    | Based on the type of message.           | Message created                                                                  |
| Message Content | Based on the content of the message.    | Message created                                                                  |

### Actions

Actions are tasks or processes that are executed when the conditions are met.

| Actions               | Description                                      |
|-----------------------|--------------------------------------------------|
| Assign an agent       | Assigns a specific agent to the conversation.    |
| Assign a team         | Assigns the conversation to a specific team.     |
| Add Label             | Adds a label to the conversation.                |
| Send Email to Team    | Sends an email notification to the team.         |
| Send Email Transcript | Sends an email with the conversation transcript. |
| Mute Conversation     | Mutes notifications for the conversation.        |
| Snooze Conversation   | Temporarily suppresses the conversation.         |
| Resolve Conversation  | Marks the conversation as resolved.              |
| Send Attachment       | Sends an attachment to the conversation.         |
| Send Message          | Sends a message to the conversation.             |
| Change Priority       | Adjusts the conversation's priority.             |

## Create an Automation Rule

To create an automation rule, follow these steps:

1. In the Live Agent interface, go to **Settings > Automation**.
2. In the upper-right corner, click **+ Add Automation Rule**.
3. In the **Rule Name** field, enter a unique name for the rule.
4. In the **Description** field, enter a relevant description for the rule.
5. From the **Event** list, select the desired event.
6. In the **Conditions** section, set up a condition:
    - **Left operand** — select a [condition type](#conditions).
    - **Operator** — a comparison operator that checks whether the value of the left operand is `Equal to` or `Not Equal to` the value of the right operand.
    - **Right operand** — select values corresponding to condition types. For example, if you choose `Status` as a condition type, you can add multiple statuses, such as `Open`, `Pending`, `Resolved`.
7. _(Optional)_ Add an additional condition by clicking **+ Add Condition**. Repeat the same steps as you did for the first condition and select one of the following operators:
    - **AND** — all conditions must be true for the overall condition to be true. For example, `Condition A AND Condition B` means that both `Condition A` and `Condition B` must be true to trigger the action.
    - **OR** — at least one of the conditions must be true for the overall condition to be true. For example, `Condition A OR Condition B` means that if either `Condition A` or `Condition B` is true, the action will be triggered.
8. In the **Actions** section, select an action. Note that you need to provide additional information depending on which type of action you selected. For example, if you select **Send an email to a Team**, you need to choose a team and write an email template.
9. _(Optional)_ Add one more action.
10. Click **Create**.

The automation rule will appear in the automation rule list and will be automatically activated.

To deactivate the rule, move the toggle switch to the left position.

### Example

You can use multiple conditions with the `AND` or `OR` operator as in the example below.

When AI Copilot is active, and a new conversation is created with the Open status, the conversation is assigned to a team.

- Name: Sales
- Description: This automation assigns new **Open** status conversations to the Sales team.
- Select the event as Conversation Created.
- Add two conditions and combine them using the `AND` operator:
    - Condition 1: Check if the **Conversation Status** is **Open**.
    - Condition 2: Verify that the **Inbox** is set to **AI Copilot bot-default** selected from the dropdown menu.
- Add an action: Assign the conversation to the Sales team by selecting it from the dropdown menu. Make sure the Sales team is created before executing this action.

<figure>
    <img class="image-center" src="../../../_assets/live-agent/add-automation-rule.png" width="80%" />
</figure>

## Edit an Automation Rule

To edit an automation rule, click the **Edit** icon next to the desired automation rule in the list.

## Clone an Automation Rule

To make a copy of an existing automation rule, click the clone icon from the Automation list you want to copy.
A replica of the automation rule with the same conditions and actions will be created.

## Delete an Automation Rule

To delete an automation rule, click **Delete** next to the desired Automation in the list. Note that this action is permanent and cannot be undone.

## More Information

- [Settings](overview.md)
- [Conversation Workflow](../conversation/overview.md)
- [Conversation Routing](../conversation/conversation-routing/overview.md)