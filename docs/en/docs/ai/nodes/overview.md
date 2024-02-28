---
title: "Nodes Overview" 
slug: "nodes-overview" 
hidden: false 
---

# Nodes Overview

_Nodes_ are fundamental building blocks that are used to construct Flows and define the logic of virtual agents. Each node represents a specific action, decision point, or interaction within the Flow. Users can create, configure, and connect Nodes to design complex conversational experiences.

Node Categories:

- [Basic Nodes](#basic-nodes)
- [Logic Nodes](#logic-nodes)
- [Voice](#voice-nodes)
- [Analytics](#analytics-nodes)
- [Service](#service-nodes)
- [NLU](#nlu-nodes)
- [Data](#data-nodes)
- [AI Copilot](#ai-copilot)
- [xApps](#xApps)
- [Other](other-nodes/overview.md)

If you want to create a custom Node, go to the [Extensions](../resources/manage/extensions.md) section.

Note that Nodes in the Cognigy.AI interface can belong to multiple categories for easy navigation. For example, the Code Node is in Basic and Data categories, the MongoDB Nodes are in Service and Data, and the Look up Node are in Logic and Basic.

## [Basic Nodes](basic/overview.md)
<div class="divider"></div>

Basic Nodes are commonly used in basic conversational Flows. Included are typical Nodes like the [Say Node](basic/say.md), the [Question Node](basic/question.md).

### [Say](basic/say.md)

This is the most basic output Node that can be used to send a message to the user on his current channel. 

### [Question](basic/question.md)

The Question Node can be used to ask the user a question. When triggered, the Entry Point will shift to this Node so that the conversation can continue when the user answers - and a new [Input](../../ai/tools/interaction-panel/input.md) object is generated. By default, the [Entry Point](../resources/build/flows.md#entry-points) will stick to this Node until a valid answer has found.

### [Optional Question](basic/optional-question.md)

The Optional Question Node works similar to the Question Node, except for the fact that the Entry Point is optional by default. 

### [Send Text](basic/send-text.md)

The Send Text Node outputs simple text.

### [Code Node](basic/code/overview.md)

Code Node enables a Flow creator to execute custom JavaScript or TypeScript code within the Flow. The editor has full IntelliSense and exposes all Cognigy objects and actions. For better performance, the TypeScript code will be transpiled when the node is saved. If the transpilation fails the code will be saved and an error icon will appear in the top right corner of the Code Node, indicating that there is a potential issue with the code.

## [Logic Nodes](./logic/overview.md)
<div class="divider"></div>

Logic Nodes can be used to execute a certain logic in the flow. They include classical conditions, as well as specific Flow behavior like waiting for a user input.

### [If](./logic/if.md)

The If Node is one of the most common Logic Nodes. It can be used to evaluate a statement and depending on the outcome, the Then or Else cases are triggered.  Conditions can be created using **CognigyScript** or using the built-in [Token System](../resources/manage/tokens.md).

### [Lookup](./logic/lookup.md)

The Lookup Node acts as a switch between different options. A certain type of input (for example, Intents) is evaluated and based on the value, a certain branch is executed.

### [Go To](./logic/go-to.md)

The Go To Node can be used to jump between Flows or between Nodes. If the Go To Node is used to switch to another Flow, the **Entry Point** will switch to that Flow altogether (until switched back).

### [Execute Flow](./logic/execute-flow.md)

The Execute Flow Node can be used to execute another Flow, meaning that it will run that Flow and return to the initial Flow afterwards. This means that the *Entry Point* will not switch to the new Flow. This operation can be compared to a function call. 

### [Think](./logic/think.md)

The Think Node can be used to deliberately inject a text into the **Start Node** of the Flow. This is useful in case it is necessary to start the Flow again, with a specific payload. The payload could, for example, correspond to a certain Intent.

### [Once](./logic/once.md)

Everything below a Once Node will be executed only once per session. This is useful in case the bot needs to greet the user or in case a database request needs to happen only once per session.

### [Interval](./logic/interval.md)

The Interval Node can be used to only allow certain Nodes to be executed if a given time (interval) has passed. It is configurable with a number of milliseconds.

### [Stop and Return](./logic/stop-and-return.md)

The Stop and Return node stops Flow execution and return to the Entry Point at the start node.

### [Wait for Input](./logic/wait-for-input.md)

The Wait for Input Node waits for user input and continues Flow execution.

### [Sleep](./logic/sleep.md)

The Sleep Node pauses execution for a number of milliseconds. This Node used to be known as the Pause Node. 

### [Reset State](./logic/reset-state.md)

With the Reset State Node, the Flow's [State](../tools/interaction-panel/state.md) can be reset.

### [Set State](./logic/set-state.md)

With the Set State Node, the Flow's [State](../tools/interaction-panel/state.md) can be changed.

### [Add To Context](./logic/add-to-context.md) 

This Node is used to store information in the Cognigy [Context](../tools/interaction-panel/context.md), so that it can be used throughout the session on subsequent user inputs.

### [Remove From Context](./logic/remove-from-context.md)

This Node is used to remove information from the Cognigy [Context](../tools/interaction-panel/context.md).

### [Switch Locale](./logic/switch-locale.md)

This Node is used to change to an alternate [Locale](../resources/manage/localization.md) during a conversation. It is common to use this node after language detection or based on the region of the user to execute a change to the conversational language or structure based on an assessment of the user's region or spoken language.

## [Voice Nodes](voice/overview.md)
<div class="divider"></div>

Voice Nodes are for developing a voice agent.

### [Generic Voice Nodes](voice/generic/overview.md)

#### [Barge In - Config](voice/generic/barge-in-config.md)

This Node is a session config that enables the interruption of the bot.

When executed, the settings will apply for the remainder of the session.

#### [Continuous ASR - Config](voice/generic/continuous-asr-config.md)

Continuous ASR enables the system to concatenate multiple STT recognitions of the user and then send them as a single textual message to the bot.

#### [DTMF Collect - Config](voice/generic/dtmf-collect-config.md)

Enables capturing of DTMF signals by the bot during the entire call session.

When executed, the settings will apply for the remainder of the session.

#### [Hang Up](voice/generic/hang-up.md)

The Hang Up Node will instruct the system to end the call.

#### [Mute Speech Input](voice/generic/mute-speech-input.md)

This Node controls when speech user inputs can be collected in your Flow.

#### [Play URL](voice/generic/play-url.md)

The Play URL Node lets you stream a sound file into the call with the ability to loop it. MP3 and WAV encoded files are supported.

#### [Send Metadata](voice/generic/send-metadata.md)

The Send Meta Data Node sends metadata via SIP INFO messages to the connected SIP trunk.

#### [Session Speech Parameters - Config](voice/generic/session-speech-parameters-config.md)

This Node enables the change of speech parameters during the Flow.

#### [Transfer](voice/generic/transfer.md)

This Node lets pass an active call to a tel or sip target.

#### [User Input Timeout - Config](voice/generic/user-input-timeout-config.md)

This Node defines the action that the virtual agent should take if it does not receive any input from the user within a certain timeframe.

## [Analytics Nodes](./analytics/overview.md)
<div class="divider"></div>

Analytics Nodes let you take advantage of Cognigy AI's comprehensive marketing functionality. Use and update [Contact Profiles](../resources/manage/contact-profiles.md) within your Flow for personalized, adaptive Flows that connect with your audience.

### [Activate Profile](./analytics/activate-profile.md)

This Node can be used to activate a [Contact Profile](../resources/manage/contact-profiles.md) in case it has been deactivated. The Node is not configurable. 

### [Deactivate Profile](./analytics/deactivate-profile.md)

This Node can be used to deactivate the [Contact Profile](../resources/manage/contact-profiles.md).

### [Update Profile](./analytics/update-profile.md)

This Node is commonly used, as it helps update [Contact Profile](../resources/manage/contact-profiles.md) information. It is configurable with a drop-down of all the [Contact Profile Schema](../resources/manage/contact-profiles.md) attributes.  

### [Merge Profile](./analytics/merge-profile.md)

This Node can be used to merge the current session to an existing [Contact Profile](../resources/manage/contact-profiles.md). The Node can be configured with an identifier that can be used as a user id.

### [Blind Mode](./analytics/blind-mode.md)

The Blind Mode disables all (or selected) logging. The Node can be used whenever the virtual agent handles sensitive data, that should be excluded from the logs.

* Mask Login: Outputs XXXX in the output logs of the Agent.
* Mask Analytics: Outputs XXXX in the analytics (including Contact Profile conversations).
* Disable Conversations: Disabled output analytics altogether.

### [Delete Profile](./analytics/delete-profile.md)

Deletes the currently active [Contact Profile](../resources/manage/contact-profiles.md).

### [Complete Goal](./analytics/complete-goal.md)

Can be used to add a custom Goal to the [Contact Profile](../resources/manage/contact-profiles.md). Custom Goals are KPIs that can be dynamically configured and that show up in the output analytics as well as the [Contact Profile](../resources/manage/contact-profiles.md) overview.

## [Service Nodes](./service/overview.md)
<div class="divider"></div>

Service Nodes can be used to trigger external services, like databases and email servers. Cognigy.AI ships with a number of built-in services. Additional services can be added through [Extensions](../resources/manage/extensions.md).

### [HTTP Request](./service/http-request.md)

The HTTP Request Node is a very convenient Node that can execute HTTP requests to other interfaces (APIs). It can be configured with typical REST operations (GET, POST, PATCH, PUT, DELETE) and has configurable JSON or Text payloads.

### [MongoDB Nodes](./service/mongo-db.md)

Cognigy.AI has a built-in MongoDB connector that can be used directly within the Flow.

### [Microsoft SQL Nodes](./service/ms-sql.md)

Cognigy.AI has a built-in Microsoft SQL connector that can be used directly within the Flow. 

## [NLU Nodes](./nlu/overview.md)
<div class="divider"></div>

NLU Nodes are a collection of Nodes that are related to the platform's [NLU](../nlu/nlu-overview/overview.md). It features a range of different Nodes.

### [Copy Slots to Context](./nlu/copy-slots-to-context.md)

This Node can be used to copy slots that were detected and published in the [Input](../tools/interaction-panel/input.md) object, to the conversation [Context](../tools/interaction-panel/context.md). 

### [Add Lexicon Keyphrase](./nlu/add-lexicon-keyphrase.md)

This Node can be used to dynamically create a [Lexicons](../resources/build/lexicons.md) Keyphrase entry, either based on hardcoded or dynamic data.

### [Execute Cognigy NLU](./nlu/execute-cognigy-nlu.md)

Can be used to explicitly execute **Cognigy NLU** at a certain point in the flow. NLU execution happens automatically at the start of the Flow and with each new user input.

### [Regex Slot Filler](./nlu/regex-slotfiller.md)

This Node can be used to create a Slot based on a **Regex Pattern**. When the pattern is detected, a slot will be published to the [Input](../tools/interaction-panel/input.md) object.

## [Data Nodes](data/overview.md)
<div class="divider"></div>

Data Nodes are designed to manage, manipulate, process, or store data within a system.

### [Send SMTP Email](data/send-smtp-email.md)

The Send Email Node can be used to send an email message directly from within the Flow. IT requires a [Connection](../resources/build/connections.md) in order to work.

### [Datepicker](data/datepicker.md)

The Datepicker can be used to render a date selection widget in certain channels. It has an extensive list of configurable options.

## [AI Copilot](ai-copilot/overview.md)
<div class="divider"></div>

Nodes for creating the AI Copilot workspace.

## [xApps](xApp/overview.md)
<div class="divider"></div>

Nodes for creating xApps.

## [Other Nodes](./other-nodes/overview.md)
<div class="divider"></div>

Nodes that did not fit into any category above.
 