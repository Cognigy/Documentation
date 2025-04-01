---
title: "Yes/No Intents"
slug: "yes-no-intents"
hidden: false
---

# Yes/No Intents

[![Version badge](https://img.shields.io/badge/Updated in-v4.98-blue.svg)](../../../../release-notes/4.98.md)

The **Yes/No Intents** feature enables machine learning to determine `yes` and `no` confirmations similar to regular Intent matching. That allows a small set of example sentences to train a model capable of understanding various `yes` and `no` confirmation phrases, introducing a more fluent natural language experience.

In the previous [Confirmation words](../../../administer/access/project-settings.md#additional-confirmation-words) feature, you have a limited range of `yes,` and `no` variations, and you have to customize this by manually adding a list of synonyms. With the **Yes/No Intents** feature, you have a preinstalled vocabulary with the opportunity to add new words, which helps an AI Agent recognize different variations of `yes` and `no` Intents.

Before using Yes/No Intents:

```txt
User: Hello! 
AI Agent: Do you want to play the Star Wars quiz?
User: Certainly
AI Agent: Not sure I understood this correctly. Try again.
```

After using Yes/No Intents:

```txt
User: Hello! 
AI Agent: Do you want to play the Star Wars quiz?
User: Certainly
AI Agent: Let's start!
```

Yes/No Intents feature is supported in the [Question](../../../build/node-reference/basic/question.md), [Optional Question](../../../build/node-reference/basic/optional-question.md) and [Code](../../../build/node-reference/basic/code/overview.md) Nodes.

To set up this feature, do the following:

1. [Select a proper locale or use a default one](#select-a-locale)
2. [Choose whether you want to use local for specific or all Flows](#use-yesno-intents-for-specific-or-all-flows)
3. [Test your Flow by using the Interaction Panel](#test-your-flow-by-using-the-interaction-panel)

### Select a Locale

A separate Yes/No Intents model is trained for each locale configured for the project. Therefore, the Yes/No Intents training is configured separately for each locale. The Universal locale has preinstalled English example sentences.

To configure a locale, do the following:

1. To see the project's configured locales, click **Manage > Localization**.
2. Select a locale and click ![ellipsis](../../../../_assets/icons/vertical-ellipsis.svg), then **Edit Yes/No Intents**.
3. In the **Edit Yes/No Intents** pane, you can configure Intents for the current locale:
    - **Yes Intent** — by default, the setting is toggled on. When the setting is toggled off, the Intent is excluded from the build.
    - **No Intent** — by default, the setting is toggled on. When the setting is toggled off, the Intent is excluded from the build.
    - **Reject Intent** — by default, the setting is toggled on. You need to add examples manually. When the setting is toggled off, the Intent is excluded from the build.
4. Additionally, for Yes and No Intents, you can add [rules](rule-intents.md).
5. Click **Save & Build** to build a model. The Yes/No model is always built when you edit and save settings.

## Use Yes/No Intents for Specific or All Flows

You can use the Yes/No Intents feature for:

- [a specific Flow](#flow-level-settings)
- [all Flows in the Project](#project-level-settings)

### Project-Level Settings

To use Yes/No Intents for all Flows, do the following:

1. In the left-side menu of the Project, go to **Manage > Settings**.
2. On the **Settings** page, click **NLU Settings**.
3. In the **General Flow Logic** section, select one of the following options from the **Yes/No Logic** list:
    - **Confirmation Words** — disables the Yes/No Intents feature. Confirmation words are used the same way as before the Yes/No Intents feature. The option is enabled by default.
    - **Yes/No Intents with extended rules** — evaluates the standard Confirmation words logic first. If the standard Confirmation Words logic fails to determine the input type, the Yes/No Intents model is evaluated.
    - **Yes/No Intents** — evaluates the Yes/No Intents logic for every user input. The standard Confirmation Words logic is only used as a fallback when no Yes, No, or Reject Intents from the Yes/No Intents model are triggered.
4. If you selected **Yes/No Intents – with extended rules** or **Yes/No Intents**, configure **Yes/No threshold**. The confidence threshold slider sets the minimum score required for Yes/No Intents to trigger. A Yes, No, or Reject Intent will only be triggered if the Intent score is greater than or equal to this threshold. This value applies to Yes/No Intents models for all locales.
   You can change this value for a specific Flow.
5. Click **Save** to apply settings and build a model. The Yes/No model is always built when you edit and save settings.

If you have set settings at the project level but want to change them for certain Flows, you should go to the Flow-level settings.

### Flow-level settings

By default, all Flows inherit the **Yes/No Logic** and the **Yes/No threshold** settings from the project-level configuration. You can override these settings for a specific Flow.

To use Yes/No Intents for a specific Flow, do the following:

1. Open the existing Flow.
2. In the upper-right corner of the **Flow Editor** page, select **Settings**.
3. On the **Configuration** tab, in **General Flow Logic** activate the option near the **Yes/No Logic** setting.
4. From the **Yes/No Logic** list, select one of the following options:
    - **Confirmation Words** — disables the current Flow's Yes/No Intents feature. Confirmation words are used the same way as before the Yes/No Intents feature. The option is enabled by default.
    - **Yes/No Intents with extended rules** — evaluates the standard Confirmation Words logic first. If the standard Confirmation Words logic fails to determine the input type, the Yes/No Intents model is evaluated.
    - **Yes/No Intents** — evaluates the Yes/No Intents logic for every user input. The standard Confirmation Words logic is only used as a fallback when no Yes, No, or Reject Intents from the Yes/No Intents model are triggered.
5. If you selected **Yes/No Intents – with extended rules** or **Yes/No Intents**, configure **Yes/No threshold**. The confidence threshold slider sets the minimum score required for Yes/No Intents to trigger. A Yes, No, or Reject Intent will only be triggered if the Intent score is greater than or equal to this threshold. This value applies to Yes/No Intents models for all locales in the current Flow.
6. Click **Save** to apply settings and build a model. The Yes/No model is always built when you edit and save settings.

## Test your Flow by using the Interaction Panel

!!! tip
    Starting from Cognigy 4.47, Yes/No Intents are supported in [Debug Mode](../../../test/interaction-panel/overview.md#debug-mode).

Check if the Yes/No Intent feature works as expected via the [Interaction Panel](../../../test/interaction-panel/overview.md):

1. In the existing Flow, open the Interaction Panel by clicking ![interaction-panel](../../../../_assets/icons/interaction-panel.svg) **Chat with your Agent** in the upper-right corner of the page.
2. Run a Flow.
3. On the **INFO** tab, select **Input** to view JSON. In the `yesNoIntentResults` object, you will see the result of Yes/No Intents model evaluation. Below are examples of possible results:

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
Yes/No Intents are evaluated independently of regular Intents and do not overwrite the existing fields for Intents in the input object. Evaluation of Yes/No Intents only affects the `type` and `yesNoIntentResults`.

## FAQ

**Q1**: What happens if the **Yes/No Logic** is set to **Yes/No Intents**, but both the Yes and No Intents have been individually disabled in the Locale settings?

**A1**: The standard **Confirmation Words** logic is used.

**Q2**: I don’t see Yes/No Intents in the Intent Trainer. Why?

**A2**: Yes/No Intents support has not been implemented in the Intent Trainer.

**Q3**: I don’t see the traffic lights and training feedback when I train Yes/No Intents. Why?

**A3**: The traffic light system has not yet been implemented for Yes/No Intents.

**Q4**: Are Yes/No Intents independent of standard intent scoring?

**A4**: Yes, the Yes/No Intents are completely independent of standard intent scoring (`input.intentScore` or `input.nlu.intentMapperResults`). They specifically find the types `nAnswer` and `yAnswer` within the Flow. These types are used for the **Yes/No** type in [Question Nodes](../../../build/node-reference/basic/question.md) and for [confirming intents](ml-intents.md), similar to [confirmation words](../../../administer/access/project-settings.md#additional-confirmation-words).

**Q5**: How are Yes/No Intents evaluated when the Execute Flow node is used with and without the **Parse Intents** toggled on?

**A5**: Yes/No Intent scoring behavior differs only if the Yes/No Intent settings are different in the two Flows.

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
