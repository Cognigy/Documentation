# Interaction Panel

The Interaction Panel can be used to interact with your virtual agent. It can be accessed by clicking on the chat button at the top right of the interface when inside any Agent. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/8f8cdab-interaction.jpg" width="100%" />
</figure>

### Channel-specific output
<div class="divider"></div>

The Interaction Panel will preview channel-specific output in case this has been configured in output nodes like the Say-Node.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/ab54a96-interactionpanel-screenshot.jpg" width="100%" />
</figure>

???+ success "Tip: Showing only selected output"
    It is possible to only show specific output for a selected set of channels. This can be configured under the **[Interaction Panel settings]({{config.site_url}}ai/tools/interaction-panel/interaction-panel#chat-output/)**.

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

### Input Field
<div class="divider"></div>

The **Virtual Agent** can be triggered by typing into the input field and hitting the enter key (or pressing the send button). Alternatively, the microphone button can be pressed after which your device's microphone is started and voice input is registered. 

#### Data Input
It is common for messages to be sent to Cognigy.AI with attached data. It is possible to simulate this data input by adding a data payload in [JSON](https://www.json.org/json-en.html) format to the data input field. This field can be activated by enabling the **Show data input** switch in the [**Interaction Panel settings**]({{config.site_url}}ai/tools/interaction-panel/interaction-panel#settings/). Any data sent to Cogngiy.AI with a message is accessible via [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) under ```{ {input.data} }```
 
### Settings
<div class="divider"></div>
The Interaction Panel can be configured with a number of settings across different sections.

#### Chat Input
This section allows you to enable an alternative NLU engine for use in your Interaction Panel. It is possible to connecter 3rd-party NLU engines by navigating to the [**NLU Connectors**]({{config.site_url}}ai/resources/build/nlu-connectors/) page. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/7f829ba-interaction-settings-nlu.jpg" width="100%" />
</figure>

#### Chat Output
This section lets you enable **Text to Speech** in the Interaction Panel output. If enabled, the Virtual Agent will speak to you through the browser's Text to Speech functionality.

