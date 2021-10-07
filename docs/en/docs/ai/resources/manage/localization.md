# Localization

Cognigy.AI features a powerful Localization concept, that allows for customizability combined with content re-use. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/19f8d6a-localization.jpg" width="100%" />
</figure>

The Localization view allows for the configuration of any number of localizations. The system works with fallback layers, meaning that a Locale that has not any content configured, will fallback to another Locale that has.

<br>
[![Version badge](https://img.shields.io/badge/Added in-v4.10.0-blue.svg)](https://shields.io/)

With Cognigy.AI 4.10.0 automatic translation of content such as Nodes / Intents has been added to the Cognigy.AI platform. Cognigy's solution is a native integration of leading machine translation providers into the Conversational AI platform.

???+ info "Automatic Localization"
    More details about automatic localization you will find here: [Automatc Localization]({{config.site_url}}ai/tools/auto-localization/).

### Using localization in Flows

<div class="divider"></div>

Localizations act as groupings of specific content and can be applied in [**Flows**]({{config.site_url}}ai/resources/build/flows/) by using the Localization drop-down functionality.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/c744feb-localization-inflows.jpg" width="100%" />
</figure>

When switching Localization, the Flow will change its appearance. **"Greyed out" Nodes** indicate that they have not been localized yet. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/8c88b22-localization-inflows-compare.jpg" width="100%" />
</figure>

???+ success "Switch Locale during a conversation"
    It is possible to change the locale of a flow during a conversation by using the [Switch Locale]({{config.site_url}}ai/flow-nodes/logic/switch-locale/ node.

### Adding a Locale to a Node

<div class="divider"></div>

When a different Locale is activated in the Flow (by using the drop-down at the top), individual [**Flow Nodes**]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/) can be be overwritten with a specific Locale.

This can be done by click on a specific Node and then selecting **Add Localization** at the top of a Node. As soon as a localization has been added, the Node will be colored again in the Flow Chat, indicating that a localization has taken place.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/a6dac29-localization-inflows-node.jpg" width="100%" />
</figure>

<br>
[![Version badge](https://img.shields.io/badge/Added in-v4.10.0-blue.svg)](https://shields.io/)

### Translation Settings

<div class="divider"></div>

With Cognigy.AI 4.10.0 the Agent configuration has been extended with a section "**Translation Settings**".

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/eacbff5-Agent_Settings_4.svg" width="100%" />
</figure>

#### Options

The configuration options and their functions are listed below:

| Parameter      | Description                          |
| ----------- | ------------------------------------ |
| **Translation Provider**       | currently available provider with Cognigy.AI 4.10.0: <br> - Microsoft Translator <br> - Google Cloud Translation <br> - DeepL Translate Pro |
| **Translation Provider API Key**        | The API Key to use for the Translation Provider. |
| **Request Retries**    | How often to retry calling the translation provider if an error occurs. |
| **Request Timeout**   | How long to wait for the provider to answer a request (in milliseconds).|
| **Sentence Cache Expiry Timeout**    | How long to keep translated sentences in the cache (in seconds). |