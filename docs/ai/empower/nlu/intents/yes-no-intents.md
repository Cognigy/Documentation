---
title: "Yes/No Intents"
slug: "yes-no-intents"
description: "The *Yes/No Intents* feature enables machine learning to detect `yes` and `no` responses similar to Intent matching. With a small set of example sentences, it trains a model to recognize diverse `yes` and `no` phrases, creating a more fluent natural language experience."
hidden: false
tags:
  - Cognigy NLU
  - yes/no intents
  - intents
  - confirmations
  - affirmative words
  - deny words
---

# Yes/No Intents

[![Version badge](https://img.shields.io/badge/Updated in-v4.98-blue.svg)](../../../../release-notes/4.98.md)

The *Yes/No Intents (Beta)* provides a machine learning-powered feature to detect `yes` and `no` responses similarly to traditional Intent matching, enabling a more natural and fluent conversational experience. Training a model with a small set of example sentences recognizes various `yes` and `no` phrases, enhancing an AI Agent's ability to understand user confirmations or denials.

The [Question](../../../build/node-reference/basic/question.md), [Optional Question](../../../build/node-reference/basic/optional-question.md) and [Code](../../../build/node-reference/basic/code/overview.md) Nodes support the Yes/No Intents feature.

## Key Benefits

- **Improved Natural Language Understanding**. Unlike the earlier [Confirmation Words](confirmation-words.md) feature, which required manual synonym definitions, Yes/No Intents use a preinstalled vocabulary that can be expanded. This approach makes it easier to detect diverse expressions.
- **Enhanced User Experience**. Yes/No Intents enable AI Agents to respond accurately to a broader range of affirmative or negative responses, reducing misunderstandings and improving conversations.

## Restrictions

- Yes/No Intents don't support the Intent Trainer.
- Yes/No Intents don't provide training traffic lights feedback, which may limit visibility into model performance.

## How to Use

To set up this feature, do the following:

??? info "Select a Locale"
    Each Locale has its own Yes/No Intents model, requiring separate training. The Universal Locale includes English examples, but additional examples should be added for better accuracy in other languages.

    To configure a locale, do the following:
    
    === "GUI"
        1. To see the Project's configured locales, click **Manage > Localization**.
        2. Select the locale and click ![ellipsis](../../../../_assets/icons/vertical-ellipsis.svg), then **Edit Yes/No Intents**.
        3. In the **Edit Yes/No Intents** pane, you can configure Intents for the current locale:
            - **Yes Intent** — by default, the setting is toggled on. When the setting is toggled off, the Intent is excluded from the build.
            - **No Intent** — by default, the setting is toggled on. When the setting is toggled off, the Intent is excluded from the build.
            - **Reject Intent** — by default, the setting is toggled on. You need to add examples manually. When the setting is toggled off, the Intent is excluded from the build.
        4. Additionally, for Yes and No Intents, you can add [rules](rules.md).
        5. Click **Save & Build** to build a model. The Yes/No model is always built when you edit and save settings.
    
    === "API"
        To create or update sentences for a specific Locale, use the following Cognigy.AI API requests:
        - **Create**: [POST /v2.0/locales/{localeId}/yesnointents/{intentId}/sentences](https://api-trial.cognigy.ai/openapi#post-/v2.0/locales/-localeId-/yesnointents/-intentId-/sentences)
        - **Update**: [PATCH /v2.0/locales/{localeId}/yesnointents/{intentId}/sentences/{sentenceId}](https://api-trial.cognigy.ai/openapi#patch-/v2.0/locales/-localeId-/yesnointents/-intentId-/sentences/-sentenceId-)

??? info "Use Yes/No Intents for Specific or All Flows"
    Select how you want to apply the Yes/No Intents feature: to the entire Project or to the selected Flow.

    === "Project-Level Settings"
        To use Yes/No Intents for all Flows, do the following:
       
        1. In the left-side menu of the Project, go to **Manage > Settings**.
        2. On the **Settings** page, click **NLU Settings**.
        3. In the **General Flow Logic** section, select one of the following options from the **Yes/No Logic** list:
            - **Yes/No Intents with extended rules** — evaluates the standard Confirmation words logic first. If the standard Confirmation Words logic fails to determine the input type, the Yes/No Intents model is evaluated.
            - **Yes/No Intents** — evaluates the Yes/No Intents logic for every user input. The standard Confirmation Words logic is only used as a fallback when no Yes, No, or Reject Intents from the Yes/No Intents model are triggered.
        4. If you selected **Yes/No Intents – with extended rules** or **Yes/No Intents**, configure **Yes/No threshold**. The confidence threshold slider sets the minimum score required for Yes/No Intents to trigger. A Yes, No, or Reject Intent will only be triggered if the Intent score is greater than or equal to this threshold. This value applies to Yes/No Intents models for all locales. You can change this value for a specific Flow.
        5. Click **Save** to apply settings and build a model. The Yes/No model is always built when you edit and save settings.
       
        If you have set settings at the project level but want to change them for certain Flows, you should go to the Flow-level settings.
    
    === "Flow-Level Settings"
         By default, all Flows inherit the **Yes/No Logic** and the **Yes/No threshold** settings from the project-level configuration. You can override these settings for a specific Flow.
         To use Yes/No Intents for a specific Flow, do the following:
    
         1. Open the existing Flow.
         2. In the upper-right corner of the **Flow Editor** page, select **Settings**.
         3. On the **Configuration** tab, in **General Flow Logic** activate checkbox near the **Yes/No Logic** setting.
         4. From the **Yes/No Logic** list, select one of the following options:
            - **Yes/No Intents with extended rules** — evaluates the standard Confirmation Words logic first. If the standard Confirmation Words logic fails to determine the input type, the Yes/No Intents model is evaluated.
            - **Yes/No Intents** — evaluates the Yes/No Intents logic for every user input. The standard Confirmation Words logic is only used as a fallback when no Yes, No, or Reject Intents from the Yes/No Intents model are triggered.
         5. If you selected **Yes/No Intents – with extended rules** or **Yes/No Intents**, configure **Yes/No threshold**. The confidence threshold slider sets the minimum score required for Yes/No Intents to trigger. A Yes, No, or Reject Intent will only be triggered if the Intent score is greater than or equal to this threshold. This value applies to Yes/No Intents models for all locales in the current Flow.
         6. Click **Save** to apply settings and build a model. The Yes/No model is always built when you edit and save settings.

## How to Test

Check if the Yes/No Intent feature works as expected via the [Interaction Panel](../../../test/interaction-panel/overview.md):

1. In the existing Flow, open the Interaction Panel by clicking ![interaction-panel](../../../../_assets/icons/interaction-panel.svg) **Chat with your Agent** in the upper-right corner of the page.
2. Run a Flow.
3. On the **INFO** tab, select **Input** to view JSON. In the `yesNoIntentResults` object, you will see the result of Yes/No Intents model evaluation. 
 
??? info "Examples of possible results"

    === "Yes Intent"
    
          ```json
          "nlu": {
            "yesNoIntentResults": {
                "finalIntentName": "yesIntent",
                "finalIntentScore": 0.8887347172756052,
                "scores": [
                      {
                      "id": "a396391d-3cab-43ab-8b8a-cefd0135041b",
                      "name": "yesIntent",
                      "score": 0.8887347172756052
                      },
                      {
                      "id": "fa2ab1d3-b5cd-4021-91c6-8b642ec51dd8",
                      "name": "noIntent",
                      "score": 0.32411091251643426
                      }
                ]
             }
          },
          "mode": "TextOnly",
          "type": "pAnswer"
          ```
    
    === "No Intent"
    
          ```json
          "nlu": {
            "yesNoIntentResults": {
                "finalIntentName": "noIntent",
                "finalIntentScore": 0.9659235010108965,
                "scores": [
                      {
                      "id": "fa2ab1d3-b5cd-4021-91c6-8b642ec51dd8",
                      "name": "noIntent",
                      "score": 0.9659235010108965
                      },
                      {
                      "id": "a396391d-3cab-43ab-8b8a-cefd0135041b",
                      "name": "yesIntent",
                      "score": 0.021069213045105353
                      },
                      {
                      "id": "c646dd2b-f7d2-45d8-8451-cae95142c81f",
                      "name": "rejectIntent",
                      "score": 0.0034825030367928644
                      }
                ]
            }
          },
          "mode": "TextOnly",
          "type": "nAnswer"
          ```
    === "Reject Intent"
    
          ```json
          "nlu": {
            "yesNoIntentResults": {
                "finalIntentName": "rejectIntent",
                "finalIntentScore": 0.7307951831435443,
                "scores": [
                      {
                      "id": "c646dd2b-f7d2-45d8-8451-cae95142c81f",
                      "name": "rejectIntent",
                      "score": 0.7307951831435443
                      },
                      {
                      "id": "a396391d-3cab-43ab-8b8a-cefd0135041b",
                      "name": "yesIntent",
                      "score": 0.03191703050840985
                      },
                      {
                      "id": "fa2ab1d3-b5cd-4021-91c6-8b642ec51dd8",
                      "name": "noIntent",
                      "score": 0.007946727310282035
                      }
                   ]
                }
          },
          "mode": "TextOnly",
          "type": "Statement"
          ```
    
    === "Fallback Reject Intent"
    
          ```json
          "nlu": {
            "yesNoIntentResults": {
                "finalIntentName": null,
                "finalIntentScore": null,
                "scores": [
                      {
                      "id": null,
                      "name": "null - Fallback Reject Intent",
                      "score": 0.7277484634707633
                      },
                      {
                      "id": "a396391d-3cab-43ab-8b8a-cefd0135041b",
                      "name": "yesIntent",
                      "score": 0.207322792467384
                      },
                      {
                      "id": "c646dd2b-f7d2-45d8-8451-cae95142c81f",
                      "name": "rejectIntent",
                      "score": 0.018095447571065546
                      }
                ]
             }
          },
          "mode": "TextOnly",
          "type": "Statement"
          ```  

Depending on the **Yes/No Logic** setting, the Yes/No Intents model may not be evaluated. In that case, the `yesNoIntentResults` has the default values:

```json
"yesNoIntentResults": {
  "finalIntentName": null,
  "finalIntentScore": null,
  "scores": []
}
```
Yes/No Intents are evaluated independently of regular Intents
and don't overwrite the existing fields for Intents in the Input object.
Evaluation of Yes/No Intents only affects the `type` and `yesNoIntentResults`.

??? info "FAQ"
    **Q1**: What happens if the **Yes/No** logic is set to **Yes/No Intents**, but both `yes` and `no` Intents have been individually disabled in the Locale settings?

    **A1**: The standard **Confirmation Words** logic is used.

    **Q2**: Are Yes/No Intents independent of standard intent scoring?
   
    **A2**: Yes, the Yes/No Intents are completely independent of standard intent scoring (`input.intentScore` or `input.nlu.intentMapperResults`). They specifically find the types `nAnswer` and `yAnswer` within the Flow. These types are used for the **Yes/No** type in [Question Nodes](../../../build/node-reference/basic/question.md) and for [confirming Intents](overview.md), similar to [confirmation words](../../../administer/access/project-settings.md#additional-confirmation-words).
   
    **Q3**: How are Yes/No Intents evaluated when the Execute Flow node is used with and without the **Parse Intents** toggled on?
   
    **A3**: Yes/No Intent scoring behavior differs only if the Yes/No Intent settings are different in the two Flows.
   
    For example:
   
    Prerequisites:
   
    - Flow A has `Yes/No Intents` and only one node, which is an Execute Flow node that executes Flow B.
    - Flow B has `Yes/No Intents - with extended rules` and one Say node.
   
    Scenario 1:
   
    1. The Parse Intents setting is disabled in the Execute Flow node of Flow A.
    2. When the user sends `yes` in Flow A, Yes Intent is triggered in Flow B.
    3. Flow B inherits the Yes/No Logic from Flow A.
   
    Scenario 2:
   
    1. The Parse Intents setting is enabled in the Execute Flow node of Flow A.
    2. When the user sends `yes` in Flow A, Yes Intent is not triggered in Flow B.
    3. Flow B uses its own Yes/No Logic.


## Example

Imagine a user interacting with an AI Agent in a Star Wars quiz:

**Without Yes/No Intents**:  

```txt
User: Hello! 
AI Agent: Do you want to play the Star Wars quiz?
User: Why not
AI Agent: Not sure I understood this correctly. Try again.
```

**With Yes/No Intents**:  

```txt
User: Hello! 
AI Agent: Do you want to play the Star Wars quiz?
User: Why not
AI Agent: Let's start!
```

## More Information

- [Confirmation Words](confirmation-words.md)