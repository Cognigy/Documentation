---
title: "Message Explorer" 
slug: "message-explorer" 
hidden: false 
---

# Message Explorer

The Message Explorer in [Cognigy Insights](../insights/cognigy-insights.md) is an analysis tool designed for efficiently searching specific customer or virtual agent messages within the context of an ongoing conversation. It provides a comprehensive view by revealing the messages preceding and following a selected one.

Message Explorer and Transcript Explorer in Cognigy Insights complement each other.
The Transcript Explorer shows you more session related details and user profile data, and let you explore a transcript showing messages of a single session.
In difference to the Transcript Explorer the Message Explorer allows you to view specific messages in an overview in their number of appearances and conversation context. 

What makes the Insights Message Explorer unique is its ability to show you the entire conversation as context around a specific message. This lets you see what the user said before and after a chosen specific message, giving you valuable context for understanding user reactions and motivations.

The Message Explorer helps you answer questions like: "How often do customers react in a similar way?" and "What triggers specific types of responses?

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

When you start the Message Explorer the first time with default filter settings the Message Explorer scans all sessions of the current selected Agent and will display all these messages for the selected time span, including user messages, virtual agent messages, and agent messages, titled with **Top Messages**.  
Top messages are the messages that are sent most frequently during the specified time span.
No other filter is applied by default other then time span set default with **Last 30 Days**.
That means that the Message Explorer first shows you the most frequent messages from the period you have selected in descending order. The numbers displayed below a message indicate how often this message has occurred in a selected time span.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/top-messages.png" width="100%" />
  <figcaption>Message Explorer displays top messages in descending order</figcaption>
</figure>

## Explore Messages

When you click on a displayed message, the page view changes and is split into three columns titled with **Prior**, **Current Message**, and **Following**. The message you selected is displayed as current message in the middle. The message before the current message is displayed as prior message and the message behind the current messages is displayed as following message.  
Every time you click on a message it will be moved to **Current Message** and the context messages before and behind will move respective to **Prior** and **Following**.
When you select other prior or following messages, you can navigate step by step forward or backward through conversations to analyze the context situation. 
In a long list of messages you can use the blue scrolling bars indicated  beside the **Prior**, **Current Message**, and **Following** message fields to view all messages.
If the selected message was sent several times and belongs to different conversations, all these prior and following messages will be displayed so that you can see more than one message in these fields.    

|Message fields         |    Description                                                      |
|-----------------------|---------------------------------------------------------------------|
| Prior                 | The message that appears before the current message.                |
| Current Message       | The current selected message.                                       |
| Following             | The message that follows the current message in a conversation.     |

To go back to the filtered top messages again, click ![X-icon](../assets/icons/X-icon.svg) in the column title labelled with **Current Message**.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/message-explorer_exploring-messages.png" width="100%"/>
  <figcaption>Selected message with prior and following messages</figcaption>
</figure>

## Search for Messages

The Message Explorer interface provides a search field which enables you to search for messages. Each search takes the filter settings into account. When global filter and local filter settings are configured, you can enter key words in the **![magnifying glass](../assets/icons/magnifying-glass.svg) Search** field at the top of the page to find messages which matches to the key words. As a result, you will get a list of all messages that match your search criteria.

To find specific messages, do the following:

1. Click ![arrow-down-black](../assets/icons/arrow-down-black.svg) in the top left of the Message Explorer page.
2. In the search field type the Agent name or select the Agent in the displayed list you want to view.
3. Check [global filter](#global-filters) and [local filter](#additional-local-filters) settings and configure them, if required. 
4. When you changed any settings click **Apply**, to activate the changed filter settings. The list of sessions is immediately updated according to the changed filter settings. 

## Filter Messages

When searching for specific messages, you can use the following configurable filters:

- [Global Filters](#global-filters)
- [Additional Local Filters](#additional-local-filters)

To open the filter menu, click ![insight-filter-black](../assets/icons/insight-filter-black.svg) at the top right side next to the user menu icon. 

!!! note "Effect of the Negate filter option"
    When you enable the **Negate** filter option, all filter options except the selected one will be considered. For example, when selecting Agent messages and toggling Negate, all data will be considered except for the Agent messages.

!!! warning
    When you change any settings click **Apply**, to activate the changed filter settings. The displayed messages will immediately be updated according to the changed filter settings. 

### Global Filters

Using the Global Filter options, you can define the search criteria to find the intended messages you want to evaluate. 

You can use the [global filter](../insights/global-filter.md) options to configure a research.

The Message Explorer provides following global filters to configure a research of messages:

- [Time span](global-filter.md#timeframe) - Allows to select a specific time period you want to view. Default time span setting is **Last 30 days**.
- [Snapshot](global-filter.md#snapshot) - You can select previously created snapshots - these are exported Agents with the resources they contain.
- [Endpoint](global-filter.md#endpoints) - You can select already prepared Endpoints which ensure that channel-specific input and output (images, galleries, voice) are converted to the standardized input object.
- [Locales](global-filter.md#locales) - You can select the locale to view and analyze. Locales need to be configured previously in your Flow.

For more information, read the [Global Filter](global-filter.md) documentation.

### Additional Local Filters

You can use the local filter options to refine your research.
To open the local filter menu, click **more filters ![insight-filter-black](../assets/icons/insight-filter-black.svg)**.

|Additional Local Filter        | Description                                                                                            |
|-------------------------------|--------------------------------------------------------------------------------------------------------|
| Message Rating                | Select rating results to view: <br> Positive <br> None <br> Negative                                   |
| Source                        | Select one or more message sources: <br> Virtual Agent Messages <br> User Messages <br> Agent Messages |
| Flow                          | Select one or more Flows you want to search for messages that were generated during the selected Flow passing. |
| Show payload data             | Payload is the part of transmitted data that is the actual intended message, <br> for example, rating results with comments, and data files. |
 
## Reset Filter Settings

You can reset all changed local filter settings by clicking the **Reset** button on the right side of the filters. If the Reset button is not displayed, click once ![insight-filter-black](../assets/icons/insight-filter-black.svg) at the top right side of the Transcript Explorer page.

## More Information

- [Cognigy Insights](cognigy-insights.md)
- [Global Filter](global-filter.md)
- [Step Explorer](step-explorer.md)
- [Transcript Explorer](transcript-explorer.md)
- [Cognigy Insights Glossary](glossary.md)
