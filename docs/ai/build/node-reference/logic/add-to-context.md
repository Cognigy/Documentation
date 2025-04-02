---
 title: "Add To Context" 
 slug: "add-to-context" 
 hidden: false 
---
# Add To Context

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/add-to-context.png" width="50%" />
</figure>

## Description

This Node stores information in the [Context](../../../test/interaction-panel/context.md) object, so that it can be used throughout the session on subsequent user inputs. 

## Parameters

| Parameter | Type          | Description                                                                                                                                                           |
|-----------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Key       | CognigyScript | The key where to store in the context. This can be a key nested with dot, for example `my.first.key`. Note that dashes or hyphens cannot be added to the key's value. |
| Value     | CognigyScript | The value to store in the context.                                                                                                                                    |
| Mode      | Select        | <ul><li>**Simple** — stores the value directly against the Key.</li><li>**Array** — stores the value into an Array on the key.</li></ul>                              |

!!! note "Storing an Object"
    If you want to store an object in the context, use `.preserveType()` at the end in order to keep it an object. Example: `input.slots.city[0].preserveType()` would store the full slot object for the first found city entity in the context.

!!! note "Adding a Value to an Array Only Contains Unique Values"
    When adding a value to an array by using the addToContext Node, the value is not added if it already exists in the array. If you need to add a value to an array, no matter if the value already exists in the array, then you can use the `.push()` function in a Code Node.