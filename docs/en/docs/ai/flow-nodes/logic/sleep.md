---
 title: "Sleep" 
 slug: "sleep" 
 hidden: false 
---
# Sleep

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/sleep.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

A Sleep Node is used to pause the execution of a Flow for a certain time.

If your Flow returns multiple messages at once with much content (e.g. a query Flow), you can use a Sleep Node to set a pause between messages to simulate a more natural human-like response behavior.

!!! warning "Use with caution!"
    This Node will block the execution of Cognigy.AI and prevent execution of additional messages on the same Cognigy.AI message processing instance (of which there are multiple). This can lead to issues in high-load scenarios.