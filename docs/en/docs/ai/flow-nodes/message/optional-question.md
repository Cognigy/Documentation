---
 title: "optional-question" 
 slug: "Optional Question" 
 hidden: false 
---
# Optional Question

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/365f444-optional-question.jpg" width="100%" />
</figure>

## Description
<div class="divider"></div>

An Optional Question Node is used to ask a question that requests specific information from the user. The Node can be configured to expect different types of input. As soon as the selected type of data is detected in the user input, the Optional Question Node is answered.

???+ warning "Difference with Question Node"
    The **Optional Question** Node is **non-blocking**. This means that the user will be able to continue their conversation with the Flow if they have not provided an answer to the Optional Question. Before regular Flow execution, the System will check if the User Input answers the Optional Question to find a result. If not, the flow execution will follow a different path.

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

!!! info "Question Types"
    There are different types of queries that you can use, which are described in detail below:

| Type | Required user input to answer question |
| ---- | ----------- |
| Text | Any text input |
| Yes / No	 | A positive or negative response |
| Intent | One of the trained [Intents]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) must be identified from the user's response |
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

!!! info "Supported Data formats for System Defined slots"
    All data formats supported by the Cognigy NLU for system slot mapping are listed on the [Slot Mapping]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/) page.
## Channels and Output types
<div class="divider"></div>

Question node output types carry the same functionality as the [**Say Node**]({{config.site_url}}ai/flow-nodes/message/say/).

!!! success "Date Questions"
    In case the Question Type Date has been selected, the Question Node will automatically render a Datepicker if the channel permits. Please refer to [**Datepicker**]({{config.site_url}}ai/flow-nodes/message/datepicker/) for more information. 
## Advanced
<div class="divider"></div>

The Optional Question Node has four advanced settings that can be used.

### Store detailed Results
This setting, when enabled, stores a more detailed JSON object under the result property of the input. This is useful in case more information is needed.

### Stop Flow execution after Answer
When enabled, Flow execution will stop after the "On answer" case and wait for another input.

### Forget Question Threshold
The difference with a regular Question Node is that the Optional Question Node does not need to be answered. If the Optional Question Node is triggered and no answer is provided, the fact that the question was "asked" is nonetheless kept in memory. With this setting you can decide for how many inputs the the Optional Question should be kept in memory. 

### Parse CognigyScript
Lets you decide on which user input the CognigyScript after Answer should be executed.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/711c019-optional-question-advanced.jpg" width="100%" />
</figure>

## Result Storage
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c04587d-context.jpg" width="100%" />
</figure>

If Store Result in Context is enabled, the Question Result will also be stored in the [**Context**]({{config.site_url}}ai/tools/interaction-panel/context/) object. 

## Question Information in Input
<div class="divider"></div>

When an Optional Question is "active", meaning an answer is being waited for, information about the Optional Question is added to the Input object.

```JSON
"activeOptionalQuestion": {
    "nodeId": "cb81db3a-6230-49e7-8ce4-12f877abe0cb",
    "type": "yesNo",
    "lastExecutedAt": 1,
    "forgetQuestionThreshold": 3
}
``` 