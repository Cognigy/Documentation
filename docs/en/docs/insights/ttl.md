---
 title: "Data Expiration" 
 slug: "Data Expiration" 
 hidden: false 
---
# Data Expiration

[![Version badge](https://img.shields.io/badge/Added in-v4.42-blue.svg)](../release-notes/4.42.md)

*Data Expiration* (TTL, time-to-live) displays the duration until the expiration of the Insights data displayed on dashboards. 

To know when the data will be expired, click ![clock](images/icons/clock.svg) in the upper-right corner of the current page. To view the value in minutes, hover the cursor over the current value.

When Cognigy products are used daily, the data expiration values will remain unchanged, as the countdown starts from the last data update.

## Data Expiration Table

In the table below, you can view the data included in TTL.

| Data          | Description                                                                                                       | Dashboards                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 
|---------------|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| Analytics     | This indicates the duration between the creation of all Analytics data and its removal from the database.         | [Overview](dashboard-overview.md): <br>- Number of Inputs <br>- Top Intents  <br>- Understood Messages  <br>- Understood / Misunderstood Messages<br> [Engagement](dashboard-engagement.md): <br>- Avg. Session Length<br> - Max. Session Length <br> [NLU Performance](dashboard-nlu-performance.md): <br> - Avg Intent Score <br> - Average Execution Time <br> - Intents by Score Range <br> - Max Intent Score <br> - Understood Messages <br> - Understood / Misunderstood Messages <br> - Top Intents <br> - Top Intent Scores <br> | 
| Conversations | This indicates the duration between the creation of chat history analytics and its removal from the database.     | [Transcript Explorer](transcript-explorer.md), [Message Explorer](message-explorer.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Sessions      | This indicates the duration between the creation of Insights session analytics and its removal from the database. | [Overview](dashboard-overview.md): <br> - Active Contacts<br> - Positive Ratings<br> - Sessions<br> - Session by Channel<br> - Sessions Count<br> - Top Goals<br>- Top Slots<br> - Unique Contacts<br> - Users by Locale<br> [Engagement](dashboard-engagement.md): <br>- Contacts <br>- Goals Reached <br>- Handovers by time of the day <br>- Live Agent Escalations <br>- Positive Ratings <br>- Positive Ratings over Time <br>- Top Goals <br>[NLU Performance](dashboard-nlu-performance.md):<br>- Top Slots                        | 
| Step Events   | This indicates the duration between the creation of Step data and its removal from the database.                  | [Step Explorer](step-explorer.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | All

## Activating Data Expiration

Cognigy keeps data indefinitely by default. To change this behavior, an expiration date must be set up.

To activate the Data Expiration feature, set limits via the [management-ui](../ai/tools/management-ui.md#expiration-values-ttl-for-sensitive-data) service if you have an on-premise Cognigy.AI installation. Otherwise, contact [technical support](../help/get-help.md#help-center) and specify the desired limits in your request.

If you have already set limits in the management-ui service, the Data Expiration indicator will automatically appear in the Insights interface.

The Data Expiration feature applies only to new data obtained by Cognigy after activating Data Expiration in management-ui. Data obtained before setting the expiration value remains.

For example:

> In management-ui, you set the 1-minute expiration value at 13:00 for Sessions.
> 
> Sessions created after 13:00 will automatically terminate after 1 minute due to the 1-minute expiration date set in management-ui.
> 
> Sessions created before 13:00 will remain unchanged.

## Changing Data Expiration

You can change the duration of data expiration via the [management-ui](../ai/tools/management-ui.md#expiration-values-ttl-for-sensitive-data) service if you have an on-premise Cognigy.AI installation. Otherwise, contact [technical support](../help/get-help.md#help-center). 

When you adjust the data expiration value, it will only apply to new data obtained by Cognigy. The expiration value for previously obtained data will remain unchanged.