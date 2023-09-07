---
title: "Check Agent Availability"
slug: "check-agent-availability"
hidden: false
---

# Check Agent Availability

This Node checks the availability of agents with specific skills. 
With this node, you can manage your flow, for example, send a notification to the user that the agent is unavailable at the moment and suggest an alternative response.


The Check Agent Availability Node supports the following handover providers:

- [Cognigy Live Agent](#live-agent)
- [Genesys Cloud](#genesys-cloud)
- [Chatwoot](#chatwoot)

## Settings

### Live Agent 

| Parameter           | Type          | Description                                                            |
|---------------------|---------------|------------------------------------------------------------------------|
| Skills              | List          | A list of skills that should be used to filter the available agents    |
| Live Agent Inbox Id | CognigyScript | Inbox Id in Live Agent                                                 |
| Languages           | List          | A list of languages that should be used to filter the available agents |


### Genesys Cloud

| Parameter       | Type | Description                                                                  |
|-----------------|------|------------------------------------------------------------------------------|
| Skills          | List | A list of skills that should be used to filter the available agents          |
| Profile Skills  | List | A list of profile skills that should be used to filter the available agents  |
| Language Skills | List | A list of language skills that should be used to filter the available agents |


### Chatwoot


| Parameter         | Type          | Description          |
|-------------------|---------------|----------------------|
| Chatwoot Inbox Id | CognigyScript | Inbox Id in Chatwoot |

### Storage Options

| Parameter                     | Type          | Description                                                                                                                                                                    |
|-------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Where to store the result     | Select        | The storage for the search results. Select a storage:<br> - Input - the content will be stored in the Input object.<br> - Context - the content will be stored in the Context. |
| Input Key to store result     | CognigyScript | The location in the input object where the result will be stored. For example, `input.knowledgeSearch`.                                                                        |
| Input Context to store result | CognigyScript | The location in the context object where the result will be stored. For example, `context.knowledgeSearch`.                                                                    |


### Error Handling

| Parameter                     | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-------------------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Error Logging                 | Select | You can select one of the Error Logging options:<br>- Don't log errors — the setting does not allow errors to be logged. It's suitable for environments where error tracking is not desired, such as production systems, to maintain clean logs.<br>- Log error codes and responses — the setting records essential information, including error codes such as HTTP status codes, and the responses received from the server. It's useful for basic troubleshooting and understanding error contexts.<br>- Log full errors and request payloads — the setting provides comprehensive error logging. It not only captures error codes and responses but also logs the complete error messages or details and the entire request payload sent to the server. Be cautious with this option, as it can expose sensitive data. It's most beneficial for in-depth debugging and diagnostics. |
| Abort Flow Execution on Error | Toggle | Halts Flow Execution on HTTP status codes greater than 299.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Example

1. In the Flow editor, add a **Check Agent Availability Node**.
2. In the **Check Agent Availability Node** editor, enter the required values. For example, for the Live Agent handover provider, you need to specify **Live Agent Inbox Id**, **Skills**, and **Languages** that help you sort available agents.
3. Click **Save** Node.
4. Below the Check Agent Availability Node, add an IF Node.
5. Open the IF Node Editor.
6. In the **Condition** field, click ![token](../../../assets/icons/token.svg) and select the **Available Agents** Token.
7. Select the **exists** option from the condition list.
8. Click **Save** Node.
9. Below your **Then** child Node, add a **Handover to Agent** Node. Enter the required values for your handover provider. For example, for the Live Agent handover provider, you need to specify **Live Agent Inbox Id**, **Skills**, and **Languages** that help you route the conversation to available agents.
10. Click **Save** Node.
