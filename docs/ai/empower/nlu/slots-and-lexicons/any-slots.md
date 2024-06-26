---
title: "Any Slots" 
slug: "any-slots" 
hidden: false 
---

# Any Slots

!!! warning "Upcoming Feature Removal"
    The Any Slots feature will be removed in version 4.83. Instead, utilize the [LLM Entity Extraction](../../../build/node-reference/other-nodes/llm-entity-extract.md) Node to identify Slots in the user input via LLMs.

*Any Slots* are catch-all placeholder slots that allow you to match keyphrases of arbitrary length outside your Lexicons. If user input matches the placeholder slot exactly it will populate a [Cognigy Slot](slots.md) with the matched content. The result is the same as if the matched user input had been added to an attached Lexicon as a keyphrase.

To add an Any Slot, simply annotate a single word in your example sentence and select the "Any-Slot" type. Then enter the desired slot name.

An example sentence with ***Any Slot*** "movie_title" such as...

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/any-slots.png" width="60%" />
</figure>

...will dynamically add user input that matches the pattern exactly to the slot *movie_title*:

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/result_movie_title.png" width="60%" />
</figure>

Any input content that matches the pattern of an *Any Slot* in your example sentences exactly will be populated as a new Cognigy Slot. The result will be the same as if you had populated a Lexicon with the tag of your placeholder *Any Slot* and a keyphrase identical to the matched user input.

!!! note "Limitations"
    - Works best when only a single word is annotated
    - Up to 4 different *Any Slots* per sentence
    - Up to 500 example sentences with *Any Slots* per Flow
    - Example sentences with *Any Slots* must be less than 400 characters long
    - Any Slot patterns are interpreted exact matching and will always trigger a 1 score on the intent. Lexicon Synonyms or [Annotations](../intents/annotations.md) are treated synonymous for the purpose of matching.

## Examples

### Any Slot at the end of a sentence

Consider the following example:

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/slots-and-lexicons/any-slot-example.png" width="60%" />
</figure>

This will dynamically add user input that matches the pattern exactly to the slot *fruit*:

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/slots-and-lexicons/result-apple.png" width="60%" />
</figure>

Note that because the *Any Slot* annotation is located at the very end of the training sentence, any number of words after *"This is a"* will be matched to the slot *fruit*:

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/slots-and-lexicons/result-apple-tree.png" width="60%" />
</figure>

This is by design and does not seem to make sense for this specific example. However, consider the example above with the sentence *"Who is the director of Titanic"*, where the *Any Slot* would be matched with any movie title, also titles including spaces.

### Any Slot in the middle of a sentence

Lets "fix" the issue we discovered above by adjusting the example sentence a little:

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/slots-and-lexicons/result-orange-tree.png" width="60%" />
</figure>

We placed the *Any Slot* annotation in the middle of a sentence. Now, the word of an input sentence that has exactly the structure of the training sentence will be mapped to the slot *fruit*:

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/result_thisisanappletree2.png" width="60%" />
</figure>

Grammatical issues aside, using multiple words does also work:

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/result_thisisankiwifruittree.png" width="60%" />
</figure>

### Any Slot in combination with Lexicon Slot

When using *Any Slots*, we rely on the user to use the exact word structure of that sentence. To remain rather flexible with what the user may say for the *Any Slot* to still be detected, we can make use of a *Lexicon Slot*.

Let's annotate the example sentence from the previous example with a *Lexicon Slot*:

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/anyslot_lexiconannotated.png" width="60%" />
</figure>

Keep in mind that we also need to create and attach a lexicon to the flow to be able to annotate *Lexicon Slots*:

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/anyslot_lexicon.png" width="60%" />
</figure>

As seen in the following examples, the user has more flexibility in wording the sentence:

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/result_thisisanorangejuice.png" width="60%" />
</figure>

Grammatical issues aside, using completely different words than from the training sentence does also work:

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/result_thisisanpinapplehouse.png" width="60%" />
</figure>

### Punctuation

*Any Slots* are insensitive to punctuation. This means that any extra or unexpected punctuation in the input sentence will not influence the *Any Slot* mapping.

See the following input with the same training sentence as the previous examples:

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/result_punctuation.png" width="60%" />
</figure>

### Any Slots from past inputs

*Any Slots* that were found in earlier sentences are applied to the input object of the current sentence, if that sentence contains those slots. For that, the sentence needs not match an intent or a training sentence. This allows for an easier flow of conversation, should a topic from an earlier part arise again in a later part of the conversation.

Let's consider the following training sentences.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/anyslot_past_slots.png" width="60%" />
</figure>

In the following, in the first two inputs the two corresponding *Any Slots* are detected by the agent. The third input does not contain any word to be mapped to a slot. At this point, you can imagine the conversation to be of any length, until the topic of apples and tastiness arises again.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/result_follow_up.png" width="60%" />
</figure>

## Known Issues
There are some edge cases to *Any Slot* matching where seemingly odd behaviors occur that are related to the implementation. These edge cases are listed here for completeness, but should in practice not be of concern. 

### 1. No spaces in input

An input sentence without spaces will be mapped.

<figure>
<img class="image-center" src="../../../../../_assets/ai/empower/nlu/result_anyslotwithoutspaces.png" width="60%" />
</figure>

### 2. Excessive punctuation

Excessive punctuation may cause problems with word mapping.

<figure>
<img class="image-center" src="../../../../../_assets/ai/empower/nlu/result_excessivepunctuation.png" width="60%" />
</figure>

### 3. Conflicting training sentences 

Conflicting training sentences may yield undesired results. Notice the same beginning of both training sentences below. The Any Slot annotation in the second sentence will override that of the first sentence.

<figure>
<img class="image-center" src="../../../../../_assets/ai/empower/nlu/anyslot_conflicts.png" width="60%" />
</figure>
<figure>
<img class="image-center" src="../../../../../_assets/ai/empower/nlu/anyslot_result_conflicts.png" width="60%" />
</figure>

Bear in mind that this might also happen when Any Slots are used in combination with Lexicon Slots, System Slots, or other Any Slots. If you are planning to make excessive use of slot matching in your agent, particular care must be taken to ensure that multiple annotated training sentences of the same or multiple intents will not conflict each other.

This behavior may be adjusted by configuring Any Slot matching on system level for customers using Cognigy On-Premises. Two additional options to the default option are available:

| <nobr>Any Slot Return Mode</nobr> | Description |
|-|-|
| Default | The above behavior occurs |
| All | All possible Any Slot matches are returned. In the above example that is both `fruit` and `car_brand`. |
| Exact | Any Slot matches which sentence structures exactly match the input sentence's structure are returned. In the above example that is only `fruit`. |


### 4. Leading and trailing spaces

You should take particular care to avoid leading and trailing spaces within Any Slot annotations. They can quickly creep in with a slip of the mouse and cause undesirable slot mapping results. 

<figure>
<img class="image-center" src="../../../../../_assets/ai/empower/nlu/4_in.png" width="60%" />
</figure>
<figure>
<img class="image-center" src="../../../../../_assets/ai/empower/nlu/4_out.png" width="60%" />
</figure>

### 5. Consecutive Any Slot annotations

Using multiple Any Slot annotations right after each other may cause problems. Make sure to put at least one word or character between two consecutive Any Slot annotations.

The following will not work as expected:

<figure>
<img class="image-center" src="../../../../../_assets/ai/empower/nlu/5_wrong_in.png" width="60%" />
</figure>
<figure>
<img class="image-center" src="../../../../../_assets/ai/empower/nlu/5_wrong_out.png" width="60%" />
</figure>

The following will work:

<figure>
<img class="image-center" src="../../../../../_assets/ai/empower/nlu/5_right_in.png" width="60%" />
</figure>
<figure>
<img class="image-center" src="../../../../../_assets/ai/empower/nlu/5_right_out.png" width="60%" />
</figure>

### 6. Multiple words as Any Slot annotations

Using multiple words in Any Slot annotations may yield undesired results. Any Slot matching works best when using annotations that contain only a single word. Bear in mind that this does not limit you in detecting multi-word Any Slots. It is rather the other way around: Annotations of Any Slots with multiple words limit you from detecting single-word Any Slots.

Wrong:
<figure>
<img class="image-center" src="../../../../../_assets/ai/empower/nlu/6_wrong_in.png" width="60%" />
</figure>
<figure>
<img class="image-center" src="../../../../../_assets/ai/empower/nlu/6_wrong_out.png" width="60%" />
</figure>

Right:
<figure>
<img class="image-center" src="../../../../../_assets/ai/empower/nlu/5_right_in.png" width="60%" />
</figure>
<figure>
<img class="image-center" src="../../../../../_assets/ai/empower/nlu/5_right_out.png" width="60%" />
</figure>
