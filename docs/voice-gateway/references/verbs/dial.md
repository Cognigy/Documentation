---
title: "Dial"
slug: "dial"
hidden: false
---

# Dial

The `dial` verb initiates a new call by connecting to a telephone number, a registered SIP user, or a SIP URI.

In the example, the `dial` verb creates a new call and joins it to a parent call. The `target` property specifies multiple call destinations attempted simultaneously.

```json
{
  "verb": "dial",
  "actionHook": "dial",
  "callerId": "+491173331212",
  "answerOnBridge": true,
  "dtmfCapture": ["*2", "*3"],
  "dtmfHook": {
    "url": "/dtmf",
    "method": "GET"
  },
  "amd": {
        "actionHook": "amd",
        "recognizer": {
            "vendor": "microsoft",
            "language": "en-US",
        }
    },
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

When multiple endpoints are mentioned in the `target` array, all the endpoints are dialed at the same time (also known as simring or blast dial). The call will be connected to the first endpoint that answers the call or completes a call screening application, as specified in the `confirmHook` property.

There are several types of endpoints that you can dial:

- A telephone number. This call attempt will be sent out through your configured carrier.
- A SIP endpoint, identified by a SIP URI (and possibly authentication parameters).

## Configuration

The full set of configuration parameters:

| Parameter      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                | Required |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| actionHook     | A webhook to receive HTTP POST when the call ends. The webhook includes the [properties](#actionhook-properties) describing the outcome of the call attempt. Default is `dial`                                                                                                                                                                                                                                                             | No       |
| amd            | Enable the [Answering Machine Detection](amd.md).                                                                                                                                                                                                                                                                                                                                                                                          | No       |
| answerOnBridge | If the parameter for an inbound call is `true`, the call will continue to ring until the dialed number answers. Once the call is answered, a 200 OK message will be sent on the inbound call. However, if this parameter is `false`, the inbound call will be connected as soon as the outbound call is placed.<br>The default value is `false`.                                                                                           | No       |
| callerId       | The inbound caller's phone number, which is displayed to the number that was dialed. The caller ID must be a valid E.164 number.<br>The default value is the caller ID received from the inbound call.                                                                                                                                                                                                                                     | No       |
| confirmHook    | A webhook for an application to run on the callee's end after the dialed number answers but before the call is connected. This allows the caller to provide information to the dialed number, giving them the opportunity to decline the call, before they answer the call. Note that if you want to run different applications on specific destinations, you can specify the `url` property on the nested [target](#target-types) object. | No       |
| dialMusic      | The URL specifies a WAV or MP3 audio file containing custom audio or ringback tones to play for the caller while the outbound call is ringing. The URL doesn't need to include the `.mp3` or `.wav` extension. For example, `https://abc.xyz/music.mp3` or `https://audio.jukehost.co.uk/N5pnlULbup8KabGRE7dsGwHTeIZAwWdr`.                                                                                                                | No       |
| dtmfCapture    | An array of strings representing DTMF sequences that trigger a mid-call notification to the application via the configured `dtmfHook`.                                                                                                                                                                                                                                                                                                     | No       |
| dtmfHook       | A notification-only webhook to trigger on `dtmfCapture` entry matches.                                                                                                                                                                                                                                                                                                                                                                     | No       |
| headers        | An object containing SIP headers to apply to the outbound call attempts.                                                                                                                                                                                                                                                                                                                                                                   | No       |
| listen         | A nested [listen](listen.md) parameter streams call audio to a remote server via websockets.                                                                                                                                                                                                                                                                                                                                               | No       |
| referHook      | A webhook to invoke an application when a SIP `REFER` is received on a dialed call. If the application accepts the `REFER`, it should return HTTP status code `200`, and Voice Gateway will send a SIP `202 Accepted`. Any non-success status will cause Voice Gateway to send a SIP response with the same status code. a webhook to invoke an application when a SIP `REFER` is received on a dialed call.                               | No       |
| target         | An array of up to 10 [destinations](#target-types) to simultaneously dial. The entity to answer the call will be connected to the caller and the rest of the called numbers will be hung up.                                                                                                                                                                                                                                               | Yes      |
| timeLimit      | The maximum length of the call in seconds.                                                                                                                                                                                                                                                                                                                                                                                                 | No       |
| timeout        | The ring-no-answer timeout in seconds.<br> The default value is 60.                                                                                                                                                                                                                                                                                                                                                                        | No       |
| transcribe     | A nested [transcribe](transcribe.md) action, which will cause the call to be transcribed.                                                                                                                                                                                                                                                                                                                                                  | No       |

## Target Types

### PSTN Number

| Parameter   | Description                                                                                                                                                                                                                                                                                      | Required |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| type        | Select a `phone` type.                                                                                                                                                                                                                                                                           | Yes      |
| confirmHook | A webhook that triggers an application on the callee's end after the dialed number answers but before the call is connected. This action will override any `confirmHook` property set on the parent `dial`.                                                                                      | No       |
| number      | A telephone number in E.164 format.                                                                                                                                                                                                                                                              | Yes      |
| trunk       | If provided, this should be the name of a [carrier](../../webapp/carriers.md) that you created in the Voice Gateway Self-Service portal, which you want to use to complete this call. If not provided, Voice Gateway will select one of your configured carriers that has an outbound SIP trunk. | No       |

### SIP Endpoint

| Parameter     | Description                                                                                                                                                                                                 | Required |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| type          | Select a `sip` type.                                                                                                                                                                                        | Yes      |
| confirmHook   | A webhook that triggers an application on the callee's end after the dialed number answers but before the call is connected. This action will override any `confirmHook` property set on the parent `dial`. | No       |
| sipUri        | SIP URI to send the call to.                                                                                                                                                                                | Yes      |
| auth          | Authentication credentials.                                                                                                                                                                                 | No       |
| auth.username | SIP username.                                                                                                                                                                                               | No       |
| auth.password | SIP password.                                                                                                                                                                                               | No       |

If the SIP Carrier provider requires username/password authentication, specify the credentials in the `auth` parameter.

## actionHook properties

After the `dial` verb ends, the `actionHook` will be triggered and it will contain the following properties:

| Property Name   | Description                                                                                           |
|-----------------|-------------------------------------------------------------------------------------------------------|
| dial_call_sid   | The unique `call_sid` identifier for the child call.                                                  |
| dial_status     | The final status of the call attempt, one of `completed`, `failed`, `busy`, `no-answer`, or `queued`. |
| dial_sip_status | The SIP status of the final response to the `INVITE` that was sent.                                   |

## amd.hook properties

The webhook triggers when the `amd` parameter is used and Voice Gateway identifies the called party as either human or machine, or detects a tone or beep.

| Property Name | Description                                                                                    |
|---------------|------------------------------------------------------------------------------------------------|
| event         | Indicates one of the following events: `amd`, `beep`, or `silence`.                            |
| amd_type      | Specifies either `human` or `machine`. This property is provided only when the event is `amd`. |

## More Information

- [TRANSFER_DIAL_ERROR](../events/TRANSFER_DIAL_ERROR.md)
- [TRANSFER_DIAL_SUCCESS](../events/TRANSFER_DIAL_SUCCESS.md)
