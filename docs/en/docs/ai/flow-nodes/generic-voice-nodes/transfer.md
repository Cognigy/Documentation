---
 title: "Transfer" 
 slug: "transfer" 
 hidden: false 
---

# Transfer

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/generic-voice-nodes/images/transfer.png" width="80%" />
  <figcaption>Generic Transfer Node</figcaption>
</figure>

## Description

<div class="divider"></div>
The Transfer Node let's you pass an active call to a tel or sip target.

| Parameter            | Type          | Description                                                                                                                     |
|----------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------|
| Reason               | CognigyScript | The reason for the handover. Will show in VG/AC logs                                                                            |
| Transfer Destination | CognigyScript | E.164 syntax or a SIP URI are supported                                                                                         |
| Custom SIP Headers   | JSON          | Array of objects listing SIP headers that should be sent to the transferee. Each object comprises a name and a value attribute. |