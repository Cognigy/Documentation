---
title: "Create Outbound Calls"
slug: "create-outbound-calls"
description: "Outbound calls are calls initiated by Voice Gateway to an external endpoint, such as a phone number, call center, or another system capable of handling voice communication."
hidden: false
---

# Create Outbound Calls 

_Outbound calls_ are calls initiated by Voice Gateway to an external endpoint, such as a phone number, call center, or another system capable of handling voice communication.

## Use Cases

Use cases for creating outbound calls may vary. However, two main high-level scenarios can be identified:

- [Transfer a call](#transfer-a-call)
- [Make a follow-up call](#make-a-follow-up-call)

### Transfer a Call

The voice agent orchestrates a transfer (outbound call) to the call center.

Sequence of interactions:

1. A user initiates an inbound call.
2. Voice Gateway passes the call to the voice agent.
3. The voice agent initiates a transfer to the call center via Voice Gateway.
4. The call center receives the transferred call.

To implement this use case, utilize a [Transfer Node](../ai/flow-nodes/vg/transfer.md) in your voice Flow.

### Make a Follow-up Call

The voice agent triggers an outbound call to the user for follow-up purposes,
for example, to provide additional troubleshooting steps,
offer a resolution to the user issue, or follow up on their satisfaction with the support received.

Sequence of interactions:

1. A user provides information during an inbound call to the voice agent.
2. The voice agent triggers an outbound call to the user via a third-party service and Voice Gateway.
3. The user receives the outbound call initiated by the voice agent.

To implement this use case, utilize an [HTTP Request Node](../ai/flow-nodes/services/http-request.md) in your voice Flow, or create an [API Request via Postman or CLI](#create-an-outbound-call-via-api-request).

## Create an Outbound Call via API Request

Send an HTTP POST request to the Voice Gateway API to generate an outbound call.
When the call is answered, the specified webhook will be invoked to manage the call.
Authorization is established via a Bearer token.
This token is filled with an [API key value](webapp/accounts.md#account-level-api-keys) generated in the Voice Gateway Self-Service Portal.

### Request 

=== "cURL"

    ``` text
    curl --location --request POST 'https://<base_url>/v1/Accounts/<account_sid>/Calls' \
    --header 'Authorization: Bearer <valid-api-token>' \
    --header 'Accept: application/json' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "application_sid": "<application_sid>",
        "from": "<caller's phone number>",
        "to": {
            "type": "phone",
            "number": "<callee's phone number>"
            }
    }'
    ```

=== "JSON"

    ```JSON
    POST /v1/Accounts/<account_sid>/Calls HTTP/1.1
    Host: <base_url>
    Authorization: Bearer <valid-api-token>
    Content-Type: application/json
    
    {
        "application_sid": "<application_sid>",
        "from": "<caller's phone number>",
        "to": {
            "type": "phone",
            "number": "<callee's phone number>"
        }
    }
    ```

### Request Parameters

- [Basic Configuration](#basic-configuration)
- [Advanced Configuration](#advanced-configuration)

#### Basic Configuration

The basic configuration provides details for initiating and managing calls, enabling the system to establish a connection between the caller and the callee.
It also includes call duration, handling unanswered calls, and attaching relevant metadata.

The following parameters can be provided in the request body:

| Parameter       | Description                                                                          | Required |
|-----------------|--------------------------------------------------------------------------------------|----------|
| application_sid | The application to invoke when the call is answered.                                 | Yes      |
| from            | The caller's phone number.                                                           | Yes      |
| to              | The callee's phone number.                                                           | Yes      |
| timeLimit       | Maximum length of call in seconds.                                                   | No       |
| timeout         | Ring `no-answer` timeout, in seconds. Default is 60 seconds.                         | No       |
| tag             | An object containing key-value pairs of metadata that will be attached to this call. | No       |

#### Advanced Configuration

The advanced configuration provides a range of features to enhance call handling and management. It includes notifications, interaction hooks, header manipulation and transcription capabilities.

The following parameters can be provided in the request body:

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Required |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| actionHook  | Webhook to invoke when the call ends. The webhook includes properties describing the outcome of the call attempt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | No       |
| amd         | The activation of [Answering Machine Detection](references/events/ANSWERING_MACHINE_DETECTION.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | No       |
| confirmHook | A webhook designed for an application to execute on the callee's end after the dialed number has been answered, but before the call is connected. It allows the caller to provide information to the dialed number, giving them the opportunity to decline the call before answering.                                                                                                                                                                                                                                                                                                                                                        | No       |
| dtmfCapture | An array of strings representing DTMF sequences. When detected, these sequences trigger a mid-call notification to the application via the configured dtmfHook.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | No       |
| dtmfHook    | A webhook to call when a `dtmfCapture` entry is matched. This is a notification only. No response is expected, and any desired actions must be carried out via the REST updateCall API.                                                                                                                                                                                                                                                                                                                                                                                                                                                      | No       |
| headers     | An object containing arbitrary SIP headers to apply to the outbound call attempts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | No       |
| listen      | A nested `listen` action that streams call audio to a remote server over a WebSocket.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | No       |
| referHook   | A webhook that gets triggered when an incoming SIP `REFER` is received on a dialed call. If the application accepts and processes the `REFER`, it should return an HTTP status code of `200` with no body. This will cause Voice Gateway to send a SIP `202 Accepted`.<br>However, if the HTTP response is not successful, Voice Gateway will send a SIP response to the `REFER` with the same status code. Note that Voice Gateway sends the `202 Accepted` code without any further action. Then, it is the third-party application's responsibility to initiate a new call and establish the bridge between the two parties via REST API. | No       |
| transcribe  | A nested `transcribe` action that transcribes a call.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | No       |

### Response

The server responds with HTTP `201` and provides the session identifier (`sid`) of the outbound call session and the call identifier (`callid`) of the `INVITE`.

```JSON 
{
    "sid":"98e4dd21-b178-4af1-83b6-3c1582893890",
    "callid":"8d07a246-f1ac-123b-b8ac-02113b73b840"
} 
```

## More Information

- [Outbound Call Routing](webapp/outbound-call-routing.md)
- [Overview](overview.md)