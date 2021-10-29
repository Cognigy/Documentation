---
 title: "Language Support" 
 slug: "language-support" 
 hidden: false 
---
# Language Support

## Overview of supported Languages
<div class="divider"></div>

Cognigy.AI's on-board NLU is pre-trained with curated data from over 100 languages to support intent recognition and keyphrase detection. Any other natural (or artificial) language is supported based on language-agnostic NLU algorithms.
 
For 23 of the most common languages, Cognigy.AI provides prebuilt entities that allow automatic processing of inputs like dates, currencies and others specific to a language that is defined in the flow.

* Generic (see below)
* Arabic
* Bengali
* Chinese (simplified)
* Danish
* Dutch
* English (Australia)
* English (Canada)
* English (India)
* English (UK)
* English (US)
* German
* Hindi
* Japanese
* Korean
* Finnish
* French
* Italian
* Norwegian
* Polish
* Portuguese - Brazil
* Portuguese
* Russian
* Spanish
* Swedish
* Tamil
* Thai
* Turkish
* Vietnamese


## Generic Language
<div class="divider"></div>

The Generic language option extends the Cognigy NLU’s compatibility with over 100 languages by employing an advanced multi-lingual machine learning models. The languages supported include:

* Afrikaans
* Albanian
* Arabic
* Azerbaijani
* Bahasa Indonesia
* Bahasa Melayu
* Belarusian
* Bengali
* Bosnian
* Bulgarian
* Catalan
* Chinese (Traditional / Cantonese)
* Croatian
* Czech
* Danish
* Dutch
* English
* Estonian
* Finnish
* French
* Georgian
* German
* Greek
* Gujarati
* Haitian
* Hebrew
* Hindi
* Hungarian
* Icelandic
* Indonesian
* Irish
* Italian
* Japanese
* Kazakh
* Korean
* Latin
* Latvian
* Lithuanian
* Macedonian
* Malay
* Norwegian
* Persian (Farsi)
* Polish
* Portuguese
* Punjabi
* Romanian
* Russian
* Serbian Sicilian
* Slovak
* Slovenian
* Spanish
* Sundanese
* Swedish
* Tamil
* Thai
* Turkish
* Ukrainian
* Uzbek
* Vietnamese
* Laothian 
* Sinhalese
* and more

The Generic Language allows you to do Intent mapping in any language which, along with Keyphrase detection and our powerful Rule Intent Engine, enables you to build Flows in any language.

### Description
The Generic Language uses multi-lingual NLU algorithms and models. This must be qualified to include only space-tokenized languages such as English for full support. E.g., keyphrase detection uses spaces " " as a delimiter. Intent mapping works across tokenization schemes but also benefits from space-tokenized languages.

### Rule Intents with the Generic Language
A powerful and useful way to use the Generic Language is by using Rule Intents. These Intents lets you define custom rules using CognigyScript that will decide whether the Intent is triggered. You can thereby have a rule like this:

* input.slots.food[0].keyphrase === "pizza"

Which means that as soon as the user mentions the word pizza, this Intent will be triggered. For more information on how to use these Intents, please go [here]({{config.site_url}}ai/nlu/nlu-overview/overview/#rules).

### Adding positive and negative confirmation words
For our askYNQuestion Nodes to work, we need to know which words are positive confirmations, and which words are negative confirmations. For instance, if you use English as a language, then we know that if the user answers "yes", then we will trigger the onYes part of the askYNQuestion Node. However, since you are essentially using any language by using the Generic language, we don't have this information. You, therefore, need to open the FlowProperties panel in your Flow and navigate to settings. Here are two settings called "Additional confirmation words" and "Additional negative confirmation words". The first one is a list of words that should trigger the onYes part of an askYNQuestion Node, whereas the second one is a list of words that should trigger the onNo part of an askYNQuestion Node. You simply write each variation into a new row. You can also use these to extend the confirmation words for other languages.