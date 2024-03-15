---
title: "Request Rating"
slug: "request-rating"
hidden: false
---

# Request Rating

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/other/request-rating.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node prompts end users to give feedback or rate their conversation experience using a rating widget in the chat.
The Node is commonly used at the end of a Flow to collect final feedback from conversations with either virtual or human agents.
This Node is compatible with Cognigy Webchat.

You can customize a rating widget in the Webchat Endpoint by doing the following:

1. Open the Cognigy.AI interface.
2. Go to **Deploy > Endpoints** and select your configured Webchat Endpoint.
3. Open the **Conversation Rating Settings** field.
4. Configure the Rating settings as described in the [Deploy Webchat Endpoint](../../endpoints/webchat/deploy-webchat-endpoint.md#conversation-rating-settings) documentation.
5. Click **Save**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/Request_Rating_Webchat_5.svg"/>
  <figcaption>Webchat Rating Widget</figcaption>
</figure>

Once the end user provides a rating, the rating value is stored as a variable in the Analytics database.

{! _includes/ai/nodes/insights-for-rating.md !}

## Settings

| Parameter           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Rating Title        | Define a custom title for the rating request dialog.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Rating Comment Text | Define a custom comment text for the rating request dialog.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

{! _includes/ai/nodes/rating.md !}

## More information

- [Set Rating](set-rating.md)
- [Cognigy Insights](../../../insights/cognigy-insights.md)