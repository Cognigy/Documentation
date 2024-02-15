---
title: "Message Explorer" 
slug: "message-explorer" 
hidden: false 
---

# Message Explorer

The Message Explorer in [Cognigy Insights](../insights/cognigy-insights.md) is an analysis tool designed for efficiently searching specific customer or virtual agent messages within the context of an ongoing conversation. It provides a comprehensive view by revealing the messages preceding and following a selected one.
This allows you to better understand the customer's reactions in a conversation to improve your Flow process and the virtual agent's communication  performance. Using the Message Explorer, you have a tool to identify specific situations in conversations, causing failures in the process flow, and how to solve or avoid them.

To open the Message Explorer interface, use one of the following options:

=== "Via Cognigy.AI"
    1. Open the Cognigy.AI interface.
    2. In the left-side menu, select an Agent.
    3. Within the Agent interface, navigate to Insights using one of the following options:
        - In the left-side **Agent** menu, select **Insights**. 
        - In the upper-right corner, click ![user menu](../assets/icons/user-menu.svg) **> Insights**.
    4. The Cognigy Insights Overview dashboard will be displayed by default.
    5. In the left-side menu, select **Message Explorer**.
         
=== "Via Insights"
    1. Open your Cognigy Insights interface.<br>
    2. In the left-side menu, select **Message Explorer**.

The Message Explorer interface will be displayed.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/message-explorer.png" width="100%" />
  <figcaption>Message Explorer displays user and virtual agent messages</figcaption>
</figure>

## Messages

When the Message Explorer is selected, the user interface will show all 



see a list of all sessions that match the global and local filter settings. This list of sessions is opened by default.

When The **Top Messages**  display is default when no specific filter options are active, only the time span **Last 30 Days** is active as default.

When you click on a displayed message, the related

|Message fields                         | Description                                                                                            |
|---------------------------------------|--------------------------------------------------------------------------------------------------------|
| Message Rating                        | Select rating results to view: <br> Positive <br> None <br> Negative                                   |
| Source                                | Select one or more message sources: <br> Virtual Agent Messages <br> User Messages <br> Agent Messages |
| Source                                | Select one or more message sources: <br> Virtual Agent Messages <br> User Messages <br> Agent Messages |




### Search for Messages

explain how to use the search bar to find a session
The Transcript Explorer interface provides a search field which enables you to search for sessions using pre-filled filter settings.
Using the search function you will find specific sessions with transcripts by searching for text messages, Session IDs or Contact IDs. Use phrases or keywords to get more accurate search results.

To find specific sessions, do the following:

1. Click ![arrow-down-black](../assets/icons/arrow-down-black.svg) in the top left of the Transcript Explorer page.
2. In the search field type the Agent name or select the Agent in the displayed list you want to view.
3. Check [global filter](#global-filters) and [local filter](#additional-local-filters) settings and configure them, if required. 
4. When you changed any settings click **Apply**, to activate the changed filter settings. The list of sessions is immediately updated according to the changed filter settings. 

When the global filter and local filter settings are configured, you can use the search field to enter key phrases used in messages, a session ID, or a contact ID to find sessions smarter. Key phrases, for example, could be `cancel`, `booking`, `message`, `order`, `food`. As a result, you will get a list of all sessions that match your search criteria.


- You can search for specific user messages by entering a key phrase in the **Search** field, for example, `appointment`.


### Filter Messages

When searching for specific messages, you can use the following configurable filters:

- [Global Filters](#global-filters)
- [Additional Local Filters](#additional-local-filters)

To open the filter menu, click ![insight-filter-black](../assets/icons/insight-filter-black.svg) at the top right side next to the user menu icon. 

!!! note "Effect of the Negate filter option"
    When you enable the **Negate** filter option, all filter options except the selected one will be considered. For example, when selecting Agent messages and toggling Negate, all data will be considered except for the Agent messages.

!!! warning
    When you change any settings click **Apply**, to activate the changed filter settings. The displayed messages will immediately be updated according to the changed filter settings. 

#### Global Filters

Using the Global Filter options, you can define the search criteria to find the intended messages you want to evaluate. 
For more information, read [Global Filter](global-filter.md). 

You can use the [global filter](../insights/global-filter.md) options to configure a research.

The Message Explorer provides following global filters to configure a research of messages:

- [Time span](global-filter.md#timeframe) - Allows to select a specific time period you want to view. Default time span setting is **Last 30 days**.
- [Snapshot](global-filter.md#snapshot) - You can select previously created snapshots - these are exported Agents with the resources they contain.
- [Endpoint](global-filter.md#endpoints) - You can select already prepared Endpoints which ensure that channel-specific input and output (images, galleries, voice) are converted to the standardized Input object.
- [Locales](global-filter.md#locales) - You can select the locale to view and analyze. Locales need to be configured previously in your Flow.

For more information, read the [Global Filter](global-filter.md) documentation.

#### Additional Local Filters

You can use the local filter options to refine your research.
To open the local filter menu, click **more filters ![insight-filter-black](../assets/icons/insight-filter-black.svg)**

|Additional Local Filter                | Description                                                                                            |
|---------------------------------------|--------------------------------------------------------------------------------------------------------|
| Message Rating                        | Select rating results to view: <br> Positive <br> None <br> Negative                                   |
| Source                                | Select one or more message sources: <br> Virtual Agent Messages <br> User Messages <br> Agent Messages |
| Flow                                  | Select one or more Flows you want to search for messages that were generated during the selected Flow passing. |
| Show payload data                     | Payload is the part of transmitted data that is the actual intended message, <br> for example, rating results with comments, and data files. |
 
### Reset Filter Settings

You can reset all changed local filter settings by clicking the **Reset** button on the right side of the filters. If the Reset button is not displayed, click once ![insight-filter-black](../assets/icons/insight-filter-black.svg) at the top right side of the Transcript Explorer page.


### Explore Messages

Click on a specific message, and the Message Explorer will display that message exclusively in the center column. The previous conversation will be shown in the left column, and the subsequent conversation will be displayed in the right column of the Message Explorer.

Use the scrolling bars to go through both message columns, titled **Prior** and **Following**. 

You can navigate also through the conversation when you click step by step on any single message in the **Prior** or the **Following** column. The selected message moves every time in the center column as **Current Message**. You can see in the left column the message which came prior to the selected message. The right column shows the message which followed the selected message. 

The numbers displayed below a message indicate how often this message has occurred in a selected timeframe. 

To go back to the filtered messages again, click on the **X** icon in the column title labelled with **Current Message**.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/message-explorer.png" width="80%"/>
  <figcaption>Message Explorer displays a selected virtual agent message and the prior and following message</figcaption>
</figure>

## More Information

- [Cognigy Insights](cognigy-insights.md)
- [Global Filter](global-filter.md)
- [Step Explorer](step-explorer.md)
- [Transcript Explorer](transcript-explorer.md)
- [Download Report](download-report.md)