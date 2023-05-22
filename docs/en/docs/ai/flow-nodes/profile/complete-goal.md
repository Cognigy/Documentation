---
title: "Complete Goal"
slug: "complete-goal"
hidden: false
---
# Complete Goal

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/744a2aa-profile-complete.jpg" width="100%" />
</figure>

## Description
<div class="divider"></div>
The Complete Goal Node will set a specific goal as completed when the contact hits the Node.

To start using this Node, add it below the Node that completes the action.

The completed goal will be stored in the contact's profile and Analytics.

Goals are useful when analyzing milestones in the user profiles using OData or for handover to Cognigy Live Agent. You can track [top goals](../../../insights/dashboard-engagement.md#goals-reached) in the Insights Engagement dashboard. If you don't intend to analyze user profiles and prefer a more focused analysis using the [Insights Step Explorer](../.. //insights/step-explorer.md), then Analytics Steps would be more suitable.

The difference between a Complete Goal and an Analytics Step lies in their purpose and usage within a system. Complete Goals determine whether a user has completed a specific objective or task. In contrast, Analytics Steps collect data about individual events or actions for analytical purposes. Complete Goals are associated with a user's profile, whereas Analytics Steps focus on tracking and storing data information.

## Settings

| Parameter | Type          | Description                                                                   |
|-----------|---------------|-------------------------------------------------------------------------------|
| Goal      | CognigyScript | The name of the goal that should be completed when the contact hits the Node. |

## Use Cases

### Order Placement

When a user completes the order placement process successfully, you can use the Complete Goal Node to mark the "Order Placement" goal as completed.

This goal helps you track the number of successful order placements by customers.

### Account Registration

When a user needs to create an account, you can use the Complete Goal Node to indicate that the "Account Registration" goal has been achieved.

This goal helps you to track the number of successful account registrations via the chatbot.

### Appointment Booking

When a user books an appointment, you can use the Complete Goal Node to signify the completion of the appointment booking process.

This goal helps you track the number of successful appointments scheduled through the chatbot.

### Information Retrieval

When a user seeks specific information from the chatbot, such as product details or FAQ answers, you can utilize the Complete Goal Node to mark the "Information Retrieval" goal as completed.

This goal allows you to track successful information retrieval interactions.

## Example

The example shows how to measure the chatbot's effectiveness in your customer call center. You can use the following approach:

1. In the Flow, add a Question Node with the "Are you helped sufficiently?" question and provide buttons (B1 and B2) as options.
2. If the user selects B1 (Yes, I'm helped sufficiently), connect it to a Complete Goal Node. This Node will mark the "Successful Chatbot Conversation" goal as completed, indicating that the chatbot has effectively assisted the customer.
3. If the customer selects B2 (No, speak to an agent), handle this separately by triggering a Handover to Agent Node. In this case, you don't need to use the Complete Goal Node.
4. If the customer doesn't reply or types another question directly, consider it as a neutral conversation. You don't need to track it as a completed or unsuccessful goal.
