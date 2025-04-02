---
 title: "Copy Slots to Context" 
 slug: "copy-slots-to-context" 
 hidden: false 
---

# Copy Slots to Context

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/copy-slots-to-context.png" width="40%" />
</figure>

## Description

The Copy Slots to Context Node stores a found Slot in a specific place in the Context.

## Parameters

| Parameter | Type          | Description                                                                                                                                                                                                                                                                                                        |
|-----------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Key       | CognigyScript | The place in the Context where the found Slot should be stored.                                                                                                                                                                                                                                                    |
| Tag       | CognigyScript | The tag of the Slot that should be stored in the Context if found (e.g a food).                                                                                                                                                                                                                                    |
| Mode      | Select        | <ul><li>`simple` – only the last found Slot is stored.</li><li>`array` – all found Slots with the correct tag are stored as an array.</li></ul>                                                                                                                                                                    |
| UseNeg    | Toggle        | <ul><li>`true`– only positive Slots are added to the Context. This means that in the sentence `I don't like pizza`, `pizza` is not stored in the Context because it is negated.</li><li>`false` – negative Slots are also added to the context. In the sentence `I don't like pizza`, `pizza` is stored.</li></ul> |

## Example

You create a Copy Slots To Context Node and set:

- `key` to `foods`.
- `tag` to `food`.
- `mode` to `array`.
- `UseNeg` to `false`.

You attach a Lexicon with the Keyphrases `salad` and `pizza` with the `food` tag. If a user says `I want to order a pizza and a salad`, then the Keyphrases `pizza` and `salad` are stored in an array in the Context under the key `foods`.
