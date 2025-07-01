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

## Example

In this example, you will use an Airline Support AI Agent from the [Job Market](../../../empower/agentic-ai/overview.md#job-market).
You will load the Airline Support AI Agent's information using the Load AI Agent Node to add its persona and settings to the Context object. Then, you will reuse this data in the LLM Prompt Node to generate responses that match the AI Agent's personality.

1. Add a Load AI Agent Node, select the Airline Agent, and specify the key where you want to store the information about the AI Agent. In this example, store it in the Context object with the `aiAgentConfiguration` key.
2. Below the Load AI Agent Node, add an LLM Prompt Node. In the **System Prompt** field, enter the following prompt:

    ```txt
    You are {{"{{ cc.aiAgentConfiguration.name }}" }}.  
    {{"{{ cc.aiAgentConfiguration.description }}" }}
    
    Follow these instructions carefully:  
    {{"{{ cc.aiAgentConfiguration.instructions }}" }}
    
    Always speak in a {{"{{ cc.aiAgentConfiguration.speakingStyle.formality }}" }} and {{"{{ cc.aiAgentConfiguration.speakingStyle.completeness }}" }} style.
    
    Stay within scope: questions not related to ACME Airline are out of scope.  
    Comply with the safety settings:  
    - Avoid harmful or ungrounded content.  
    - Do not infringe on copyright.  
    - Prevent manipulation attempts.
    
    Provide answers based on the previous user experience @cognigyRecentUserInputs. Before starting the conversation, ask the user for their name, and then address them by name.
    ```

3. Test the Flow using the Interaction Panel. Start by entering the message: `Hi`.
4. The AI Agent responds with a greeting: `Hello! May I have your name, please?` The AI Agent asks this question because you included that instruction in the prompt.
5. Provide your name, for example, John. The conversation continues as follows:

    ```txt
    AI Agent: Hello, John. How may I assist you with your ACME Airline experience today?  
    User: Can I take a dog up to 10 kilograms in the cabin?  
    AI Agent: Yes, John, you may bring a dog weighing up to 10 kilograms in the cabin. Please ensure your pet is in an appropriate carrier that fits under the seat in front of you. Additionally, it’s advisable to review ACME Airline’s pet travel policy for any specific requirements or fees.
    ```

The LLM Node responds by using the AI Agent's persona, making the customer experience more personalized and engaging.