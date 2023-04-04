---
 title: "Transcript Explorer" 
 slug: "transcript-explorer" 
 hidden: false 
---
# Transcript Explorer

[![Version badge](https://img.shields.io/badge/Updated in-v4.48-blue.svg)]({{config.site_url}})

## Description
<div class="divider"></div>
With Transcript Explorer you get an inspection application that enables you to evaluate messages 
in detail to improve your Agent, your customer service, and the user experience of your customer.

The Transcript Explorer enables you to search for key phrases like "booking", "cancel", "message" in a list of transcripts.

Click **Transcript Explorer** in the Insights sidebar menu.

## Message research
<div class="divider"></div>

The customer conversations will be displayed in a list with the following data: 

- Session ID
- Contact ID
- Message Count
- Channel
- Endpoint
- Date and time of the last message

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/transcript-explorer.png" width="100%" />
  <figcaption>Transcript Explorer displaying a list of transcripts (conversations)</figcaption>
</figure>

- Use the local filter options to configure your research. You can find specific sessions with transcripts by searching for text messages, Session ID, or Contact ID. Use phrases or keywords to get more accurate search results. You can copy Session ID or Contact ID by clicking ![vertical-ellipsis](../assets/icons/vertical-ellipsis.svg).
- Use the **[global filter]({{config.site_url}}insights/global-filter/)** options to configure your research.
- You can select one or more message sources like **Virtual Agent Messages**, **User Messages**, or **Agent Messages** by **local filter** in the top right.  When you want to search only for Virtual Agent-specific messages click on the filter option Virtual Agent Messages and leave the other options not selected.
- You can select one or more flows to show only messages that were generated during the selected flow passing.

!!! note
    Using the Negate slider bar, all filter options except the selected one will be analyzed. For example, when selecting Agent messages and toggling **Negate**, all data will be analyzed except for the Agent-message data.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/fd64fcb-Transcript_Explorer_n2.svg" width="100%" />
  <figcaption>Local filter "Source"</figcaption>
</figure>

- You can limit the results to a conversations containing a specific number of messages using "Message count" filters.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/message-count-filter-inputs.png" width="50%" />
  <figcaption>Local filters "Message count"</figcaption>
</figure>

- To limit the results to a conversations containing certain Step, see ["Contains Step" filter section]({{config.site_url}}insights/transcript-explorer/#contains-step-filter)

- When global filter options and local filter options are set, enter a key phrase like "booking", "cancel", "schedule", "message" or "appointment" etc. and you will get a list of all messages that match your search criteria.

- Transcript Explorer provides a sorting function for "Message count" and "Last message". 
- Clicking on 'Message count' will sort the listed transcripts alternately by increasing/decreasing order.
- Clicking on "Last message" sorts the listed transcripts alternately according to the newest/oldest entries.

### "Contains Step" filter

[![Version badge](https://img.shields.io/badge/Added in-v4.16-blue.svg)]({{config.site_url}})

You can additionally narrow the result to conversations which contain a certain Step. Click on the "Filter" icon in Search input and choose a Step. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/contains-step-filter-button.png" width="50%" />
  <figcaption>List of Steps opened by the filter button (marked red)</figcaption>
</figure>

### Reset local filters

[![Version badge](https://img.shields.io/badge/Added in-v4.16-blue.svg)]({{config.site_url}})

You can reset local filters by clicking the "Reset" button. It will appear as soon as you have some filter with a non-default value.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/transcript-explorer-reset.png" width="50%" />
  <figcaption>Reset button appeared after selecting Virtual Agent as an only source.</figcaption>
</figure>

## Inspect conversation 

- To inspect a specific transcript click on a transcript conversation item in the list and the transcript details will be displayed on the right-hand side in a conversation panel.

- Use the scroll bar to navigate through the conversation. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/781cb26-Transcript_Explorer_n4.svg" width="100%" />
  <figcaption>Transcript Explorer: selected transcript displayed for research on the right-hand side</figcaption>
</figure>

When you click on the "profile" icon on the left top side of the conversation panel user's **conversation details** and the user **contact profile details** will be displayed. 
 
**Conversation details**:

- Conversation-ID (unique)
- First message (date and time)
- Last message (date and time)
- User messages count (numerical value)
- Bot messages count (numerical value)
- Agent messages count (numerical value)
- Flow name (for example 00 Main)
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

### Expert mode

[![Version badge](https://img.shields.io/badge/Added in-v4.15-blue.svg)]({{config.site_url}})

You can enable an "Expert Mode" by clicking a toggle on top of the transcript's panel. This will
provide additional information to a conversation messages (if any), such as:

- What Intent was triggered and its score
- What Slots were filled

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/expert-mode.png" width="50%" />
  <figcaption>Transcript with "Expert mode" enabled </figcaption>
</figure>

### Open Flow 
To check your [Flow]({{config.site_url}}ai/resources/build/flows/) or to improve the configuration the Transcript Explorer provides the context menu  **"Open Flow"** option when right-clicking on a specific message displayed in the conversation panel.
Clicking the button leads you to the related Flow in Cognigy.AI.

!!! note
    The context menu "Open Flow" is not available on "drop off" steps or collapsed steps (steps with arrows). 
    The "Open Flow" option is not available if there is no corresponding flow in Cognigy. AI or if the data comes from a snapshot.

Using the "Search" field you can enter keywords to find the messages in which these keywords were used in conversations.

- Enter a keyword in the search field, for example, "appointment". All transcript conversations which include the keyword will now be displayed. 
- Click on any transcript conversation in the list.
- The clicked transcript conversation, containing the search string, will be displayed in a conversation panel. 
The message, that contains the search text, has a grey background. Also, the matching text within the message itself is highlighted yellow.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/5326ee3-Open_Flow_in_Transcript_Explorer_3.svg" width="100%" />
  <figcaption>Highlighted keyword in a message and displayed context menu "Open Flow"</figcaption>
</figure>


## Navigating to Message Explorer
<div class="divider"></div>
With the usage of the Transcript Explorer, Cognigy offers you the possibility to switch directly to the Message Explorer after selecting a conversation, which can show you the previous message and the subsequent message for the selected message. This option supports a more detailed conversation analysis.

To switch from the Transcript Explorer to the Message Explorer, proceed as follows:

- Select a transcript message in the Transcript Explorer list. On the right side of the screen the conversation panel appears displaying the conversation flow. 

- Click now on an individual message to analyze the specific conversation situation.

The Message Explorer will be started and displays the selected message with its previous message and the following message on the screen. 

!!! note "Message Explorer"
    **More information to [Message Explorer]({{config.site_url}}insights/message-explorer/)**

