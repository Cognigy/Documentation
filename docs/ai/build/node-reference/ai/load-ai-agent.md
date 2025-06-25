---
title: "Load AI Agent"
slug: "load-ai-agent"
description: "The Load AI Agent Node lets you load the AI Agent's configuration and persona data into the Input or Context object."
hidden: false
tags:
  - load ai agent node
  - load ai agent
---


# Load AI Agent

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/load-ai-agent.png" width="60%" />
</figure>

## Description

The Load AI Agent Node lets you load the AI Agent's configuration and persona data into the Input or Context object.
The primary use case is to enhance personalization in prompt generation with the [LLM Prompt Node](../service/llm-prompt.md).
To do so, place the Load AI Agent Node above the LLM Prompt Node in the Flow editor. You can also place this Node above any other Nodes to access AI Agent information.

## Parameters

| Parameter                | Type          | Description                                                                                                                                                                                     |
|--------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AI Agent                 | Selector      | Select the AI Agent.                                                                                                                                                                            |
| How to handle the result | Selector      | Determine how to handle the prompt result:<ul><li>**Store in Input** — stores the result in the Input object.</li><li>**Store in Context** — stores the result in the Context object.</li></ul> |
| Input Key                | CognigyScript | The parameter appears when **Store in Input** is selected. The result is stored in the `aiAgentConfiguration` Input object by default. You can specify another key.                             |
| Context Key              | CognigyScript | The parameter appears when **Store in Context** is selected. The result is stored in the `aiAgentConfiguration` key in the Context object by default. You can specify another key.              |
