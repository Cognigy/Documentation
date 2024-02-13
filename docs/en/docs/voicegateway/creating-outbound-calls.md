---
title: "Create Outbound Calls"
slug: "create-outbound-calls"
hidden: false
---

# Create Outbound Calls 

Outbound calls are created in a few different ways: 

- [Transfer Node](../ai/flow-nodes/vg/transfer.md)
- REST API POST request:
    - [HTTP Request Node](../ai/flow-nodes/services/http-request.md)
    - [API Request via Postman or CLI](#create-an-outbound-call-via-api-request)

## Create an Outbound Call via API Request

Send an HTTP POST request to the Voice Gateway API to generate an outbound call.
When the call is answered, the specified webhook will be invoked to manage the call.
Authorization is established via a Bearer token
filled with an [API key value](webapp/accounts.md#account-level-api-keys) generated in the Voice Gateway Self-Service Portal.

### Request 

=== "cURL"

    ``` text
    curl --location --request POST 'https://<base_url>/v1/Accounts/<account_sid>/Calls' \
    --header 'Authorization: Bearer <valid-api-token>' \
    --header 'Accept: application/json' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "application_sid": "<application_sid>",
        "from": "<number of a Voice Bot>",
        "to": {
            "type": "phone",
            "number": "<number of a User>"
            }
    }'
    ```

=== "JSON"

    ```JSON
    POST /v1/Accounts/<account_sid>/Calls HTTP/1.1
    Host: <base_url>
    Authorization:  <api_key>
    Content-Type: application/json
    
    {
        "application_sid": "<application_sid>",
        "from": "<number of a Voice Bot>",
        "to": {
            "type": "phone",
            "number": "<number of a User>"
        }
    }
    ```

### Request Parameters

- [Basic Configuration](#basic-configuration)
- [Advanced Configuration](#advanced-configuration)

#### Basic Configuration

The basic configuration provides details for initiating and managing calls, enabling the system to establish a connection between the caller and the callee.
It also includes call duration, handling unanswered calls, and attaching relevant metadata.

The following parameters can be provided in the body of the request:

| Option          | Description                                                                          | Required |
|-----------------|--------------------------------------------------------------------------------------|----------|
| application_sid | The application to invoke when the call is answered.                                 | Yes      |
| from            | The calling party phone number.                                                      | Yes      |
| to              | The destination to dial to.                                                          | Yes      |
| timeLimit       | Maximum length of call in seconds.                                                   | No       |
| timeout         | Ring `no-answer` timeout, in seconds. Default is 60 seconds.                         | No       |
| tag             | An object containing key-value pairs of metadata that will be attached to this call. | No       |

#### Advanced Configuration

The advanced configuration provides a range of features to enhance call handling and management. It includes notifications, interaction hooks, header manipulation and transcription capabilities.

The following parameters can be provided in the body of the request:

| Option      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Required |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| actionHook  | Webhook to invoke when the call ends. The webhook will include properties describing the outcome of the call attempt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | No       |
| amd         | Enable [Answering Machine Detection](references/events/ANSWERING_MACHINE_DETECTION.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | No       |
| confirmHook | Webhook for an application to run on the callee's end after the dialed number answers but before the call is connected. This allows the caller to provide information to the dialed number, giving them the opportunity to decline the call, before they answer the call.                                                                                                                                                                                                                                                                                                                        | No       |
| dtmfCapture | An array of strings that represent DTMF sequences which, when detected, will trigger a mid-call notification to the application via the configured dtmfHook.                                                                                                                                                                                                                                                                                                                                                                                                                                     | No       |
| dtmfHook    | A webhook to call when a dtmfCapture entry is matched. This is a notification only. No response is expected, and any desired actions must be carried out via the REST updateCall API.                                                                                                                                                                                                                                                                                                                                                                                                            | No       |
| headers     | An object containing arbitrary SIP headers to apply to the outbound call attempts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | No       |
| listen      | A nested listen action, which will cause audio from the call to be streamed to a remote server over a websocket connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | No       |
| referHook   | Webhook to invoke when an incoming SIP REFER is received on a dialed call. If the application wishes to accept and process the REFER, the webhook application should simply return an HTTP status code 200 with no body, and VG will send a SIP 202 Accepted. Otherwise, any HTTP non-success status will cause VG to send a SIP response to the REFER with the same status code. Note that VG will send the 202 Accepted and do nothing further. It is the responsibility of the third-party application to then outdial a new call and bridge the other leg, presumably by using the REST API. | No       |
| transcribe  | A nested transcribe action, which will cause the call to be transcribed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | No       |

### Response

The response is an HTTP 201 with a body containing the `call_sid` of the outbound call session and the SIP Call-ID of the INVITE sent by the feature-server. 

```JSON
{
    "sid":"98e4dd21-b178-4af1-83b6-3c1582893890",
    "callId":"8d07a246-f1ac-123b-b8ac-02113b73b840"
} 
```

## More Information

- [Overview](overview.md)