---
 title: "xApp: Init Session" 
 slug: "Init-xApp-Session" 
 hidden: false 
---

# xApp: Init Session

[![Version badge](https://img.shields.io/badge/Updated in-v4.50-blue.svg)](../../../../release-notes/4.51.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/xApp/init-xApp-session.png" width="50%" />
</figure>

## Description

This Node initializes a new xApp session. 

After the execution of this Node, the xApp can be accessed in two different ways:

- [Without entering a PIN Code](#without-entering-a-pin-code)
- [By entering a PIN Code](#by-entering-a-pin-code)

### Without entering a PIN Code 

To require only a URL to access an xApp session, a Session URL can be shared. This URL is available via the [xApp Session URL](../../../../xApps/tokens.md#xapp-session-url) token.

The **xApp Session URL** token provides a URL, which is also accessible via `input.apps.url` in the input object.

With the provided link, a user can access the xApp page without requiring a PIN.

### By entering a PIN Code 

To allow users to access the xApp session via a PIN, share both a PIN and a PIN Page URL with the users. 

This functionality is available via the [xApp PIN Page URL](../../../../xApps/tokens.md#xapp-pin-page-url) token and the [xApp: Get Session PIN](get-xApp-session-PIN.md) Node.

The **Get Session PIN** Node generates a PIN, which is accessible via the [xApp Session PIN token](../../../../xApps/tokens.md#xapp-session-pin) or `input.apps.session.pin` in the input object.

The **xApp PIN Page URL** token provides a URL, which is also accessible via `input.apps.baseUrl` in the input object.

With the provided link, a user can access the PIN page and enter their provided PIN to gain access to the xApp.

## Parameters

??? info "Style Customization"

    | Parameter          | Type          | Description                                                                                                                                                                                                      |
    |--------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Background Color   | CognigyScript | A color that is displayed in the background of all Shell Page Screens. You can use CSS background-color values such as `hex`, `hsl+a`, and `rgb+a`.                                                              |
    | Text Color         | CognigyScript | A color that is used for textual content on all Shell Page Screens. You can use CSS color values such as `hex`, `hsl+a`, and `rgb+a`. Make sure that the text color has high contrast with the background color. |
    | Logo               | List          | You can choose to show the default logo, not any logo, or a custom logo. If you select the custom logo option, specify the Custom Logo URL.                                                                      |
    | Custom Favicon URL | CognigyScript | An image URL for the custom favicon.                                                                                                                                                                             |
    | Page Title         | CognigyScript | A text shown as a tab or window title. The title is displayed on all Shell Page Screens.                                                                                                                         |

??? info "xApp Screens"

    | Parameter           | Type          | Description                                                                                |
    |---------------------|---------------|--------------------------------------------------------------------------------------------|
    | 'Loading' Text      | CognigyScript | Specify messages displayed to the user when the xApp Page is loading                       |
    | 'Launch Error' Text | CognigyScript | Specify messages displayed to the user when the xApp Page fails for some reason            |
    | 'xApp Error' Text   | CognigyScript | Specify messages displayed to the user when the xApp Page encounters an error or is halted |
    

??? info "Intermediate Screen"

    Customize the text displayed on the Intermediate Screen. Alternatively, you can replace the default Intermediate Screen with an xApp Page by providing the xApp Template, a mini website containing HTML/CSS/JS, and parameters that you pass into this xApp Template, the xApp Template Data.

??? info "Connection Screen"

    Customize the text displayed on the Connection Screen. Alternatively, you can replace the default Connection Screen with an xApp Page by providing the xApp Template, a mini website containing HTML/CSS/JS, and parameters that you pass into this xApp Template, the xApp Template Data.

## More Information

- [xApp Tokens](../../../../xApps/tokens.md)
- [xApp Nodes](overview.md)
- [xApp: Get Session PIN](get-xApp-session-PIN.md)
- [xApp: Show HTML](set-html-xApp-state.md)
- [xApp: Show Adaptive Card](set-AdaptiveCard-xApp-state.md)
- [xApps](../../../../xApps/overview.md)