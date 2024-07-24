---
title: "What's xApp?" 
slug: "overview" 
hidden: false 
---

# xApps Overview

[![Version badge](https://img.shields.io/badge/Added in-v4.51-blue.svg)](../release-notes/4.51.md)

{! _includes/ai/xApp/pricing.md !}

Cognigy xApps are infinitely flexible micro-web applications for customer self-service.
xApps can be used stand-alone or complimentary to any channel to enhance AI and human agents'
capabilities and to overcome channel limitations compromising user experiences.

The behavior of xApps is controlled via a set of [xApp Flow Nodes](../ai/build/node-reference/xApp/overview.md).
You can build the actual xApp Pages in two ways,
by providing [HTML code](../ai/build/node-reference/xApp/set-html-xApp-state.md)
or by specifying an [Adaptive Card in JSON](../ai/build/node-reference/xApp/set-AdaptiveCard-xApp-state.md).
Alternatively, for more customization, you can create your own Node by implementing and uploading an Extension.

Watch this webinar to get a quick overview of what xApps are, how they work, and in which scenarios you can use them. The webinar also includes a tutorial on how to build a simple xApp.

<div style="text-align:center;">
  <iframe width="701" height="438" src="https://www.youtube.com/embed/4qvZGG6qK6w" title="Design Multimodal Customer Journeys with Cognigy xApps" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Compatibility

- Cognigy xApps are compatible with the browsers and channels listed [here](supported-browsers-and-channels.md).

## Concepts 

### Session Concept

An xApp Session can be accessed via the URL and be initialized via the [xApp: Init Session](../ai/build/node-reference/xApp/init-xApp-session.md) Flow Node. The xApp Session displays a sequence of xApp pages that can be configured as desired. A maximum of one xApp Session can be initialized per Cognigy Session.

### Screen Concept

The Shell Page has a set of configurable built-in screens. These default screens can be used to interact with end users, for example, when the xApp content is not displayed. These default screens are part of the Shell Page, which holds the connection to the Cognigy.AI backend.

#### xApp Screen

The xApp Screens are shown when the xApp Page is launched, fails to launch, encounters an Error, and is halted.

<figure>
    <img class="image-center" src="../../../_assets/xApps/success-screen.png" width="80%">
    <figcaption>xApp Success Screen</figcaption>
</figure>

<figure>
    <img class="image-center" src="../../../_assets/xApps/error-screen.png" width="80%">
    <figcaption>xApp Error Screen</figcaption>
</figure>

#### Intermediate Screen

The Intermediate Screens are displayed to the end user while no xApp Page is configured to be displayed. The default Intermediate Screen can be replaced with a custom-built xApp Page.

<figure>
    <img class="image-center" src="../../../_assets/xApps/intermediate-screen.png" width="80%" />
    <figcaption>Intermediate Screen</figcaption>
</figure>

#### Connection Screen

The Connection Screens are shown while the real-time connection to the backend is re-established. The default Connection Screen can be replaced with a custom-built xApp Page.

<figure>
    <img class="image-center" src="../../../_assets/xApps/connection-screen.png" width="80%" />
    <figcaption>Connection Screen</figcaption>
</figure>

#### PIN Screen

The PIN Screen prompts the end user to enter the xApp Session PIN. The user needs to provide the correct PIN to access the xApp Pages. Requesting a PIN to enter the session is optional.

<figure>
    <img class="image-center" src="../../../_assets/xApps/pin-screen.png" width="80%" />
    <figcaption>xApp Pin Screen</figcaption>
</figure>

## How it Works

To learn more about how an xApp works, read the [Use cases](use-cases.md) and [Build your first xApp](build/first-xApp.md) articles.
You can find ready-made examples of xApps in the [Cognigy GitHub](https://github.com/Cognigy/xApps/tree/main) repository.

## More Information

- [Architecture](architecture.md)
- [xApp Nodes](../ai/build/node-reference/xApp/overview.md)
- [xApp Tokens](tokens.md)
- [xApp Flow API](api.md)
