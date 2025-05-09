---
title: "Intent Mapping Priority" 
slug: "Intent Mapping Priority"
description: "Cognigy.AI Intent Mapping Priority feature helps avoid ambiguity between parent and child Intents. The ambiguity can happen when the user input contains a combination of parent and child Intent sentences."
hidden: false 
tags:
  - cognigy nlu
  - intents
  - intent mapping priority
  - parent intents
  - child intent
---

# Intent Mapping Priority

[![Version badge](https://img.shields.io/badge/Added in-v4.43-blue.svg)](../../../../../release-notes/4.43.md)

The *Intent Mapping Priority* feature helps avoid ambiguity between parent and child Intents, which can occur when user input matches both.

With the Intent mapping priority, you can choose whether to prioritize the parent Intent or its child Intents. This approach allows you to control which Intent is more likely to be selected.

For better accuracy, use full sentences when creating example phrases for Intents.

## Key Benefits

- **Enhanced Accuracy in Intent detection**. By setting priorities, you can guide the system to focus on either parent or child Intents as desired.
- **Flexible customization**. Adjust mapping behavior to suit specific use cases, ensuring the right Intent is triggered.

## Prerequisites

Before using this feature, ensure the following:

- A Flow is created or available in your Project.
- Parent and child Intents are defined in **NLU > Intents**.

## Restrictions

- This feature works best with full-sentence Intent examples. Single words or short phrases may lead to inaccurate mapping results.

## How to Use

To set a priority, follow these steps:

1. Open an Intent in **NLU > Intents**. 
2. In the **Intent Mapping Priority** field, select one of the following options:
    - **Prioritise This Intent** — set a priority for the current parent Intent. By default, this option is set up.
    - **Prioritise Child Intents** — set a priority for child Intents.
3. Save changes and click **Build model**. Build a model every time you want to apply your changes to the NLU model.
 
## Examples

Assume that you have the following Intent data:

| Intent  | Intent name        | Sentences                                                                                                                                                                                                                                                       |
|---------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Parent  | Order Pizza        | I'd like to order a pizza. <br> Can I have a pizza delivered? <br> Can I get a pizza please? <br> I need to purchase a pizza. <br> I want to buy a pizza.                                                                                                       |
| Child 1 | Order Ham Pizza    | I want to get a ham pizza. <br> Can I have a ham pizza please? <br> I need a ham pizza. <br> I would like to order a ham pizza. <br> I am in the mood of for a ham pizza. <br> Can I order a ham pizza? <br> I'd like to have a ham pizza.                      |
| Child 2 | Order Cheese Pizza | I want to get a cheese pizza. <br> Can I have a cheese pizza please? <br> I need a cheese pizza. <br> I would like to order a cheese pizza. <br> I am in the mood of for a cheese pizza. <br> Can I order a cheese pizza? <br> I'd like to have a cheese pizza. |

Consider various examples of how each option of the **Intent Mapping Priority** setting works.

??? info "Prioritise This Intent"
    Set up **Prioritise This Intent** for the parent Intent.
   
    User input: `I want to order a bacon pizza` 
   
    Result: `intent: Order Pizza, intent score: 0.33`
   
    JSON example of object stored in the `nlu.intentMapperResults.scores` array:
   
    ```json
    "scores": [
            {
              "id": "6262e9e7-9dc5-4146-9153-96ef0693c18f",
              "name": "Order Pizza",
              "score": 0.3363160895380178,
              "negated": false,
              "confirmationSentence": null,
              "confirmationSentences": null,
              "disambiguationSentence": null,
              "flow": "898601c7-c5db-44f3-bfa0-bce265af02ad"
            }
          ]
    ```

??? info "Prioritise Child Intents"
    Set up **Prioritise Child Intents** for the parent Intent.
   
    User input: `I want to order a bacon pizza` 
   
    Result: `intent: Order Ham Pizza, intent score: 0.63`
   
    JSON example of object stored in the `nlu.intentMapperResults.scores` array:
   
    ```json
    "scores": [
            {
              "id": "8bba4b5a-1166-4459-bd1c-9e8b5391727e",
              "name": "Order Ham Pizza",
              "score": 0.6494886591790712,
              "negated": false,
              "confirmationSentence": null,
              "confirmationSentences": null,
              "disambiguationSentence": null,
              "flow": "898601c7-c5db-44f3-bfa0-bce265af02ad"
            },
            {
              "id": "c16f7afc-2875-49dc-8d7a-e06629d7fef9",
              "name": "Order Cheese Pizza",
              "score": 0.24775283391091624,
              "negated": false,
              "confirmationSentence": null,
              "confirmationSentences": null,
              "disambiguationSentence": null,
              "flow": "898601c7-c5db-44f3-bfa0-bce265af02ad"
            }
          ]
    ```

## More Information

- [Overview](overview.md)
- [Inheritance Mechanism](inherit-child-example-sentences.md)
- [Intents](../overview.md)