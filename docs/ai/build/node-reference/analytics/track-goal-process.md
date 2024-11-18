---
title: "Track Goal Process"
slug: "track-goal-process"
description: "The Track Goal Process Node lets you monitor the progress of a specific goal within a Flow."
hidden: false
---

# Track Goal Process

The Track Goal Process Node lets you monitor the progress of a specific goal within a Flow
and can be used only with [Goals v2](../../../analyze/goals/v2.md). 

By adding this Node, you can track key steps defined in your goals, such as time or money saved,
and then analyze the results in the Insights dashboard or via the OData endpoint.

For example, if your goal is to reduce call handling time, the Track Goal Process Node will track each interaction step, helping you measure whether your Flow is achieving the desired reductions in response times.

## Settings

| Parameter    | Description                                                                                                                                                                                                                                                                                                                                                         |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Select Goal  | Select the goal you previously created in **Build > Goals**. This is the goal you want to track progress on, such as `Reduce Call Handling Time` or `Improve Customer Onboarding`.                                                                                                                                                                                  |
| Select Steps | Select one or more steps that you have configured within your chosen goal. For example, if your goal includes multiple stages, such as `Initial Contact` and `Query Resolved`, you can track each step's progress separately. <br> Set the Startpoint step at the beginning of the process you want to track in your Flow. Otherwise, the goal will not be tracked. |

## Example

Let's assume you have set a goal called `Reduce Customer Support Request Time`.
The steps within this goal are the following:

1. Customer Request Received. This step represents when the customer initiates contact with support.
2. Request Resolved by Chatbot. This step tracks when the AI Agent successfully resolves a customer query.
3. Escalation to Human Agent. This step tracks when the AI Agent escalates the request to a human agent if needed.

## More Information

- [Goals v2](../../../analyze/goals/v2.md)
- [Dashboard Goals](../../../../insights/dashboards/goals.md)
- [Complete Goal Node](complete-goal.md)