---
title: "evaluateRule"
slug: "evaluate-rule"
description: "evaluateRule evaluates a condition based on a rule configuration, following a `left`, `operator`, `right` pattern. "
hidden: false
tags:
  - other functions
  - evaluateRule
---

# evaluateRule

## Syntax

`evaluateRule(rule)`

## Description

Evaluates a condition based on a rule configuration that follows the `left`, `operator`, `right` pattern. This function works similarly to the If Node. The `left` value is compared with the `right` value using the specified operator (for example, `!=`, `>`, `includes`). If the condition evaluates to `true`, the associated logic or transition is executed.

**Parameters:**

- `rule`: `IRule` – a rule configuration object.

??? info "IRule Object Structure"

    ```js
    export const ruleOperands = <const>[
        "lt",
        "lte",
        "eq",
        "neq",
        "gt",
        "gte",
        "exists",
        "nexists",
        "contains",
        "ncontains",
        "isyes",
        "isno"
    ];
    
    export type TRuleOperand = typeof ruleOperands[number];
    
    export interface IRule {
        left: string;
        operand: TRuleOperand;
        right: string;
    }
    ```    

**Returns:** `boolean` – whether the condition of the rule is met.

## Example

```js
const rule: IRule = {
  left: "hello world",
  operand: "contains",
  right: "hello"
};

const result = evaluateRule(rule); // true
```