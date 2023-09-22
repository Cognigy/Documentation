---
title: "Auto-translation" 
slug: "auto-localization" 
hidden: false 
---

# Automatic Translation

Cognigy offers a comprehensive auto-translation solution to address the challenges associated with limited service capabilities.

Cognigy utilizes a powerful Natural Language Understanding (NLU) system capable of supporting more than 100 [languages](../nlu/language-support.md). It also employs a [universal model](../nlu/language-support.md#universal-language) to extend support to additional languages.

Regarding [localization](../resources/manage/localization.md), Cognigy enables users to customize Flows and Intent models with fallback options, perform partial translations, and implement locale-specific variations.

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
        - **Translation Provider API Key** - enter your unique API key provided by Microsoft Translator. It's necessary for authentication and allows you to access translation services.
        - **Request Retriers** - specify how often Cognigy should attempt to call the translation provider if an error occurs during the initial request. For example, if you set it to `3`, Cognigy will try three times before giving up on a translation request.
        - **Request Timeout** - determine how long Cognigy should wait for a response from the translation provider after making a request, measured in milliseconds. If the provider doesn't respond within this time frame, it's considered a timeout.
        - **Sentence Cache Expiry Timeout** - determine how long translations should be kept in the cache before they are considered outdated and removed. The default value is 84,600 seconds, which is equivalent to 1 day.
        - **Custom API Base URL** - this setting is optional. If you have specific requirements or need to connect to a custom instance of the Microsoft Translator API, you can use this field to specify a custom base URL. It allows you to define the URL, including the protocol scheme, for example [api-eur.cognitive.microsofttranslator.com)](https://api-eur.cognitive.microsofttranslator.com), to tailor the API connection to your needs.

    === "Google Cloud Translation"
        - **Translation Provider API Key** - enter your unique API key provided by Google Cloud Translation. It's necessary for authentication and allows you to access translation services.
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

### Use Case for Translation

- Localize existing content (works for contents, but it also works for machine learning models)
 
  - Manual Translation
  - Machine Translation

## Localization

<div class="divider"></div>

Cognigy Virtual Agent is the default in English. When required, you can localize your Flow language.

To have another locale Cognigy.AI provides [localization](../resources/manage/localization.md) to create a localized Virtual Agent. 

The localization option you can find in the sidebar when clicking **Manage**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/cb4ab14-Create_new_locale_2.svg" width="100%" />
  <figcaption>Create new Locale</figcaption>
</figure>

To select a new language and a fallback language (US-eng), click [+ Create new Locale](../resources/manage/localization.md#adding-a-locale-to-a-node),

When returning to the Flow, you can change the language and localize the Flow Nodes.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/2923252-Switch_Locale_example_2_350.svg" width="100%" />
  <figcaption>Switch Locale</figcaption>
</figure>

You can see which Nodes have already been localized (localized Nodes: colored; non localized are black and white-colored.

The Localization view allows for the configuration of any number of localizations. The system works with fallback layers, meaning that a locale that has not any content configured, will fall back to another locale that has.

**You need to localize the Node settings manually using the Node editor.**

!!! note "Node Localization"
    To localize Nodes in your Flow see details here: [Localization]({{config.site_url}}ai/resources/manage/localization/)

## Machine Translation of Nodes and Intents

Since Release 4.10.0 Cognigy.AI provides machine translation of Nodes and Intents to perform the localization of your Virtual Agent even more efficiently than with manual localization. 

In order to enable machine translation, you need to configure the **Translation Settings** of your Virtual Agent.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/Agent_Settings_Translation.png" width="100%" />
  <figcaption>Agent Settings</figcaption>
</figure>

- Open the "Manage" - "Settings" menu using the Cognigy.AI sidebar.

- Go to section **Translation Settings**.

- Select a Translation Provider (for example Microsoft Translator).

- Enter the API key for the selected provider. The required API keys of available translation providers you can find here: [API keys Translation Provider]({{config.site_url}}ai/resources/manage/localization/#translation-settings/).
   
As soon as you have configured a translation provider you will get extra configuration options in the "Agent Settings" section:

- Define **ReQuest Retries**.

- Define **Request Timeout**.

- Define **Sentence Cache Expiry Timeout**.

- Optionally define **Custom API Base URL**.

!!! note "Translation Settings"
    **Details on how to configure the translation settings can be found here: [Translation Settings]({{config.site_url}}ai/resources/manage/localization/#translation-settings)** 

# Localization of Nodes

- Open now your Flow in which you want to localize Nodes.

- Select the Locale with not translated Nodes. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/a309eba-Localization_4.svg" width="100%" />
  <figcaption>Select locale</figcaption>
</figure>


- Click on a Node and select **Add Localization**.
- Select **Add Translated Localization**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/45feaed-Add_Localization.svg" width="100%" />
  <figcaption>"Add Localization" menu for Nodes</figcaption>
</figure>

- Select  **Locale to Translate from** (define the Locale that you want to base your translation on).
- Define **Language to Translate from**.
- Define **Language to Translate to**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/b2329c8-Add_Localization_2.svg" width="100%" />
  <figcaption>Translation configuration example for Nodes</figcaption>
</figure>

- When you have finished the configuration settings, confirm them at last. The Node will be fully translated automatically. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/7e9799b-Localization_11.svg" width="100%" />
  <figcaption>Flow Nodes automatically translated</figcaption>
</figure>

!!! note
    **You can configure the machine translation settings for all types of "Say Nodes" and "Question Nodes" in the same way.**
    **You can localize Intents as well using machine translation and all the example sentences will be translated automatically.**

## Localization of Intents


When using machine translation for **Intents** go to the "[Intent configuration]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/)" and configure the **Translation Settings** in the same way as for Flow Nodes. 


<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/ffbffdb-Add_localization_Intents_2.svg" width="100%" />
  <figcaption>Intent example</figcaption>
</figure>

- Select in the "Localization" drop-down menu the language you intend to translate (for example from en-US to ger-DE).

- Click on the **Add Localization** button.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/4d46e0f-Add_localization_Intents_4.svg" width="100%" />
  <figcaption>Add Localization options</figcaption>
</figure>

- Click on **Add Translated Location** to configure translation details.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/b2cb9ea-Add_Localization_2.svg" width="100%" />
  <figcaption>Translation configuration example for Intents</figcaption>
</figure>

- Select **Language to Translate from** and **Language to Translate to**, then **Confirm** the settings.

**All Intent example sentences will now be translated automatically.**

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/8b754ee-Add_localization_Intents_9.svg" width="100%" />
  <figcaption>Auto-translated Intent</figcaption>
</figure>

## Bulk-Localization of Intents

For Virtual Agents using multiple Intents Cognigy.AI provides the **bulk-localization** feature for Intents. This way, translation will be even more efficient.

Use the secondary actions menu item (three dots) and select **Auto-Translate from another locale** to configure translation details, as described for a single Intent, and then confirm.

**All Intents will now be translated automatically.** 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/c54cf81-Add_Localisations_to_all_Intents_2.svg" width="100%" />
  <figcaption>Bulk-localization settings</figcaption>
</figure>