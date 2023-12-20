---
title: "Filter and Sort Conversations"
slug: "filter-and-sort"
description: "In Live Agent, human agents can easily search, filter, and organize conversations. The agents can find messages by entering keywords, apply filters for status, assignee name, and team name, and sort conversations by last activity, creation date, or priority."
hidden: false
---

# Search, Filter, and Sort Conversations

In Live Agent, human agents can easily search, filter, and organize conversations.
The agents can find messages by entering keywords,
apply filters for status, assignee name, and team name,
and sort conversations by last activity, creation date, or priority.

## Search Conversations 

To search for messages in conversations, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. From the **Inboxes** list, select an Inbox.
4. At the top of the **Conversations** list next to the magnifying glass icon click the **search for messages in conversations** field.
5. Enter the message keywords in that field, for example, keywords describing a specific customer request. As soon as you have entered a search keyword, search process starts and a list of search results will be displayed below the seacrh field.
6. Select the conversation in the search result list you want to inspect. The conversation will be opened and displayd on the right hand side of the window including the conversation details. 

## Filter Conversations

You can filter conversations using the filters mentioned in the table below. Multiple filters can be combined using the `AND` and `OR` operators.

| Filter Name             | Description                                                                                  |
|-------------------------|----------------------------------------------------------------------------------------------|
| Status                  | Filters data based on the current conversation [status](overview.md#conversation-lifecycle). |
| Assignee Name           | Filters based on the human agent responsible for a conversation.                             |
| Inbox Name              | Filters based on conversations associated with a specific Inbox.                             |
| Team Name               | Filters data related to a particular team.                                                   |
| Conversation Identifier | Filters based on a unique identifier for a conversation.                                     |
| Cognigy Session ID      | Filters based on a unique identifier for a session within the Cognigy platform.              |
| Labels                  | Filters based on tags assigned to conversations for categorization and easy filtering.       |
| Created At              | Filters based on the timestamp of when an conversation was created.                          |
| First Reply Created At  | Filters based on the timestamp of the first reply to an conversation.                        |
| Last Activity           | Filters based on the timestamp of the last activity on an conversation.                      |
| Priority                | Filters based on the priority level assigned to an conversation.                             |
| Cognigy Channel Type    | Filters based on the type of channel or communication platform within Cognigy.               |

### Filter Conversations by Priority

[![Version badge](https://img.shields.io/badge/Updated in-v4.62-blue.svg)](../../release-notes/4.62.md)

To filter conversations by priority, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. From the **Inboxes** list, select an Inbox.
4. Click ![filter](../../assets/icons/filter.svg) at the top of the **Conversations** list next to the Inbox name.
5. In the **Filter Conversations** window, select the following options:<br>
    5.1 In the **Filter** list, select **Priority**.<br>
    5.2 In the **Operator** list, select **Equal to** or **Not Equal to** as the filter condition. These operators indicate whether you want to filter conversations that match or do not match the specified priority level.<br>
    5.3 In the **Select** list, choose a priority level by either clicking it or hovering your cursor over it and then pressing ++enter++. You can select multiple priorities from the list.<br> 
6. Click **Apply filters** to activate the filter settings.

The filtered conversations, matching to the activated priority filter settings, will be displayed in the list of conversations.

## Sort Conversations

To sort conversations by status and specified characteristics, follow these steps:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. From the **Inboxes** list, choose an Inbox.
4. At the top of the **Conversations** list, next to the Inbox name beside the filter icon, click **Sort Conversations**.
5. In the **Sort Conversations** window, select the following options:
    - **Status** — choose a conversation [status](overview.md#conversation-lifecycle) you want to search for. Available statuses are `Open`, `Pending`, `Resolved`, `Snoozed`, and `Abandoned`.<br>
    - **Order by** — select one of the available options: **Last activity**, **Created at**, or **Priority**.<br>

As soon as you select a sort option, it becomes active, and the listed conversations are immediately updated according to the selected search options.

## More Information

- [Conversations](overview.md)
- [Conversation Assignment](assign-conversations.md)
- [Conversation Replies](send-reply.md)