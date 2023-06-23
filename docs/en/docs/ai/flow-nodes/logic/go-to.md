---
 title: "Go To" 
 slug: "go-to" 
 hidden: false 
---
# Go To
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9d3ce24-goto-show-flow.jpg" width="80%" />
</figure>

## Description
<div class="divider"></div>

A **Go To Node** is used to switch the conversation over to another **Node** or **Flow** which will be executed immediately when this node is activated.

## Settings

### Select Flow

Select the target Flow that is switched to whenever the Flow execution triggers the **Go To** Node.

### Select Node

Select the target Node that is switched to whenever the Flow execution triggers the **Go To** Node.

A Node must be set as an Entrypoint before it can be selected. To set any Node as an Entrypoint, use the [Set Entrypoint](../node-usage.md#set-entrypoint) setting.

!!! note "Using Go To and Execute together"
    A Go To Node will overwrite the execution of an Execute Flow Node. If a Flow containing a Go To Node is executed, after an Execute Flow Node, the Go To Node will stop the original execution and the session will stay In the Go To Node's destination Flow. This will prevent the Execute Flow Node's normal behavior, of returning to the Flow it is located in.

## Advanced

### Execution Mode

The Execution Mode determines the behavior of the Go To Node. It can go to the target Node and continue, or it can wait for input.

### Optionally Injected Text

If the Execution Mode is set to **Go to Node and continue**, you can overwrite the text with which to continue here. If no text is specified, input.text will be used.

### Optionally Injected Data

If the Execution Mode is set to **Go to Node and continue**, you can overwrite the data with which to continue here. If no data is specified, input.data will be used.

### Parse Intents

The user decides whether we should  **parse intents** within the sub Flow. This is disabled by default.

If the **Parse Intents** setting is enabled, Cognigy NLU will reparse the Intents in the target Flow, using either [input.text](../../tools/interaction-panel/input.md#accessing-the-input-object) or the [Optionally Injected Text](#optionally-injected-text)

This setting will parse the input into the sub Flow, and the NLU will then score this text using the available Intents in the sub Flow. This will not score based on Intents in the parent Flow.

### Parse Slots

The user decides whether we should **parse slots** within the sub Flow. This is disabled by default.

If the **Parse Slots** setting is enabled, Cognigy NLU will reparse the Slots in the target Flow, in the target Flow, using either [input.text](../../tools/interaction-panel/input.md#accessing-the-input-object) or the [Optionally Injected Text](#optionally-injected-text)

This setting will parse the input into the sub Flow, and the NLU will then score this text using the available Slots in the sub Flow. This will not score based on Slots in the parent Flow.

### Absorb Context
If the **Absorb Context** setting is enabled, the default Context of the target Flow will be applied to the current Context upon switching.

!!! warning "Loops"
    Cognigy.AI checks how often a Go To Node was activated without a user input in-between. The default setting for maximum loops is 4, but it is configurable for on-premise installations.


!!! note "Open Target Flow"
    By clicking on the Flow Name in the Node Preview, you can directly jump to the target Flow.
