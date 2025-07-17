---
title: "Test Mode for Endpoints" 
slug: "test-mode"
description: "Test Mode for Endpoints allows you to send messages to Endpoints without affecting the billable conversation count."
hidden: false 
tags:
  - availability check
  - test mode
  - performance testing
  - monitoring
---

# Test Mode for Endpoints

_Test Mode_ allows you to send messages to Endpoints without affecting the [billable conversation count](../../administer/billing.md#billable-conversation). The messages you send are processed as regular messages between a user and an AI Agent.

## Key Benefits

- **Availability Check**. You can periodically check the availability of your AI Agent.
- **End-To-End Tests**. You can run end-to-end tests in the actual conditions in which AI Agents interact with users and analyze their performance.

## Restrictions

The following Endpoint types support test mode:

- [REST](../endpoint-reference/rest.md), for Cognigy.AI 4.27.0 and later versions.
- [Socket.IO](../endpoint-reference/socketio.md), for Cognigy.AI 4.42.0 and later versions.

## How to Use Test Mode for Endpoints

### REST

To send a message in test mode, prepend `/test/` to the `<URL_TOKEN>` in the `POST` request, as follows:

```text
POST https://<ENDPOINT_BASE_URL>/test/<URL_TOKEN>
```

### Socket.IO

To send a message in test mode, establish a Socket.IO connection with the Socket.IO Endpoint and pass the `testMode` parameter with `true` to `SocketClient`.

#### Use Constructor Options

```javascript
const { SocketClient } = require("@cognigy/socket-client");

const client = new SocketClient("https://socket.url", "socket-token", {
  testMode: true,
});
```

#### Use Manual Socket.IO Setup

```javascript
socketClient = new SocketClient({ /* provide your config parameters */ })
//...

if (config.testMode) {
	socketClient.io.opts.query["testMode"] = "true";
}

socketClient.connect();
//...
```

The examples may differ depending on which Socket.IO client library you use.

## Impact on Billing

The messages you send in test mode don't increase the billable message count in a conversation. However, in addition to the billable conversation count, Cognigy.AI also tracks the total conversation count, which includes test mode messages. Both counts are included in Cognigy.AI's [billing reports](../../administer/billing.md) to prevent misuse. You can send up to 600 test messages per hour. Any rate above this limit may be considered misuse.