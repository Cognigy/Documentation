# Handover (Voice Gateway)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/2349bf4-vg_handover.JPG" width="100%" />
  <figcaption>Voice Gateway Handover</figcaption>
</figure>

## Description
<div class="divider"></div>
The Handover Node let's you pass an active call to a tel or sip target.

| Parameter | Type | Description |
| ----------- | ----------- | ----------- |
| Reasons | CognigyScript | The reason for the handover. Will show in VG logs. |
| Target | CognigyScript | The target URI to pass the call to. Typically either a "tel" or "sip" URI. |
| Referral URL | CognigyScript | Defines the party (URL) who initiated the call referral |
| Transfer SIP Headers | JSON | Array of objects listing SIP headers that should be sent to the transferee. Each object comprises a name and a value attribute. |
