---
title: "Set Rating"
slug: "set-rating"
hidden: false
---

# Set Rating

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/analytics/set-rating.png" width="50%" />
</figure>

## Description

This Node prefills a rating prompt with a specific value or updates it based on other actions or user inputs. Multiple Set Rating Nodes can be added to collect feedback at specific steps.

You can combine this Node with the [Request Rating](request-rating.md) Node.
For example,
add a Set Rating Node
to prefill a rating prompt with a default value based on the user's previous interactions with the AI Agent. Then,
include the Request Rating Node to enable the user to confirm or change the rating value.

In contrast to the [Request Rating Node](request-rating.md), the Set Rating Node doesn't display a rating widget to the end user.

## Parameters

| Parameter      | Description                                                                                 |
|----------------|---------------------------------------------------------------------------------------------|
| Rating Score   | The rating for the conversation is `-1` for a negative rating or `1` for a positive rating. |
| Rating Comment | Additional information about the rating.                                                    |

## Track Ratings in Insights

{! _includes/ai/nodes/insights-for-rating.md !}

## Use Cases

{! _includes/ai/nodes/rating.md !}

## More information

- [Request Rating](request-rating.md)
- [Insights](../../../../insights/overview.md) 