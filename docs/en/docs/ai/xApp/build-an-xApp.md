---
title: "Build an xApp"
slug: "build-an-xApp"
description: "To create a Cognigy xApp, use a set of xApp Flow Nodes. You can build xApp Pages by providing HTML code or specifying an Adaptive Card in JSON. For more customization, create your own Node by implementing and uploading an Extension."
hidden: false
---

# Build an xApp

To develop an xApp, utilize a collection of [xApp Flow Nodes](../flow-nodes/xApp/overview.md).
You can build the actual [xApp Pages](overview.md#concepts) in two ways,
by providing [HTML code](../flow-nodes/xApp/set-html-xApp-state.md)
or by specifying an [Adaptive Card in JSON](../flow-nodes/xApp/set-AdaptiveCard-xApp-state.md).
Alternatively, for more customization,
you can [create your own Node](#build-a-custom-xapp-node) by implementing and uploading an Extension.

## Build your first xApp

To build an xApp, follow these steps:

1. Initialize a new xApp Session via the [xApp: Init Session](../flow-nodes/xApp/init-xApp-session.md) Node.
2. Allow users to access the xApp Session using one of the following methods:
    - **Without entering a PIN Code.** Share the xApp Session URL with the users. The URL can be sent in the Flow with an [xApp Session URL](tokens.md#xapp-session-url) Cognigy token.
    - **By entering a PIN Code.** Require a PIN and URL combination which users use to access the xApp Session.
      1. Generate a PIN by adding the [xApp: Get Session PIN](../flow-nodes/xApp/get-xApp-session-PIN.md) Node, and then send this PIN to the users. 
        - The PIN code is valid for 5 minutes, and is stored at `input.apps.session.pin`.
      2. Share the xApp PIN Page URL with users, where they can enter the PIN. The URL can be sent in the Flow with an [xApp PIN Page URL](tokens.md#xapp-pin-page-url) Cognigy token.
3. To update an initialized session with a new custom-built xApp Page, use one of the following Nodes:
    - [xApp: Show HTML](../flow-nodes/xApp/set-html-xApp-state.md) to provide HTML code.
    - [xApp: Show Adaptive Card](../flow-nodes/xApp/set-AdaptiveCard-xApp-state.md) to build an xApp Page by providing an Adaptive Card in the JSON format.
4. Submit results of the xApp need to be JSON serializable. The result will be exposed at `input.data._cognigy._app.payload`. You can check the submission by `input.data._cognigy._app.payload === "submit"`.
5. To wait for the xApp user Input in a Flow, use the [Question](../flow-nodes/message/question.md) or the [Optional Question](../flow-nodes/message/optional-question.md) Node. The **xApp** type of the Question Node is only considered to be answered if submitted results are available as part of the Input. 

## Build a custom xApp Node

If you need more control and flexibility than what the **xApp: Show Adaptive Card** or **xApp: Show HTML**
offer, you can create your own customized Node.

To create a custom xApp extension, you will need to build an [Extension](../resources/manage/extensions.md#develop-a-custom-extension) from scratch using a [template](https://github.com/Cognigy/Extensions/tree/master/docs/example) provided in the Cognigy repository on GitHub. Below is the code snippet that you can use within the Extension.
This code snippet helps to create a custom Node that displays text content and allows you to cancel or continue the dialog.

```js
export const xappDialogNode = createNodeDescriptor({ 
  type: "xapp-dialog",
  fields: [
    {
      key: "content",
      label: "Content",
      type: "cognigyText",
    },
  ],
  function: (params) => {
    const { cognigy, config } = params;
    const { content } = config as any;


    // About the HTML code:
    // - Load the "app page SDK" from /sdk/app-page-sdk.js, which is always available for "generic HTML" apps. There's no need to include the SDK code within the HTML content.
    // - After the "app page SDK" line, you can use the SDK globally as it is now initialized.
    // - Use plain "onclick" handlers for the buttons to submit a result from the app by calling "SDK.submit({ action: '<action-description>' })".
    // - Clicking one of the buttons closes the app and triggers an "inject" message. The value of "input.data._cognigy._xapp.result" is equal to the parameters you provided in "SDK.submit" ({ action: '<action-description>' }).
    const getDialogHtml = (content) => `
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="/sdk/app-page-sdk.js"></script>
    </head>
    <body>
        <p>${content}</p>
        <button type="button" onclick="SDK.submit({ action: 'continue' })">continue</button>
        <button type="button" onclick="SDK.submit({ action: 'cancel' })">cancel</button>
    </body>
</html>
`;
    // @ts-ignore
    cognigy.api.setAppState("generic-html", {
      html: getDialogHtml(content),
    });
  },
});
```

Utilize the [setAppState API](api.md) with an `app template URL` set to `generic-html` and `app template data` that contain the HTML code generated.

Once implemented, the generated HTML will appear within the app screen, similar to the **xApp: Show HTML** Node. This approach allows you to edit a specific part of the page through node fields, rather than modifying the entire page content. This streamlined process is focused on the necessary changes for the dialog.

