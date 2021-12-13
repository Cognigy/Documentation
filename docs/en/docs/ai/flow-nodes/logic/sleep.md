---
 title: "Sleep" 
 slug: "sleep" 
 hidden: false 
---
# Sleep

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/389c0c5-logic-sleep.jpg" width="100%" />
</figure>

## Description
<div class="divider"></div>

A Sleep Node is used to pause the execution of a Flow for a certain time.

???+ info "Pause between Messages"
    If your Flow returns multiple messages at once with much content (e.g. a query Flow), you can use a Sleep Node to set a pause between messages to simulate a more natural human-like response behavior.