---
title: "Intent Analyzer" 
slug: "intent-analyzer"
description: "Cognigy.AI Intent Analyzer provides immediate feedback on the quality of example sentences and Intents within the Cognigy NLU model, enabling you to optimize AI Agents for better understanding and performance."
hidden: false
tags:
  - Cognigy NLU
  - intent analyzer
  - analyze intents
---

# Intent Analyzer

[![Version badge](https://img.shields.io/badge/Updated in-v4.79-blue.svg)](../../../../release-notes/4.79.md)

The _Intent Analyzer_ provides immediate feedback on the quality of example sentences and Intents within the Cognigy NLU model, enabling you to optimize AI Agents for better understanding and performance.

## Key Benefits

- **Rapid Quality Assessment**. You can evaluate the NLU model's effectiveness at a glance without extensive manual testing.
- **Targeted Improvements**. The Intent analyzer includes detailed scoring that highlights specific areas for refinement, thereby improving Intent recognition.

## Restrictions

- After editing example sentences, the NLU model must be retrained to update scores.
- Strong overall Intent model scores don't guarantee perfect individual Intents; red or yellow Intents may still need work.
- An Intent requires at least five example sentences. If trained with fewer, a negative feedback indicator will appear after the build, signaling that while the Intent still functions, its performance will be significantly reduced. 

## How to Set up

1. In the Flow editor, go to **NLU > Intents**.
2. Add a variety of example sentences into each Intent. 
3. In the upper-right corner, click **Build Model** to process the sentences and generate the initial model. 
4. View scores for the overall model, individual Intents, and example sentences.

### Explore Intent Analyzer

The Intent Analyzer assesses three main components:

1. **Overall Intent Model** — shows a total score for the NLU model's quality.
2. **Individual Intent** — shows scores for each Intent, which reflect how well the NLU model recognizes them and if they overlap with other Intents. You will see the NLU score along with names of any overlapping Intents.
3. **Individual Example Sentence** — each example sentence receives a score based on how effective it is within the NLU model. You can see the score and any overlapping Intents by hovering over the traffic light in the interface.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/intents/analyzer.png" width="80%" />
</figure>

The Intent analyzer uses a traffic light color system to provide users with three-status scoring feedback.

The color coding is explained in the table.

| **Color** | **Score Range**   | **Description**                                                                                                                                                  | **Recommendations**                                                                                                                                                                                                                                          |
|-----------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Green     | Score > 0.8       | A green score indicates high confidence in Intent recognition. The NLU model is performing well and is ready for further testing by users.                       | Note that a perfect NLU model — where all sentences score green — isn't necessary, the traffic light system helps quickly identify areas that may need attention and refinement.                                                                             |
| Yellow    | 0.8 > Score ≥ 0.6 | A yellow score indicates moderate confidence. The NLU model is performing well but shows that the Intent recognition could be more consistent.                   | Review example sentences with yellow scores. Add more varied examples or adjust poorly scoring examples to cover additional variations. Monitor Intents over time for any further inconsistencies.                                                           |
| Red       | Score < 0.6       | A red score indicates significant issues with Intent recognition. The NLU model may fail to recognize the intent accurately, and urgent improvements are needed. | Review the training data for this intent. Focus on revising or expanding example sentences to better represent the variety of ways users might express the query. Consider re-training the NLU model with additional or revised data to improve recognition. |

## How to Test

You can test NLU scores using the following interfaces:

=== "GUI"
     In the Interaction Panel, activate the [debug mode](../../../test/interaction-panel/overview.md#debug-mode) feature and explore the detailed results in the `input.nlu.intentMapperResults.scores` object.

=== "API"
     For more complex testing, you can use the API [POST /v2.0/projects/{projectId}/nlu/scores](https://api-trial.cognigy.ai/openapi#post-/v2.0/projects/-projectId-/nlu/scores) request to test NLU scores without the load from Flow execution. 
     
     For example, assume the user asks the AI Agent: `Could you help me with the issue?` Add this question as the value for the parameter `sentence`. Specify the [Project ID](../../../build/projects.md), [Flow Reference ID](../../../build/flows/overview.md), and [Locale Reference ID](../../../build/translation-and-localization/localization.md) of the AI Agent you want to test.

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

     The response will return a collection of objects that includes matching NLU Intents and scores for the given sentence.
    
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

## More Information

- [Intents](overview.md)