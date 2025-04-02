---
title: "xApp Nodes" 
slug: "overview" 
hidden: false 
---

# xApp Nodes

{! _includes/ai/xApp/pricing.md !}

The xApp Flow Nodes allow creating xApps, flexible micro-web applications for customer self-service. You can build the actual xApp Pages by yourself in various ways, for example, by providing HTML code or by specifying an Adaptive Card in JSON format.

Cognigy.AI supports the following Nodes:

<div class="grid cards" style="text-align: center;" markdown>

-   :material-play:{ .lg .middle } __[xApp: Init Session](init-xApp-session.md)__

    ---

    This Node initializes a new xApp session.

-   :material-key:{ .lg .middle } __[xApp: Get Session PIN](get-xApp-session-PIN.md)__

    ---

    This Node generates a new xApp session PIN. You can access it using the [xApp: Get Session PIN](../../../../xApps/tokens.md#xapp-session-pin) token or via `input.apps.session.pin`.

-   :material-card-text:{ .lg .middle } __[xApp: Show Adaptive Card](set-AdaptiveCard-xApp-state.md)__

    ---

    This Node builds an xApp Page by providing an Adaptive Card in JSON format.

-   :material-language-html5:{ .lg .middle } __[xApp: Show HTML](set-html-xApp-state.md)__

    ---

    This Node builds an xApp Page by providing custom HTML code.

</div>

## More Information

- [xApps](../../../../xApps/overview.md)
- [xApp Tokens](../../../../xApps/tokens.md)
- [xApp Flow API](../../../../xApps/api.md)