---
title: "Intent Rules" 
slug: "intent rules" 
description: "Cognigy.AI Intent Rules are conditions you define to help your AI Agents recognize user inputs and trigger a specific Intent based on precise criteria. These rules provide more control and flexibility than Intents, which work by recognizing patterns in example sentences."
hidden: false
tags:
  - Cognigy NLU
  - intent rules
  - intents
---

# Intent Rules

_Intent Rules_ are conditions you define to help your AI Agents recognize user inputs and trigger a specific Intent based on precise criteria. 
These rules provide more control and flexibility than standard Intents, which work by recognizing patterns in example sentences.

## Key Benefits

- **Precision**. Intent rules are especially valuable when dealing with technical payloads (structured data) or specific conditions that Intents don't easily handle.
- **Context-Sensitive Triggers**. You can enforce certain conditions, such as checking the user's login status or ensuring required data is present before triggering the Intent.
- **Simple Conditions**. They work well when you have clear, straightforward conditions for triggering the Intent. For example, specific keywords or patterns in the text.

## Restrictions

- Intent rules always have a score of `1` when they match, thresholds don't apply.
- Intent rules take priority by forcing an Intent match when their conditions are met, ignoring both Intent Sentences and Intent conditions. In contrast, Intent conditions determine whether Intent Sentences should be used.

## How to use

To set a rule for a specific Intent, navigate to **NLU > Intents** in the Flow editor.
Open the desired Intent, then go to **Rules** to configure the rule.

You can add multiple rules to an Intent.
You write these rules using CognigyScript, which allows you to define the conditions that must be met to trigger the Intent.
These conditions usually rely on input, context, or other dynamic data.

### Syntax

??? info "Basic Text Matching"
    This rule triggers the Intent if the user input contains the word `pizza`.

    ```js
    ci.text.includes("pizza")
    ```

??? info "Comparing Input Text"
    The rule matches if the user exactly says `I want to order a pizza`.
    This rule only matches this exact phrase, and minor variations (like punctuation changes) would prevent the Intent from being triggered, making it less robust than an ML-based approach.

    ```js
    ci.text == "I want to order a pizza"
    ```

??? info "Using Context Data"
    The rule checks if the user has selected `pizza` as the only item in their `food` Slot.

    ```js    
    input.slots.food[0].keyphrase == "pizza" && input.slots.food.length == 1
    ```
??? info "Combining Multiple Conditions"
    The rule triggers the Intent if the user mentions `order` and has selected one item in their `food` Slot.

    ```js
    ci.text.includes("order") && input.slots.food.length === 1
    ```

??? info "Using Regular Expressions"
    This rule uses a regular expression to match the phrase `order` followed by any characters and then `pizza`.

    ```js
    ci.text.match(/order\s.*\spizza/)
    ```

??? info "Dynamic Input Matching"
    This rule checks if the user input matches a dynamic sentence structure based on the user's first name, such as `John wants pizza`.

    ```js
    ci.text === `${input.slots.first_name[0].keyphrase} wants pizza`
    ```

### Rules and Intent Sentences: Prioritization

Intent rules always have higher priority than Intent sentences. 
This means that if a user input triggers both a rule and an Intent sentence, the rule will be triggered first.

### Resolving Conflicts Between Multiple Rules

If multiple rules apply simultaneously, the order of rules in the Flow hierarchy determines which one is triggered. 

There are three main principles:

```text
Main Flow
├── Intent A
│   └── Intent A.1
│       └── Intent A.2
└── Intent B

Attached Flow 1
└── Intent C
    └── Intent C.1
        └── Intent C.2

Attached Flow 2
└── Intent D
```

| Principle                                 | Description                                                                                                                             | Example                                                                                                                                                                          |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Intent rules lower in the list come first | If multiple Intent rules match, the one that appears last in the list is triggered.                                                     | If `Intent A.2` and `Intent B` match the same input, `Intent B` will be triggered because it is lower in the list.                                                               |
| Children come first                       | If both parent and child Intents match, the child Intent takes precedence.                                                              | If `Intent A.1` and `Intent A.2` match the same input, `Intent A.2` will be triggered.                                                                                           |
| Attached Flows come third                 | Intents in attached Flows are processed after those in the main Flow. The order of attached Flows determines which Intent is triggered. | If `Intent C` in Attached Flow 1 and `Intent D` in Attached Flow 2 both match the same input, `Intent C` will be triggered because it comes first in the list of attached Flows. |

## Use Cases

??? info "Processing an Order Request"
    If you build a system that handles order requests from a user via an API
    (coming from a Webchat or frontend interface), the request might include structured data, such as JSON:
    
    ```json
    {
      "action": "order",
      "product": "pizza",
      "quantity": 2,
      "userId": "user123"
    }
    ```
    
    You might want the system to trigger an `Order` Intent when it receives this specific structure.
    
    **Rule**:
    
    ```js
    input.data.action === "order" && input.data.product === "pizza" && input.data.quantity >= 1
    ```
    This rule ensures that the `order` Intent is only triggered if the data contains an `action` of `order`, the `product` is `pizza`, and the `quantity` is greater than or equal to 1.

??? info "Checking for Specific Parameters in a Payload"
    Imagine you have an API that receives user's login data:
    
    ```json
    {
      "action": "login",
      "username": "john_doe",
      "password": "secret"
    }
    ```
    
    You can create a rule to trigger an `Authenticate` Intent based on the specific parameters in the payload:
    
    **Rule**:
    
    ```js
    input.data.action === "login" && input.data.username !== "" && input.data.password !== ""
    ```
    This rule ensures the Intent is triggered only when the payload contains both `username` and `password` fields.

??? info "Validating and Triggering Action Based on a Webhook Payload"
    You might have a webhook integration where you receive data from an external service, such as a payment gateway. 
    The payload might look something like this:
    
    ```json
    {
      "payment_status": "success",
      "transaction_id": "txn123456",
      "amount": 100.0
    }
    ```

    To trigger an Intent when a `successful payment` is detected, you can use the following rule:
    
    **Rule**:
    
    ```js
    input.data.payment_status === "success" && input.data.transaction_id !== undefined && input.data.amount > 0
    ```

## More Information

- [Overview](../overview.md)
- [Intent Conditions](conditions.md)