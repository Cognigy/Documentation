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
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/message/optional-question.png" width="80%" />
</figure>

## Description

An Optional Question Node is used to ask a question that requests specific information from the user. The Node can be configured to expect different types of input. As soon as the selected type of data is detected in the user input, the Optional Question Node is answered.

!!! warning "Difference with Question Node"
    The **Optional Question** Node is **non-blocking**. This means that the user will be able to continue their conversation with the Flow if they have not provided an answer to the Optional Question. Before regular Flow execution, the System will check if the User Input answers the Optional Question to find a result. If not, the flow execution will follow a different path.
    [Watch this Episode](https://support.cognigy.com/hc/en-us/articles/360020609199-Cognigy-Sessions-Question-Nodes) of Cognigy Sessions for a technical deep dive.

!!! note "Question Types"
    There are different types of queries that you can use, which are described below:

| Type        | Required user input to answer question                                                                                                                                                                                                   |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text        | Any text input                                                                                                                                                                                                                           |
| Yes / No	   | A positive or negative response                                                                                                                                                                                                          |
| Intent      | One of the trained [Intents](../../../empower/nlu/intents/ml-intents.md) must be identified from the user's response                                                                                                                    |
| Slot        | A [System Slot](../../../empower/nlu/slots-and-lexicons/slots.md#system-defined-slots) or [Lexicon Slot](../../../empower/nlu/slots-and-lexicons/lexicons.md) must be detected within the user's response. The slot is defined by name. |
| Date        | Any date (system-defined)                                                                                                                                                                                                                |
| Number      | Any number (system-defined)                                                                                                                                                                                                              |
| Temperature | Any temperature (system-defined)                                                                                                                                                                                                         |
| Age         | Any age (system-defined)                                                                                                                                                                                                                 |
| Duration    | Any time duration (system-defined)                                                                                                                                                                                                       |
| Email       | Any email address (system-defined)                                                                                                                                                                                                       |
| Money       | Any monetary value (system-defined)                                                                                                                                                                                                      |
| URL         | Any reference/address to a resource on the Internet for example, http://example.com                                                                                                                                                      |
| Percentage  | Any percentage (system-defined)                                                                                                                                                                                                          |
| Regex       | Any custom data format defined by a regex expression must be detected in the user's response                                                                                                                                             |
| Data        | Any data (input.data) input                                                                                                                                                                                                              |

!!! note "Supported Data formats for System Defined slots"
    All data formats supported by the Cognigy NLU for system slot mapping are listed on the [Slot Mapping](../../../empower/nlu/slots-and-lexicons/slots.md) page.

## Channels and Output types

Question node output types carry the same functionality as the [Say Node](../basic/say.md).

!!! success "Date Questions"
    In case the Question Type Date has been selected, the Question Node will automatically render a Datepicker if the channel permits. Refer to [Datepicker](../data/datepicker.md) for more information. 

## Advanced

The Optional Question Node has four advanced settings that can be used.

### Store detailed Results
This setting, when enabled, stores a more detailed JSON object under the result property of the input. This is useful in case more information is needed.

### Stop Flow execution after Answer
When enabled, Flow execution will stop after the "On answer" case and wait for another input.

### Forget Question Threshold
The difference with a regular Question Node is that the Optional Question Node does not need to be answered. If the Optional Question Node is triggered and no answer is provided, the fact that the question was "asked" is nonetheless kept in memory. With this setting, you can decide for how many inputs the Optional Question should be kept in memory. 

### Parse CognigyScript

Lets you decide on which user input the CognigyScript after Answer should be executed.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/711c019-optional-question-advanced.jpg" width="100%" />
</figure>

## Result Storage

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/c04587d-context.jpg" width="100%" />
</figure>

If Store Result in Context is enabled, the Question Result will also be stored in the [Context](../../../test/interaction-panel/context.md) object. 

## Question Information in Input

When an Optional Question is "active", meaning an answer is being waited for, information about the Optional Question is added to the Input object.

```JSON
"activeOptionalQuestion": {
    "nodeId": "cb81db3a-6230-49e7-8ce4-12f877abe0cb",
    "type": "yesNo",
    "lastExecutedAt": 1,
    "forgetQuestionThreshold": 3
}
``` 

## AI-enhanced output

To use AI-enhanced output rephrasing, read the [Generative AI](../../../empower/generative-ai.md) article.