---
title: "Flows" 
slug: "flows" 
hidden: false 
---

# Flows 

_Flows_ are conversational processes that represent interactions between users and virtual agents. They outline the various paths that a conversation can take and define the logic behind the responses given by the virtual agent.
Flows allow users to customize and design the behavior of their virtual agents, enabling them to create tailored and dynamic conversational experiences.

## Create a Flow

To create a Flow, follow these steps:

1. Open The Cognigy.AI interface.
2. In the left-side menu, select an Agent.
3. In the left-side menu of the Agent, navigate to **Build > Flows**.
4. On the **Flows** page, click **+ New Flow**.
5. In the New Flow window, fill in the following fields:
   - **Name** — create a meaningful name for your Flow, for example, `Customer Support`.
   - **Description** — create a meaningful description for your flow, for example, `Automates the processing of incoming orders and updates inventory accordingly`.
6. Click **Create**.

You've created a simple Flow with the Start and End Nodes. Now you need to add nodes to it to build the conversation.
However,
you can take an alternative approach by using [Generative AI](../../generative-ai.md#generate-flows) to create the Flow,
which automatically generates Nodes with predefined configurations and content. Note that for this option, you'll need to add one of the LLM providers' models beforehand.

## Flow Interface

The Flow interface contains the following elements:

- [Agent-related elements](#agent-related-elements)
- [Flow-related elements](#flow-related-elements)

### Agent-Related Elements

- [Agent Management](#agent-management)
- [Agent Toolbar](#agent-toolbar)

#### Agent Management

In the upper-left corner of the Flow interface, you will find Agent-specific details, including the currently selected Agent, Flow project, and Locale.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/agent-controls.png" width="80%" />
</figure>

- To open the [Agent's dashboard](../../../ai/resources/agents/agents.md#agent-dashboard), click the icon located on the left side next to the displayed Agent Flow project. The dashboard provides specific information regarding your projects, the project members involved, and an analytic chart.
- To switch to another Flow, click the displayed Flow name, and select the desired Flow from the list.
- To change the [Locale](#locale-settings), click the displayed Locale on the right side next to the Flow list, and select the desired Locale you want to switch to.

For more information, read the [Agent](../../../ai/resources/agents/agents.md#top-toolbar) documentation.

#### Agent Toolbar

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar.png" width="80%" />
</figure>

In the upper-right corner of the Flow interface, you will find the Agent Toolbar.
It provides quick access to agent-specific resources:

- [Help Center Search](https://support.cognigy.com/hc/en-us)
- [Journeys](../../../ai/resources/agents/journeys.md)
- [Search](../../../ai/resources/agents/agents.md#search)
- [Tasks](../../../ai/resources/agents/tasks.md)
- [User Menu](../../../ai/tools/user-menu/user-menu.md)
- [Interaction Panel](../../../ai/tools/interaction-panel/interaction-panel.md)    

The toolbar in the application includes elements such as the User Menu and Interaction Panel that are always available.
The Interaction Panel enables various functions, including testing Flow functionality during development
(refer to section [Execute a Flow](#execute-a-flow)).

For detailed information to each item, read the [Agent](../../../ai/resources/agents/agents.md#top-toolbar) documentation.

### Flow-Related Elements

- [Flow Chart](#flow-chart)
- [Flow Nodes](#flow-nodes)
- [NLU](#nlu)
- [Settings](#settings)
- [Localization](#locale-settings)

#### Flow Chart

The _Flow Chart_, also known as the _Flow Editor_, is a graphic representation of a conversation in the Flow interface. It consists of Nodes that are linked by edges. Nodes are used to represent various actions or decision points while the edges indicate the conversation's path between them.

Flows are executed from the **Start** Node to the **End** Node in a conversation, using a logic-based system to determine which Nodes should be executed. The execution path of a conversation is indicated by a highlighted green path, allowing users to understand logical system decisions at each step and to follow the path.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Flow-Editor.png" width="100%" />
</figure>

##### Entry Points

Flow execution typically starts at the top with the green **Start Node**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/start-node.png" width="80%" />
</figure>

The **Entry Point** can change depending on the state of the conversation. 
It's indicated by a green triangle next to a particular Node and shows where the next user input would enter the Flow. 
If a Question Node has been triggered, the entry point will shift to that specific Node, as indicated in the screenshot.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/question-node_entry-point_moved.png" width="80%" />
</figure>

In some cases, there are multiple Entry Points. 
This can occur if an Optional Question was triggered or if a specific Intent Entry point has been set explicitly.

To set or unset an Entry point in your Flow explicitly, follow these steps:

1. Open the Flow you want to edit in Cognigy.AI.
2. Navigate to the Node where you want to set the Entry point explicitly. For example, you may want to set an Entry point at a Say Node within a loop to ensure it's passed multiple times without returning to the Start Node.
3. Right-click on the Node to open a drop-down menu.
4. Choose one of the following options:
   - **Set Entrypoint** — this option displays a green triangle icon next to the Node, indicating that the Entrypoint has been set at that step.
   - **Unset Entrypoint** — this option disables a previously set Entrypoint at that step.

##### Chart Controls

To manage Flow Editor parameters, such as zoom and navigation, go to the controls in the bottom-left corner of the Flow editor.

| Control                                                         | Description                                               |
|-----------------------------------------------------------------|-----------------------------------------------------------|
| **- 100% +**                                                    | Zoom out (-) or zoom in (+) the chart in the Flow Editor. |
| ![flow-centralize](../../../assets/icons/flow-centralize.svg)   | Centers the chart.                                        |
| ![magnifying-glass](../../../assets/icons/magnifying-glass.svg) | Search for Nodes in the Flow.                             | 
| ![voice-preview](../../../assets/icons/voice-preview.svg)       | Testing voice inputs without executing the entire Flow.   |
| ![arrow-back](../../../assets/icons/arrow-back.svg)             | Undo the last step by going backward in history.          |
| ![arrow-forward](../../../assets/icons/arrow-forward.svg)       | Redo the last steps by going forward in history.          |

##### Flow Actions

To manage Flows in different use cases for your Agent, do the following:

1. Open Cognigy.AI and select the Agent on the left side of the page. 
2. Go to **Build** > **Flows** to see your available Flows for the selected Agent.
3. Click ![vertical ellipsis](../../../assets/icons/vertical-ellipsis.svg) on the right side next to the Flow you want to edit. A selection menu appears.
4. Select one of the following options, depending on the intended action you need:
    - **Edit** — change the name and the description for the selected Flow.
    - **Delete** - delete a Flow. When selected you are prompted to confirm the deletion of the selected Flow.  
    - **Copy Reference ID** - copy a unique Flow ID. Depending on the task you need to copy the Reference ID to perform [API calls](../../../ai/developer-guides/using-api.md).   
    - **Export as Package** - export a Flow as a package to reuse it in another agent or environment.      
    - **Clone** - create a copy of your Flow. A new Flow is indicated by a red dot and an increasing clone number.

#### Add a Node to your Flow

Nodes can be used to add interactivity to a Flow. They can be added by clicking on the **+** icon visible in the Flow chart between the Nodes. 
Depending on the function, Cognigy.AI provides many types of Nodes, ranging from basic to advanced.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Node-Create-Menu.png" width="80%" />
</figure>

To add a Node to your Flow, follow these steps:

1. Open your Agent project in Cognigy.AI.
2. Select the Flow you want to edit.
3. Click the **+** icon located between the Nodes where you want to add a new Node. For example, you can add a **Say** Node, which is the most basic output Node. A window will appear to provide available Nodes to add.
4. Select the **By Function** tab, then choose **Basic**.
5. Click **Say** in the selection list. A Say Node will be added at the location where you clicked the **+** icon in your Flow.
6. Configure your added Node as required for your project. For detailed information on Nodes and how to configure them, refer to the [Nodes](../../../ai/nodes/overview.md) documentation.

### NLU 

*Natural Language Understanding* is at the core of advanced Agents. Cognigy.AI features an industry-leading NLU engine called Cognigy NLU.
When you click the **NLU** tab at the top of your Flow, the following configuration tabs will appear:

  - [Intents](#intents) 
  - [Attached Flows](#attached-flows)
  - [Attached Lexicons](#attached-lexicons)
  - [States](#states)
  - [Slot Fillers](#slot-fillers)

For more information, read the [NLU](../../../ai/nlu/nlu-overview/overview.md) documentation.

#### Intents

Intent Mapping is at the core of the NLU engine and the process uses machine learning to match the user's utterance to the defined intents.
Intents can be created right within the Intents section of the NLU tab and can be fed with training data in the form of example sentences.

For more information, read the [Machine learning Intents](../../../ai/nlu/nlu-overview/ml-intents.md) documentation.
To learn how to use Intents, see also [Cognigy Sessions:Cognigy NLU](https://support.cognigy.com/hc/en-us/articles/360019857220-Cognigy-Sessions-Cognigy-NLU) video in the Cognigy.AI Help Center.

#### Attached Flows

Whenever a Flow with Intents is attached to another Flow, the Intents in that [Attached Flow](../../../ai/nlu/nlu-overview/overview/#attached-flows.md) will be considered when training the NLU model. That is a practical way of combining different Intent collections into a bigger model.

#### Attached Lexicons

Lexicons need to be attached to a Flow in order for a Flow to be able to detect its Keyphrases. Make sure to retrain the model whenever you attach or detach resources.
More information, read the [Attached Lexicons](../../../ai/nlu/nlu-overview/overview/#attached-lexicons.md) documentation.

#### States

**States** can be used to deliberately block certain Intents. This can help with edge-cases or very large Intent collections.
Only Intents added to the **Whitelist** of the current State of the conversation can be detected. Conversely, Intents added to the **Blacklist** of the current State will not be recognized.

For more information, how states work, read the [State](../../../ai/tools/interaction-panel/state.md) documentation.

#### Slot Fillers

[Slot Fillers](../../../ai/nlu/nlu-overview/overview/#slot-fillers.md) allow for advanced Slot filling. Slot Fillers automatically copy found [Slots](../../../ai/nlu/slot-mapping/slot-mapping.md) to the [Context](../../../ai/tools/interaction-panel/context.md) object, meaning that they can be filled using a number of subsequent user utterances. 

### Settings

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

More information about the Flow configuration settings you can find here: [Flow Settings](../../../ai/resources/manage/settings.md#general-flow-logic).

#### Default Context

The Context is a JSON object which stores persistent information. **Default Context** can be used as a starting point for the Flow's Context object. The default context is the initial state of the context when the session starts. This can be customized to initiate variables that will be accessed and changed throughout the conversation. 

For more information, read the [Context](../../../ai/tools/interaction-panel/context.md) and [Cognigy Script](../../../ai/tools/cognigy-script.md) documentation.

#### Locale Settings

[![Version badge](https://img.shields.io/badge/Added in-v4.32.0-blue.svg)]({{config.site_url}})

Cognigy.AI provides the localization feature for easy customization and content reuse.

You can add a Locale to your Agent and to your Flow Nodes as well:

  - Add a new Locale to an Agent. How to add a new Locale to an Agent, read the [Add a Locale to an Agent](../../../ai/resources/manage/localization.md#add-a-locale-to-an-agent) documentation.
  - Add a Locale to a Node. When you created a new Locale for your Agent you need to localize your Flow for the new Locale also. How to localize a Node manually, you can read in the [Add a Locale to a Node](../../../ai/resources/manage/localization.md#add-a-locale-to-a-node) documentation.

The **Locale Settings** tab is disabled for fallback Locale and enabled for alternative Locales. Activate this setting to inherit the [Intent](../../../ai/nlu/nlu-overview/ml-intents.md) model from [fallback](../../../ai/resources/manage/localization.md) Locale. By default, the **Inherit Intent model from fallback locale** toggle is deactivated. Once activated, [training indicator](../../../ai/nlu/nlu-overview/ml-intents.md) on the Intents page and error badge on NLU tab are hidden, also the [Build Model](../../../ai/nlu/nlu-overview/ml-intents.md) button in Settings, Chart and NLU is disabled.

With the localization view of your Flow, you can configure multiple Locales. If one Locale doesn't have content configured, the system automatically falls back to another Locale that is configured. Default fallback Locale is **en-US**.

While you can add additional Locales for content localization later on, note that once the primary Locale is selected, it cannot be modified.
For more information, read the [Localization](../../../ai/resources/manage/localization.md) documentation.


### Switch to different Flows

Cognigy.AI provides easy switching between different Flows as follows:

1. Click on the current active Flow project on the top left side next to the displayed Agent name.
2. In the list of available Flows select a Flow you want to switch to. 

    - When you are in the **Chart** tab of Flow A and you switch to Flow B, you will still be in the Chart tab.
    - When you are in the **NLU** tab of Flow A and you switch to Flow B you will still be in the NLU tab.
    - When you are in the **Settings** tab of Flow A and you switch to Flow B you will still be in the Settings tab.

## More information

- [Flow Nodes](../../../ai/nodes/overview.md)
- [Interaction Panel](../../../ai/tools/interaction-panel/interaction-panel.md)
- [Agent](../../../ai/resources/agents/agents.md#top-toolbar)
