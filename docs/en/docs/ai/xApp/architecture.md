# xApp Architecture

```mermaid
sequenceDiagram
title Cognigy xApp - typical sequence of interactions

actor u as User
participant f as Cognigy Flow
participant xb as xApp Backend
participant xf as xApp Page

u->>f: Start conversation
activate f
%% f->>f: xApp Init session
f->> xb: xApp Init session
activate xb
xb->>f: xApp session token
f->>f: Compose xApp URL using token
f->>u: "Enter your data in xApp using this URL"
f->>xb: xApp Show HTML
xb->>xb: Remember HTML
u->>xf: Open xApp page
activate xf
xf->>xf: Render Loading screen
xf->>xb: Get page
xb->>xf: Page HTML
xf->>xf: Render HTML page
xf->>u: HTML Page
u->>xf: Fill in and submit data
xf->>xf: SDK.submit(data)
xf->>xb: data
xf->>xf: Render Nothing to do here
deactivate xf
xb->>f: input.data._cognigy._app.payload
deactivate xb
f->>f: Process input.data
f->>u: "Received your data from xApp"
deactivate f
```

1. The user starts a conversation with Cognigy Flow.
2. Cognigy Flow initializes a session with the xApp backend.
3. The xApp backend responds with a session token.
4. Cognigy Flow composes a URL using the session token and sends it to the user.
5. Cognigy Flow sends a request to the xApp backend to show the HTML page.
6. The xApp backend remembers the HTML page.
7. The user opens the xApp page.
8. The xApp page renders a loading screen.
9. The xApp page requests the HTML page from the xApp backend.
10. The xApp backend responds with the HTML page.
11. The xApp page renders the HTML page.
12. The user fills in and submits data.
13. The xApp page submits the data to the SDK.
14. The SDK sends the data to the xApp backend.
15. The xApp backend processes the data and sends it to Cognigy Flow as input.
16. Cognigy Flow processes the input data.
17. Cognigy Flow sends a message to the user confirming the data has been received.
