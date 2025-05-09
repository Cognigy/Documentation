---
title: "Thresholds" 
slug: "thresholds" 
description: "_Thresholds_ are configurable score boundaries used to determine how the NLU interprets and classifies user inputs based on their Intent. These thresholds help the NLU decide whether an intent is confidently recognized, requires reconfirmation, or is not recognized at all."
hidden: false
tags:
  - Cognigy NLU
  - thresholds
---

# Thresholds

The *Thresholds* feature provides configurable score boundaries
that determine how the NLU model interprets and classifies user inputs based on their Intent.
This feature enables precise control over Intent recognition,
ensuring the NLU can confidently identify Intents, prompt for reconfirmation when needed, or reject unclear inputs.

## Key Benefits

- **Improved Accuracy**. Adjustable thresholds enhance the reliability of Intent mapping by setting clear confidence levels. 
- **Flexible Control**. You can fine-tune the system's sensitivity to match specific use cases or performance needs.

## Prerequisites

Before using thresholds, ensure the following:

- An active Flow is set up within the Project.
- Intents are defined to allow the NLU to classify user inputs.

## How to Use

Explore threshold types, then set them up.

### Explore Threshold Types

| **Type**                 | **Description**                                                                                                               |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Confidence Threshold     | Intents with a score higher than this threshold are considered as confirmed.                                                  |
| Reconfirmation Threshold | Intents with a score higher than the reconfirmation threshold but lower than the confidence threshold require reconfirmation. |
| Not Found Threshold      | Intents with a score lower than the reconfirmation threshold aren't considered.                                               |

#### Reconfirmation Threshold Specifics

The reconfirmation threshold behaves differently depending on whether a [confirmation sentence](overview.md#apply-additional-settings) exists in your Intent:

- With a confirmation sentence, the reconfirmation threshold triggers the reconfirmation sentence.
- Without a confirmation sentence, the reconfirmation threshold confirms the user input.

### Set up Thresholds

Thresholds can be configured at either the Flow or Project level. To set them up:

=== "Flow level"
    1. In the Flow editor, go to **Settings > Configuration**.
    2. Activate the **Thresholds** option. As soon as activated, this option overrides the **Thresholds** values set up at the Project level.
    3. Adjust the threshold sliders:
        - **Reconfirmation Threshold** (default: 0.2):
            - Move the slider left to increase reconfirmation prompts.
            - Move the slider right to reduce reconfirmation prompts.
        - **Confidence Threshold** (default: 0.4):
            - Move the slider left to allow lower-confidence matches.
            - Move the slider right to require higher confidence for matches.

=== "Project level"
    1. In the left-side menu of your Project, go to **Manage > Settings**.
    2. Go to **NLU > Thresholds**. 
    3. Adjust the threshold sliders:
        - **Reconfirmation Threshold** (default: 0.2):
            - Move the slider left to increase reconfirmation prompts.
            - Move the slider right to reduce reconfirmation prompts.
        - **Confidence Threshold** (default: 0.4):
            - Move the slider left to allow lower-confidence matches.
            - Move the slider right to require higher confidence for matches.

Fine-tune the sliders: move them closer for decisive responses or farther apart for cautious reconfirmation.

## Example

Imagine a user asks `Can you book a flight?` in the chat with the AI Agent. The NLU model assigns a score to the `BookFlight` Intent:

| **Score** | **Threshold Range**                                                   | **Outcome**                                            | **AI Agent Response**            |
|-----------|-----------------------------------------------------------------------|--------------------------------------------------------|----------------------------------|
| 0.5       | Above confidence threshold (0.4)                                      | The Intent is confirmed and the conversation proceeds. | —                                |
| 0.3       | Between reconfirmation threshold (0.2) and confidence threshold (0.4) | AI Agent seeks confirmation.                           | `Did you mean to book a flight?` |
| 0.1       | Below reconfirmation threshold (0.2)                                  | The Intent not recognized.                             | `I'm not sure what you mean.`    |  

## More Information

- [Intents](overview.md)