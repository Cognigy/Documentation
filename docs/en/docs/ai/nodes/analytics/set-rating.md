---
title: "Set Rating"
slug: "set-rating"
hidden: false
---

# Set Rating

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/other/set-rating.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node pre-fills a rating prompt with a specific value or updates it based on other actions or user inputs. Multiple Set Rating Nodes can be added to collect feedback at specific steps.

You can combine this Node with the Request Rating Node to allow users to update their rating based on feedback. For example, add a Set Rating Node to pre-fill a rating prompt with a default value based on the user's previous interactions with the bot. Then, add the Request Rating Node to enable the user to confirm or modify the rating value.

Keep in mind that this Node doesn't display a rating widget to the end user as the Request Rating Node.

## Settings

| Parameter      | Description                                                                              |
|----------------|------------------------------------------------------------------------------------------|
| Rating Score   | The rating for the conversation is -1 for a negative rating or 1 for a positive rating.  |
| Rating Comment | Additional information about the rating.                                                 |

## Comparison of Rating Nodes

The table shows how to use Set Rating and Request Nodes, with the difference highlighted in the third step.

| Set Rating Node                                                                                                                                                                                                                             | Request Rating Node Example                                                                |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| 1. Customer interacts with the virtual agent to inquire about product specifications.                                                                                                                                                       | 1. Customer completes a troubleshooting session with the chatbot.                          |
| 2. Virtual agent successfully provides the required product information.                                                                                                                                                                    | 2. Virtual agent prompts the customer to provide feedback on their experience.             |
| 3. Set Rating Node assigns a predefined rating value (1 for positive feedback or -1 for negative feedback) to the customer's session based on the positive interaction. The customer doesn't see any rating prompt during the conversation. | 3. Customer rates their experience with the chatbot's support (for example, 1 to 5 stars). |
| 4. The chosen rating is recorded and stored for analysis.                                                                                                                                                                                   | 4. The chosen rating is recorded and stored for analysis.                                  |

## More information

- [Request Rating](request-rating.md)
- [Cognigy Insights](../../../insights/cognigy-insights.md) 