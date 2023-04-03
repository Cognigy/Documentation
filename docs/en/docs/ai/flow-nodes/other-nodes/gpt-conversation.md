---
title: "GPT Conversation"
slug: "gpt-conversation"
hidden: false
---

# GPT Conversation (Research preview)

[![Version badge](https://img.shields.io/badge/Added in-v4.48(Research preview)-purple.svg)](../../../release-notes/release-notes.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/gpt-conversation.png" width="80%" />
</figure>

## Description

<div class="divider"></div>

!!! warning
    This Node is part of Cognigy's large-language-model research efforts and is intended solely as a preview feature. The GPT Conversation Node is not intended for production use.

The GPT Conversation Node processes and comprehends natural language input from users and utilizes this input to generate relevant and contextually appropriate responses. The Node configuration includes defining a persona, knowledge, and task for the bot, allowing it to generate AI-based responses to user inputs and trigger actions. The GPT Conversation Node can support the entire conversation using Large Language Models (LLMs).

Before using this Node, set the Generative AI provider in the [Settings](../../generative-ai.md#set-up-generative-ai).

## Settings

### Mode

Select one of these modes:

- **QnA** — is focused on answering user questions based on pre-existing knowledge of the conversation topic.
- **Transactional** — is focused on answering user questions based on pre-existing knowledge of the conversation topic and strict sequence of virtual agent's steps. In this mode, you can call an action, which should be handled in Flow logic after the GPT Conversation Node. You can use the [If Node](../logic/if.md) to check if the context has the action and then perform a specific task accordingly, for example, create an HTTP request.

### Persona

| Parameter           | Type          | Description                                                                                                                                                                                                                                                                                                                               |
|---------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Company Name        | CognigyScript | The name of the company.                                                                                                                                                                                                                                                                                                                  |
| Company Description | CognigyScript | Company's current activities: What is your company doing?                                                                                                                                                                                                                                                                                 |
| Bot Name            | CognigyScript | The maximum number of tokens to generate in the completion.                                                                                                                                                                                                                                                                               |
| Character           | Text          | Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood of talking about new topics.                                                                                                                                                          |
| Strictness          | Select        | The level of adherence expected from the virtual agent regarding the task: <br/> - Trivia and small talk — including trivia and small talk. <br> - Stick to the task — strictly sticking to the task. <br> - Some small talk — incorporating some small talk. <br> - Complete free style — engaging in completely free-form conversation. |

### Task Settings

Available only in Transactional mode.

| Parameter             | Type          | Description                                                                                  |
|-----------------------|---------------|----------------------------------------------------------------------------------------------|
| Bot Task              | CognigyScript | Task for the virtual agent. Examples: book an appointment, rebook a flight, order a product. |
| Steps                 | CognigyScript | Description of task steps.                                                                   |
| Step Analytics Labels | Text          | Labels of the steps to be used in analytics.                                                 |
| Slots to collect      | Text          | The keys of the slots to collect                                                             |
| Available Slots       | Text          | Actions the virtual agent can trigger.                                                       |
| Further Information   | CognigyScript | Actions the virtual agent can trigger.                                                       |



### Grounding

| Parameter           | Type          | Description                                                                      |
|---------------------|---------------|----------------------------------------------------------------------------------|
| Grounding Knowledge | CognigyScript | Knowledge to help the virtual agent build a factual response. Optional field.    |
| Injected Slots      | CognigyScript | Slots you wish to send to the virtual agent. Will be appended to the user input. |

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
| Timeout         | Selector      | The maximum amount of milliseconds to wait for a response from the Generative AI Provider. |
| Timeout Message | CognigyScript | The message to output if the timeout is hit.                                               |

## Examples

This video shows a live example of how the GPT Conversation Node can generate text based on the user input.

<div style="text-align:center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/WKJO4_JfIFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

At 0:12 second, the user receives the expected answer from the virtual agent in the form of generated Conversational AI text:

```text
Sorry to hear about the emergency, <user name>. 
Can you please provide me with your ticket number 
so that I can help you get to London as quickly as possible? 
Thank you.
```

## More Information

- [Generative AI](../../generative-ai.md)
- [GPT Conversation Node](gpt-conversation.md)