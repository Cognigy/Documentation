---
title: "LLM-Based Intent Reranking"
slug: "external-nlu"
description: "LLM-based intent reranking uses a Large Language Model (LLM) to reorder identified intents based on user input, improving the accuracy of intent classification provided by Cognigy NLU."
hidden: false
---

# LLM-Based Intent Reranking

[![Version badge](https://img.shields.io/badge/Added in-v4.76-blue.svg)](../../../../release-notes/4.76.md)

_LLM-based intent reranking_ is a process that uses a Large Language Model (LLM) to reorganize or reorder identified intents based on data taken from the input text. This process involves using a more advanced language model to better understand the context and meaning of the user's input, which improves the accuracy of intent classification.

Cognigy NLU analyzes user input and identifies up to 5 most probable Intents.
The result depends on various factors, including the total number of Intents, example sentences, rejected Intents, thresholds, and language specifics.
Sometimes the correct Intent is returned in the top-5 but not with the highest priority.
Adding an LLM request after the Cognigy NLU mapping process can improve accuracy.

Starting from version 4.76, Cognigy automatically includes descriptions of Intents to the results generated during the mapping process.
These descriptions become a part of the Input object and are stored in the `input.nlu.intentMapperResults.scores[x].description` object for each mapped Intent, where `x` represents the priority of the Intent.
The stored descriptions are sent to an external LLM via a prompt, which can be made via the LLM Prompt Node.
The external LLM analyzes the data and generates a result based on the retrieved descriptions. This result is recorded in the `intent.promptResult` object by default.

Once you have the correct Intent, you can continue the Flow based on this Intent. For example, if a user requested information about a product, you can provide product descriptions, answers to frequently asked questions, and options for placing an order.

## Prerequisites

- Add an [external LLM](../../llms/model-support-by-feature.md) that supports the LLM Prompt Node & LLM-powered Answer Extraction features.
- Create a Flow and Intents in it.

## How to Set up

To rerank Intents via an external LLM, follow these steps:

1. [Add descriptions to Intents](#add-descriptions-to-intents)
2. [Add a LLM Prompt Node with the relevant prompt](#add-an-llm-prompt-node)

### Add Descriptions to Intents

To add descriptions to Intents, follow these steps:

1. In the left-side menu of the Project, go to **Build > Flows**.
2. On the **Flows** page, select the Flow you want to change.
3. In the upper-right corner, select **NLU**.
4. On the **Intents** tab, locate the Intent to which you want to add a description.
5. On the **Intent** page, in the upper-right corner, click ![vertical-ellipsis](../../../../_assets/icons/vertical-ellipsis.svg) **> Edit**.
6. In the **Edit Intent** window, go to the **Description** field. Enter a clear and concise description that reflects the content of the example sentences listed in the Intent. Note that the **Description** field can contain no more than 200 characters.
7. Click **Save**.
8. Repeat steps 6-9 for other Intents within the Flow.
9. In the upper-right corner, click **Build Model**.

### Add an LLM Prompt Node

To add an LLM Prompt Node with the relevant prompt, follow these steps:

1. In the Flow editor, add an LLM Prompt Node.
2. In the LLM Prompt Node, go to the **Instruction (System Message/Prompt)** field and enter the following prompt for reranking:

      {% raw %}
      ```text
      Your are an expert in intent recognition. Given a list of intents, their descriptions, and a query, you need to choose the right intent for the query.
       
      Given the following intents and descriptions: 
       
      {{input.nlu.intentMapperResults.scores.slice(0,5).map((item, index) => `Intent ${index +1}: ${item.name}\nDescription ${index + 1}: ${item.description}\n`).join("\n\n")}}
       
      And the following query: {{input.text}}
       
      Choose the correct intent for the query. Output the intent using the JSON format as follows: {"intent": intent_name}
      ```
      {% endraw %}

3. Navigate to the **Advanced** section and configure the recommended parameters as follows:<br>
    1. From the **Sampling Method** list, select **Temperature** and set the temperature to `0`.<br>
    2. From the **Response Format** list, select **JSON Object**.
4. _(Optional)_ If you want the model to return the similar result for the subsequent requests, specify a number in the **Seed** parameter. For example, `123`.
5. Click **Save Node**.

### Retrieve and Reuse Results

By default, the correct intent will be stored in the `input.promptResult.intent` object.

To retrieve this Intent for further use, follow these steps:

1. Below the LLM Prompt Node, add a Code Node.
2. In the **Code** field of the Code Node, specify `input.intent = input.promptResult.intent`.
3. Click **Save Node**.
4. Below the Code Node, add a Lookup Node.
5. In the Lookup Node editor, configure the following fields:<br>
    1. From the **Type** list, select **Intent**.<br>
    2. Set the **Intent Level** field to **Default**, matching Intents at the most detailed hierarchy level.
6. Click **Save Node**.
7. Add child Case Nodes of the Lookup Node, specifying the Intent name in the **Value** field for each Node.

Under each Case Node, you can place other Nodes, such as Say or Question, which will offer guides to the end user based on the selected Intent.

## Example

In this example, a user wants to order pizza and shares their preferences. The AI Agent recognizes if the user has ingredient restrictions and determines the correct Intent.

Let's assume that we have the following Intent data:

| Intent Name      | Intent Description                                                                                                                                                                                    | Sentences                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Meat Pizza       | Intent for ordering a pizza with meat toppings such as pepperoni, sausage, bacon, ham, chicken, and ground beef. A popular choice for meat lovers. Rich in flavor and protein.                        | I'm craving a Meat Pizza loaded with ground beef, sausage, and ham. Could you make that for delivery?<br>For pickup, I'd like to order a Meat Pizza. Could you make it with plenty of bacon and extra cheese, please?<br>Can I get a Meat Pizza with ham and chicken as the toppings, cooked to a crispy perfection?<br>Could I please have a Meat Pizza with a mix of all your meat toppings? That's pepperoni, sausage, bacon, ham, and chicken<br>I'd like to order a large Meat Pizza with extra pepperoni, sausage, and bacon, please |
| Vegetarian Pizza | Intent for ordering a meatless pizza. It contains milk-based products and vegetables. Often has cheese as a main ingredient, such as mozzarella, cheddar, feta, or goat cheese. Good for vegetarians. | May I please place an order for a vegetarian pizza?<br>I love the combination of fresh vegetables and creamy cheese on a vegetarian pizza<br>I'd like to order the vegetarian pizza, please. Can you ensure it has mozzarella, cheddar, or feta cheese with a variety of veggies?<br>I'm interested in the vegetarian pizza, please. Can you describe the cheese options available and the types of vegetables you use?<br>Could you prepare a vegetarian pizza for me? I prefer it with lots of milk-based cheese and assorted vegetables |                                                                                                                |
| Veggie Pizza     | Intent for ordering a pizza with only vegetable toppings such as tomatoes, mushrooms, bell peppers, onions, olives, spinach, and broccoli. A light and refreshing option for health-conscious eaters. | I'll take a veggie pizza with a mix of tomatoes, olives, and broccoli<br>I'm in the mood for a veggie pizza loaded with bell peppers and onions<br>I'm looking forward to trying your veggie pizza with a variety of fresh vegetables<br>Could I please order a veggie pizza with extra mushrooms and spinach?<br>Do you have a special veggie pizza?                                                                                                                                                                                      |                                                                                                                                                                                                                          |

Consider the example of Intent reranking based on the following user input:

```text
I'd like something low-calorie, but here's the catch — I don't eat any animal products, 
and I'm allergic to milk-based ingredients.
```

### Cognigy NLU

After applying Cognigy NLU Intent mapping, `Fallback Reject Intent`
is assigned priority `1` with a score of `0.588120879379653`, instead of the correct Intent `Veggie Pizza`,
which has priority `3` with a score of `0.026957729768803257`.

```json
{
  "nlu": {
    "intentMapperResults": {
      "scores": [
        {
          "id": null,
          "name": "null - Fallback Reject Intent",
          "score": 0.588120879379653,
          "negated": false,
          "confirmationSentence": null,
          "confirmationSentences": null,
          "disambiguationSentence": null,
          "flow": null,
          "description": ""
        },
        {
          "id": "8f44b7b1-d984-4da3-9558-6c128a190235",
          "name": "Vegetarian Pizza",
          "score": 0.2909909269629138,
          "negated": false,
          "confirmationSentence": null,
          "confirmationSentences": null,
          "disambiguationSentence": null,
          "flow": "f212ad29-e38e-4cfc-bc1c-47b12cfd9fc3",
          "description": "Intent for ordering a meatless pizza. It contains milk-based products and vegetables. Often has cheese as a main ingredient, such as mozzarella, cheddar, feta, or goat cheese. Good for vegetarians."
        },
        {
          "id": "a9418c1b-f956-402b-b317-cabe91950946",
          "name": "Veggie Pizza",
          "score": 0.026957729768803257,
          "negated": false,
          "confirmationSentence": null,
          "confirmationSentences": null,
          "disambiguationSentence": null,
          "flow": "f212ad29-e38e-4cfc-bc1c-47b12cfd9fc3",
          "description": "Intent for ordering a pizza with only vegetable toppings such as tomatoes, mushrooms, bell peppers, onions, olives, spinach, and broccoli. A light and refreshing option for health-conscious eaters."
        }
      ]
    }
  }
}
```

Alternatively, to view up to 5 probable results, you can output them via a [Say](../../../build/node-reference/basic/say.md) Node by including the [prompt](#add-an-llm-prompt-node) in the **Text** field.

### Cognigy NLU + External LLM

After applying the Cognigy NLU Intent mapping and external LLM reranking, the correct Intent `Veggie Pizza` is identified.

```json
{
   "promptResult": {
      "intent": "Veggie Pizza"
   }
}
```

Once the AI Agent identifies the correct Intent, you can continue the Flow.
For example, the AI Agent can offer pizza options from the identified category `Veggie Pizza`.

## More Information

- [Generate Intents](../../generative-ai.md#generate-intent-sentences)