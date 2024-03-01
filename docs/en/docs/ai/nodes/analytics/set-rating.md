---
title: "Set Rating" 
slug: "set-rating"
hidden: false 
---

# Set Rating

[![Version badge](https://img.shields.io/badge/Added in-v4.9.0-blue.svg)]({{config.site_url}})

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/other/set-rating.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node extends the analytical capabilities of Cognigy.AI together with the [Insights](../../../insights/cognigy-insights.md) application. 

The Set Rating Node sets the rating and rating comment for a conversation.

## Settings

| Parameter      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Rating Score   | The rating for the conversation. -1 for a negative rating or 1 for a positive rating                                                                                                                                                                                                                                                                                                                                                                           |
| Rating Comment | Additional information about the rating.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Settings       | - **Label**: Enter a name for your choice to the Node. [Adding a Label](../../nodes/node-usage.md#add-label) replaces the bottom text line of a Node.<br/>- **Comment**: [Additional information](../../nodes/node-usage.md#add-comment) about the Node.<br/>- **Analytics step**: Enter a meaningful step name used as Annotation for the [Step Explorer](../../../insights/step-explorer.md) in [Insights](../../../insights/cognigy-insights.md) analytics. |

