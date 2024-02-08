---
 title: "Transcript Explorer" 
 slug: "transcript-explorer" 
 hidden: false 
---
# Transcript Explorer

[![Version badge](https://img.shields.io/badge/Updated in-v4.48-blue.svg)](../release-notes/4.48.md)

The Transcript Explorer in [Cognigy Insights]() is an analysis tool that allows you to evaluate messages in detail to improve your agent, customer service, and overall user experience of your customer. The Transcript Explorer enables you to search for key phrases such as `booking`, `cancel`, or `message` within a list of transcripts. Transcripts are logged conversations between end users and agents.

To call the Transcript Explorer, do the following:

1. You have two options for calling up the Transcript Explorer:

    === "calling via Cognigy Insights"
        a. Open your Cognigy.AI interface.
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

When Transcript Explorer is selected, you will see a list of all sessions that match the global and local filter settings.

|Title        | Description                                                              |
|-------------|--------------------------------------------------------------------------|
| Session ID  | Unique identifier for the session.                                       |
| Contact ID  | Unique identifier of your profile.                                       |
| Messages    | Total number of messages in the specific session.                        |
| Endpoint    | Used Endpoint, for example, Webchat.                                     |
| Last Message| Selectable order of messages: ascending or descending by time and date   |

## Search for Sessions

The Transcript Explorer interface provides a search field which enables you to search for sessions using pre-filled filter settings. 
Using the search function you will find specific sessions with transcripts by searching for text messages, Session IDs or Contact IDs. Use phrases or keywords to get more accurate search results.

To find specific sessions, do the following:

1. Click ![arrow-down-black](../assets/icons/arrow-down-black.svg) in the top left of the Transcript Explorer page.
2. Type in the Agent name in the search field or select the Agent in the displayed list you want to view.
3. Check [global filter](#global-filters) and [local filter](#additional-local-filters) settings and configure them, if required. 
4. When you changed any settings click **Apply**, to activate the changed filter settings. The list of sessions is immediately updated according to the changed filter settings. 

## Filter Sessions

When searching for specific sessions, you can use the following configurable filters:

- [Global Filters](#global-filters)
- [Additional Local Filters](#additional-local-filters)

To open the filter selection, click ![insight-filter-black](../assets/icons/insight-filter-black.svg) at the top right side next to the user menu icon. 

!!! note "Negate filter option"
    When you enable the Negate filter option, all filter options except the selected one will be considered. For example, when selecting Agent messages and toggling **Negate**, all data will be considered except for the Agent messages.

### Global Filters

The Transcript Explorer provides following global filters:

- [Time span](global-filter.md#timeframe) - Allows to select a specific time period you want to view.
- [Snapshot](global-filter.md#timeframe) - You can select previously created snapshots - these are exported Agents with the resources they contain.
- [Endpoint](global-filter.md#timeframe) - You can select already prepared Endpoints which ensure that channel-specific input and output (images, galleries, voice) are converted to the standardized Input object.

For more information, read the [Global Filter](global-filter.md) documentation.

### Additional Local Filters

To open the local filter selection, click **more filters ![insight-filter-black](../assets/icons/insight-filter-black.svg)**

|Additional Locale Filter   | Description                                                            |
|---------------------------|------------------------------------------------------------------------|
| Locales                   | Unique identifier for the session.                                     |
| Message rating            | Unique identifier of your profile.                                     |
| Source                    | Total number of messages in the specific session.                      |
| Goals                     | Used Endpoint, for example, Webchat.                                   |
| Flow                      | Selectable order of messages: ascending or descending by time and date |
| Contains Step             | Total number of messages in the specific session.                      |
| Message count:From        | Used Endpoint, for example, Webchat.                                   |
| Message count:To          | Selectable order of messages: ascending or descending by time and date |


#### Reset Local Filters

You can reset local filter settings by clicking the **Reset** button on the right side of the filter. If the Reset button is not displayd, click once !![insight-filter-black](../assets/icons/insight-filter-black.svg) at the top right side of the Transcript Explorer page.


## View Session Transcript and Details



### Session Transcript
<explain what we can view within a transcript>



#### Expert mode

Activating **Expert mode** provides additional information for conversation messages, including the triggered Intent and its score and the filled Slots. You can enable Expert Mode by toggling the switch at the top of the Transcript panel.

1. Click on a session you want to view the messages in it. The session details will be displayed  on a separate page at the right side.
2. At the top of the page, activate the toggle switch to enable the Expert mode. More details will then be displayed in the transcript details.

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

### Session Details

Click ![user-menu](../assets/icons/user-menu.svg) to get more session details by  
by expanding the detail view to the left.


### Contact Profile Details



------------------------------------------------

## Message research

The customer sessions will be displayed in a list with the following data: 

- Session ID
- Contact ID
- Message Count
- Channel
- Endpoint
- Date and time of the last message

- Use the local filter options to configure your research. You can find specific sessions with transcripts by searching for text messages, Session ID, or Contact ID. Use phrases or keywords to get more accurate search results. You can copy Session ID or Contact ID by clicking ![vertical-ellipsis](../assets/icons/vertical-ellipsis.svg).
- Use the [global filter](../insights/global-filter.md) options to configure your research.
- You can select one or more message sources such as **Virtual Agent Messages**, **User Messages**, or **Agent Messages** by **local filter** in the top right.  When you want to search only for Virtual Agent-specific messages, click on the filter option Virtual Agent Messages and leave the other options not selected.
- You can select one or more flows to show only messages that were generated during the selected flow passing.

!!! note
    Using the Negate slider bar. All filter options except the selected one will be analyzed. For example, when selecting Agent messages and toggling **Negate**, all data will be analyzed except for the Agent-message data.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/fd64fcb-Transcript_Explorer_n2.svg" width="100%" />
  <figcaption>Local filter "Source"</figcaption>
</figure>

- You can limit the results to a conversations containing a specific number of messages using "Message count" filters.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/message-count-filter-inputs.png" width="50%" />
  <figcaption>Local filters "Message count"</figcaption>
</figure>

- To limit the results to a conversations containing certain Step, see the [Contains Step](../insights/transcript-explorer.md#contains-step-filter) filter section.

- When global filter options and local filter options are set, enter a key phrase like "booking", "cancel", "schedule", "message" or "appointment" etc. and you will get a list of all messages that match your search criteria.

- Transcript Explorer provides a sorting function for "Message count" and "Last message". 
- Clicking on 'Message count' will sort the listed transcripts by ascending or descending order.
- Clicking on "Last message" sorts the listed transcripts according to the newest or oldest entries.

### Contains Step filter

[![Version badge](https://img.shields.io/badge/Updated in-v4.49-blue.svg)](../release-notes/4.49.md)

To further refine your search results to include only conversations that contain a specific step,
click ![live-follow](../assets/icons/filter.svg) on the search panel and select a step from the list. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/contains-step-filter-button.png" width="100%" />
  <figcaption>List of Steps opened by the filter button (marked red)</figcaption>
</figure>



## Inspect conversation 

- To inspect a specific transcript, click on a transcript conversation item in the list, and the transcript details will be displayed on the right-hand side of the Conversation page.

- Use the scroll bar to navigate through the conversation. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/781cb26-Transcript_Explorer_n4.svg" width="100%" />
  <figcaption>Transcript Explorer: selected transcript displayed for research on the right-hand side</figcaption>
</figure>

When you click on the "profile" icon on the left top side of the Conversation page user's **conversation details** and the user **contact profile details** will be displayed. 
 
**Conversation details**:

- Conversation-ID (unique)
- First message (date and time)
- Last message (date and time)
- User messages count (numerical value)
- Bot messages count (numerical value)
- Agent messages count (numerical value)
- Flow name (for example, 00 Main)
- Rating (User feedback given in conversation: thumbs down icon: rating 0 to 4 / thumbs up icon: rating 5 to 10)
- Comment (User can write a comment in a conversation which is displayed here)


**Contact profile details**:

- First Name
- Last name
- Email
- Gender
- Age
- Birthday
- Location 
- Accepted GDPR (accepted General Data Protection Regulation)
- Goals completed (all goals that were achieved in the session)

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/76ad683-Transcript_Explorer_n5.svg" width="100%" />
  <figcaption>Selected transcript with displayed customer profile data</figcaption>
</figure>



### Open Flow 

To check your [Flow](../ai/resources/build/flows.md) or to improve the configuration,
the Transcript Explorer provides the context menu **Open Flow** option
when right-clicking on a specific message displayed on the Conversation page.
Clicking the button leads you to the related Flow in Cognigy.AI.

!!! note
    The context menu "Open Flow" is not available on "drop off" steps or collapsed steps (steps with arrows). 
    The "Open Flow" option is not available if there is no corresponding flow in Cognigy. AI or if the data comes from a snapshot.

Using the "Search" field, you can enter keywords to find the messages in which these keywords were used in conversations.

- Enter a keyword in the search field, for example, "appointment". All transcript conversations which include the keyword will now be displayed. 
- Click on any transcript conversation in the list.
- The clicked transcript conversation, containing the search string, will be displayed on the Conversation page. 
The message that contains the search text has a gray background.
  Also, the matching text within the message itself is highlighted yellow.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/5326ee3-Open_Flow_in_Transcript_Explorer_3.svg" width="100%" />
  <figcaption>Highlighted keyword in a message and displayed context menu "Open Flow"</figcaption>
</figure>


## Navigating to Message Explorer

With the usage of the Transcript Explorer, Cognigy offers you the possibility to switch directly to the Message Explorer after selecting a conversation, which can show you the previous message and the subsequent message for the selected message. This option supports a more detailed conversation analysis.

To switch from the Transcript Explorer to the Message Explorer, proceed as follows:

- Select a transcript message in the Transcript Explorer list. On the right side of the screen, the Conversation page appears and displays the conversation flow. 

- Click now on an individual message to analyze the specific conversation situation.

The Message Explorer will be started and displays the selected message with its previous message and the following message on the screen. 

## More Information 

- [Message Explorer](../insights/message-explorer.md)

