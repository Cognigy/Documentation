---
 title: "xApp Flow API" 
 slug: "xApp-Flow-API" 
 hidden: true 
---

# xApp Flow API

The Flow API has been extended, giving access to the following new functionalities:

Function |	Usage
---------|---------
`api.setAppState(templateUrl, templateData)` | Updates the xApp Session State by defining which xApp should be shown (`templateUrl`) and which data should be in the template (`templateData`).

The `setAppState` function is used in the following Nodes:

- [Set xApp State](../flow-nodes/xApp/set-xApp-state.md)
- [Set AdaptiveCards xApp State](../flow-nodes/xApp/set-AdaptiveCard-xApp-state.md)
- [Set HTML xApp State](../flow-nodes/xApp/set-html-xApp-state.md)


Alternatives:

- Set HTML xApp State: `setAppState("generic-html", { html: "your html code" });`. Make sure that you include a copy of the xApp Page SDK within the HTML code, otherwise, you will get the `The Application failed to load` error.
- Set AdaptiveCards xApp State: `setAppState("https://cognigy.ai/apps/adaptivecards/", { card: { /*here goes the adaptivecard definition */ } })`.


## More information

- [xApp Nodes](../flow-nodes/xApp/overview.md)
- [xApp](overview.md)
- [xApp xApp Page SDK](sdk.md)





