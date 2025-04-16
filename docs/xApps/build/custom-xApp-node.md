---
title: "Advanced: Build a Custom xApp Node"
slug: "custom-xApp-node"
hidden: true
---

# Advanced: Build a Custom xApp Node

If you need more control and flexibility than what the **xApp: Show Adaptive Card** or **xApp: Show HTML**
offer, you can create your own customized Node.

To create a custom xApp extension, you will need to build an [Extension](../../ai/build/extensions.md#develop-a-custom-extension) from scratch using a [template](https://github.com/Cognigy/Extensions/tree/master/docs/example) provided in the Cognigy repository on GitHub. Below is the code snippet that you can use within the Extension.
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

Use the [setAppState API](../api.md) with an `app template URL` set to `generic-html` and `app template data` that contain the HTML code generated.

Once implemented, the generated HTML will appear within the app screen, similar to the **xApp: Show HTML** Node. This approach allows you to edit a specific part of the page through node fields, rather than modifying the entire page content. This streamlined process is focused on the necessary changes for the dialog.

## More Information

- [xApp Nodes](../../ai/build/node-reference/xApp/overview.md)
- [Build an xApp](overview.md)
- [xApps](../overview.md)