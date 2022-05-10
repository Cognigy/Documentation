---
 title: "Interaction Panel" 
 slug: "interaction-panel" 
 hidden: false 
---
# Interaction Panel

The Interaction Panel can be used to interact with your virtual agent. It can be accessed by clicking on the chat button at the top right of the interface when inside any Agent. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/8f8cdab-interaction.jpg" width="100%" />
</figure>

### Test
<div class="divider"></div>

#### Channel-Specific output

The Interaction Panel will preview channel-specific output in case this has been configured in output nodes like the Say-Node.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-channel-selection.png" width="100%" />
</figure>

???+ success "Tip: Showing only selected output"
    It is possible to only show specific output for a selected set of channels. This can be configured under the **[Interaction Panel settings]({{config.site_url}}ai/tools/interaction-panel/interaction-panel/#chat-output)**.

#### Input Modes
Clicking on the secondary button located at the buttom-left corner of the Interaction Panel, a menu opens up with the list of available input modes. Following are the three input modes in the Interaction Panel.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-input-modes.png" width="100%" />
</figure>

##### Chat
When **Chat** is selected as the input mode, the *Virtual Agent* can be triggered by typing into the input field and hitting the enter key (or pressing the send button). Alternatively, the microphone button can be pressed after which your device's microphone is started and voice input is registered. 

It is common for messages to be sent to Cognigy.AI with attached data. It is possible to simulate this data input by adding a data payload in [JSON](https://www.json.org/json-en.html) format to the data input field. The **Data Input** field can be activated by enabling the **Show data input** switch in the [**Interaction Panel settings**]({{config.site_url}}ai/tools/interaction-panel/interaction-panel/#settings). Any data sent to Cogngiy.AI with a message is accessible via [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) under ```{ {input.data} }```

##### Playbook
When **Playbook** input mode is selected, a select field appears with the list of Playbooks present in the Virtual Agent. Select a Playbook that you wish to execute, and click the *Play* button. During execution, one can see the information about the Playbook Step assertions that failed or passed. Hovering over the assertion results will provide you further details in a tooltip. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-playbook.png" width="100%" />
</figure>


???+ success "Tip: Configuring Playbook Execution"
	You can further configure the Playbook execution under the [**Interaction Panel Playbook settings**]({{config.site_url}}ai/tools/interaction-panel/interaction-panel/#playbooks).

##### Live Follow
By selecting **Live Follow** as the input mode, you will be able to follow the conversations of the user with the help of a User ID. In the input field, simply enter the ID of the user that you wish to follow and hit the enter key (or simple press *Start Live Following* button). From now on, you will be able to see and follow the live conversation of the user from your Interaction Panel. Click on *Stop Live Following* button if you don't want to follow the user anymore.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-follow-user.gif" width="100%" />
</figure>

### Info
<div class="divider"></div>
The Info tab exposes 4 sub-tabs - Input, State, Context and Profile.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/7983f68-interaction-info.jpg" width="100%" />
</figure>

#### Input object
The Input object is updated with every user input and holds a lot of relevant information about the user's input, like the **Intents** that were found, the **Channel** that the message was sent through and any other relevant meta-data. 

???+ info "Input object"
    Head over to [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/) for more information.

#### State
State can be used to narrow the set of **Intents** that can be triggered, by actively excluding certain Intents from a certain state. 

???+ info "State"
    Head over to [**State**]({{config.site_url}}ai/tools/interaction-panel/state/) to learn more. 

#### Context object

The **Context** can be seen as the short-term memory of the **Virtual Agent** and is used to store session-specific information, like selected products or the user's current location. It is the location where API responses are typically stored, as they are relevant to the particular session. 

???+ info "Context object"
    Head over to [**Context**]({{config.site_url}}ai/tools/interaction-panel/context/) for more information. 

#### Profile object
The **(Contact) Profile** acts as persistent - long term - memory and is used to store specific user data, like the user's name and email, as well as usecase specific information like e.g. the user's favorite color.

???+ info "Profile object"
    Head over to [**Profile**]({{config.site_url}}ai/tools/interaction-panel/profile/) for more information.
 
### Settings
<div class="divider"></div>
The Interaction Panel can be configured with a number of settings across different sections.

#### Chat Input
This section allows you to enable an alternative NLU engine for use in your Interaction Panel. It is possible to connecter 3rd-party NLU engines by navigating to the [**NLU Connectors**]({{config.site_url}}ai/resources/build/nlu-connectors/) page. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-setting-chat-input.png" width="100%" />
</figure>

#### Chat Output
This section lets you configure the chat outputs in the Interaction Panel.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-setting-chat-output.png" width="100%" />
</figure>

##### Text to Speech
If enabled, the Virtual Agent will speak to you through the browser's Text to Speech functionality.

##### Expert Mode
If enabled, the Interaction Panel will display additional information about the Flow execution, like intents that were triggered, intent score, name of the Flow that was triggered etc. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-chat-tab-expert-mode.png" width="100%" />
</figure>

##### Channel Select
We can also filter the messages in the Interaction panel by a specific channel. By default, outputs from all channels will be displayed.

#### Playbooks
This section lets you configure the Playbook executions in the Interaction Panel.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-setting-playbook.png" width="100%" />
</figure>

##### Repeat
Turning this feature on will repeat executing the selected playbook over and over again.

##### Delay
Time (in milliseconds) to wait between each playbook step execution.

#### General

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-setting-general.png" width="100%" />
</figure>

##### Auto-move Flow Editor
If turned on, based on the Interaction Panel outputs, the Flow Editor will automatically move and center the Flow node that was last executed. If the last triggered node belongs to a different Flow, other than the one that is currently open in the editor, then the Flow of the last triggered node will be opened automatically and the node will be centered.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-follow-flow-node.gif" width="100%" />
</figure>

???+ info "Note"
    Turning this setting on will automatically turn off and disable *Auto-switch Target Flow Selection* setting.

##### Auto-switch Target Flow Selection
When this setting is turned on, the Flow selection in the Interaction Panel automatically switches to the Flow openened in the Flow Editor. 


