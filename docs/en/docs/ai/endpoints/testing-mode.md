---
 title: "Testing Mode for Endpoints" 
 slug: "endpoint-testing-mode" 
 hidden: true 
---

# Testing Mode for Endpoints

## Description

<div class="divider"></div>

Testing Mode for Endpoints allows to send messages to existing Endpoints that are not affecting the "Billable Conversation Count" and will be processed in the same way as a regular message.

You can use them to:

- Periodically check the availability of your Virtual Agent.
- Run End-To-End tests given the conditions of particular End-User environments.

## Availability

<div class="divider"></div>

The "Testing Mode" is supported by the following Endpoint Types:

| Endpoint | Supported Since Cognigy.AI Version |
| -- | -- |
| [REST](/ai/endpoints/rest) | `>= v4.27.0` |
| [Socket.io](/ai/endpoints/socketio) | `>= v4.40.4` |

## Usage Instructions
<div class="divider"></div>

Below, you can find usage instructions on the "Testing Mode" for the individually supported Endpoint Types.

### REST Endpoint

To submit a "Test Mode" message, prepend `/test/` before the `<URL TOKEN>` in the URL like this:

```
POST https://<ENDPOINT_BASE_URL>/test/<URL_TOKEN>
```

### Socket.io Endpoint

To submit the "Test Mode" message, establish a socket connection with a Cognigy Socket Endpoint and pass the `test Mode` query parameter with the `true` option in the socket client. You can see the example below. This example may differ depending on which socket client library is used:

```
socketClient = new SocketClient({<provide your config parameters>})
...

if (config.testMode) {
	socketClient.io.opts.query["testMode"] = "true";
}

socketClient.connect();
...
```
## Impact on Billing

<div class="divider"></div>

Messages that were sent using the "Testing Mode" will not increase the "Billable Message Count" in a Conversation. 
If a Conversation exclusively consists of Inputs that were received using the "Testing Mode", it will have `0` counted Inputs and will not be billed.

However, in addition to the "Billable Conversation Count", Cognigy.AI also tracks "Total Conversation Count, including Testing Mode", and both metrics are contained in the "Billing Reports" to Cognigy in order to prevent abusive usage. A maximum of 600 Test Messages per Hour are considered non-abusive.