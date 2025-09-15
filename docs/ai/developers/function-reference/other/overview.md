---
title: "Overview"
slug: "other"
description: "These are functions that don’t belong to any specific group. They let you evaluate conditions, mark conversation goals as complete, and extract data from user input using regex."
hidden: false
tags:
   - other functions
   - goals
   - evaluateRule
   - setRegexSlot
---

# Other Functions

These are functions that don’t belong to any specific group. They let you evaluate conditions, mark conversation goals as complete, and extract data from user input using regex.

## [`evaluateRule`](evaluateRule.md)

**Syntax**

`evaluateRule(rule)`

Evaluates a condition based on a rule configuration that follows the `left`, `operator`, `right` pattern. This function works similarly to the If Node.

## [`completeGoal`](completeGoal.md)

**Syntax**

`completeGoal(goal)`

Marks a goal as `completed` for the conversation.

## [`setRegexSlot`](setRegexSlot.md)

**Syntax**

`setRegexSlot(params)`

Extracts Slots from user inputs using a regular expression and writes them to `input.slots`. This function is used by the [Regex Slot Filler](../../../build/node-reference/ai/regex-slot-filler.md) Node.