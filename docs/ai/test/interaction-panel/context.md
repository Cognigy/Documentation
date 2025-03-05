---
 title: "Context" 
 slug: "context" 
 hidden: false 
---
# Context

The Context is a JSON object which stores persistent information.

Every contact that connects to Cognigy.AI has their own Context which lives throughout the lifetime of the session. When a contact disconnects from Cognigy.AI, the Context is persisted in the database and retrieved upon reconnection.

The Flow can read from and write to the Context by saving user messages, slots, intents or any other data available throughout the session. For more information about the lifespan of the context, see the [CognigyScript](../../build/cognigyscript.md) page.

## Accessing the Context object



Flow nodes can dynamically access Context properties via [Tokens](../../build/tokens.md) or [CognigyScript](../../build/cognigyscript.md) e.g. `{{ " {{context.property}}" }}`. The Cognigy Script used to access the context object follows the dot-notation `property.child.child`.

!!! note "Copy JSON path from the Context Object"
    You can copy the exact JSON path you need to reference a certain value in the Context object by right-clicking it and selecting "Copy JSON Path" from the context menu. 

**Example**

```JavaScript
{
    "user": {
        "name": "Luke Skywalker"
    }
}
```

* `{{ " {{context.user.name}}" }}` would return `Luke Skywalker`
* `{{ " {{context.user.age}}" }}` would return ` ` (empty string) or - if used in a condition - `false`


!!! tip "Edit, Save or Reset your current Context"
    You can Save, Cancel or Reset the Context Object by clicking the Save, Cancel or Reset buttons in the bottom option pane of the Interaction Panel. Context manipulations will only manipulate the value(s) in your current session.


The default context is the initial state of the context when the session starts. This can be customized to initiate variables that will be accessed and changed throughout the conversation. The default context is configured in the [Flow Editor](../../build/flows/overview.md) under the **Settings** tab.

## More Information

- [Profile](profile.md)