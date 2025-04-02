---
title: "Intent Analyzer" 
slug: "intent-analyzer" 
hidden: false 
---

# Intent Analyzer

Writing a quality set of example sentences is key to building intelligent AI Agents. Cognigy.AI includes an in-tool evaluation feature that provides creators with immediate feedback on the quality of each example sentence and intent as it fits into the current version of their unique NLU training model.

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

A simple glance at the intent training menu is all you need to assess the quality of the model, rather than manually talking to the AI Agent to judge its understanding. We recommend reviewing the feedback in order of priority, starting from the top.
A high-accuracy score (indicated by a green color) suggests the model is suitable for initial user testing.
A quick review of the intents can reveal potential problems. Checking individual sentences provides specific insights for editing, adding, or moving examples to improve your NLU.

!!! warning "Train the NLU"
    After modifying example sentences, retrain the NLU to ensure the latest scoring analysis reflects your changes.

### Overall Intent Model

The overall intent model score provides a total score on the quality of the NLU model.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/overall-model.png" width="100%" />
</figure>

A green accuracy score indicates the model is ready for testing by users and consistent.

Any yellow or red traffic light in the overall model indicates important intent design issues. To improve lower scoring intents, identify those with low scores and adjust their poorly scoring example sentences. The traffic light color feedback system makes this easy, allowing designers to quickly scan the page for red or yellow areas that need attention.

### Individual Intent

Each intent trained to the NLU is assigned a score that provides AI Agent designers feedback on the quality of the intent recognition relative to all other intents. The feedback window provides two pieces of information:

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

[![Version badge](https://img.shields.io/badge/Added in-v4.79-blue.svg)](../../../../release-notes/4.79.md)

You can test NLU scores via the Interaction Panel by activating the [Debug Mode](../../../test/interaction-panel/overview.md#debug-mode) feature and exploring the detailed results in the `input.nlu.intentMapperResults.scores` object.

For more complex testing,
you can use the API [POST /v2.0/projects/{projectId}/nlu/scores](https://api-trial.cognigy.ai/openapi#post-/v2.0/projects/-projectId-/nlu/scores) request
to test NLU scores without creating an unnecessary load on the server.

### Example

Let's assume the user asks the AI agent: `Could you help me with the issue?`
Add this question as the value for the parameter `sentence`. 
Specify the [Project ID](../../../build/projects.md), [Flow Reference ID](../../../build/flows/overview.md), and [Locale Reference ID](../../../build/translation-and-localization/localization.md#copy-the-local-reference-id) of the AI Agent you want to test.

**Request**

```json
Post /v2.0/projects/{projectId}/nlu/scores
Content-Type: application/json

{
  "flowReferenceId": "<flow-reference-id>",
  "localeReferenceId": "<locale-reference-id>",
  "sentence": "Can you help me with this issue?"
}
```

The response will return a collection of objects that includes matching NLU intents and scores for the given sentence.

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
    "description": "Handles queries related to booking flights, including availability, pricing, and reservations"
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
    "description": "Manages questions and actions related to payment processes, methods, and issues"
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
    "description": "Provides answers to frequently asked questions regarding various topics or services"
  }
]
```