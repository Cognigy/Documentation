---
 title: "Flows" 
 slug: "flows" 
 hidden: false 
---
# Flows 

**Flows** are an important concept within Cognigy.AI. They provide a visual representation of a potential dialog based on a **Flow** in a user-friendly interface. Virtual Agent projects in Cognigy.AI are realized by creating Flows.   
Flows are build as a composition of individual Nodes with different functionalities, ranging from generating output to collecting back-end information, and are executed as soon as an [Input]({{config.site_url}}ai/tools/interaction-panel/input/) object comes in through an [Endpoint]({{config.site_url}}ai/resources/deploy/endpoints/).

Elements of Flows:

- [Flow Chart](#flow-chart)
- [Agent Toolbar](#agent-toolbar)
- [Flow Nodes](#flow-nodes)
- [NLU](#nlu)
- [Settings](#settings)
- [Localization](#locale-settings)

## Flow Chart

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Flow-example_100.png" width="100%" />
</figure>

A Flow is represented visually with the help of a Flow chart, in which each step in a potential dialog are represented by Flow Nodes. Cognigy provides a wide range of different [Flow Nodes]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/). To realize your project, you can add Flow Nodes that offer the required functionality for your project. 
Flows are executed from a **Start** Node to an **End** Node in a conversation and use a logic-based system to determine which Nodes should be executed. The execution path of a conversation is indicated by a highlighted green path, so that you can understand logical system decisions at any step and follow the path. 

### Agent Management

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/agent-controls.png" width="80%" />
</figure>

In the top left corner of the Flow panel you will find the Agent specific indications as currently selected Agent, currently selected Flow-project, and currently selected Locale. 

- To open the [Agents dashboard](../../../ai/resources/agents/agents.md#agent-dashboard), click the icon on the left side  next to the displayed agent Flow-project. The dasboard gives you specific information regarding your projects, involved project members, and an analytic chart. 
- To switch to another available Agent, click on the current displayed Agent name and select the Agent you want to switch to in a drop-down list. 
- To change the [Locale](#locale-settings), click on the current displayed location name on the right side next to the Flow-project and select the location you want to switch to.

For more information, read the [Agent](../../../ai/resources/agents/agents.md#top-toolbar) documentation.

### Agent Toolbar

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar.png" width="80%" />
</figure>

Agents' desktops have a toolbar at the top right of each view, which provide quick access to agent-specific resources:

  - [Help Center Search](https://support.cognigy.com/hc/en-us)
  - [Journeys](../../../ai/resources/agents/journeys.md)
  - [Search](../../../ai/resources/agents/agents.md#search)
  - [Tasks](../../../ai/resources/agents/tasks.md)
  - [User Menu](../../../ai/tools/user-menu/user-menu.md)
  - [Interaction Panel](../../../ai/tools/interaction-panel/interaction-panel.md)    

The toolbar also includes items, such as the User Menu and Interaction Panel, that are consistently available. The **Interaction Panel** is quite important as it enables, among other things, the testing of flow functionality during development - see section [Execute a Flow](#execute-a-flow).
The Toolbar provides also tooltips to enhance navigation when hovering over an item.

For detailed information to each item, read the [Agent](../../../ai/resources/agents/agents.md#top-toolbar) documentation.

### Chart Controls

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/chart-controls.png" width="80%" />
</figure>

When you create a Flow, the Chart panel provides several controls in the bottom left side: 

| Control item                                                       | Description          |
|  ---                                                               | ----                 |
| zoom controls                                                      |  - zoom out / + zoom in: displayed size is related to 100% standard size|
| ![flow-centralize](../../../assets/icons/flow-centralize.svg)      | The Flow chart will be moved on the screen and located in the way that the chart fits best to the available panel size.  |
| ![magnifying-glass](../../../assets/icons/magnifying-glass.svg)    | Search: You can search for Nodes in the Flow | 
| ![voice-preview](../../../assets/icons/voice-preview.svg)          | The [Voice Preview](../../../ai/tools/voice-preview.md) feature allows you to test how voice output sounds without executing the whole flow with a mock call.|
| ![arrow-back](../../../assets/icons/arrow-back.svg)                | You can Undo the last step(s) by going backward in history: Update Chart Node. |
| ![arrow-forward](../../../assets/icons/arrow-forward.svg)          | You can Redo the last step(s) by going forward in history: Update Chart Node. |


### Create a Flow

!!! tip "How to create a new Flow"
    To build your first Flow, go to [Design a Flow and add a Message](https://support.cognigy.com/hc/en-us/articles/360014524180-Design-a-Flow-and-add-a-Message) in the Cognigy Help Center.

You can create two kinds of Flows:

   - Flow without using Generative AI
   - Flow using Generative AI

#### Create Flow without using Generative AI

When creating a new Agent in Cognigy.AI you do not need to enable the Generative AI option. You can also enable / disable the Generative AI option at any time for an existing Agent. When you consider that difference you can follow the Flow creation instruction in the following section.  


#### Create Flow using Generative AI

The most sophisticated way to create a Flow for your Virtual [Agent](https://docs.cognigy.com/ai/resources/agents/agents/) is to use Generative AI. 

{! _includes/ai/generative-ai/generate-flows.md !}

Generative AI is a type of artificial intelligence that creates new, original content, such as images, video, audio, and text, using machine learning algorithms. It works by learning from existing data and producing new content based on that learning.
Cognigy.AI integrates with the Generative AI providers that allow text generation based on user input. That involves utilizing [Large Language Models (LLMs)](../../../ai/resources/build/llm.md) to analyze data and generate contextually relevant and personalized content.
**Large Language Models (LLMs)** are a specific type of Generative AI model that is able to generate human-like text based on the input and context provided. In the Cognigy.AI interface, LLMs generate human-like and personalized content for a Virtual Agent.

To use Generative AI with LLM model in your project, following prerequisits are required:

- Creating a [Large Language Model (LLM)](../../../ai/resources/build/llm.md). 
- Access to a Generative AI provider.

To use Generative AI technology for creating a new Flow with pre-configured Nodes based on your scenario, read the [Generative AI](../../generative-ai.md#generate-flows) documentation.

### Execute a Flow

For testing issues the [Top Toolbar](../../../ai/resources/agents/agents.md#top-toolbar) on the top right side of Cognigy.AI interface provides the [Interaction panel](../../../ai/tools/interaction-panel/interaction-panel.md). Using the **Interaction Panel** you can chat at any time with your Virtual Agent during the project development in order to evaluate the Flow functionality. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Flow-example_Interaction-Panel_executed.png" width="100%" />
</figure>

To start a chat with your Virtual Agent and test the Flow functionality, do the following:

1. Open your agent project in Cognigy.AI. 
2. Select the Flow you want to test.
3. Click  ![chat](../../../assets/icons/chat.svg) on the top right toolbar to open the **Interaction Panel**. The Interaction Panel will be opened on the right side of the panel.
4. Click tab **TEST** to open the conversation window of the Interaction Panel.  
5. In the **Text Message** field enter a message and press **ENTER** or click ![send-message](../../../assets/icons/send-message.svg) next to the field. The message you send is an input on behalf of a potential user and initiates a conversation with your Virtual Agent, who will reply to your input according to the created Flow. The conversation will be displayed on the Interaction Panel screen. 

When interacting with the Agent in a potential user conversation you can check the Flow construction, if it fits your intended task properties. The execution path of your conversation is indicated by a highlighted green path in your Flow Chart so that you can understand the logical system decisions at any step and follow the path. 

### Flow Actions

To manage Flows in different use cases for your Agent, do the following:

1. Open Cognigy.AI and select the Virtual Agent on the left side of the UI. 
2. Go to **Build** > **Flows** to see your available Flows for the selected Agent.
3. Click ![vertical ellipsis](../../../assets/icons/vertical-ellipsis.svg) on the right side next to the Flow you want to delete. A selection menu appears.
4. Select one of the following options, depending on the intended action you need:

     - **Edit** - You can change the name and the description for the selected Flow.
     - **Delete** - when selected you are prompted to confirm the deletion of the selected Flow.  
     - **Copy Reference ID** - Every item in Cognigy.AI has a unique ID. Depending on the task you need to copy the Reference ID. For example, you want to realize [API calls](../../../ai/developer-guides/using-api.md) in a multiple Flows environment. In that case you need to specify the reference ID for every Flow to use the API in that Flow.    
     - **Export as Package** - [Packages](../../../ai/resources/manage/packages.md) allow the export and import of individual resources, such as Flows or Lexicons, for the purpose of sharing these assets with other teams. 
     - **Clone** - A Clone will be created, indicated by a red dot and an increasing clone number. You have two more options for Clones: 
          1. **Build Model** [^1]
          2. **Quick Build** [^1] 

[^1]: Clone options **Build Model** and **Quick Build** currently not in production.

### Flow Nodes

**Flow Nodes** can be used to add interactivity to a Flow. They can be added by clicking on the **+** icon in between two existing Nodes. Depending on the function Cognigy.AI provides many types of Nodes, ranging from **Basic Nodes** to **Advanced Nodes**. 

The different Nodes are assigned to the following categories:

  - Basic Nodes
  - Message Nodes
  - Logic Nodes
  - Profile Nodes
  - Service Nodes
  - NLU Nodes

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Node-Create-Menu.png" width="80%" />
</figure>

For more information, read the [Flow Nodes](../../../ai/flow-nodes/flow-nodes-overview.md) documentation.

#### Add a Node to your Flow 

To add a Node to your Flow, do the following:

1. Open your Agent project in Cognigy.AI. 
2. Select the Flow you want to edit.
3. Click  + visible on the path between the Nodes in order to add a new Node, for example a **Say** Node which is the most basic output Node. A window appears and provides available Nodes to add.
4. Select tabs **By Function** > **Basic**. 
5. Click **Say** in the selection list. A Say Node will be added at the location you clicked the + icon in your Flow.
6. Configure your added Node as required for your project. Detailed information to Nodes and how to configure them, read the  
[Flow Nodes](../../../ai/flow-nodes/flow-nodes-overview.md) documentation.

### Entry Points

Flow execution typically starts at the top with the green **Start Node**. This is where the [NLU](../../../ai/nlu/nlu-overview/overview.md) takes place and the NLU results are subsequently published to the [Input](../../../ai/tools/interaction-panel/input.md) object.  A flow is triggered with each new input and starts at the **Start Node** unless specified differently.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/start-node.png" width="80%" />
</figure>

The **Entry Point** can change depending on the state of the conversation. It is indicated by a green triangle, next to a particular flow and shows where the next [Input](../../../ai/tools/interaction-panel/input.md)  object (user input) would enter the flow. In case a Question Node has been triggered, the entry point will shift to that particular Node as can be seen in the following screenshot.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/question-node_entry-point_moved.png" width="80%" />
</figure>

In some cases there are **multiple Entry Points.** This can be the case if an Optional Question was triggered or if a given **Intent Entrypoint** has been set explicitly.

To set or unset an Entry point in your Flow explicitly, do the following:

1. Open the Flow you want to edit in Cognigy.AI.
2. Go to the Node where you want to set the Entry point explicitly, for example, a Say Node in a loop to be passed several times to avoid going back to the Start Node when it is not necessary for the task completion.
3. Right-click on the Node. A drop-down menu appears. 
4. Select one of the following options:
     - **Set Entrypoint**. A green triangle icon next to the Node appears and indicates that the Entrypoint has been set at that step.
     - **Unset Entrypoint**. Disables  a previous set Entrypoint at that step.  

## NLU 

**Natural Language Understanding** is at the core of advanced virtual agents. Cognigy.AI features an industry-leading NLU engine called Cognigy NLU.
In addition to the visual **Chart**, Flows also contain a tab named **NLU**. This section leads to the **Natural Language Understanding** that is relevant to the current Flow.

For more information, read the [NLU](../../../ai/nlu/nlu-overview/overview.md) documentation.

When you click the **NLU** tab at the top of your Flow, the following configuration tabs will appear:

  - [Intents](#intents) 
  - [Attached Flows](#attached-flows)
  - [Attached Lexicons](#attached-lexicons)
  - [States](#states)
  - [Slot Fillers](#slot-fillers)

For more information, read the [NLU](../../../ai/nlu/nlu-overview/overview.md) documentation.

### Intents

Intent Mapping is at the core of the NLU engine and the process uses machine learning to match the user's utterance to the defined intents.
Intents can be created right within the Intents section of the NLU tab and can be fed with training data in the form of example sentences.

For more information, read the [Machine learning Intents](../../../ai/nlu/nlu-overview/ml-intents.md) documentation.
To learn how to use Intents, see also [Cognigy Sessions:Cognigy NLU](https://support.cognigy.com/hc/en-us/articles/360019857220-Cognigy-Sessions-Cognigy-NLU) video in the Cognigy.AI Help Center.

### Attached Flows

Whenever a Flow with Intents is attached to another Flow, the Intents in that [Attached Flow](../../../ai/nlu/nlu-overview/overview/#attached-flows.md) will be considered when training the NLU model. That is a practical way of combining different Intent collections into a bigger model.

### Attached Lexicons

Lexicons need to be attached to a Flow in order for a Flow to be able to detect its Keyphrases. Make sure to retrain the model whenever you attach or detach resources.
More information, read the [Attached Lexicons](../../../ai/nlu/nlu-overview/overview/#attached-lexicons.md) documentation.

### States

**States** can be used to deliberately block certain Intents. This can help with edge-cases or very large Intent collections.
Only Intents added to the **Whitelist** of the current State of the conversation can be detected. Conversely, Intents added to the **Blacklist** of the current State will not be recognized.

For more information, how states work, read the [State](../../../ai/tools/interaction-panel/state.md) documentation.

### Slot Fillers

[Slot Fillers](../../../ai/nlu/nlu-overview/overview/#slot-fillers.md) allow for advanced Slot filling. Slot Fillers automatically copy found [Slots](../../../ai/nlu/slot-mapping/slot-mapping.md) to the [Context](../../../ai/tools/interaction-panel/context.md) object, meaning that they can be filled using a number of subsequent user utterances. 

## Settings

Every Flow of an Agent can be configured with its own Settings.

   - [Flow Configuration](#flow-configuration)
   - [Default Context](#default-context)
   - [Locale Settings](#locale-settings)

#### Flow Configuration

Following Flow Settings are available to configure:

   - The [General Flow Logic](../../../ai/resources/manage/settings.md#general-flow-logic)
   - The [Intent Mapper](../../../ai/resources/manage/settings.md#intent-mapper) - see also [Flows NLU](../../../ai/nlu/nlu-overview/overview.md) 
   - The [Thresholds](../../../ai/nlu/nlu-overview/ml-intents.md#thresholds) for NLU recognition
   - The [Lexicon Slots](../../../ai/resources/build/lexicons.md)
   - The [System Slots](../../../ai/nlu/slot-mapping/slot-mapping.md)

More information about the  Flow Configuration Settings you can find here: [Flow Settings](../../../ai/resources/manage/settings.md#general-flow-logic).

#### Default Context

The Context is a JSON object which stores persistent information. **Default Context** can be used as a starting point for the Flow's Context object. The default context is the initial state of the context when the session starts. This can be customized to initiate variables that will be accessed and changed throughout the conversation. 

For more information, read the [Context](../../../ai/tools/interaction-panel/context.md) and [Cognigy Script](../../../ai/tools/cognigy-script.md) documentation.

#### Locale Settings

[![Version badge](https://img.shields.io/badge/Added in-v4.32.0-blue.svg)]({{config.site_url}})

Cognigy.AI provides the localization feature for easy customization and content reuse.

The **Locale Settings** tab is disabled for fallback Locale and enabled for alternative Locales. Activate this setting to inherit the [Intent](../../../ai/nlu/nlu-overview/ml-intents.md) model from [fallback](../../../ai/resources/manage/localization.md) Locale. By default, the **Inherit Intent model from fallback locale** toggle is deactivated. Once activated, [training indicator](../../../ai/nlu/nlu-overview/ml-intents.md) on the Intents page and error badge on NLU tab are hidden, also the [Build Model](../../../ai/nlu/nlu-overview/ml-intents.md) button in Settings, Chart and NLU is disabled.

With the localization view of your Flow, you can configure multiple Locales. If one Locale doesn't have content configured, the system automatically falls back to another Locale that is configured. Default fallback Locale is **en-US**.

While you can add additional Locales for content localization later on, note that once the primary Locale is selected, it cannot be modified.
For more information, read the [Localization](../../../ai/resources/manage/localization.md) documentation.

##### Add a new Locale to an Agent

How to add a new Locale to an Agent, read the [Add a Locale to an Agent](../../../ai/resources/manage/localization.md#add-a-locale-to-an-agent) documentation.

##### Add a Locale to a Node

How to localize a Node manually, you can read in the [Add a Locale to a Node](../../../ai/resources/manage/localization.md#add-a-locale-to-a-node) documentation.

## Switch to different Flows

Cognigy.AI provides easy switching between different Flows as follows:

1. Click on the current active Flow-project on the top left side next to the displayed agent name.
2. In the list of available Flows select a Flow you want to switch to. 

- When you are in the **Chart** tab of Flow A and you switch to Flow B, you will still be in the Chart tab.
- When you are in the **NLU** tab of Flow A and you switch to Flow B you will still be in the NLU tab.
- When you are in the **Settings** tab of Flow A and you switch to Flow B you will still be in the Settings tab.

## More information

- [Flow Nodes](../../../ai/flow-nodes/flow-nodes-overview.md)
- [Interaction Panel](../../../ai/tools/interaction-panel/interaction-panel.md)
- [Agent](../../../ai/resources/agents/agents.md#top-toolbar)
