---
 title: "Transfer" 
 slug: "transfer" 
 hidden: false 
---

# Transfer

[![Version badge](https://img.shields.io/badge/Updated in-v4.65-blue.svg)](../../../../../release-notes/4.64.md)

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/generic-voice/transfer.png" width="80%" />
  <figcaption>Generic Transfer</figcaption>
</figure>

## Description

{! _includes/ai/node-reference/voice/ac-and-generic-node-deprecation.md!}

The Transfer Node lets pass an active call to a tel or sip target.

| Parameter            | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|----------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Reason               | CognigyScript | The reason for the handover. Will show in VG/AC logs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Transfer Destination | CognigyScript | E.164 syntax or a SIP URI are supported                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Referred By          | String        | This parameter is optional.<br><br> This setting allows you to change the original Referred By value, which can be a SIP URI or a user identifier such as a phone number. To define the Referred By value, you can use the following patterns:<br>- **SIP URI** - `sip:[referred-by]@custom.domain.com`. In this case, the entire SIP URI will be sent as the Referred-By header. Example: `"Referred-by": "sip:CognigyOutbound@custom.domain.com"`.<br>- **User Identifier** - `sip:[referred-by]@[SIP FROM Domain from carrier config]`. Example, `"Referred-By": "sip:CognigyOutbound@sip.cognigy.ai"`. |
| Custom SIP Headers   | JSON          | Array of objects listing SIP headers that should be sent to the transferee. Each object comprises a name and a value attribute.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |