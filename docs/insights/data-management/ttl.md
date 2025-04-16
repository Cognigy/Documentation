---
title: "Data Expiration" 
slug: "Data Expiration" 
hidden: false 
tags:
  - Insights
  - TTL
---

# Data Expiration

[![Version badge](https://img.shields.io/badge/Updated in-v4.59-blue.svg)](../../release-notes/4.59.md)

The *Data Expiration* (TTL, time-to-live) displays the time span until the Insights data expires. 

To see, when the data will expire, click ![clock](../../_assets/insights/icons/clock.svg) in the upper-right corner of the current page. To view the value in minutes, hover the cursor over the current value.

When you use Cognigy products daily, the data expiration values won't change because each new data update resets the countdown to expiration.

## Data Expiration Table

{! _includes/ai/understood-messages.md !}

In the table below, you can view the data included in TTL.

| Data                | Description                                                                                                     | reports/Explorers                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|---------------------|-----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Analytics           | This shows the time span between the creation of all Analytics data and its deletion from the database.         | [Overview](../reports/overview.md): <br>- Number of Inputs <br>- Top Intents  <br>- Understood Messages  <br>- Understood / Misunderstood Messages<br> [Engagement](../reports/engagement.md): <br>- Avg. Session Length<br> - Max. Session Length <br> [NLU Performance](../reports/nlu-performance.md): <br> - Avg Intent Score <br> - Average Execution Time <br> - Intents by Score Range <br> - Max Intent Score <br> - Understood Messages <br> - Understood / Misunderstood Messages <br> - Top Intents <br> - Top Intent Scores <br> | 
| Conversations       | This shows the time span between the creation of chat history analytics and its deletion from the database.     | [Transcript Explorer](../explorers/transcript.md), [Message Explorer](../explorers/message.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Sessions            | This shows the time span between the creation of Insights session analytics and its deletion from the database. | [Overview](../reports/overview.md): <br> - Active Sessions<br> - Positive Ratings<br> - Sessions<br> - Session by Channel<br> - Total Sessions<br> - Top Goals<br>- Top Slots<br> - Unique Contacts<br> - Users by Locale<br> [Engagement](../reports/engagement.md): <br>- Contacts <br>- Goals Reached <br>- Handovers by time of the day <br>- Live Agent Escalations <br>- Positive Ratings <br>- Positive Ratings over Time <br>- Top Goals <br>[NLU Performance](../reports/nlu-performance.md):<br>- Top Slots                        | 
| Step Events         | This shows the time span between the creation of Step data and its deletion from the database.                  | [Step Explorer](../explorers/step.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| LiveAgentEscalation | This shows the time span between the creation of Live Agent data and its deletion from the database.            | [Live Agent](../reports/live-agent.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| voice-gatewayEvents | This shows the time span between the creation of Voice Gateway data and its deletion from the database.         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| GoalsV2Events       | This shows the time span between the creation of Goals data and its deletion from the database.                 | [Goals](../reports/goals.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Activate Data Expiration

By default, Cognigy.AI keeps Analytics, Steps, and Insights Session data to a maximum of 1 year. You can set a shorter data expiration period the [Management UI](../../ai/administer/access/management-ui.md). To do so, follow these steps:

- For on-premises installations and dedicated SaaS installations, [set limits](../../ai/administer/access/management-ui.md#expiration-values-ttl-for-sensitive-data) in the [Management UI](../../ai/administer/access/management-ui.md).
- For shared SaaS installations, contact [Cognigy technical support](../../help/get-help.md#help-center) and specify the limits in your request.

If you have already set limits in the Management UI, the Data Expiration indicator automatically appears in Insights.

The Data Expiration feature applies only to new data obtained by Cognigy.AI after activating Data Expiration in the Management UI. Any datasets obtained before setting the expiration value remains unaffected from this change.

For example:

> You set a 1-minute expiration value at 13:00 for Sessions in the Management UI.
> 
> All Sessions created after 13:00 will automatically expire after 1 minute due to the 1-minute expiration date set in the Management UI.
> 
> Sessions created before 13:00 will remain unchanged.

## Change Data Expiration

For on-premises Cognigy.AI installations, you can adjust data expiration durations via the [management-ui](../../ai/administer/access/management-ui.md). For SaaS installations, contact [technical support](../../help/get-help.md#help-center). 

When you adjust the data expiration value, it will only apply to new data obtained by Cognigy. The expiration value for previously obtained data will remain unchanged.

### Customize Data Expiration for Multiple Organizations

If you manage multiple organizations, you can customize the Data Expiration settings for each organization independently through the Management UI.
The default Data Expiration is set in the environment variable in the `values.yaml` file.

!!! note 
    Specifying the Data Expiration for a specific organization in the Management UI overrides the environment setting for that organization. This setup ensures tailored Data Expiration configurations per organization, balancing global defaults with organization-specific needs.