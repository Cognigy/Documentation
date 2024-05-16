---
 title: "Intent Mapping Priority" 
 slug: "Intent Mapping Priority" 
 hidden: false 
---

# Intent Mapping Priority

[![Version badge](https://img.shields.io/badge/Added in-v4.43-blue.svg)](../../../../release-notes/4.43.md)

This feature helps avoid ambiguity between parent and child Intents. The ambiguity can happen when the user input contains a combination of parent and child Intent sentences.

With **Intent Mapping Priority**, you choose whether you want to prioritize the current Intent or its child Intents. By giving priority to certain Intents, you can influence whether the parent or child Intents are more likely to be mapped. 

We recommend using full sentences when you generate examples for Intents. This approach leads to more accurate results during the mapping process. 

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/intents/intent-mapping-priority.png" width="80%" />
</figure>

## How to Set up

To set a priority, do the following steps:

1. Open a Flow or create a new one.
2. In the upper-right corner of the **Flow Editor** page, select **NLU**.
3. On the **Intent** tab, click **Create Intent**.
4. Specify a unique name for the Intent and click **Save**.
5. Open the created Intent and fill in the required fields.
6. In the **Intent Mapping Priority** field, select one of the following options:
    - **Prioritise This Intent** — set a priority for the current parent Intent. By default, this option is set up.
    - **Prioritise Child Intents** — set a priority for child Intents.
7. Save changes and click **Build model**. Build a model every time when you want to change settings.
 
## Examples

Let's assume that we have the following Intent data:

| Intent  | Intent name        | Sentences                                                                                                                                                                                                                                                       |
|---------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Parent  | Order Pizza        | I'd like to order a pizza. <br> Can I have a pizza delivered? <br> Can I get a pizza please? <br> I need to purchase a pizza. <br> I want to buy a pizza.                                                                                                       |
| Child 1 | Order Ham Pizza    | I want to get a ham pizza. <br> Can I have a ham pizza please? <br> I need a ham pizza. <br> I would like to order a ham pizza. <br> I am in the mood of for a ham pizza. <br> Can I order a ham pizza? <br> I'd like to have a ham pizza.                      |
| Child 2 | Order Cheese Pizza | I want to get a cheese pizza. <br> Can I have a cheese pizza please? <br> I need a cheese pizza. <br> I would like to order a cheese pizza. <br> I am in the mood of for a cheese pizza. <br> Can I order a cheese pizza? <br> I'd like to have a cheese pizza. |

Consider various examples of how each option of the Intent Mapping Priority setting works.

### Prioritise This Intent

Set up **Prioritise This Intent** for the parent Intent.

User input: `I want to order a bacon pizza` 

Result: `intent: Order Pizza, intent score: 0.33`

JSON: One object in the `nlu.intentMapperResults.scores` array 

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

### Prioritise Child Intents

Set up **Prioritise Child Intents** for the parent Intent.

User input: `I want to order a bacon pizza` 

Result: `intent: Order Ham Pizza, intent score: 0.63`

JSON: Two objects in the `nlu.intentMapperResults.scores` array 

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