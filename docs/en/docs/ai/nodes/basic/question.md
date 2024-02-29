---
title: "Question" 
slug: "question" 
hidden: false 
---
# Question

[![Version badge](https://img.shields.io/badge/Updated in-v4.66-blue.svg)](../../../release-notes/4.66.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/message/question.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

A Question Node is used to ask a question that requests specific information from the user. 

After a question is asked and the user answers, the answer is validated according to its type. If it passes, the answer is valid and stored, and the conversation continues.

!!! note "Attached Flows"
    When a user input is received, it will be scored by the NLU. If an attached Flow has an Intent, which scores higher than Intents in the current Flow, the attached Flow is executed. This occurs before validation of the Question Node is completed. See [Attached Flow](../../nlu/attachments/attached-flows.md).

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360020609199-Cognigy-Sessions-Question-Nodes" target="_blank" >Technical video "Question Nodes"</a>
      </div>
      <div class="callout-subtext">
      Watch this Episode of Cognigy Sessions for a technical deep dive
      </div>
   </div>
</blockquote>

## Question Types
<div class="divider"></div> 

Question Nodes have a selection of types that determine the validation used before a conversation continues.

| Type                                 | Expected user input to answer question                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Example                                                             |
|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| Text                                 | Any text input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                     |
| Yes / No                             | A positive or negative response                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                     |
| Intent                               | One of the trained [Intents](../../nlu/nlu-overview/ml-intents.md) must be identified from the user's response                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                     |
| Slot                                 | A [System Slot](../../nlu/slot-mapping/slot-mapping.md#system-defined-slots) or [Lexicon Slot](../../resources/build/lexicons.md) must be detected within the user's response. The slot is defined by name.                                                                                                                                                                                                                                                                                                              |                                                                     |
| Date                                 | Any date (system-defined)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                     |
| Number                               | Any number (system-defined)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                     |
| Temperature                          | Any temperature (system-defined)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                     |
| Age                                  | Any age (system-defined)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                     |
| Duration                             | Any time duration (system-defined)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                     |
| Email                                | Any email address (system-defined)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                     |
| Money                                | Any monetary value (system-defined)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                     |
| URL                                  | Any reference/address to a resource on the Internet for example, http://example.com                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                     |
| Percentage                           | Any percentage (system-defined)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                     |
| Regex                                | Any custom data format defined by a regex expression must be detected in the user's response                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                     |
| Data                                 | Any data (input.data) input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                     |
| xApp                                 | Any xApp input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                     |
| Custom                               | Any input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                     |
| Pattern: License Plate (DE)          | A pattern for the [German vehicle registration plate](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Germany). This license plate is a unique alphanumeric identification tag displayed on a vehicle. It consists of letters, numbers, and sometimes special characters, for example, `ö`, `ä`, or `ü`. License plates serve as a means of identifying and registering vehicles, providing important information such as vehicle ownership, registration details, and compliance with legal requirements.  | `M-345`, `x1Y2Z3`, `D 12345C`                                       |
| Pattern: IBAN                        | A pattern for the International Bank Account Number (IBAN)                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `DE12345678901234567890`                                            | 
| Pattern: Bank Identifier Code (BIC)  | A pattern for the Bank Identifier Code (BIC)                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `DEUTDEFF500`                                                       | 
| Pattern: Social Security Number (US) | A pattern for the US Social Security Number                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `123-45-6789`                                                       |
| Pattern: IP Address (IPv4)           | A pattern for the IPv4 address                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `192.168.1.1`                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Pattern: Phone Number                | A pattern for the phone number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `+49 0000000000`, `49 0000000000`, `+490000000000`, `(555) 000-000` |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Pattern: Credit Card                 | A pattern for the bank card                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `4111111111111111`                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ||

!!! warning "Regex"
    Ensure that your regular expression starts with a `/` and ends with `/g`.

    Example: `/^1\d{​​​​7}​​​​$/g`

!!! note "Supported Data formats for System Defined slots"
    All data formats supported by the Cognigy NLU for system slot mapping are listed on the [Slot Mapping](../../nlu/slot-mapping/slot-mapping.md) page.

## Channels and Output types
<div class="divider"></div>

Question node output types carry the same functionality as the [Say Node](say.md).

!!! tip "Date Questions"
    In case the Question Type Date has been selected, the Question Node will automatically render a Datepicker if the channel permits. Refer to [Datepicker](../data/datepicker.md) for more information. 

## Reprompt Options

<div class="divider"></div>

Reprompt messages are automatically triggered if the question is not answered correctly,
such as when the expected type of input is not provided or a validation does not return `true`.

### Reprompt Methods

You can select one of the following reprompt methods:

- [Simple Text](#simple-text)
- [Channel Message](#channel-message)
- [LLM Prompt](#llm-prompt)
- [Execute Flow and return](#execute-flow-and-return)

#### Simple Text

Outputs a simple text message to the user.

| Parameter        | Type          | Description                                                                                                |
|------------------|---------------|------------------------------------------------------------------------------------------------------------|
| Reprompt Message | CognigyScript | The message to output if the given answer is invalid. For example, `Not sure I understood this correctly`. |

#### Channel Message

Outputs a comprehensive, channel-specific message to the user.
This message includes rich-media, for example, images or audio.
You can define distinct messages for each channel, such as Webchat, Voice Gateway, WhatsApp, and others.

| Parameter        | Type    | Description                                                                                                                                                                                                                                                     |
|------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Reprompt Message | Channel | The channel for which you want to configure the repromt message. You can select multiple channels.                                                                                                                                                              |
| Output Type      | Select  | The format of the content that delivers through the selected channel. Depending on the selected channel, a list of possible output types suitable for that channel will be presented. All channels support the text type, but support for other types may vary. |

#### LLM Prompt

Runs an LLM prompt and outputs the result in the format of a text message to the user.
Before using this Node, configure a model in the [LLM](../../resources/build/llm.md) settings.

| Parameter            | Type          | Description                                                                                                           |
|----------------------|---------------|-----------------------------------------------------------------------------------------------------------------------|
| Large Language Model | Select        | The channel for which you want to configure the repromt message. You can select multiple channels.                    |
| LLM Instructions     | CognigyScript | The input or command, such as a prompt or system message, that is given to the Language Model to generate an output.  |
| Transcript Turns     | Slider        | The number of conversation turns to include in the LLM chat completion request. By default, the value is `3`.         |

#### Execute Flow and return

Executes a specific Flow and returns to the question afterward.

| Parameter      | Type   | Description                                                                                                                                          |
|----------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Select Flow    | Select | The Flow that will be executed as the reprompt message.                                                                                              |
| Select Node    | Select | The Node from which the Flow should be executed as the reprompt message.                                                                             |
| Parse Intents  | Toggle | This setting determines whether the system should parse Intents separately in the executed Flow. By default, this setting is enabled.                |
| Parse Slots    | Toggle | This setting determines whether the system should parse Slots separately in the executed Flow. By default, this setting is enabled.                  |
| Absorb Context | Toggle | This setting determines whether the system should absorb the executed Flow's Context into the current Context. By default, this setting is disabled. |

### Repeat Question

Repeats a question if a user gives an invalid answer. By default, this setting is enabled.

### Reprompt Condition

Optionally, you can add a [CognigyScript](../../tools/cognigy-script.md) condition to determine whether a reprompt message is shown.

### Skip on Intent

Skips the reprompt if an Intent was found in the input.

## Result Storage
<div class="divider"></div>

Question results are always stored in `input.result`.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/message/question-context.png" width="60%" />
</figure>

If **Store Result in Context** is enabled, the Question Result will also be stored in the [Context](../../tools/interaction-panel/context.md) object. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/message/question-profile-storage.png" width="60%" />
</figure>

If **Store Result to Contact Profile** is enabled, the Question Result will also be stored in the [Profile](../../tools/interaction-panel/profile.md) object.

## Escalation - Intents

Allows the conversation to break out of the Question Node if a specified Intent was found. 

| Action                  | Description                                                                                         |
|-------------------------|-----------------------------------------------------------------------------------------------------|
| Output Message          | Outputs a message (equal to a Say Node)                                                             |
| Skip Question           | Skips the Question and enters a specific value into the `input.result` object.                      |
| Go To Node              | Goes to a specific Flow Node and continues from there (equal to Go To Node)                         |
| Execute Flow and Return | Goes to a specific Flow Node and returns to the question after (equal to Execute Flow Node)         |
| Handover to Human Agent | The conversation is handed to an agent, who can  help you finish the question step and hand it back |

Add intents that can trigger the "escalate on intent" function by typing the intent name into the "Valid Intents" field and pressing ENTER on your keyboard. Adjust the dedicated intent score threshold slider to the preferred setting so that the escalation will only occur if one of the listed intents reaches that score.

## Escalation on Wrong Answers
<div class="divider"></div>

Allows the conversation to break out of the Question Node after a number of incorrect answers were provided.

| Action                  | Description                                                                                         |
|-------------------------|-----------------------------------------------------------------------------------------------------|
| Output Message          | Outputs a message (equal to a Say Node)                                                             |
| Skip Question           | Skips the Question and enters a specific value into the `input.result` object.                      |
| Go To Node              | Goes to a specific Flow Node and continues from there (equal to Go To Node)                         |
| Execute Flow and Return | Goes to a specific Flow Node and returns to the question after (equal to Execute Flow Node)         |
| Handover to Human Agent | The conversation is handed to an agent, who can  help you finish the question step and hand it back |

It is possible to prevent reprompts when the escalation is happening. 

The option "only escalate once" determines if the escalation only happens once on the threshold or on every input form the threshold on.

## Handover to Human Agent
<div class="divider"></div>

As of Release v4.4.0, we added the option **Handover to Human Agent**. Open the **Node Editor** and you will find this option as an escalation action for Intents and Wrong_Answers that offers the ability to escalate questions by creating handovers to a real human agent.  
When this escalation is hit, the conversation is handed to an agent, who can then help you finish the question step and hand it back.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/message/question-escalation-to-handover.png" width="60%" />
</figure>

## Reconfirmation Settings
<div class="divider"></div>

Allows for answers to be reconfirmed before continuing. This is especially useful when using voice bots and reconfirming what the bot understood
(for example, in Number questions when the user said "_my number is three double five triple nine five six eight_").
The answer given to the reconfirmation question has
to be a yes/no style answer and follows the same rules as a Yes/No Question.

Reconfirmation Questions can contain a specific token `ANSWER`, which will be replaced with a short form version of the given answer (for example, "3 EUR" in a Money question). The short form answer is taken from `input.activeQuestion.tentativeShortFormAnswer`;

Reconfirmation Questions can have a specific re-prompt set, which will be output before the question if the answer to the question is not of yes/no style.

## Advanced
<div class="divider"></div>

The Question Node has two advanced settings that can be used.

### Store detailed Results

This setting, when enabled, stores a more detailed JSON object under the result property of the input. This is useful in case more information is needed.

### Skip if Answer in Input

When enabled, this setting will skip the Question if the answer is already provided in the input text.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/message/question-skip-if-answer-in-input.png" width="60%" />
</figure>

### Additional Validation

A [CognigyScript](../../tools/cognigy-script.md) condition which must return `true` in order for the answer to be considered valid. An example would be an additional validation on an Email Question of `input.slots.EMAIL[0].endsWith("cognigy.com")` which would guarantee that only cognigy.com email addresses pass the validation.

### Result Location

The location of an answer is determined by default by the question type (for example, `input.slots.EMAIL[0]` for Email Questions). This can be overwritten using this setting (for example, `input.slots.EMAIL` would store all found email slots). If the result location doesn't return a value (= is falsy), the answer will be considered invalid.

### Forget Question Threshold

This setting determines how long a user can have been "away" from the Node after the question was initially asked. With the default setting `1` this means that the question has to be answered on the next user input. If a user input comes back to the question at a later stage, it will be treated as if the question was hit for the first time and the question will be asked.

<div class="divider"></div>

!!! warning "Question Nodes and Intent Execution"
    Question Nodes, by default, will be triggered repeatedly until a valid answer is provided. To avoid this, you can opt for an Optional Question or change the Intent Execution setting.

!!! tip "Slot Fillers"
    Questions can be combined with **Slot Fillers** to create a so-called "Missing Pattern". This mechanism keeps asking the user for the missing information in a very natural way, until all questions have been answered.

## Question Information in Input
<div class="divider"></div>

When a question is active, indicating that an answer is awaited, information regarding the question is added to the Input object.

```JSON
"activeQuestion": {
    "nodeId": "18b158bf-71a3-4d4f-a31f-812b1810f8af",
    "type": "yesNo",
    "lastExecutedAt": 2,
    "forgetQuestionThreshold": 1,
    "repromptCount": 1,
    "escalationCount": 0
}
``` 

This information can be used to trigger specific actions on escalation or to jump back to the Question Node after an escalation.

## AI-enhanced output

To use AI-enhanced bot output rephrasing, read the [Generative AI](../../generative-ai.md#rephrasing-virtual-agent-outputs) article.

## Answer Preprocessing

You can use various functions of the [Text Cleaner](../../../ai/tools/text-cleaner.md) class to preprocess the answer to a question before it is evaluated. This can be helpful, for example, when requesting a name using a `text` type question or when asking for a part number using a `slot` question.

In addition to the Text Cleaner functions, users have the option to rerun NLU after the cleaning process. This approach allows for tasks such as re-detecting slots or properly filling any remaining slots.