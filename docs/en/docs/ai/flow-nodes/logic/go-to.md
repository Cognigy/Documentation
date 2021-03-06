---
 title: "Go To" 
 slug: "go-to" 
 hidden: false 
---
# Go To
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9d3ce24-goto-show-flow.jpg" width="100%" />
</figure>

## Description
<div class="divider"></div>

A **Go To Node** is used to switch the conversation over to another **Node** or **Flow** which will be executed immediately when this node is activated.

???+ info "Using Go to and Execute together"
    A Go to node will overwrite any existing execute node flow. This means that if a flow containing a Go To node is Executed, the Go To node will stop the original execution and "stick" to it's destination node's flow.

## Advanced

### Execution Mode
The Execution Mode determines the behavior of the Go To Node. It can go to the target Node and continue or it can wait for input.

### Optionally Injected Text
If the Execution Mode is set to "Go to Node and continue", you can overwrite the text with which to continue here. If no text is specified, input.text will be used.

### Optionally Injected Data
If the Execution Mode is set to "Go to Node and continue", you can overwrite the data with which to continue here. If no data is specified, input.data will be used.

### Parse Intents
If the `Parse Intents` feature is enabled, Cognigy NLU will reparse the Intents in the target Flow with the provided input (either input.text or the Optionally Injected Text).

### Parse Slots
If the `Parse Slots` feature is enabled, Cognigy NLU will reparse the Slots in the target Flow with the provided input (either input.text or the Optionally Injected Text).

### Absorb Context
If the `Absorb Context` feature is enabled, the default Context of the target Flow will be applied to the current Context upon switching.

???+ warning "Loops"
    Cognigy.AI checks how often a Go To Node was activated without a user input in-between. The default setting for maximum loops is 4, but it is configurable for on-premise installations.


???+ info "Open Target Flow"
    By clicking on the Flow Name in the Node Preview, you can directly jump to the target Flow.
