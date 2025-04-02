---
 title: "Machine learning Intents" 
 slug: "ml-intents" 
 hidden: false 
---
# Machine learning Intents

Intents are collections of identified user intents (for example, what does the user want).

The user input is scored against all example sentences and Cognigy.AI will identify the intent with the highest score as the intent for this input if it is above the configured [thresholds](#thresholds).

## Building the NLU Model

The building menu is available under the "NLU" tab in the flow editor. Any Flow that requires building of their NLU model will display a red indicator next to its name in the list of Flows and on the NLU tab in the flow editor. 

Flows that are only processed as an attached Flow do not need to be individually built (the exclamation mark can be ignored) as the building of the attaching Flow will pull in the Intents of the attached Flows and the Build will be done there. Flows that are used separately with intent mapping need to be built separately.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/build-model.JPG" width="100%" />
</figure>

*Cognigy NLU* requires pre-building of the intent mapping model.

To build your model, go to the Intents tab in your Flow Editor and click the blue *Build Model* button.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/intent-menu.png" width="100%" />
</figure>

A new [Task](../../../build/projects.md) will begin, and the spinning task icon indicates model building is in progress. While new models are built, the latest version of your flow will fall back to the most recently trained model.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/c33ef5a-trainedSuccess.PNG" width="100%" />
</figure>

Successful builds are indicated with a green success notification. It is possible that builds may fail, this will be indicated by a red error notification. Expand the error message to learn more, for example, you may have to add more example sentence data to complete the build successfully.

Any time adjustments are made to the model data, the NLU model must be rebuilt to incorporate the changes. The following actions also trigger the need to build the model (the red exclamation point next to the **Build Model** icon will appear):

* creating, editing and deleting an intent
* attaching a Lexicon
* editing a Lexicon
* attaching and detaching a Flow

### Quick Build

When clicking the arrow on the **Build Model** button, a **Quick Build** option can be selected. This option will build a machine learning model for your intents which doesn't contain specifications for [States](../../../test/interaction-panel/state.md) and Intent Conditions and is thus significantly faster in building your model.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/quick-build.JPG" width="100%" />
</figure>

If you're not using [States](../../../test/interaction-panel/state.md) or Intent Conditions, the training speed (as in the time it takes for Cognigy.AI to build the model after you clicked the button) and quality of the model will be the same whether you use the regular *Build Model* or *Quick Build* options.

## Example Sentences

This is where creators are given the power to add unique levels of customized understanding to AI Agents which enable them to react intelligently to any message received by an end user.

Even though each Intent can have up to 2000 example sentences, we recommend a minimum of 5 and a maximum of 100. These sentences should be a broad range of possible user inputs that are expected to activate the Intent. Building a comprehensive example sentence list is a critical step in the process of building a smart AI service.

When entering the example sentences, you can use the **TAB** or **ENTER** key to go to the next NLU example sentence field.

!!! note "Avoid punctuation marks in example sentences"
    Using punctuation marks in example sentences affects recognition accuracy.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/example-sentences.png" width="100%" />
  <figcaption>Machine Learning Intents: Example Sentences</figcaption>
</figure>

!!! warning "Avoid Repetition"
    Rather than writing similar sentences for different entity names i.e. `I want to order Pizza, I want to order Pasta...` build and attach a Lexicon to the flow that can be [Annotated](annotations.md) into your sentence.

As stated previously, a minimum of 5 and a maximum of 100 example sentences per Intent are recommended to ensure that the NLU model is sufficiently trained. If the minimum threshold is not reached or if the maximum threshold is surpassed, a warning icon will be displayed to prompt the user to add or remove example sentences.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/min-sentence-warning.png" width="100%" />
  <figcaption>Machine Learning Intents: Minimum Example Sentence warning</figcaption>
</figure>

Any attempt at training the Intents with less than 5 example sentences will result in a negative feedback indicator once the build completes.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/min-sentence-negative-feedback.png" width="100%" />
  <figcaption>Negative Feedback Indicator after training Intents with less than 5 Example Sentences</figcaption>
</figure>

Intent example sentences should be as distinct and unique as possible. If there is too much similarity and overlap with other intents, then the intent mapping will become less predictable and, if configured, intent confirmation sentences will be triggered more frequently.

!!! note "Evaluation of Example Sentences"
    Find out more about how Cognigy.AI evaluates example sentences on the [Intent Analyzer Page](intent-analyzer.md).

When you hover over an example sentence, a *Delete Icon* will appear. Clicking on this will delete the corresponding example sentence field for you.

!!! warning "Delete Example Sentences using Keyboard"
    The *Delete Icon* of an example sentence cannot be accessed when only using a keyboard. However, a keyboard-only user can still delete an example sentence simply by clearing the field using *Delete* or *Backspace* keys.

### Create examples with Generative AI 

To use Generative AI technology for creating Intent example sentences, read the [Generative AI](../../../empower/generative-ai.md#generate-intent-sentences) article.


## Slots and Lexicons

When writing example sentences, it is possible to add System Slots and attached Lexicons to the sentence structure by using the Annotations feature. 

If you have configured **Lexicons** with similar items (for example, pizza = FOOD and cake = FOOD), you don't need to enter similar sentences for both. Build a general sentence that will be configured with Annotations to recognize your custom Lexicon keyphrases for example, `I want to order some FOOD`.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/lexicon-sentences.png" width="100%" />
  <figcaption>Machine Learning Intents: Slot & Lexicon Annotations</figcaption>
</figure>

Simply **highlight** the word that should be mapped as a slot or lexicon
and click the **+** at the right end of the text field to open the **Annotations** menu.
The Annotations menu provides options to select the type of slot that should be mapped to the highlighted word. 

!!! note "Example Sentence Annotation"
    Find out more about recognizing **Slots** and **Lexicons** in example sentences on the [Annotations](annotations.md) page.

## Thresholds

Intents can fall into one of three thresholds:

* **Confirmed**
    The Intent has a score higher than the confidence threshold and is considered "confirmed".

* **Reconfirmation Needed**
    The Intent has a score higher than the reconfirmation threshold, but lower than the confidence threshold and must be reconfirmed by the system.

* **Not found**
    The Intent has a score lower than the reconfirmation threshold and isn't considered a valid result for this input.

You can change these thresholds in [Agent Settings](../../../administer/access/project-settings.md).

!!! danger "Confirmation Sentence"
    In case you haven't defined a confirmation sentence for your Machine Learning intent the reconfirmation threshold is used to confirm an intent.

    So the reconfirmation threshold is used in two different ways depending on the existence of a confirmation sentence:

    - **With** confirmation sentence: the reconfirmation threshold triggers the reconfirmation sentence.

    - **Without** confirmation sentence: the reconfirmation threshold confirms the input.

## Confirmation Sentence and Reconfirmations

If an Intent has been marked as `Reconfirmation Needed` and it is the highest found Intent, Cognigy AI will ask the user the question set in the **`Confirmation Sentence`** property for the Intent. If the user confirms the question with a positive answer, Cognigy AI will remember the answer for this user and not ask the user again. 

!!! note "How Reconfirmation Works"
    * User: *"I want to order a snack"*
    * Cognigy AI scores the Intent `orderPizza` with 0.7
    * Cognigy AI: *"Do you mean you want to order a pizza?"*
    * User: *"Yes"*
    * Cognigy AI executes the sentence as if the user had said *"I want to order pizza"*, plus remembers the confirmation for the future

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/reconfirmation.png" width="100%" />
  <figcaption>Machine Learning Intents: Confirmation Sentence</figcaption>
</figure>
