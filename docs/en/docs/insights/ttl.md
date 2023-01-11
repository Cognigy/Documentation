---
 title: "TTL" 
 slug: "TTL" 
 hidden: false 
---
# TTL

[![Version badge](https://img.shields.io/badge/Added in-v4.42-blue.svg)]({{config.site_url}})

The TTL (time-to-live) displays the duration until the expiration of the Insights data displayed on dashboards. To know when the data will be expired, click ![clock](images/icons/clock.svg) in the upper-right corner of the current page.

To view the value in minutes, hover the cursor over the current value.

| Data     | Description     | Dashboards  |
| -------- | ----------------|---------| 
| Analytics| This indicates the duration between the creation of all Analytics data and its removal from the database.| [Overview](dashboard-overview.md), [Engagement](dashboard-engagement.md), [NLU Perfomance](dashboard-nlu-performance.md)|
| Conversations| This indicates the duration between the creation of conversation analytics and its removal from the database.| [Transcript Explorer](transcript-explorer.md), [Message Explorer](message-explorer.md)| 
| Sessions | This indicates the duration between the creation of Insights session analytics and its removal from the database.| [Overview](dashboard-overview.md), [Engagement](dashboard-engagement.md), [NLU Perfomance](dashboard-nlu-performance.md)|
| Step Events | This indicates the duration between the creation of Step data and its removal from the database.| [Step Explorer](step-explorer.md)|

When Cognigy products are used daily, the data expiration values will remain unchanged, as the countdown starts from the last data update.

If you have an on-premise Cognigy.AI installation, you can change the duration of data expiration via the [management-ui](../ai/tools/management-ui.md#expiration-values-ttl-for-sensitive-data) service. Otherwise, contact [technical support](../help/get-help.md/#help-center). Adjusting the data expiration value will only apply to new data obtained by Cognigy after the change. The expiration value for previously obtained data will remain unchanged.



