---
title: "Reject Intent" 
slug: "reject-intent" 
description: "In Cognigy.AI, the Reject Intent feature designed to intentionally prevent the NLU model from recognizing certain user inputs that are outside the intended scope of the AI Agent."
hidden: false
tags:
  - cognigy nlu
  - stop intents
  - reject intents
  - intents
---

# Reject Intent

The *Reject Intent* feature allows you to block the NLU model from recognizing user inputs that aren't relevant to your AI Agent.
This approach helps AI Agents focus on in-context questions, ignoring irrelevant ones.

## Key Benefits

- **Enhanced focus on core capabilities**. By filtering out irrelevant inputs, your AI Agent can prioritize the tasks it's designed to handle.
- **Improved user experience**. By avoiding responses to out-of-scope queries, you can prevent confusion and keep conversations on track.

## Restrictions

- This feature may struggle with complex or varied off-topic inputs unless paired with [standard Intents](overview.md) or [Intent rules](rules.md).

## Limitations

- You can create only one reject Intent per Flow.

## How to Use

To use this feature, create a reject Intent and add several example sentences.

??? info "Create a Reject Intent"

    === "GUI"
         To create a reject Intent, go to **NLU > Intents** your Flow.
         Under the **Create Intent** button, click ![vertical-ellipsis](https://docs.cognigy.com/_assets/icons/vertical-ellipsis.svg) and select **Create 'Reject Intent'**. 
    
    === "API"
         You can create a reject Intent using the [Cognigy.AI API /v2.0/flows/{flowId}/intents](https://api-trial.cognigy.ai/openapi#post-/v2.0/flows/-flowId-/intents) request and specifying the `"isRejectIntent": true` parameter.

??? info "Add Example Sentences"

    On the **Reject Intent** page, add a list of example sentences representing the user inputs you want the NLU model to ignore.
    Save changes and click **Build Model** to apply them. You can also generate these sentences [using Generative AI](../../generative-ai.md).
    Similar to standard Intents, you can also add [annotations](annotations.md) to each example sentence.

## How to Test

Test your feature in the Interaction Panel:

1. Open the Interaction Panel and activate **Debug Mode**. 
2. Enter examples matching your reject Intent sentences to verify if they're ignored by the NLU model. If the NLU model catches them, the Input object will have the following format:

    ```json
     "nlu": {
        "intentMapperResults": {
          ...
          "intentPath": [
            "Reject Intent"
          ],
          "scores": [
            {
              "id": "f0db738b-e1c3-4841-a6d9-490e082b8ec5",
              "name": "Reject Intent",
              "score": 1,
             ... 
            }
          ]
        },
    ```

## Example

Imagine your AI Agent is designed to assist drivers with parking-related queries.
A user asks `Where can I find a park nearby?` intending a green space rather than a parking lot.
By including similar reject Intent sentences, you can train the AI Agent to filter out these requests, ensuring it stays focused on parking assistance.

??? info "More Reject Example Sentences"
    | **Reject Intent Name** | **Example Sentences**                                                                                                                                                                                                                                                                                   |
    |------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `OutOfScope_Parks`     | - Where can I find a park nearby?<br>- Are there any green spaces around here? <br>- Is there a park I can visit close by? <br>- Where's the nearest nature spot? <br>- Can you point me to a local park? <br>- Are there any nice parks in this area?  <br>- Where can I take a walk in a park nearby? |

## More Information

- [Intents](overview.md)
- [Intent Rules](rules.md)