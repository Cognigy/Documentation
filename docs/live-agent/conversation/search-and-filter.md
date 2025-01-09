---
title: "Search and Filter Conversations"
slug: "search-and-filter"
description: "In Live Agent, human agents can search, filter, and organize conversations. The agents can find messages by entering keywords, apply filters for status, assignee name, and team name, and sort conversations by last activity, creation date, or priority."
hidden: false
tags:
  - Live Agent
  - Conversation
  - Search And Filter
---

# Search, Filter, and Sort Conversations

[![Version badge](https://img.shields.io/badge/Updated in-v4.85-blue.svg)](../../release-notes/4.85.md)

In Live Agent, human agents can easily search, filter, and organize conversations.
The agents can find messages by entering keywords,
apply filters for status, assignee name, and team name,
and sort conversations by last activity, creation date, or priority.

## Search Conversations 

To search for messages in conversations, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. From the **Inboxes** list, select an Inbox.
4. At the top of the **Conversations** list next to the magnifying glass icon, click the **search for messages in conversations** field.
5. Enter the message keywords in that field, for example, keywords describing a specific customer request. Once you enter a search keyword, the search process starts, and a list of search results will be displayed below the search field.
6. Select the conversation in the search result list you want to inspect. The conversation will be opened and displayed on the right-hand side of the window including the conversation details. 

### Search for Conversations where you were Mentioned

You can find all conversations where other agents mentioned you. To do so, follow these steps:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. At the top of the **Inboxes** list, click **@Mentions**.

## Filter Conversations

You can filter conversations using the filters mentioned in the table below. Multiple filters can be combined using the `AND` and `OR` operators.

| Filter Name             | Description                                                                                   |
|-------------------------|-----------------------------------------------------------------------------------------------|
| Status                  | Filters data based on the current conversation [status](overview.md#conversation-life-cycle). |
| Assignee Name           | Filters based on the human agent responsible for a conversation.                              |
| Inbox Name              | Filters based on conversations associated with a specific Inbox.                              |
| Team Name               | Filters data related to a particular team.                                                    |
| Conversation Identifier | Filters based on a unique identifier for a conversation.                                      |
| Cognigy Session ID      | Filters based on a unique identifier for a session within the Cognigy.AI platform.            |
| Cognigy User ID         | Filters based on a unique identifier for a user within the Cognigy.AI platform.               |
| Labels                  | Filters based on tags assigned to conversations for categorization and easy filtering.        |
| Created At              | Filters based on the timestamp of when an conversation was created.                           |
| First Reply Created At  | Filters based on the timestamp of the first reply to an conversation.                         |
| Last Activity           | Filters based on the timestamp of the last activity on an conversation.                       |
| Priority                | Filters based on the priority level assigned to an conversation.                              |
| Cognigy Channel Type    | Filters based on the type of channel or communication platform within Cognigy.AI.             |

### Save a Filter

After applying a filter, you can save it for future use.

To save a filter, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. From the **Inboxes** list, select an Inbox.
4. At the top of the **Conversations** list, click ![filter](../../_assets/icons/filter.svg).
5. In the **Filter Conversations** window, select the criteria by which you want to filter. For example, select **Status** equal to **Abandoned** to see only abandoned conversations.
6. Click **Apply Filters**. 
7. At the top of the **Conversations** list, click ![save-filter](../../_assets/live-agent/icons/save-filter.svg).
8. In the opened window, enter a name for the filter. For example, `Abandoned Conversations`.
9. Click **Save Filter**. After that, the filter will appear under the **Folders** section. 

Saved filters are visible only to the human agent who created them and are not accessible to other agents.

If you want to return to the unfiltered list, click **All Conversations >** ![clear-filters](../../_assets/live-agent/icons/clear-filters.svg).

### Filter Conversations by Priority

To filter conversations by priority, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. From the **Inboxes** list, select an Inbox.
4. At the top of the **Conversations** list, click ![filter](../../_assets/icons/filter.svg).
5. In the **Filter Conversations** window, select the following options:<br>
    1. In the **Filter** list, select **Priority**.<br>
    2. In the **Operator** list, select **Equal to** or **Not Equal to** as the filter condition. These operators indicate whether you want to filter conversations that match or do not match the specified priority level.<br>
    3. In the **Select** list, choose a priority level by either clicking it or hovering your cursor over it and then pressing ++enter++. You can select multiple priorities from the list.<br> 
6. Click **Apply filters** to activate the filter settings.

The filtered conversations, matching to the activated priority filter settings, will be displayed in the list of conversations.

## Sort Conversations

To sort conversations by status and specified characteristics, follow these steps:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. From the **Inboxes** list, select an Inbox.
4. At the top of the **Conversations** list, select one of the following tabs:
    - **Mine** — shows conversations assigned to you.
    - **Unassigned** — shows conversations without a designated owner.
    - **All** — shows all conversations in the system. All system conversations. Agents, by default, cannot view all conversations, but administrators can grant access through the **Inboxes** settings. For more information, read the [Configure Agent Access to all Inbox Conversations](../settings/inboxes.md#configure-agent-access-to-all-inbox-conversations). 
5. Above the tabs, click ![arrows](../../_assets/live-agent/icons/arrows.svg).
6. In the **Sort Conversations** window, select the following options:
    - **Status** — select a conversation [status](overview.md#conversation-life-cycle) you want to search for. Available statuses are `Open`, `Pending`, `Resolved`, `Snoozed`, and `Abandoned`.<br>
    - **Order by** — select one of the available options:
        - **Oldest** — sorts conversations by the longest active ones. By default, the **Unassigned** tab shows the oldest at the top of the list.
        - **Last activity** — sorts conversations by the most recent user or human agent interaction, displaying the most recently active conversations at the top of the list.
        - **Created at** — sorts conversations by creation date, starting with the latest. By default, the **Mine** and **All** tabs show the latest conversations at the top of the list.
        - **Priority** — sorts conversations by assigned priority, displaying high-priority conversations at the top of the list.

As soon as you select a sort option, it becomes active, and the listed conversations are immediately updated according to the selected search options.

## More Information

- [Conversations](overview.md)
- [Conversation Assignment](assign-conversations.md)
- [Conversation Replies](send-reply.md)