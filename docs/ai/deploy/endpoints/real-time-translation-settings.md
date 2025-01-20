---
title: "Real-Time Translation Settings" 
slug: "real-time-translation-settings" 
hidden: false 
---

# Real-Time Translation Settings

Cognigy.AI supports integration with various real-time translation services, allowing you to automatically translate incoming text to the language of your flow and translate the flow output back to the user's language.

Before using this feature, you need to configure a machine translation provider. The choice of provider won't affect the configuration, but there may be differences in translation results and the list of supported languages.

## Configure Translation Provider

{! _includes/ai/settings/add-machine-translation-provider.md !}

## Configure Real-Time Translation Settings

[![Version badge](https://img.shields.io/badge/Updated in-v4.63-blue.svg)](../../../release-notes/4.63.md)

After selecting a translation provider, you can now configure translation parameters in the Endpoint configuration.

1. In the left-side menu of the Project, go to **Deploy > Endpoints**.
2. Select an existing Endpoint or create a new one.
3. In the Endpoint settings, go to the **Real-time Translation Settings** section. In the section, the provider you configured in the Translation Provider Settings configuration will be automatically selected.
4. Configure the settings based on your provider:

| Parameter                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                    | Providers                              |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| Enable Translation                         | Indicates whether translation is enabled for the Endpoint.                                                                                                                                                                                                                                                                                                                                                                     | Microsoft, Google, DeepL Translate Pro |
| User Input Language                        | Determines a language of the user inputs. If you selected the **Auto-Detect** option, refer to the [Auto-Detect User Inputs](#auto-detect-user-inputs) section.                                                                                                                                                                                                                                                                | Microsoft, Google, DeepL Translate Pro |
| Flow Language                              | Determines a language of the Flow outputs.                                                                                                                                                                                                                                                                                                                                                                                     | Microsoft, Google, DeepL Translate Pro |
| Set user input language on execution count | If the input language is set to **Auto-Detect**, it will be fixed to its current value on this execution count. The maximum value is 5 user inputs. These settings apply to every language supported by Cognigy.AI.                                                                                                                                                                                                            | Microsoft, Google, DeepL Translate Pro |
| Glossary ID Output                         | Determines the Glossary ID for the AI Agent's output translations. To ensure that the translations work correctly, the source and target languages of the Glossary must match the selected language in the **Flow Language** and **User Input Language** fields.                                                                                                                                                               | DeepL Translate Pro                    |
| Glossary ID Input                          | Determines the Glossary ID for user input translations. To ensure that the translations work correctly, the source and target languages of the Glossary must match the selected language in the **Flow Language** and **User Input Language** fields. If **Auto-Detect** is chosen in the **User Input Language** field, the Glossary will not be used for input translations.                                                 | DeepL Translate Pro                    |
| Formality                                  | Determines a level of formality in the translated text. The setting applies to specific target languages such as DE (German), FR (French), IT (Italian), ES (Spanish), NL (Dutch), PL (Polish), PT-BR, and PT-PT (Portuguese), JA (Japanese), and RU (Russian). By selecting the appropriate formality level, you can tailor the translation to suit your communication needs better, whether for formal or informal contexts. | DeepL Translate Pro                    |
| No-Translation Marker                      | Prevents the translation of text that the AI Agent sends to the user. By default, the text enclosed in the `**` no-translation marker will not be translated. For example, if you write `Willkommen, **Moin**!` in a Say Node of your Flow and the detected language is English, the AI Agent will send to the user `Welcome, Moin!` because `Moin` will not be translated to `Good Morning`.                                  | Microsoft, Google, DeepL Translate Pro |
| Always remove No-Translation Markers       | Determines whether to remove No-Translation Markers, even when translation is disabled                                                                                                                                                                                                                                                                                                                                         | Microsoft, Google, DeepL Translate Pro |
| Prevent payloads from being translated     | Prevents the translation of user inputs based on payloads.                                                                                                                                                                                                                                                                                                                                                                     | Microsoft, Google, DeepL Translate Pro |

### Auto-Detect User Inputs

In the settings, you have the option to select a predefined language or choose **Auto-Detect** as the user input language.

When automatic language detection for user inputs is enabled, the system determines the language based on the number of user inputs. To configure the number of user inputs, set the **Set user input language on execution count** parameter to your desired value.

In the example below, if the **Set user input language on execution count** setting is configured to `1`, an AI Agent will use the language of the user's first input for all subsequent interactions.

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoints/auto-detected_user_language.png" width="70%" />
  <figcaption>Auto-detected user input is German</figcaption>
</figure>

## More Information

- [Real-Time Translation](../../build/translation-and-localization/real-time-translation.md)
- [Automatic Translation](../../build/translation-and-localization/auto-translation.md)