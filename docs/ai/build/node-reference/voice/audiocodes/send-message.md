---
title: "Send Message" 
slug: "send-message" 
hidden: false 
---
# Send Message

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/audiocodes/send-message.png" width="80%" />
  <figcaption>AudioCodes Send Message</figcaption>
</figure>

## Description

{! _includes/ai/node-reference/voice/ac-and-generic-node-deprecation.md!}

The Send Message Node sends a text (optionally with SSML) to AudioCodes, which then turns this text into speech (TTS) and outputs it to the caller.

| Parameter               | Type                    | Description                                                                                                |
|-------------------------|-------------------------|------------------------------------------------------------------------------------------------------------|
| Text                    | CognigyScript with SSML | The text to send back to AudioCodes. Can contain SSML (either entered manually or via the provided editor) |
| Set Activity Parameters | Toggle                  | Option to add parameters which will be valid for this activity only.                                       |

!!! note "This Node supports Activity Parameters"
    To learn more about activity parameters, visit our Help Center at: [https://support.cognigy.com/hc/en-us/articles/360017413959](https://support.cognigy.com/hc/en-us/articles/360017413959)