---
 title: "Language Support" 
 slug: "language-support" 
 hidden: false 
---
# Language Support

## Overview of Supported Languages

Cognigy.AI's on-board NLU is pre-trained with curated data from over 100 languages to support intent recognition and keyphrase detection. Any other natural (or artificial) language is supported based on language-agnostic NLU algorithms.
 
For 28 of the most common languages, Cognigy.AI provides prebuilt entities that allow automatic processing of inputs like dates, currencies and others specific to a language that is defined in the Flow.

* Universal (see below)
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

## Language Support in Different Environments

The process of installing languages varies depending on the type of environment you are using:

- **Shared SaaS**. On `trial`, `app`, and `au-02`, you already have access to a preinstalled list of supported languages. However, if you're on `app-us` and `app-uk` and want to add a language other than English or German, contact [Cognigy technical support](../../../help/get-help.md).
- **Dedicated SaaS**. To extend the initial list of supported languages, contact [Cognigy technical support](../../../help/get-help.md).
- **On-premises**. To add languages to your environment, refer to the installation [guide](../../installation/migration/from-nlu-v1-to-v2-migration.md#choose-which-languages-to-deploy).

## Universal Language

The Universal Language option extends the Cognigy NLU’s compatibility with over 100 languages by employing advanced multilingual machine learning models. The languages supported include:

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
* Serbian
* Sicilian
* Slovak
* Slovenian
* Spanish
* Sundanese
* Swedish
* Tamil
* Thai
* Turkish
* Ukrainian
* Urdu
* Uzbek
* Vietnamese
* Laotian 
* Sinhalese
* and more

The Universal Language allows you to use Intent mapping in any language which, along with Keyphrase detection and our powerful Rule Intent Engine, enables you to build Flows in any language.

### Description
The Universal Language uses multilingual NLU algorithms and models. This must be qualified to include only space-tokenized languages such as English for full support. E.g., keyphrase detection uses spaces " " as a delimiter. Intent mapping works across tokenization schemes but also benefits from space-tokenized languages.

### Rule Intents with the Universal Language
A powerful and useful way to use the Universal Language is by using Rule Intents. These Intents let you define custom rules using CognigyScript that will decide whether the Intent is triggered. You can create a rule like `input.slots.food[0].keyphrase === "pizza"`.


Which means that as soon as the user mentions the word pizza, this Intent will be triggered. For more information on how to use these Intents, go [here](intents/rule-intents.md).

### Adding Positive and Negative Confirmation Words
For our askYNQuestion Nodes to work, we need to know which words are positive confirmations, and which words are negative confirmations. For instance, if you use English as a language, then we know that if the user answers "yes", then we will trigger the onYes part of the askYNQuestion Node. However, since you are essentially using any language by using the Universal language, we don't have this information. You, therefore, need to open the FlowProperties panel in your Flow and navigate to settings. Here are two settings called "Additional confirmation words" and "Additional negative confirmation words". The first one is a list of words that should trigger the onYes part of an askYNQuestion Node, whereas the second one is a list of words that should trigger the onNo part of an askYNQuestion Node. You simply write each variation into a new row. You can also use these to extend the confirmation words for other languages.