---
 title: "Request Rating" 
 slug: "request-rating" 
 hidden: false 
---
# Request Rating

[![Version badge](https://img.shields.io/badge/Added in-v4.10.0-blue.svg)]({{config.site_url}})

## Description
<div class="divider"></div>
Cognigy introduces as of release Cognigy.AI (4.10.0)  a new Flow Node "**Request Rating**". 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/004d88b-Request_Rating_menu.svg" width="100%" />
  <figcaption>Node selection menu</figcaption>
</figure>

The "**Request Rating**"-Node is used to request a rating. If the Node is triggered in your webchat conversation, you will see the rating dialog.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9a139fc-Request_Rating_Webchat_5.svg" width="100%" />
  <figcaption>Webchat rating dialog</figcaption>
</figure>


<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/86e7fea-Request_Rating_config_3.svg" width="100%" />
  <figcaption>""Request Rating"-Node configuration</figcaption>
</figure>


## Option
The configuration options and their functions are listed below:

| Parameter               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Rating Title**        | Define a custom title for the rating request dialog.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Rating Comment Text** | Define a custom comment text for the rating request dialog.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Settings**            | - **Label**: Enter a name for your choice to the Node. [Adding a Label]({{config.site_url}}ai/flow-nodes/node-usage/#add-label) replaces the bottom text line of a Node.<br/>- **Comment**: [Additional information]({{config.site_url}}ai/flow-nodes/node-usage/#add-comment) about the Node.<br/>- **Analytics step**: Enter a meaningful step name used as **[Annotation]({{config.site_url}}insights/step-explorer/#annotations)** for the [Step Explorer]({{config.site_url}}insights/step-explorer/) in [Insights]({{config.site_url}}insights/cognigy-insights/) analytics. |
