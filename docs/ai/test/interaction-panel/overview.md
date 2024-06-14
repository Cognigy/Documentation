---
title: "Interaction Panel" 
slug: "interaction-panel" 
hidden: false 
---

# Interaction Panel

The **Interaction Panel** provides an intuitive user interface to interact with your virtual agent. The Panel enables you to test and analyze the behavior of your virtual agent, allowing you to easily modify and improve the Agents communication and service skills. <br>
To open the Interaction Panel click ![chat-menu](../../../assets/icons/chat-menu.svg) in the toolbar at the top right of the Cognigy.AI interface. 
The Interaction Panel is available from any page in Cognigy.AI, ensuring quick and convenient access to your Agent at all times.

## Project related Settings

The Interaction Panel can be configured with a number of settings.

Before using the Interaction Panel for test purposes, you should check and configure the following options:

- [Snapshot](#snapshot)
- [Locale](#locale)
- [Flow selection](#flow-select)

### Snapshot

Snapshots are immutable forms of your virtual agent, including the required resources. Using **Snapshots** you can test your Agent configuration in your Interaction Panel as follows:

1. Click ![expand 2](../../../assets/icons/expand_2.svg) to open a list of the available Snapshots.
2. Select the Snapshot you want to test. 

For more information, read the [Snapshots](../../resources/deploy/snapshots.md) documentation.

### Locale

After creating multiple locales in your flow, you can select a preferred language as follows: 

1. Click ![expand 2](../../../assets/icons/expand_2.svg) to open a list of the available locales.
2. Select the Locale you want to use. 

Then, in a **Test** conversation, the bot will reply in the language you previously prepared in the [locale settings](../../resources/build/flows.md#locale-settings) of your Flow.

### Flow Select 

When you have created more than one Flow you can select the Flow you want to test as follows: 

1. Click ![expand 2](../../../assets/icons/expand_2.svg) to open a list of the available Flows.
2. Select the Flow you want to test. 

## Test

The [Test](../../resources/test/test.md) feature enables you to test your Agent using different channels. 

### Channel-Specific output

If configured, the Interaction Panel will preview channel-specific output in an output node like the Say-Node.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-channel-selection.png" width="80%" />
</figure>

!!! tip "Tip: Showing only selected output"
    It is possible to only show specific output for a selected set of channels. This can be configured under the [Interaction Panel settings](interaction-panel/#chat-output).

### Input Modes

Using the Interaction Panel you can select three input modes by clicking on the corresponding tabs at the bottom of the interface: 

- [Chat](#chat)
- [Voice Call](#voice-call)
- [Live Follow](#live-follow)

#### Chat

When **Chat** is selected as the input mode, the **Virtual Agent** can be triggered by typing into the input field and hitting the enter key (or pressing the send button). Alternatively, the microphone button ![record-audio](../../../assets/icons/record-audio.svg) can be pressed after which your device's microphone is activated and voice input is registered. 

Messages often come with attached data when sent to Cognigy.AI. It is possible to simulate this data input by adding a data payload in [JSON](https://www.json.org/json-en.html) format to the data input field. The **Data Input** field can be activated by enabling the **Show data input** switch in the [Interaction Panel settings](input.md). Any data sent to Cognigy.AI containing a message is accessible via [CognigyScript](../cognigy-script.md) under `{{ " {{input.data}}" }}`

When **Chat** mode is selected you can choose between following options after clicking the ![vertical ellipsis](../../../assets/icons/vertical-ellipsis.svg) at the top right side of the interface, next to the Flow select field:

   - Reset Session - will clean up the chat history in the Interaction Panel. 
   - Create Playbook - for more information, read the [Playbooks](../../resources/test/playbooks.md) documentation.
   - Create Playbook with Assertions - for more information, read the [Playbook with Assertions](../../resources/test/playbooks.md#assertion) documentation.

#### Voice Call

[![Version badge](https://img.shields.io/badge/Beta-purple.svg)]({{config.site_url}})

!!! info "Feature availability"
    - If you use a SaaS Cognigy installation, contact the support team to activate this feature.
    - If you use an On-Premises Cognigy installation, activate this feature by adding `FEATURE_ENABLE_VOICECALL_WHITELIST`  in `values.yaml`. For example, `FEATURE_ENABLE_VOICECALL_WHITELIST:<organization-1-id>,<organization-2-id>`.

When **Voice Call** input mode is selected, you can initiate a test voice call from the Interaction Panel and simulate how the voice bot sounds.

Before starting a voice call, you need to configure an **Audio Provider** in the [Voice Preview Settings](../../tools/voice-preview.md) of your Agent. 

1. In your Flow, go to **Manage > Settings**.
2. Open the **Voice Preview Settings** section.
3. In the **Speech Provider** section, select the required Speech Provider you want to work with.
4. In the **Speech Connection** section, select the speech connection type the Provider offers. 
5. Click **Test Connection** to be sure that the speech connection is established. 

Based on the selected **Audio Provider**, the list of supported STT/TTS languages and voices will change. You can choose your preferred language and voice for your test call from the [Voice Call](interaction-panel.md#voice-call) section in the Interaction Panel **Settings**. 

After configuring the Audio Provider, language and voice, you can start the call by clicking the **Start Call** button.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-start-voice-call.png" width="60%" />
</figure>

While the call is ongoing, you can see the current duration of the active call, with the help of the call timer below the **End Call** button. In addition,  DTMF (Dual Tone Multi-Frequency) tones can also be inserted during the call using the **Dialpad**. You will also be able to see the conversation and follow the test voice call. If no voice input is received from the user, a timeout will be reached and the voice call is terminated.

To see and analyze the payload of a recognized voice input, you can click ![expand](../../../assets/icons/expand.svg) indicated on the message fields.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-end-voice-call.png" width="100%" />
</figure>

#### Live Follow

The **Live Follow** input mode helps observe a conversation between a virtual agent and a user in real time.
You can debug a Flow when you have already set up an Endpoint for this Flow.

To use and test this mode, follow these steps:

1. Go to **Test > Logs**.
2. On the **Logs** page, find `userId` in the `info Received message from user` log. If you do not see this log, navigate to the channel chat you created via the Endpoint, for example Webchat,Teams, or Slack. Send a message to this chat, then go the **Logs** page. To get `userId` for Cognigy Demo Webchat, read the [Manually defining the user ID](../../endpoints/webchat/integrated-demo-page.md#description) documentation.
3. Copy `userId`.
4. Go to the Flow editor, and open the Interaction Panel.
5. At the bottom of the Interaction Panel, click ![live-follow](../../../assets/icons/live-follow.svg).
6. Paste `userId` into the **User ID** field.
7. To start live following, click ![start-live-following](../../../assets/icons/start-live-following.svg).

You can now view and track the user's real-time conversation from your Interaction Panel. To terminate live following, click **Stop Live Following**.

!!! note
    Human agent messages are not shown in the Live Follow mode.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-follow-user.gif" width="80%" />
</figure>

#### Playbook

When **Playbook** input mode is selected, a field appears providing the list of Playbooks available in the Virtual Agent.

1. Click ![expand 2](../../../assets/icons/expand_2.svg) in the Playbook select field at the bottom.
2. Select a Playbook that you want to execute, and click the **Play** button.

During execution, you can view information on the Playbook Step assertions that failed or passed. Hovering over the assertions results will provide you with further details via a tooltip. 
For more information regarding assertions, read the [Playbooks](../../resources/test/playbooks.md#assertion).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-playbook.png" width="80%" />
</figure>

!!! tip "Tip: Configuring Playbook Execution"
	You can further configure the Playbook execution under the [Interaction Panel Playbook settings](interaction-panel.md#playbooks).

## Info

The Info tab menu provides four sub-functions:

- Input - [Input Object](#input-object)
- State - [State](#state)
- Context - [Context](#context-object)
- Profile - [Profile](#profile-object)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-info.png" width="100%" />
</figure>

### Input object

The Input object is updated with every user interaction and holds a lot of relevant information about the user's input, such as the **Intents** that were found, the **Channel** that the message was sent through and any other relevant meta-data. 
For more information, read the [Input](input.md) documentation. 
Cognigy objects have a different life span depending on their type. For more information , read the [Cognigy Objects Life Span](../../tools/cognigy-script.md#cognigy-objects-life-span) documentation.

### State

State can be used to narrow the set of **Intents** that can be triggered by actively excluding certain Intents from a specific state. 

For more information, read the [State](state.md) documentation.

### Context object

The **Context** acts as the short-term memory of the **Virtual Agent** and is used to store session-specific information, such as selected products or the user's current location. It is also the location where API responses are typically stored, as they are relevant to the particular session. 

For more information, read the [Context](context.md) documentation.

### Profile object

The **(Contact) Profile** acts as persistent - long term - memory and is used to store specific user data, like the user's name and email, as well as use case specific information, for example the user's favorite color.

For more information, read the [Profile](profile.md) documentation.

## Settings

To configure relevant settings for the Interaction Panel, click tab **Settings**. The following table gives you an overview of available settings. 

| Interaction Panel Settings                       | Description                                               |
|--------------------------------------------------|-----------------------------------------------------------|
| **General**                                      |                                                           |
| NLU Connector                                    | Selection list, default is the "Cognigy" NLU engine.      |
| Text to Speech                                   | Reads out messages from the system.                       |
| Expert mode                                      | Displays additional information about the Flow.           |
| Channel selection                                | Selection list for Endpoint providers.                    |
| **Chat**                                         |                                                           |
| Show data input                                  | Data display.                                             |
| **Voice Call**                                   |                                                           |
| Language                                         | Drop-down list with available languages.                  |
| Voice                                            | Drop-down list with available female and male speakers.   |
| **Playbooks**                                    |                                                           |
| Repeat                                           | Re-runs a Playbook after it finished executing.           |
| Delay                                            | Waits between Playbooks Steps - default setting is 200ms. |
| **Advanced**                                     |                                                           |
| Auto-move Flow Editor                            | Automatically switches and moves the Flow Editor based on the last executed Node.|
| Auto-switch Target Flow Selection                | Switches the target Flow automatically when another Flow is being opened in the Editor.<br> The target Flow will not auto-switch if there is an active session. |

### General

The Interaction Panel can be configured with a number of settings across different sections.

#### Chat Input

This section allows you to enable 3rd-party NLU engines for use in your Interaction Panel. 
To install a new NLU engine in Cognigy.AI, go to **Build > NLU Connectors** and click **+ New NLU Connector**.

For more information how to manage NLU connectors, read the [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/) documentation.

#### Chat Output

In this section, you can configure the chat outputs in your Interaction Panel.

- [Text to Speech](#text-to-speech) - When active, messages from the system are read out.
- [Expert mode](#expert-mode) - When active, additional information about the Flow execution is displayed.
- [Channel Select](#channel-select) - Drop-down menu to select the channels to display.

##### Text to Speech

If enabled, the virtual agent will speak to you using the browser's Text-to-Speech functionality.

##### Expert Mode

[![Version badge](https://img.shields.io/badge/Updated in-v4.47-blue.svg)](../../../release-notes/4.47.md)

If enabled, the Interaction Panel will display additional information about the Flow execution as:

- Triggered [Intents](../../nlu/nlu-overview/ml-intents.md) and their [score](../../nlu/nlu-overview/intent-analyzer.md).
- Triggered [Yes/No Intents](../../nlu/nlu-overview/yes-no-intents.md) and their [score](../../nlu/nlu-overview/intent-analyzer.md).
- The name of the Flow that was triggered. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-chat-tab-expert-mode.png" width="80%" />
</figure>

##### Channel Select

You can filter the messages in the Interaction Panel by a specific channel, such as the **Webchat** or **VoiceGateway** channel.
By default, outputs from all channels will be displayed, indicated by the **Show all** setting.

### Chat

This section allows you to activate **Show data input** to enable the **Data Input** field for the Chat input mode in the Interaction Panel.
When active, an additional input field appears below the standard text input field, allowing you to enter JSON data.  

Example:
A valid JSON input data could be, `{"firstName": "Max", "lastName": "Müller"}`, which can be sent with or without a text message.

### Voice Call

[![Version badge](https://img.shields.io/badge/Beta-purple.svg)]({{config.site_url}})

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

If activated, based on the Interaction Panel outputs, the Flow Editor will automatically move and center the Flow node that was last executed. If the last triggered node belongs to a different Flow, other than the one that is currently open in the editor, the Flow of the last triggered node will be opened automatically and the node will be centered.
Default setting is **enabled**.

#### Auto-switch Target Flow Selection

When **Auto-switch Target Flow Selection** is enabled, the Flow selection in the Interaction Panel automatically switches to the Flow opened in the Flow Editor. 
Default setting is **disabled**.

Example: 
A project includes two Flows, Flow A and Flow B. The process starts according to Flow A and will reach a certain step, at which point Flow B begins processing.
Now active, Flow B is immediately displayed in the editor and the Interaction Panel automatically switches to Flow B as soon as it is opened in the Flow Editor. 

## More Information

- [Cognigy Script and Objects Life Span](../../tools/cognigy-script.md#cognigy-objects-life-span)
- [Testing your Virtual Agents with Playbooks](https://support.cognigy.com/hc/en-us/articles/9585431937948-Best-Practices-Testing-your-Virtual-Agents-with-Playbooks#1-design-comprehensive-playbooks-0-0)
- [Voice Gateway Parameter Details](../../flow-nodes/vg/parameter-details.md)