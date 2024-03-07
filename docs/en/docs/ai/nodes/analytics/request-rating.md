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

This Node serves as a prompt for end users to provide feedback or rate their conversation experience in a chat.
Usually, this Node is used at the end of the Flow to collect feedback on the dialog with the virtual or human agent.
This Node is compatible with Cognigy Webchat.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/9a139fc-Request_Rating_Webchat_5.svg"/>
  <figcaption>Webchat Rating Dialog</figcaption>
</figure>

To customize the conversation rating in the Webchat Endpoint, do the following:

1. Open the Cognigy.AI interface.
2. Go to **Deploy > Endpoints** and select your configured Webchat Endpoint.
3. Open the **Conversation Rating Settings** field.
4. Configure the Rating settings as described in the [Deploy Webchat Endpoint](../../endpoints/webchat/deploy-webchat-endpoint.md#conversation-rating-settings) documentation.
5. Click **Save**.

Once the end user provides a rating, the rating value is stored as a variable in the Analytics database.
This value can be used to analyze user feedback using analytics tools,
such as dashboards and explorers in [Cognigy Insights](../../../insights/cognigy-insights.md).
Additionally,
you can utilize the rating value to route the user to different parts of the Flow based on their feedback
or take other actions accordingly.

## Settings

| Parameter           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Rating Title        | Define a custom title for the rating request dialog.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Rating Comment Text | Define a custom comment text for the rating request dialog.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## More information

- [Set Rating](set-rating.md)
- [Cognigy Insights](../../../insights/cognigy-insights.md)