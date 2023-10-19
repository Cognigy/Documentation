---
title: "Real-time Translation Settings" 
slug: "real-time-translation-settings" 
hidden: false 
---

# Real-time Translation Settings

Cognigy.AI supports integration with various real-time translation services, allowing you to automatically translate incoming text to the language of your flow and translate the flow output back to the user's language.

Before using this feature, you need to configure a machine translation provider. The choice of provider won't affect the configuration, but there may be differences in translation results and the list of supported languages.

## Configure Translation Provider

{! _includes/ai/settings/add-machine-translation-provider.md !}

## Configure Real-time Translation Settings

[![Version badge](https://img.shields.io/badge/Updated in-v4.61-blue.svg)](../../release-notes/4.61.md)

After selecting a translation provider, you can now configure translation parameters in the Endpoint configuration.

1. Open the Cognigy.AI interface.
2. In the left-side menu, select an Agent.
3. In the left-side **Agent** menu, select **Deploy > Endpoints**.
4. Select an existing Endpoint or create a new one.
5. In the Endpoint settings, go to the **Real-time Translation Settings** section. In the section, the provider you configured in the Translation Provider Settings configuration will be automatically selected.
6. Configure the settings based on your provider:

| Parameter                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                    | Providers                              |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| Enable Translation                         | Indicates whether translation is enabled for the Endpoint.                                                                                                                                                                                                                                                                                                                                                                     | Microsoft, Google, DeepL Translate Pro |
| User Input Language                        | Determines a language of the user inputs. If you selected the **Auto-Detect** option, refer to the [Auto-Detect User Inputs](#auto-detect-user-inputs) section.                                                                                                                                                                                                                                                                | Microsoft, Google, DeepL Translate Pro |
| Flow Language                              | Determines a language of the Flow outputs.                                                                                                                                                                                                                                                                                                                                                                                     | Microsoft, Google, DeepL Translate Pro |
| Set user input language on execution count | If the input language is set to **Auto-Detect**, it will be fixed to its current value on this execution count. The maximum value is 5 user inputs. These settings apply to every language supported by Cognigy.AI.                                                                                                                                                                                                            | Microsoft, Google, DeepL Translate Pro |
| Glossary ID                                | Determines a glossary to use for the translation. To use this feature, you need to set the 'User Input Language' parameter, and the Glossary's language pair must match the Endpoint's language pair. This ensures more accurate and contextually relevant translations.                                                                                                                                                       | DeepL Translate Pro                    |
| Formality                                  | Determines a level of formality in the translated text. The setting applies to specific target languages such as DE (German), FR (French), IT (Italian), ES (Spanish), NL (Dutch), PL (Polish), PT-BR, and PT-PT (Portuguese), JA (Japanese), and RU (Russian). By selecting the appropriate formality level, you can tailor the translation to suit your communication needs better, whether for formal or informal contexts. | DeepL Translate Pro                    |
| No-Translation Marker                      | The text enclosed within this marker will not be translated. For example,  `I love the Cognigy.AI platform` will not translate `Cognigy.AI`.                                                                                                                                                                                                                                                                                   | Microsoft, Google, DeepL Translate Pro |
| Always remove No-Translation Markers       | Determines whether to remove No-Translation Markers, even when translation is disabled                                                                                                                                                                                                                                                                                                                                         | Microsoft, Google, DeepL Translate Pro |
| Prevent payloads from being translated     | Prevents the translation of user inputs based on payloads.                                                                                                                                                                                                                                                                                                                                                                     | Microsoft, Google, DeepL Translate Pro |

### Auto-Detect User Inputs

In the settings, you have the option to select a predefined language or choose **Auto-Detect** as the user input language.

When automatic language detection for user inputs is enabled, the system determines the language based on the number of user inputs. To configure the number of user inputs, set the **Set user input language on execution count** parameter to your desired value.

In the example below, if the **Set user input language on execution count** setting is configured to `1`, a virtual agent will use the language of the user's first input for all subsequent interactions.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/auto-detected_user_language.png" width="70%" />
  <figcaption>Auto-detected user input is German</figcaption>
</figure>

## More Information

- [Real-time Translation](../tools/real-time-translation.md)
- [Automatic Translation](../tools/auto-localization.md)