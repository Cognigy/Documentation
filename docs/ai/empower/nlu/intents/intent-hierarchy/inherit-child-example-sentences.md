---
title: "Inheritance Mechanism" 
slug: "intent-hierarchy"
description: "Cognigy.AI Intent Inheritance Mechanism lets parent Intents use example sentences from their child Intents."
hidden: false
tags:
  - intent inheritance mechanism
  - intent hierarchy
  - parent intents
  - child intents
---

# Inheritance Mechanism

The _Inheritance Mechanism_ feature lets parent Intents use example sentences from their child Intents.
This mechanism helps the AI Agent better understand user inputs and determine the intended action.

### Key Benefits

- **Wider Scope for Parent Intents**. Parent Intents get a better trained NLU model by including examples from child Intents.
- **Clear Hierarchy**. You can see how Intents relate to each other and how they're scored.

## Prerequisites

Before using the inheritance mechanism, make sure you have a multilevel Intent structure.
For example, Level 1 parent Intents with Level 2 or Level 3 child Intents.

## How to Use

To activate the inheritance mechanism, follow these steps:

1. In the Flow editor, go to **NLU > Intents** and select the parent Intent you want to set up. 
2. Activate the **Inherit Example Sentences from Child Intents** setting.
3. Save your changes and rebuild the model to apply them.

### Intent Hierarchy Matching

The parent Intent includes examples from its child Intents in its training data.
When a user sends an input, during Intent matching, both parent and child Intents can score highly.

The child Intent's details are saved in the `input.intent` Input object,
while the parent Intent's details appear in `input.nlu.intentMapperResults.scores`.
For a deeper understanding of the resolution process, you can trace the Intent path using `input.intentLevel` and `input.nlu.intentMapperResults.intentPath`.

??? info "Input Object"
    ```json
    {
      "input": {
        "intent": "Child Intent",  
        "nlu": {
          "intentMapperResults": {
            "scores": [
              {
                "intent": "Child Intent",
                "score": 0.6833273843878324
              },
              {
                "intent": "Parent Intent",
                "score": 0.5099832885597476
              }
            ],
            "intentPath": [
              "Parent Intent",
              "Child Intent"
            ]
          }
        },
        "intentLevel": {
          "level1": "Parent Intent",
          "level2": "Child Intent",
          "level3": null
        }
      }
    }
    ```

### Example

Consider the inheritance mechanism in a customer support AI Agent.
The parent Intent (`Support`) inherits example sentences from its child Intents
(`Technical Support` and `Billing Support`).
This structure enables the AI Agent to handle general inquiries while accurately identifying specific Intents.

??? info "Intent Data"
    | **Level** | **Name** | **Intent Name**     | **Example Sentences**                                                                                    | **Description**                                                               |
    |-----------|----------|---------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
    | Level 1   | Parent   | `Support`           | `I need assistance` <br> `Can you help me?` <br> `I have an issue`                                       | The high-level parent Intent recognizing broad customer queries.              |
    | Level 2   | Child    | `Technical Support` | `My internet is down` <br> `I can't connect to the Wi-Fi` <br> `My computer is broken`                   | The child Intent under the `Support` parent for issues related to technology. |
    | Level 2   | Child    | `Billing Support`   | `I need help with my invoice` <br> `I have a question about my bill` <br> `Can you explain this charge?` | The child Intent under the `Support` parent for issues related to billing.    |

??? info "Result"
    | **User Input**                | **Recognized Intent**              |
    |-------------------------------|------------------------------------|
    | `I need assistance`           | `Support` (Parent Intent)          |
    | `My internet is down`         | `Technical Support` (Child Intent) |
    | `I need help with my invoice` | `Billing Support` (Child Intent)   |

## More Information

- [Overview](overview.md)
- [Intent Mapping Priority](intent-mapping-priority.md)