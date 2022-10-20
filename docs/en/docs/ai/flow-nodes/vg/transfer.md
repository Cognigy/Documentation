---
 title: "Transfer" 
 slug: "transfer-vg" 
 hidden: false 
---

# Transfer

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/vgv2-transfer-node.png" width="100%" />
  <figcaption>Voice Gateway Transfer Node</figcaption>
</figure>

## Description

<div class="divider"></div>
The Transfer Node let's you pass an active call to a tel or sip target.

| Parameter            | Type          | Description                                                                                                                     |
| -------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Transfer Destination | CognigyScript | E.164 syntax or a SIP URI are supported                                                                                         |
| Custom SIP Headers   | JSON          | Array of objects listing SIP headers that should be sent to the transferee. Each object comprises a name and a value attribute. |