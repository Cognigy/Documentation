# Remove From Context

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/828a434-removeFromContext.JPG" width="100%" />
</figure>

## Description
<div class="divider"></div>

A **Remove from Context Node** is used to remove information from the Cognigy [Context]({{config.site_url}}ai/tools/interaction-panel/context/). 

| Parameter | Type | Description |
| ----------- | ----------- | ----------- |
| Key | Cognigy Text | The key you want to remove. This can be a key nested with dot (e.g. my.first.key) |
| Value | Cognigy Text | The value to remove from the array if Mode = Array is chosen |
| Mode | Select | - Simple removes the key completely<br>- Array removes the value from the array stored at context.key |

???+ info "Storing an Object"
    If you want to store an object in the context, use `.preserveType()` at the end in order to keep it an object. Example: `input.slots.city[0].preserveType()` would store the full slot object for the first found city entity in the context.