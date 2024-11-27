---
title: "Complete Task"
slug: "complete-task"
description: "The Complete Task Node provides an easy way to track the completion of a specific event, once the Node is triggered."
hidden: false
---

# Complete Task

[![Version badge](https://img.shields.io/badge/Updated in-v4.90-blue.svg)](../../../release-notes/4.90.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/profile/complete-task.png" width="80%" />
</figure>

## Description

The Complete Task Node provides an easy way to track the completion of a specific event once the Node is triggered and can be used only with [Goals v1](../../../analyze/goals-and-tasks/v1.md).

To start using this Node, add it below the Node that completes the action you want to track. Once the user has passed this action and triggered the Complete Task Node, the completed goal will be stored in the [Contact Profile](../../../analyze/contact-profiles.md) and [Analytics database](../../../analyze/collecting-data.md).

Complete Tasks have a variety of potential use cases and help understand how often certain events are achieved.
The achieved tasks are recorded in the Contact Profiles of each end user.
The data is also available in Insights (on dashboards and explorers) and through the OData endpoint.
The [top tasks](../../../../insights/dashboards/engagement.md#tasks-reached) are listed in the Insights Engagement dashboard
and allow you to track and analyze their frequency. 
If you don't intend to analyze Contact Profiles and prefer a more focused analysis using the [Insights Step Explorer](../../../../insights/explorers/step.md), then [Analytics Steps](../../../analyze/collecting-data.md#analytics-steps) would be more suitable.

The difference between a Complete Task and an Analytics Step lies in their purpose and usage within a system. Complete Tasks determine whether a user has completed a specific objective or task. In contrast, Analytics Steps collect data about individual events or actions for analytical purposes. Complete Tasks are associated with a user's profile, whereas Analytics Steps focus on tracking and storing data information.

## Settings

| Parameter | Type          | Description                                                                   |
|-----------|---------------|-------------------------------------------------------------------------------|
| Goal      | CognigyScript | The name of the goal that should be completed when the contact hits the Node. |

## Use Cases

### Order Placement

When a user completes the order placement process successfully, you can use the Complete Task Node to mark the "Order Placement" goal as completed.

This goal helps you track the number of successful order placements by customers through the chat or voice call.

### Account Registration

When a user has to create an account, you can use the Complete Task Node to indicate that the "Account Registration" goal has been achieved.

This goal helps you to track the number of successful account registrations through the chat or voice call.

### Appointment Booking

When a user books an appointment, you can use the Complete Task Node to signify the completion of the appointment booking process.

This goal helps you track the number of successful appointments scheduled through the chat or voice call.

### Information Retrieval

When a user seeks specific information from the chatbot, such as product details or FAQ answers, you can utilize the Complete Task Node to mark the "Information Retrieval" goal as completed.

This goal allows you to track successful information retrieval interactions through the chat or voice call.

## Example

The example shows how to measure the AI Agent's effectiveness in your customer call center. You can use the following approach:

1. In the Flow, add a Question Node with the "Have we resolved your problem?" question and provide buttons (B1 and B2) as options.
2. If the user selects B1 (Yes, my problem is resolved), connect it to a Complete Task Node. This Node will mark the "Successful AI Agent Conversation" goal as completed, indicating that the AI Agent has effectively assisted the customer.
3. If the customer selects B2 (No, I want to speak to a human agent), handle this separately by triggering a Handover to Agent Node. In this case, you don't need to use the Complete Task Node.
4. If the customer doesn't reply or types another question directly, consider it as a neutral conversation. You don't need to track it as a completed or unsuccessful goal.

## Alternatives

As an alternative to this Node, you can use the [Track Goal](track-goal.md) Node with Goals v2. 
In this case, you can define multiple steps within one goal and track important metrics such as time and money.