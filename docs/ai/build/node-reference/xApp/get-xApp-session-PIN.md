---
 title: "xApp: Get Session PIN" 
 slug: "Get-xApp-Session-PIN" 
 hidden: false 
---

# xApp: Get Session PIN

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/xApp/get-xApp-session-PIN.png" width="50%" />
</figure>

## Description

This Node generates a new xApp session PIN. You can access it using the [xApp: Get Session PIN](../../../../xApps/tokens.md#xapp-session-pin) token or via `input.apps.session.pin`.

The PIN code is only valid for 5 minutes.

With this PIN, users can log in via an xApp PIN webpage.

### xApp PIN Page URL

Share the xApp PIN Page URL with users, where they can enter the PIN. The URL can be sent in the Flow with an [xApp PIN Page URL](../../../../xApps/tokens.md#xapp-pin-page-url) Cognigy token.

## More Information

- [xApp Tokens](../../../../xApps/tokens.md)
- [xApp Nodes](overview.md)
- [xApp: Init Session](init-xApp-session.md)
- [xApp: Show HTML](set-html-xApp-state.md)
- [xApp: Show Adaptive Card](set-AdaptiveCard-xApp-state.md)