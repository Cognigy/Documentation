---
 title: "Add To Context" 
 slug: "add-to-context" 
 hidden: false 
---
# Add To Context

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/add-to-context.png" width="100%" />
</figure>

## Description
<div class="divider"></div>

An **Add to Context Node** is used to store information in the Cognigy [Context]({{config.site_url}}ai/tools/interaction-panel/context/), so that it can be used throughout the session on subsequent user inputs. 

| Parameter | Type         | Description                                                                                             |
|-----------|--------------|---------------------------------------------------------------------------------------------------------|
| Key       | Cognigy Text | The key where to store in the context. This can be a key nested with dot (e.g. my.first.key)            |
| Value     | Cognigy Text | The value to store in the context.                                                                      |
| Mode      | Select       | - Simple stores the value directly against the Key<br>- Array stores the value into an Array on the key |

!!! note "Storing an Object"
    If you want to store an object in the context, use `.preserveType()` at the end in order to keep it an object. Example: `input.slots.city[0].preserveType()` would store the full slot object for the first found city entity in the context.

!!! note "Adding a value to an Array only contains unique values"
    When adding a value to an array by using the addToContext Node, the value will not be added if the value already exists in the Array. If you need to add a value to an Array, no matter if the value already exists in the Array, then you can use the `.push()` function in a Code Node.