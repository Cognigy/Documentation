---
title: "Create Outbound Calls"
slug: "create-outbound-calls"
description: "Outbound calls are calls initiated by Voice Gateway to an external endpoint, such as a phone number, call center, or another system capable of handling voice communication."
hidden: false
tags:
  - Voice Gateway
  - Outbound
---

# Create Outbound Calls 

_Outbound calls_ are calls initiated by Voice Gateway to an external endpoint, such as a phone number, call center, or another system capable of handling voice communication.

Before initiating an outbound call, ensure you configure an [application](webapp/applications.md), and the phone number you intend to call from is added to [Phone Numbers](webapp/phone-numbers.md).

To initiate an outgoing call, use one of the following methods:

- [Transfer Node](../ai/build/node-reference/voice/voice-gateway/transfer.md)
- REST API request:
    -  [HTTP Request Node](../ai/build/node-reference/service/http-request.md)
    -  [API Request via Postman or CLI](#create-an-outbound-call-via-api-request)

## Create an Outbound Call via API Request

Send an HTTP POST request to the Voice Gateway API to generate an outbound call.
When the call is answered, the specified webhook will be invoked to manage the call.
Authorization is established via a Bearer token.
This token is filled with an [API key value](webapp/accounts.md#account-level-api-keys) generated in the Voice Gateway Self-Service Portal.

### Request

- [Basic Configuration Request](#basic-configuration-request)
- [Advanced Configuration Request](#advanced-configuration-request)

#### Basic Configuration Request

The basic configuration provides details for initiating and managing calls, enabling the system to establish a connection between the caller and the callee.
It also includes call duration, handling unanswered calls, and attaching relevant metadata.

=== "cURL"

    ```text
    curl --location --request POST 'https://<base_url>/v1/Accounts/<account_sid>/Calls' \
    --header 'Authorization: Bearer <valid-api-token>' \
    --header 'Accept: application/json' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "application_sid": "<application_sid>",
        "from": "<caller's phone number>",
        "callerName": "<display name>",
        "to": {
                "type": "phone",
                "number": "<callee's phone number>",
                "trunk": "<carrier name>"
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
        "callerName": "<display name>",
        "to": {
            "type": "phone",
            "number": "<callee's phone number>",
            "trunk": "<carrier name>"      
        }
    }
    ```

The following parameters can be provided in the request body:

| Parameter                 | Type                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Required |
|---------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| application_sid           | String                                              | The application to invoke when the call is answered.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Yes      |
| from                      | String                                              | The user portion that identifies the caller within the domain. The user portion follows the format: `<sip:user@host>`, where `user` can be:<br>- A username, for example, `<sip:john@host>`. <br>- A phone number (E.164 format), for example, `<sip:+1234567890@host>`. <br>- A unique identifier, for example, `<sip:device001@host>`.                                                                                                                                                                                                   | Yes      |
| fromHost                  | String                                              | The domain of the caller, which is a part of the SIP address included in the `From` header of a SIP request. The domain follows the format: `<sip:user@host>`. For example, `<sip:user@cognigy.cloud>`, where `cognigy.cloud` is the domain where the caller's SIP service is hosted.                                                                                                                                                                                                                                                      | No       |
| callerName                | String                                              | A descriptive caller name that appears as the display name in a SIP request. This name is included in the `From` header, alongside the SIP address, in the following format: `From: "<callerName>" <sip:user@host>`. For example, `"John Doe" <sip:user@cognigy.cloud>`, where `"John Doe"` is the caller name and `<sip:user@cognigy.cloud>` is the SIP address.                                                                                                                                                                          | No       |
| to                        | [TargetType](references/verbs/dial.md#target-types) | The destination target, either a phone number or a SIP URI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Yes      |
| timeout                   | Number                                              | The time the system waits for an answer before considering the call unanswered. The default value is 60 seconds.                                                                                                                                                                                                                                                                                                                                                                                                                           | No       |
| tag                       | Object                                              | An object containing key-value pairs of metadata to be attached to this call. This metadata can be used for further call analysis, allowing you to track call details, identify patterns, and generate insightful reports.                                                                                                                                                                                                                                                                                                                 | No       |
| headers                   | Object                                              | An object containing custom SIP headers that can be applied to outbound call attempts. These headers are added alongside the system (default) headers in the SIP request. Custom SIP headers provide more control over the call setup process, such as adjusting authentication, routing, or other specific SIP parameters. For example, an custom header could be `P-Preferred-Identity: <sip:+123456@sip.cognigy.cloud>`, where the caller's preferred identity is the specified phone number or SIP address to present during the call. | No       |
| speech_synthesis_vendor   | String                                              | The vendor responsible for the speech synthesis service (Text-to-Speech, TTS). For example, `microsoft`.                                                                                                                                                                                                                                                                                                                                                                                                                                   | No       |
| speech_synthesis_voice    | String                                              | The specific voice to be used for speech synthesis. For example, `de-DE-SeraphinaMultilingualNeural`.                                                                                                                                                                                                                                                                                                                                                                                                                                      | No       |
| speech_synthesis_language | String                                              | The language in which the speech should be synthesized. For example, `en-US` for American English, `es-ES` for Spanish.                                                                                                                                                                                                                                                                                                                                                                                                                    | No       |
| amd                       | Object ([AMD](references/verbs/amd.md))             | The Automatic Machine Detection (AMD) feature, which identifies whether a human or a machine answered a call.                                                                                                                                                                                                                                                                                                                                                                                                                              | No       |
| notifyUrl | String/Object | An additional HTTP or WebSocket hook to receive status updates about the call, used alongside the Call Status Webhook in the application. This parameter can be configured as a simple URL (String) for the default POST request or as an object `{ "url": "", "method": "" }` to specify a different method. The choice between HTTP and WebSocket depends on your specific requirements.  The most common choice is a standard HTTP hook, but a WebSocket URL can be used if desired, as it is supported for internal communication with Cognigy.AI. | No |

#### Advanced Configuration Request

The advanced configuration provides a range of features to enhance call handling and management. It includes notifications, interaction hooks, header manipulation and transcription capabilities.

In the example below,
we enable the [Answering Machine Detection](references/verbs/amd.md) feature
using the `amd` parameter
and use the `actionHook` parameter to send the events to the [Webhook](https://webhook.site/) site.
Via `timeout`, we define a maximum ringing time. If the call is not answered within this time, Voice Gateway stops calling (see the [NO_ANSWER](references/events/NO_ANSWER.md) event).
We include tags in the `tag` parameter to send custom information about the user,
such as a custom object, as well as `headers` to send custom headers.

=== "cURL"

    ```text
    curl --location --request POST 'https: //<base_url>/v1/Accounts/<account_sid>/Calls' \
    --header 'Authorization: Bearer <valid-api-token>' \
    --header 'Accept: application/json' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "application_sid": "<application_sid>",
        "from": "<caller's phone number>",
        "fromHost": "cognigy.cloud",
        "callerName": "Vacation Agent",
        "to": {
            "type": "phone",
            "number": "<callee's phone number>",
            "trunk": "<carrier name>"
        },
        "amd": {
            "actionHook": "https://webhook.site/<webhook-id>"
        },
        "timeout": 20,        
        "tag": {
            "env": "app",
            "internalId": "ABDC1234",
            "Customer": {
                "firstName": "Sara",
                "lastName": "Doe",
                "mobileNumber": "<callee's phone number>",
                "email": "sara.doe@cognigy.com",
                "salutation": "Ms"
            }
        },
        "headers": {
            "User-to-User": "UUID: <number>"
        },
        "notifyUrl": "https://webhook.site/<webhook-id>"
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
      "fromHost": "cognigy.cloud",
      "callerName": "Vacation Agent",
      "to": {
        "type": "phone",
        "number": "<callee's phone number>",
        "trunk": "<carrier name>"
      },
      "amd": {
        "actionHook": "https://webhook.site/<webhook-id>"
      },
      "timeout": 20,
      "tag": {
        "env": "app",
        "internalId": "ABDC1234",
        "Customer": {
          "firstName": "Sara",
          "lastName": "Doe",
          "mobileNumber": "<callee's phone number>",
          "email": "sara.doe@cognigy.com",
          "salutation": "Ms"
        }
      },
      "headers": {
        "User-to-User": "UUID: <number>"
      },
      "notifyUrl": "https://webhook.site/<webhook-id>"
    }
    ```



### Response

The server responds with HTTP `201` and provides the session identifier (`sid`) of the outbound call session and the call identifier (`callid`) of the `INVITE`.

```JSON 
{
    "sid":"98e4dd21-b178-4af1-83b6-3c1582893890",
    "callid":"8d07a246-f1ac-123b-b8ac-02113b73b840"
} 
```

## Use Cases

Use cases for creating outbound calls may vary. As examples, consider the following use cases:

- [Transfer a call](#transfer-a-call)
- [Make a follow-up call](#make-a-follow-up-call)

### Transfer a Call

The voice agent orchestrates a transfer (outbound call) to the call center.

Sequence of interactions:

1. A user initiates an inbound call.
2. Voice Gateway passes the call to the voice agent.
3. The voice agent initiates a transfer to the call center via Voice Gateway.
4. The call center receives the transferred call.

To implement this use case, use a [Transfer Node](../ai/build/node-reference/voice/voice-gateway/transfer.md) in your voice Flow.

### Make a Follow-up Call

The voice agent triggers an outbound call to the user for follow-up purposes,
for example, to provide additional troubleshooting steps,
offer a resolution to the user issue, or follow up on their satisfaction with the support received.

Sequence of interactions:

1. A user provides information during an inbound call to the voice agent.
2. The voice agent triggers an outbound call to the user via a third-party service and Voice Gateway.
3. The user receives the outbound call initiated by the voice agent.

To implement this use case, use an [HTTP Request Node](../ai/build/node-reference/service/http-request.md) in your voice Flow, or create an [API Request via Postman or CLI](#create-an-outbound-call-via-api-request).

## More Information

- [Outbound Call Statuses](call-statuses.md)
- [Outbound Call Routing](webapp/outbound-call-routing.md)
- [Overview](overview.md)