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
- [Agent Top Toolbar](#agent-toolbar)
- [Flow Nodes](#flow-nodes)
- [NLU](#nlu)
- [Settings](#settings)
- [Localization](#locale-settings)


## Flow Chart

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Flow-example_100.png" width="100%" />
</figure>

A Flow is represented visually with the help of a Flow chart, in which each step in a potential dialog are represented by Flow Nodes. Cognigy provides a wide range of different [Flow Nodes]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/). To realize your project, you can add Flow Nodes that offer the required functionality for your project. 
Flows are executed from a **Start** Node to an **End** Node in a conversation and use a logic-based system to determine which Nodes should be executed. The execution path of a conversation is indicated by a highlighted green path, so that you can understand logical system decicisons at any step and follow the path. 

### Agent Management

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/agent-controls.png" width="80%" />
</figure>

In the top left corner of the Flow Chart panel you will find the Agent specific indications as currently active Agent. 

- To open the [Agents dashboard](../../../ai/resources/agents/agents.md#agent-dashboard), click the icon on the left side  next to the displayed Agent name. The dasboard gives you specific information regarding your projects, involved project members, and an analytic chart. 
- To switch to another available Agent, click on the current displayed Agent name and select the Agent you want to switch to in the drop-down list. 
- To change the [location](#locale-settings), click on the current displayed location name on the right side next to the Agent name and select the location you want to switch to.

For more information, read the [Agent](../../../ai/resources/agents/agents.md#top-toolbar) documentation.

### Agent Top Toolbar

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar.png" width="80%" />
</figure>

Agents have a Top Toolbar in every view, offering quick access to Agent-specific resources, such as Help, Search, Product Journeys, and Task Menu. The Top Toolbar also includes items, such as the User Menu and Interaction Panel, that are consistently available. The Interaction Panel is very important because, among other things, it allows the flow functionality to be tested during development, see section [Execute a Flow](#execute-a-flow)

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

1. Open your Cognigy.AI interface with your Virtual Agent. 
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

To add a Node to your Flow, do the following:

1. 


<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Node-Create-Menu.png" width="80%" />
</figure>

For more information, read the [Flow Nodes](../../../ai/flow-nodes/flow-nodes-overview.md) documentation.

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

In addition to the visual **Chart**, Flows also contain a tab named **NLU**. This section leads to the **Natural Language Understanding** that is relevant to this particular Flow.

Refer to [NLU Overview](../../../ai/nlu/nlu-overview/overview.md) to learn more.

## Settings

Certain settings can be configured per Flow. 

https://docs.cognigy.com/ai/resources/manage/manage/


#### Flow Configuration
Information about the Flow Configuration Settings can be found here: [Flow Settings](../../../ai/resources/manage/settings.md#general-flow-logic).

#### Default Context
Can be used as a starting point for the Flow's Context object. Head over to [Context](../../../ai/tools/interaction-panel/context.md) for more information.

#### Locale Settings

[![Version badge](https://img.shields.io/badge/Added in-v4.32.0-blue.svg)]({{config.site_url}})

Activate this setting to inherit the [Intent](../../../ai/nlu/nlu-overview/ml-intents.md) model from [fallback](../../../ai/resources/manage/localization.md) Locale. The Locale Settings tab is disabled for fallback Locale and enabled for alternative Locales. By default, the **Inherit Intent model from fallback locale** toggle is deactivated. Once activated, [training indicator](../../../ai/nlu/nlu-overview/ml-intents.md) on the Intents page and error badge on NLU tab are hidden, also the [Build Model](../../../ai/nlu/nlu-overview/ml-intents.md) button in Settings, Chart and NLU is disabled.

<img src="{{config.site_url}}ai/images/locale-settings.png" width="100%" />

http://127.0.0.1:8000/ai/resources/manage/localization/


### Switch to different Flow

Cognigy.AI provides easy switching between different Flows.

- When you are in the **Chart** tab of Flow A and you switch to Flow B, you will still be in the Chart tab.
- When you are in the **NLU** tab of Flow A and you switch to Flow B you will still be in the NLU tab.
- When you are in the **Settings** tab of Flow A and you switch to Flow B you will still be in the Settings tab.


## Generative AI

Generative AI is a type of artificial intelligence that creates new, original content, such as images, video, audio, and text, using machine learning algorithms. It works by learning from existing data and producing new content based on that learning.
Cognigy.AI integrates with the Generative AI providers that allow text generation based on user input. That involves utilizing [Large Language Models (LLMs)](../../../ai/resources/build/llm.md) to analyze data and generate contextually relevant and personalized content.
**Large Language Models (LLMs)** are a specific type of Generative AI model that is able to generate human-like text based on the input and context provided. In the Cognigy.AI interface, LLMs generate human-like and personalized content for a Virtual Agent.
To use Generative AI with LLM model in your project, creating a LLM model and access to aGenerative AI provider is required.

For more information, read the [Large Language Models (LLMs)](../../../ai/resources/build/llm.md) documentation.

To use Generative AI technology for creating a new Flow with pre-configured Nodes based on your scenario, read the [Generative AI](../../generative-ai.md#generate-flows) documentation.

## More information

- [Flow Nodes](../../../ai/flow-nodes/flow-nodes-overview.md)
- [Interaction Panel](../../../ai/tools/interaction-panel/interaction-panel.md)
- [Agent](../../../ai/resources/agents/agents.md#top-toolbar)
