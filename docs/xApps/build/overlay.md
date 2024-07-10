---
title: "xApp Overlay"
slug: "overlay"
hidden: false
---

# xApp Overlay

[![Version badge](https://img.shields.io/badge/Added in-v4.75-blue.svg)](../../release-notes/4.75.md)

By default, an xApp page opens in a separate browser tab. 
If you're using [Webchat v3](../../webchat/v3/overview.md), you can change this behavior by opening xApp pages directly within the Webchat v3 interface.
This means that each xApp page will be displayed on its own dedicated screen.
This approach helps end users to focus solely on the content of that page without distractions from other parts of the interface. 
The design of xApp screens is consistent with other Webchat v3 screens such as [Home](../../webchat/v3/features.md#home-screen),
[Chat Options](../../webchat/v3/features.md#chat-options),
[Previous Conversations](../../webchat/v3/features.md#previous-conversations), and more.

To configure this behavior for pages with HTML and Adaptive Cards, use the following Nodes:

- [xApp: Show HTML](../../ai/build/node-reference/xApp/set-html-xApp-state.md)
- [xApp: Show Adaptive Card](../../ai/build/node-reference/xApp/set-AdaptiveCard-xApp-state.md)