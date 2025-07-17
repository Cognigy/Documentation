---
title: "Socket.IO" 
slug: "socket-io"
description: "The Socket.IO Endpoint enables you to connect your AI Agent to the Socket.IO client."
hidden: false
tags:
  - socket.io
  - socket.io endpoint
---

# Socket.IO

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/socket-io.svg" width="100%" />
</figure>

{! _includes/release-notes/handover-providers-deprecation.md !}

The Socket.IO Endpoint enables you to connect your AI Agent to the Socket.IO client.

## Prerequisites

- Familiarity with the [Socket.IO library](https://socket.io/).
- Setup of the [Cognigy Socket.IO client](https://github.com/Cognigy/SocketClient).

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md)
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/overview.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)
- [Handover Settings](../endpoints/handover-settings.md)
- [Inject and Notify](../endpoints/inject-and-notify.md)

## How to Set Up

### Setup on the Cognigy.AI Side

??? info "1. Configure a Socket.IO Endpoint"
    1. In the left-side menu of your Project, click **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **Socket.IO** Endpoint type.
        2. Specify a unique name.
        3. Select a Flow from the list. Save changes.
    4. In the Endpoint editor, go to the **Configuration Information** section and copy the URL from the **Endpoint URL** field. 
       The Endpoint URL consists of two parts separated by a slash:

        - The server address (`<Socket-Endpoint-URL>`), for example, `https://endpoint-trial.cognigy.ai`.
        - The token (`<URLToken>`) that comes after the slash, for example, `0e77b9a19f33cb68b3f528b3b28d4b32386162559160ceb9ec85036d83dd8f8b`.

        For further configuration, you need to use these two parts separately.

### Setup on the Third-Party Provider Side

??? info "1. Send a Request"

    === "Cognigy Socket.IO client"
        ```js
        const { SocketClient } = require("@cognigy/socket-client");
        
        (async () => {
          // Create the SocketClient with the server address + URL Token + optional options
          const client = new SocketClient(
            "https://endpoint-trial.cognigy.ai",             // the Socket.IO Endpoint server address
            "0e77b9a19f33cb68b3f528b3b28d4b32386162559160ceb9ec85036d83dd8xxx", // the Socket.IO URL token
            {
              userId: "user@cognigy.com",  
              sessionId: "session123", 
              forceWebsockets: true 
            }
          );
        
          // Listen for messages from the AI Agent
          client.on("output", (output) => {
            console.log("AI Agent:", output.text);
            console.log("Additional data:", output.data);
          });
        
          // Listen for errors
          client.on("error", (error) => {
            console.error("AI Agent error:", error.message);
          });
        
          // Listen for finalPing (bot done processing)
          client.on("finalPing", () => {
            console.log("AI Agent finished processing a message");
          });
        
          // Connect to the Socket.IO Endpoint
          await client.connect();
        
          // Send a message — BASIC
          client.sendMessage("Hello from test!");
        
          // Send a message — WITH EXTRA DATA
          client.sendMessage(
            "Example text with custom data",
            {
              passthroughIP: "127.0.0.1", // custom IP if needed
              resetFlow: false,           // false means: continue Flow
              key: "value"                // any custom data for your Flow
            }
          );
        
          // Reset the Flow if needed
          // client.sendMessage(
          //   "Starting fresh!",
          //   {
          //     resetFlow: true
          //   }
          // );
        })();
        ```
    === "Other clients"
        Messages are sent using the processInput event with a payload in the following format:
    
        ```json
        {
            "URLToken": "urlToken",
            "sessionId": "sessionId",
            "userId": "user@cognigy.com",
            "passthroughIP": "127.0.0.1",
            "resetFlow": "false",  // Resets the Flow and starts a new one from the beginning
            "text": "Example text",  // Can be skipped with "resetFlow": true
            "data": {
                "key": "value"
            }
        }
        ```

    | Parameter     | Type   | Description                                                                                                                                                                                                                                                                                                                 | Required                        |
    |---------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
    | URLToken      | String | An authentication token for connecting to the Endpoint.                                                                                                                                                                                                                                                                     | Yes                             |
    | userId        | String | The ID of the end user.                                                                                                                                                                                                                                                                                                     | Yes                             |
    | sessionId     | String | The ID used to track the current session and maintain its state. Generate a new unique ID for each new session. For testing, you can use any string and change it whenever you want to start a new session.                                                                                                                 | Yes                             |
    | passthroughIP | String | The IP address of the user, used for logging or tracking purposes.                                                                                                                                                                                                                                                          | No                              |
    | resetFlow     | Boolean | When set to `true`, resets the conversation Flow. This payload may or may not contain a message. If it contains a message, it will be the first in the new Flow. Make sure to set `resetFlow` to `false` for subsequent messages to continue the Flow instead of restarting it.     | Yes                             |
    | text          | String | The text that the assigned Flow should process.                                                                                                                                                                                                                                                                             | No, if `resetFlow` is `true`.   |
    | data          | Object | The data that the assigned Flow should process.                                                                                                                                                                                                                                                                             | No                              |

??? info "2. Get a Response"
    Messages can be received by listening to the `output` event. The responses have the following format:

    === "Cognigy Socket.IO client"
        ```text
        AI Agent: I’d be happy to help. Could you please provide your order number?
        Additional data: {}
        AI Agent finished processing a message
        ```
    === "Other clients"
        ```json
        {
          "type":"output",
          "data":
          {
            "text":"responseText",
            "data":
            {
              "key":"value"
            }
          }
        }
        ```