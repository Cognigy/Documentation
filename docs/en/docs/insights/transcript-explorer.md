---
 title: "Transcript Explorer" 
 slug: "transcript-explorer" 
 hidden: false 
---
# Transcript Explorer

[![Version badge](https://img.shields.io/badge/Updated in-v4.48-blue.svg)](../release-notes/4.48.md)

The **Transcript Explorer** in [Cognigy Insights](../insights/cognigy-insights.md) is an analysis tool that allows you to evaluate messages in detail to improve your agent, customer service, and overall user experience of your customer. The Transcript Explorer enables you to search for key phrases such as `booking`, `cancel`, or `message` within a list of transcripts. Transcripts are logged conversations between end users and agents.

To call the Transcript Explorer, do the following:

1. You have two options for calling up the Transcript Explorer:

    === "calling via Cognigy Insights"
        a. Open your Cognigy.AI interface.<br>
        b. Click ![user menu](../assets/icons/user-menu.svg) to open the user menu.<br>
        c. Select **Insights**. The Cognigy Insights overview dashboard will be displayed as default.<br>
        d. In the Insights sidebar menu on the left side, select **Transcript Explorer**. The Transcript Explorer UI will be displayed.<br>
    
    === "calling via direct access"
        a. Open your Cognigy Insights interface.<br>
        b. In the Insights sidebar menu on the left side, select **Transcript Explorer**. The Transcript Explorer UI will be displayed.<br>

2. The Transcript Explorer is ready for your research now.
 
<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/transcript-explorer.png" width="100%" />
  <figcaption>Transcript Explorer displaying a list of sessions</figcaption>
</figure>

## List of Sessions

When the Transcript Explorer is selected, you will see a list of all sessions that match the global and local filter settings. This list of sessions is opened by default.

|Title        | Description                                                              |
|-------------|--------------------------------------------------------------------------|
| Session ID  | Unique identifier for the session.<br> To copy the session ID, click ![vertical ellipsis](../assets/icons/vertical-ellipsis.svg) on the right side of a session to open the selection menu and select **Copy session ID**.                                      |
| Contact ID  | Unique identifier of your profile.<br> To copy the contact ID, click ![vertical ellipsis](../assets/icons/vertical-ellipsis.svg) on the right side of a session to open the selection menu and select **Copy contact ID**.                                     |
| Messages    | Total number of messages in the specific session.                        |
| Endpoint    | Used Endpoint, for example, Webchat.                                     |
| Last Message| Selectable order of messages: ascending or descending by time and date   |

- You can sort the sessions according to the number of included messages in ascending or descending order by clicking on the **Message ![arrow-down-black](../assets/icons/arrow-down-black.svg)** column title.

- You can sort the sessions according date and time order of the last message by clicking on the **Last Message ![arrow-down-black](../assets/icons/arrow-down-black.svg)** column title.

## Search for Sessions

The Transcript Explorer interface provides a search field which enables you to search for sessions using pre-filled filter settings.
Using the search function you will find specific sessions with transcripts by searching for text messages, Session IDs or Contact IDs. Use phrases or keywords to get more accurate search results.

To find specific sessions, do the following:

1. Click ![arrow-down-black](../assets/icons/arrow-down-black.svg) in the top left of the Transcript Explorer page.
2. In the search field type the Agent name or select the Agent in the displayed list you want to view.
3. Check [global filter](#global-filters) and [local filter](#additional-local-filters) settings and configure them, if required. 
4. When you changed any settings click **Apply**, to activate the changed filter settings. The list of sessions is immediately updated according to the changed filter settings. 

When the global filter and local filter settings are configured, you can use the search field to enter key phrases used in messages, a session ID, or a contact ID to find sessions smarter. Key phrases, for example, could be `cancel`, `booking`, `message`, `order`, `food`. As a result, you will get a list of all sessions that match your search criteria.

## Filter Sessions

When searching for specific sessions, you can use the following configurable filters:

- [Global Filters](#global-filters)
- [Additional Local Filters](#additional-local-filters)

To open the filter selection, click ![insight-filter-black](../assets/icons/insight-filter-black.svg) at the top right side next to the user menu icon. 

!!! note "Effect of the Negate filter option"
    When you enable the **Negate** filter option, all filter options except the selected one will be considered. For example, when selecting Agent messages and toggling Negate, all data will be considered except for the Agent messages.

### Global Filters

You can use the [global filter](../insights/global-filter.md) options to configure a research.

The Transcript Explorer provides following global filters to configure a research of sessions:

- [Time span](global-filter.md#timeframe) - Allows to select a specific time period you want to view.
- [Snapshot](global-filter.md#snapshot) - You can select previously created snapshots - these are exported Agents with the resources they contain.
- [Endpoint](global-filter.md#endpoints) - You can select already prepared Endpoints which ensure that channel-specific input and output (images, galleries, voice) are converted to the standardized Input object.
- [Locales](global-filter.md#locales) - You can select the locale to view and analyze. Locales need to be configured previously in your Flow.

For more information, read the [Global Filter](global-filter.md) documentation.

### Additional Local Filters

You can use the local filter options to refine your research.
To open the local filter selection, click **more filters ![insight-filter-black](../assets/icons/insight-filter-black.svg)**

|Additional Local Filter                | Description                                                            |
|---------------------------------------|------------------------------------------------------------------------|
| Message Rating                        | Select rating results: <br> Positive <br> None <br> Negative           |
| Source                                | Select one or more message sources: <br> Virtual Agent Messages <br> User Messages <br> Agent Messages |
| Goals                                 | Select predefined goals                                                |
| Flow                                  | Select one or more Flows you want to search for messages that were generated during the selected Flow passing.                       |
| [Contains Step](#contains-step-filter)| Refine your search results by selecting a predefined analytic step.    |
| Message count: From                    | You can limit the results to a session containing a minimum number of messages. <br> Use the up and down arrow icons, to set a definite number. <br> Less message counts will not be considered.  |
| Message count: To                      | You can limit the results to a session containing a minimum number of messages. <br> Use the up and down arrow icons, to set a definite number. <br> Higher message counts will not be considered.             |

#### Contains Step filter

[![Version badge](https://img.shields.io/badge/Updated in-v4.49-blue.svg)](../release-notes/4.49.md)

To further refine your search results to include only conversations that contain a specific step,
click ![arrow-down-black](../assets/icons/arrow-down-black.svg) and select a step in the opened drop-down list. 

!!! note "Analytic Steps"
    To get a list of analytic steps in your local filter selection, you need to define meaningful descriptions in the Node settings of your Flow in Cognigy.AI that you want to identify and analyze in Cognigy Insights. These steps are recorded in Cognigy Insights once the Nodes are passed. 

#### Reset Local Filters

You can reset all changed local filter settings by clicking the **Reset** button on the right side of the filters. If the Reset button is not displayed, click once ![insight-filter-black](../assets/icons/insight-filter-black.svg) at the top right side of the Transcript Explorer page.


## View Session Transcript and Details

Session Transcripts are logged conversations between end users and agents. The Transcript Explorer enables you to view session transcripts in order to analyze them for specific details. To get a session transcript displayed, click on a session. 

### Session Transcript

A session transcript shows all the single messages of the end user and the agent in a conversation. When you click on a session the corresponding transcript will be displayed on the right-hand sideof the page. You can use the scroll bar to navigate through the messages in the transcript. 
Every displayed user message in the transcript includes the JSON objects data of the user message. To open and research the objects data, click ![expand](../assets/icons/expand.svg). 

The transcript view can be expanded to display more session details. To get them displayed, click ![user-menu](../assets/icons/user-menu.svg) at the top left side of the transcript. The transcript view expands to the left displaying following details:

- [Session Details](#session-details)
- [Contact Pofile Details](#contact-profile-details)

#### Session Details

|Session Details              | Description                                                          |
|-----------------------------|----------------------------------------------------------------------|
| Session ID                  | Unique identifier associated with a session.                         |
| First Message               | Date and time of the first message.                                  |
| Last Message                | Date and time of the last message.                                   |
| User Message Count          | Number of user messages.                                             |
| Virtual Agent Message Count | Number of virtual agent messages.                                    |
| Agent Message Count         | Number of Agent messages.                                            |
| Flow Name                   | The naming of the Flow.                                              |
| Rating                      | User feedback given in conversation: <br>thumbs down icon: rating 0 to 4 / thumbs up icon: rating 5 to 10 |
| Comment                     | User can write a comment in a conversation which is displayed here.  |

#### Contact Profile Details

{! _includes/insights/contact-profile-details.md !}

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/Transcript_Explorer_profile.png" width="100%" />
  <figcaption>Selected transcript with session details and customer profile data</figcaption>
</figure>

#### Expert mode

Activating **Expert mode** provides additional information for conversation messages, including the triggered Intent and its score and the filled Slots. You can enable the Expert Mode by toggling the switch at the top of the Transcript panel.

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