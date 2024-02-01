---
title: "CognigyScript" 
slug: "cognigy-script" 
hidden: false 
---

# CognigyScript

_CognigyScript_ is a superset of JavaScript that grants access to the [Input](../../ai/tools/interaction-panel/input.md), [Context](../../ai/tools/interaction-panel/context.md), and [Profile](../../ai/tools/interaction-panel/profile.md) objects within text and JSON. With CognigyScript, you can execute powerful scripts and tasks, including building extended outputs to return to the client.

CognigyScript is enclosed within double curly braces (`{{"{{ }}"}}`) tags, for example, `{{"{{input.text}}"}}`. This syntax enables Cognigy to identify and execute the CognigyScript code embedded within the conversation flow.

CognigyScript gives you access to the Cognigy objects via exposed variables:

| Object          | Variable  | Shortcut | Example                             | Shortcut Example               |
|-----------------|-----------|----------|-------------------------------------|--------------------------------|
| Input           | `input`   | `ci`     | `{{ "{{input.text}}" }}`            | `{{ "{{ci.text}}" }}`          |
| Context         | `context` | `cc`     | `{{ "{{context.selectedHotel}}" }}` | `{{ "{{cc.selectedHotel}}" }}` |
| Contact Profile | `profile` | `cp`     | `{{ "{{profile.firstname}}" }}`     | `{{ "{{cp.firstname}}" }}`     |

## Node Arguments

Accessing the CognigyScript functionality differs between different types of arguments.

### For Text arguments

Within text arguments of a Cognigy Flow Node, CognigyScript is written using `{{"{{ }}"}}` tags. It evaluated as it is written. This is indicated by the label `CognigyScript` above the input field.

!!! note "Invalid expressions return an empty string"
    If the expression is invalid, an empty string is returned.

Example:
`{{"{{input.text.toUpperCase()}}"}}` would return the text the client sent all in upper case.

**Type Preservation**
CognigyScript in Node Arguments is always returned as string, unless you force the type to be preserved. You can do this by appending `.preserveType()` to your script.

Example:
`{{"{{context.anObject.preserveType()}}"}}` will return whatever `anObject` is, for example a JavaScript Object.

### For JSON arguments

Within JSON arguments, a special notation `{ "$cs": { "script": "x", "type": "t"}}" }}` can be used to run CognigyScript. You may supply a script and a return type. The special notation allows you to define a type. It will then try to convert the value to this type, for example, String "6" to a number, or an Object to a String.

**Example with Typing**
```JavaScript
{
    "customer_orders": {
        "$cs": {
            "script": "context.orders",
            "type": "object"
        }
    }
}
```

**Example with Inline CognigyScript**
```JavaScript
{
    "customer_orders": "{{ "{{context.orders}}" }}"
}
```
This would try to retrieve the orders Object from the Context and assign it to customer_orders. If `context.orders` doesn't exist, the "customer_orders" key is simply skipped.

## IF Conditions and SWITCH Operands

Within conditions, CognigyScript is also written without using `{{"{{ }}"}}` tags. Cognigy Script is evaluated just like standard JavaScript would. That is indicated by the label `CognigyScript (direct)` above the input field.

!!! note "Example"
    The condition `context.orders === 3` would evaluate to `true` if the `orders` variable stored in the `context` is equal to `3`.

## Code Nodes

Within Code Nodes you don't need to write CognigyScript in {{ " {{ }}" }} tags. The `input`, `context`, `profile` and `actions` variables are exposed by default, as well as `_` and `moment`.

**Example**
```JavaScript
const ordercount = context.orders;
switch(ordercount) {
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

## Cognigy Objects Life Span

The picture below shows the life span of the different Cognigy objects:

1. The Input object **input** is created anew on each new user input and each new Flow execution.
2. The Context object **context** is stored for the duration of the entire conversation.
3. The Profile object **profile** is stored permanently. That means that information about the user that you want to persist, for example the name of the user, should be stored in the Profile object.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/a570379-data.png" width="100%" />
  <figcaption>Life Span of Cognigy Objects</figcaption>
</figure>

