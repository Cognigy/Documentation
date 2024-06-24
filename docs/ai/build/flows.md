---
title: "Flows"
slug: "flows"
hidden: false
---

# Flows

_Flows_ are conversational processes that represent interactions between users and virtual agents. They outline the various paths that a conversation can take and define the logic behind the responses given by the virtual agent.
Flows let you customize and design the behavior of their virtual agents, enabling you to create tailored and dynamic conversational experiences.

## Create a Flow

To create a Flow, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu, select a Project.
3. In the left-side menu of the Project, navigate to **Build > Flows**.
4. On the **Flows** page, click **+ New Flow**.
5. In the New Flow window, fill in the following fields:
    - **Name** — create a meaningful name for your Flow, for example, `Customer Support`.
    - **Description** — this parameter is optional. Create a meaningful description for your Flow, for example, `Automates the processing of incoming orders and updates inventory accordingly`.
6. Click **Create**.

You've created a simple Flow with the Start and End Nodes. Now you need to add [Nodes](#nodes) to it to build the conversation.
However,
you can take an alternative approach by using [Generative AI](../empower/generative-ai.md#generate-flows) to create the Flow,
which automatically generates Nodes with predefined configurations and content.
Note that for this option, you'll need to add one of the [LLM providers' models](../empower/generative-ai.md#prerequisites) beforehand.

## Copy the Flow Reference ID

Reference IDs can be helpful if you want to edit Flows via API.

To copy the Reference ID of a Flow, do the following:

1. Open the Cognigy.AI interface.
2. In the left-side menu, select the Project you need. 
3. In the left-side menu of your Project, navigate to **Build > Flows**. 
4. On the **Flows** page, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) on the right side next to the Flow you want to copy the reference ID. 
5. Select **Copy Reference ID**. The ID will be copied to the clipboard.

## Flow Interface

The Flow interface contains the following elements:

- [Project-related elements](#project-related-elements)
- [Flow-related elements](#flow-related-elements)

### Project-Related Elements

- [Project Management](#project-management)
- [Project Toolbar](#project-toolbar)

#### Project Management

In the upper-left corner of the Flow interface, you will find Project-specific details,
including the currently selected Project, Flow, and Locale.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/flows/agent-controls.png" width="80%" />
</figure>

- To open the [Project's dashboard](projects.md#project-dashboard), click the icon located on the left side next to the displayed Flow project. The dashboard provides specific information regarding your projects, the project members involved, and an analytic chart.
- To switch to another Flow, click the displayed Flow name and select the desired Flow from the list.
- To change the [Locale](#locale-settings), click the displayed Locale on the right side next to the Flow list and select the desired Locale you want to switch to.

For more information, read [Projects](projects.md#top-toolbar).

#### Project Toolbar

<figure>
  <img class="image-center" src="../../../_assets/ai/build/projects/toolbar.png" width="80%" />
</figure>

In the upper-right corner of the Flow interface, you will find the Project Toolbar.
It provides quick access to Project-specific resources:

- [Help Center Search](https://support.cognigy.com/hc/en-us)
- [Search](projects.md#search)
- [Tasks](projects.md#tasks)
- [User Menu](../administer/user-menu/overview.md)
- [Interaction Panel](../test/interaction-panel/overview.md)

The Interaction Panel enables various functions, including testing Flow functionality during development
(refer to the section [Testing a Flow](#testing-a-flow)).

For detailed information, read the [Project](projects.md#top-toolbar) documentation.

### Flow-Related Elements

- [Flow Chart](#flow-chart)
- [NLU](#nlu)
- [Settings](#settings)
- [Localization](#locale-settings)

#### Flow Chart

The _Flow Chart_, also known as the _Flow Editor_, is a graphic representation of a conversation in the Flow interface. It consists of Nodes that are linked by edges. Nodes are used to represent various actions or decision points while the edges indicate the conversation's path between them.

Flows are executed from the **Start** Node to the **End** Node in a conversation,
using a logic-based system to determine Nodes that must be executed.
The execution path of a conversation is indicated by a highlighted green path,
allowing you to understand logical system decisions at each step and to follow the path.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/flows/Flow-Editor.png" width="100%" />
</figure>

##### Entry Points

Flow execution typically starts at the top with the green **Start Node**.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/flows/start-node.png" width="80%" />
</figure>

The **Entry Point** can change depending on the state of the conversation.
It's indicated by a green triangle next to a particular Node and shows where the next user input would enter the Flow.
If a Question Node has been triggered, the entry point will shift to that specific Node, as indicated in the screenshot.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/flows/question-node_entry-point_moved.png" width="80%" />
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

To manage the Flow Editor parameters, such as zoom and navigation, go to the controls in the bottom-left corner of the Flow editor.

| Control                                                       | Description                                               |
|---------------------------------------------------------------|-----------------------------------------------------------|
| **- 100% +**                                                  | Zoom out (-) or zoom in (+) the chart in the Flow Editor. |
| ![flow-centralize](../../_assets/icons/flow-centralize.svg)   | Centers the chart.                                        |
| ![magnifying-glass](../../_assets/icons/magnifying-glass.svg) | Search for Nodes in the Flow.                             | 
| ![voice-preview](../../_assets/icons/voice-preview.svg)       | Testing voice inputs without executing the entire Flow.   |
| ![arrow-back](../../_assets/icons/arrow-back.svg)             | Undo the last step by going backward in history.          |
| ![arrow-forward](../../_assets/icons/arrow-forward.svg)       | Redo the last steps by going forward in history.          |

##### Flow Actions

To manage Flows in different use cases for your Project, do the following:

1. Open Cognigy.AI and select a Project on the left side of the page.
2. Go to **Build** > **Flows** to see your available Flows for the selected Project.
3. Click ![vertical ellipsis](../../_assets/icons/vertical-ellipsis.svg) on the right side next to the Flow you want to edit. A selection menu appears.
4. Select one of the following options, depending on the intended action you need:
    - **Edit** — change the name and the description for the selected Flow.
    - **Delete** — delete a Flow. When you select this option, you need to confirm the deletion of the selected Flow.
    - **Copy Reference ID** — copy a unique Flow ID to perform [API calls](../developers/api-and-cli.md).
    - **Export as Package** — export a Flow as a [Package](packages.md) to reuse it in another Project or environment.
    - **Clone** — create a copy of your Flow. When a new Flow is created, you will notice a red dot. As more clones are added to the Flow, the clone number increases.

##### Nodes

_[Nodes](nodes/overview.md)_ are the fundamental components of your Flow. Cognigy.AI offers a variety of node types, ranging from basic to advanced, to cater to different functionalities.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/flows/Node-Create-Menu.png" width="80%" />
</figure>

To add a Node to your Flow, follow these steps:

1. Open your Project in Cognigy.AI.
2. Select the Flow you want to edit.
3. Click the **+** icon located between the Nodes where you want to add a new Node. For example, you can add a **Say** Node, which is the most basic output Node. A window will appear to provide available Nodes to add.
4. Select the **By Function** tab, then choose **Basic**.
5. Click **Say** in the selection list. A Say Node will be added at the location where you clicked the **+** icon in your Flow.
6. Configure your added Node as required for your project. For detailed information on Nodes and how to configure them, refer to the [Nodes](nodes/overview.md) documentation.

##### Testing a Flow

To test a Flow, you can use the [Interaction panel](../test/interaction-panel/overview.md).
Using the **Interaction Panel**, you can chat at any time with your virtual agent during the project development in order to evaluate the Flow functionality.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/flows/Flow-example_Interaction-Panel_executed.png" width="100%" />
</figure>

To start a chat with your virtual agent and test the Flow functionality, follow these steps:

1. Open your Project project in Cognigy.AI.
2. Select a Flow you want to test.
3. In the upper-right corner, click ![chat](../../_assets/icons/chat.svg) to open the **Interaction Panel**. The Interaction Panel will open on the right side of the Flow creation page.
4. Click the **TEST** tab to open the conversation window of the Interaction Panel.
5. In the **Text Message** field, enter a message and press **ENTER** or click ![send-message](../../_assets/icons/send-message.svg) next to the field. The message you send represents input from a potential user and initiates a conversation with your virtual agent, which will respond based on the created Flow. The conversation will be displayed on the Interaction Panel screen.

While interacting with the virtual agent in a simulated user conversation, you can review the Flow structure to ensure it meets your intended task requirements.
The execution path of your conversation is highlighted by a green path in your Flow Chart,
allowing you to understand the logical decisions made at each step and to follow the path.

#### NLU

*Natural Language Understanding* is at the core of advanced Projects. Cognigy.AI features an industry-leading NLU engine called Cognigy NLU.
When you click the **NLU** tab at the top of your Flow, the following configuration tabs will appear:

- [Intents](#intents)
- [Attached Flows](#attached-flows)
- [Attached Lexicons](#attached-lexicons)
- [States](#states)
- [Slot Fillers](#slot-fillers)

For more information, read the [NLU](../empower/nlu/overview.md) documentation.

##### Intents

_Intent Mapping_ is a fundamental part of the NLU engine. This process involves using machine learning to match the user's spoken or written statement to the predefined Intents. You can easily create Intents within the Intents section of the NLU tab and provide training data in the form of example sentences to help the Flow improve its accuracy.

For more information, read the [Machine learning Intents](../empower/nlu/intents/ml-intents.md) documentation.
To learn how to use Intents, see also [Cognigy Sessions:Cognigy NLU](https://support.cognigy.com/hc/en-us/articles/360019857220-Cognigy-Sessions-Cognigy-NLU) video in the Cognigy.AI Help Center.

##### Attached Flows

When you link an Intent-based Flow to another Flow,
it's known as an _[Attached Flow](../empower/nlu/overview.md#attached-flows)_.
The Intents present in the Attached Flow are included in the training of the Natural Language Understanding (NLU) model.
This feature is useful for combining multiple sets of Intents into a single, larger model.

##### Attached Lexicons

Attaching Lexicons to a Flow is necessary for detecting its Keyphrases. Ensure to retrain the model whenever resources are attached or detached.

For more information, read the [Attached Lexicons](../empower/nlu/overview.md#attached-lexicons) documentation.

##### States

Use _States_ to prevent certain Intents from being detected.
This feature can be helpful in situations where there are many Intents or in unique scenarios.
Only the Intents that are added to the Whitelist of the current State in the conversation can be detected.
On the other hand, the Intents that are added to the Blacklist of the current State will not be recognized.

For more information on how states work, read the [State](../test/interaction-panel/state.md) documentation.

##### Slot Fillers

_[Slot Fillers](../empower/nlu/overview.md#slot-fillers)_ are tools that help fill in information gaps in a conversation.
They automatically copy any important information,
called [Slots](../empower/nlu/slots-and-lexicons/slots.md),
to the [Context](../test/interaction-panel/context.md) object.
This means that you can provide further details about those Slots in subsequent conversations.

#### Settings

Each Project's Flow can be customized with its own settings:

- [Default Context](#default-context)
- [Locale Settings](#locale-settings)
- [Configuration](#configuration)

##### Default Context

The Context is a JSON object that holds persistent information.
The _Default Context_ is the starting point of a Flow's Context object,
which represents the initial state of a conversation.
This approach allows the customization of variables that are accessed and modified throughout the conversation.

When a conversation starts, it inherits the Default Context from the Flow in which this conversation began.
If you switch to another Flow during the conversation, the Context usually remains the same.
However, if you use the [Absorb Context](node-reference/logic/go-to.md#absorb-context) feature in a Go To Node,
the Default Context of the new Flow is applied to the conversation's Context.
This means that any values in the new Flow's Default Context will replace existing ones in the conversation.

For further details, refer to the [Context](../test/interaction-panel/context.md).

##### Locale Settings

Cognigy.AI offers a localization feature for easy customization and content reuse.

You can add a Locale to your Flow and Nodes:

- To add a new Locale to a Flow, refer to the [Add a Locale to Project](translation-and-localization/localization.md#add-a-locale-to-an-agent) documentation.
- When you create a new Locale for your Project, you also need to localize your Nodes for the new Locale. Learn how to localize a Node manually in the [Add a Locale to Node](translation-and-localization/localization.md#add-a-locale-to-a-node) documentation.

The **Locale Settings** tab is disabled for the fallback Locale and enabled for alternative Locales.
Activate this setting
to inherit the [Intent](../empower/nlu/intents/ml-intents.md) model from the [fallback](translation-and-localization/localization.md) Locale.
The **Inherit Intent model from fallback Locale** toggle is deactivated by default.
Once the setting is activated, the [training indicator](../empower/nlu/intents/ml-intents.md) on the Intents page and the error badge on the NLU tab are hidden, and the [Build Model](../empower/nlu/intents/ml-intents.md) button in Settings, Chart, and NLU is disabled.

With the localization view of your Flow, you can configure multiple Locales. If one Locale doesn't have content configured, the system automatically switches to another locale that is set as a fallback.
The default fallback Locale is **en-US**.

While you can add additional Locales for content localization later,
note that once the primary Locale is selected, it cannot be modified.
For more information, refer to the [Localization](translation-and-localization/localization.md) documentation.

##### Configuration

The Flow Configuration lets you customize Flows, integrating tools such as Yes/No logic and personalized confirmation responses.
You can fine-tune the system's confidence in understanding Intents and activate recognition of specific details,
including age, date, and email addresses, to ensure more accurate responses.

| Setting                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **General Flow Logic**                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Yes/No logic                                                          | Add a specific [Yes/No logic](../empower/nlu/intents/yes-no-intents.md) within your Flow to confirm and negate an [Intent](../empower/nlu/intents/ml-intents.md) or the **Yes/No** type of [Question Nodes](node-reference/basic/question.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Positive confirmation words                                           | Add your own customized responses to confirm an [Intent](../empower/nlu/intents/ml-intents.md) and [Question Nodes](node-reference/basic/question.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Negative confirmation words                                           | Add your own customized responses to negate an [Intent](../empower/nlu/intents/ml-intents.md) and [Question Nodes](node-reference/basic/question.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Continue main Flow after attached Flow                                | Enable this setting to continue the main Flow after an attached Flow has been executed. Disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Continue Flow after Default reply                                     | Enable this setting to continue executing the Flow logic after a default reply has been delivered. Disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Continue Flow after negative confirmation                             | Enable this setting to continue the Flow logic after a negative response to an Intent confirmation sentence. Disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Pass Default Reply into Flow                                          | Enable this setting to have the virtual agent store the default reply in the input instead of using it directly. This allows you to utilize the reply within the Flow logic. Disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Include Default Reply in NLU Training                                 | Enable this setting to include default replies in NLU training. These default replies serve as example sentences for matching Intents. You can also configure this setting individually for each Intent. Enabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Intent Mapper**                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Attached Flow Intent Mapping Priority                                 | Select one of the following priority types:<br>- **Jointly Map Main and Attached Flow** — treats Main and Attached Flow Intents as if they were a single Intent collection, finding the best matching Intent and executing the corresponding Flow.<br>- **Map Main Flow first** — maps  the Main Flow Intents separately. If no Intent is found in the Main Flow, then the Attached Flow is mapped.<br> - **Map Attached Flow first** — maps  the Attached Flow Intents separately. If no Intent is found in the Attached Flow, then the Main Flow is mapped.                                                                                                                                                                                                              |
| Implicit Slot Parsing                                                 | Determine whether Slots in NLU example sentences should be parsed implicitly or if only Slot annotations should be used for training. Choose one of the following methods: <br>- **Disabled — only use slot annotations** —  considers only user-annotated Slots, Lexicon, or Any Slots in example sentences.<br>- **Full - Parse both System and Lexicon slots implicitly** — parses both System and Lexicon Slots automatically.<br>- **System Slots - No Lexicon Slots** — parses only System Slots like numbers, dates, and email addresses automatically. It considers only annotations for Lexicon Slots.<br>- **Lexicon Slots - No System Slots** — parses only Lexicon Slots from attached Lexicons automatically. It considers only annotations for System Slots. |
| **Thresholds**                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Intent threshold                                                      | Determine the level of confidence required for the virtual agent to understand what the user is trying to communicate. The level of confidence accepts values ranging from 0 to 1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |  
| Reconfirmation Threshold                                              | Determine a score from which an Intent is considered confirmed or marked for reconfirmation if a reconfirmation sentence is set.  By default, the value is `0.2`. Note that the confidence threshold has **no effect unless the Intent uses confirmation sentences**. The Reconfirmation Threshold is your lower confidence bound — you must set it in addition to the Confidence Threshold. **Intent scores above the reconfirmation threshold are confirmed or marked for reconfirmation.**                                                                                                                                                                                                                                                                              |
| Confidence Threshold                                                  | Determine a score from which an Intent is considered confirmed if a confirmation sentence is set.  By default, the value is `0.4`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Attached Flows specific settings**                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Use Thresholds of the attached Flows                                  | Determine whether the thresholds configured in the attached Flows are applied. Enabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Use "Continue Flow after Default Reply" setting of the attached Flows | Determine if the conversation continues after giving a default reply in the attached Flows. Enabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Use "Pass Default Reply into Flow" of the attached Flows              | Determine if the default reply from attached Flows affects the ongoing conversation. Enabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Use "Implicit Slot Parsing" setting of the attached flows             | Determine if the system should try to understand Slot values even if not directly mentioned. Disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Lexicon Slots**                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Parse Lexicon Slots with submatches                                   | Enable the parsing of Lexicon Slots with submatches, allowing for more detailed and nuanced understanding of user input by identifying not just the primary match but also any submatches within the Lexicon. This feature can improve accuracy in language understanding tasks, especially when dealing with complex or ambiguous phrases. Disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                    |
| **System Slots**                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Enable Age Slots                                                      | Enable the recognition of age-related terms. For more information, read [System-Defined Slots](../empower/nlu/slots-and-lexicons/slots.md#system-defined-slots).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Enable Date Slots                                                     | Enable the recognition of date-related terms. For more information, read [System-Defined Slots](../empower/nlu/slots-and-lexicons/slots.md#system-defined-slots).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Enable Distance Slots                                                 | Enable the recognition of distance-related terms. For more information, read [System-Defined Slots](../empower/nlu/slots-and-lexicons/slots.md#system-defined-slots).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Enable Duration Slots                                                 | Enable the recognition of duration-related terms. For more information, read [System-Defined Slots](../empower/nlu/slots-and-lexicons/slots.md#system-defined-slots).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Enable Email Slots                                                    | Enable the recognition of email addresses. For more information, read [System-Defined Slots](../empower/nlu/slots-and-lexicons/slots.md#system-defined-slots).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Enable Money Slots                                                    | Enable the recognition of monetary values. For more information, read [System-Defined Slots](../empower/nlu/slots-and-lexicons/slots.md#system-defined-slots).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Enable Number Slots                                                   | Enable the recognition of numerical values. For more information, read [System-Defined Slots](../empower/nlu/slots-and-lexicons/slots.md#system-defined-slots).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Enable Percentage Slots                                               | Enable the recognition of percentage values. For more information, read [System-Defined Slots](../empower/nlu/slots-and-lexicons/slots.md#system-defined-slots).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Enable Temperature Slots                                              | Enable the recognition of temperature values. For more information, read [System-Defined Slots](../empower/nlu/slots-and-lexicons/slots.md#system-defined-slots).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Enable URL Slots                                                      | Enable the recognition of URLs. For more information, read [System-Defined Slots](../empower/nlu/slots-and-lexicons/slots.md#system-defined-slots).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## More Information

- [Nodes](nodes/overview.md)
- [Interaction Panel](../test/interaction-panel/overview.md)
- [Agent](projects.md#top-toolbar)