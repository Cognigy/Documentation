---
 title: "Flows" 
 slug: "flows" 
 hidden: false 
---
# Flows 

## Introduction

**Flows** are an important concept within Cognigy.AI. They provide a visual representation of a potential dialog based on a **Flow chart** in a user-friendly interface. Virtual Agent projects in Cognigy.AI are realized by creating Flows.   
Flows are build as a composition of individual Nodes with different functionalities, ranging from generating output to collecting back-end information, and are executed as soon as an [Input]({{config.site_url}}ai/tools/interaction-panel/input/) object comes in through an [Endpoint]({{config.site_url}}ai/resources/deploy/endpoints/).

## Flow Chart

!!! tip "How to create a new Flow"
    To build your first Flow, go to [Design a Flow and add a Message](https://support.cognigy.com/hc/en-us/articles/360014524180-Design-a-Flow-and-add-a-Message) in the Cognigy Help Center.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Flow-example_100.png" width="100%" />
</figure>

Flows are executed from top to bottom in a conversation and use a logic-based system to determine which nodes should be executed. The execution path of a conversation is indicated by a highlighted green path. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Flow-example_100_executed.png" width="100%" />
</figure>

### Creating a Flow Chart 

{! _includes/ai/generative-ai/generate-flows.md !}

How to create a Flow, read the [Generative AI](../../generative-ai.md#generate-flows) documentation.


## Flow Nodes

**Flow Nodes** can be used to add interactivity to a flow. They can be added by clicking on the **+** icon in between two existing Nodes. There are many types of Nodes, ranging from **Question Nodes** to **Marketing Nodes**. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Node-Create-Menu.png" width="80%" />
</figure>

Head over to [**Flow Nodes**]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/) for more information on the different types of **Nodes**.

## Entry Points

Flow execution typically starts at the top with the green **Start Node**. This is where the [NLU]({{config.site_url}}ai/nlu/nlu-overview/overview/) takes place and the NLU results are subsequently published to the [Input]({{config.site_url}}ai/tools/interaction-panel/input/) object.  A flow is triggered with each new input and starts at the **Start Node** unless specified differently.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/620d8e2-nodes-start.jpg" width="100%" />
</figure>

The **Entry Point** can change depending on the state of the conversation. It is indicated by a green triangle, next to a particular flow and shows where the next [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/)  object (user input) would enter the flow. In case a Question Node has been triggered, the entry point will shift to that particular Node as can be seen in the following screenshot.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/9c4cb06-nodes-question.jpg" width="100%" />
</figure>

In some cases there are **multiple Entry Points.** This can be the case if an Optional Question was triggered or if a given **Intent Entrypoint** has been set explicitly.

## NLU 

In addition to the visual **Chart**, Flows also contain a tab named **NLU**. This section leads to the **Natural Language Understanding** that is relevant to this particular Flow.

Refer to [NLU Overview]({{config.site_url}}ai/nlu/nlu-overview/overview/) to learn more.

## Settings

Certain settings can be configured per Flow. 

#### Flow Configuration
Information about the Flow Configuration Settings can be found here: [Flow Settings]({{config.site_url}}ai/resources/manage/settings/#general-flow-logic).

#### Default Context
Can be used as a starting point for the Flow's Context object. Head over to [Context]({{config.site_url}}ai/tools/interaction-panel/context/) for more information.

#### Locale Settings

[![Version badge](https://img.shields.io/badge/Added in-v4.32.0-blue.svg)]({{config.site_url}})

Activate this setting to inherit the [Intent]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) model from [fallback]({{config.site_url}}ai/resources/manage/localization/) Locale. The Locale Settings tab is disabled for fallback Locale and enabled for alternative Locales. By default, the **Inherit Intent model from fallback locale** toggle is deactivated. Once activated, [training indicator]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) on the Intents page and error badge on NLU tab are hidden, also the [Build Model]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) button in Settings, Chart and NLU is disabled.

<img src="{{config.site_url}}ai/images/locale-settings.png" width="100%" />

### Switching to different Flows

With Cognigy.AI 4.10.0 switching between Flows with different settings and different Intents has been improved as follows:

- When you are in the **NLU tab** of Flow A and you switch to Flow B you will still be in the NLU tab.
- When you are in the **Settings tab** of Flow A and you switch to Flow B you will still be in the Settings tab.


## Generative AI

To use Generative AI technology for creating a new Flow with pre-configured Nodes based on your scenario, read the [Generative AI](../../generative-ai.md#generate-flows) documentation.