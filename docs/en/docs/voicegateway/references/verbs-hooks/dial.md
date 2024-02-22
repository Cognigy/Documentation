# Dial

The dial command is used to create a new call by dialing out to a telephone number, a registered sip user, or a sip URI.

```
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
      "number": "+4915083084809",
      "trunk": "Twilio"
    },
    {
      "type": "sip",
      "sipUri": "sip:495156333456@sip.myTrunk.com",
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

As the example above illustrates, when dial command is executed an outbound call attempt is made in an effort to create one new call, which is bridged to a parent call. The target property specifies an array of call destinations that will be attempted simultaneously.

If multiple endpoints are specified in the target array, all targets are outdialed at the same time (e.g., "simring", or "blast outdial" as some folks call it) and the call will be connected to the first endpoint that answers the call (or, optionally, the first call that completes a call screening application as specified in the confirmHook property).

There are several types of endpoints that you can dial:

- a telephone phone number -- this call attempt will be sent out through your configured Carrier,
- a webrtc or sip client that has registered directly with your subdomain,
- a sip endpoint, identified by a sip uri (and possibly authentication parameters), or


You can use the following attributes in the `dial` command:

| option         | description | required |
| -------------- | ----------- | -------- |
| actionHook     | webhook to invoke when the call ends. The webhook will include [properties](#dial-action-properties) describing the outcome of the call attempt. | no       |
| amd            | enable [answering machine detection]() | no       |
| answerOnBridge | If set to true, the inbound call will ring until the number that was dialed answers the call, and at that point a 200 OK will be sent on the inbound leg. If false, the inbound call will be answered immediately as the outbound call is placed.<br>Defaults to false. | no       |
| callerId       | The inbound caller's phone number, which is displayed to the number that was dialed. The caller ID must be a valid E.164 number.<br>Defaults to caller id on inbound call. | no       |
| confirmHook    | webhook for an application to run on the callee's end after the dialed number answers but before the call is connected. This allows the caller to provide information to the dialed number, giving them the opportunity to decline the call, before they answer the call. Note that if you want to run different applications on specific destinations, you can specify the 'url' property on the nested [target](https://www.jambonz.org/docs/webhooks/dial/#target-types) object. | no       |
| dialMusic      | url that specifies a .wav or .mp3 audio file of custom audio or ringback to play to the caller while the outbound call is ringing. | no       |
| dtmfCapture    | an array of strings that represent dtmf sequence which, when detected, will trigger a mid-call notification to the application via the configured `dtmfHook` | no       |
| dtmfHook       | a webhook to call when a dtmfCapture entry is matched. This is a notification only -- no response is expected, and any desired actions must be carried out via the REST updateCall API.   | no       |
| headers        | an object containing arbitrary sip headers to apply to the outbound call attempt(s) | no       |
| listen         | a nested [listen](https://www.jambonz.org/docs/webhooks/listen) action, which will cause audio from the call to be streamed to a remote server over a websocket connection | no       |
| referHook      | webhook to invoke when an incoming SIP REFER is received on a dialed call. If the application wishes to accept and process the REFER, the webhook application should simply return an HTTP status code 200 with no body, and jambonz will send a SIP 202 Accepted. Otherwise, any HTTP non-success status will cause jambonz to send a SIP response to the REFER with the same status code.<br><br>Note that jambonz will send the 202 Accepted and do nothing further. It is the responsibility of the third-party application to then outdial a new call and bridge the other leg, presumably by using the REST API. See [this example app](https://github.com/jambonz/sip-blind-transfer) for more details. | no       |
| target         | array of to 10 [destinations](https://www.jambonz.org/docs/webhooks/dial/#target-types) to simultaneously dial. The first person (or entity) to answer the call will be connected to the caller and the rest of the called numbers will be hung up. | yes      |
| timeLimit      | max length of call in seconds   | no       |
| timeout        | ring no answer timeout, in seconds.<br>Defaults to 60. | no       |
| transcribe     | a nested [transcribe](https://www.jambonz.org/docs/webhooks/dial/#transcribe) action, which will cause the call to be transcribed  | no       |


## Targt Types

### PSTN number
| option      | description | required |
| ----------- | -----------------| -------- |
| type        | must be "phone" | yes      |
| confirmHook | A webhook for an application to run on the callee's end after the dialed number answers but before the call is connected. This will override the confirmHook property set on the parent dial verb, if any. | no       |
| number      | a telephone number in E.164 number. | yes      |
| trunk       | if provided, this should be the name of a Carrier that you created in the jambonz portal or API, which you want to use to complete this call. If not provided, jambonz will selectone of your configured Carriers that has an outbound trunk. | no       |

### Sip-endpoint

| option        | description | required |
| ------------- | ----------------- -------- |
| type          | must be "sip" | yes      |
| confirmHook   | A webhook for an application to run on the callee's end after the dialed number answers but before the call is connected. This will override the confirmHook property set on the parent dial verb, if any. | no       |
| sipUri        | sip uri to send call to | yes      |
| auth          | authentication credentials | no       |
| auth.username | sip username | no       |
| auth.password | sip password | no       |

Using this approach, it is possible to send calls out a sip trunk. If the sip trunking provider enforces username/password authentication, supply the credentials in the auth property.

### Registered WebRTC or SIP User

| option      | description | required |
| ----------- | ------------------ | -------- |
| type        | must be "user" | yes      |
| confirmHook | A webhook for an application to run on the callee's end after the dialed number answers but before the call is connected. This will override the confirmHook property set on the parent dial verb, if any. | no       |
| name        | registered sip user, including domain (e.g. "[joeb@sip.jambonz.org](mailto:joeb@sip.jambonz.org)")                                                                                                         | yes      |


## actionHook properties

The actionHook that is invoked when the dial command ends will include the following properties:
| property name   | description                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| dial_call_sid   | the unique call_sid identifier for the child call                                                    |
| dial_status     | the final status of the call attempt, one of 'completed', 'failed', 'busy', 'no-answer', or 'queued' |
| dial_sip_status | the sip status of the final response to the INVITE that was sent<br><br>                             |

## amd.hook properties

The webhook that is invoked when amd property is included and jambonz has either determined the type of called party (human or machine) or has detected a tone or beep.

| property name | description                                            |
| ------------- | ------------------------------------------------------ |
| event         | one of 'amd', 'beep', or 'silence'                     |
| amd_type      | 'human' or 'machine', only provided when event = 'amd' |