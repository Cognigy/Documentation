---
title: "Message Explorer" 
slug: "message-explorer" 
hidden: false 
---

# Message Explorer

## Description

The Message Explorer allows you to search for specific customer messages or Virtual Agent messages in your current Virtual Agent conversation. 
The task characteristic of the Insights Message Explorer is that you can see what message came before the selected message and what came after this message. As a result, you can better understand customers' reactions, for example, how often did customers react in the same way or in a specific way, and what are the reasons for that.

### Global filter options

Using the Global Filter options, you can define the search criteria to find the intended messages you want to evaluate. 
For more information, read [Global Filter](global-filter.md). 

### Local filter options

- You can search for specific customer messages by entering a key phrase in the **Search** field, for example, `appointment`.
  
- You can select one or more message sources like **Virtual Agent Messages**, **User Messages**, or **Agent Messages** by **Local Filter** options in the top right.  When you want to search only for Virtual Agent-specific messages, click on the filter option Virtual Agent Messages and leave the other options not selected.

- You can select one or more flows to show only messages that were generated during the selected flow passing.


Using the **Negate** slider bar all but the selected filter options will be analyzed.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/Message_Explorer_n5.svg" width="80%"/>
  <figcaption></figcaption>
</figure>

!!! warning
    Every change in filter settings needs to be confirmed with **Apply** to be active.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/Message_Explorer_n6.png" width="80%"/>
  <figcaption>Message Explorer filtered with selected local filter options</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/Message_Explorer_n7.png" width="80%"/>
  <figcaption>Message Explorer displays messages based on the selected local filter options</figcaption>
</figure>


### Message research

Click on a specific message, and the Message Explorer will display that message exclusively in the center column. The previous conversation will be shown in the left column, and the subsequent conversation will be displayed in the right column of the Message Explorer.

Use the scrolling bars to go through both message columns, titled **Prior** and **Following**. 

You can navigate also through the conversation when you click step by step on any single message in the **Prior** or the **Following** column. The selected message moves every time in the center column as **Current Message**. You can see in the left column the message which came prior to the selected message. The right column shows the message which followed the selected message. 

The numbers displayed below a message indicate how often this message has occurred in a selected timeframe. 

To go back to the filtered messages again, click on the **X** icon in the column title labeled with **Current Message**.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/Message_Explorer_n8.svg" width="80%"/>
  <figcaption>Message Explorer displays a selected user message with the prior and following message</figcaption>
</figure>


## More information

- [Cognigy Insights](cognigy-insights.md)
- [Global Filter](global-filter.md)
- [Dashboard Overview](dashboard-overview.md)
- [Dashboard Engagement](dashboard-engagement.md)
- [Dashboard NLU Performance](dashboard-nlu-performance.md)
- [Step Explorer](step-explorer.md)
- [Transcript Explorer](transcript-explorer.md)
- [Download Report](download-report.md)