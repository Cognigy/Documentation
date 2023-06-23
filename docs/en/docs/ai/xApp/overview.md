---
 title: "Overview" 
 slug: "overview" 
 hidden: false 
---

# xApps Overview (Beta)

[![Version badge](https://img.shields.io/badge/Added in-v4.51(Beta)-purple.svg)](../../release-notes/4.51.md)

{! _includes/beta/new-feature-note-xApp.md !}

Cognigy xApps are infinitely flexible micro-web applications for customer self-service. xApps can be used stand-alone or complimentary to any channel to enhance virtual and human agents' capabilities and to overcome channel limitations compromising user experiences.

The behavior of xApps is controlled via a set of [xApp Flow Nodes](../flow-nodes/xApp/overview.md).
You can build the actual xApp Pages in two ways,
by providing [HTML code](../flow-nodes/xApp/set-html-xApp-state.md)
or by specifying an [Adaptive Card in JSON](../flow-nodes/xApp/set-AdaptiveCard-xApp-state.md).
Alternatively, for more customization, you can create your own Node by implementing and uploading an Extension.

## Compatibility

- Cognigy xApps is compatible with the browsers and channels listed [here](supported-browsers-and-channels.md).

## Concepts 

### Session Concept

An xApp Session can be accessed via the URL and be initialized via the [xApp: Init Session](../flow-nodes/xApp/init-xApp-session.md) Flow Node. The xApp Session displays a sequence of xApp pages that can be configured as desired. A maximum of one xApp Session can be initialized per Cognigy Session.

### Screen Concept

The Shell Page has a set of configurable built-in screens. These default screens can be used to interact with end users, for example, when the xApp content is not displayed. These default screens are part of the Shell Page, which holds the connection to the Cognigy.AI backend.

#### xApp Screen

The xApp Screens are shown when the xApp Page is launched, fails to launch, encounters an Error, and is halted.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/success-screen.png" width="80%">
    <figcaption>xApp Success Screen</figcaption>
</figure>

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/error-screen.png" width="80%">
    <figcaption>xApp Error Screen</figcaption>
</figure>


#### Intermediate Screen

The Intermediate Screens are displayed to the end user while no xApp Page is configured to be displayed. The default Intermediate Screen can be replaced with a custom-built xApp Page.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/intermediate-screen.png" width="80%" />
    <figcaption>Intermediate Screen</figcaption>
</figure>

#### Connection Screen

The Connection Screens are shown while the real-time connection to the backend is re-established. The default Connection Screen can be replaced with a custom-built xApp Page.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/connection-screen.png" width="80%" />
    <figcaption>Connection Screen</figcaption>
</figure>

#### PIN Screen

The PIN Screen prompts the end user to enter the xApp Session PIN. The user needs to provide the correct PIN to access the xApp Pages. Requesting a PIN to enter the session is optional.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/pin-screen.png" width="80%" />
    <figcaption>xApp Pin Screen</figcaption>
</figure>

## How it Works

To learn more about how an xApp works, read the [Use cases](use-cases.md) and [Build an xApp](build-an-xApp.md) articles.


## More information

- [Getting Started](getting-started.md)
- [Architecture](architecture.md)
- [xApp Nodes](../flow-nodes/xApp/overview.md)
- [xApp Tokens](tokens.md)
- [xApp Flow API](api.md)
- [xApp Tutorials](tutorials.md)