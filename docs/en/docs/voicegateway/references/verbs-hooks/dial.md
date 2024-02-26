---
title: "Dial"
slug: "dial"
hidden: false
---

# Dial

The `dial` command initiates a new call by connecting to a telephone number, a registered SIP user, or a SIP URI.

The example below illustrates that when the `dial` command is executed, an outbound call attempt is made in an effort to create a new call, which is then bridged to a parent call. The `target` property specifies an array of call destinations that will be attempted simultaneously.

```json
{
  "verb": "dial",
  "actionHook": "/outdial",
  "callerId": "+491173331212",
  "answerOnBridge": true,
  "dtmfCapture": ["*2", "*3"],
  "dtmfHook": {
    "url": "/dtmf",
    "method": "GET"
  },
  "amd": {
    "actionHook": "/amd",
    "disconnectOnAMD": true,

  }
  "target": [
    {
      "type": "phone",
      "number": "+49XXXXXXXXXXX",
      "trunk": "Twilio"
    },
    {
      "type": "sip",
      "sipUri": "sip:49XXXXXXXXXXX@sip.myTrunk.com",
      "auth": {
        "username": "John",
        "password": "Doe"
      }
    },
    {
      "type": "user",
      "name": "jane@sip.example.com"
    }
  ]
}
```

If multiple endpoints are specified in the `target` array, all targets are dialed at the same time (for example, `simring` or `blast outdial` as some people call it), and the call will be connected to the first endpoint that answers (or, optionally, the first call that completes a call screening application as specified in the `confirmHook` property).

There are several types of endpoints that you can dial:

- A telephone number. This call attempt will be sent out through your configured carrier.
- A SIP endpoint, identified by a SIP URI (and possibly authentication parameters).

## Configuration

The full set of configuration parameters:

| Parameter      | Description                                                                                                                                                                                                                                                                                                                                                                                                                               | Required |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| actionHook     | A webhook to invoke when the call ends. The webhook will include the [properties](#actionHook-properties) describing the outcome of the call attempt.                                                                                                                                                                                                                                                                                     | No       |
| amd            | Enable the [answering machine detection](#)                                                                                                                                                                                                                                                                                                                                                                                               | No       |
| answerOnBridge | If set to true, the inbound call will ring until the number that was dialed answers the call, and at that point a 200 OK will be sent on the inbound leg. If false, the inbound call will be answered immediately as the outbound call is placed.<br>Defaults to false.                                                                                                                                                                   | No       |
| callerId       | The inbound caller's phone number, which is displayed to the number that was dialed. The caller ID must be a valid E.164 number.<br>Defaults to the caller ID on the inbound call.                                                                                                                                                                                                                                                        | No       |
| confirmHook    | A webhook for an application to run on the callee's end after the dialed number answers but before the call is connected. This allows the caller to provide information to the dialed number, giving them the opportunity to decline the call, before they answer the call. Note that if you want to run different applications on specific destinations, you can specify the 'url' property on the nested [target](#target-types) object | No       |
| dialMusic      | The URL that specifies a `.wav` or `.mp3` audio file of custom audio or ringback to play to the caller while the outbound call is ringing.                                                                                                                                                                                                                                                                                                | No       |
| dtmfCapture    | An array of strings that represent DTMF sequences which, when detected, will trigger a mid-call notification to the application via the configured `dtmfHook`.                                                                                                                                                                                                                                                                            | No       |
| dtmfHook       | A webhook to call when a `dtmfCapture` entry is matched. This is a notification only - no response is expected.                                                                                                                                                                                                                                                                                                                           | No       |
| headers        | An object containing SIP headers to apply to the outbound call attempt(s).                                                                                                                                                                                                                                                                                                                                                                | No       |
| listen         | A nested [listen](listen.md) action, which will cause audio from the call to be streamed to a remote server over a websocket connection.                                                                                                                                                                                                                                                                                                  | No       |
| referHook      | A webhook to invoke when an incoming SIP REFER is received on a dialed call. If the application wishes to accept and process the REFER, the webhook application should simply return an HTTP status code 200 with no body, and VG will send a SIP 202 Accepted. Otherwise, any HTTP non-success status will cause VG to send a SIP response to the REFER with the same status code.                                                       | No       |
| target         | An array of up to 10 [destinations](#target-types) to simultaneously dial. The entity to answer the call will be connected to the caller and the rest of the called numbers will be hung up.                                                                                                                                                                                                                                              | Yes      |
| timeLimit      | The maximum length of the call in seconds.                                                                                                                                                                                                                                                                                                                                                                                                | No       |
| timeout        | The ring-no-answer timeout, in seconds.<br> Defaults to 60.                                                                                                                                                                                                                                                                                                                                                                               | No       |
| transcribe     | A nested [transcribe](transcribe.md) action, which will cause the call to be transcribed.                                                                                                                                                                                                                                                                                                                                                 | No       |

## Target Types

### PSTN Number

| Parameter   | Description                                                                                                                                                                                                                                | Required |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| type        | Select a `phone` type.                                                                                                                                                                                                                     | Yes      |
| confirmHook | A webhook for an application to run on the callee's end after the dialed number answers but before the call is connected. This will override the confirmHook property set on the parent `dial` command, if any.                            | No       |
| number      | A telephone number in E.164 format.                                                                                                                                                                                                        | Yes      |
| trunk       | If provided, this should be the name of a Carrier that you created in the VG Self-Service portal, which you want to use to complete this call. If not provided, VG will select one of your configured Carriers that has an outbound trunk. | No       |

### SIP Endpoint

| Parameter     | Description                                                                                                                                                                                                       | Required |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| type          | Select a `sip` type.                                                                                                                                                                                              | Yes      |
| confirmHook   | A webhook for an application to run on the callee's end after the dialed number answers but before the call is connected. This will override the `confirmHook` property set on the parent `dial` command, if any. | No       |
| sipUri        | SIP URI to send the call to.                                                                                                                                                                                      | Yes      |
| auth          | Authentication credentials.                                                                                                                                                                                       | No       |
| auth.username | SIP username.                                                                                                                                                                                                     | No       |
| auth.password | SIP password.                                                                                                                                                                                                     | No       |

If the SIP Carrier provider requires username/password authentication, specify the credentials in the `auth` property.

## actionHook properties

The `actionHook` invoked when the `dial` command ends will include the following properties:

| Property Name   | Description                                                                                           |
|-----------------|-------------------------------------------------------------------------------------------------------|
| dial_call_sid   | The unique `call_sid` identifier for the child call.                                                  |
| dial_status     | The final status of the call attempt, one of `completed`, `failed`, `busy`, `no-answer`, or `queued`. |
| dial_sip_status | The SIP status of the final response to the INVITE that was sent.                                     |

## amd.hook properties

The webhook triggers when the `amd` property is used and VG identifies the called party as either human or machine, or detects a tone or beep.

| Property Name | Description                                                                                    |
|---------------|------------------------------------------------------------------------------------------------|
| event         | Indicates one of the following events: `amd`, `beep`, or `silence`.                            |
| amd_type      | Specifies either `human` or `machine`. This property is provided only when the event is `amd`. |