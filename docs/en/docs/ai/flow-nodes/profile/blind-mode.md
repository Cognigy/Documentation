---
title: "Blind Mode"
slug: "blind-mode"
hidden: false
---
# Blind Mode

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/blind-mode.jpg" width="80%" />
</figure>

## Description
<div class="divider"></div>

The Blind Mode Node provides options for masking data within the logging, analytics, or disabling conversations entirely. By adding a Blind Mode Node, you can turn on masking at a particular point in the Flow and later turn it off to make the data visible again throughout the conversation. For example, place the Blind Mode Node before asking for a user's email, turn it on with the Blind Mode on label, and later turn it off with the Blind Mode off label. This way, all user responses to the email question will be entirely masked, and no one will be able to see them in the conversation records and logs.

If you want to mask data for the entire Flow, you can enable masking features at the Endpoint level in the Deploy menu.

## Settings

| Parameter                      | Type   | Description                                                                   |
|--------------------------------|--------|-------------------------------------------------------------------------------|
| Mask Logging                   | Toggle | The name of the goal that should be completed when the contact hits the Node. |
| Mask Analytics                 | Toggle | The name of the goal that should be completed when the contact hits the Node. |
| Disable Intent Trainer Records | Toggle | The name of the goal that should be completed when the contact hits the Node. |
| Disable Conversations          | Toggle | The name of the goal that should be completed when the contact hits the Node. |

