---
 title: "Sleep" 
 slug: "sleep" 
 hidden: false 
---
# Sleep

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/sleep.png" width="50%" />
</figure>

## Description

A Sleep Node pauses the execution of a Flow for a certain time.

If your Flow returns multiple messages at once with a lot of content, you can use a Sleep Node to set a pause between messages, simulating a more natural, humanlike response behavior.

!!! warning
    This Node blocks the execution of Cognigy.AI and prevents the execution of additional messages on the same Cognigy.AI message processing instance (of which there are multiple). This can lead to issues in high-load scenarios.