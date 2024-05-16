---
title: "Architecture"
slug: "xApp-architecture"
hidden: true
---

# xApp Architecture

The following diagram illustrates the process when the xApp Shell Page loads its assets (HTML/CSS/JS) by requesting static files via HTTP/HTTPs 1.1 requests to `service-static-files` and establishes a WebSocket connection (via Socket.io)  to `serviceapp-session-manager` to retrieve information about xApp sessions. This information includes an async event to initialize an xApp session, which creates a unique URL, and specifies which xApp will be displayed in a specific xApp session. The Elastic Load Balancer helps distribute incoming traffic, while Traefik dynamically routes traffic to backend servers based on specific requirements. The `serviceapp-session-manager` updates the xApp session state in the App Session DB, and the WebSocket transfers data to the Shell page, which loads xApps and provides data to the SDK.

<figure>
    <img class="image-center" src="../../../_assets/xApps/architecture.png" width="100%" />
</figure>

## xApp Sequence Diagram

The diagram illustrates the sequence of interactions between a user, Cognigy Flow, xApp Backend, and xApp Page in the context of an xApp architecture integration.

```mermaid
sequenceDiagram
title Cognigy xApp - typical sequence of interactions

actor u as User
participant f as Cognigy Flow
participant xb as xApp Backend
participant xf as xApp Page

u->>f: 1. Start conversation
activate f
%% f->>f:  xApp Init session
f->> xb: 2. xApp Init session
activate xb
xb->>f: 3. xApp session token
f->>f: 4. Compose xApp URL using token
f->>u: 5. "Enter your data in xApp using this URL"
f->>xb: 6. xApp Show HTML
xb->>xb: 7. Remember HTML
u->>xf: 8. Open xApp page
activate xf
xf->>xf: 9. Render Loading screen
xf->>xb: 10. Get page
xb->>xf: 11. Page HTML
xf->>xf: 12. Render HTML page
xf->>u: 13. HTML Page
u->>xf: 14. Fill in and submit data
xf->>xf: 15. SDK.submit(data)
xf->>xb: 16. data
xf->>xf: 17. Render Nothing to do here
deactivate xf
xb->>f: 18. input.data._cognigy._app.payload
deactivate xb
f->>f: 19. Process input.data
f->>u: 20. "Received your data from xApp"
deactivate f
```

1. The user starts a conversation with a Cognigy Flow.
2. The Cognigy Flow initializes a session with the xApp backend.
3. The xApp backend responds with a session token.
4. The Cognigy Flow composes a URL using the session token
5. The Cognigy Flow sends a message "Enter your data in xApp using this URL" to the user.
6. The Cognigy Flow sends a request to the xApp backend to show the HTML page.
7. The xApp backend remembers the HTML page.
8. The user opens the xApp page.
9. The xApp page renders a loading screen.
10. The xApp page requests the HTML page from the xApp backend.
11. The xApp backend responds with the HTML page.
12. The xApp page renders the HTML page.
13. The HTML page is shown to the user.
14. The user fills in and submits data.
15. The xApp page submits the data to the SDK.
16. The SDK sends the data to the xApp backend.
17. The "Nothing to do here" page is rendered.
18. The xApp backend processes `input.data._cognigy._app.payload` and sends it to Cognigy Flow as input.
19. The Cognigy Flow processes `input.data`. 
20. The Cognigy Flow sends a message "Received your data from xApp" to the user confirming the data has been received.

## More Information

- [Overview](overview.md)
- [Build an xApp](build/overview.md)
- [xApp Nodes](../ai/build/node-reference/xApp/overview.md)