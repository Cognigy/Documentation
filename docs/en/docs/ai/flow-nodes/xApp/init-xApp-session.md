---
 title: "xApp: Init Session" 
 slug: "Init-xApp-Session" 
 hidden: true 
---

# xApp: Init Session

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/xApp/init-xApp-session.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node initializes a new xApp session. After the execution of this Node, the xApp can be accessed via the xApp Session URL, which is exposed via the [xApp Session URL token](../../xApp/tokens.md). 


### Style Customization

Customize the default screens' background and text color and specify a logo.

### PIN Screen

Specify texts displayed on the PIN screen.

### xApp Screens

Specify messages displayed to the user when the xApp Page is loading, fails for some reason, encounters an error, or is halted.

### Intermediate Screen

Customize the text displayed on the Intermediate Screen. Alternatively, you can replace the default Intermediate Screen with an xApp Page by providing the xApp Template, a mini website containing HTML/CSS/JS, and parameters that you pass into this xApp Template, the xApp Template Data.

### Connection Screen

Customize the text displayed on the Connection Screen. Alternatively, you can replace the default Connection Screen with an xApp Page by providing the xApp Template, a mini website containing HTML/CSS/JS, and parameters that you pass into this xApp Template, the xApp Template Data.

## More information

- [xApp Tokens](../../xApp/overview.md)
- [xApp Nodes](overview.md)
- [xApp: Get Session PIN](get-xApp-session-PIN.md)
- [xApp: Show HTML](set-html-xApp-state.md)
- [xApp: Show Adaptive Card](set-AdaptiveCard-xApp-state.md)