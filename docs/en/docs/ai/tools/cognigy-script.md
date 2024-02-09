---
title: "CognigyScript" 
slug: "cognigy-script" 
hidden: false 
---

# CognigyScript

_CognigyScript_ is a superset of JavaScript that provides access to the [Input](../../ai/tools/interaction-panel/input.md), [Context](../../ai/tools/interaction-panel/context.md), and [Profile](../../ai/tools/interaction-panel/profile.md) objects within a text and JSON. 

With CognigyScript, you can add dynamic and executable content to chat or voice conversations.

In the Cognigy.AI interface, fields that accept Cognigy.Script are marked with the ![token](../../assets/icons/token.svg) icon.

In most cases, CognigyScript is enclosed within double curly braces `{{"{{ }}"}}` tags,
for example, `{{"{{input.text}}"}}`. This syntax enables Cognigy to identify and execute the CognigyScript code embedded within the Flow.

CognigyScript gives you access to the Cognigy objects via the following variables:

| Object          | Variable  | Shortcut | Example                             | Shortcut Example               |
|-----------------|-----------|----------|-------------------------------------|--------------------------------|
| Input           | `input`   | `ci`     | `{{ "{{input.text}}" }}`            | `{{ "{{ci.text}}" }}`          |
| Context         | `context` | `cc`     | `{{ "{{context.selectedHotel}}" }}` | `{{ "{{cc.selectedHotel}}" }}` |
| Contact Profile | `profile` | `cp`     | `{{ "{{profile.firstname}}" }}`     | `{{ "{{cp.firstname}}" }}`     |

## Node Arguments

Accessing the CognigyScript functionality via Nodes varies depending on the types of arguments involved.

### Text arguments

The double curly braces `{{"{{ }}"}}` denote the usage of CognigyScript within text arguments.

If the expression is invalid, an empty string is returned.

Example:

Using `{{"{{input.text.toUpperCase()}}"}}` will return the text sent by the client in uppercase format.

### JSON arguments

#### Inline CognigyScript

The double curly braces `{{"{{ }}"}}` denote the usage of CognigyScript within the JSON object.

In this example, the code attempts to fetch the `orders` object from the Context and assign it to `customer_orders`. If `context.orders` doesn't exist, the `customer_orders` key is skipped.

**Example**

```JavaScript
{
    "customer_orders": "{{ "{{context.orders}}" }}"
}
```

#### Dynamic Data Manipulation

Within JSON arguments, a special notation `{ "$cs": { "script": "x", "type": "t"}}"}}` is used to run CognigyScript.
You can provide both a script and the desired return type.
For instance, you can convert a string such as `6` into a number or an object into a string.

Using CognigyScript is helpful when you want to make requests to an external system via the HTTP Request Node, passing data from the Context with specific data types.

**Example**

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

## IF Conditions and SWITCH Operands

There is no need to use `{{"{{ }}"}}` tags within conditions. Cognigy Script is evaluated as standard JavaScript. 

**Example**

The condition `context.orders === 3` evaluates to true if the `orders` variable, stored in the context, is equal to `3`.

## Code Nodes

There is no need to use `{{"{{ }}"}}` tags within a Code Node. Cognigy Script is evaluated as standard JavaScript. The `input`, `context`, `profile` and `actions` variables are exposed by default, as well as `_` and `moment`.

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

## Life Span of Cognigy Objects

| Object          | Life Span                                                                                  |
|-----------------|--------------------------------------------------------------------------------------------|
| Input           | Recreated with each new user input and the execution of a new Flow.                        |
| Context         | Maintained throughout the entire conversation.                                             |
| Contact Profile | Stored persistently to preserve information, such as user names, throughout conversations. |

The picture below shows the life span of the different Cognigy objects:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/life-span.png" width="100%" />
</figure>

## More Information

- [Cheat Sheet: CognigyScript](https://support.cognigy.com/hc/en-us/articles/4403321637394-Cheat-Sheet-CognigyScript#general-0-0)
- [Input](../../ai/tools/interaction-panel/input.md)
- [Context](../../ai/tools/interaction-panel/context.md)
- [Profile](../../ai/tools/interaction-panel/profile.md)