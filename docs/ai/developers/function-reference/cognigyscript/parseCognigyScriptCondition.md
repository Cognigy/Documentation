---
title: "parseCognigyScriptCondition"
slug: "parse-cognigy-script-condition"
description: "parseCognigyScriptCondition evaluates a CognigyScript expression and returns a true or false value."
hidden: false
tags:
  - cognigyscript
  - functions
  - condition evaluation
---

# parseCognigyScriptCondition

## Syntax

`parseCognigyScriptCondition(condition)`

## Description 

Evaluates a CognigyScript expression and returns a `true` or `false` value.

CognigyScript allows you to embed expressions like `{{ "{{context.value > 5}}" }}` within strings. This function extracts and evaluates such an expression, used in logic checks for Flows, conditions, or custom functions.

This function is useful for dynamically checking conditions based on session, context, input, or profile data during runtime.

**Parameters:**

- `condition`: `string` — the CognigyScript condition to evaluate.

**Returns:** `boolean | null` — the result of the condition, or `null` if evaluation fails.

## Example

```js
const result = parseCognigyScriptCondition("{{ "{{context.score > 70 }}"}}");

if (result === true) {
  // Proceed if condition is true
  console.log("Score is high enough");
} else if (result === false) {
  // Condition evaluated to false
  console.log("Score is too low");
} else {
  // Evaluation failed
  console.log("Invalid condition");
}
```