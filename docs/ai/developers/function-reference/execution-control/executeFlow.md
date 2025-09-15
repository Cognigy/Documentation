---
title: "executeFlow"
slug: "executeFlow"
description: "executeFlow executes a target Flow starting from a specified Entrypoint Node."
hidden: false
tags:
  - execution control
  - executeFlow
  - flow execution
---

# executeFlow

## Syntax

`executeFlow(config)`

## Description

Executes a target Flow starting from a specified Entrypoint Node.

The behavior is controlled by `config.flowNode.isGoto`:

- `false` – the target Flow runs temporarily, then returns to the current Flow.
- `true` – the target Flow runs permanently, the current Flow doesn't continue.

Only Nodes marked as Entrypoint in the target Flow can be used.

**Parameters:**

- `config`: `IExecuteFlowNodeConfig` — the `IExecuteFlowNodeConfig` configuration object that specifies the configuration for the Flow execution.

??? info "IExecuteFlowNodeConfig Object Structure"

    ```js
    interface IExecuteFlowNodeConfig {
        flowNode: {
            flow: string;
            node: string;
            isGoto?: boolean;
        };
        parseIntents?: boolean;
        parseKeyphrases?: boolean;
        absorbContext?: boolean;
    }
    ```

**Returns:** `Promise<void>`

## Example

=== "Permanent Switch (`isGoto = true`)"
    ```txt
    Current Flow → executeFlow(target Flow) → switches → target Flow continues (no return)
    ```

    ```js
    await executeFlow({
      flowNode: {
        flow: "support-flow",     // The ID of the target Flow
        node: "node-id",          // The ID of the Entrypoint Node
        isGoto: true              // Return to this Flow after execution
      },
      parseIntents: true,         // Enable intent parsing in the target Flow
      parseKeyphrases: false,     // Disable keyphrase parsing
      absorbContext: true         // Absorb context from the target Flow
    });
    ```
=== "Temporary Run (`isGoto = false`)"
    ```txt
    Current Flow → executeFlow(target Flow) → returns → Current Flow continues
    ```

    ```js
    await executeFlow({
      flowNode: {
        flow: "support-flow",     // The ID of the target Flow
        node: "node-id",          // The ID of the Entrypoint Node
        isGoto: false             // Return to this Flow after execution
      },
      parseIntents: true,         // Enable intent parsing in the target Flow
      parseKeyphrases: false,     // Disable keyphrase parsing
      absorbContext: true         // Absorb context from the target Flow
    });
    ```