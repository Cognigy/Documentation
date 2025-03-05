---
 title: "Intent Conditions" 
 slug: "conditions" 
 hidden: false 
---
# Intent Conditions

_Intent Conditions_ allow you to disable and enable Intents dynamically. The Intent Conditions represent a dynamic [State](../../../test/interaction-panel/state.md) defined with [CognigyScript](../../../build/cognigyscript.md) or JavaScript.

## Setting the Intent Condition

You can set an Intent Condition with [CognigyScript](../../../build/cognigyscript.md) that evaluates to `true` or `false`. The AI Agent can detect the Intent only if the Intent Condition evaluates to `true`. If you don't set any Intent Condition, the AI Agent can always detect the Intent. As best practice, wrap the entire condition in an `exists` operator (`!!()`):

```js
!!(input.slots.city[0].keyphrase === "Düsseldorf")
```

or

```js
!!( !context.topics.includes("Cognigy"))
```

The CognigyScript Condition is evaluated at runtime, before the Intent model is scored. 

Cognigy.AI uses the `input`, `profile`, or `context` values to enable or disable Intents based on the information contained in the Input, Context, or Profile objects.

### Multiple Intent Conditions

For multiple Intent Conditions, set the Intent Conditions with JavaScript using the `&&` (`AND`) or `||` (`OR`) operators:

```js
input.slots.city[0].keyphrase === "Düsseldorf" && context.topics.includes("Cognigy")
```

or

```js
input.slots.city[0].keyphrase === "Düsseldorf" || context.topics.includes("Cognigy")
```

### Examples

#### Example 1

A bank's AI Agent caters to Intents related to credit cards. If the customer doesn't have a credit card, for example, you don't want the AI Agent to detect a `CancelCreditCard` Intent.

We enable and disable the Intent based on the Profile object or the Contact Profile. Assume the profile includes the `has_credit_card` variable that stores information on whether the customer has a credit card or not. Then, you can use the following Intent Condition:

```js
!!(profile.has_credit_card)
```

As a result, the AI Agent only detects the `CancelCreditCard` Intent for customers who have a credit card.

#### Example 2

Now, assume the Profile object or the Contact Profile also includes the `credit_card_activated` variable to store information if the credit card has been activated. If we want the AI Agent to not only evaluate if the customer has a credit card but also if they have activated it, you can use the following multiple Intent Conditions:

```js
profile.has_credit_card === true && profile.credit_card_activated === true
```

As a result, the AI Agent only detects the `CancelCreditCard` Intent for customers who have a credit card and have activated it.

## States versus Conditions

Note that [States](../../../test/interaction-panel/state.md) use a predefined list of Intents that are enabled or disabled based on the `input.state` variable, which can also be set dynamically. This approach makes it easier to disable a large number of Intents at once.
