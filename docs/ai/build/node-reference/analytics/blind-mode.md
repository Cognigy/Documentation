---
title: "Blind Mode"
slug: "blind-mode"
hidden: false
---
# Blind Mode

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/analytics/blind-mode.png" width="50%" />
</figure>

## Description

Masking data is important for protecting the privacy of users and their sensitive information. In Cognigy.AI, user inputs and responses are logged and analyzed for training. However, these logs can contain personally identifiable information, such as names, addresses, or other sensitive data.

The Blind Mode Node provides options for masking data within the logging, analytics, Intent Trainer records, or conversations entirely. Using this Node, you can ensure that user information remains secure and private.

## Parameters

| Parameter                      | Type   | Description                                                                                                                                                                                                                                                                                                      |
|--------------------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mask Logging                   | Toggle | Masks user inputs in the [Logs](../../../test/logs.md).                                                                                                                                                                                                                                                          |
| Mask Analytics                 | Toggle | Masks user inputs in the [Analytics](../../../analyze/collecting-data.md) data, including Contact Profile conversations), and hides them from the message preview in the Insights [Message](../../../../insights/explorers/message.md) and [Transcript](../../../../insights/explorers/transcript.md) Explorers. |
| Disable Intent Trainer Records | Toggle | Does not record Intents from the conversation.                                                                                                                                                                                                                                                                   |
| Disable Conversations          | Toggle | Does not collect user inputs for [Analytics](../../../analyze/collecting-data.md) data.                                                                                                                                                                                                                          |

Alternatively, if you want to mask data for the entire Flow, you can enable masking at the [Endpoint](../../../deploy/endpoints/overview.md) level.

## Example

By adding a Blind Mode Node, you can turn on masking at a particular point in the Flow and later turn it off to make the data visible again throughout the conversation. 

For example, place the Blind Mode Node before asking for a user's email, turn it on with the Blind Mode on label, and later turn it off with the Blind Mode off label. This way, all user responses to the email question will be entirely masked, and no one will be able to see them in the conversation records and logs.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/analytics/blind-mode-example.png" width="70%" />
</figure>
