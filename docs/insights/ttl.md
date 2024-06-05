---
 title: "Data Expiration" 
 slug: "Data Expiration" 
 hidden: false 
---
# Data Expiration

[![Version badge](https://img.shields.io/badge/Updated in-v4.59-blue.svg)](../release-notes/4.59.md)

The *Data Expiration* (TTL, time-to-live) displays the time span until the Insights data expires. 

To see, when the data will expire, click the ![clock](../_assets/insights/icons/clock.svg) in the upper-right corner of the current page. To view the value in minutes, hover the cursor over the current value.

When you use Cognigy products daily, the data expiration values won't change because the countdown resets with each data update.

## Data Expiration Table

In the table below, you can view the data included in TTL.

| Data                | Description                                                                                                       | Dashboards/Explorers                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|---------------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Analytics           | This shows the time span between the creation of all Analytics data and its deletion from the database.           | [Overview](dashboards/overview.md): <br>- Number of Inputs <br>- Top Intents  <br>- Understood Messages  <br>- Understood / Misunderstood Messages<br> [Engagement](dashboards/engagement.md): <br>- Avg. Session Length<br> - Max. Session Length <br> [NLU Performance](dashboards/nlu-performance.md): <br> - Avg Intent Score <br> - Average Execution Time <br> - Intents by Score Range <br> - Max Intent Score <br> - Understood Messages <br> - Understood / Misunderstood Messages <br> - Top Intents <br> - Top Intent Scores <br> | 
| Conversations       | This shows the time span between the creation of chat history analytics and its deletion from the database.       | [Transcript Explorer](explorers/transcript.md), [Message Explorer](explorers/message.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Sessions            | This shows the time span between the creation of Insights session analytics and its deletion from the database.   | [Overview](dashboards/overview.md): <br> - Active Contacts<br> - Positive Ratings<br> - Sessions<br> - Session by Channel<br> - Total Sessions<br> - Top Goals<br>- Top Slots<br> - Unique Contacts<br> - Users by Locale<br> [Engagement](dashboards/engagement.md): <br>- Contacts <br>- Goals Reached <br>- Handovers by time of the day <br>- Live Agent Escalations <br>- Positive Ratings <br>- Positive Ratings over Time <br>- Top Goals <br>[NLU Performance](dashboards/nlu-performance.md):<br>- Top Slots                        | 
| Step Events         | This shows the time span between the creation of Step data and its deletion from the database.                    | [Step Explorer](explorers/step.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| LiveAgentEscalation | This shows the time span between the creation of Live Agent data and its deletion from the database.              | [Live Agent](dashboards/live-agent.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| voice-gatewayEvents | This shows the time span between the creation of Voice Gateway data and its deletion from the database.           | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |


## Activate Data Expiration

Cognigy keeps data indefinitely by default. This behaviour can be changed by setting an expiration date in the management-ui.

To activate the Data Expiration feature, set limits via the [management-ui](../ai/administer/access/management-ui.md#expiration-values--ttl--for-sensitive-data) service if you have an on-premise Cognigy.AI installation. Otherwise, contact [technical support](../help/get-help.md#help-center) and specify the desired limits in your request.

If you have already set limits in the management-ui service, the Data Expiration indicator will automatically appear in the Insights interface.

The Data Expiration feature applies only to new data obtained by Cognigy after activating Data Expiration in management-ui. Any Datasets obtained before setting the expiration value will remain unaffected from this change.

For example:

> You set a 1-minute expiration value at 13:00 for Sessions in the management-ui service.
> 
> All Sessions created after 13:00 will automatically expire after 1 minute due to the 1-minute expiration date set in management-ui.
> 
> Sessions created before 13:00 will remain unchanged.

## Change Data Expiration

For on-premises Cognigy.AI installations, you can adjust data expiration durations via the [management-ui](../ai/administer/access/management-ui.md#expiration-values--ttl--for-sensitive-data). For SaaS installations, contact [technical support](../help/get-help.md#help-center). 

When you adjust the data expiration value, it will only apply to new data obtained by Cognigy. The expiration value for previously obtained data will remain unchanged.

### Customize Data Expiration for Multiple Organizations

If you manage multiple organizations, you can customize the Data Expiration settings for each organization independently through the management-ui.
The default Data Expiration is set in the environment variable in the `values.yaml` file.

!!! note 
    Specifying the Data Expiration for a specific organization in the management ui overrides the environment setting for that organization. This setup ensures tailored Data Expiration configurations per organization, balancing global defaults with organization-specific needs.