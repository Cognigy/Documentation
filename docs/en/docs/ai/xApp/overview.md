---
 title: "xApp" 
 slug: "xApp" 
 hidden: true 
---

# xApps β

Cognigy xApps are infinitely flexible micro-web applications for customer self-service. xApps can be used stand-alone or complimentary to any channel to enhance virtual and human agents' capabilities. 

The behavior of xApps is controlled via a set of [xApp Flow Nodes](../flow-nodes/xApp/overview.md). You can build the actual xApp Pages by yourself in various ways, for example, by providing [HTML code](../flow-nodes/xApp/set-html-xApp-state.md) or by specifying an [Adaptive Card in JSON format](../flow-nodes/xApp/set-AdaptiveCard-xApp-state.md).

## Restrictions

- xApps should not be tested via the Interaction Panel in the Private Beta Release phase. The back-submitting of data into the Flow does not work correctly when the Interaction Panel is used.
- xApps only fully work with Endpoints compatible with the [Inject & Notify API](https://docs.cognigy.com/ai/endpoints/inject-and-notify/#notify-and-inject-in-transformers).

## Concepts 

### Session Concept

An xApp Session can be accessed via the URL and be initialized via the [Init xApp Session](../flow-nodes/xApp/init-xApp-session.md) Flow Node. The xApp Session displays a sequence of xApp pages that can be configured as desired. A maximum of one xApp Session can be initialized per Cognigy Session.

#### Screen Concept

The Shell Page has a set of configurable built-in screens. These default screens can be used to interact with end users, for example, when the xApp content is not displayed. These default screens are part of the Shell Page, which holds the connection to the Cognigy.AI backend.

#### PIN Screen

The optional PIN Screen prompts the end user to enter the xApp Session PIN. The user needs to provide the correct PIN to access the xApp Pages.

#### xApp Screen

The xApp Screens are shown when the xApp Page is launched, fails to launch, encounters an Error, and is halted.

#### Intermediate Screen

The Intermediate Screens are displayed to the end user while no xApp Page is configured to be displayed. The default Intermediate Screen can be replaced with a custom-built xApp Page.

#### Connection Screen

The Connection Screens are shown while the real-time connection to the backend is re-established. The default Connection Screen can be replaced with a custom-built xApp Page.

## How it Works

1. Initialize a new xApp Session via the [Init xApp Session](../../flow-nodes/init-xApp-session.md) Node. 
2. *(Optional)* To display the optional PIN Screen to the end user, add the [Get xApp Session Pin](../../flow-nodes/get-xApp-session-PIN.md) Node.
3. The xApp is accessed via the xApp Session URL, which is exposed via the [xApp Session URL token](tokens.md).
4. Use the following tokens:
    - **xApp PIN page URL** to send the user a link to the PIN Screen.
    - **xApp Session PIN** to share the PIN with the user.
5. To build the xApp Page or update an initialized session with a new xApp Page, use one of the following Nodes:
    - [Set HTML xApp State](../../ai/flow-nodes/set-html-xApp-state.md) to provide HTML code.
    - [Set AdaptiveCard xApp State](../../ai/flow-nodes/set-AdaptiveCard-xApp-state.md) to specify an Adaptive Card in the JSON format. 
6. Submit results of the xApp need to be JSON serializable. They are available in the Input object under `data._cognigy._app.payload`. You can check the submission by `input.data._cognigy._app.payload === "submit"`. 
7. To wait for the xApp user Input in a Flow, use the [Question](../../flow-nodes/message/question.md) or the [Optional Question](../../flow-nodes/message/optional-question.md) Node. The **xApp** type of the Question Node is only considered to be answered if submitted results are available as part of the Input. 


Aditionally, you can use the [xApp Page SDK](sdk.md) and [xApp Flow API](api.md) for customization your xApp. 
    

## More information

- [xApp Nodes](../flow-nodes/xApp/overview.md)
- [xApp tokens](tokens.md)
- [xApp xApp Page SDK](sdk.md)
- [xApp Flow API](api.md)
