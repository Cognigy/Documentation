---
title: "Intent Analyzer" 
slug: "intent-analyzer" 
hidden: false 
---

# Intent Analyzer

Writing a quality set of example sentences is key to building intelligent virtual agents. Cognigy.AI includes an in-tool evaluation feature that provides creators with immediate feedback on the quality of each example sentence and intent as it fits into the current version of their unique NLU training model.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/nlu-scoring.jpg" width="100%" />
</figure>

Although it is not necessary to have a perfect NLU model with all sentences achieving a green level score, this feature assists designers in identifying areas that can be improved.

## Overview

The Intent Analyzer provides feedback on whether the Intents trained within agent flows are effective.

The feedback is given on three levels:

- Overall Intent model
- Individual Intent 
- Individual Example Sentence

This saves time from a testing perspective as a simple glance at the intent training menu is all
that is required to assess the quality of the model,
rather than manually talking to the virtual agent to judge the quality of understanding.
We recommend digesting the feedback top-down.
Is your overall model green?
A quick scan of intents might alert you to issues.
A check on individual sentences gives you concrete insight to edit, add or move example sentences and improve your NLU.

!!! warning "Train the NLU"
    After modifying example sentences, retrain the NLU to ensure the latest scoring analysis reflects your changes.

### Overall Intent Model

The overall intent model score provides a total score on the quality of the NLU model.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/overall-model.png" width="100%" />
</figure>

A green accuracy score indicates the model is ready for testing by users and consistent.

Any yellow or red traffic light in the overall model should be a cause of concern and indicates important intent design issues. Lower intent model scores can be improved by finding low scoring intents and adjusting example sentences that also score poorly. This is made easy by the traffic light color feedback system that allows designers to scan the page for red or yellow items where improvement is required.

### Individual Intent

Each intent trained to the NLU is assigned a score that provides virtual agent designers feedback on the quality of the intent recognition relative to all other intents. The feedback window provides two pieces of information:

- The overall NLU score for the intent
- The names of any intents that have overlapping example sentences

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/intent-score.png" width="100%" />
</figure>

To improve the score and reduce overlap, adjustments must be made to the example sentences contained within the intent.

!!! warning "Trends in individual intents may not reflect overall model quality"
    When a model performs well, it does not mean that it cannot be further improved still on the intent level. Red or yellow intents indicate opportunities for improvement. Low scores in specific areas, such as these opportunities, don't necessarily indicate a weak overall model. The overall model score provides an accurate assessment of its performance, reflecting the "whole is greater than the sum of its parts" principle.

### Individual Example Sentence

In machine learning intents, each example sentence is assigned a score that provides designers insight into how useful that particular sentence is with respect to the larger scope of the intent model. 

When the mouse is hovered over the traffic light score color, the feedback window appears. The feedback window for each example sentence provides two pieces of information:

- The model's score for the sentence
- The names of any intents that have overlapping example sentences

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/poor-score.png" width="100%" />
</figure>

In conjunction with the traffic light color, these two pieces of information allow designers to quickly identify and remove potential issues with the training model to achieve more accurate NLU understanding.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/good-score.png" width="100%" />
</figure>

## Scoring System

The **Intent Analyzer** uses a traffic light color system to provide users with three-stage scoring feedback. The color coding is explained in the table below:

| Color  | Score Range       |
|--------|-------------------|
| Green  | Score > 0.8       |
| Yellow | 0.8 > Score ≥ 0.6 |
| Red    | 0.6 > Score       |

## Testing NLU Scores 

You can test NLU scores via the Interaction Panel by activating the [Expert Mode](../../../test/interaction-panel/overview.md#expert-mode) feature and exploring the detailed results in the `input.nlu.intentMapperResults.scores` object.

For more complex testing, you can use an API request to test NLU scores without creating an unnecessary load on the server.

**Request**

```json
Post /v2.0/projects/{projectId}/nlu/scores
Content-Type: application/json

{
  "flowReferenceId": "0d59e1c7-17e4-4737-aafa-4b27b48e6885",
  "localeReferenceId": "c119bb2b-af87-42c9-abf0-49dae3ed0a28",
  "sentence": "Can you help me with this issue?"
}
```

**Response**

```json
[
  {
    "id": "129fdbd3-54d4-4704-a019-b579a7901641",
    "name": "Flight Booking",
    "score": 0.9333265866488035,
    "negated": false,
    "confirmationSentence": null,
    "confirmationSentences": null,
    "disambiguationSentence": null,
    "flow": "0d59e1c7-17e4-4737-aafa-4b27b48e6885",
    "description": ""
  },
  {
    "id": "0c22d2d8-edda-4e12-8d8f-6f5177771fc5",
    "name": "Payments",
    "score": 0.5039746888040336,
    "negated": false,
    "confirmationSentence": null,
    "confirmationSentences": null,
    "disambiguationSentence": null,
    "flow": "0d59e1c7-17e4-4737-aafa-4b27b48e6885",
    "description": ""
  },
  {
    "id": "11a33c75-d074-4408-b437-5c00071d6c46",
    "name": "FAQ",
    "score": 0.0669071045766796,
    "negated": false,
    "confirmationSentence": null,
    "confirmationSentences": null,
    "disambiguationSentence": null,
    "flow": "0d59e1c7-17e4-4737-aafa-4b27b48e6885",
    "description": ""
  }
]
```