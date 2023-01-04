---
 title: "xApp Page SDK" 
 slug: "xApp-Page-SDK" 
 hidden: true 
---

# xApp Page SDK

When hosted within Cognigy, the xApp Page (or any generic HTML xApp) can load the App Page SDK using a fixed URL:
 `<script src=”/sdk/app-page-sdk.js”></script>`.
Loading this file will expose the App Page SDK as a global instance called `SDK`.
You can access its methods by calling `SDK.someExampleMethod()` in your code after your loading the SDK file. Note that the SDK code is not loaded asynchronously.


Function |  Usage
---------|---------
`SDK.getAppTemplateData():Promise<unknown>`  |  Returns the xApp Template Data associated with this App Page.
`SDK.submit(result: Object):Promise<void>`  | Submits the provided "result" object to the Flow. Has to be a JSON-serializable Object.
`SDK.getCustomReadyHandler():Function` | Returns a custom ready state handler. By default, the App Page will be ready as soon as the document is fully loaded. <br>  If you want to fetch additional content before showing the Page, you can override the `ready` event by getting a custom `ready handler` and calling it as soon as your xApp Page is ready manually. <br> The end user will see the xApp Loading Screen on the Shell Page. <br> Note: If loading the xApp Page takes MORE than 10 seconds, the xApp will be treated as `Failed to load` without the possibility of recovering.

#### More information

- [Set HTML xApp State](../flow-nodes/xApp/set-html-xApp-state.md)
- [Set AdaptiveCard xApp State](../flow-nodes/xApp/set-AdaptiveCard-xApp-state.md)
- [xApp Flow API](api.md)
- [xApp](overview.md)
- [xApp Nodes](../flow-nodes/xApp/overview.md)