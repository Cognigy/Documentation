---
title: "Interaction Panel" 
slug: "interaction-panel" 
hidden: false 
---

# Interaction Panel

The Interaction Panel can be used to interact with your virtual agent.
It can be accessed by clicking on the chat button at the top right of the interface when inside any Project. 

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction.jpg" width="100%" />
</figure>

## Test

!!! note
    **Chat** tab was renamed to **Test** from version 4.25.0.

### Channel-Specific output

The Interaction Panel will preview channel-specific output in case this has been configured in output nodes like the Say-Node.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-channel-selection.png" width="100%" />
</figure>

!!! tip "Tip: Showing only selected output"
    It is possible to only show specific output for a selected set of channels. This can be configured under the [Interaction Panel settings](#chat-output).

### Input Modes
Clicking on the secondary button located in the bottom-left corner of the Interaction Panel, a menu opens up with the list of available input modes. Following are the three input modes in the Interaction Panel.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-input-modes.png" width="100%" />
</figure>

!!! note
    Prior to version 4.25.0, **Input Mode** select was a part of the Interaction Panel settings tab.

#### Chat
When **Chat** is selected as the input mode,
the **virtual agent** can be triggered by typing into the input field and hitting the enter key
(or pressing the Send button).
Alternatively,
the microphone button can be pressed after which your device's microphone is started and voice input is registered. 

It is common for messages to be sent to Cognigy.AI with attached data. It is possible to simulate this data input by adding a data payload in [JSON](https://www.json.org/json-en.html) format to the data input field. The **Data Input** field can be activated by enabling the **Show data input** switch in the [Interaction Panel settings](input.md). Any data sent to Cognigy.AI with a message is accessible via [CognigyScript](../../build/cognigy-script.md) under `{{ " {{input.data}}" }}`

#### Voice Call

[![Version badge](https://img.shields.io/badge/Beta-purple.svg)](../../../release-notes/index.md)

!!! note "Feature availability"
    - If you use a SaaS Cognigy installation, contact the support team to activate this feature.
    - If you use an On-Premises Cognigy installation, activate this feature by adding `FEATURE_ENABLE_VOICECALL_WHITELIST`  in `values.yaml`. For example, `FEATURE_ENABLE_VOICECALL_WHITELIST:<organization-1-id>,<organization-2-id>`.

When **Voice Call** input mode is selected, you will be able to initiate a test voice call from the Interaction Panel and understand how the voice agent would sound like.

Before starting a voice call, you need to configure an **Audio Provider** on the Project Settings page. 

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/agent-settings-audio-provider-settings.png" width="100%" />
</figure>

Based on the selected **Audio Provider**, the list of supported STT/TTS languages and voices will change. You can choose your preferred language and voice for your test call from the [Voice Call](#voice-call) section of the Settings tab in the Interaction Panel. 

After configuring the Audio Provider, language and voice, you can start the call by simply clicking the **Start Call** button.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-start-voice-call.png" width="60%" />
</figure>

When the call is ongoing, you will be able to see how long the call is currently active with the help of the call timer below the **End Call** button. In addition, DTMF tones can also be inserted during the call using the **Dialpad**. You will also be able to see the conversation and follow the test voice call.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-end-voice-call.png" width="100%" />
</figure>

#### Live Follow

The **Live Follow** input mode helps observe a conversation between a virtual agent and a user in real time.
You can debug a Flow when you have already set up an Endpoint for this Flow.

To use and test this mode, follow these steps:

1. Go to **Test > Logs**.
2. On the **Logs** page, find `userId` in the `info Received message from user` log. If you do not see this log, navigate to the channel chat you created via the Endpoint (such as Webchat, Teams, or Slack). Send a message to this chat, then go to the **Logs** page. To get `userId` for Cognigy Demo Webchat, read [Manually defining the user ID](../../../webchat/demo.md).
3. Copy `userId`.
4. Go to the Flow editor, and open the Interaction panel.
5. At the bottom of the Interaction panel, click ![live-follow](../../../_assets/icons/live-follow.svg).
6. Paste `userId` into the **User ID** field.
7. To start live following, click ![start-live-following](../../../_assets/icons/start-live-following.svg).

Now you can view and track the user's real-time conversation from your Interaction Panel. To terminate live following, click **Stop Live Following**.

!!! note
    Human agent messages are not shown in the Live Follow mode.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-follow-user.gif" width="80%" />
</figure>

#### Playbook
When **Playbook** input mode is selected, a select field appears with the list of Playbooks present in the virtual agent. Select a Playbook that you wish to execute, and click the **Play** button. During execution, one can see the information about the Playbook Step assertions that failed or passed. Hovering over the assertion results will provide you further details in a tooltip. 

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-playbook.png" width="100%" />
</figure>


!!! tip "Tip: Configuring Playbook Execution"
	You can further configure the Playbook execution under the [Interaction Panel Playbook settings](#playbooks).

## Info

The Info tab exposes 4 sub-tabs - Input, State, Context and Profile.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-info.jpg" width="100%" />
</figure>

### Input object
The Input object is updated with every user input and holds a lot of relevant information about the user's input, like the **Intents** that were found, the **Channel** that the message was sent through and any other relevant meta-data. 

!!! note "Input object"
    Head over to [Input](input.md) for more information.

### State
State can be used to narrow the set of **Intents** that can be triggered by actively excluding certain Intents from a certain state. 

!!! note "State"
    Head over to [State](state.md) to learn more. 

### Context object

The **Context** can be seen as the short-term memory of the **virtual agent** and is used to store session-specific information, like selected products or the user's current location. It is the location where API responses are typically stored, as they are relevant to the particular session. 

!!! note "Context object"
    Head over to [Context](context.md) for more information. 

### Profile object
The **(Contact) Profile** acts as persistent - long term - memory and is used to store specific user data, like the user's name and email, as well as use case specific information like for example,example, the user's favorite color.

!!! note "Profile object"
    Head over to [Profile](profile.md) for more information.
 
## Settings

The Interaction Panel can be configured with a number of settings across different sections.

### Chat Input
This section allows you to enable an alternative NLU engine for use in your Interaction Panel. It is possible to connector 3rd-party NLU engines by navigating to the [NLU Connectors](../../empower/nlu/external/nlu-connectors.md) page. 

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-setting-chat-input.png" width="100%" />
</figure>

### Chat Output
This section lets you configure the chat outputs in the Interaction Panel.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-setting-chat-output.png" width="100%" />
</figure>

#### Text to Speech
If enabled, the virtual agent will speak to you through the browser's Text to Speech functionality.

#### Expert Mode

[![Version badge](https://img.shields.io/badge/Updated in-v4.47-blue.svg)](../../../release-notes/4.47.md)

If enabled, the Interaction Panel will display additional information about the Flow execution:

- Triggered [Intents](../../empower/nlu/intents/ml-intents.md) and their score.
- Triggered [Yes/No Intents](../../empower/nlu/intents/yes-no-intents.md) and their score.
- The name of the Flow that was triggered. 

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-chat-tab-expert-mode.png" width="80%" />
</figure>

#### Channel Select
We can also filter the messages in the Interaction panel by a specific channel. By default, outputs from all channels will be displayed.

### Voice Call

[![Version badge](https://img.shields.io/badge/Beta-purple.svg)](../../../release-notes/index.md)

This section allows you to choose the language and voice for testing the voice calls from the Interaction Panel.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-voice-settings.png" width="100%" />
</figure>

### Playbooks
This section lets you configure the Playbook executions in the Interaction Panel.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-setting-playbook.png" width="100%" />
</figure>

#### Repeat
Turning this feature on will repeat executing the selected Playbook over and over again.

#### Delay
Time (in milliseconds) to wait between each Playbook Step execution.

### General

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-setting-general.png" width="100%" />
</figure>

#### Auto-move Flow Editor

If turned on, based on the Interaction Panel outputs, the Flow Editor will automatically move and center the Flow node that was last executed. If the last triggered node belongs to a different Flow, other than the one that is currently open in the editor, then the Flow of the last triggered node will be opened automatically, and the node will be centered.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-follow-flow-node.gif" width="100%" />
</figure>

!!! note
    Turning this setting on will automatically turn off and disable the **Auto-switch Target Flow Selection** setting.

#### Auto-switch Target Flow Selection

When this setting is turned on, the Flow selection in the Interaction Panel automatically switches to the Flow opened in the Flow Editor. 

### Input

Under this section,
you can turn on **Show data input** toggle to enable the **Data Input** field for Chat input mode in the Interaction Panel.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-setting-input.png" width="100%" />
</figure>