---
 title: "Annotations" 
 slug: "annotations" 
 hidden: false 
---
# Annotations

The Cognigy.AI intent builder features the **Annotations** tool that allows sentence words to be assigned as placeholders to recognize specific details from user utterances. Each placeholder is assigned to the **Slot** that will be recognized and filled by the NLU.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/d6edddb-annotations.PNG" width="100%" />
</figure>

This feature is particularly useful to reduce repetition by allowing lexicon libraries to be recognized within example sentence structures.

## Example Sentences
<div class="divider"></div>

Annotations can be added to example sentences by highlighting the required word in the text field and selecting the "**+**" icon at the right end of the field.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/da1ef79-annotateWord1.PNG" width="100%" />
</figure>

A new menu line will be created for each annotation added to the sentence. The annotation menu includes drop down fields to select the `Slot Type` and `key`. Both of these values are required for each annotation.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/0c923ee-annotateWord3.PNG" width="100%" />
</figure>

Multiple annotations of different types can be added to a single example sentence where each annotation will be underlined in a different color. 

???+ info "Copy and Paste Annotated Sentences"
    It is possible to copy a sentence including annotations to another example sentence line which will carry all the assigned annotations with it. Although similar sentences should be avoided, this can help save time by reducing the need to re-annotate words.

### Lexicon Slot
Insert **Lexicon Slot** placeholders within example sentences to teach the NLU to recognize words with similar meanings. For example, annotate the product name `shirts` with a custom `product` lexicon tag to allow the NLU to recognize `pants`, `hats`, and `jackets` that have been given the same slot tag in the [Lexicon Editor]({{config.site_url}}ai/resources/build/lexicons/).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/bc5d3a5-lexiconSlot.PNG" width="100%" />
</figure>

**Synonyms** you provide in attached Lexicons are used at score and train time to improve accuracy.

Note that Slot Tags and Synonyms for intents must be attached in the same flow. This means when training with attached flows: intents in attached flows use the lexicons of their attached flows, not the lexicons of the parent Flow.


???+ info "Pro Tip: use synonyms to translate rare words"
    Provide understandable, common synonyms for rare words. Cognigy Natural Language Understanding will be able to better make sense of rare words if you translate them to common utterances. E.g., a specific brand name such as "PremiumPayID" could be provided with the synonym "credit card" and Cognigy will understand its connection to payments where it would otherwise be an unknown word.

???+ warning "Do not overuse tags"
    For small word groups which mean the same thing it more effective to use only synonyms. Tags are appropriate for a large number of words collected in one concept, such as first names or country codes.

???+ info "Exact tag replaced matching algorithm"
    Example and input utterances that match exactly save for Keyphrase(s) which share the same Tag automatically receive a score of 0.95

    To illustrate:

    The input "I want a pizza" will match an example sentence "I want a burger" directly with score 0.95 if "pizza" and "burger" are Keyphrases in an attached Lexicon that share the same Tag.

    Note the direct comparison is limited to the **very first Tag in a Lexicon** only for efficiency reasons.

| Slot Name |
| --------- |
| Number |
| Date |
| Age |
| Temperature |
| Duration |
| Percentage |
| E-Mail |
| URL |
| Money |
| Distance |

???+ info "Detailed Slot Information"
    For more information about System Slots, including data formats and examples, visit the [Slot Mapping]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/).

### Any Slot

This slot option provides an open text field for a custom slot name to be specified. The name should match any slot that will be recognised by the NLU and published to the input data as a child of `input.slots`.