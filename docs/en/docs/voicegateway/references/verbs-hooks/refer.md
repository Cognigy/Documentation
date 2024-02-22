# SIP:REFER

The sip:refer command is used to transfer a call and disconnect. 

It will send a sip REFER to the far end carrier/SIP trunk or SIP phone, which must support the REFER in order for the transfer to be completed successfully. After the sip:refer completes successfully, the call leg will have left the VG platform.

```
{
  "verb": "sip:refer",
  "referTo": +4915683084809,
  "actionHook": "/action"
}
```
You can use the following options in the `sip:refer` command:

| option     | description    | required   |
| ---------- | ----------- | ---------- |
| referTo    | a sip uri or a phone number / user identifier  | yes        |
| referredBy | a sip uri or a phone number / user identifier; if not provided it will default to the identity of the party being transferred | no         |
| actionHook | a webhook to call when the transfer has completed      | no         |
| eventHook  | a webhook to call when NOTIFY messages of follow-on call status are received    | no         |
| headers    | additional SIP headers to include in the response    | no  |

The `sip:refer` verb completes when one of these conditions are met:

- a failure response is received to the REFER
- a 202 Accepted is received in response to the REFER, and a NOTIFY of the follow-on call status with a final call status is received.
- The sip:refer has an action hook that will provide details of the final result, as well as an event hook that is called for every NOTIFY received after a successful REFER.

The actionHook webhook will contain the following additional parameters:

| parameter     | description    |
| ---------- | ----------- |
|referStatus | the sip status response to the REFER request|
|final_referred_call_status | the final sip status of the subsequent call to the transferee. This is only provided in the case where the REFER is accepted and NOTIFY requests are received from the far end |
| eventHook.event | transfer-status |
| eventHook.call_status |  contain a SIP status received in a NOTIFY after a successful REFER; |

Example:

```
{
	"event": "transfer-status",
	"call_status": "180"
}
```