---
title: "Go To" 
slug: "go-to" 
hidden: false 
tags:
  - Cognigy.AI
  - Nodes
  - Go To
---

# Go To

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/go-to.png" width="50%" />
</figure>

## Description

A **Go To Node** switches the conversation to another **Node** or **Flow**, which is executed immediately when this Node is activated. If the Go To Node switches to another Flow, the Entrypoint also switches to that Flow altogether (until switched back).

!!! note "Using Go To and Execute Together"
    A Go To Node overwrites the execution of an Execute Flow Node. If a Flow containing a Go To Node is executed, after an Execute Flow Node, the Go To Node stops the original execution and the session stays in the Go To Node's destination Flow. This action prevents the normal behavior of the Execute Flow Node, which returns to the Flow it is located in.

## Parameters

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                            |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Select Flow | Select the target Flow that is switched to whenever the Flow execution triggers the **Go To** Node. To manually enter the Flow ID, click **Manual Input** and enter the Flow ID. Click ![target-flow](../../../../_assets/icons/target-flow.svg) to open the target Flow.                                                                              |
| Select Node | Select the target Node that is switched to whenever the Flow execution triggers the **Go To** Node. To manually enter the Node ID, click **Manual Input** and enter the Node ID. <br><br>A Node must be set as an Entrypoint before it can be selected. To set any Node as an Entrypoint, use the [Set Entrypoint](../../nodes/overview.md) parameter. |

??? info "Advanced"
    | Parameter                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    |--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Execution Mode           | The Execution Mode determines the behavior of the Go To Node. It can go to the target Node and continue, or it can wait for input.                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | Optionally Injected Text | If the Execution Mode is set to **Go to Node and continue**, you can overwrite the text with which to continue here. If no text is specified, input.text is used.                                                                                                                                                                                                                                                                                                                                                                                            |
    | Optionally Injected Data | If the Execution Mode is set to **Go to Node and continue**, you can overwrite the data with which to continue here. If no data is specified, input.data is used.                                                                                                                                                                                                                                                                                                                                                                                            |
    | Parse Intents            | The user decides whether we should **parse intents** within the sub Flow. This is disabled by default.<br><br>If the **Parse Intents** parameter is enabled, Cognigy NLU reparses the Intents in the target Flow, using either [input.text](../../../test/interaction-panel/input.md#accessing-the-input-object) or the Optionally Injected Text.<br><br>This parameter parses the input into the sub Flow, and the NLU then scores this text using the available Intents in the sub Flow. This parameter doesn't score based on Intents in the parent Flow. |
    | Parse Slots              | The user decides whether we should **parse slots** within the sub Flow. This is disabled by default.<br><br>If the **Parse Slots** parameter is enabled, Cognigy NLU reparses the Slots in the target Flow, using either [input.text](../../../test/interaction-panel/input.md#accessing-the-input-object) or the Optionally Injected Text.<br><br>This parameter parses the input into the sub Flow, and the NLU then scores this text using the available Slots in the sub Flow. This parameter doesn't score based on Slots in the parent Flow.           |
    | Absorb Context           | If this parameter is enabled, the default Context of the target Flow is applied to the current Context upon switching.                                                                                                                                                                                                                                                                                                                                                                                                                                       |

!!! warning "Loops"
    Cognigy.AI checks how often a Go To Node was activated without a user input in-between. The default setting for maximum loops is 4, but it is configurable for on-premises installations.
