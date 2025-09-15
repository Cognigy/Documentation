---
title: "setAppState"
slug: "set-app-state"
description: "setAppState updates the state of the xApp Session for the current conversation. Only works if an xApp Session was initialized beforehand."
hidden: false
tags:
  - xApps
  - setappstate
---

# setAppState

## Syntax

`setAppState(xAppTemplateId, xAppTemplateData)`

## Description 

Updates the state of the xApp Session for the current conversation. Only works if an xApp Session was started beforehand.

**Parameters:**

- `xAppTemplateId`: `string` — the URL to a hosted xApp template, `generic-html`, or `null`.
    - If a URL is provided, the xApp template is loaded from that URL. 
    - If `generic-html` is provided, the xApp Page SDK is loaded from the host, and the HTML code defined in `xAppTemplateData.html` is displayed. 
    - If `null` is provided, the active xApp Page is closed.
- `xAppTemplateData`: `Record<string, unknown>` — the data payload for the xApp Page.

**Returns:** `void`

## Examples

??? info "Load an xApp Template"
    ```js
    // Load an xApp Template
    // loads the xApp template hosted at `https://my-xapp-template-url` as an xApp page
    // - injects `{ my: "xapp-template-data" }` to the xApp
    // - waits for the xApp page to load, then displays it to the end user
    setAppState("https://my-xapp-template-url", { my: "xapp-template-data" })
    ```

??? info "Load a Generic HTML xApp Page"
    ```js
    // Load generic HTML
    /* javascript
    const html = `
    <html>
      <body>
        Hello, World!
        <button type="button" onclick="SDK.submit({});">continue</button>
        <script src="/sdk/app-page-sdk.js"></script>
      </body>
    </html>
     */
    // loads the HTML code defined in `html` as an xApp Page.
    // loads the xApp Page SDK from its host
    setAppState("generic-html", { html })
    ```

??? info "Close an Active xApp Page"
    ```js
    // Close active xApp Page
    setAppState(null, {})
    ```

