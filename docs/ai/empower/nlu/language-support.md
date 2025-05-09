---
title: "NLU Languages" 
slug: "language-support" 
description: "Cognigy NLU is pre-trained with data from over 100 languages to accurately recognize Intents and detect Slots."
hidden: false
tags:
  - nlu languages
  - language support
  - universal locale
---

# NLU Languages

_NLU Languages_ refer to the languages supported by Cognigy NLU. It supports over 100 languages,
enabling the processing of user inputs to identify [Intents](intents/overview.md) and extract Slots.
Cognigy NLU can accurately detect user intentions and capture specific information,
adapting to the distinct characteristics and nuances of each supported language.

For instance, Cognigy NLU automatically adjusts to language-specific conventions,
such as varying date formats or currency symbols, based on the user language.
This flexibility eliminates manual adjustments, making it a powerful tool for creating multilingual AI Agents.

## Language Support in Cognigy Installations

The process for installing languages depends on your installation type:

- **Shared SaaS**. On `trial`, `app`, and `au-02`, you already have access to a preinstalled list of supported languages. However, if you're on `app-us` and `app-uk` and want to add a language other than English or German, contact [Cognigy technical support](../../../help/get-help.md).
- **Dedicated SaaS**. To extend the initial list of supported languages, contact [Cognigy technical support](../../../help/get-help.md).
- **On-Premises**. To add languages to your environment, refer to the [Which Languages to Deploy](../../installation/migration/from-nlu-v1-to-v2-migration.md#choose-which-languages-to-deploy) section.

## List of Supported Languages

In your Project, under **Manage > Localization**,
you can select from 28 popular NLU languages and the **Universal** Locale,
which is designed for multilingual support. 

??? info "List of Supported Languages in the UI"
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
    * Portuguese (Brazil)
    * Portuguese
    * Russian
    * Spanish
    * Swedish
    * Tamil
    * Thai
    * Turkish
    * Vietnamese

### Universal Locale

The _Universal Locale_ supports key features such as Intent detection, Slot extraction, and language-specific processing.

This Locale enables Intent mapping in any language.
Combined with Slot detection and [Intent rules](intents/rules.md), the Universal Locale helps you create Flows that work across multiple languages.

??? info "Universal Locale"
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

#### Restrictions

The Universal Locale enables Intent mapping across languages but works best with space-tokenized languages like English,
where spaces separate words.
For example, Keyphrase detection uses spaces `(" ")` to identify words or phrases.
This distinction is important because languages like Chinese, Japanese, and Thai don't use spaces, which can affect the accuracy of Keyphrase detection.

## Yes/No Intents and Confirmation Words

To ensure Question Nodes function correctly, Cognigy NLU must recognize words that indicate positive or negative confirmations.
This recognition is predefined for some languages. For example, with the English Locale, the Question Node recognizes `yes` as a positive confirmation and `no` as a negative confirmation.
For the Universal Locale feature, you must define these confirmations using [Yes/No](intents/yes-no-intents.md) Intents or confirmation words.
Otherwise, the AI Agent won't recognize confirmations in other languages.

## Rules

[Rules](intents/overview.md) allow you to define custom conditions using [CognigyScript](../../build/cognigyscript.md) to determine whether an Intent is triggered.
For example, you can create a rule `input.slots.food[0].keyphrase === "pizza"`, meaning that the Intent will be triggered whenever the user mentions the word `pizza`.

## More Information

- [Intents](overview.md)