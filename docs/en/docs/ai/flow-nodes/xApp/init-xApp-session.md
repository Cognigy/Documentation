---
 title: "xApp: Init Session" 
 slug: "Init-xApp-Session" 
 hidden: false 
---

# xApp: Init Session

[![Version badge](https://img.shields.io/badge/Updated in-v4.50-blue.svg)](../../../release-notes/4.51.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/xApp/init-xApp-session.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node initializes a new xApp session. After the execution of this Node, the xApp can be accessed via links with the [xApp Session URL token](../../xApp/tokens.md#xapp-session-url), or [xApp PIN Page URL token](../../xApp/tokens.md#xapp-pin-page-url)

### Without entering a PIN Code 

To only require only a URL to access an xApp session, a Session URL can be shared. This is available via the [xApp Session URL token](../../xApp/tokens.md#xapp-session-url).

The **xApp Session URL token** provides a URL, which is also accessible via `input.apps.url` in the input object.

With the provided link, a user can access the xApp page without requiring a PIN.

### By entering a PIN Code 

To require a PIN to access an xApp session, a PIN and PIN Page URL must be shared. 

This functionality is available via the [xApp PIN Page URL token](../../xApp/tokens.md#xapp-pin-page-url) and the [xApp: Get Session PIN Node](get-xApp-session-PIN.md).

The **Get Session PIN Node** generates a PIN, which is accessible via the [xApp Session PIN token](../../xApp/tokens.md#xapp-session-pin) or `input.apps.session.pin` in the input object.

The **xApp PIN Page URL token** provides a URL, which is also accessible via `input.apps.baseUrl` in the input object.

With the provided link, a user can access the PIN page and enter their provided PIN to gain access to the xApp.

### Style Customization

Customize the following parameters for the default screen:

- Background Color — a color that is displayed in the background of all Shell Page Screens. You can use CSS background-color values such as `hex`, `hsl+a`, and `rgb+a`.
- Text Color — a color that is used for textual content on all Shell Page Screens. You can use CSS color values such as `hex`, `hsl+a`, and `rgb+a`. Make sure that the text color has high contrast with the background color.
- Logo — you can choose to show the default logo, not any logo, or a custom logo. If you select the custom logo option, specify the Custom Logo URL.
- Custom Favicon URL — an image URL for the custom favicon.
- Page Title — a text shown as a tab or window title. The title is displayed on all Shell Page Screens.

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