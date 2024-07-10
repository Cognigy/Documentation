---
title: "SIP:request"
slug: "SIP:request"
hidden: false
---

# SIP:request

The `sip:request` verb is used to send a SIP `INFO`, `NOTIFY,` or `MESSAGE` request on an established call,
which is an in-dialog request.
This verb allows an application to send SIP messages during a call,
such as transmitting metadata to the calling SIP endpoint using a SIP `INFO` message.

```json
{
  "verb": "sip:request",
  "method": "INFO",
  "headers": {
    "X-Metadata": "my sip metadata"
  },
  "actionHook": "/info"
}
```

## Configuration

The full set of configuration parameters:

| Parameter  | Description                                                                   | Required |
|------------|-------------------------------------------------------------------------------|----------|
| method     | The SIP method, which should be one of `INFO`, `MESSAGE`, or `NOTIFY`.        | Yes      |
| headers    | An object that holds headers (key-value pairs) to include in the SIP request. | No       |
| body       | The body of the SIP request.                                                  | No       |
| actionHook | A webhook to receive an HTTP POST when the SIP request has completed.         | No       |

### Send a Nested Object

To send a nested object, use a string JSON notation of an object. For example:

```json
{
"infoObject": "{\"objectLevel1\": {\"objectLevel2\": {\"objectLevel3\": \"stringValue\"}}}"
}
```

To send a nested object in the `body`, include a `Content-Type` header with the value `application/json`. Then, in the `body` value, use a string notation of a JSON object.