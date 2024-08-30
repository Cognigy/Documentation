---
title: "Transfer" 
slug: "transfer-ac" 
hidden: false 
---
# Transfer

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/audiocodes/transfer.png" width="80%" />
  <figcaption>AudioCodes Transfer</figcaption>
</figure>

## Description

{! _includes/ai/node-reference/voice/ac-and-generic-node-deprecation.md!}

The Transfer Node lets you pass an active call to a tel or sip target.

| Parameter            | Type          | Description                                                                                                                     |
|----------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------|
| Reasons              | CognigyScript | The reason for the handover. Will show in AudioCode logs.                                                                       |
| Target               | CognigyScript | The target URI to pass the call to. Typically either a "tel" or "sip" URI.                                                      |
| Referral URL         | CognigyScript | Defines the party (URL) who initiated the call referral                                                                         |
| Transfer SIP Headers | JSON          | Array of objects listing SIP headers that should be sent to the transferee. Each object comprises a name and a value attribute. |
