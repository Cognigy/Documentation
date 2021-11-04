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

This toggle decides whether we should **parse intents** within the sub Flow.

#### Parse Keyphrases

This toggle decides whether we should **find keyphrases** within the sub Flow.

#### Absorb Context

This toggle decides whether the **default Flow Context** of the **sub Flow** should be applied to the current Context. If the sub Flow has a value within its **default Context**, the value will be copied into the current Context as soon as you enter the child Flow.

???+ warning "Loops" 
    Cognigy.AI checks how often an Execute Flow Node was hit without a user input inbetween. The default setting for maximum loops is 4, but it is configurable for on-premise installations.
