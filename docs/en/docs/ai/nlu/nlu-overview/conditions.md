---
 title: "Intent Conditions" 
 slug: "conditions" 
 hidden: false 
---
# Intent Conditions

Intent Conditions allow you to disable and enable Intents dynamically. The Intent Conditions thus represent a dynamic State defined by the state of [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) Intent Conditions. 


## Setting the Intent Condition on an Intent
Each Intent has a line of CognigyScript code which evaluates to `true` or `false`. The intent will only be found if the condition evaluates to `true`. If no Intent Condition is set the Intent is enabled.

The field is set on each Intent as [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) code.  As a best practice wrap the entire condition in an "exists" operator:

```js
!!(input.slots.city[0].keyphrase === "Düsseldorf")
```

or

```js
!!( !context.topics.includes("Cognigy"))
```


The CognigyScript Condition is evaluated at runtime before the Intent model is scored. 

It can take into account the given `input`, `profile` or `context` values to enable and disable Intents based on information contained in the input text or contact profile.

## States vs Conditions
Note [States]({{config.site_url}}ai/tools/interaction-panel/state/) use predefined list of Intents that are enabled/disabled based on the `input.state` variable which can of course also be set dynamically. This offer ease of use when you want to disable a large number of Intents at once.

## Example

To give an example, a Bank's virtual agent caters to Intents related to credit cards. If the customer does not have a credit card product, however, we would not like a `CancelCreditCard` Intent to be found.

We enable and disable the Intent based on the customer's `profile`. Let's assume it has a variable `has_credit_card` which stores information on whether the customer has the product or not, the Intent Condition would be:


```js
!!(profile.has_credit_card)
```

As a result, the `CancelCreditCard` intent will only be taken into account by the machine learning model and triggered for customers who actually have a credit card which could possibly need cancelling.