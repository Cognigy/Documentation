---
title: "Data Expiration" 
slug: "Data Expiration"
description: "The Data Expiration feature helps organizations manage data retention in Insights by showing the remaining time until stored data is removed."
hidden: false 
tags:
  - Insights
  - TTL
  - data expiration
  - time to live
---

# Data Expiration in Insights

[![Version badge](https://img.shields.io/badge/Updated in-v2025.19-blue.svg)](../../release-notes/2025.19.md)

The *Data Expiration* feature helps organizations manage data retention by allowing you to view and change the remaining time until stored data is deleted. 

You can configure this feature globally or per organization to meet compliance and storage requirements.

Daily use of Cognigy products resets the data retention countdown, keeping your data from expiring.
For example, if the data expiration is set to 30 days and a user sends a message on May 1, the data will be retained until May 31; if they send another message on May 15, the expiration shifts to June 14.

## Key Benefits

- **Improved Data Compliance**. Helps organizations follow laws and regulations by automatically deleting data after a set retention period.
- **Optimized Storage Management**. Prevents unnecessary data buildup by removing expired data, which lowers storage costs and keeps the system running smoothly.
- **Flexible Configuration for SaaS and On-Premises**. Allows you to set data expiration rules globally or individually for each organization, whether you use SaaS or on-premises installations.

## How to Use

### Activate Data Expiration

By default, Cognigy.AI keeps analytics data to a maximum of 1 year. You can reduce this data expiration period as follows:

- For on-premises installations and dedicated SaaS installations, [set data expiration values](../../ai/administer/access/management-ui.md) in the [Management UI](../../ai/administer/access/management-ui.md).
- For shared SaaS installations, contact [Cognigy technical support](../../help/get-help.md#help-center) and specify the limits in your request.

The data expiration feature applies only to new data obtained by Cognigy.AI after activating data expiration in the Management UI. Any datasets obtained before setting the expiration value remain unaffected from this change.

??? info "Example"
    You set a 1-minute expiration value at 13:00 for Sessions in the Management UI.

    All Sessions created after 13:00 will automatically expire after 1 minute.

    Sessions created before 13:00 will remain unchanged.

### Check when Data Expires

To check when data expires, click ![clock](../../_assets/insights/icons/clock.svg) in the upper-right corner of the Insights interface.
To view the exact time in minutes, hover over the displayed value.

The table shows the [data from the Analytics database](../../ai/analyze/collecting-data.md) covered by data expiration and illustrates how they map to the data displayed in reports and explorers.

{! _includes/ai/understood-messages.md !}

??? info "View the table"

    | Data                | Description                                                                                            | Reports and Explorers                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    |---------------------|--------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Analytics           | The time span between the creation of all Analytics data and its deletion from the Analytics database. | [Overview](../reports/overview.md): <br>- Number of Inputs <br>- Top Intents <br> [Engagement](../reports/engagement.md): <br>- Avg. Session Length<br> - Max. Session Length <br> [NLU Performance](../reports/nlu-performance.md): <br> - Avg Intent Score <br> - Average Execution Time <br> - Intents by Score Range <br> - Max Intent Score <br> - Top Intents <br> - Top Intent Scores <br>                                                                                                     | 
    | Conversations       | The time span between the creation of chat history analytics and its deletion from the database.       | [Transcript Explorer](../explorers/transcript.md), [Message Explorer](../explorers/message.md)                                                                                                                                                                                                                                                                                                                                                                                                        |
    | Sessions            | The time span between the creation of Insights session analytics and its deletion from the database.   | [Overview](../reports/overview.md): <br> - Active Sessions<br> - Positive Ratings<br> - Sessions<br> - Session by Channel<br> - Total Sessions<br> - Top Tasks<br>- Top Slots<br> - Unique Contacts<br> - Users by Locale<br> [Engagement](../reports/engagement.md): <br>- Contacts <br>- Goals Reached <br>- Handovers by time of the day <br>- Live Agent Escalations <br>- Positive Ratings <br>- Positive Ratings over Time <br>[NLU Performance](../reports/nlu-performance.md):<br>- Top Slots | 
    | Step Events         | The time span between the creation of Step data and its deletion from the database.                    | [Step Explorer](../explorers/step.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | LiveAgentEscalation | The time span between the creation of Live Agent data and its deletion from the database.              | [Live Agent](../reports/live-agent.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
    | voice-gatewayEvents | The time span between the creation of Voice Gateway data and its deletion from the database.           | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
    | GoalsV2Events       | The time span between the creation of Goals data and its deletion from the database.                   | [Goals](../reports/goals.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Change Data Expiration

You can change data expiration values as follows:

- For on-premises Cognigy.AI installations, you can adjust data expiration values via the [Management UI](../../ai/administer/access/management-ui.md). 
- For SaaS installations, contact [technical support](../../help/get-help.md#help-center).

When you adjust the data expiration value, it applies only to new data obtained by Cognigy.AI. The data expiration value for previously obtained data remains unchanged.

### Customize Data Expiration for Multiple Organizations

If you manage multiple organizations, you can customize the data expiration settings for each organization independently through the Management UI.
The default data expiration value is set in the environment variable in the `values.yaml` file.

!!! note
    The Management UI value can override the environment variable for an organization.
    This override happens only if the Management UI value is positive and less than the environment variable.

    This setup balances global defaults with organization-specific requirements.

## More Information

- [Data Expiration Cognigy.AI](../../ai/analyze/data-expiration.md)