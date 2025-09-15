---
title: "setRegexSlot"
slug: "set-regex-slot"
description: "Extracts Slots from user inputs using a regular expression and writes them to input.slots. The function is used by the [Regex Slot Filler](../../../build/node-reference/ai/regex-slot-filler.md) Node."
hidden: false
tags:
  - slot filling
  - regex slot filler
  - setRegexSlot
---

# setRegexSlot

## Syntax

`setRegexSlot(params)`

## Description

Extracts Slots from user inputs using a regular expression and writes them to `input.slots`. This function is used by the [Regex Slot Filler](../../../build/node-reference/ai/regex-slot-filler.md) Node.

**Parameters:**

- `params`: `IRegexSlotFillerParams` – a configuration object with regex, flags, and Slot information.

??? info "IRegexSlotFillerParams Object Structure"

    ```js
    export interface INodeExecutionCognigyObject extends IExecutionObjects {
        api: INodeExecutionAPI;
    }
    
    export type TNodeChildConfigs = {
        id: string;
        type: string;
        config: {
            [key: string]: unknown
        };
    };
    
    export interface ICognigyNodeFunctionParams {
        cognigy: INodeExecutionCognigyObject;
        childConfigs: TNodeChildConfigs[];
        config: object;
        nodeId: string;
    }
    
    export interface IRegexSlotFillerConfig {
        regex: string;
        flags: string;
        slot: string;
    }
    
    interface IRegexSlotFillerParams extends
        ICognigyNodeFunctionParams {
        config: IRegexSlotFillerConfig;
    }
    ```
    
**Returns:** `Promise<void>`

## Example

```js
const params: IRegexSlotFillerParams = {
  cognigy: {
    input: {
      text: "My ZIP code is 90210",
      // ...other Cognigy input properties
    },
    context: {},
    session: {},
    api: cognigyApi // typically injected by the platform
  },
  childConfigs: [],
  config: {
    regex: "\\b\\d{5}\\b",
    flags: "g",
    slot: "zipCode"
  },
  nodeId: "node-abc-123"
};

await setRegexSlot(params);
```
