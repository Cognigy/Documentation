---
title: "Interaction Panel" 
slug: "interaction-panel"
description: "The Interaction Panel offers a robust testing interface for your AI Agents. It enables you to test and analyze the behavior of your AI Agents, allowing you to easily modify and improve their communication and service skills."
hidden: false 
---

# Interaction Panel

The *Interaction Panel* offers a robust testing interface for your AI Agents. It enables you to test and analyze the behavior of your AI Agents, allowing you to modify and improve their communication and service skills.

The Interaction Panel provides the following features:

- **Three Testing Modes**. Test your AI Agent across all channels with Chat, Voice, and Live modes to simulate real-world interactions.
- **Memory Inspection and Extraction**. View and extract data stored within the AI Agent's memory to analyze its behavior and identify potential areas for improvement.
- **Playbooks**. Use playbooks to save your time by automating repetitive tasks and catching errors efficiently.
- **Flexible Configuration**. Design custom test scenarios for in-depth analysis of your AI Agent's behavior.

If you're new to the Interaction Panel,
follow these steps to familiarize yourself with its features and start testing AI Agents:

1. [Open the Interaction Panel](#open-the-interaction-panel) and [configure the Project-related settings](#project-related-settings).
2. [Select the mode](#test) in which you want to test the AI Agent.
3. [Examine the data stored in the AI Agent's memory](#info) and how it's reused.
4. Use the [Debug mode](#debug-mode) for more detailed testing.
5. Run [Playbooks](#playbooks) to catch potential errors.

## Open the Interaction Panel

To open the Interaction Panel, follow these steps:

1. In the left-side menu of the Project, go to **Build > Flows**.
2. On the **Flows** page, select the Flow that contains the AI Agent you want to test. 
3. In the toolbar at the top right of the Cognigy.AI interface, click ![chat-menu](../../../_assets/icons/chat-menu.svg).

In the Cognigy.AI interface, the Interaction Panel is always accessible within any Project, offering a quick and convenient way to test and debug your AI Agents.

## Project-Related Settings

If you open the Interaction Panel directly from a Flow, the Flow itself,
any relevant Snapshot (a specific version of your AI Agent),
and Locale (language settings) will be preselected based on your Flow settings. 
However, you can still modify these options as needed.

When you access the Interaction Panel from any other Project page, you'll need to configure the following options for testing:

- [Flow](#flow-select) — select the specific Flow you want to test with the AI Agent.
- [Locale](#locale) — define the language your AI Agent should use during the test interaction.
- [Snapshot](#snapshot) — this setting is optional. If applicable, you can select a specific version of your AI Agent for testing.

### Flow Select

When you have created more than one Flow, you can select the Flow you want to test as follows:

1. Click ![expand-locale-list](../../../_assets/icons/expand_2.svg) to open a list of the available Flows.
2. Select the Flow you want to test.

### Locale

[Locales](../../build/translation-and-localization/localization.md) are fundamental components for multilingual AI Agents communication.
They enable AI Agents to interact with end users in their native languages,
considering cultural nuances and creating a smooth user experience.

When you create more than one locale, you can select a preferred language as follows:

1. Click ![expand 2](../../../_assets/icons/expand_2.svg) to open a list of the available locales.
2. Select the Locale you want to use.

When you run a Flow on the **Test** tab, the AI Agent's responses will match the language you previously selected in the [locale settings](../../build/flows/overview.md) of your Flow.

### Snapshot

[Snapshots](../../deploy/snapshots.md) are immutable forms of your AI Agent.
Using Snapshots, you can test your AI Agent configuration in the Interaction Panel as follows:

1. Click ![expand 2](../../../_assets/icons/expand_2.svg) to open a list of the available Snapshots.
2. Select the Snapshot you want to test. 

For more information, refer to [Snapshots](../../deploy/snapshots.md).


## Test

On the **Test** tab of the Interaction Panel, you can test your AI Agent using different channels. 

### Channel-Specific Output

To view channel-specific output, it must be configured in an output Node (for example, [Say](../../build/node-reference/basic/say.md) or [Question](../../build/node-reference/basic/question.md) Nodes).
The Interaction Panel displays the outputs with corresponding channel icons and can filter them for a selected set of channels. For more information, refer to [Chat Output](#chat-output).

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-channel-selection.png" width="80%" />
</figure>

### Input Modes

You can select three input modes by selecting the corresponding tab at the bottom of the Interaction Panel interface: 

- [Chat](#chat)
- [Voice Call](#voice-call)
- [Live Follow](#live-follow)

#### Chat

When **Chat** is selected as the input mode,
a Flow can be triggered by typing into the input field
and pressing ++enter++ on your keyboard or clicking the **Send** button.
Alternatively,
use the ![record-audio](../../../_assets/icons/record-audio.svg) (**microphone**) button
to activate your device's microphone and record voice input.

Messages can include attached data. You can simulate this data input by adding a data payload in [JSON](https://www.json.org/json-en.html) format to the data input field. To activate the **Data Input** field, go to the **Settings** tab and enable the **Show data input** toggle. Any message data sent to Cognigy.AI is accessible via [CognigyScript](../../build/cognigyscript.md) using the expression `{{ " {{input.data}}" }}`.

In **Chat** mode, you can use additional settings:

- **Reset Session** — the setting clears the chat history in the Interaction Panel. 
- **Create Playbook** — the setting starts a new Playbook for testing conversations. For more information, refer to [Playbooks](../playbooks.md).
- **Create Playbook with Assertions** — the setting starts a new Playbook with assertions for in-depth testing. For more information, refer to [Playbook with Assertions](../playbooks.md#assertion).
- **Enable/Disable Debug Mode** — the setting toggles the [Debug mode](#debug-mode). Debug mode is enabled by default.

#### Voice Call

[![Version badge](https://img.shields.io/badge/Beta-purple.svg)](../../../release-notes/earlier-versions/overview.md)

!!! note "Feature availability"
    - If you use a SaaS Cognigy installation, contact the support team to activate this feature.
    - If you use an on-premises Cognigy installation, activate this feature by adding `FEATURE_ENABLE_VOICECALL_WHITELIST`  in `values.yaml`. For example, `FEATURE_ENABLE_VOICECALL_WHITELIST:<organization-1-id>,<organization-2-id>`.

In **Voice Call** mode, the Interaction Panel lets you initiate a test call to hear how your voice AI Agent sounds.

Before starting a voice call, you need to configure a voice provider in the [Voice Preview Settings](../../test/voice-preview.md) of your Project. 

{! _includes/ai/voice-providers.md !}

Based on the selected **Audio Provider**, the list of supported STT and TTS languages and voices will change. On the **Settings** tab, in the **Voice Call** section, you can select your preferred language and voice for your test call. 
After configuring the Audio Provider, language and voice, you can start the call by clicking the **Start Call** button.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-start-voice-call.png" width="60%" />
</figure>

During a call, you can do the following:

- **Monitor call duration**. The call timer displayed next to the **End Call** button shows you how long your call has been active.
- **Send DTMF tones**. Use the **Dialpad** to send touch-tone (DTMF) signals during the call. These tones you hear when you click buttons on the **Dialpad** for entering codes or navigating menus within the call.
- **Follow the conversation**. View the real-time conversation transcript in the Interaction Panel to track the call.
- **Automatically end a call on timeout**. If you don't provide any voice input for a set period (timeout), the call will automatically end to prevent unnecessary connection time.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-end-voice-call.png" width="100%" />
</figure>

To see and analyze the payload of a recognized voice input, click ![expand](../../../_assets/icons/expand.svg) indicated on the message fields.

#### Live Follow

In **Live Follow** mode, you can do the following:

- Observe conversations between AI Agents and users in real time.
- Debug Flows only after setting up an Endpoint for the specific Flow.

To use and test this mode, follow these steps:

1. Go to **Test > Logs**.
2. On the **Logs** page, find `userId` in the `info Received message from user` log. If you do not see this log, navigate to the channel chat you created via the Endpoint, for example, Webchat, Teams, or Slack. Send a message to this chat, then go to the **Logs** page. To get `userId` for Demo Webchat, refer to [Manually defining the user ID](../../../webchat/demo.md#manually-defining-the-user-id).
3. Copy `userId`.
4. Go to the Flow editor, then open the Interaction Panel by clicking ![chat-menu](../../../_assets/icons/chat-menu.svg) in the upper-right corner.
5. At the bottom of the Interaction Panel, click ![live-follow](../../../_assets/icons/live-follow.svg).
6. Paste `userId` into the **User ID** field.
7. To start live following, click ![start-live-following](../../../_assets/icons/start-live-following.svg).

You can now view and track the user's real-time conversation from your Interaction Panel. To stop live following, click **Stop Live Following**.

!!! note
    Human-agent messages are not shown in the Live Follow mode.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-follow-user.png" width="80%" />
</figure>

#### Playbook

**Playbook** mode helps save time, catch errors, and give clear details on your AI Agent's performance. Playbooks serve as scripts that run through conversations to ensure the AI Agent responds correctly.

To run a Playbook within the **Playbook** mode, follow these steps:

1. At the bottom of the Interaction Panel, select the **Playbook** tab.
2. From the **Playbooks** list, select the Playbook you want to execute.
3. Click **Play**.

During execution, you can see if Playbook Step assertions passed or failed.
Hovering your cursor over them reveals more details in a tooltip.
For more information, refer to [Assertions](../../test/playbooks.md#assertion).

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-playbook.png" width="100%" />
</figure>

You can further configure the Playbook execution in the [Playbook settings](#playbooks).

## Info

The **Info** tab menu includes the following sections:

- [Input](#input)
- [Context](#context)
- [Profile](#profile)
- [State](#state)

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-info.png" width="100%" />
</figure>

Cognigy.AI objects have a different life span depending on their type.
For more information,
refer to [Cognigy Objects Life Span](../../build/cognigyscript.md#life-span-of-cognigy-objects).

### Input

The **Input** object is updated with every user interaction
and holds a lot of relevant information about the user's input,
such as the Intents that were found, the channel that the message was sent through and other relevant metadata.
For more information, refer to [Input](input.md).

### Context

The **Context** object serves as the AI Agent's short-term memory, storing session-specific information, such as selected products or the user's current location. Additionally, the Context holds API responses relevant to the particular session.
For more information, refer to [Context](context.md).

### Profile

The **Profile** object serves as the long-term memory of the system, storing user data such as names and emails and including user-specific information such as favorite colors.
For more information, refer to [Profile](profile.md).

### State

**State** can be used to narrow the set of Intents that can be triggered by actively excluding certain Intents from a specific state.

For more information, refer to [State](state.md).

## Settings

To configure the relevant settings for the Interaction Panel, click the tab **Settings**. The following table gives an overview of the available settings.

| Setting                           | Description                                                                                                                                                    |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **General**                       |                                                                                                                                                                |
| NLU Connector                     | Provides a selection list. The default is the Cognigy NLU engine.                                                                                              |
| Text to Speech                    | Reads out messages from the system.                                                                                                                            |
| Channel Selection                 | Provides a selection list for Endpoint providers.                                                                                                              |
| **Debug Mode**                    |                                                                                                                                                                |
| Debug mode                        | Enable or disable Debug mode.                                                                                                                                  |
| Node Filter                       | Select the Node types to show in Debug mode.                                                                                                                   |
| **Chat**                          |                                                                                                                                                                |
| Show Data Input                   | Displays data input.                                                                                                                                           |
| **Voice Call**                    |                                                                                                                                                                |
| Language                          | Provides a drop-down list with available languages.                                                                                                            |
| Voice                             | Provides a drop-down list with available female and male speakers.                                                                                             |
| **Playbooks**                     |                                                                                                                                                                |
| Repeat                            | Reruns a Playbook after it finishes executing.                                                                                                                 |
| Delay                             | Waits between Playbook steps. The default setting is 200ms.                                                                                                    |
| **Advanced**                      |                                                                                                                                                                |
| Auto-Move Flow Editor             | Switches and moves the Flow editor automatically based on the last executed Node.                                                                              |
| Auto-Switch Target Flow Selection | Switches the target Flow automatically when another Flow is opened in the Editor. The target Flow will not switch automatically if there is an active session. |

### General

The Interaction Panel can be configured with a number of settings across different sections.

#### Chat Input

The **Chat Input** setting lets you enable third-party NLU engines for use in the Interaction Panel. 
To install a new NLU engine in Cognigy.AI, go to **Build > NLU Connectors** and click **+ New NLU Connector**.

For more information on how to manage NLU connectors, refer to [NLU Connectors](../../empower/nlu/external/nlu-connectors.md).

#### Chat Output

The **Chat Output** setting lets you customize how information is displayed in the Interaction Panel:

- [Text to Speech](#text-to-speech) — activate this setting to have system messages read aloud.
- [Debug mode](#debug-mode) — activate this mode to view more details about the Flow execution.
- [Channel Select](#channel-select) — select the channels you want to display from the list.

##### Text-to-Speech

When the **Text-to-Speech** setting is enabled, an AI Agent will vocalize its responses using your browser's built-in Text-to-Speech (TTS) functionality.

##### Debug Mode

[![Version badge](https://img.shields.io/badge/Updated in-v4.84-blue.svg)](../../../release-notes/4.84.md)

The **Debug Mode** setting is enabled by default.

Within this mode, the Interaction Panel displays more information about the Flow execution, including:

- Triggered [Intents](../../empower/nlu/intents/ml-intents.md) and their [scores](../../empower/nlu/intents/intent-analyzer.md).
- Triggered [Yes/No Intents](../../empower/nlu/intents/yes-no-intents.md) and their [scores](../../empower/nlu/intents/intent-analyzer.md).
- Matched [Slots](../../empower/nlu/slots-and-lexicons/slots.md)
- Found [Lexicon Keyphrases](../../empower/nlu/slots-and-lexicons/lexicons.md)
- [State](./state.md) changes
- Flow Transitions, for example, when executing a [Go To Node](../../build/node-reference/logic/go-to.md), an [Execute Flow Node](../../build/node-reference/logic/execute-flow.md), or triggering an [Attached Flow](../../empower/nlu/attachments/attached-flows.md).
- Node-specific output, for example, from an [HTTP Request Node](../../build/node-reference/service/http-request.md). Some Nodes have settings to further configure their Debug mode output. Node-specific outputs can be disabled selectively in the Interaction Panel [settings](#settings).

Debug Messages can also be triggered explicitly, either using the [Debug Message](../../build/node-reference/basic/debug-message.md) Node or [debug actions](../../build/node-reference/basic/code/actions.md) in the Code Node.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-chat-tab-debug-mode.png" width="80%" />
</figure>

##### Channel Select

The Interaction Panel lets you filter messages by channels, such as Webchat, Voice Gateway, Slack, and more.
The **Show all** option is selected by default, displaying outputs from all channels.
You can change this option on the **Settings** tab.
By default, outputs from all channels will be displayed, indicated by the **Show all** setting.

### Chat

The **Chat** section lets you activate **Show data input** to enable the **Data Input** field for chat messages in the Interaction Panel.
When the setting is active, an additional input field appears below the standard text input field, allowing you to enter JSON data.  

Example:

Valid JSON input data could be `{"firstName": "Max", "lastName": "Müller"}`, which can be sent with or without a text message.

### Voice Call

[![Version badge](https://img.shields.io/badge/Beta-purple.svg)](../../../release-notes/index.md)

The **Voice Call** section lets select the language and voice to test voice calls from the Interaction Panel.

Configure the following options:

- **Language**. Select from multiple languages in a drop-down menu. The **Custom** option lets you use a TTS language, which isn't in the list. It defines the language of the AI Agent's output. The format depends on the TTS Vendor, for example, de-DE, fr-FR, en-US.
- **Voice**. Select a female or male speaker's voice. This setting applies to region-specific voices as well. The format depends on the TTS Vendor, for example, de-DE-ConradNeural.

### Playbooks

This **Playbooks** section lets you to configure the Playbook executions in the Interaction Panel using two settings:

- **Repeat**. Run the Playbook repeatedly (until you stop it). This feature is helpful for testing use cases that need consistent behavior over many interactions.
- **Delay**. The waiting time between each Playbook Step execution. A delay of 200 milliseconds (ms) is the default value.

### Advanced

The Interaction Panel offers two advanced settings to improve Flow editing:

- [Auto-move Flow Editor](#auto-move-flow-editor)
- [Auto-switch Target Flow Selection](#auto-switch-target-flow-selection)

#### Auto-Move Flow Editor

When the **Auto-move Flow Editor** setting is enabled, the Flow editor will automatically:

- Center and focus on the last executed Node in the current Flow based on user or AI Agent's outputs.
- Open and center the Node if it belongs to a different Flow.

The setting is enabled by default.

#### Auto-Switch Target Flow Selection

When the **Auto-switch Target Flow Selection** setting is enabled,
the Flow selection in the Interaction Panel automatically switches to the Flow opened in the Flow editor.
The setting is disabled by default.

Example: 

A project includes two Flows, Flow A and Flow B. The process starts according to Flow A and will reach a certain step, at which point Flow B begins processing.
Now active,
Flow B is immediately displayed in the editor
and the Interaction Panel automatically switches to Flow B as soon as it's opened in the Flow editor. 

## More Information

- [Cognigy Script and Objects Life Span](../../build/cognigyscript.md#life-span-of-cognigy-objects)
- [Testing your AI Agents with Playbooks](https://support.cognigy.com/hc/en-us/articles/9585431937948-Best-Practices-Testing-your-Virtual-Agents-with-Playbooks#1-design-comprehensive-playbooks-0-0)
- [Voice Gateway Parameter Details](../../build/node-reference/voice/voice-gateway/parameter-details.md)