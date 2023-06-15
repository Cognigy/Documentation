---
title: "Custom xApp Node"
slug: "Custom-xApp-Node"
description: "A customized xApp Node that displays text and gives the option to continue or cancel the dialog. To create this node, build your Cognigy Extension from scratch."
hidden: false
---

# Custom xApp Node

If you want more customization compare to the **xApp: Show HTML** Node, build a custom Node for your xApp.

To build an [Extension](../../resources/manage/extensions.md#develop-a-custom-extension) from scratch, use a [template](https://github.com/Cognigy/Extensions/tree/master/docs/example) from the Cognigy repository on GitHub.

Use this code snippet to create a custom Node that displays text content and allows you to cancel or continue the dialog. Utilize the `setAppState` API with an `app template URL` set to "generic-html" and "app template data" that contains the HTML code generated.

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
    const { cognigy } = params;
    const content = params.config.content;

    const getDialogHtml = (content) => `
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="/sdk/app-page-sdk.js"></script>
    </head>
    <body>
        <p>${content}</p>
        <button type="button" onclick="SDK.submit({ result: 'continue' })">continue</button>
        <button type="button" onclick="SDK.submit({ action: 'cancel' })">cancel</button>
    </body>
</html>
`;

    cognigy.api.setAppState("generic-html", {
      html: getDialogHtml(content),
    });
  },
});
```

Once implemented, the generated HTML will appear within the app screen, similar to the "set HTML app state" node. However, this approach allows you to edit a specific part of the page through node fields, rather than modifying the entire page content. This streamlined process is focused on the necessary changes for the dialog.