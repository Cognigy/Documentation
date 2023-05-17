---
 title: "xApp: Init Session" 
 slug: "Init-xApp-Session" 
 hidden: true 
---

# xApp: Init Session

[![Version badge](https://img.shields.io/badge/Updated in-v4.50-blue.svg)](../../../release-notes/4.51.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/xApp/init-xApp-session.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node initializes a new xApp session. After the execution of this Node, the xApp can be accessed via the xApp Session URL, which is exposed via the [xApp Session URL token](../../xApp/tokens.md). 


### Style Customization

Customize the following parameters for the default screen:

- Background Color — a color that is displayed in the background of all Shell Page Screens. You can use CSS background-color values such as `hex`, `hsl+a`, and `rgb+a`.
- Text Color — a color that is used for textual content on all Shell Page Screens. You can use CSS color values such as `hex`, `hsl+a`, and `rgb+a`. Make sure that the text color has high contrast with the background color.
- Logo — you can choose to show the default logo, not any logo, or a custom logo. If you select the custom logo option, specify the Custom Logo URL.
- Custom Favicon URL — an image URL for the custom favicon.
- Page Title — a text shown as a tab or window title. The title is displayed on all Shell Page Screens.

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