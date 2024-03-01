---
 title: "Add Lexicon Keyphrase" 
 slug: "add-lexicon-keyphrase" 
 hidden: false 
---
# Add Lexicon Keyphrase

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/nlu/add-lexicon-keyphrase.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

Use the Add Lexicon Keyphrase Node to add new Keyphrases to [Lexicons](../../resources/build/lexicons.md)  from within your Flow using [CognigyScript](../../tools/cognigy-script.md).

## Settings

| Parameter   | Type                         | Description                                   |
|-------------|------------------------------|-----------------------------------------------|
| LexiconName | CognigyScript                | TThe name of the Lexicon you want to update   |
| Keyphrase   | CognigyScript                | The Keyphrase you want to add to the Lexicon  |
| Tags        | String, one tag per line     | Tags you want to attach to the Keyphrase      |
| Synonyms    | String, one synonym per line | Synonyms you want to attach to the Keyphrase. |
