---
 title: "Any Slots" 
 slug: "any-slots" 
 hidden: false 
---
# Any Slots

***Any Slots*** are catch-all placeholder slots that allow you to match keyphrases of arbitrary length outside of your Lexicons. If user input matches the placeholder slot exactly it will populate a [Cognigy Slot]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/) with the matched content. The result is the same as if the matched user input had been added to an attached Lexicon as a keyphrase.

To add an Any Slot, simply annotate a single word in your example sentence and select the "Any-Slot" type. Then enter the desired slot name.

An example sentence with ***Any Slot*** "movie_title" such as...

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/d68399d-Screenshot_2021-01-14_at_17.51.31.png" width="60%" />
</figure>

...will dynamically add user input that matches the pattern exactly to the slot *movie_title*:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_gonewiththewind.png" width="60%" />
</figure>

Any input content that matches the pattern of an *Any Slot* in your example sentences exactly will be populated as a new Cognigy Slot. The result will be the same as if you had populated a Lexicon with the tag of your placeholder *Any Slot* and a keyphrase identical to the matched user input.

???+ info "Limitations"
    - Works best when only a single word is annotated
    - Up to 4 different *Any Slots* per sentence
    - Up to 500 example sentences with *Any Slots* per Flow
    - Example sentences with *Any Slots* must be less than 400 characters long
    - Any Slot patterns are interpreted exact matching and will always trigger a 1 score on the intent. Lexicon Synonyms or [Annotations]({{config.site_url}}ai/nlu/nlu-overview/annotations/) are treated synonymous for the purpose of matching.

## Examples

### Any Slot at the end of a sentence

Consider the following example:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/anyslot_thisisanorange.png" width="60%" />
</figure>

This will dynamically add user input that matches the pattern exactly to the slot *fruit*:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_thisisanapple.png" width="60%" />
</figure>

Note that because the *Any Slot* annotation is located at the very end of the training sentence, any number of words after *"This is an"* will be matched to the slot *fruit*:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_thisisanappletree.png" width="60%" />
</figure>

This is by design and does not seem to make sense for this specific example. However, consider the example above with the sentence *"Who is the director of Titanic"*, where the *Any Slot* would be matched with any movie title, also titles including spaces.

### Any Slot in the middle of a sentence

Lets "fix" the issue we discovered above by adjusting the example sentence a little bit:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/anyslot_thisisanorangetree.png" width="60%" />
</figure>

We placed the *Any Slot* annotation in the middle of a sentence. Now, the word of an input sentence that has exactly the structure of the training sentence will be mapped to the slot *fruit*:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_thisisanappletree2.png" width="60%" />
</figure>

Grammatical issues aside, using multiple words does also work:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_thisisankiwifruittree.png" width="60%" />
</figure>

### Any Slot in combination with Lexicon Slot

When using *Any Slots*, we rely on the user to use the exact word structure of that sentence. To remain rather flexible with what the user may say for the *Any Slot* to still be detected, we can make use of a *Lexicon Slot*.

Lets annotate the example sentence from the previous example with a *Lexicon Slot*:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/anyslot_lexiconannotated.png" width="60%" />
</figure>

Keep in mind that we also need to create and attach a lexicon to the flow to be able to annotate *Lexicon Slots*:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/anyslot_lexicon.png" width="60%" />
</figure>

As seen in the following examples, the user has more flexibility in wording the sentence:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_thisisanorangejuice.png" width="60%" />
</figure>

Grammatical issues aside, using completely different words than from the training sentence does also work:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_thisisanpinapplehouse.png" width="60%" />
</figure>

### Punctuation

*Any Slots* are insensitive to punctuation. That means that any extra or unexpected punctuation in the input sentence will not influence the *Any Slot* mapping.

See the following input with the same training sentence as the previous examples:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_punctuation.png" width="60%" />
</figure>

### Any Slots from past inputs

*Any Slots* that were found in earlier sentences are applied to the input object of the current sentence, if that sentence contains those slots. For that, the sentence needs not match an intent or a training sentence. This allows for an easier flow of conversation, should a topic from an earlier part arise again in a later part of the conversation.

Lets consider the following training sentences.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/anyslot_past_slots.png" width="60%" />
</figure>

In the following, in the first two inputs the two corresponding *Any Slots* are detected by the agent. The third input does not contain any word to be mapped to a slot. At this point, you can imagine the conversation to be of any length, until the topic of apples and tastiness arises again.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_follow_up.png" width="60%" />
</figure>

## Known Issues
There are some edge cases to *Any Slot* matching where seemingly odd behaviors occur that are related to the implementation. These edge cases are listed here for completeness, but should in practice not be of concern. 

- An input sentence without spaces will be mapped.
<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/result_anyslotwithoutspaces.png" width="60%" />
</figure>

- Excessive punctuation may cause problems with word mapping.
<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/result_excessivepunctuation.png" width="60%" />
</figure>

- Conflicting training sentences may yield undesired results. Bear in mind that this might also happen when Any Slots are used in combination with Lexicon Slots, System Slots, or other Any Slots. If you are planning to make excessive use of slot matching in your agent, particular care must be taken to ensure that multiple annotated training sentences of the same or multiple intents will not conflict each other.
<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/anyslot_conflicts.png" width="60%" />
</figure>
<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/anyslot_result_conflicts.png" width="60%" />
</figure>