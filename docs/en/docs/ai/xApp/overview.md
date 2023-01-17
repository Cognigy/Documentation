---
 title: "xApps" 
 slug: "xApps" 
 hidden: true 
---

# xApps (Beta)

!!! note
    This feature is currently in Beta and may contain issues. We encourage you to test the feature and provide feedback so we can improve it before it is officially released.

Cognigy xApps are infinitely flexible micro-web applications for customer self-service. xApps can be used stand-alone or complimentary to any channel to enhance virtual and human agents' capabilities and to overcome channel limitations compromising user experiences.

The behavior of xApps is controlled via a set of [xApp Flow Nodes](../flow-nodes/xApp/overview.md). You can build the actual xApp Pages by in two ways, by providing [HTML code](../flow-nodes/xApp/set-html-xApp-state.md) or by specifying an [Adaptive Card in JSON](../flow-nodes/xApp/set-AdaptiveCard-xApp-state.md).

## Restrictions

- xApps should not be tested via the [Interaction Panel](../tools/interaction-panel/interaction-panel.md) in the Private Beta Release phase. The back-submitting of data into the Flow does not work correctly when the Interaction Panel is used.

## Concepts 

### Session Concept

An xApp Session can be accessed via the URL and be initialized via the [Init xApp Session](../flow-nodes/xApp/init-xApp-session.md) Flow Node. The xApp Session displays a sequence of xApp pages that can be configured as desired. A maximum of one xApp Session can be initialized per Cognigy Session.

### Screen Concept

The Shell Page has a set of configurable built-in screens. These default screens can be used to interact with end users, for example, when the xApp content is not displayed. These default screens are part of the Shell Page, which holds the connection to the Cognigy.AI backend.

#### PIN Screen

The PIN Screen prompts the end user to enter the xApp Session PIN. The user needs to provide the correct PIN to access the xApp Pages. Requesting a PIN to enter the session is optional.

#### xApp Screen

The xApp Screens are shown when the xApp Page is launched, fails to launch, encounters an Error, and is halted.

#### Intermediate Screen

The Intermediate Screens are displayed to the end user while no xApp Page is configured to be displayed. The default Intermediate Screen can be replaced with a custom-built xApp Page.

#### Connection Screen

The Connection Screens are shown while the real-time connection to the backend is re-established. The default Connection Screen can be replaced with a custom-built xApp Page.

## How it Works

1. Initialize a new xApp Session via the [Init xApp Session](../flow-nodes/xApp/init-xApp-session.md) Node. 
2. Allow users to access the xApp Session using one of the following methods:
    - **Without entering a PIN Code.** Share the xApp Session URL with the users.
    - **By entering a PIN Code.** Generate a PIN by adding the [Get xApp Session PIN](../flow-nodes/xApp/get-xApp-session-PIN.md) Node, send this PIN to the users and share the xApp PIN Page URL with them. The PIN code is only valid for 5 minutes.
3. To update an initialized session with a new custom-built xApp Page, use one of the following Nodes:
    - [Set HTML xApp State](../flow-nodes/xApp/set-html-xApp-state.md) to provide HTML code.
    - [Set AdaptiveCard xApp State](../flow-nodes/xApp/set-AdaptiveCard-xApp-state.md) to build an xApp Page by providing an Adaptive Card in the JSON format. 
4. Submit results of the xApp need to be JSON serializable. They are available in the Input object under `data._cognigy._app.payload`. You can check the submission by `input.data._cognigy._app.payload === "submit"`. 
5. To wait for the xApp user Input in a Flow, use the [Question](../flow-nodes/message/question.md) or the [Optional Question](../flow-nodes/message/optional-question.md) Node. The **xApp** type of the Question Node is only considered to be answered if submitted results are available as part of the Input. 
    

## More information

- [xApp Nodes](../flow-nodes/xApp/overview.md)
- [xApp Tokens](tokens.md)
- [xApp Flow API](api.md)
