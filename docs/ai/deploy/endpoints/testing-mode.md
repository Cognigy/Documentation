---
title: "Testing Mode for Endpoints" 
slug: "endpoint-testing-mode" 
hidden: true 
---

# Testing Mode for Endpoints

Testing Mode for Endpoints allows sending messages to existing Endpoints that are not affecting the Billable Conversation Count and will be processed in the same way as a regular message.

You can use them to:

- Periodically check the availability of your AI Agent.
- Run End-To-End tests given the conditions of particular End-User environments.

## Availability

The Testing Mode is supported by the following Endpoint Types:

| Endpoint                                       | Supported Since Cognigy.AI Version |
|------------------------------------------------|------------------------------------|
| [REST](../endpoint-reference/rest.md)          | `>= v4.27.0`                       |
| [Socket.io](../endpoint-reference/socketio.md) | `>= v4.42.0`                       |

## Usage Instructions

Below, you can find usage instructions on the Testing Mode for the individually supported Endpoint Types.

### REST Endpoint

To submit a Test Mode message, prepend `/test/` before the `<URL TOKEN>` in the URL like this:

```
POST https://<ENDPOINT_BASE_URL>/test/<URL_TOKEN>
```

### Socket.io Endpoint

To submit the Test Mode message, establish a socket connection with a Cognigy Socket Endpoint and pass the `testMode` parameter with `true` to SocketClient. You can see the example below. This example may differ depending on which Socket.IO client library is used:

```javascript
const { SocketClient } = require("@cognigy/socket-client");

const client = new SocketClient("https://socket.url", "socket-token", {
  testMode: true,
});

```

```javascript
socketClient = new SocketClient({<provide your config parameters>})
...

if (config.testMode) {
	socketClient.io.opts.query["testMode"] = "true";
}

socketClient.connect();
...
```

## Impact on Billing

Messages that were sent using the Testing Mode will not increase the Billable Message Count in a Conversation. 
If a Conversation exclusively consists of Inputs that were received using the Testing Mode, it will have `0` counted Inputs and will not be billed.

However, in addition to the Billable Conversation Count, Cognigy.AI also tracks Total Conversation Count, including Testing Mode, and both metrics are contained in the Billing Reports to Cognigy in order to prevent abusive usage. A maximum of 600 Test Messages per Hour are considered non-abusive.