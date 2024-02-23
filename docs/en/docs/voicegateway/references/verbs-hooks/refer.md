---
title: "SIP:REFER"
slug: "SIP:REFER"
hidden: false
---

# SIP:REFER

The `sip:refer` command is used to transfer a call and disconnect.

It will send a SIP `REFER` to the far end carrier/SIP trunk or SIP phone, which must support the `REFER` for the transfer to be completed successfully. After the sip:refer completes successfully, the call leg will have left the VG platform.

```json
{
  "verb": "sip:refer",
  "referTo": +49XXXXXXXXXXX,
  "actionHook": "/action"
}
```

## Configuration

The full set of configuration parameters:

| Parameters | Description                                                                                                                   | Required |
|------------|-------------------------------------------------------------------------------------------------------------------------------|----------|
| referTo    | A SIP URI or a phone number/user identifier.                                                                                  | Yes      |
| referredBy | A SIP URI or a phone number/user identifier. If not provided, it will default to the identity of the party being transferred. | No       |
| actionHook | A webhook to call when the transfer has completed.                                                                            | No       |
| eventHook  | A webhook to call when `NOTIFY` messages of follow-on call status are received.                                               | No       |
| headers    | Additional SIP headers to include in the response.                                                                            | No       |

The `sip:refer` verb completes when one of the following conditions is met:

- A failure response is received to the `REFER`.
- A 202 Accepted response is received in response to the `REFER`, and a `NOTIFY` of the follow-on call status with a final call status is received.
- The `sip:refer` has an action hook that will provide details of the final result, as well as an event hook that is called for every `NOTIFY` received after a successful `REFER`.

### actionHook

The actionHook webhook contains the following additional parameters:

| Parameter                  | Description                                                                                                                                                                          |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| referStatus                | The SIP status response to the `REFER` request.                                                                                                                                      |
| final_referred_call_status | The final SIP status of the subsequent call to the transferee. This is provided only in the case where the `REFER` is accepted, and `NOTIFY` requests are received from the far end. |
| eventHook.event            | Transfer status.                                                                                                                                                                     |
| eventHook.call_status      | Contains a SIP status received in a `NOTIFY` after a successful `REFER`.                                                                                                             |

Example:

```json
{
	"event": "transfer-status",
	"call_status": "180"
}
```