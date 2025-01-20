---
title: "Request Rating"
slug: "request-rating"
hidden: false
---

# Request Rating

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/request-rating.png" width="80%" />
</figure>

## Description

This Node prompts end users to give feedback or rate their conversation experience using a rating widget in the chat.
The Node is commonly used at the end of a Flow to collect final feedback from conversations with either AI or human agents.
This Node is compatible with Cognigy Webchat.

You can customize a rating widget in the Webchat Endpoint by doing the following:

1. In the left-side menu of the Project, go to **Deploy > Endpoints** and select your configured Webchat Endpoint.
2. Open the **Conversation Rating Settings** field.
3. Configure the Rating settings as described in the [Deploy Webchat Endpoint](../../../../webchat/v2/configuration.md#conversation-rating-settings) documentation.
4. Click **Save**.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/request-rating-webchat.svg"/>
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
- [Cognigy Insights](../../../../insights/overview.md)