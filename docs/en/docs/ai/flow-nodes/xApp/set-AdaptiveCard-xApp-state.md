---
 title: "xApp: Show Adaptive Card" 
 slug: "Set-AdaptiveCard-xApp-State" 
 hidden: false 
---

# xApp: Show Adaptive Card

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/xApp/set-AdaptiveCard-xApp-state.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

An xApp Page can be built by providing an Adaptive Card in JSON format.

To submit data back to the Flow, you need to include an action of type submit within the Adaptive Card.

To view submitted data, use the Interaction panel. You can access submitted data in the `data` object by clicking **INFO > Input**, or in the chat by adding a Say Node and specifying <code>Submit payload: &lcub;&lcub;JSON.stringify(input.data)&rcub;&rcub;</code> or <code>Submit payload: &lcub;&lcub;JSON.stringify(ci.data)&rcub;&rcub;</code>.

{! _includes/ai/xApp/custom-node.md !}

### AdaptiveCard Definition

The [Adaptive Card Designer](https://adaptivecards.io/designer) can help you to define an Adaptive Card. Copy the JSON card payload and paste it into the form.

### Style Overrides

To override the background and interaction element colors, use CSS color codes.

### Waiting Behavior

To wait for a user input, for example when the user click Submit on the Ordering page, activate the **Waiting Behavior** option.
You can store the input result in the Context and use the data in the other Nodes.

## More information

- [xApps](../../xApp/overview.md)
- [xApp Nodes](overview.md)
- [xApp: Init Session](init-xApp-session.md)
- [xApp: Get Session PIN](get-xApp-session-PIN.md)
- [xApp: Show HTML](set-html-xApp-state.md)