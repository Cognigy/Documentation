# Question
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ac25291-question-node.png" width="100%" />
</figure>

## Description
<div class="divider"></div>

A Question Node is used to ask a question that requests specific information from the user. 

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360020609199-Cognigy-Sessions-Question-Nodes" target="_blank" >Techinar video "Question Nodes"</a>
      </div>
      <div class="callout-subtext">
      Watch this Episode of Cognigy Sessions for a technical deep dive
      </div>
   </div>
</blockquote>

## Question Types
<div class="divider"></div> 

Question Nodes have a Type which defined what kind of answer is required from the user before the conversation continues. After a question was asked and the user provided an answer, the answer is validated according to its Type. If it passes, the answer is considered valid, is stored and the conversation continues.

| Type | Expected user input to answer question |
| ---- | ----------- |
| Text | Any text input |
| Yes / No	 | A positive or negative response |
| Intent | One of the trained [Intents]({{config.site_url}}ai/nlu/nlu-overview/ML-intents/) must be identified from the user's response |
| Slot | A [System Slot]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/#system-defined-slots) or [Lexicon Slot]({{config.site_url}}ai/resources/build/lexicons/) must be detected within the user's response. The slot is defined by name. |
| Date | Any date (system-defined) |
| Number | Any number (system-defined) |
| Temperature | Any temperature (system-defined) |
| Age | Any age (system-defined) |
| Duration | Any time duration (system-defined) |
| Email | Any email address (system-defined) |
| Money | Any monetary value (system-defined) |
| URL | Any reference/address to a resource on the Internet e.g. http://example.com |
| Percentage | Any percentage (system-defined) |
| Regex | Any custom data format defined by a regex expression must be detected in the user's response |
| Data | Any data (input.data) input |
| Custom | Any input |

???+ warning "Regex"
    Please make sure that your regular expression starts with a **/** and ends with **/g**.

    Example:

    * /^1\d{​​​​7}​​​​$/g

???+ info "Supported Data formats for System Defined slots"
    All data formats supported by the Cognigy NLU for system slot mapping are listed on the [Slot Mapping]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/) page.
## Channels and Output types
<div class="divider"></div>

Question node output types carry the same functionality as the [**Say Node**]({{config.site_url}}ai/flow-nodes/message/say/).

???+ success "Date Questions"
    In case the Question Type Date has been selected, the Question Node will automatically render a Datepicker if the channel permits. Please refer to [**Datepicker**]({{config.site_url}}ai/flow-nodes/message/datepicker/) for more information. 
## Reprompt Options
<div class="divider"></div>

### Reprompt Message
Remprompt Messages are automatically triggered in case the question was not answered correctly (e.g. with the expected type of input or a validaiton didn't return true). 

The Remprompt can be configured to automatically re-ask the question. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/4f557f2-reprompt.png" width="100%" />
</figure>

### Reprompt Condition
Optionally a [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) condition can be added which will determine whether the Reprompt Message is shown or not.

### Skip on Intent
Skips the reprompt if an intent was found in the input
## Result Storage
<div class="divider"></div>

Question results are always stored in `input.result`.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/17fcc50-context.png" width="100%" />
</figure>

If **Store Result in Context** is enabled, the Question Result will also be stored in the [**Context**]({{config.site_url}}ai/tools/interaction-panel/context/) object. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/397eada-profile.png" width="100%" />
</figure>

If **Store Result to Contact Profile** is enabled, the Question Result will also be stored in the [**Profile**]({{config.site_url}}ai/tools/interaction-panel/profile/) object.
## Escalation to Handover
<div class="divider"></div>

As of Release v4.4.0, we added the option "Handover to Human Agent". Open the **Node Editor** and you will find this option as an escalation action for **"Intents"** and **"Wrong_Answers"** that offers the ability to escalate questions by creating handovers to a real human agent.  
When this escalation is hit, the conversation is handed to an agent, who can then help you finish the question step and hand it back.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/e383469-Question_Escalation_to_Handover.PNG" width="75%" />
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c775fc5-Screen_Shot_025.PNG" width="94%" />
</figure>

## Escalation to Handover
<div class="divider"></div>

Allows the conversation to break out of the Question Node if a specified Intent was found. 

| Action | Description |
| ---- | ----------- |
| Output Message | Outputs a message (equal to a Say Node) |
| Skip Question	 | Skips the Question and enters a specific value into the `input.result` object. |
| Go to Node | Goes to a specific Flow Node and continues from there (equal to GoTo Node) |
| Execute Flow and Return | Goes to a specific Flow Node and returns to the question after (equal to Execute Flow Node) |
| Handover to Human Agent | The conversation is handed to an agent, who can  help you finish the question step and hand it back |

Add intents that can trigger the "escalate on intent" function by typing the intent name into the "Valid Intents" field and pressing ENTER on your keyboard. Adjust the dedicated intent score threshold slider to the preferred setting so that the escalation will only occur if one of the listed intents reaches that score.

## Escalation on Wrong Answers
<div class="divider"></div>

Allows the conversation to break out of the Question Node after a number of incorrect answers were provided.

| Action | Description |
| ---- | ----------- |
| Output Message | Outputs a message (equal to a Say Node) |
| Skip Question	 | Skips the Question and enters a specific value into the `input.result` object. |
| Go to Node | Goes to a specific Flow Node and continues from there (equal to GoTo Node) |
| Execute Flow and Return | Goes to a specific Flow Node and returns to the question after (equal to Execute Flow Node) |
| Handover to Human Agent | The conversation is handed to an agent, who can  help you finish the question step and hand it back |

It is possible to prevent reprompts when the escalation is happening. 

The option "only escalate once" determines if the escalation only happens once on the threshold or on every input form the threshold on.
## Advanced
<div class="divider"></div>

The Question Node has two advanced settings that can be used.
### Store detailed Results
This setting, when enabled, stores a more detailed JSON object under the result property of the input. This is useful in case more information is needed.
### Skip if Answer in Input
When enabled, this setting will skip the Question if the answer is already provided in the input text.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/818a411-Advanced.png" width="100%" />
</figure>

### Additional Validation
A [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) condition which must return `true` in order for the answer to be considered valid. An example would be an additional validation on an Email Question of `input.slots.EMAIL[0].endsWith("cognigy.com")` which would guarantee that only cognigy.com email addresses pass the validation.

### Result Location
The location of an answer is determined by default by the question type (e.g. `input.slots.EMAIL[0]` for Email Questions). This can be overwritten using this setting (e.g., `input.slots.EMAIL` would store all found email slots). If the result location doesn't return a value (= is falsy), the answer will be considered invalid.

### Forget Question Threshold
This setting determines how long a user can have been "away" from the Node after the question was initially asked. With the default setting `1` this means that the question has to be answered on the next user input. If a user input comes back to the question at a later stage, it will be treated as if the question was hit for the first time and the quesiton will be asked.

<div class="divider"></div>

???+ warning "Question Nodes and Intent Execution"
    Question Nodes - by default - will be triggered again and again until a valid answer has been provided. In order to avoid this, you can opt for an [**Optional Question**]({{config.site_url}}ai/flow-nodes/message/optional-question/) or you can change the **Intent Execution** setting.

???+ success "Slot Fillers"
    Questions can be combined with **Slot Fillers** to create a so-called "Missing Pattern". This mechanism keeps asking the user for the missing information in a very natural way, until all questions have been answered.
## Question Information in Input
<div class="divider"></div>

When a Question is "active", meaning an answer is being waited for, information about the Question is added to the Input object.

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