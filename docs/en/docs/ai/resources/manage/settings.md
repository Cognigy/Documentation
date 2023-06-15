---
 title: "Settings" 
 slug: "settings" 
 hidden: false 
---
# Settings

Cognigy.AI provides creators with customization settings that allow the agent processes to be adjusted to achieve optimal performance.

The **Agent Settings** are used to configure:

- The **Flow Logic** of all Flows within this agent
- The **Timezone** of the agent
- The **Intent Mapper** of Flows NLU
- The **Thresholds** for NLU recognition
- The **Analytics** of the agent

Within your agent, from the left toolbar click **Manage** --> **Settings** to access the agent settings menu.

## General Flow Logic || Flow Settings
<div class="divider"></div>

### Yes/No logic

Add a specific [Yes/No logic](../../nlu/nlu-overview/yes-no-intents.md) within your Flow to confirm and negate an [Intent](../../nlu/nlu-overview/ml-intents.md) or the **Yes/No** type of [Question Nodes](../../flow-nodes/flow-nodes-overview.md#question) .

### Additional confirmation words

Add your own customized responses to confirm an [Intent](../../nlu/nlu-overview/ml-intents.md) and [Question Nodes](../../flow-nodes/flow-nodes-overview.md#question).

### Additional negative confirmation words 

Add your own customized responses to negate an [Intent](../../nlu/nlu-overview/ml-intents.md) and [Question Nodes](../../flow-nodes/flow-nodes-overview.md#question).

### Continue **main** Flow after attached Flow

You can disable this setting and stop your main flow after an attached flow has been executed.

### Continue Flow after default reply

Enable this setting to continue executing the flow logic after a default reply has been delivered.

### Continue Flow after negative confirmation

Enable this setting to continue the flow logic after an intent confirmation sentence has been responded too negatively.

### Pass Default Reply into Flow

If the setting is on, the virtual agent doesn't answer with the default reply but writes it in the input object. Afterward, this information can be used in order to do something with it in the flow logic. 

### Include Default Reply in NLU Training

If the setting in on, NLU training will also include default replies configured for each Intent as example sentence to match the intent. This setting can be also configured individually on intent level.

## Timezone
<div class="divider"></div>

Set the timezone that your virtual agent will operate in.

## Intent Mapper
<div class="divider"></div>

### Enable Case Sensitive Intent Mapping

When enabled, case sensitivity and punctuation will be taken into account by the intent mapper. Disable this setting to ignore casing and punctuation in ML intent mapping.

!!! danger "English Support"
    Despite configurable in the agent's settings, this feature is not implemented for the regular English locales, i.e. US, Indian, UK, Canadian, and Australian English. However, you may use this feature using the "Universal" locale which also supports general English.

### Attached Flow Intent Mapping Priority
- Jointly Map Main and Attached Flow: treats Main and Attached Flow Intents as if they were a single intent collection and finds the best matching intent and executes the corresponding Flow.
- Map Main Flow first: first maps the Main Flow Intents separately. If no Intent is found in the Main Flow the Attached Flow is mapped.
- Map Attached Flow first: first maps the Attached Flow Intents separately. If no Intent is found in the Attached Flow the Main Flow is mapped.


[![Version badge](https://img.shields.io/badge/Added in-v4.1.4-blue.svg)]({{config.site_url}})

### Implicit Slot Parsing
Determines whether slots in NLU example sentences should be parsed implicitly or only slot annotations should be used for training. Configurable from 4.1.4 onwards. Prior to 4.1.4 the behavior was as in "Full" mode, existing agents will retain this default.

- Disabled: Only use slot annotations: This will only consider user-annotated slots, Lexicon, or Any Slots, in example sentences.
- Full: Parse both System and Lexicon slots implicitly
- System Slots - No Lexicon Slots: Parse only System slots like numbers, dates, email implicitly. Only consider annotations for Lexicon Slots.
- Lexicon Slots - No System Slots: Parse only Lexicon slots like from attached Lexicons implicitly. Only consider annotations for System Slots.

## Thresholds
<div class="divider"></div>

### Forget question threshold

Number of contact responses after which a user's answer to a question is no longer registered.

### Confidence threshold

Score from which on an Intent is considered confirmed if a confirmation sentence is set. Value between 0 and 1.

### Reconfirmation threshold

Score from which on an Intent is considered confirmed or marked for reconfirmation if a reconfirmation sentence is set. Value between 0 and 1.

!!! danger "Adjust the Reconfirmation Threshold"
    The confidence threshold has **no effect unless the intent uses confirmation sentences**.
    The Reconfirmation Threshold is your lower confidence bound - you must set it in addition to the Confidence Threshold. **Intent scores above the reconfirmation threshold are confirmed or marked for reconfirmation.**

## Analytics
<div class="divider"></div>

### Collect

If disabled, analytics data will not be collected and stored for the agent.

### Allow data only

If disabled, analytics data will not be collected for messages with only a JSON data payload and no text input.

## Generative.AI

To set up the connection between Cognigy.AI and the Generative AI Provider, read the [Generative AI](../../generative-ai.md#prerequisites) article.

