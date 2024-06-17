---
title: "Interaction Panel" 
slug: "interaction-panel" 
hidden: false 
---

# Interaction Panel

The *Interaction Panel* provides an intuitive user interface to interact with AI Agents. The Interaction Panel enables you to test and analyze the behavior of your AI Agents, allowing you to easily modify and improve the AI Agents communication and service skills.

To open the Interaction Panel click ![chat-menu](../../../_assets/icons/chat-menu.svg) in the toolbar at the top right of the Cognigy.AI interface. 
In Cognigy.AI, the Interaction Panel is always accessible from any page.  This feature helps you interact with your AI Agent quickly and conveniently.
## Project related Settings

The Interaction Panel can be configured with a number of settings.

Before using the Interaction Panel for test purposes, you can configure the following options:

- [Snapshot](#snapshot)
- [Locale](#locale)
- [Flow](#flow%20select)

### Snapshot

Snapshots are immutable forms of your AI Agent. Using Snapshots, you can test your AI Agent configuration in your Interaction Panel as follows:

1. Click ![expand 2](../../../_assets/icons/expand_2.svg) to open a list of the available Snapshots.
2. Select the Snapshot you want to test. 

For more information, read the [Snapshots](../../deploy/snapshots.md) documentation.

### Locale

After creating multiple locales in your Flow, you can select a preferred language as follows: 

1. Click ![expand 2](../../../_assets/icons/expand_2.svg) to open a list of the available locales.
2. Select the Locale you want to use. 

When you run a Flow on the **Test** tab, the AI Agent will reply in the language you previously prepared in the [locale settings](../../build/flows.md#locale-settings) of your Flow.

### Flow Select 

When you have created more than one Flow, you can select the Flow you want to test as follows: 

1. Click ![expand-locale-list](../../../_assets/icons/expand_2.svg) to open a list of the available Flows.
2. Select the Flow you want to test. 

## Test

The Test feature enables you to test your AI Agent using different channels. 

### Channel-Specific output

If a channel-specific output is configured in an output Node (for example, Say or Question Nodes), the Interaction Panel shows the output with a corresponding channel icon.
<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-channel-selection.png" width="80%" />
</figure>

!!! tip "Tip: Showing only selected output"
    The Interaction Panel can display specific output for a selected set of channels. For more information, refer to [Chat Output](#chat-output).

### Input Modes

Using the Interaction Panel, you can select three input modes by clicking on the corresponding tabs at the bottom of the interface: 

- [Chat](#chat)
- [Voice Call](#voice-call)
- [Live Follow](#live-follow)

#### Chat

When **Chat** is selected as the input mode, a Flow can be triggered by typing into the input field and pressing the Enter button on your keyboard or clicking the Send button.. Alternatively, the microphone button ![record-audio](../../../_assets/icons/record-audio.svg) to activate your device's microphone and record voice input.

Messages can include attached data. You can simulate this data input by adding a data payload in [JSON](https://www.json.org/json-en.html) format to the data input field. To activate the **Data Input** field, go to the Settings tab and enable the **Show data input** toggle. Any message data sent to Cognigy.AI is accessible via [CognigyScript](../../build/cognigy-script.md) using the expression `{{ " {{input.data}}" }}`.

In **Chat** mode, you can use additional settings:

    - **Reset Session** — the setting crears the chat history in the Interaction Panel. 
    - **Create Playbook** — the setting starts a new Playbook for testing conversations. For more information, read the [Playbooks](../../resources/test/playbooks.md) documentation.
    - **Create Playbook with Assertions** — thei setting starts a new Playbook with assertions for in-depth testing. For more information, read the [Playbook with Assertions](../../resources/test/playbooks.md#assertion) documentation.

#### Voice Call

[![Version badge](https://img.shields.io/badge/Beta-purple.svg)]({{config.site_url}})

!!! note "Feature availability"
    - If you use a SaaS Cognigy installation, contact the support team to activate this feature.
    - If you use an On-Premises Cognigy installation, activate this feature by adding `FEATURE_ENABLE_VOICECALL_WHITELIST`  in `values.yaml`. For example, `FEATURE_ENABLE_VOICECALL_WHITELIST:<organization-1-id>,<organization-2-id>`.

In **Voice Call** mode, the Interaction Panel lets you initiate a test call to hear how your voice AI Agent sounds.

Before starting a voice call, you need to configure a voice provider in the [Voice Preview Settings](../../test/voice-preview.md) of your Project. 

1. In your Flow, go to **Manage > Settings**.
2. Open the **Voice Preview Settings** section.
3. In the **Speech Provider** section, select the required Speech Provider you want to work with.
4. In the **Speech Connection** section, select the speech connection type the Provider offers. 
5. Click **Test Connection** to be sure that the speech connection is established. 

Based on the selected **Audio Provider**, the list of supported STT/TTS languages and voices will change. On the **Settings** tab, in the Voice Call section, you can select your preferred language and voice for your test call. 
After configuring the Audio Provider, language and voice, you can start the call by clicking the **Start Call** button.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-start-voice-call.png" width="60%" />
</figure>

During a call, you can do the following:

- **Monitor call duration**. The call timer displayed next to the End Call button shows you how long your call has been active.
- **Send DTMF tones**. Use the **Dialpad** to send touchtone (DTMF) signals during the call. These tones you hear when you click buttons on the **Dialpad** for entering codes or navigating menus within the call.
- **Follow the conversation**. View the real-time conversation transcript in the Interaction Panel to track the call.
- **Automatically end a call on timeout**. If you don't provide any voice input for a set period (timeout), the call will automatically end to prevent unnecessary connection time.

To see and analyze the payload of a recognized voice input, you click ![expand](../../../_assets/icons/expand.svg) indicated on the message fields.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-end-voice-call.png" width="100%" />
</figure>

#### Live Follow

In **Live Follow** mode, you can do the following:

- Observe conversations between AI Agents and users in real-time.
- Debug Flows only after setting up an Endpoint for the specific Flow.

To use and test this mode, follow these steps:

1. Go to **Test > Logs**.
2. On the **Logs** page, find `userId` in the `info Received message from user` log. If you do not see this log, navigate to the channel chat you created via the Endpoint, for example, Webchat, Teams, or Slack. Send a message to this chat, then go to the **Logs** page. To get `userId` for Demo Webchat, read the [Manually defining the user ID](../../../webchat/demo.md#manually-defining-the-user-id) documentation.
3. Copy `userId`.
4. Go to the Flow editor, and open the Interaction Panel.
5. At the bottom of the Interaction Panel, click ![live-follow](../../../_assets/icons/live-follow.svg).
6. Paste `userId` into the **User ID** field.
7. To start live following, click ![start-live-following](../../../_assets/icons/start-live-following.svg).

You can now view and track the user's real-time conversation from your Interaction Panel. To terminate live following, click **Stop Live Following**.

!!! note
    Human agent messages are not shown in the Live Follow mode.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-follow-user.png" width="80%" />
</figure>

#### Playbook

**Playbook** mode helps save time, catch errors, and provide clear details on how your AI agent performs. Playbooks serve as scripts that run through conversations to ensure the AI Agent responds correctly.

To run a Playbook within the **Playbook** mode, follow these steps:

1. At the bottom of the Interaction Panel, select the **Playbook** tab.
2. From the **Playbooks** list, select the Playbook you want to execute.
3. Click **Play**.

During execution, you can see if Playbook Step assertions passed or failed. Hovering over them will show more details in a tooltip.
For more information, read [Assertions](../../test/playbooks.md#assertion).For more information regarding assertions, read the [Playbooks](../../test/playbooks.md#assertion).

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-playbook.png" width="100%" />

</figure>

!!! tip "Tip: Configuring Playbook Execution"
	You can further configure the Playbook execution under the [Interaction Panel Playbook settings](#playbook).

## Info

The Info tab menu provides four sub-functions:

- [Input](#input-object)
- [State](#state)
- [Context](#context-object)
- [Profile](#profile-object)

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-info.png" width="100%" />
</figure>

### Input object

The Input object is updated with every user interaction and holds a lot of relevant information about the user's input, such as the Intents that were found, the channel that the message was sent through and other relevant meta-data. For more information, read the [Input](input.md) documentation. 
Cognigy objects have a different life span depending on their type. For more information , read the [Cognigy Objects Life Span](../../build/cognigy-script.md#cognigy-objects-life-span) documentation.

### State

**State** can be used to narrow the set of Intents that can be triggered by actively excluding certain Intents from a specific state. 

For more information, read the [State](state.md) documentation.

### Context object

**Context** serves as the short-term memory of the AI Agent, storing session-specific information, for example, selected products or the user's current location. Additionally, the Context holds API responses relevant to the particular session.
For more information, read the [Context](context.md) documentation.

### Profile object

**Profile** serves as the long-term memory of the system, storing user data such as names and emails alongside use case-specific information such as favorite colors.
For more information, read the [Profile](profile.md) documentation.

## Settings

To configure relevant settings for the Interaction Panel, click tab **Settings**. The following table gives you an overview of available settings. 

| Interaction Panel Settings        | Description                                                                                                                                                     |
|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **General**                       |                                                                                                                                                                 |
| NLU Connector                     | Selection list, default is the "Cognigy" NLU engine.                                                                                                            |
| Text to Speech                    | Reads out messages from the system.                                                                                                                             |
| Expert mode                       | Displays additional information about the Flow.                                                                                                                 |
| Channel selection                 | Selection list for Endpoint providers.                                                                                                                          |
| **Chat**                          |                                                                                                                                                                 |
| Show data input                   | Data display.                                                                                                                                                   |
| **Voice Call**                    |                                                                                                                                                                 |
| Language                          | Drop-down list with available languages.                                                                                                                        |
| Voice                             | Drop-down list with available female and male speakers.                                                                                                         |
| **Playbooks**                     |                                                                                                                                                                 |
| Repeat                            | Re-runs a Playbook after it finished executing.                                                                                                                 |
| Delay                             | Waits between Playbooks Steps - default setting is 200ms.                                                                                                       |
| **Advanced**                      |                                                                                                                                                                 |
| Auto-move Flow Editor             | Automatically switches and moves the Flow Editor based on the last executed Node.                                                                               |
| Auto-switch Target Flow Selection | Switches the target Flow automatically when another Flow is being opened in the Editor.<br> The target Flow will not auto-switch if there is an active session. |

### General

The Interaction Panel can be configured with a number of settings across different sections.

#### Chat Input

The **Chat Input** section allows you to enable 3rd-party NLU engines for use in your Interaction Panel. 
To install a new NLU engine in Cognigy.AI, go to **Build > NLU Connectors** and click **+ New NLU Connector**.

For more information how to manage NLU connectors, read the [NLU Connectors](../../empower/nlu/external/nlu-connectors.md) documentation.

#### Chat Output

In this section, you can configure the chat outputs in the Interaction Panel:

- [Text to Speech](#text-to-speech) - when the setting is active, messages from the system are read out.
- [Expert mode](#expert-mode) -  when the setting is active, additional information about the Flow execution is displayed.
- [Channel Select](#channel-select) - select channels to display from the drop-down menu.

##### Text to Speech

When the setting is enabled, an AI Agent will vocalize its responses using your browser's built-in Text-to-Speech (TTS) functionality.

##### Expert Mode

[![Version badge](https://img.shields.io/badge/Updated in-v4.47-blue.svg)](../../../release-notes/4.47.md)

If the **Expert Mode** setting is enabled, the Interaction Panel displays additional information about the Flow execution, including:

- Triggered [Intents](../../empower/nlu/intents/ml-intents.md) and their [score](../../empower/nlu/intents/intent-analyzer.md).
- Triggered [Yes/No Intents](../../empower/nlu/intents/yes-no-intents.md) and their [score](../../empower/nlu/intents/intent-analyzer.md).
- The name of the Flow that was triggered. 

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-chat-tab-expert-mode.png" width="80%" />

</figure>

##### Channel Select

The Interaction Panel lets you filter messages by channel, such as Webchat, Voice Gateway, Slack, and more.
The **Show all** option is selected by default, displaying outputs from all channels. You can change this option on the **Settings** tab.By default, outputs from all channels will be displayed, indicated by the **Show all** setting.

### Chat

The Chat section allows you to activate **Show data input** to enable the **Data Input** field for chat messages in the Interaction Panel.
When the setting is active, an additional input field appears below the standard text input field, allowing you to enter JSON data.  

Example:

A valid JSON input data could be `{"firstName": "Max", "lastName": "Müller"}`, which can be sent with or without a text message.

### Voice Call

[![Version badge](https://img.shields.io/badge/Beta-purple.svg)](../../../release-notes/index.md)

This section allows you to choose the language and voice for testing the voice calls from the Interaction Panel.

You can select two options for **Voice Call**:

- **Language**: You can select from multiple languages in a drop-down menu. 
The **Custom** option allows you to use a TTS language, which is not in the dropdown list. It defines the language of the virtual agent output. The format to use depends on the TTS Vendor, for example, de-DE, fr-FR, en-US.
 
- **Voice**: You can select a female or male speaker voice. 
The **Custom** option allows for choosing a TTS voice, which is not in the drop-down list. This setting can be the case for region-specific voices. The format to use depends on the TTS Vendor, for example, de-DE-ConradNeural.

### Playbooks

This section enables you to configure the Playbook executions in the Interaction Panel using two settings:

- **Repeat**: Enabling this feature will repeatedly execute the selected Playbook until you stop the execution manually. This function is helpful for example, when testing consistency in a use case with a Playbook that requires an automatic repeat of execution.     
- **Delay**: Time in milliseconds, to wait between each Playbook Step execution. Default setting is 200ms.

### Advanced

#### Auto-move Flow Editor

If the Auto-move Flow Editor setting is activated, the Flow Editor will automatically move and center the last executed Node based on the Interaction Panel outputs. If the last triggered Node belongs to a different Flow, the Flow will be opened automatically and the Node will be centered.
By default, the setting is enabled.

#### Auto-switch Target Flow Selection

When **Auto-switch Target Flow Selection** is enabled, the Flow selection in the Interaction Panel automatically switches to the Flow opened in the Flow Editor. 
By default, the setting is disabled.
The **Chat Input** section allows you to enable 3rd-party NLU engines for use in your Interaction Panel. 
Example: 
A project includes two Flows, Flow A and Flow B. The process starts according to Flow A and will reach a certain step, at which point Flow B begins processing.
Now active, Flow B is immediately displayed in the editor and the Interaction Panel automatically switches to Flow B as soon as it is opened in the Flow Editor. 

## More Information

- [Cognigy Script and Objects Life Span](../../build/cognigy-script.md#cognigy-objects-life-span)
- [Testing your Virtual Agents with Playbooks](https://support.cognigy.com/hc/en-us/articles/9585431937948-Best-Practices-Testing-your-Virtual-Agents-with-Playbooks#1-design-comprehensive-playbooks-0-0)
- [Voice Gateway Parameter Details](../../build/node-reference/voice/voice-gateway/parameter-details.md)