---
 title: "Flows" 
 slug: "flows" 
 hidden: false 
---
# Flows 

## Chart

**Flows** provide a **visual representation of a potential dialog** in a user-friendly interface. 
Flows are composed of individual **Nodes** with different functionalities, ranging from generating output to collecting back-end information, and are executed as soon as an [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/) object comes in through an [**Endpoint**]({{config.site_url}}ai/resources/deploy/endpoints/).

???+ info "How to create a new Flow"
    Want to learn how to build your first Flow? Have a look at **[Design a Flow and add a Message](https://support.cognigy.com/hc/en-us/articles/360014524180-Design-a-Flow-and-add-a-Message)** in our Help Center.

<br>
<img src="{{config.site_url}}ai/resources/images/e1151fe-flow_example_detail.PNG" width="100%" style="margin-bottom: 5px">

Flows are executed from top to bottom and use a logic-based system to determine which nodes should be executed. The execution path is shown through a highlighted green path. 

<img src="{{config.site_url}}ai/resources/images/ec03ff1-flow_executed_detail.PNG" width="100%" style="margin-bottom: 5px">

## Flow Nodes
<div class="divider"></div>

**Flow Nodes** can be used to add interactivity to a flow. They can be added by clicking on the **+** icon in between two existing Nodes. There are many different types of Nodes, ranging from **Question Nodes** to **Marketing Nodes**. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Node-Create-Menu.png" width="100%" />
</figure>

???+ info "Flow Nodes"
    Head over to [**Flow Nodes**]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/) for more information on the different types of **Nodes**.

## Entry Points
<div class="divider"></div>

Flow execution typically starts at the top with the green **Start Node** . This is where the [NLU]({{config.site_url}}ai/nlu/nlu-overview/overview/) takes place and the NLU results are subsequently published to the [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/) object.  A flow is triggered with each new input and starts at the **Start Node** unless specified differently.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/620d8e2-nodes-start.jpg" width="100%" />
</figure>

The **Entry Point** can change depending on the state of the conversation. It is indicated by a green triangle, next to a particular flow and shows where the next [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/)  object (user input) would enter the flow. In case a Question Node has been triggered, the entry point will shift to that particular Node as can be seen in the following screenshot.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/9c4cb06-nodes-question.jpg" width="100%" />
</figure>

In some cases there are **multiple Entry Points.** This can be the case if an Optional Question was triggered or if a given **Intent Entrypoint** has been set explicitly.

## NLU 
<div class="divider"></div>

In addition to the visual **Chart**, Flows also contain a tab named **NLU**. This section leads to the **Natural Language Understanding** that is relevant to this particular Flow.

???+ info "NLU (Natural Language Understanding)"
    Please refer to [**NLU Overview**]({{config.site_url}}ai/nlu/nlu-overview/overview/) to learn more.

## Settings
<div class="divider"></div>

Certain settings can be configured per Flow. 

#### Flow Configuration
Information about the Flow Configuration Settings can be found here: [Flow Settings]({{config.site_url}}ai/resources/manage/settings/#general-flow-logic).

#### Default Context
Can be used as a starting point for the Flow's Context object. Head over to [Context]({{config.site_url}}ai/tools/interaction-panel/context/) for more information.

#### Locale Settings

[![Version badge](https://img.shields.io/badge/Added in-v4.32.0-blue.svg)]({{config.site_url}})

Activate this setting to inherit the [Intent]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) model from [fallback]({{config.site_url}}ai/resources/manage/localization/) Locale. The Locale Settings tab is disabled for fallback Locale and enabled for alternative Locales. By default, the *Inherit Intent model from fallback locale* toggle is deactivated. Once activated, [training indicator]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) on the Intents page and error badge on NLU tab are hidden, also the [Build Model]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) button in Settings, Chart and NLU is disabled.

<img src="{{config.site_url}}ai/images/locale-settings.png" width="100%" />

### Switching to different Flows

[![Version badge](https://img.shields.io/badge/Added in-v4.10.0-blue.svg)]({{config.site_url}})

<div class="divider"></div>

With Cognigy.AI 4.10.0 switching between Flows with different settings and different Intents has ben improved as follows:

- When you are in the **NLU tab** of Flow A and you switch to Flow B you will still be in the NLU tab.
- When you are in the **Settings tab** of Flow A and you switch to Flow B you will still be in the Settings tab.