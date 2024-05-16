---
title: "Annotations" 
slug: "annotations" 
hidden: false 
---
# Annotations

The _Annotations_ tool allows sentence words
to be assigned as placeholders for recognizing specific details from user inputs.
Each placeholder is associated with the Slot that will be recognized and filled by the NLU.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/annotations.png" width="100%" />
</figure>

This feature is particularly useful to reduce repetition by allowing lexicon libraries to be recognized within example sentence structures.

## Example Sentences


Annotations can be added to example sentences by highlighting the required word in the text field and selecting the **+** icon at the right end of the field.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/annotate-words.png" width="100%" />
</figure>

A new menu line will be created for each annotation added to the sentence. The annotation menu includes drop down fields to select the `Slot Type` and `key`. Both of these values are required for each annotation.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/annotate-word.png" width="100%" />
</figure>

Multiple annotations of different types can be added to a single example sentence where each annotation will be underlined in a different color. 

!!! note "Copy and Paste Annotated Sentences"
    It is possible to copy a sentence including annotations to another example sentence line, which will carry all the assigned annotations with it. Although similar sentences should be avoided, this can help save time by reducing the need to re-annotate words.


### Lexicon Slot

Insert **Lexicon Slot** placeholders within example sentences to teach the NLU to recognize words with similar meanings. For example, annotate the product name `shirts` with a custom `product` lexicon tag to allow the NLU to recognize `pants`, `hats`, and `jackets` that have been given the same slot tag in the [Lexicon Editor](../../../empower/nlu/slots-and-lexicons/lexicons.md).

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/lexicon-slot.png" width="100%" />
</figure>

**Synonyms** you provide in attached Lexicons are used at score and train time to improve accuracy.

Note that Slot Tags and Synonyms for intents must be attached in the same flow. This means when training with attached flows: intents in attached flows use the lexicons of their attached flows, not the lexicons of the parent Flow.

!!! note "Exact tag replaced matching algorithm"
    Example and input utterances that match exactly save for Keyphrases, which share the same Tag, automatically receive a score of 0.95.

    To illustrate:

    The input "I want a pizza" will match an example sentence "I want a burger" directly with score 0.95 if "pizza" and "burger" are Keyphrases in an attached Lexicon that share the same Tag.

    Note the direct comparison is limited to the **very first Tag in a Lexicon** only for efficiency reasons.

| Slot Name   |
|-------------|
| Number      |
| Date        |
| Age         |
| Temperature |
| Duration    |
| Percentage  |
| E-Mail      |
| URL         |
| Money       |
| Distance    |

For more information about System Slots, including data formats and examples, visit the [Slot Mapping](../slots-and-lexicons/slots.md).

#### Recommendations

- **Annotate only 50% of your example sentences with Slots for optimal Intent matching**. This balanced approach instructs the Cognigy NLU system that the Slot is relevant for the Intent, while also indicating that identifying the Slot is not mandatory for a successful Intent match.
- **Use synonyms to translate rare words**. Provide understandable, common alternatives for less common terms. Cognigy Natural Language Understanding will better comprehend rare words if you translate them into common utterances. For example, a specific brand name like 'PremiumPayID' could be equated with the synonym 'credit card,' enabling Cognigy to understand its connection to payments, which might otherwise be unfamiliar.
- **Do not overuse tags**. For small word groups that mean the same thing, it is more effective to use only synonyms. Tags are appropriate for a large number of words collected under one concept, such as first names or country codes.

### Any Slot

This slot option provides an open text field for a custom slot name to be specified. The name should match any slot that will be recognised by the NLU and published to the input data as a child of `input.slots`.