---
title: "Blind Mode"
slug: "blind-mode"
hidden: false
---
# Blind Mode

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/profile/blind-mode.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

Masking data is important for protecting the privacy of users and their sensitive information. In Cognigy.AI, user inputs and responses are logged and analyzed for training. However, these logs can contain personally identifiable information, such as names, addresses, or other sensitive data.

The Blind Mode Node provides options for masking data within the logging, analytics, Intent Trainer records, or conversations entirely. Using this Node, you can ensure that user information remains secure and private.

!!! note
    The user input that triggers the Blind Mode Node will still be unmasked in the logs, analytics, and Intent Trainer records, as they are evaluated before the Blind Mode Node is executed.

## Settings

| Parameter                      | Type   | Description                                                                                                                                                                                                                                                                                             |
|--------------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mask Logging                   | Toggle | Masks user inputs in the [Logs](../../resources/test/logs.md).                                                                                                                                                                                                                                          |
| Mask Analytics                 | Toggle | Masks user inputs in the [Analytics](../../tools/analytics/analytics.md) data, including Contact Profile conversations), and hides them from the message preview in the Insights [Message](../../../insights/message-explorer.md) and [Transcript](../../../insights/transcript-explorer.md) Explorers. |
| Disable Intent Trainer Records | Toggle | Does not record Intents from the conversation.                                                                                                                                                                                                                                                          |
| Disable Conversations          | Toggle | Masks all user inputs both in the Logs and [Analytics](../../tools/analytics/analytics.md) data. Alternatively, if you want to mask data for the entire Flow, you can enable masking at the [Endpoint](../../resources/deploy/endpoints.md) level.                                                      |

## Example

By adding a Blind Mode Node, you can turn on masking at a particular point in the Flow and later turn it off to make the data visible again throughout the conversation. 

For example, place the Blind Mode Node before asking for a user's email, turn it on with the Blind Mode on label, and later turn it off with the Blind Mode off label. This way, all user responses to the email question will be entirely masked, and no one will be able to see them in the conversation records and logs.

As shown in the picture below, note that the user input `Luke` after the question `What is your name?` will not be masked by the Blind Mode Node because the Question Node is placed before it.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/profile/blind-mode-example.png" width="100%" />
</figure>
