---
title: "Overview" 
slug: "intents"
description: "Cognigy.AI Intents are collections of identified potential user inputs designed to understand what a user wants based on their input."
hidden: false
tags:
  - intents
  - Cognigy NLU
---

# Intents

In Cognigy.AI, _Intents_ identify user's goals based on their input.
Each Intent is defined by example sentences that show how users might express a specific request.
For example,
an Intent named `OrderFood` might include sentences like `Can you get me some food?` or `I'd like to order a pizza`.
The NLU engine analyzes and scores these Intents to match user inputs.

Each Intent includes:

- [Example Sentences](#add-example-sentences)
- [Additional Configuration](#apply-additional-settings)

## Working with Intents

=== "GUI"
     You can create, edit, and manage Intents as well as download and upload them in **NLU > Intents** of the Flow editor.

=== "API"  
     You can create, edit, and manage Intents as well as download and upload them using the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#get-/v2.0/flows/-flowId-/Intents).

### Download and Upload Intents

Intents can be uploaded to and downloaded from Cognigy.AI as CSV or JSON files. Use these CSV or JSON files to import Intents, edit using your favorite spreadsheet or developer tools, and move them between Flows.

??? info "CSV"
    Your CSV should be formatted as follows:

    - No header.
    - Cognigy.AI automatically detects various CSV formats. If you encounter any issues, use UTF-8 encoding, comma (`,`) as the delimiter, double quotes (`"`) as your quote character, and newline (`\n`) as your line terminator.
    - You are required to fill in the following columns:

    | Name	                                                                                                                 | Property type	                                                                                                                                                                                                                                                                                                                                                                    | Value                                                                                          |
    |------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
    | The name of the Intent used for identification and processing in Cognigy.AI. The Intent name is a `string` type value. | The property type corresponds to the following Intent components and settings:<br> `exampleSentence` — a sample user input.<br>`defaultReply` — the standard response when the Intent is triggered.<br>`confirmationSentence` — a response that asks the user for confirmation.<br>`rules` - the conditions to handle the Intent and guide the conversation based on the user input. | The value is a `string` type value and corresponds to an example sentence utterance, such as `I want pizza`. |

    CSV format example:

    ```txt
    |--------------|----------------------|------------------------------------------------|
    | rejectIntent | exampleSentence      | This request cannot be fulfilled at this time. |
    | Intent1      | exampleSentence      | Could you please assist me with this issue?    |
    | Intent1      | defaultReply         | Your request has been successfully processed.  |
    | Intent1      | defaultReply         | Thank you for your inquiry.                    |
    | Intent1      | confirmationSentence | Are you sure you want to proceed?              |
    | Intent2      | exampleSentence      | I'd like to make a reservation, please.        |
    | Intent2      | exampleSentence      | I need assistance with my account.             |
    ```

    !!! warning "Consistent Regional Settings"
        Keep regional settings consistent on your operating system (OS), as they affect the CSV delimiter. Mismatched settings can break the file and cause upload failure.

??? info "JSON"
    JSON format serves as a comprehensive specification for defining Intents within Cognigy.AI.

    The provided JSON example illustrates the structure and content of an Intent, including Intent name (`Pizza`), example sentences, rules, tags, disambiguation sentence, default reply, and other Intent-related settings.
    
    JSON format example:
    
    ```json
    [
        {
            "name": "Pizza",
            "exampleSentences": [
                "I'd like to order many pizzas",
                "Do you have any meat pizza options?",
                "I'm interested in trying a vegan pizza",
                "Could I have a cheese pizza, please?",
                "I'm craving pizza right now"
            ],
            "rules": [],
            "tags": [],
            "condition": "",
            "disambiguationSentence": "",
            "childFeatures": false,
            "biasTowardsParentOrChildIntents": "parents",
            "parent": "",
            "defaultReply": {},
            "entryPoint": "",
            "isRejectIntent": false,
            "isDisabled": false,
            "overrideIntentDefaultRepliesAsExamples": ""
        }
    ]
    ```

### Add Example Sentences

When you create an Intent, add [example sentences](example-sentences.md) that help the NLU model recognize user queries.

### Build the NLU Model

Whenever you make changes to the Intent or its related settings, you need to rebuild the NLU model.

If the NLU model needs rebuilding, the [red indicator](intent-analyzer.md#explore-intent-analyzer) will be displayed:

- next to the Flow name in the Flows list.
- next to the **Build Model** button in **NLU > Intents** of the Flow editor.

If your Flow includes States and Intents with [Intent Conditions](conditions.md),
you can exclude them from training using **Quick Build**.
This approach speeds up the NLU model building process,
especially for large Flows that contain many States and Intent Conditions.
If you don't use these features,
both **Build Model** and **Quick Build** will deliver the same model quality and training speed.

You can build the NLU model for a single Flow or for all Flows in your Project:

??? info "Single Flow"
    1. In the left-side menu of the Project, go to **Build > Flows**.
    2. On the **Flows** page, select the Flow that you want to train.
    3. In the upper-right corner, select **NLU**.
    4. On the **Intents** tab, click **Build Model** or ![expand-locale-list](../../../../_assets/icons/expand_2.svg) **> Quick Build**.

    If you have attached Flows to the current Flow, the model will automatically be built for the attached Flows. In the UI, trained attached Flows will appear as untrained (with a red indicator), which you can ignore.

??? info "All Flows"
    1. In the left-side menu of the Project, go to **Build > Flows**.
    2. On the **Flows** page, check if the **Train all Flows** button exists. If the **Train all Flows** button isn't enabled for your environment, specify the `FEATURE_TRAIN_ALL_PROJECT_FLOWS: "true"` feature flag in the `values.yaml` file for on-premises installations or contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/).
    3. Click **Train all Flows**.

    Note that during training, Flows are retrieved from the database sequentially, following their default storage order. Training doesn't run in parallel — each Flow is trained one after another, regardless of the number of service replicas or deployed locales.

If the NLU model is built successfully, you will receive a green success notification.
Otherwise, an error notification will appear with details; for example, you may need to add more example sentences.

### Apply Additional Settings

??? info "Basic Additional Settings"

    | **Setting**                                  | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
    |----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Inherit Example Sentences from Child Intents | Allows example sentences from child Intents to be inherited by the parent Intent. For more information, read [Intent Hierarchy](intent-hierarchy/overview.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | Intent Mapping Priority                      | Defines the priority of the Intent when mapped against other Intents during the recognition process. For more information, read [Intent Mapping Priority](intent-hierarchy/intent-mapping-priority.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | Rules                                        | Allows configuring rules to restrict Intent execution based on specific conditions. For more information, read [Rules](rules.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | Default Reply                                | Defines the fallback response if no other reply is configured or applicable. For more information, read [Default Reply](default-reply.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
    | Intent Entrypoint                            | Determines where the Flow execution starts when the Intent is triggered. You can select one of the following options: <br>- **Execute from START in this Flow** — this option ensures that the Flow begins from the **Start** Node when the Intent is triggered. The option is selected by default. <br>- **Execute normally** — the Flow execution continues from the Node where the Intent was recognized, without restarting the Flow. This option is useful when you want to maintain the conversation's context and avoid restarting the Flow. <br>- **Execute from a Node in this Flow** — the Flow execution starts from a specific Node when the Intent is triggered. This option provides flexibility to define custom Entrypoints within the Flow.                                |

??? info "Advanced Additional Settings"
 
    | **Setting**             | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    |-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Tags                    | Allows assigning tags to the Intent for easier organization and filtering.                                                                                                                                                                                                                                                                                                                                                                             |
    | Condition               | Defines the conditions that must be met for the Intent to be executed. For more information, read [Conditions](conditions.md).                                                                                                                                                                                                                                                                                                                         |
    | Confirmation Sentence   | Specifies the sentence used to confirm the Intent with the end user. For more information, read [Confirmations](confirmation-words.md).                                                                                                                                                                                                                                                                                                                     |
    | Disambiguation Sentence | Provides a sentence to clarify the Intent if there is ambiguity during recognition. The disambiguation sentence will be exposed in the Input object: <br>- `input.nlu.intentMapperResults.finalIntentDisambiguationSentence` — the disambiguation sentence for the best-matching Intent that was selected.<br>- `input.nlu.intentMapperResults.scores[0].disambiguationSentence` — the disambiguation sentence for a specific Intent that was matched. |
    | Analytics Step          | Marks the Intent for analytics tracking, allowing it to be included in analytical reports in Insights and OData.                                                                                                                                                                                                                                                                                                                                       |

## More Information

- [Overview](overview.md)