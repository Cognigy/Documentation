---
 title: "xApp: Get Session PIN" 
 slug: "Get-xApp-Session-PIN" 
 hidden: false 
---

# xApp: Get Session PIN

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/xApp/get-xApp-session-PIN.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node gets a new xApp Session PIN which can be accessed using the xApp: Get Session PIN token. The PIN code is only valid for 5 minutes.

The result is stored at `input.apps.session.pin`.

With this PIN, users can log in via an xApp PIN webpage.

### xApp PIN Page URL

You will need to share the xApp PIN Page URL with users, where they can enter the PIN. The URL can be sent in the Flow with an [xApp PIN Page URL](../../xApp/tokens.md#xapp-pin-page-url)Cognigy token.

## More information

- [xApp Tokens](../../xApp/tokens.md)
- [xApp Nodes](overview.md)
- [xApp: Init Session](init-xApp-session.md)
- [xApp: Show HTML](set-html-xApp-state.md)
- [xApp: Show Adaptive Card](set-AdaptiveCard-xApp-state.md)