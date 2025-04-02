---
title: "xApp: Show HTML"
slug: "Set-HTML-xApp-State"
hidden: false
---

# xApp: Show HTML

[![Version badge](https://img.shields.io/badge/Updated in-v4.75-blue.svg)](../../../../release-notes/4.75.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/xApp/set-html-xApp-state.png" width="50%" />
</figure>

## Description

The xApp Page can be built by providing custom HTML code. Once this Node is executed, this xApp Page is displayed in the xApp Session.

You can access the xApp Page SDK through a global `SDK` variable.
To submit a result back to the Flow, call `SDK.submit({ name: "John" });`.
The submitted payloads need to be serializable JSON objects.

The following example renders a button that submits on click:

`<button type="button" onclick="SDK.submit({ variant: 'button1' })">button 1</button>`.

To view submitted data, use the Interaction panel. You can access submitted data in the `data` object by clicking **INFO > Input**, or in the chat by adding a Say Node and specifying <code>Submit payload: &lcub;&lcub;JSON.stringify(input.data)&rcub;&rcub;</code> or <code>Submit payload: &lcub;&lcub;JSON.stringify(ci.data)&rcub;&rcub;</code>.

To access session data from within the HTML Code, use CognigyScript `{{"{{ JSON.stringify(cc.someContextKey) }}"}}`.

{! _includes/ai/xApp/custom-node.md !}

## Parameters

| Parameter | Type | Description                                                                 |
|-----------|------|-----------------------------------------------------------------------------|
| Content   | List | Select the content format:<ul><li>HTML document</li><li>HTML body</li></ul> |

{! _includes/ai/xApp/waiting-behavior.md !}

{! _includes/ai/xApp/overlay.md !}

??? info "xApp Page SDK"

    When hosted within Cognigy.AI, the xApp Page or any generic HTML xApp can load the xApp Page SDK using a fixed URL:
    `<script src=”/sdk/app-page-sdk.js”></script>`.
    Loading this file exposes the xApp Page SDK as a global instance called `SDK`.
    To access its methods, call `SDK.someExampleMethod()` after loading the SDK file. The SDK code isn't loaded asynchronously.

    | Function                                    | Usage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    |---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `SDK.getAppTemplateData():Promise<unknown>` | Returns the xApp Template Data associated with this xApp Page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | `SDK.submit(result: Object):Promise<void>`  | Submits the provided "result" object to the Flow. Has to be a JSON serializable object.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | `SDK.getCustomReadyHandler():Function`      | Returns a custom ready state handler. By default, the xApp Page is ready as soon as the document is fully loaded.<br>If you want to fetch additional content before showing the Page, you can override the `ready` event by getting a custom `ready handler` and calling it as soon as your xApp Page is ready manually. <br> The end user sees the xApp Loading Screen on the Shell Page.<br>Note: If loading the xApp Page takes more than 10 seconds, the xApp is treated as `Failed to load` without the possibility of recovering. |

## More Information

- [xApps](../../../../xApps/overview.md)
- [xApp Nodes](overview.md)
- [xApp: Init Session](init-xApp-session.md)
- [xApp: Get Session PIN](get-xApp-session-PIN.md)
- [xApp: Show Adaptive Card](set-AdaptiveCard-xApp-state.md)