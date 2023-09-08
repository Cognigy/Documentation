---
title: "Check Agent Availability"
slug: "check-agent-availability"
description: "The Check Agent Availability Node verifies the availability of agents with specific skills. With this Node, you can manage your Flow, for example, send notifications to the user that the agent is unavailable at the moment or suggest an alternative response."
hidden: false
---

# Check Agent Availability

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/services/check-agent-availability.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node checks the availability of agents with specific skills. 
With this Node, you can manage your Flow,
for example, send notifications to the user that the agent is unavailable at the moment,
or suggest an alternative response.

The Check Agent Availability Node supports the following handover providers:

- [Cognigy Live Agent](#live-agent)
- [Genesys Cloud](#genesys-cloud)
- [Chatwoot](#chatwoot)

## Settings

### Live Agent 

| Parameter           | Type          | Description                                                                   |
|---------------------|---------------|-------------------------------------------------------------------------------|
| Skills              | List          | A list of skills that should be used to filter the available human agents.    |
| Live Agent Inbox Id | CognigyScript | The ID of your Inbox in Live Agent.                                           |
| Languages           | List          | A list of languages that should be used to filter the available human agents. |


### Genesys Cloud

| Parameter       | Type | Description                                                                         |
|-----------------|------|-------------------------------------------------------------------------------------|
| Skills          | List | A list of skills that should be used to filter the available human agents.          |
| Profile Skills  | List | A list of profile skills that should be used to filter the available human agents.  |
| Language Skills | List | A list of language skills that should be used to filter the available human agents. |


### Chatwoot


| Parameter         | Type          | Description                      |
|-------------------|---------------|----------------------------------|
| Chatwoot Inbox Id | CognigyScript | The ID of our Inbox in Chatwoot. |

### Storage Options

| Parameter                     | Type          | Description                                                                                                                                                                            |
|-------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Where to store the result     | Select        | The storage for the search results. Select a storage:<br> - **Input** — the content will be stored in the Input object.<br> - **Context** — the content will be stored in the Context. |
| Input Key to store result     | CognigyScript | The location in the input object where the result will be stored. For example, `input.knowledgeSearch`.                                                                                |
| Input Context to store result | CognigyScript | The location in the context object where the result will be stored. For example, `context.knowledgeSearch`.                                                                            |


### Error Handling

| Parameter                     | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|-------------------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Error Logging                 | Select | You can select one of the Error Logging options:<br>- **Don't log errors** — the setting does not allow errors to be logged. It's suitable for environments where error tracking is not desired, such as production systems, to maintain clean logs.<br>- **Log error codes and responses** — the setting records essential information, including error codes such as HTTP status codes, and the responses received from the server. It's useful for basic troubleshooting and understanding error contexts.<br>- **Log full errors and request payloads** — the setting provides comprehensive error logging. It not only captures error codes and responses but also logs the complete error messages or details and the entire request payload sent to the server. Be cautious with this option, as it can expose sensitive data. It's most beneficial for in-depth debugging and diagnostics. |
| Abort Flow Execution on Error | Toggle | Halts Flow Execution on HTTP status codes greater than 299.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Example

To build a simple Flow using the Check Agent Availability Node, follow these steps:

1. In the Flow editor, add a **Check Agent Availability Node**.
2. In the **Check Agent Availability** Node editor, enter the required values. For example, for the Live Agent handover provider, you need to specify **Live Agent Inbox Id**, **Skills**, and **Languages** that help you sort available agents.
3. Click **Save** Node.
4. Below the Check Agent Availability Node, add an IF Node.
5. Open the IF Node Editor.
6. In the **Condition** field, click ![token](../../../assets/icons/token.svg) and select the **Available Agents** Token.
7. Specify the **> 0** condition.
8. Click **Save Node**.
9. Below your **Then** child Node, add a **Handover to Agent** Node. Enter the required values for your handover provider. For example, for the Live Agent handover provider, you need to specify **Live Agent Inbox Id**, **Skills**, and **Languages** that help you route the conversation to available agents.
10. Click **Save Node**.
11. Below the **Else** child Node, add a **Say** Node. 
12. In the **Say** Node editor, in the **Text** field, specify the following text: `All of our agents are currently assisting other customers. Please try again later`. 
13. Click **Save Node**.

To test your Flow, use [Demo Webchat](../../endpoints/webchat/integrated-demo-page.md).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/services/check-agent-availability-flow.png" width="100%" />
</figure>

## More information

- [Agent to Handover Node](../../handover-providers/live-agent-handover.md)
- [IF Node](../logic/if.md)
- [Say Node](../message/say.md)