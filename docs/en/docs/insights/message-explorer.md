# Message Explorer
## Description
<div class="divider"></div>
The Message Explorer allows you to search for specific customer messages or Virtual Agent messages in your current Virtual Agent conversation. 
The task characteristic of the Insights Message Explorer is that you can see what message came before the selected message and what came after this message. As result you can better understand customers' reactions, for example how often did customers react in the same way or in a specific way and what are the reasons for that.

**Global filter options**
<img src="https://files.readme.io/abf9750-divider-new.png" width="100%" style="margin-bottom: 5px">

Using the global filter options you can define the search criteria to find the intended messages you want to evaluate (see details here: [Global Filter](http://127.0.0.1:8008/insights/global-filter/)). 

**Local filter options**
<img src="https://files.readme.io/abf9750-divider-new.png" width="100%" style="margin-bottom: 5px">

- You can search for specific customer messages by entering a key phrase in the „Search“ field (for example "appointment").
  
- You can select one or more message sources like **Virtual Agent Messages**, **User Messages**, or **Agent Messages** by **local filter** options in the top right.  When you want to search only for Virtual Agent-specific messages click on the filter option „Virtual Agent Messages“ and leave the other options not selected.


Using the **"Negate "** slider bar "all but the selected" filter option(s) will be analyzed.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/9010b0c-Message_Explorer_n5.svg" width="100%" />
  <figcaption>Local filter for selecting message sources</figcaption>
</figure>

???+ warning "Note"
    **Every change in filter settings needs to be confirmed with “Apply” to be active.**

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/e347fe0-Message_Explorer_n6.svg" width="100%" />
  <figcaption>Message Explorer filtered with local filter option and "Negated" user messages</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/992882f-Message_Explorer_n7.svg" width="100%" />
  <figcaption>Message Explorer displays messages based on the selected local filter options</figcaption>
</figure>

**Message research**
<img src="https://files.readme.io/abf9750-divider-new.png" width="100%" style="margin-bottom: 5px">

- Click on a specific message and the Message Explorer will display this message exclusive in the center column, and the prior conversation is added in the left column and the following conversation is added in the right column of the Message Explorer.

Use the scrolling bars to go through both message columns, titled "Prior" and "Following". 

You can navigate also through the conversation when you click step by step on any single message in the "Prior" or the "Following" column. The selected message moves every time in the center column as "Current message" and you can see which message came prior (left column) and which message followed (right column). 

The numbers displayed below a message indicate how often this message has occurred in a selected timeframe. 

To go back to the filtered messages again click on the **"X"** icon in the column title labeled with "Current message".

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/2ff2bfa-Message_Explorer_n8.svg" width="100%" />
  <figcaption>Message Explorer displays selected user message with the prior and following message</figcaption>
</figure>


## More information
<div class="divider"></div>

- [Cognigy Insights]({{config.site_url}}insights/cognigy-insights/)

- [Global Filter]({{config.site_url}}insights/global-filter/)

- [Dashboard Overview]({{config.site_url}}insights/dashboard-overview/)

- [Dashboard Engagement]({{config.site_url}}insights/dashboard-engagement/)

- [Dashboard NLU Performance]({{config.site_url}}insights/dashboard-nlu-performance/)

- [Step Explorer]({{config.site_url}}insights/step-explorer/)

- [Transcript Explorer]({{config.site_url}}insights/transcript-explorer/)

- [Download Report]({{config.site_url}}insights/download-report/)