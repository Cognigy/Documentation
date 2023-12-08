---
title: "Auto-translation" 
slug: "auto-localization" 
hidden: false 
---

# Automatic Translation

Cognigy has integrated _automatic translation_ capabilities
to streamline the process of customizing Flows and Intents for various locales.
This feature is helpful for users who need multilingual support without the need for manual translations.

Cognigy.AI is compatible with the following machine translation providers:

- Microsoft Translator
    - Microsoft Azure Cognitive Services Translator[^*]
- Google Cloud Translation
- DeepL Translation Pro

[^*]: To use **Azure Cognitive Services Translator** you must select Microsoft Translator in Settings > Translation Settings

These providers offer several valuable benefits:

- **Freedom of Language Choice**. You have the flexibility to choose your preferred translation language.
- **Supervised or Automatic Translation**. Translation can be performed manually under your supervision or set to work automatically, depending on your needs.
- **Voice-Ready Translation**. Our translation capabilities are equipped to handle all modes, making them voice-ready and adaptable to various communication methods.

## Add a Machine Translation Provider

{! _includes/ai/settings/add-machine-translation-provider.md !}

## Add a Locale

{! _includes/ai/localization/add-locales.md !}

## Machine Translation for Flow Localization

In a Flow, you can change languages, localize Flow Nodes and Intents.

{! _includes/ai/localization/switch-a-locale.md !}

### Machine Translation for Node Localization

[![Version badge](https://img.shields.io/badge/Updated in-v4.61-blue.svg)](../../release-notes/4.61.md)

Localized Nodes are in color, while non-localized ones are greyed out. Within the Flow, you can set up multiple localizations, with fallback layers for locales without content.

You can configure the machine translation settings for all types of text output Nodes, including Say, Question, and other Node types.

To localize a Node using machine translation, follow these steps:

1. Open now your Flow in which you want to localize Nodes. 
2. Select the locale with untranslated Nodes. 
3. Click a Node and select **Add Localization**. 
4. Select **Add Translated Localization**. 
5. Define the source locale for your translation by selecting a language from the **Locale to Translate from** list. 
6. Define the target language for translation by selecting a language from the **Language to Translate to** list. 
7. Click **Confirm**. 

The Node will be translated automatically.
In the Node editor, make sure to review the translated fields,
paying attention to [Tokens](../resources/manage/tokens.md) and [Cognigy.Script](../tools/cognigy-script.md), which should remain untranslated.

### Machine Translation for Intent Localization

To localize an Intent using machine translation, follow these steps:

1. In the upper-right corner of the Flow editor, select **NLU**.
2. On the **Intents** tab, select an Intent that you want to translate.
3. On the **Intent** page, click **Add Localization > Add Translated Localization**.
4. From the **Locale to Translate from** list, select a locale to indicate the source locale for your translation. 
5. From the **Language to Translate from** list, select the language of the content you are translating.
6. From the **Language to Translate to** list, select the language into which you want the content to be translated. 
7. Click **Confirm**.

Intent example sentences will be translated automatically.

### Machine Translation for Multi-Intent Localization

To localize all Intents within your Flow using machine translation, follow these steps:

1. In the upper-right corner of the Flow editor, select **NLU**.
2. On the **Intents** tab, on the right side of the **+ Create Intent** button, click ![vertical-ellipsis](https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg) **> Add Localisations to all Intents**.
3. In the **Add Localizations to all Intents** window, select **Auto-Translate from another locale**.
4. From the **Locale to Translate from** list, select a locale to indicate the source locale for your translation.
5. From the **Language to Translate from** list, select the language of the content you are translating.
6. From the **Language to Translate to** list, select the language into which you want the content to be translated.
7. _(Optional)_ Activate the **Overwrite already localized Intents** setting to apply changes to all existing Intents within the current Flow locale.
8. Click **Confirm**.

This process ensures that all Intents are automatically translated.

## More Information

- [Localization](../resources/manage/localization.md)
- [Switch Locale Node](../flow-nodes/logic/switch-locale.md)