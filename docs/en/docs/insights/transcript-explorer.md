---
title: "Transcript Explorer" 
slug: "transcript-explorer" 
hidden: false 
---

# Transcript Explorer

[![Version badge](https://img.shields.io/badge/Updated in-v4.49-blue.svg)](../release-notes/4.49.md)

The _Transcript Explorer_ is a powerful analysis tool that helps you improve your agent's performance,
provide better customer service, and enhance the overall user experience.
It allows you to analyze transcripts of conversations between end-users and agents in detail.
The Transcript Explorer has a search feature that lets you look for specific phrases within a list of transcripts.
For example, you can search for keywords such as booking, canceling, or messaging to find relevant messages quickly.

To open the Transcript Explorer interface, use one of the following options:

=== "Via Cognigy.AI"
    1. Open the Cognigy.AI interface.
    2. In the left-side menu, select an Agent.
    3. Within the Agent interface, navigate to Insights using one of the following options:
        - In the left-side **Agent** menu, select **Insights**. 
        - In the upper-right corner, click ![user menu](../assets/icons/user-menu.svg) **> Insights**.
    4. The Cognigy Insights Overview dashboard will be displayed by default.
    5. In the left-side menu, select **Transcript Explorer**.

=== "Via Insights"
    1. Open your Cognigy Insights interface.<br>
    2. In the left-side menu, select **Transcript Explorer**.

The Transcript Explorer interface will be displayed. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/transcript-explorer.png" width="100%" />
  <figcaption>Transcript Explorer displaying a list of sessions</figcaption>
</figure>

## List of Sessions

By default, the Transcript Explorer displays a filtered list of sessions for the last months.

The list of sessions has the following parameters:

| Title        | Description                                                                                                                                                                                                                |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Session ID   | This is a unique identifier assigned to each session. <br> To copy the Session ID, on the right side of the selected session row, click ![vertical ellipsis](../assets/icons/vertical-ellipsis.svg) **> Copy session ID**. |
| Contact ID   | The unique identifier for the end user. To copy the Contact ID, on the right side of the selected session row, click ![vertical ellipsis](../assets/icons/vertical-ellipsis.svg) **> Copy contact ID**.                    |
| Messages     | The total number of messages within the specific session.                                                                                                                                                                  |
| Endpoint     | The Endpoint handling the session. such as Webchat or Interaction Panel.                                                                                                                                                   |
| Last Message | The date and time when the last message was received within the session.                                                                                                                                                   |

### Sort Sessions

To organize the sessions in the list, you can sort them by their Session ID, Messages, or Last Message. To do this, hover your mouse over a column title and select the sorting option you prefer:

- Click the up arrow ![arrow-up-black](../assets/icons/arrow-up-black.svg) to sort in ascending order.
- Click the down arrow ![arrow-down-black](../assets/icons/arrow-down-black.svg) to sort in descending order.

## Search for Sessions

You can search using pre-filled filter settings, such as  

To find specific sessions, do the following:

1. In the upper-right corner of the Transcript Explorer page, locate the search field.
2. In the search field, specify text messages (for more precise results, use keywords or phrases), Session ID, or Contact ID.

The Transcript Explorer immediately updates the list of sessions according to the search results.

## Filter Sessions

By default, there is a global filters section at the top of the Transcript Explorer page.

You can filter sessions by using the following options:

- [Global Filters](#global-filters)
- [Additional Local Filters](#additional-local-filters)

To hide the filter menu, in the upper-right corner, click ![insight-filter-black](../assets/icons/insight-filter-black.svg). 

### Global Filters

For more information, read the [Global Filter](global-filter.md) documentation.

### Additional Local Filters

You can use the local filter options to refine your research.
To open the local filter selection, at the top of the Transcript Explorer page, click **more filters ![insight-filter-black](../assets/icons/insight-filter-black.svg)**.

| Filter              | Description                                                                                                                                                                                                                                                                                                                           |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message Rating      | Select the rating criteria for the results: <br> Positive - messages perceived positively <br> None - messages with no particular sentiment <br> Negative - messages perceived negatively                                                                                                                                             |
| Source              | Choose one or more message sources to filter: <br> - Virtual Agent Messages - messages generated by the virtual agent <br> User Messages - messages sent by users <br> Agent Messages - messages from human agents                                                                                                                    |
| Goals               | Select from predefined goals to narrow down results according to specific objectives or targets                                                                                                                                                                                                                                       |
| Flow                | Specify one or more Flows to filter messages generated during the selected Flow passing. Flows represent the paths or sequences of interactions within your system.                                                                                                                                                                   |
| Contains Step       | Refine your search results by selecting a predefined analytic step. To access analytic steps, ensure you define descriptive names in the Node settings of your Flow within Cognigy.AI. These steps are crucial for identification and analysis within Cognigy Insights, as they are logged once Nodes are passed during interactions. |
| Message count: From | Set a minimum threshold for the number of messages in a session to be considered. Use the up and down arrow icons to specify the exact number. Sessions with fewer messages than this threshold will not be included in the results.                                                                                                  |
| Message count: To   | Establish a minimum threshold for the number of messages in a session to be considered. Use the up and down arrow icons to specify the exact number. Sessions with more messages than this threshold will not be included in the results.                                                                                             |

#### Exclude Filters

When you toggle the **Negate** option, all filters except the selected one will be analyzed. For example, if you select Agent messages and toggle Negate, all data except Agent messages will be analyzed.

### Reset Filters

To reset all filters, at the top of the Transcript Explorer page, click the **Reset** button on the right side of the filters.

If the Reset button is not displayed, click once ![insight-filter-black](../assets/icons/insight-filter-black.svg) at the top right side of the Transcript Explorer page.

## View Session Transcript and Details

Session transcripts are logged conversations between end users and agents. 
The Transcript Explorer enables you to view session transcripts to analyze them for specific details. 
To display a session transcript, select a session from the list on the Transcript Explorer page.

### Session Transcript

A session transcript shows all the individual messages exchanged between the end user and the agent during a conversation. When you click on a session, the corresponding transcript will be displayed on the right-hand side of the page. You can use the scroll bar to navigate through the messages in the transcript.

To get more session details, expand the transcript view by clicking ![user-menu](../assets/icons/user-menu.svg) at the top-left corner of the transcript.
Transcript view will display the following details to the left:

- [Session Details](#session-details)
- [Contact Pofile Details](#contact-profile-details)

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/Transcript_Explorer_profile.png" width="100%" />
  <figcaption>Session Transcript</figcaption>
</figure>

#### Session Details


| Session Details             | Description                                                                                                                 |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Session ID                  | The unique identifier assigned to each session.                                                                             |
| First Message               | The date and time when the first message was sent.                                                                          |
| Last Message                | The date and time when the last message was sent.                                                                           |
| User Message Count          | The total number of messages sent by the user.                                                                              |
| Virtual Agent Message Count | The total number of messages sent by the virtual agent.                                                                     |
| Agent Message Count         | The total number of messages sent by the human agent.                                                                       |
| Flow Name                   | The name of the conversation Flow in your Agent.                                                                            |
| Rating                      | The feedback received from the user in the conversation, displayed as a thumbs-up (5 to 10) or thumbs-down (0 to 4) rating. |
| Comment                     | Any additional comments provided by the user along with their feedback.                                                     |

#### Contact Profile Details

{! _includes/insights/contact-profile-details.md !}

#### Expert mode

Activating **Expert mode** provides additional information for conversation messages, including the triggered Intent and its score and the filled Slots. You can enable the Expert Mode by toggling the switch at the top of the Transcript panel.

user connected and disconnected events

1. Click on a session you want to view the messages in it. The session transcript will be displayed in a separate page on the right side.
2. At the top of the page, activate the toggle switch to enable the **Expert mode**. Additional information will then be displayed in the transcript details.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/expert-mode.png" width="50%" />
  <figcaption>Transcript with "Expert mode" enabled </figcaption>
</figure> 

For more information, read the [Interaction Panel](../ai/tools/interaction-panel/interaction-panel.md#expert-mode) documentation.

#### Playbooks

When you want to create a **Playbook** of a transcript, do the following: 

1. In the transcript detail view click ![vertical ellipsis](../assets/icons/vertical-ellipsis.svg) to open a selection menu.
2. Select one of the following options:
     - Create Playbook
     - Create Playbook with Assertions

For more information, read the [Playbooks](../ai/resources/test/playbooks.md) documentation.

#### Open Flow 

To check your [Flow](../ai/resources/build/flows.md) or to improve the configuration, the Transcript Explorer provides the context menu **Open Flow**.

To switch from the Transcript Explorer to the corresponding Flow in Cognigy.AI, do the following:

1. Select a session in the Transcript Explorer list. On the right side of the screen, the transcript will be displayed. 
2. Do a right click action on a specific message you want to switch to the corresponding Flow situation.
3. In the menu select **Open Flow**. 

The corresponding Flow in Cognigy.AI will be displayed. 

#### Navigating to Message Explorer

Using the Transcript Explorer, Cognigy enables you to switch directly to the Message Explorer after selecting a conversation, which can show you the previous message and the subsequent message for the selected message. This option supports a more detailed conversation analysis.

To switch from the Transcript Explorer to the Message Explorer, proceed as follows:

1. Select a session in the Transcript Explorer list. On the right side of the screen, the transcript will be displayed. 
2. Do a right click action on a specific message you want to analyze the specific conversation situation.
3. In the menu select **Open in Message Explorer**.

The [Message Explorer](../insights/message-explorer.md) will be started and displays the selected message with its previous message and the following message on the screen. 

## More Information 

- [Message Explorer](../insights/message-explorer.md)
- [Insights Glossary](../insights/glossary.md)
- [Playbooks](../ai/resources/test/playbooks.md)
- [Interaction Panel](../ai/tools/interaction-panel/interaction-panel.md)