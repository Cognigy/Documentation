---
title: "Labels" 
slug: "labels"
description: "Labels are tags that help you to categorize and prioritize conversations, providing additional context and information about the content or status of each conversation."
hidden: false 
---
# Labels

[![Version badge](https://img.shields.io/badge/Updated in-v4.88-blue.svg)](../../release-notes/4.88.md)

_Labels_ are tags that help you to categorize and prioritize conversations, providing additional context and information about the content or status of each conversation.

They can be used to create custom workflows, to make conversations easier to identify, filter, and organize.

Only Administrators and Supervisors can create, edit, and delete labels.

### Create a Label

To create a label within Live Agent, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. In the settings column, select **Labels**.
4. At the top right of the window, click **Add label**.
5. In the **Add label** window, do the following, fill in the following fields:
    - **Label Name** — a name for the label to identify its category. For example, `Premium_Customer`. The name can contain any characters but can't start with `=` and must be at least 2 characters long.    
    - **Description** — a brief explanation of the label's meaning. For example, `This issue needs to be handled with priority`.  
    - **Level** — a level of access to objects where the label is applicable. Select one of the following levels: 
        - **Global** — the label is available for all Teams and Inboxes. 
        - **Team** — the label is available only for a specific Team. Select a Team from the **Team** list. Note that you cannot select multiple Teams.
        - **Inbox** — the label is available only for a specific Inbox. Select an Inbox from the **Inbox** list. Note that you cannot select multiple Inboxes.
    - **Color** — a color for the label to make it visually identifiable. Select your desired color, click the small square again to confirm your selection.
    - **Show Label on Sidebar** — the option determines whether a label will be displayed on the sidebar. By using the label on the sidebar, you can filter conversations.
6. Click **Create**.

The label will be created, appear under the **Labels** section on the sidebar, and will be available to [add to Conversations](#add-a-label-to-a-conversation).

!!! tip
    It is good practice to assign meaningful names to labels and use selected colors to visually identify the categories or topics to which a conversation belongs.

### Edit a Label

To edit a label within Live Agent, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. In the settings column, select **Labels**.
4. On the **Labels** page, to the right of the label you want to change, click **Edit**. 
5. In the **Edit label** window, update the fields as needed.
6. Click **Edit**.

The label fields and settings will be updated.

### Delete a Label

To delete a label within Live Agent, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. In the settings column, select **Labels**.
4. On the **Labels** page, to the right of the label you want to delete, click **Delete**.
5. Confirm deletion by clicking **Yes, Delete**.

The label will be deleted and no longer under the **Labels** section on the sidebar, and will no longer be available to add to Conversations. Also, the label will be removed from the conversations where it was added earlier.

### Add a Label to a Conversation

To start using Labels in Conversations, go to [Assign Labels](./../conversation/assign-conversations.md#assign-labels).