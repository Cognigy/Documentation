---
title: "Transcript Explorer" 
slug: "transcript-explorer"
description: "The Insights Transcript Explorer is a powerful analysis tool that helps you improve your agents' performance, provide better customer service, and enhance the overall user experience. It allows you to analyze transcripts of conversations between end-users and agents in detail."
hidden: false
tags:
  - insights
  - session transcripts
  - transcript explorer
---

# Transcript Explorer

[![Version badge](https://img.shields.io/badge/Updated in-v4.98-blue.svg)](../../release-notes/4.97.md)

The _Transcript Explorer_ is an analytics tool in Cognigy Insights that helps you improve your agent's performance,
provide better customer service, and enhance the overall user experience.
It allows you to analyze transcripts of conversations between end users and agents in detail.
The Transcript Explorer has a search feature that lets you look for specific phrases within a list of transcripts.
For example, you can search for keywords such as booking, canceling, or messaging to find relevant messages quickly.

To open the Transcript Explorer, use one of the following options:

=== "Via Cognigy.AI"
    1. In the left-side menu of the Cognigy.AI interface, select a Project.
    2. Within the Project interface, navigate to Insights using one of the following options:
        - In the left-side menu, select **Insights**. 
        - In the bottom-left corner, select **Insights** from the User Menu.<br>
        The Cognigy Insights Overview report will be displayed by default.
    3. In the left-side menu of the Insights interface, select **Transcript Explorer**.

=== "Via Insights"
    1. In the left-side menu of the Insights interface, select **Transcript Explorer**.

The Transcript Explorer interface will be displayed. 

<figure>
  <img class="image-center" src="../../../_assets/insights/explorers/transcript/transcript-explorer.png" width="100%" />
  <figcaption>Transcript Explorer displaying a list of sessions</figcaption>
</figure>

## List of Sessions

By default, the Transcript Explorer displays a filtered list of sessions for the last months.

The list of sessions has the following parameters:

| Title        | Description                                                                                                                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Endpoint     | The Endpoint handling the session. For example, Cognigy Webchat or the Interaction Panel.                                                                                                                |
| Session ID   | The unique ID for each session. <br> To copy the Session ID, on the right side of the selected session row, click ![vertical ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Copy session ID**. |
| User ID      | The unique ID for the end user. To copy the User ID, on the right side of the selected session row, click ![vertical ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Copy user ID**.            |
| Messages     | The total number of messages within the specific session.                                                                                                                                                |
| Last Message | The date and time when the last message was received within the session.                                                                                                                                 |

### Sort Sessions

Sessions can be sorted by their `Session ID`, `Messages`, or `Last Message` parameters. To select a sorting parameter, hover over a column title and select the option you prefer:

- Click the up arrow ![arrow-up-black](../../_assets/icons/arrow-up-black.svg) to sort in ascending order.
- Click the down arrow ![arrow-down-black](../../_assets/icons/arrow-down-black.svg) to sort in descending order.

## Search for Sessions

To find specific sessions, do the following:

1. In the upper-right corner of the **Transcript Explorer** page, locate the search field.
2. In the search field, specify text messages (for more precise results, use keywords or phrases), Session ID, or User ID.

The Transcript Explorer immediately updates the list of sessions according to the search results.

## Filter Sessions

There are several filters available to filter sessions. The filter bar, featuring global and local filters, is visible at the top of the page. Some filters are not immediately visible and require clicking **more filter** to be viewed and selected. 
You can filter sessions by using the following options:

- [Global Filters](#global-filters)
- [Local Filters](#local-filters)

To hide the **Filter Bar**, click ![insight-filter-black](../../_assets/icons/insight-filter-black.svg) in the upper-right corner. 

### Global Filters

For more information, read the [Global Filter](../global-filters.md) documentation.

### Local Filters

Local filters are unique to a specific explorer / report. You can use them to refine your research.

To open the **Local Filters** selection,
click **more filters ![insight-filter-black](../../_assets/icons/insight-filter-black.svg)** in the filter bar at the top of the **Transcript Explorer** page.

| Filter              | Description                                                                                                                                                                                                                                                                                                                           |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message Rating      | Select the rating criteria: <br> - **Positive** — messages perceived positively. <br>- **None** — messages with no sentiment. <br>- **Negative** — messages perceived negatively.                                                                                                                                                     |
| Source              | Select one or more message sources: <br> - **AI Agent Messages** — messages sent by AI Agents. <br> - **User Messages** — messages sent by users. <br> - **Agent Messages** — messages sent by human agents.                                                                                                                          |
| Goals Completed     | Select from predefined goals to narrow down results according to specific objectives or targets configured with [Tasks](../../ai/build/node-reference/overview.md).                                                                                                                                                                   |
| Flow                | Specify one or more Flows to filter messages generated during the selected Flow passing.                                                                                                                                                                                                                                              |
| Contains Step       | Refine your search results by selecting a predefined analytic step. To access analytic steps, ensure you define descriptive names in the Node settings of your Flow within Cognigy.AI. These steps are crucial for identification and analysis within Cognigy Insights, as they are logged once Nodes are passed during interactions. |
| Flow                | Specify one or more Flows to filter messages generated during the selected Flow passing.                                                                                                                                                                                                                                              |
| Message count: From | Set a minimum threshold for the number of messages in a session to be considered. Use the up and down arrow icons to specify the exact number. Sessions with fewer messages than this threshold will not be included in the results.                                                                                                  |
| Message count: To   | Set a minimum threshold for the number of messages in a session to be considered. Use the up and down arrow icons to specify the exact number. Sessions with more messages than this threshold will not be included in the results.                                                                                                   |

{! _includes/insights/exclude-filters.md !}

{! _includes/insights/reset-filters.md !}

## View Session Transcripts

Session transcripts are logged conversations between end users and agents. 
The Transcript Explorer enables you to view session transcripts to analyze them, in order to better understand the interactions between the end users and agents.
To view a session transcript, select a session from the list on the **Transcript Explorer** page.

<figure>
  <img class="image-center" src="../../../_assets/insights/explorers/transcript/transcript-explorer-profile.png" width="100%" />
  <figcaption>Session Transcript with Debug Mode</figcaption>
</figure>

### Session Transcript

Session transcripts display all individual messages between the end user and agent during their conversation. By selecting a session, the corresponding transcript will be displayed on the right side of the page.
You can use the scroll bar to navigate through the messages in the **Session Transcript** window.

#### Debug Mode

Insights' Debug mode is not fully equal to the Debug mode in the [Interaction Panel](../../ai/test/interaction-panel/overview.md#debug-mode) documentation. Debug messages from Nodes (including Code Nodes and Debug Message Nodes) are only for immediate testing and can only be seen in the Interaction Panel.

The Debug mode offers additional context for conversation messages, including:

- Triggered Intent and its score
- Filled Slots
- User connection and disconnection events
- Voice event payloads
- xApp session details

Additionally, you can switch to a Flow related to the current session.

To activate Debug mode, do the following:

1. In the left-side menu of the Insights interface, select **Transcript Explorer**.
2. On the **Transcript Explorer** page, select a session from the list. The session transcript will be displayed in a separate window on the right side.
3. At the top of the **Session Transcript** window, activate the **Debug mode** toggle.

#### Playbooks

To create a Playbook of a transcript, do the following:

1. In the left-side menu of the Insights interface, select **Transcript Explorer**.
2. On the **Transcript Explorer** page, select a session from the list. The session transcript will be displayed in a separate window on the right side.
3. In the upper-right corner of the **Session Transcript** window, click ![vertical ellipsis](../../_assets/icons/vertical-ellipsis.svg) to open a selection menu.
4. Select one of the following options:
    - **Create Playbook** — generate a Playbook to test your Flows.
    - **Create Playbook with Assertions** — generate a Playbook and its Assertions, which are checks to ensure your Flows behaves as expected during testing.

For more information, read the [Playbooks](../../ai/test/playbooks.md) documentation.

#### Open Message-Related Flow

To check your [Flow](../../ai/build/flows/overview.md) or to improve the configuration, the Transcript Explorer provides the context menu **Open Flow**.

To switch from the Transcript Explorer to the corresponding Flow in Cognigy.AI, do the following:

1. In the left-side menu of the Insights interface, select **Transcript Explorer**.
2. On the **Transcript Explorer** page, select a session from the list. The session transcript will appear in a separate window on the right side of the page.
3. In the **Session Transcript** window, right-click a specific message and select **Open Flow**.

The corresponding Flow in Cognigy.AI will be displayed.

#### Navigate to Message Explorer via a Transcript Message

You can access the [Message Explorer](message.md) by selecting a message within the **Session Transcript** window.
The Message Explorer shows you the previous and subsequent messages for the selected message.

To switch from the selected transcript message to the Message Explorer, follow these steps:

1. On the **Transcript Explorer** page, select a session from the list. The session transcript will appear in a separate window on the right side of the page.
2. In the **Session Transcript** window, right-click a specific message and select **Open in Message Explorer**.

The Message Explorer interface will be opened.

### Session Transcript Details

To get more session details, click ![user-menu](../../_assets/icons/user-menu.svg) in the upper-left corner of the **Session Transcript** window.

The transcript details include the following sections:

- [Session Details](#session-details)
- [Contact Pofile Details](#contact-profile-details)

#### Session Details

| Session Details        | Description                                                                                                                 |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Session ID             | The unique identifier assigned to each session.                                                                             |
| First Message          | The date and time when the first message was sent.                                                                          |
| Last Message           | The date and time when the last message was sent.                                                                           |
| User Message Count     | The total number of messages sent by the user.                                                                              |
| AI Agent Message Count | The total number of messages sent by the AI Agent.                                                                          |
| Agent Message Count    | The total number of messages sent by the human agent.                                                                       |
| Flow Name              | The name of the conversation Flow in your Agent.                                                                            |
| Rating                 | The feedback received from the user in the conversation, displayed as a thumbs-up (5 to 10) or thumbs-down (0 to 4) rating. |
| Comment                | Any additional comments provided by the user along with their feedback.                                                     |

#### Contact Profile Details

| Contact Profile Details | Description                                                                                                                                                                            |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| First Name              | User's first name.                                                                                                                                                                     |
| Last name               | User's last name.                                                                                                                                                                      |
| Email                   | User's email address.                                                                                                                                                                  |
| Gender                  | User's gender.                                                                                                                                                                         |
| Age                     | User's age.                                                                                                                                                                            |
| Birthday                | User's birthday.                                                                                                                                                                       |
| Location                | User's location.                                                                                                                                                                       |
| Accepted GDPR           | Accepted General Data Protection Regulation.                                                                                                                                           |
| Tasks Completed         | All the tasks that were completed by the user during conversations with AI Agents or human agents. The field refers to the [Tasks](../../ai/analyze/goals-and-tasks/tasks.md) feature. |

## Delete Sessions

You can delete a session and its transcript
by selecting the session from the list on the **Transcript Explorer** page
and clicking ![vertical ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Delete Session Transcript** in the **Session Transcript Details** window.
The session will be deleted from the Transcript and Message explorers.
However, the session metadata will remain accessible through the [Cognigy.AI OData endpoint](../../ai/analyze/odata.md), except for the data in the [Conversation](../../ai/analyze/odata.md#conversations) collection.
Also, the Contact Profile details will still be available in the [Contact Profile](../../ai/analyze/contact-profiles.md).

!!! note 
    If you've migrated to the new [Insights framework](../data-management/pre-aggregation.md), there might be a delay between deleting the session transcript and the session itself. When you click the **Delete Session Transcript** button, the transcript is deleted first, and the session is deleted from the **Transcript Explorer** page about 10 minutes later.

## More Information 

- [Message Explorer](message.md)
- [Insights Glossary](../glossary.md)
- [Playbooks](../../ai/test/playbooks.md)
- [Interaction Panel](../../ai/test/interaction-panel/overview.md)