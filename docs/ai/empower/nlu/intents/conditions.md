---
title: "Intent Conditions" 
slug: "intent-conditions" 
description: "Cognigy.AI Intent Conditions allow you to dynamically enable or disable a specific Intent based on real-time data"
hidden: false
tags:
  - Cognigy NLU
  - intents
  - intent conditions
  - conditions
---

# Intent Conditions

*Intent Conditions* allow you to dynamically enable or disable a specific Intent based on real-time data. You can define them using [CognigyScript](../../../build/cognigyscript.md) and extend them with JavaScript.

By default, AI Agents evaluate all available Intents. However, in some cases, certain Intents should only be considered under specific conditions. For example:

- The `Cancel Credit Card` Intent should be recognized if the user has a credit card.
- The `Schedule Appointment` Intent should be recognized during business hours.

With Intent conditions, you can control when an Intent is active, improving the accuracy and relevance of AI Agent responses.

## Key Benefits

- **Granular control**. Compared to States, which are designed for managing a set of Intents, Intent conditions offer more fine-grained control over individual Intents. They allow you to enable or disable specific Intents based on multiple factors, providing greater flexibility in handling dynamic scenarios.
- **Improved AI Agent Precision**. Prevents the AI from triggering irrelevant Intents, reducing false positives and improving the user experience.

## How to Use

To set a condition for a specific Intent, navigate to **NLU > Intents** in the Flow editor.
Open the Intent, then go to **Advanced > Condition** to configure the condition.

If no condition is set, the Intent is always available.

### Syntax

You can define Intent conditions using CognigyScript:

??? info "Single Condition"

    A single Intent condition is an expression that evaluates to `true` or `false`. The AI Agent will detect the Intent only if the condition is `true`.
    
    The `!!` operator ensures the value is evaluated as a boolean.
    
    **Examples:**
    
    Check if the Keyphrase of the first item in the `city` Slot is equal to `Düsseldorf`:
    
    ```js
    !!(input.slots.city[0].keyphrase === "Düsseldorf")
    ```
    
    Check if the `topics` array in the Context object doesn't include the term `Cognigy`:
    
    ```js
    !!(!context.topics.includes("Cognigy"))
    ```  

??? info "Multiple Conditions"

    To apply multiple Intent conditions, combine them using logical operators:

    - **AND (`&&`)** – requires all conditions to be true.
    - **OR (`||`)** – requires at least one condition to be true.
    
    **Examples:**
    
    Enable Intent if the user asks about Düsseldorf and the topic is Cognigy:
    
    ```js
    input.slots.city[0].keyphrase === "Düsseldorf" && context.topics.includes("Cognigy")
    ```
    
    Enable Intent if the user asks about Düsseldorf or Cognigy:
    
    ```js
    input.slots.city[0].keyphrase === "Düsseldorf" || context.topics.includes("Cognigy")
    ```

## Use Cases

??? info "Restricting an Intent Based on User Profile"
    A bank AI Agent should allow users to cancel their credit cards **only if they have one**.
    
    **Condition:**
    
    ```js
    !!(profile.has_credit_card)
    ```
    
    **Result:** the Intent is only active for users with a credit card.

??? info "Checking Multiple Profile Attributes"
    The AI Agent should allow credit card cancellation only if the user owns a card that is activated.
    
    **Condition:**
    
    ```js
    profile.has_credit_card === true && profile.credit_card_activated === true
    ```  
    
    **Result:** the Intent is enabled only for customers with an active credit card.

## More Information

- [States](../../../test/interaction-panel/state.md)
- [Intent Rules](rules.md)