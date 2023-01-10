---
 title: "ttl" 
 slug: "ttl" 
 hidden: false 
---
# TTL

[![Version badge](https://img.shields.io/badge/Added in-v4.42-blue.svg)]({{config.site_url}})

The TTL (time-to-live) displays the duration until the expiration of the Insights data displayed on dashboards. To know when the data will be expired, click ![clock](../images/icons/clock.svg) in the upper-right corner of the current page.

To view the value in minutes, hover the cursor over the current value.

| Data     | Description     |
| -------- | ----------------|
| Analytics| This indicates the duration between creating all Analytics data and its removal from the database.  |
| Conversations| This indicates the duration between the initiation of conversation analytics and its removal from the database. |
| Sessions | This indicates the duration between the generation of Insights session analytics and its removal from the database.|
| Step Events | This indicates the duration between the creation of Step data and its removal from the database.|

If you have an on-premise Cognigy.AI installation, you can change data expiration via the [management-ui](../ai/tools/management-ui.md#expiration-values-ttl-for-sensitive-data) service. Otherwise, contact [technical support](../help/get-help.md/#help-center).