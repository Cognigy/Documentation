---
 title: "Auto-translation" 
 slug: "auto-localization" 
 hidden: false 
---
# Auto-translation

[![Version badge](https://img.shields.io/badge/Added in-v4.10.0-blue.svg)]({{config.site_url}})

## Description

<div class="divider"></div>


Conversational AI users primarily focus on a primary and secondary locale due to the following reasons: 

1. Manual effort and high setup cost
2. Slow roll-out and reduced agility
3. Increased complexity

As of Cognigy.AI 4.10.0 Cognigy provides a translation solution to avoid that bottleneck of less service capabilities.


Multilingualism is a first-level concept in Cognigy.AI along with service automation in global setups.

Cognigy works with an NLU system that supports over 100 [**languages**]({{config.site_url}}ai/nlu/language-support/) and uses a [**universal model**]({{config.site_url}}ai/nlu/language-support/#universal-language) to support the other languages.

Cognigy supports [localization]({{config.site_url}}ai/resources/manage/localization/) of Flows, Intent models with fallbacks, partial translation, and locale variations.

With Cognigy.AI 4.10.0 we have integrated machine translation capabilities into the Cognigy.AI platform.

Cognigy's solution is a native integration of leading machine translation providers into the Conversational AI platform: Currently available are three providers, but more will be added.

- Microsoft Translator
- Google Cloud Translation
- DeepL Translation Pro

These providers can be selected in the "Agent Settings" and provide the following advantages:

- Translation language is free of choice
- Translation can be supervised or on autopilot
- Translation is Voice-ready-all modalities are supported 

???+ success "Advanced Translation"
    **In contrast to cost-intensive manual translation, Cognigy's multilingual language translation feature removes the bottleneck of restriction on a primary and secondary locale as we can find in many business solutions.**

### Use Case for Translation

- Localize existing content (works for contents but it also works for machine learning models)
 
  - Manual Translation
  - Machine Translation

## Localization

<div class="divider"></div>


Cognigy's Virtual Agent is the default in English. When required, you can localize your Flow language.

To have another locale Cognigy.AI provides [localization]({{config.site_url}}ai/resources/manage/localization/) to create a localized Virtual Agent. 

The localization option you can find in the sidebar when clicking the "Manage" item.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/cb4ab14-Create_new_locale_2.svg" width="100%" />
  <figcaption>Create new Locale</figcaption>
</figure>

- ["+ Create new Locale"]({{config.site_url}}ai/resources/manage/localization/#adding-a-locale-to-a-node/), select a new language and a fallback language (US-eng).

When going back to the Flow you can now have the option to switch the locale and to localize the Flow Nodes.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/2923252-Switch_Locale_example_2_350.svg" width="100%" />
  <figcaption>Switch Locale</figcaption>
</figure>

You can see which Nodes have already been localized (localized Nodes: colored; non localized are black and white-colored.

The Localization view allows for the configuration of any number of localizations. The system works with fallback layers, meaning that a locale that has not any content configured, will fall back to another locale that has.

**You need to localize the Node settings manually using the Node editor.**

???+ info "Node Localization"
    To localize Nodes in your Flow see details here: [Localization]({{config.site_url}}ai/resources/manage/localization/)

## Machine Translation of Nodes and Intents

<div class="divider"></div>


As of Cognigy.AI 4.10.0 our product provides machine translation of Nodes and Intents to perform the localization of your Virtual Agent even more efficiently than with manual localization. 

In order to enable machine translation, you need to configure the "**Translation Settings**" of your Virtual Agent.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/bc88b5f-Agent_Settings_4.svg" width="100%" />
  <figcaption>Agent Settings</figcaption>
</figure>

- Open the "Manage" - "Settings" menu using the Cognigy.AI sidebar.

- Go to section "**Translation Settings**".

- Select a Translation Provider (for example Microsoft Translator).

- Enter the API key for the selected provider. The required API keys of available translation providers you can find here: [API keys Translation Provider]({{config.site_url}}ai/resources/manage/localization/#translation-settings/).
   
As soon as you have configured a translation provider you will get extra configuration options in the "Agent Settings" section:

- Define "**ReQuest Retries**".

- Define "**Request Timeout**".

- Define "**Sentence Cache Expiry Timeout**".

???+ info "Translation Settings"
    **Details on how to configure the translation settings can be found here: [Translation Settings]({{config.site_url}}ai/resources/manage/localization/#translation-settings)** 

# Localization of Nodes


- Open now your Flow in which you want to localize Nodes.

- Select the Locale with not translated Nodes. 


<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/a309eba-Localization_4.svg" width="100%" />
  <figcaption>Select locale</figcaption>
</figure>


- Click on a Node and select "**Add Localization**".
- Select "**Add Translated Localization**".

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/45feaed-Add_Localization.svg" width="100%" />
  <figcaption>"Add Localization" menu for Nodes</figcaption>
</figure>

- Select  "**Locale to Translate from**" (define the Locale that you want to base your translation on).
- Define "**Language to Translate from**".
- Define "**Language to Translate to**".

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/b2329c8-Add_Localization_2.svg" width="100%" />
  <figcaption>Translation configuration example for Nodes</figcaption>
</figure>

- When you have finished the configuration settings, confirm them at last. The Node will be fully translated automatically. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/7e9799b-Localization_11.svg" width="100%" />
  <figcaption>Flow Nodes automatically translated</figcaption>
</figure>

???+ info "Note"
    **You can configure the machine translation settings for all types of "Say Nodes" and "Question Nodes" in the same way.**
    **You can localize Intents as well using machine translation and all the example sentences will be translated automatically.**

## Localization of Intents


When using machine translation for **Intents** go to the "[Intent configuration]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/)" and configure the "**Translation Settings**" in the same way as for Flow Nodes. 


<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/ffbffdb-Add_localization_Intents_2.svg" width="100%" />
  <figcaption>Intent example</figcaption>
</figure>

- Select in the "Localization" drop-down menu the language you intend to translate (for example from en-US to ger-DE).

- Click on the "**Add Localization**" button.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/4d46e0f-Add_localization_Intents_4.svg" width="100%" />
  <figcaption>Add Localization options</figcaption>
</figure>

- Click on "**Add Translated Location**" to configure translation details.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/b2cb9ea-Add_Localization_2.svg" width="100%" />
  <figcaption>Translation configuration example for Intents</figcaption>
</figure>

- Select "**Language to Translate from**" and "**Language to Translate to**", then "**Confirm**" the settings.

**All Intent example sentences will now be translated automatically.**

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/8b754ee-Add_localization_Intents_9.svg" width="100%" />
  <figcaption>Auto-translated Intent</figcaption>
</figure>

## Bulk-Localization of Intents

For Virtual Agents using multiple Intents Cognigy.AI provides the **bulk-localization** feature for Intents. This way, translation will be even more efficient.

Use the secondary actions menu item (three dots) and select "**Auto-Translate from another locale**" to configure translation details, as described for a single Intent, and then confirm.

**All Intents will now be translated automatically.** 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/c54cf81-Add_Localisations_to_all_Intents_2.svg" width="100%" />
  <figcaption>Bulk-localization settings</figcaption>
</figure>