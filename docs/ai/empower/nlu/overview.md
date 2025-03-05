---
title: "Overview"
slug: "overview"
hidden: false
---
# NLU Overview

**Natural Language Understanding** is at the core of advanced AI Agents. Cognigy.AI features an industry-leading NLU engine called Cognigy NLU.

## Intents

Intent Mapping is at the core of the NLU engine and the process uses machine learning to match the user's utterance to the defined intents.

To learn how to use Intents, read [Train your AI Agent to recognize Intents](https://support.cognigy.com/hc/en-us/articles/360014776879-Train-your-Virtual-Agent-to-recognize-Intents) in the Cognigy Help Center.

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019857220-Cognigy-Sessions-Cognigy-NLU" target="_blank" >Technical video "Cognigy NLU"</a>
      </div>
      <div class="callout-subtext">
      Watch this Episode of Cognigy Sessions for a technical deep dive
      </div>
   </div>
</blockquote>

**Intents** can be created right within the Intents section of the NLU tab and can be fed with **training data** in the form of **example sentences**. These example sentences should include a certain degree of variation for the model to work well. The following image shows an example intent library within the intent creation menu:

<figure>
  <img class="image-center" src="../../../../_assets/ai/empower/nlu/nlu-intents-training-data.jpg" width="100%" />
</figure>

Machine learning models work best with comparable amount of information on all intent classes. That is, ideally, all intents have a similar amount of example sentence and are clearly separable in terms of content. While it is able to deal with imperfect input, it always helps if you make the job for the machine easier.

Make sure you do not have intents that are only a single word or sentence without useful information. Such intents may reduce the overall efficacy of the model.
If the NLU predicts the utterance is out of scope of the intent model, no intent will be triggered and intent will be set to `null` in the [Input](../../test/interaction-panel/input.md) object. You can add examples to the [Reject Intent](intents/reject-intents.md) to intentionally prevent the NLU from recognizing any user inputs that are outside the scope of the AI Agent.

!!! note "Avoid punctuation marks in example sentences"
    Using punctuation marks in example sentences affects recognition accuracy.

### NLU model feedback

As soon as the model is trained, Cognigy NLU is able to provide feedback regarding the model's performance. This is shown using different colors, with green being good, orange being suboptimal and red being bad. Additional information is given on mouse-hover.

!!! warning "Number of example sentences"
    Intents must have at least a minimum of five example sentences to train the NLU sufficiently and to get a suitable [Model](intents/ml-intents.md#building-the-nlu-model). The more examples you enter, the more the model can be built with higher accuracy. As a result, Intents will be recognized in a conversation with a higher likelihood and evaluated by a higher score rate based on the more accurate model. That improves the intent recognition of your AI Agent.

### Rules
Rules can be used to trigger the Intent under specific conditions. Rules are defined as **JavaScript expressions** that are evaluated when the NLU is executed.

### Intent Entrypoint
Intent Entrypoints can be used to alter the Entrypoint in the Flow after the NLU is executed. The three options are:

* **Execute normally**
  Automatically set the Entrypoint.

* **Execute from START in this flow**
  Executes the Flow using the Start Node.

* **Execute from a Node in this flow**
  Executes the flow starting from a specific Node.

<figure>
  <img class="image-center" src="../../../../_assets/ai/empower/nlu/intents-entry.jpg" width="100%" />
</figure>

### Default Replies
Intents can be configured with direct output (answers) in the form of so-called **Default Replies**. Default Replies are integrated [Say](../../build/node-reference/basic/say.md) and can be configured with channel-specific output.

<figure>
  <img class="image-center" src="../../../../_assets/ai/empower/nlu/intent_settings_default_replies_training.png" width="100%" />
</figure>

You can override the setting to use the **Default Replies** as example sentences per each individual Intent. Per default, the setting is set to **Use Flow [Settings](../../administer/access/project-settings.md)**.

If this feature is enabled, the NLU will also use the configured default replies to train, improving the match rate for the configured intent.

<div style="display: grid; grid-template-columns: auto auto">
  <img style="margin: 0px; padding: 0px" src="../../../../_assets/ai/empower/nlu/intent_default_replies_training_off.png"/>
  <img style="margin: 0px; padding: 0px" src="../../../../_assets/ai/empower/nlu/intent_default_replies_training_on.png"/>
</div>

### Advanced
Intents can be configured with a number of advanced options.

#### Tags
Tags can be used to categorize Intents, which makes it easier to manage them.

#### Conditions

See [Intent Conditions](intents/conditions.md) for more information on how to enable and disable Intents dynamically with CognigyScript Conditions.

#### Confirmation Sentence
Cognigy NLU comes with an intent confirmation mechanism that works by configuring Confirmation Sentences in each intent. Whenever an Intent score falls within a (configurable) range - let's say 0,4 - 0,6, the Confirmation Sentence is triggered and shown to the user. If the user confirms the Intent, the Intent will be triggered.

To learn how to add reconfirmation sentences, read [Machine Learning Intents](intents/ml-intents.md).

### Intent Options Menu
The Intent Options Menu can be selected by clicking on the three dots next to the Create Intent button. The menu provides a number of options:

* **Upload Intents CSV or JSON File**. This option lets you upload Intent collection in either CSV or JSON format.

* **Download Intents**. Intents can be downloaded in CSV and JSON formats as well.

* **Create Reject Intent**. Reject Intents can be used to explicitly filter out certain utterances. A Reject Intent can be used in case certain user utterances should not be registered as an Intent.

* **Delete All Intents**. This option can be used to batch-delete all intents in a given Flow.

#### Upload Intents

To upload intents, follow these steps:

1. Open your Flow.
2. In the Flow editor, navigate to **NLU > Intents**.
3. On the right side of the **+ Create Intent** button, click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg).
4. Select **Upload Intents CSV or JSON File**.
5. Select one of the following modes:
    * **Skip** — if an intent with this name already exists, the import process will skip this intent.
    * **Overwrite** — if  an intent with the same name already exists, the existing intent will be deleted and replaced with the new values.
    * **Merge** — if an intent with the same name already exists, the properties that allow multiple values will be merged. These properties include:
        * Example Sentences
        * Rules
        * Tags
        * Confirmation sentences
          Other properties, such as Default Reply and Condition, will not be modified.
6. Click **Confirm**.

Uploading intents does not delete existing intents that are not included in the upload file. If you want to delete intents, you can use the **Delete All Intents** option or delete individual intents beforehand.

#### Download Intents

{! _includes/ai/forbidden-characters.md !}

To download intents, follow these steps:

1. Open your Flow.
2. In the Flow editor, navigate to **NLU > Intents**.
3. On the right side of the **+ Create Intent** button, click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg).
4. Select **Download Intents**.
5. Select the downloaded format: CSV or JSON.
6. Click **Confirm**.

The file will be downloaded in the selected format.

### Individual Intent Options Menu
Each intent additionally has its own options menu that can be selected by clicking on the three dots next to the Intent name. The menu provides a number of options:

* **Create Child Intent**. Adds an intent as a child intent to the selection. See [Intent Hierarchy](intents/intent-hierarchy.md). This property is included on data import/export.

* **Disable Intent**. Disables the selected intent so that it cannot be recognized or activated by a user input. This function temporarily removes the intent, and it's associated training data from the model but allows for it to be re-added in a single click. This property is included on data import/export.

* **Delete Intents**. Removes the intent and all associated training data from the model.

### Attachments


Cognigy NLU can take into account additional Flows and Lexicons whenever they are attached.

### Attached Flows
Whenever a Flow with Intents is attached to another Flow, the Intents in that Attached Flow are taken into account when training the NLU model. This is a practical way of combining different Intent collections into a bigger model.

!!! warning "Be careful with attaching Flows"
    Whenever a Flow is attached to another Flow, the Intents of both Flows are combined into a single model. This may lead to unexpected results.

### Attached Lexicons
Lexicons need to be attached to a Flow in order for a Flow to be able to detect its Keyphrases. Make sure to retrain the model whenever you attach or detach resources.

## States


States can be used to deliberately block certain Intents. This can help with edge-cases or very large Intent collections.

For more information, read the [State](../../test/interaction-panel/state.md) article.

## Slot Fillers

Slot Fillers are easy-to-use tools that allow you to fill in slots with minimal effort. They can be customized to fit a specific type of slot and are automatically triggered each time the NLU is activated (usually with each user input). Slot Fillers copy any discovered slots to the Context object, which means you can fill those slots using subsequent user responses. When combined with Question Nodes, this creates a natural way of gathering information, allowing end users to provide more context.

For more information, read the [Slot Fillers](slot-fillers.md) article.


### Advanced Slot Filler Options

#### Additional Validation

A [CognigyScript](../../build/cognigyscript.md) condition which must return `true` in order for the match to be considered valid. An example would be an additional validation on an Email Question of `input.slots.EMAIL[0].endsWith("cognigy.com")` which would guarantee that only cognigy.com email addresses pass the validation.

#### Result Location
The location of a filled slot result is determined by default by the slot type (e.g., `input.slots.EMAIL[0]` for Email Questions). This can be overwritten using this setting (e.g., `input.slots.EMAIL` would store all found email slots). If the result location doesn't return a value (= is falsy), the answer will be considered invalid.
