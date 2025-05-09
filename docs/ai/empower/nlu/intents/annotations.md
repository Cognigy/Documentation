---
title: "Annotations" 
slug: "annotations"
description: "Cognigy.AI Annotations enable you to tag specific words within example sentences as placeholders."
hidden: false 
tags:
  - NLU model
  - intents
  - annotate example sentences
---

# Annotations

_Annotations_ enable you to tag specific words within example sentences as placeholders.
These placeholders, linked to Slots, allow the NLU model to identify and extract key details from user inputs. 
For example, in the sentence `I want a shirt`, you could annotate `shirt` as a placeholder tied to a `product` Slot,
helping the NLU recognize similar items, such as `pants` or `hats`.

## Key Benefits

- **Improved Detail Recognition**. Annotations help the NLU pinpoint and extract specific information, for example, names, dates, or products, from user inputs, making conversations more precise and context-aware.
- **Reduced Repetition**. By integrating Slots into example sentences, annotations eliminate the need to write repetitive variations.

## How to Use

To use Annotations, follow these steps:

1. In the Flow editor, go to **NLU > Intents** and select the desired Intent.
2. Highlight a word in an example sentence within the text field and click **+**. A row with two lists will appear.
3. Select **Slot Type** and **key** from the lists. 

Multiple annotations can be added to a single sentence, each underlined in a unique color.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/intents/annotations.png" width="60%" />
</figure>

### Exact Matching

If two sentences are nearly identical but differ only in Keyphrases that share the same Slot, the NLU model detects them as highly similar. 
In such cases, it automatically assigns a score of 0.95 to indicate a strong match.

#### Example

Example Sentence: `I want a burger`<br>
User Input: `I want a pizza`<br>
Result: If `pizza` and `burger` are both tagged with the same `product` Slot in the Lexicon, the match score will be `0.95`.

### Recommendations

- **Annotate only 50% of your example sentences with Slots for optimal Intent matching**. This balanced approach instructs the NLU model that the Slot is relevant to the Intent, while also indicating that identifying the Slot isn't mandatory for a successful Intent match.
- **Use common words instead of rare ones**. Replace hard-to-understand terms with simpler ones to help the NLU model understand the context better. For example, instead of `PremiumPayID`, you can use `credit card`. Alternatively, you can include `credit card` in the example sentence and annotate it with a [Lexicon Slot](../slots/user-defined/lexicon.md) that maps to `PremiumPayID`.

## More Information

- [Example Sentences](example-sentences.md)
- [Intents](overview.md)