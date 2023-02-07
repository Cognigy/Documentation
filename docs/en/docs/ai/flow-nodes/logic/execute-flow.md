---
 title: "Execute Flow" 
 slug: "execute-flow" 
 hidden: false 
---
# Execute Flow

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/879b1b0-execute.jpg" width="100%" />
</figure>

## Description
<div class="divider"></div>

An Execute Flow Node is used to immediately execute another Flow.

After the target Flow finished executing, the current Flow will continue executing.

???+ info "Shared Context"
    The executed flow will receive the current Context of the executing Flow and can write to it. The changes will be available to the executing Flow after the executed Flow has finished.

## Node Fields
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/da402e1-execute-settings1.jpg" width="100%" />
</figure>

### Select Flow
Here you can select the target Flow which is executed whenever the Flow execution hits the **Execute Flow** node.

### Select Node
Here you can select the target Node which is executed whenever the Flow execution hits the **Execute Flow** node.

???+ info "Open Target Flow"
    By clicking on the icon to the right of the Flow drop-down you can open the target Flow. Make sure to save your Node first!

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/dbfd393-execute-settings.jpg" width="100%" />
</figure>

#### Parse Intents

The user decides whether we should **parse intents** within the sub Flow. This is enabled by default.

If `Parse Intents` is enabled, Cognigy NLU will reparse the Intents in the target Flow in the target Flow, using either [input.text](../../tools/interaction-panel/input.md#accessing-the-input-object) or the [Optionally Injected Text](#optionally-injected-text).

This setting will parse the input into the sub Flow, and the NLU will then score this text using the available Intents in the sub Flow. This will not score based on Intents in the parent Flow.

#### Parse Slots

This toggle decides whether we should **parse slots** within the sub Flow. This is enabled by default.

If `Parse Slots` is enabled, Cognigy NLU will reparse the Slots in the target Flow, in the target Flow, using either [input.text](../../tools/interaction-panel/input.md#accessing-the-input-object) or the [Optionally Injected Text](#optionally-injected-text)

This setting will parse the input into the sub Flow, and the NLU will then score this text using the available Slots in the sub Flow. This will not score based on Slots in the parent Flow.

#### Absorb Context

This toggle decides whether the **default Flow Context** of the **sub Flow** should be applied to the current Context. If the sub Flow has a value within its **default Context**, the value will be copied into the current Context as soon as you enter the child Flow.

???+ warning "Loops" 
    Cognigy.AI checks how often an Execute Flow Node was hit without a user input inbetween. The default setting for maximum loops is 4, but it is configurable for on-premise installations.
