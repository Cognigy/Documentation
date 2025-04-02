---
title: "Optional Question" 
slug: "optional-question" 
hidden: false 
tags:
  - Cognigy.AI
  - Nodes
  - Optional Question
---

# Optional Question

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/basic/optional-question.png" width="50%" />
</figure>

## Description

An Optional Question Node requests specific information from the user. The Node can be configured to expect different types of input. As soon as the selected type of data is detected in the user input, the Optional Question Node is answered.

???+ info "Comparison with the Question Node"
    The Optional Question Node is non-blocking. This means that the user can continue their conversation with the Flow if they haven't provided an answer to the Optional Question. Before regular Flow execution, the Cognigy.AI checks if the user input answers the Optional Question to find a result. If not, the Flow execution follows a different path.
    [Watch this Episode](https://support.cognigy.com/hc/en-us/articles/360020609199-Cognigy-Sessions-Question-Nodes) of Cognigy Sessions for a technical deep dive.

## Parameters

??? info "Basic Settings"
    | Type        | Required user input to answer question                                                                                                                                                                                                  |
    |-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Text        | Any text input.                                                                                                                                                                                                                         |
    | Yes / No    | A positive or negative response.                                                                                                                                                                                                        |
    | Intent      | One of the trained [Intents](../../../empower/nlu/intents/ml-intents.md) must be identified from the user's response.                                                                                                                   |
    | Slot        | A [System Slot](../../../empower/nlu/slots-and-lexicons/slots.md#system-defined-slots) or [Lexicon Slot](../../../empower/nlu/slots-and-lexicons/lexicons.md) must be detected within the user's response. The slot is defined by name. |
    | Date        | Any date (system-defined).                                                                                                                                                                                                              |
    | Number      | Any number (system-defined).                                                                                                                                                                                                            |
    | Temperature | Any temperature (system-defined).                                                                                                                                                                                                       |
    | Age         | Any age (system-defined).                                                                                                                                                                                                               |
    | Duration    | Any time duration (system-defined).                                                                                                                                                                                                     |
    | Email       | Any email address (system-defined).                                                                                                                                                                                                     |
    | Money       | Any monetary value (system-defined).                                                                                                                                                                                                    |
    | URL         | Any reference/address to a resource on the Internet, for example, `http://example.com`.                                                                                                                                                 |
    | Percentage  | Any percentage (system-defined).                                                                                                                                                                                                        |
    | Regex       | Any custom data format defined by a regex expression must be detected in the user's response.                                                                                                                                           |
    | Data        | Any data (input.data) input.                                                                                                                                                                                                            |

    !!! note "Supported Data Formats for System-Defined Slots"
        All data formats supported by the Cognigy NLU for system slot mapping are listed on the [Slot Mapping](../../../empower/nlu/slots-and-lexicons/slots.md) page.

??? info "Channels and Output types"

    The Optional Question Node output types carry the same functionality as the [Say Node](say.md).

    !!! success "Date Questions"
        If you select the Date as a Question Type, the Question Node automatically renders a datepicker if the channel supports it. Refer to [Datepicker](../data/datepicker.md) for more information. 

??? info "Advance"

    | Parameter                        | Description                                                                                                                                                                                                                                                                                                                                                   |
    |----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Store detailed Results           | When enabled, stores a more detailed JSON object under the result property of the input. This is useful in case more information is needed.                                                                                                                                                                                                                   |
    | Stop Flow execution after Answer | When enabled, Flow execution stops after the "On answer" case and wait for another input.                                                                                                                                                                                                                                                                     |
    | Forget Question Threshold        | The difference with a regular Question Node is that the Optional Question Node doesn't need to be answered. If the Optional Question Node is triggered and no answer is provided, the fact that the question was "asked" is nonetheless kept in memory. With this setting, you can decide for how many inputs the Optional Question should be kept in memory. |
    | Parse CognigyScript              | Lets you decide on which user input the CognigyScript after Answer should be executed.                                                                                                                                                                                                                                                                        |

??? info "Result Storage"

    If **Store Result in Context** is enabled, the Question Result is also stored in the [Context](../../../test/interaction-panel/context.md) object. 

??? info "Question Information in Input"

    When an Optional Question is "active", meaning the AI Agent waits for an answer, information about the Optional Question is added to the Input object.

    ```JSON
    "activeOptionalQuestion": {
        "nodeId": "cb81db3a-6230-49e7-8ce4-12f877abe0cb",
        "type": "yesNo",
        "lastExecutedAt": 1,
        "forgetQuestionThreshold": 3
    }
    ``` 

## AI-Enhanced Output

To use AI-enhanced output rephrasing, read the [Generative AI](../../../empower/generative-ai.md) article.