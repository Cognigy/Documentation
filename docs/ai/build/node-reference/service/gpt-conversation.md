---
title: "GPT Conversation"
slug: "gpt-conversation"
hidden: false
---

# GPT Conversation (Research preview)

[![Version badge](https://img.shields.io/badge/Added in-v4.48.0-blue.svg)](../../../../release-notes/4.48.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/gpt-conversation.png" width="80%" />
</figure>

## Description

!!! warning "Deprecation"
    The GPT Conversation Node has been deprecated and can no longer be created in Cognigy.AI v4.85 and later. Use the [LLM Prompt Node](llm-prompt.md) to generate messages with LLM services.

!!! warning
    This Node is part of Cognigy's large-language-model research efforts and is intended solely as a preview feature. The GPT Conversation Node is not intended for production use.

The GPT Conversation Node processes and comprehends natural language input from users
and utilizes this input to generate relevant and contextual appropriate responses.
The Node configuration includes defining a persona, knowledge, and task for the AI Agent,
allowing it to generate AI-based responses to user inputs and trigger actions.
The GPT Conversation Node can support the entire conversation using Large Language Models (LLMs).

Before using this Node, set the Generative AI provider in the [Settings](../../../empower/generative-ai.md#set-up-generative-ai).

## Parameters

### Mode

Select one of these modes:

- **QnA** — is focused on answering user questions based on pre-existing knowledge of the conversation topic.
- **Transactional** — is focused on answering user questions based on pre-existing knowledge of the conversation topic and strict sequence of AI Agent's steps. In this mode, you can call an action, which should be handled in Flow logic after the GPT Conversation Node. You can use the [Lookup](../logic/lookup.md) and [If](../logic/if.md) Nodes to check if the context has the action and then perform a specific task accordingly, for example, create an HTTP request.

### Persona

| Parameter           | Type          | Description                                                                                                                                                                                                                                                                                                                          |
|---------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Company Name        | CognigyScript | The name of the company.                                                                                                                                                                                                                                                                                                             |
| Company Description | CognigyScript | Company's current activities: What is your company doing?                                                                                                                                                                                                                                                                            |
| Bot Name            | CognigyScript | The name of the AI Agent.                                                                                                                                                                                                                                                                                                            |
| Character           | Text          | The character traits of the AI Agent. For example, is the AI Agent `professional` or `patient`? Enter phrases that describe your agent's personality.                                                                                                                                                                                |
| Strictness          | Select        | The level of adherence expected from the AI Agent regarding the task: <br/> - Trivia and small talk — including trivia and small talk. <br> - Stick to the task — strictly sticking to the task. <br> - Some small talk — incorporating some small talk. <br> - Complete free style — engaging in completely free-form conversation. |

### Task Settings

Available only in Transactional mode.

| Parameter             | Type          | Description                                                                                                                                                                                                                                                                                                                 |
|-----------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bot Task              | CognigyScript | Task for the AI Agent. Examples: book an appointment, rebook a flight, order a product.                                                                                                                                                                                                                                     |
| Steps                 | CognigyScript | Description of task steps.                                                                                                                                                                                                                                                                                                  |
| Step Analytics Labels | Text          | Labels of the steps to be used in analytics.                                                                                                                                                                                                                                                                                |
| Slots to collect      | Text          | The keys of the slots to collect                                                                                                                                                                                                                                                                                            |
| Available Actions     | Text          | Actions the AI Agent can trigger. You can reuse these actions in the [Lookup](../logic/lookup.md) or [If](../logic/if.md) Nodes to check if the context has the action and then perform a specific task accordingly, for example, create an HTTP request. For more information, read [Specific Example](#specific-example). |
| Further Information   | CognigyScript | Additional information for the AI Agent, such as topics that should be avoided during the conversation.                                                                                                                                                                                                                     |

### Grounding

Grounding Knowledge is the foundational information that the AI Agent has access to, enabling it to not only construct factual responses but also understand the context of user queries and generate accurate, contextually relevant, and coherent information. 

| Parameter           | Type                 | Description                                                                                                                                                                                                                                                                                                                                                                        |
|---------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Grounding Mode      | Select               | Choose how grounding knowledge is acquired. The following modes are available: <br> - **Perform Knowledge Search** — retrieves data from the specific Knowledge Store.<br> - **Enter Custom Grounding Knowledge** — retrieves data from the knowledge you provided in the **Grounding Knowledge** field.<br> - **Do not inject grounding knowledge** — deactivates grounding mode. |
| Knowledge Store     | Select/CognigyScript | This field appears if you selected the **Perform Knowledge Search** grounding mode. <br><br>Select the Knowledge Store to use. You can add a value manually using CognigyScript.                                                                                                                                                                                                   |
| Grounding Knowledge | CognigyScript        | This field appears if you selected the **Enter Custom Grounding Knowledge** grounding mode. <br><br>Custom definable knowledge helping the AI Agent to build a factual response.                                                                                                                                                                                                   |
| Injected Slots      | CognigyScript        | Slots you want to send to the AI Agent. They will be appended to the user input.                                                                                                                                                                                                                                                                                                   |

### Advanced

| Parameter         | Type      | Description                                                                                                                                                                                   |
|-------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Temperature       | Indicator | The appropriate sampling temperature for the model. Higher values mean the model will take more risks.                                                                                        |
| Maximal Tokens    | Indicator | The maximum number of tokens to generate in the completion.                                                                                                                                   |
| Presence Penalty  | Indicator | Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood of talking about new topics.              |
| Frequency Penalty | Indicator | Number between -2.0 and 2.0. The penalty assigns a lower probability to tokens frequently appearing in the generated text, encouraging the model to generate more diverse and unique content. |
| Use Stops         | Toggle    | Whether to use a list of stop words to let Generative AI know where the sentence stops.                                                                                                       |
| Stops             | Text      | Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.                                                                    |


### Timeout Settings

| Parameter       | Type          | Description                                                                                |
|-----------------|---------------|--------------------------------------------------------------------------------------------|
| Timeout         | Select        | The maximum amount of milliseconds to wait for a response from the Generative AI provider. |
| Timeout Message | CognigyScript | The message to output if the timeout is hit.                                               |

## Examples

### General example

This video shows a live example of how the GPT Conversation Node can generate text based on the user input.

<div style="text-align:center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/WKJO4_JfIFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

At 0:12 seconds, the user receives the expected answer from the AI Agent in the form of generated Conversational AI text.

```text
Sorry to hear about the emergency, <user name>. 
Can you provide me with your ticket number 
so that I can help you get to London as quickly as possible? 
Thank you.
```

### Specific example

In the Transaction mode, you can use the [Lookup](../logic/lookup.md) or [If](../logic/if.md) to continue a flow logic. 

For both Nodes, you need to specify the action in the **Available Actions** field of the GPT Conversation Node. To do this, select the Node:

=== "Lookup"

      1. Go to the GPT Conversation Node, select the **Transaction** mode and check if the `checkAppointment` parameter exists in the **Available Actions** field. If not, add this value and copy it. 
      2. After the GPT Conversation Node, add the **Lookup** Node. 
      3. Go to the **Lookup** Node:<br>
         1. Select **CognigyScript** from the **Type** list.<br>
         2. Enter `context.action` in the **Operator** field.<br>
         3. Click **Save Node**.
           <figure>
           <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/gpt-conversation-lookup.png" width="80%" />
         </figure>
      4. Go to the Case of the Lookup Node:<br>
         1. Paste`checkAppointment` in the **Value** field.<br>
         2. Click **Save Node**.
       <figure>
           <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/gpt-conversation-lookup-case.png" width="80%" />
         </figure>
      5. In the Flow editor, add the additional Say Node with the **Text** type output. You can also use the HTTP Node.
      6. Test this Flow via the Interaction Panel.

=== "IF"

      1. Go to the GPT Conversation Node, select the **Transaction** mode and check if the `checkAppointment` parameter exists in the **Available Actions** field. If not, add this value and copy it.
      2. After the GPT Conversation Node, add the IF Node.
      3. Go to the **IF** Node:<br>
         1. Select **CognigyScript** from the **Type** list.<br>
         2. Enter `context.action === "checkAppointment"` in the **Condition** field.<br>
         3. Select **exists** from the list.
         4. Click **Save Node**.
         <figure>
           <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/gpt-conversation-if.png" width="80%" />
         </figure>
      4. In the Flow editor, add the additional Say Node with the **Text** type output. You can also use the HTTP Node.
      5. Test this Flow via the Interaction Panel.

## More Information

- [Generative AI](../../../empower/generative-ai.md)
- [LLM Prompt Node](llm-prompt.md)