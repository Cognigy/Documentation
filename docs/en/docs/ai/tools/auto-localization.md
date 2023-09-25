---
title: "Auto-translation" 
slug: "auto-localization" 
hidden: false 
---

# Automatic Translation

Cognigy lets users adapt Flows and Intent models easily by adding fallbacks, auto-translation, and locale-specific variations.

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

!!! tip "Advanced Translation"
    In contrast to cost-intensive manual translation, Cognigy multilingual language translation feature removes the bottleneck of restriction on a primary and secondary locale as we can find in many business solutions.

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
        - **Custom API Base URL** — this setting is optional. If you have specific requirements or need to connect to a custom instance of the Microsoft Translator API, you can use this field to specify a custom base URL. It allows you to define the URL, including the protocol scheme, for example [api-eur.cognitive.microsofttranslator.com)](https://api-eur.cognitive.microsofttranslator.com), to tailor the API connection to your needs.

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

## Localization

Cognigy virtual agents are the default in English. When necessary, you can customize your Flow language to suit your needs.

To create a locale, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu, select an Agent.
3. In the left-side **Agent** menu, select **Manage > Localization**.
4. Click **+ Create new Locale**.
5. In the **Name** field, enter a unique name of the locale. This name will be displayed in the Flow.
6. From the **NlU Language** list, select a language for your locale.
7. From the **Fallback Locale** list, select a locale that will be used ad default when a specific language is not available.
8. Click **Save & Build**.

## Machine Translation of Nodes and Intents

In a Flow, you can change languages, localize Flow Nodes and Intents.

### Node Localization

Localized Nodes are in color, while non-localized ones are grayed out. Within the Flow, you can set up multiple localizations, with fallback layers for locales without content.

You are required to manually localize Node settings using the Node editor.

To localize Nodes using machine translation, follow these steps:

1. Open now your Flow in which you want to localize Nodes. 
2. Select the locale with not translated Nodes. 
3. Click a Node and select **Add Localization**. 
4. Select **Add Translated Localization**. 
5. Select **Locale to Translate from** to define the Locale that you want to base your translation on.
6. Define **Language to Translate from** and **Language to Translate to**. 
7. Click **Confirm**.

The Node will be fully translated automatically. 

You can configure the machine translation settings for all types of text output Nodes,
such as Say, Question, and other Nodes.


## Intent Localozation

You can localize Intents as well using machine translation, and all the example sentences will be translated automatically.

To localize Intents using machine translation, follow these steps:

1. On the Flow, gp to the Intent configuration and configure the **Translation Settings**.
2. Select in the **Localization** drop-down menu the language you intend to translate (for example, from en-US to ger-DE). 
3. Click **Add Localization**. 
4. Click **Add Translated Location** to configure translation details. 
5. Select **Language to Translate from** and **Language to Translate to**, then **Confirm** the settings.

All Intent example sentences will now be translated automatically.

## Bulk-Localization of Intents

Cognigy.AI offers a **bulk-localization** feature for virtual agents that utilize multiple Intents, enhancing the efficiency of translation.

To set this up, access the secondary actions menu (three dots) and select **Auto-Translate from another locale** to configure translation parameters, just as you would for a single Intent. Then, proceed with confirmation.

This process ensures that all Intents are automatically translated.

## More information

- [Localization](../resources/manage/localization.md)