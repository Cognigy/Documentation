---
title: "Context" 
slug: "context"
description: "The Context Object is a JSON object that persists throughout the entire chat or call session."
hidden: false 
tags:
   - context object
   - session persistence
   - session data
   - default context
   - flow control
   - context
   - context properties
---

# Context

The _Context Object_ is a JSON object that persists throughout the entire chat or call session. If a user disconnects from Cognigy.AI, the Context object can be retrieved upon reconnection with the same session ID. By default, the Context object is empty. You need to set a [Default Context](#default-context) or [configure](#storing-information-in-the-context-object) what data is stored in this object.

[Nodes](../../build/nodes/overview.md) can access the Context object and store information in it, for example, user messages, [Slots](../../empower/nlu/slots/overview.md), [Intents](../../empower/nlu/intents/overview.md), or any other data available throughout the session.

## Limitations

- You can store up to 1.5 MB in the Context object. For dedicated SaaS and on-premises installations, you can configure the limit using the `MAX_MEMORY_OBJECT_SIZE` variable in the `values.yaml` file. Increasing the object size could lead to performance issues.

## Working with the Context Object

=== "GUI"

    **Interaction Panel**
    
    You can view the Context object by navigating to **Info > Context** in the [Interaction Panel](../../../ai/test/interaction-panel/overview.md). In the **Context** tab, you can save, cancel, or reset the Context object by clicking the respective buttons at the bottom of the Interaction Panel. The changes to the values in the Context object apply only to the current session.

    You can copy the exact JSON path of a Context object value by right-clicking it and selecting **Copy JSON Path**.

    **Flow Editor**

    In the Flow editor, you can set a [Default Context](#default-context) in the **Settings** tab.

=== "API"

    You can inject data into and reset the Context object of a session with the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#tag--Session-v2.0).

### Default Context

The _Default Context_ is the Flow's Context object when the user triggers the Flow execution for the first time. By default, the Default Context is empty, and you can customize it in the **Settings** tab of the Flow editor.

A session inherits the Default Context from the Flow in which this session starts. If the user switches to another Flow during the session, the Context object remains the same. However, you can apply the Default Context of the target Flow with the [Go To Node](../../build/node-reference/logic/go-to.md). To do so, activate the Absorb Context parameter in the Go To Node settings that switches to the target Flow.

### Storing Information in the Context Object

Nodes, such as the [Add To Context](../../build/node-reference/logic/add-to-context.md), [AI Agent](../../build/node-reference/ai/ai-agent.md), [Question](../../build/node-reference/other-nodes/search-extract-output.md), and others, include different parameters to store information in the Context object.

### Accessing the Context object

Use Nodes to dynamically access Context properties with [CognigyScript](../../build/cognigyscript.md), for example, `{{ " {{context.property}}" }}`, or [Tokens](../../build/tokens.md). The CognigyScript expression used to access the Context object follows the dot notation `property.child.child`.

#### Example

Consider the following Context object:

??? info "Context Object Example"
    ```json
    {
        "order": {
            "id": "ORD-2023-1234",
            "items": [
                {
                    "name": "Margherita Pizza",
                    "category": "food",
                    "size": "large",
                    "quantity": 1,
                    "price": 15.99
                },
                {
                    "name": "Caesar Salad",
                    "category": "food", 
                    "size": "regular",
                    "quantity": 1,
                    "price": 8.99
                },
                {
                    "name": "Coca Cola",
                    "category": "drink",
                    "size": "medium",
                    "quantity": 2,
                    "price": 2.99
                }
            ],
            "subtotal": 30.96,
            "tax": 2.48,
            "deliveryFee": 5.00,
            "total": 38.44,
            "deliveryAddress": "123 Main St, Apt 4B",
            "orderTime": "2023-10-25T19:30:00Z",
            "status": "preparing"
        }
    }
    ```

- `{{ " {{context.order.items[0].price}}" }}` returns the price of the first item in the order.
- `{{ " {{context.order.items[1].name}}" }}` returns the name of the second item in the order.
- `{{ " {{context.order.items[2].quantity}}" }}` returns the quantity of the third item in the order.

## More Information

- [Profile](profile.md)
