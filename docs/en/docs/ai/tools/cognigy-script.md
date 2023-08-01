---
 title: "CognigyScript" 
 slug: "cognigy-script" 
 hidden: false 
---
# CognigyScript

CognigyScript is a superset of JavaScript which gives you access to the [Input]({{config.site_url}}ai/tools/interaction-panel/input/) and [Context]({{config.site_url}}ai/tools/interaction-panel/context/) objects within text and JSON.

Using CognigyScript, you can execute powerful scripts to create the replies you want to return to the client.

Within text, you write CognigyScript within `{{"{{ }}"}}` tags. Example: `{{"{{input.text}}"}}`

CognigyScript is essentially JavaScript, but gives you access to the Cognigy objects via exposed variables:

| Variable | Description                | Example                            |
|----------|----------------------------|------------------------------------|
| input    | 	The Input Object          | {{ " {{input.text}}" }}            |
| context  | The Context Object         | {{ " {{context.selectedHotel}}" }} |
| profile  | The Contact Profile Object | {{ " {{profile.firstname}}" }}     |

## Node Arguments

<div class="divider"></div>

Accessing the CognigyScript functionality differs between different types of arguments.

## For Text arguments

Within text arguments of a Cognigy Flow Node, CognigyScript is written using `{{"{{ }}"}}` tags. It evaluated as it is written. This is indicated by the label `CognigyScript` above the input field.

!!! note "Invalid expressions return an empty string"
    If the expression is invalid, an empty string is returned.

*Example*
`{{"{{input.text.toUpperCase()}}"}}` would return the text the client sent all in upper case.

**Type Preservation**
CognigyScript in Node Arguments is always returned as string, unless you force the type to be preserved. You can do this by appending `.preserveType()` to your script.

*Example*
`{{"{{context.anObject.preserveType()}}"}}` will return whatever `anObject` is, so for example a JavaScript Object.

## For JSON arguments

Within JSON arguments, a special notation `{ "$cs": { "script": "x", "type": "t"}}" }}` can to be used to run CognigyScript. You may supply a script and a return type. The special notation allows you to define a type. It will then try to convert the value to this type, for example, String "6" to a number, or an Object to a String.

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

Within conditions, CognigyScript is also written without `{{"{{ }}"}}` tags. It is evaluated just like standard JavaScript would. This is indicated by the label `CognigyScript (direct)` above the input field.

!!! note "Example"
   The condition `context.orders === 3`  would evaluate to `true` if the `orders` variable stored in the `context` is equal to `3`.

## Code Nodes


Within Code Nodes you don't need to use the {{ " {{ }}" }} tags. The `input`, `context`, `profile` and `actions` variables are exposed by default, as are `_` and `moment`.

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

<div class="divider"></div>

The picture below shows the life span of the different Cognigy objects. The Input object (input) is created anew on each new user input (each new Flow Execution), the Context object (context) is stored for the duration of the entire conversation, and the Profile object (profile) is stored forever. This means that information about the user that you want to persist (e.g. the name of the user), should be stored in the Profile object.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/a570379-data.PNG" width="100%" />
  <figcaption>Life Span of Cognigy Objects</figcaption>
</figure>

