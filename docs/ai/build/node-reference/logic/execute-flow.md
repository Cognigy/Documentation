---
title: "Execute Flow" 
slug: "execute-flow" 
hidden: false 
tags:
  - Cognigy.AI
  - Nodes
  - Execute Flow
---

# Execute Flow

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/execute-flow.png" width="50%" />
</figure>

## Description

An Execute Flow Node is used to immediately execute another Flow. This means that the Entrypoint will not switch to the new Flow. This operation can be compared to a function call.

After the target Flow finished executing, the current Flow will continue executing.

Cognigy monitors the number of times an Execute Flow Node is triggered without user input. The maximum loop count is set to 4 by default. This value is configurable only for on-premises installations.

When a Flow is executed, it will inherit the current Context from the parent Flow. The executed Flow can then make modifications to this Context, and these changes will be available to the parent Flow once the execution of the child Flow is completed.

## Parameters

| Parameter   | Description                                                                                                                                                                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Select Flow | Select the target Flow that is executed whenever the Flow execution triggers the **Execute Flow** Node. Click ![target-flow](../../../../_assets/icons/target-flow.svg) to open the target Flow.                                                                 |
| Select Node | A Node must be set as an Entrypoint before it can be selected. To set any Node as an Entrypoint, use the [Set Entrypoint](../../nodes/overview.md) setting. Select the target Node that executes whenever the Flow execution triggers the **Execute Flow** Node. |

??? info "Advanced"

    | Parameter      | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
    |----------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Parse Intents  | Toggle | Determines whether Cognigy should parse Intents within the child Flow. This is enabled by default.<br><br> If the setting is enabled, Cognigy NLU will reparse the Intents in the target Flow, using either [input.text](../../../test/interaction-panel/input.md#accessing-the-input-object) or the [Optionally Injected Text](go-to.md). <br><br> This setting will parse the input into the child Flow, and the NLU will then score this text using the available Intents in the child Flow. This will not score based on Intents in the parent Flow. |                                                                                                                                                                                                                                                                                                                                                     |
    | Parse Slots    | Toggle | Determines whether Cognigy should parse Slots within the child Flow. This is enabled by default.<br><br> If the setting is enabled, Cognigy NLU will reparse the Slots in the target Flow, using either [input.text](../../../test/interaction-panel/input.md#accessing-the-input-object) or the [Optionally Injected Text](go-to.md). <br><br> This setting will parse the input into the child Flow, and the NLU will then score this text using the available Slots in the child Flow. This will not score based on Slots in the parent Flow.         | ![                                                                                                                                                                                                                                                                                                                                                                                                                                                              ](../images/execute-flow.png)                                                                                           |
    | Absorb Context | Toggle | Determines whether the default Flow Context of the child Flow should be applied to the current Context. <br><br> If the child Flow has a value within its default Context, the value will be copied into the current Context as soon as you enter the child Flow.                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

    ### Input Object Restoration

    When you parse Intents and Slots in a child Flow, the Input Object behaves differently depending on the options you select. 

    If enable both **Parse Intents** and **Parse Slots**, most of the Input Object's properties are restored when you return to the parent Flow. However, the properties `inputId`, `execution`, and any custom properties added to the Input Object are not restored. For example:

    1. Parent Flow receives an Input Object with intent **A**.
    2. Child Flow parses the input and recognizes intent **B**.
    3. Upon returning to the parent Flow, the Input Object will be restored with intent **A** and any slot values passed from the child Flow.

    If disable both **Parse Intents** and **Parse Slots**, the Input Object will not be restored when you return to the parent Flow. For example:

    1. Parent Flow receives an Input Object with intent **A**.
    2. Child Flow parses the input but does not recognize any Intents or Slots.
    3. Upon returning to the parent Flow, the Input Object will not be restored and any changes made in the child Flow will not be propagated to the parent Flow.
