---
 title: "Intent Mapping Priority" 
 slug: "Intent Mapping Priority" 
 hidden: false 
---

# Intent Mapping Priority

This feature helps avoid ambiguity between parent and child Intents. The ambiguity can happen when the user input contains a combination of parent and child Intent sentences.

With **Intent Mapping Priority**, you choose whether you want to prioritize the current Intent or its child Intents. By giving priority to certain Intents, you can ensure that a Cognigy bot will respond to user requests in the most efficient and accurate way possible. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/intent-mapping-priority.png" width="80%" />
</figure>

## How to Set up

To set a priority, do the following steps:

1. Open a Flow or create a new one.
2. In the upper-right corner of the **Flow Editor** page, select **NLU**.
3. On the **Intent** tab, click **Create Intent**.
4. Specify a unique name for the Intent and click **Save**.
5. Open created Intent and fill in the required fields.
6. In the **Intent Mapping Priority** field, select one of the following options:
    - **Prioritise This Intent** — set a priority for the current parent Intent. By default, this option is set up.
    - **Prioritise Child Intents** — set a priority for child Intents.
7. Save changes and click **Build model**. 

## Examples

Let's assume that we have the following Intent data:

```txt
|  Intent  | Intent name     | Sentence    |
| -------- | ----------------| ------------|
| Parent   | Pizza           | Order pizza |
| Child 1  | Meat            | Ham         |
| Child 2  | Vegetarian      | Cheese      |
```

Consider various examples of how each option of the Intent Mapping Priority setting works.

### Prioritise This Intent

Set up **Prioritise This Intent** for the parent Intent.

User input: `Order pizza with ham` 

Result: `intent: Pizza, intent score: 0.6`

JSON: One object in the `nlu.intentMapperResults.scores` array 

```json
"scores": [
        {
          "id": "c6d49062-cbc4-432e-a29d-aa134957ceee",
          "name": "Pizza",
          "score": 0.6079136287011193,
          "negated": false,
          "confirmationSentence": null,
          "confirmationSentences": null,
          "disambiguationSentence": null,
          "flow": "a38ca509-9013-4e50-ba74-0ecb2080c642"
        }
      ]
```

### Prioritise Child Intents

Set up **Prioritise Child Intents** for the parent Intent.

#### Example 1

User input: `Order pizza with ham` 

Result: intent: `Meat, intent score: 0.53`

JSON: Two objects in the `nlu.intentMapperResults.scores` array 

```json
"scores": [
        {
            "id": "b3995ba8-bb63-4182-bd3a-d03d20726818",
            "name": "Meat",
            "score": 0.5388954934850558,
            "negated": false,
            "confirmationSentence": null,
            "confirmationSentences": null,
            "disambiguationSentence": null,
            "flow": "a38ca509-9013-4e50-ba74-0ecb2080c642"
        },
        {
            "id": "5349765e-2945-4d8b-9d09-10dfb4166cb6",
            "name": "Vegetarian",
            "score": 0.17573281293469106,
            "negated": false,
            "confirmationSentence": null,
            "confirmationSentences": null,
            "disambiguationSentence": null,
            "flow": "a38ca509-9013-4e50-ba74-0ecb2080c642"
        }
      ]
```

#### Example 2

User input: `Order pizza with cheese and ham` 

Result: `intent: Meat, intent score: 0.48`

JSON: Two objects in the `nlu.intentMapperResults.scores` array

```json
"scores": [
        {
          "id": "b3995ba8-bb63-4182-bd3a-d03d20726818",
          "name": "Meat",
          "score": 0.48530120130542537,
          "negated": false,
          "confirmationSentence": null,
          "confirmationSentences": null,
          "disambiguationSentence": null,
          "flow": "a38ca509-9013-4e50-ba74-0ecb2080c642"
        },
        {
          "id": "5349765e-2945-4d8b-9d09-10dfb4166cb6",
          "name": "Vegetarian",
          "score": 0.36025692555191785,
          "negated": false,
          "confirmationSentence": null,
          "confirmationSentences": null,
          "disambiguationSentence": null,
          "flow": "a38ca509-9013-4e50-ba74-0ecb2080c642"
        }
      ]
```







