---
title: "Complete Goal"
slug: "complete-goal"
description: "The Complete Goal Node provides an easy way to track the completion of a specific event, once the Node is triggered."
description: "The Complete Goal Node provides an easy way to track the completion of a specific event, once the Node is triggered."
description: "The Complete Goal Node provides an easy way to track the completion of a specific event, once the Node is triggered."
hidden: false
---
# Complete Goal

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/profile/complete-goal.png" width="80%" />
</figure>

## Description

The Complete Goal Node provides an easy way to track the completion of a specific event, once the Node is hit.

In order to start using this Node, add it below the Node that completes the action you want to track. Once the user has passed this action and hits the Complete Goal Node, the completed goal will be stored in the contact's profile and Analytics.

Goals have a variety of potential use cases and help understanding how often certain events are achieved. They are tracked and allow analyzing events in the user profiles using OData or for handover to Cognigy Live Agent. The [top goals](../../../../insights/dashboards/engagement.md#goals-reached) are listed in the Insights Engagement dashboard and allow you to track and analyze their frequency. 
If you don't intend to analyze user profiles and prefer a more focused analysis using the [Insights Step Explorer](../../../../insights/explorers/step.md), then Analytics Steps would be more suitable.

The difference between a Complete Goal and an Analytics Step lies in their purpose and usage within a system. Complete Goals determine whether a user has completed a specific objective or task. In contrast, Analytics Steps collect data about individual events or actions for analytical purposes. Complete Goals are associated with a user's profile, whereas Analytics Steps focus on tracking and storing data information.

## Settings

| Parameter | Type          | Description                                                                   |
|-----------|---------------|-------------------------------------------------------------------------------|
| Goal      | CognigyScript | The name of the goal that should be completed when the contact hits the Node. |

## Use Cases

### Order Placement

When a user completes the order placement process successfully, you can use the Complete Goal Node to mark the "Order Placement" goal as completed.

This goal helps you track the number of successful order placements by customers through the chatbot.

### Account Registration

When a user has to create an account, you can use the Complete Goal Node to indicate that the "Account Registration" goal has been achieved.

This goal helps you to track the number of successful account registrations via the chatbot.

### Appointment Booking

When a user books an appointment, you can use the Complete Goal Node to signify the completion of the appointment booking process.

This goal helps you track the number of successful appointments scheduled through the chatbot.

### Information Retrieval

When a user seeks specific information from the chatbot, such as product details or FAQ answers, you can utilize the Complete Goal Node to mark the "Information Retrieval" goal as completed.

This goal allows you to track successful information retrieval interactions via the chatbot.

## Example

The example shows how to measure the AI Agent's effectiveness in your customer call center. You can use the following approach:

1. In the Flow, add a Question Node with the "Have we resolved your problem?" question and provide buttons (B1 and B2) as options.
2. If the user selects B1 (Yes, my problem is resolved), connect it to a Complete Goal Node. This Node will mark the "Successful AI Agent Conversation" goal as completed, indicating that the AI Agent has effectively assisted the customer.
3. If the customer selects B2 (No, I want to speak to a human agent), handle this separately by triggering a Handover to Agent Node. In this case, you don't need to use the Complete Goal Node.
4. If the customer doesn't reply or types another question directly, consider it as a neutral conversation. You don't need to track it as a completed or unsuccessful goal.