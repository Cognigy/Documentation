---
title: "Request Rating"
slug: "request-rating"
hidden: false
---

# Request Rating

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/analytics/request-rating.png" width="50%" />
</figure>

## Description

This Node prompts end users to give feedback or rate their conversation experience using a rating widget in a chat.
The Node is typically placed at the end of a Flow to collect final feedback from conversations with either AI or human agents.
You can implement this Node directly in the Webchat Endpoint.

In contrast to the [Set Rating Node](set-rating.md), the Request Rating Node doesn't rate a conversation automatically.

## Parameters

| Parameter           | Description                                                 |
|---------------------|-------------------------------------------------------------|
| Rating Title        | Define a custom title for the rating request dialog.        |
| Rating Comment Text | Define a custom comment text for the rating request dialog. |

??? info "Implement Rating in the Webchat Endpoint"

    You can customize a rating widget in the Webchat Endpoint by doing the following:

    1. In the left-side menu of the Project, go to **Deploy > Endpoints** and select your configured Webchat Endpoint.
    2. Open the **Conversation Rating Settings** field.
    3. Configure the Rating settings as described in the [Deploy Webchat Endpoint](../../../../webchat/v2/configuration.md#conversation-rating-settings) documentation.
    4. Click **Save**.

    <figure>
      <img class="image-center" src="../../../../../_assets/ai/build/node-reference/request-rating-webchat.svg"/>
    </figure>

    Once the end user provides a rating, the rating value is stored as a variable in the Analytics database.

## Track Ratings in Insights

{! _includes/ai/nodes/insights-for-rating.md !}

## Use Cases

{! _includes/ai/nodes/rating.md !}

## More information

- [Set Rating](set-rating.md)
- [Insights](../../../../insights/overview.md)