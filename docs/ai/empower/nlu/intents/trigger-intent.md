---
title: "Trigger Intent" 
slug: "trigger-intent"
description: "In Cognigy.AI, the Trigger Intent feature lets you manually activate a specific Intent in your Flow using the syntax `cIntent:` followed by the Intent name, overriding regular Intent mapping."
hidden: false
tags:
  - Cognigy NLU
  - trigger specific intent
  - trigger intent
---

# Trigger Intent

The _Trigger Intent_ feature lets you
manually activate a specific Intent in your Flow using the syntax `cIntent:` followed by the Intent name.
This feature overrides the default Intent mapping process, giving you precise control over the Flow's next steps based on user input, such as a message or button click.

Use the Trigger Intent feature when you need to:

- Skip NLU processing and direct the Flow to a specific Intent.
- Ensure consistent navigation in response to button clicks or system actions.
- Improve the user experience by minimizing errors from misinterpreted user input.

## Key Benefits

- **Precise Flow Control**. Ensures the correct Intent drives the Flow forward.
- **Postback Support**. Triggers a specific Intent smoothly when a user clicks a button with a Postback value.

## Prerequisites

Before using this feature, ensure the following:

1. You set up your Flow with specific Intents for the scenarios you want to trigger.
2. You have a Say, Question, or Optional Question Node in the Flow editor.

## Restrictions

- This feature bypasses full NLU processing, preventing default replies from triggering and automatically setting the Intent score to 1. Don't use this feature for general NLU analysis.

## How to Use

1. In the Flow editor, identify the Intent needed to continue your Flow. For example, `Continue Booking`.
2. In a Say, Question, or Optional Question Node, use the syntax `cIntent:Continue Booking` as a Postback value in [Output Types](../../../build/node-reference/basic/say.md) that support Postbacks. 
    Follow these syntax rules:
    - No space should follow the colon, though spaces within the Intent name are allowed. For example, `cIntent:Continue Booking`.
    - _(Optional)_ Add a text for Slot parsing after a pipe symbol (`|`). For example, `cIntent:continueBooking|book tomorrow`.

## How to Test

Test the feature in the Interaction Panel:

1. Open the Interaction Panel and enable **Debug Mode**.
2. Test your Flow with the `cIntent:continueBooking` Postback value. The system debug message shows:
    ```text
    Intent Match
    Flow: Slots
    Intent: Continue Booking
    Intent score: 1
    ```
3. Test your Flow with the `cIntent:continueBooking|book tomorrow` to verify Slot extraction, for example, `tomorrow`. The system debug message shows:
    ```text
    System Slot Match
    Start: February 26, 2025 (2025-02-26T00:00:00+01:00)
    Text: tomorrow
    Slot: DATE
    ```

## More Information

- [Intents](overview.md)
- [Slots](../slots/overview.md)