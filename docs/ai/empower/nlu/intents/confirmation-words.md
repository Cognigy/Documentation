---
title: "Confirmation Words"
slug: "confirmation words"
description: "Cognigy.AI Confirmation Words are a manually defined list of words and phrases that the AI Agent recognizes as `yes` or `no` responses."
hidden: false
tags:
  - cognigy nlu
  - confirmation words
  - intents
  - confirmations
  - affirmative words
  - deny words
---

# Confirmation Words

_Confirmation Words_ let you define a custom list of words and phrases that the AI Agent recognizes as `yes` or `no` responses.

This feature is useful for straightforward use cases where you need exact control over how the system recognizes affirmations
(`yes`, `yep`) or negations (`no`, `nah`).

Unlike machine learning-based Intent matching, confirmation words rely on explicit, user-defined terms.
The AI Agent matches user input directly against your list, ensuring predictable behavior without requiring extensive training.

## Key Benefits

- **Simple and precise**. Confirmation words work well for small, predictable sets of responses.
- **Fully customizable**. You decide which words trigger `yes` or `no`.

## Restrictions

- The AI Agent recognizes only exact matches or predefined synonyms from the Confirmation Words list.
- The AI Agent doesn't adapt to new confirmation words variations unless you add them yourself.

## How to Use

You can apply confirmation words globally across all Flows in a Project or customize them for a specific Flow.

=== "Project-Level Settings"
    To use confirmation words for all Flows, do the following:

    1. In the left-side menu of the Project, go to **Manage > Settings**.
    2. On the **Settings** page, click **NLU Settings**.
    3. In the **General Flow Logic** section, select **Confirmation Words**.
    4. Enter the `positive` or `negative` confirmation words, one per line. Save changes.

=== "Flow-Level Settings"
    By default, all Flows inherit the **Confirmation Words** and **Threshold** settings from the Project-level configuration. You can override these settings for a specific Flow.
    To use confirmation words for a specific Flow, do the following:

     1. Open the existing Flow.
     2. In the upper-right corner of the **Flow Editor** page, select **Settings > Configuration**.
     3. In the **General Flow Logic** section, select **Confirmation Words**.
     4. Enter the `positive` or `negative` confirmation words, one per line. Save changes.

## How to Test

Check if confirmation words work as expected via the [Interaction Panel](../../../test/interaction-panel/overview.md):

1. In the existing Flow, open the Interaction Panel by clicking ![interaction-panel](../../../../_assets/icons/interaction-panel.svg) **Chat with your Agent** in the upper-right corner of the page.
2. In the Flow editor, Add a Question Node and select the **Yes/No** input type.
3. Run the Flow by typing a test response including a word from your confirmation list, for example,`yes` or `nope`.
4. On the **Info** tab, select **Input** to view the Input object in JSON format. In the `input.type` object, you will see the answer depending on the user input.

   Positive Confirmation:

    ```json
    "type": "pAnswer",
    ```

   Negative Confirmation:

    ```json
    "type": "nAnswer",
    ```

## More Information

[Yes/No Intents](yes-no-intents.md)