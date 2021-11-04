---
 title: "Any Slots" 
 slug: "any-slots" 
 hidden: false 
---
# Any Slots

***Any Slots*** are catch-all placeholder slots that allow you to match keyphrases of arbitrary length outside of your Lexicons. If user input matches the placeholder slot exactly it will populate a [Cognigy Slot]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/) with the matched content. The result is the same as if the matched user input had been added to an attached Lexicon as a keyphrase.

To add an Any Slot, simply annotate a word in your example sentence and select the "Any-Slot" type. Then enter the desired slot name.

An example sentence with ***Any Slot*** "movie_title" such as...

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/d68399d-Screenshot_2021-01-14_at_17.51.31.png" width="60%" />
</figure>

...will dynamically add user input that matches the pattern exactly to the slot *movie_title*:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/5499159-Screenshot_2021-01-14_at_17.51.50.png" width="70%" />
</figure>

Any input content that matches the pattern of an *Any Slot* in your example sentences exactly will be populated as a new Cognigy Slot. The result will be the same as if you had populated a Lexicon with the tag of your placeholder *Any Slot* and a keyphrase identical to the matched user input.

???+ info "Limitations"
    - Up to 4 different *Any Slots* per sentence
    - Up to 500 example sentences with *Any Slots* per Flow
    - Example sentences with *Any Slots* must be less than 400 characters long
    - Any Slot patterns are interpreted exact matching and will always trigger a 1 score on the intent. Lexicon Synonyms or [Annotations]({{config.site_url}}ai/nlu/nlu-overview/annotations/) are treated synonymous for the purpose of matching.