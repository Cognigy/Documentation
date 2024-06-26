---
title: "Message Explorer" 
slug: "message-explorer" 
hidden: false 
---

# Message Explorer

The Message Explorer is an analytics tool in Cognigy Insights that helps you search for specific customer or virtual agent messages within a conversation. It shows messages before and after the selected one. It complements the [Transcript Explorer](transcript.md), which provides more session-related details and user profile data.

The Message Explorer shows the entire conversation as context around a specific message. This helps you understand user reactions and motivations. It can answer questions such as "What triggers specific types of responses?" and "How often do customers react similarly?"

To open the Message Explorer interface, use one of the following options:

=== "Via Cognigy.AI"
    1. Open the Cognigy.AI interface.
    2. In the left-side menu, select an Agent.
    3. Within the Agent interface, navigate to Insights using one of the following options:
        - In the left-side **Agent** menu, select **Insights**. 
        - In the upper-right corner, click ![user menu](../../_assets/icons/user-menu.svg) **> Insights**.
    4. The Cognigy Insights Overview dashboard will be displayed by default.
    5. In the left-side menu, select **Message Explorer**.
         
=== "Via Insights"
    1. Open your Cognigy Insights interface.<br>
    2. In the left-side menu, select **Message Explorer**.

The Message Explorer interface will be displayed.

<figure>
  <img class="image-center" src="../../../_assets/insights/explorers/message/message-explorer.png" width="100%" />
  <figcaption>Message Explorer displays user and virtual agent messages</figcaption>
</figure>

## Messages

When you first open the Message Explorer with default filter settings, it will scan all sessions of the currently selected Agent and display all messages for the selected time span. These messages include user messages, virtual agent messages, and agent messages, and are titled **Top Messages**.

The top messages are the ones that are sent most frequently during the specified time span. By default, the only filter applied is the time span set to **Last 30 Days**. This means that the Message Explorer will first show you the most frequently sent messages from the period you have selected in descending order. The numbers displayed below each message indicate how many times the message has occurred in the selected time span.

<figure>
  <img class="image-center" src="../../../_assets/insights/explorers/message/top-messages.png" width="100%" />
  <figcaption>Message Explorer displays top messages in descending order</figcaption>
</figure>

## Explore Messages

When you click on a message from the list, the page view will change and split into three columns: **Prior**, **Current Message**, and **Following**. The message you have chosen will be displayed as the current message in the middle column. The message that came before the current message will be displayed in the **Prior** column, and the message that follows the current message will be displayed in the **Following** column.

Every time you click on a message, it will be moved to the **Current Message** column, and the context messages before and after it will move accordingly to the **Prior** and **Following** columns. This allows you to navigate step by step through conversations to analyze the context of the situation, moving forward or backward.

If there are numerous messages, you can use the blue scroll bars located beside the **Prior**, **Current Message**, and **Following** message fields to view all of them.

If the selected message was sent multiple times and belongs to different conversations, all of the prior and following messages will be displayed so that you can view more than one message in these fields.

To go back to the filtered top messages again, click ![X-icon](../../_assets/icons/X-icon.svg) in the column title labeled with **Current Message**.

<figure>
  <img class="image-center" src="../../../_assets/insights/explorers/message/message-explorer_exploring-messages.png" width="100%"/>
  <figcaption>Selected message with prior and following messages</figcaption>
</figure>

## Search for Messages

The Message Explorer interface has a search field that allows you to look for specific messages.
Your search will be filtered according to the settings you have configured.
Once you have set your global and additional filter settings,
you can enter keywords in the **![magnifying glass](../../_assets/icons/magnifying-glass.svg) Search** field at the top of the page
to find messages that match your search criteria.
You will then get a list of all messages that match your search.

To find specific messages, follow these steps:

1. In the upper-right corner of the **Message Explorer** page, locate the search field.
2. In the search field, specify keywords or phrases.

The Message Explorer immediately updates the list of sessions according to the search results.

## Filter Messages

By default, the Message Explorer shows the **Global Filters** section at the top of the page.

You can filter sessions by using the following options:

- [Global Filters](#global-filters)
- [Additional Filters](#additional-filters)

To hide the Filter menu, click ![insight-filter-black](../../_assets/icons/insight-filter-black.svg) in the upper-right corner.

### Global Filters

For more information, read the [Global Filter](../global-filters.md) documentation.

### Additional Filters

You can use additional filters to refine your research.

To open the **Additional Filters** selection,
click **more filters ![insight-filter-black](../../_assets/icons/insight-filter-black.svg)** in the **Global Filters** section at the top of the **Message Explorer** page.

| Additional  Filter | Description                                                                                                                                                                                                            |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message Rating     | Select the rating criteria: <br> - **Positive** — messages perceived positively. <br>- **None** — messages with no sentiment. <br>- **Negative** — messages perceived negatively.                                      |
| Source             | Select one or more message sources: <br> - **Virtual Agent Messages** — messages sent by virtual agents. <br> - **User Messages** — messages sent by users. <br> - **Agent Messages** — messages sent by human agents. |
| Flow               | Specify one or more Flows to filter messages generated during the selected Flow passing.                                                                                                                               |
| Show payload data  | Include payload data. Payload is the part of transmitted data that conveys the intended message, such as rating results with comments and data files.                                                                  |

{! _includes/insights/exclude-filters.md !}

{! _includes/insights/reset-filters.md !}

## More Information

- [Cognigy Insights](../overview.md)
- [Global Filters](../global-filters.md)
- [Step Explorer](step.md)
- [Transcript Explorer](transcript.md)
- [Cognigy Insights Glossary](../glossary.md)
