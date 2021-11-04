---
 title: "Transcript Explorer" 
 slug: "transcript-explorer" 
 hidden: false 
---
# Transcript Explorer

## Description
<div class="divider"></div>
With Transcript Explorer you get an inspection application that enables you to evaluate messages 
in detail to improve your Agent, your customer service, and the user experience of your customer.

The Transcript Explorer enables you to search for key phrases like "booking", "cancel", "message" in a list of transcripts.

## Message research
<div class="divider"></div>
- Click on "Transcript Explorer" in the Insights sidebar menu.

The customer conversations will be displayed in a list with their contact IDs, message counts, used channel as well as date and time of the message. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/442b547-Transcript_Explorer_n1.svg" width="100%" />
  <figcaption>Transcript Explorer displaying a list of transcripts (conversations) - local filter menu is open</figcaption>
</figure>

- Use the **[global filter]({{config.site_url}}insights/global-filter/)** options to configure your research.

- You can select one or more message sources like **Virtual Agent Messages**, **User Messages**, or **Agent Messages** by **local filter** in the top right.  When you want to search only for Virtual Agent-specific messages click on the filter option „Virtual Agent Messages“ and leave the other options not selected.

Using the **"Negate "** slider bar**" all but the selected" filter option(s) will be analyzed.
For example when selecting the 'Agent messages' and toggling "Negate" then all data will be analyzed but not Agent-message data.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/fd64fcb-Transcript_Explorer_n2.svg" width="100%" />
  <figcaption>Local filter "Source"</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/942c078-Transcript_Explorer_n3.svg" width="100%" />
  <figcaption>Transcript Explorer: Search example for the key phrase "appointment"</figcaption>
</figure>

- When global filter options and local filter options are set, enter a key phrase like "booking", "cancel", "schedule", "message" or "appointment" etc. and you will get a list of all messages that match your search criteria.

- Transcript Explorer provides a sorting function for "Message count" and "Last message". 
-- Clicking on 'Message count' will sort the listed transcripts alternately by increasing/decreasing order.
-- Clicking on "Last message" sorts the listed transcripts alternately according to the newest/oldest entries.


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

### Open Flow 
To check your [Flow]({{config.site_url}}ai/resources/build/flows/) or to improve the configuration the Transcript Explorer provides the context menu  **"Open Flow"** option when right-clicking on a specific message displayed in the conversation panel.
Clicking the button leads you to the related Flow in Cognigy.AI.

???+ info "Note"
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

???+ info "Message Explorer"
    **More information to our Message Explorer see here: [Message Explorer]({{config.site_url}}insights/message-explorer/)**


## More information
<div class="divider"></div>

- [Cognigy Insights]({{config.site_url}}insights/cognigy-insights/)

- [Global Filter]({{config.site_url}}insights/global-filter/)

- [Dashboard Overview]({{config.site_url}}insights/dashboard-overview/)

- [Dashboard Engagement]({{config.site_url}}insights/dashboard-engagement/)

- [Dashboard NLU Performance]({{config.site_url}}insights/dashboard-nlu-performance/)

- [Step Explorer]({{config.site_url}}insights/step-explorer/)

- [Message Explorer]({{config.site_url}}insights/message-explorer/)

- [Download Report]({{config.site_url}}insights/download-report/)