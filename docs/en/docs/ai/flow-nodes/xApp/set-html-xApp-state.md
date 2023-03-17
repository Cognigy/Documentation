---
 title: "xApp: Show HTML" 
 slug: "Set-HTML-xApp-State" 
 hidden: true 
---

# xApp: Show HTML

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/xApp/set-html-xApp-state.png" width="100%" />
</figure>

## Description
<div class="divider"></div>

The xApp Page can be built by providing custom HTML code.

### Content 

You can either provide an HTML document or an HTML body only. Once this Node is executed, this xApp Page is displayed in the xApp Session.

Within the HTML Code, you will be able to access the xApp Page SDK through a global `SDK` variable.
To submit a result back to the Flow, you can call `SDK.submit({ name: "John" });`.
The submitted payloads need to be JSON serializable objects.

You can use the `submit` function. An example of a button that submits on click would be the following:
`<button type="button" onclick="SDK.submit({ variant: 'button1' })">button 1</button>`.

### xApp Page SDK

When hosted within Cognigy, the xApp Page (or any generic HTML xApp) can load the xApp Page SDK using a fixed URL:
 `<script src=”/sdk/app-page-sdk.js”></script>`.
Loading this file will expose the xApp Page SDK as a global instance called `SDK`.
You can access its methods by calling `SDK.someExampleMethod()` in your code after your loading the SDK file. Note that the SDK code is not loaded asynchronously.


| Function                                    | Usage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SDK.getAppTemplateData():Promise<unknown>` | Returns the xApp Template Data associated with this xApp Page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `SDK.submit(result: Object):Promise<void>`  | Submits the provided "result" object to the Flow. Has to be a JSON serializable object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `SDK.getCustomReadyHandler():Function`      | Returns a custom ready state handler. By default, the xApp Page will be ready as soon as the document is fully loaded. <br>  If you want to fetch additional content before showing the Page, you can override the `ready` event by getting a custom `ready handler` and calling it as soon as your xApp Page is ready manually. <br> The end user will see the xApp Loading Screen on the Shell Page. <br> Note: If loading the xApp Page takes more than 10 seconds, the xApp will be treated as `Failed to load` without the possibility of recovering. |

## More information

- [xApps](../../xApp/overview.md)
- [xApp Nodes](overview.md)
- [xApp: Init Session](init-xApp-session.md)
- [xApp: Get Session PIN](get-xApp-session-PIN.md)
- [xApp: Show Adaptive Card](set-AdaptiveCard-xApp-state.md)