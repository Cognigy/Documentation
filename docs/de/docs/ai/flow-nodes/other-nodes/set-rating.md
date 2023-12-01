---
 title: "Set Rating" 
 slug: "set-rating" 
 hidden: false 
---
# Set Rating

[![Version badge](https://img.shields.io/badge/Added in-v4.9.0-blue.svg)]({{config.site_url}})

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/set-rating.png" width="80%" />
</figure>

## Description
<div class="divider"></div>
Cognigy introduces as of release Cognigy.AI (4.9.0) a new Flow Node **Set Rating** which extends the analytical capabilities of Cognigy.AI together with the [Insights]({{config.site_url}}insights/cognigy-insights/) application. 

The Set Rating Node sets the rating and rating comment for a conversation.

## Settings

| Parameter          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Rating Score**   | The rating for the conversation. -1 for a negative rating or 1 for a positive rating                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Rating Comment** | Additional information about the rating.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Settings**       | - **Label**: Enter a name for your choice to the Node. [Adding a Label]({{config.site_url}}ai/flow-nodes/node-usage/#add-label) replaces the bottom text line of a Node.<br/>- **Comment**: [Additional information]({{config.site_url}}ai/flow-nodes/node-usage/#add-comment) about the Node.<br/>- **Analytics step**: Enter a meaningful step name used as **[Annotation]({{config.site_url}}insights/step-explorer/#annotations)** for the [Step Explorer]({{config.site_url}}insights/step-explorer/) in [Insights]({{config.site_url}}insights/cognigy-insights/) analytics. |

