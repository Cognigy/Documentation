---
title: "xApp Tokens" 
slug: "xApp-Tokens" 
hidden: false
---

# xApp Tokens

URLs as well as the PIN code to access an xApp session are exposed via Cognigy Tokens.

## xApp PIN Page URL	

The xApp Ping Page URL token provides a URL to access the PIN Page.
You can get this URL when the [xApp: Init Session](../ai/build/node-reference/xApp/init-xApp-session.md#by-entering-a-pin-code) Node is executed.
This URL is also accessible via `input.apps.baseUrl` in the input object.

## xApp Session PIN

The xApp Session PIN token provides the PIN code to access the xApp Session.
This PIN is also accessible via `input.apps.session.pin` in the input object.

The PIN code is only valid for 5 minutes after it is created by the [xApp: Get Session PIN](../ai/build/node-reference/xApp/get-xApp-session-PIN.md) Node.

## xApp Session URL

The xApp Session URL token provides the URL to access the xApp Session without a PIN.
You can get this token
when the [xApp: Init Session](../ai/build/node-reference/xApp/init-xApp-session.md#without-entering-a-pin-code) Node is executed.
This URL is also accessible via `input.apps.url` in the input object.

## More Information

- [xApp: Get Session PIN](../ai/build/node-reference/xApp/get-xApp-session-PIN.md) 
- [xApps](overview.md)
- [xApp Nodes](../ai/build/node-reference/xApp/overview.md)