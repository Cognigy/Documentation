---
title: "Remove From Context" 
slug: "remove-from-context" 
hidden: false 
---
# Remove From Context

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/remove-from-context.png" width="80%"/>
</figure>

## Description
<div class="divider"></div>

This Node is used to remove information from the Cognigy [Context](../../tools/interaction-panel/context.md). 

| Parameter | Type         | Description                                                                                              |
|-----------|--------------|----------------------------------------------------------------------------------------------------------|
| Key       | Cognigy Text | The key you want to remove. This can be a key nested with dot, for example, `my.first.key`.              |
| Value     | Cognigy Text | The value to remove from the array if `Mode = Array` is chosen.                                          |
| Mode      | Select       | - Simple removes the key completely<br>- Array removes the value from the array stored at `context.key`. |