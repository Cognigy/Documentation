---
title: "addConditionalEntrypoint"
slug: "add-conditional-entrypoint"
description: "Adds a conditional Entrypoint for the current conversation. This condition is used by the Optional Question Node."
hidden: false
tags:
  - addConditionalEntrypoint
  - execution control
  - conditional entrypoint
---

# addConditionalEntrypoint

## Syntax

`addConditionalEntrypoint(params)`

## Description

Adds a conditional Entrypoint for the current conversation. This condition is used by the Optional Question Node.

If `{condition}` is met within the next `{retentionTime}` inputs, Flow execution starts at `{entrypoint}`.

**Parameters:**

- `params`: `IAddConditionalEntrypointParams` — an object that includes the Entrypoint to trigger, the duration for retaining the condition, and the condition to evaluate.

??? info "IAddConditionalEntrypointParams Object Structure"

    ```js
    interface IAddConditionalEntrypointParams {
      entrypoint: string;
      retentionTime: number;
      condition: string;
    }
    ```

**Returns:** `void`

## Example

```js
addConditionalEntrypoint({
  entrypoint: "askEmail",
  retentionTime: 2,
  condition: "input.text.includes('@')"
});
```