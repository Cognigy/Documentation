# Real Time Translation Settings

Cognigy.AI supports integration with various `Real Time Translation Services`, so you can automatically translate incoming text to the language of your flow and the flow output back to the language of the user.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/real_time_translation_settings.png" width="100%" />
  <figcaption>Real Time Translation Settings</figcaption>
</figure>

## Configure Translation Provider

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/real_time_translation_settings_providers.png" width="100%" />
  <figcaption>Translation Providers</figcaption>
</figure>

Before using this feature we need to configure a Translation Provider that will be used for real time translation. The choice of provider won't impact the configuration, but there might be differences in the translation results and the list of supported languages.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/real_time_translation_settings_config.png" width="100%" />
  <figcaption>Translation Settings</figcaption>
</figure>

Each Translation Provider requires the following parameters:

| Parameter | Description |
| --- | --- |
| Translation Provider API Key | The API Key required to use the translation APIs |
| Request Retries | How often to retry calling the translation provider if an error occurs |
| Request Timeout | How long to wait for the provider to answer a request (in milliseconds) |
| Sentence Cache Expiry Timeout | How long to keep translated sentences in the cache. The options are: 0 (no caching), 3600 (one hour) or 84600 (one day) | 

## Configure Real Time Translation Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/real_time_translation_settings_endpoint_config.png" width="100%" />
  <figcaption>Real Time Translation Settings after provider selection</figcaption>
</figure>

After selecting a Translation Provider, we can now configure these parameters in the Endpoint configuration:

| Parameter | Description |
| --- | --- |
| Enable Translation | Whether or not Translation is enabled for the Endpoint |
| User Input Language | The language of the user inputs |
| Flow Language | The language of the Flow outputs |
| Set user input language on execution count | If the input language is set to 'Auto-Detect', it will be fixed to its current value on this execution count |
| No-Translation Marker | Do not translate texts encapsulated in this marker (e.g. 'I love the **Cognigy.AI** platform' will not translate 'Cognigy.AI')|
| Always remove No-Translation Markers | Whether we remove No-Translation Markers, even if translation is not enabled |
| Prevent payloads from being translated | If active, prevents all user inputs based on payloads to be translated |