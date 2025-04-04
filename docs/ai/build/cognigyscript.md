---
title: "Overview" 
slug: "cognigyscript"
description: "CognigyScript is a JavaScript superset that enables dynamic content in Cognigy.AI conversations by accessing Input, Context, and Profile objects. Learn syntax, usage, and key features."
hidden: false 
tags:
  - Cognigy.AI
  - CognigyScript
  - Dynamic Content
  - Cognigy.AI Objects
---

# CognigyScript

_CognigyScript_ is a superset of JavaScript that provides access to the [Input](../test/interaction-panel/input.md), [Context](../test/interaction-panel/context.md), and [Profile](../test/interaction-panel/profile.md) objects. With CognigyScript expressions, you can retrieve values from JSON properties, and use these values in AI Agent conversations.

In most cases, you wrap CognigyScript expressions in double curly braces and quotation marks `{{"{{ }}"}}`, for example, `{{"{{input.text}}"}}`. This syntax enables Cognigy.AI to identify and execute the CognigyScript code embedded in the Flow. However, CognigyScript evaluates conditions as standard JavaScript. You don't need to wrap the CognigyScript expression in `{{"{{ }}"}}`. For example, `context.orders === 3` evaluates to true if the `orders` variable in the Context is equal to `3`.

You can use CognigyScript to:

- Add dynamic and executable content to chat and voice conversations.
- Retrieve information from [Cognigy.AI objects](#cognigy-objects) and reuse it in chat and voice conversations.
- Run scripts to manipulate data dynamically.
- Use CognigyScript in JSON arguments to make requests to an external system via the HTTP Request Node.

### Cognigy.AI Objects

The following table shows how to access values from the Input, Context, and Profile objects in CognigyScript:

|                  | Input                  | Context                           | Profile                       |
|------------------|------------------------|-----------------------------------|-------------------------------|
| Variable         | `input`                | `context`                         | `profile`                     |
| Shortcut         | `ci`                   | `cc`                              | `cp`                          |
| Example          | `{{"{{input.text}}"}}` | `{{"{{context.selectedHotel}}"}}` | `{{"{{profile.firstname}}"}}` |
| Shortcut Example | `{{"{{ci.text}}"}}`    | `{{"{{cc.selectedHotel}}"}}`      | `{{"{{cp.firstname}}"}}`      |

#### Life Span of Cognigy.AI Objects

The life span of Cognigy.AI objects varies depending on their type:

- **Input** — each new user input and Flow execution recreates the object
- **Context** — kept throughout the entire conversation
- **Profile** — stored persistently to preserve information, such as user names, throughout conversations

The following image shows a comparison of the life spans of Cognigy.AI objects:

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/life-span.png" width="70%" />
</figure> 

## Working with CognigyScript

You can use CognigyScript in:

- Text fields
- JSON editors
- Code Nodes

The type of field in which you use CognigyScript determines the CognigyScript syntax.

You can also store CognigyScript in [Tokens](tokens.md).

### Text Fields

For text fields, wrap the CognigyScript expression in `{{"{{ }}"}}`.

!!! note "Invalid CognigyScript"
        If the CognigyScript expression is invalid, CognigyScript returns an empty string.

??? info "Example"
    `{{"{{input.text.toUpperCase()}}"}}` returns the text the client sent in uppercase format.

### JSON Editors

The CognigyScript syntax in JSON editors depends on where you place the CognigyScript expression.

#### Inline CognigyScript

For inline CognigyScript in a JSON object, use `{{"{{ }}"}}`.

??? info "Example"
    ```json
    {
        "customer_orders": "{{"{{context.orders}}"}}"
    }
    ```

    The code attempts to fetch the `orders` variable from the Context object and to assign it to `customer_orders`. If `context.orders` doesn't exist, the code skips `customer_orders`.

#### Inside JSON Arguments

To run CognigyScript within a JSON argument, use `{ "$cs": { "script": "x", "type": "t"}}`, where `x` is the script and `t` is the return type (optional). For instance, you can convert a string such as `"6"` into a number or an object into a string.

??? info "Example"

    ```json
    {
        "customer_orders": {
            "$cs": {
                "script": "context.orders",
                "type": "object"
            }
        }
    }
    ```

    The code attempts to fetch the `orders` variable from the Context object and to assign it to `customer_orders` as an object. If `context.orders` doesn't exist, the code skips `customer_orders`.

### Code Nodes

In a Code Node, you don't need to wrap the CognigyScript expression in `{{"{{ }}"}}`. You can use CognigyScript as standard JavaScript. The `input`, `context`, `profile`, and `actions` variables are exposed by default, as well as `_` and `moment`.

??? info "Example"

    ```JavaScript
    const ordercount = context.orders;
    switch (ordercount) {
        case 0:
            input.ordertext = "You ordered no items";
            actions.output('Hello', {'action': 1}); // outputs the text 'hello' with data {'action': 1}
            break;
        case 1:
            input.ordertext = "You ordered one item";
            break;
        default:
            input.ordertext = "You ordered many items";
    }
    ```

## Additional Examples

??? info " Examples of CognigyScript Expressions"

    The following table shows additional examples of CognigyScript expressions:

    | Example                                                                   | Description                                                                                                               |
    |---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
    | `{{"{{input.slots.SLOT_NAME[0].keyphrase}}"}}`                            | Extracts the first Keyphrase found for the Slot with the name `SLOT_NAME`.                                                |
    | `{{"{{JSON.stringify(input.data)}}"}}`                                    | Displays a JSON object as text. You can use this CognigyScript expression for debugging purposes.                         |
    | `{{"{{input.slots.DATE[0].start.plain}}"}}`                               | Returns the date information if the user sent a date. Example: July 23, 2021                                              |
    | `{{"{{moment(input.slots.DATE[0].start.ISODate).format('MMM Do YY')}}"}}` | Formats a given date that the user provided in the last message.                                                          |
    | `{{"{{input.currentTime.hour}}"}}`                                        | Gets the hour of the current incoming message. You can use this CognigyScript expression to greet the user appropriately. |

## More Information

- [Input](../test/interaction-panel/input.md)
- [Context](../test/interaction-panel/context.md)
- [Profile](../test/interaction-panel/profile.md)
