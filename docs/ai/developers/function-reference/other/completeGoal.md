---
title: "completeGoal"
slug: "complete-goal"
description: "completeGoal marks a goal as completed for the current conversation."
hidden: false
tags:
- goals
- completeGoal
---

# completeGoal

## Syntax

`completeGoal(goal)`

## Description

Marks a goal as completed for the current conversation. Completing a goal may influence reporting, analytics, or decision-making in the Flow.

**Parameters:**

- `goal`: `string` — the name of the goal to mark as completed.

**Returns:** `void`

## Example

```js
// Assume the user has successfully completed the "scheduleAppointment" Flow

completeGoal("scheduleAppointment");
```
