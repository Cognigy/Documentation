---
 title: "Intent Analyzer" 
 slug: "intent-analyzer" 
 hidden: false 
---
# Intent Analyzer

Writing a quality set of example sentences is key to building intelligent virtual agents. Cognigy.AI includes an in-tool evaluation feature that provides creators with immediate feedback on the quality of each example sentence and intent as it fits into the current version of their unique NLU training model.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/62083cc-nluScoring.jpg" width="100%" />
</figure>

Although it is not necessary to have a perfect NLU model with all sentences achieving a green level score, this feature assists designers in identifying areas that can be improved.

## Overview
<div class="divider"></div>

The Intent Analyzer provides feedback on whether the Intents trained within agent flows are effective.

The feedback is given on three levels:

- Overall Intent model
- Individual Intent 
- Individual Example Sentence

This saves time from a testing perspective as a simple glance at the intent training menu is all that is required to assess the quality of the model, rather than manually talking to the virtual agent to judge the quality of understanding. We recommend to digest the feedback top-down. Is your overall model green? A quick scan of intents might alert you to issues. A check on individual sentences gives you concrete insight to edit, add or move example sentences and improve your NLU.

???+ warning "Train the NLU for Feedback"
    Ensure the NLU is trained each time changes have been made to example sentences to provide the latest scoring analysis.

### Overall Intent Model

The overall intent model score provides a total score on the quality of the NLU model.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/1ee253e-overallModel.PNG" width="100%" />
</figure>

A green accuracy score indicates the model is ready for testing by users and consistent.

Any yellow or red traffic light at the overall model should be a cause of concern and points to important intent design issues. Lower intent model scores can be improved by finding low scoring intents and adjusting example sentences that also score poorly. This is made easy by the traffic light color feedback system that allows designers to scan the page for red or yellow items where improvement is required.

### Individual Intent

Each intent trained to the NLU is assigned a score that provides virtual agent designers feedback on the quality of the intent recognition relative to all other intents. The feedback window provides two pieces of information:

- The overall NLU score for the intent
- The names of any intents that have overlapping example sentences

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/8325558-IntentScore.PNG" width="100%" />
</figure>

To improve the score and reduce overlap, adjustments must be made to the example sentences contained within the intent.

???+ warning "Trends in individual intents may not reflect overall model quality"
    When a model performs well it does not mean that it cannot be further improved still on the intent level. Red or yellow intents indicate opportunities for improvement. Such opportunities are not necessarily a reflection of a poor overall model which is separately and accurately assessed in the overall model score - the whole is greater than the sum of its parts!

### Individual Example Sentence

In machine learning intents, each example sentence is assigned a score that provides designers insight into how useful that particular sentence is with respect to the larger scope of the intent model. 

When the mouse is hovered over the traffic light score color, the feedback window appears. The feedback window for each example sentence provides two pieces of information:

- The model's score for the sentence
- The names of any intents that have overlapping example sentences

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/1d85485-poorScore.PNG" width="100%" />
</figure>

In conjunction with the traffic light color, these two pieces of information allow designers to quickly identify and remove potential issues with the training model to achieve more accurate NLU understanding.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/5d864f8-goodScore.PNG" width="100%" />
</figure>

???+ warning "Trends in individual sentences may not reflect overall intent quality"
    When an intent performs well it does not mean that it cannot be further improved still on the sentence level. Red or yellow example sentences indicate opportunities for improvement. Such opportunities are not necessarily a reflection of a poor intent quality which is separately and accurately assessed in the intent score - the whole is greater than the sum of its parts!

## Scoring System
<div class="divider"></div>
The **Intent Analyzer** uses a traffic light color system to provide users with three stage scoring feedback. The color coding is explained in the table below:

| Color  | Score Range       |
|--------|-------------------|
| Green  | Score > 0.8       |
| Yellow | 0.8 > Score ≥ 0.6 |
| Red    | 0.6 > Score       |


