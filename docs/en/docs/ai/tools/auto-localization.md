---
title: "Auto-translation" 
slug: "auto-localization" 
hidden: false 
---

# Automatic Translation

Cognigy has integrated _automatic translation_ capabilities to streamline the process of customizing flows and intents for various locales. This feature can be beneficial for those who are looking to provide multilingual support without the need for manual translations.

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

1. Open the Cognigy.AI interface.
2. In the left-side menu, select an Agent.
3. In the left-side **Agent** menu, select **Manage > Settings**.
4. In the **Translation settings** section, select one of the following providers:

    === "Microsoft Translator"
        - **Translation Provider API Key** — enter your unique API key provided by Microsoft Translator. It's necessary for authentication and allows you to access translation services.
        - **Request Retriers** — specify how often Cognigy should attempt to call the translation provider if an error occurs during the initial request. For example, if you set it to `3`, Cognigy will try three times before giving up on a translation request.
        - **Request Timeout** — determine how long Cognigy should wait for a response from the translation provider after making a request, measured in milliseconds. If the provider doesn't respond within this time frame, it's considered a timeout.
        - **Sentence Cache Expiry Timeout** — determine how long translations should be kept in the cache before they are considered outdated and removed. The default value is 84,600 seconds, which is equivalent to 1 day.
        - **Custom API Base URL** — this setting is optional. If you have specific requirements or need to connect to a custom instance of the Microsoft Translator API, you can use this field to specify a custom base URL. It allows you to define the URL, including the protocol scheme, for example `https://api-eur.cognitive.microsofttranslator.com`, to tailor the API connection to your needs.

    === "Google Cloud Translation"
        - **Translation Provider API Key** — enter your unique API key provided by Google Cloud Translation. It's necessary for authentication and allows you to access translation services.
        - **Request Retriers** - specify how often Cognigy should attempt to call the translation provider if an error occurs during the initial request. For example, if you set it to `3`, Cognigy will try three times before giving up on a translation request.
        - **Request Timeout** - determine how long Cognigy should wait for a response from the translation provider after making a request, measured in milliseconds. If the provider doesn't respond within this time frame, it's considered a timeout.
        - **Sentence Cache Expiry Timeout** - determine how long translations should be kept in the cache before they are considered outdated and removed. The default value is 84,600 seconds, which is equivalent to 1 day.
        - **Custom API Base URL** - this setting is optional. If you have specific requirements or need to connect to a custom instance of the Microsoft Translator API, you can use this field to specify a custom base URL. It allows you to define the URL, including the protocol scheme, for example [api-eur.cognitive.microsofttranslator.com)](https://api-eur.cognitive.microsofttranslator.com), to tailor the API connection to your needs.

    === "DeepL Translate Pro"
        - **Translation Provider API Key** - enter your unique API key provided by DeepL Translate Pro. It's necessary for authentication and allows you to access translation services.
        - **Request Retriers** - specify how often Cognigy should attempt to call the translation provider if an error occurs during the initial request. For example, if you set it to `3`, Cognigy will try three times before giving up on a translation request.
        - **Request Timeout** - determine how long Cognigy should wait for a response from the translation provider after making a request, measured in milliseconds. If the provider doesn't respond within this time frame, it's considered a timeout.
        - **Sentence Cache Expiry Timeout** - determine how long translations should be kept in the cache before they are considered outdated and removed. The default value is 84,600 seconds, which is equivalent to 1 day.
        - **Custom API Base URL** - this setting is optional. If you have specific requirements or need to connect to a custom instance of the Microsoft Translator API, you can use this field to specify a custom base URL. It allows you to define the URL, including the protocol scheme, for example [api-eur.cognitive.microsofttranslator.com)](https://api-eur.cognitive.microsofttranslator.com), to tailor the API connection to your needs.

5. Click **Save**.

## Add a Locale

{! _includes/ai/localization/add-locales.md !}

## Machine Translation for Flow Localization

In a Flow, you can change languages, localize Flow Nodes and Intents.

### Machine Translation for Node Localization

Localized Nodes are in color, while non-localized ones are grayed out. Within the Flow, you can set up multiple localizations, with fallback layers for locales without content.

You are required to manually localize Node settings using the Node editor.

To localize Nodes using machine translation, follow these steps:

1. Open now your Flow in which you want to localize Nodes. 
2. Select the locale with not translated Nodes. 
3. Click a Node and select **Add Localization**. 
4. Select **Add Translated Localization**. 
5. Define the source locale for your translation by selecting a language from the **Locale to Translate from** field. 
6. Define the target language for translation by selecting a language from the **Language to Translate to** list. 
7. Click **Confirm**. 

The Node will be translated automatically. In the Node editor, make sure to review the translated fields, paying particular attention to Cognigy.Script, which should remain untranslated.

You can configure the machine translation settings for all types of text output Nodes, including Say, Question, and other Node types.

### Machine Translation for Intent Localization

To localize a set of Intents using machine translation, follow these steps:

1. In the Flow editor, select NLU in the upper-right corner.
2. On the **Intents** tab, select an Intent that you want to translate.
3. On the Intent page, click **Add Localization > Add Translated Localization**
4. From the **Locale to Translate from** list, select a locale to indicate the source locale for your translation. 
5. From the **Language to Translate from** list, select the language of the content you are translating.
6. From the **Language to Translate to** list, select the language into which you want the content to be translated. 
7. Click **Confirm**.

Intent example sentences will be translated automatically.

### Multi-Intent Localization

To localize all Intents within your Flow using machine translation, follow these steps:

1. In the Flow editor, select NLU in the upper-right corner.
2. On the **Intents** tab, on the right side of the **+ Create Intent** button, click ![vertical-ellipsis](https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg) **> Add Localisations to all Intents**.
3. In the **Add Localizations to all Intents** window, select **Auto-Translate from another locale**.
4. From the **Locale to Translate from** list, select a locale to indicate the source locale for your translation.
5. From the **Language to Translate from** list, select the language of the content you are translating.
6. From the **Language to Translate to** list, select the language into which you want the content to be translated.
7. _(Optional)_ Activate the **Overwrite already localized Intents** setting to apply changes to all existing intents within the current Flow locale.
8. Click **Confirm**.

This process ensures that all Intents are automatically translated.

## More information

- [Localization](../resources/manage/localization.md)