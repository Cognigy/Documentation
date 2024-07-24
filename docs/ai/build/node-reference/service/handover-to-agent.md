---
title: "Handover to Agent" 
slug: "handover-to-agent" 
hidden: false 
---

# Handover to Agent

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/handover-to-agent.png" width="100%" />
</figure>

## Description

The Handover to Agent Node is a tool
that enables AI Agents to pass on conversations to human agents in contact centers.
This tool is useful when your AI Agent is unable to handle the complexity of the inquiry
or when a human touch is necessary to address sensitive issues or provide personalized assistance.
Besides adding this Node to the Flow, select a [handover provider](../../../escalate/handover-reference/overview.md) within your Endpoint and set up the connection to your contact center.

### Handover Process

A handover process contains the following steps:

1. **Identifying Edge Cases**. When a user request is too specific for the AI Agent, it can suggest forwarding the user to a human agent without changing channels.

2. **Integration with Agent Handover**. Once the **Handover to Agent** Node is triggered, it sends a handover request to the contact center configured in the [Endpoint Handover Settings](../../../deploy/endpoints/handover-settings.md), allowing a human agent to take over the conversation.

3. **Flow Pausing and Resumption**. When a handover is initiated, the Flow pauses until the customer cancels the request or an agent finishes the conversation. Upon completion, the Flow resumes execution below the Handover to Agent Node.

4. **Handover Status**. The handover status can be:
    - **completed** — the agent finished the Handover.
    - **cancelled** — the user canceled the request.
    - **error** — an error occurred during the Handover.

    The object that is exposed has the following structure:
    
    ```json
    {
        "handover": {
            "status": "completed"
        }
    }
    ```
    
    In case of an `error` status, the handover object is extended to contain additional information:
    
    ```json
    {
        "handover": {
            "status": "completed",
            "error": {
              "reason": "unsupported",
              "message": ""
            }
        }
    }
    ```

In case a channel does not support handover, the error reason is marked as `unsupported`. However, if there is an issue when contacting the handover provider, the error reason is marked as `error`.

Use the **Handover Status** [Token](../../tokens.md) to access handover status in Flow.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/handover-flow.png" width="100%" />
</figure>

### Handover Status

To configure the AI Agent's behavior based on the handover status,
use a [Lookup](../logic/lookup.md) Node to handle different outcomes.
Select the **Handover Status** option in the Lookup Node settings.

### Handover Providers

For a list of supported Handover services,
refer to the [Handover Providers Overview](../../../escalate/handover-reference/overview.md) documentation.

## Settings

### General Settings

| Parameter                        | Type          | Description                                                                                                                    |
|----------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------|
| Handover Accepted Message        | CognigyScript | The message to be outputted when the Handover is requested.                                                                    |
| Repeat Handover Accepted Message | Toggle        | Enable to repeatedly output the Handover Accepted Message if the user sends a message while waiting in the queue for an agent. |

### Cancel Handover Options

| Parameter          | Type          | Description                                                                       |
|--------------------|---------------|-----------------------------------------------------------------------------------|
| Cancel Intent      | CognigyScript | The Intent the user has to trigger to cancel the Handover request.                |
| Cancel Button Text | CognigyScript | The text for a quick reply button that cancels the Handover request when clicked. |

### On Resolve options

| Parameter                           | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-------------------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Flow Continuation                   | Selector | - **Below this Node** - the user will be taken to the node below the Handover node once the agent resolves the conversation. In this case, the user would continue in a different flow, but the starting point would be the node below the Handover node. <br> - **At current AgentInject Entrypoint** - the user will continue the chat at the current agent inject entrypoint. This option allows the agent to guide the user to a specific part of the chat and then give control back to the user. | 
| Send resolve event to AI Agent | Toggle   | Sending an event when the AI Agent resolves a conversation.                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Live Agent Settings

| Parameter           | Description                                                                                                           | 
|---------------------|-----------------------------------------------------------------------------------------------------------------------|
| Live Agent Inbox Id | Enter the Inbox ID that you obtained in the [previous step](../../../escalate/handover-reference/live-agent.md).      |
| Skills              | Enter a list of skills that should be used to filter the available agents. For example, `technical support, billing`. |
| Languages           | Enter a list of languages that should be used to filter the available agents. For example, `english, spanish`.        |
| Priority            | Select a priority for the conversation from the list. For example, `Urgent`.                                          |

For more information, read the [Live Agent Handover Setup](../../../../live-agent/getting-started/live-agent-setup/live-agent-setup-handover-flow.md) documentation.

### Salesforce Settings

| Parameter           | Description                                                                                                                                                                                                                                                                                                                                                   | 
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Live Agent Base URL | The Base URL should be retrieved from the Salesforce installation. On the **Home** page, navigate to **Feature Settings > Service > Chat > Chat Settings**. On the **Chat Settings** page, go to the **API Information > Chat API Endpoint**. Copy the Endpoint value without the `/chat/rest` part. Example: `https://x.xxx-xx-xxx.salesforceliveagent.com`. |
| API Version         | The API version value is `52`.                                                                                                                                                                                                                                                                                                                                |
| Organization ID     | The ID of your organization in Salesforce.                                                                                                                                                                                                                                                                                                                    |
| Deployment ID       | The ID of your deployment in Salesforce.                                                                                                                                                                                                                                                                                                                      |
| Button ID           | The ID of your button for the related deployment in Salesforce. For more information, see [Salesforce Handover](../../../escalate/handover-reference/salesforce.md#create-an-endpoint).                                                                                                                                                                       |

For more information, read the [Salesforce Handover](../../../escalate/handover-reference/salesforce.md#create-an-endpoint) documentation.

### Genesys Settings

| Parameter         | Description                                                                                                                                                                                                                                                                  | 
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Language          | Specify a language for the conversation. For example, `english`, `spanish`, `german`.                                                                                                                                                                                        |
| Skills            | Define skills for the conversation. For example, `escalation`.                                                                                                                                                                                                               |
| Priority          | Set the priority for the conversation. For example, `1`. <br> If a priority is set, it triggers a flow in Genesys to prioritize or de-prioritize the conversation within the queue. <br> Note that this functionality requires the appropriate flow to be set up in Genesys. |
| Custom Attributes | Add custom attributes in the `Key: Value` format, which allows you to include additional information.                                                                                                                                                                        |

Example for parameter **Custom Attributes**:

```json
{
  "section": "section A",
  "region": "Europe"
}
```
For more information,
read
the [Genesys Cloud Guest Chat](../../../escalate/handover-reference/genesys-cloud-guest-chat.md#prerequisites) and [Genesys Cloud Open Messaging](../../../escalate/handover-reference/genesys-cloud-open-messaging.md) documentation.

### 8x8 Settings

| Parameter           | Description                                                                                                                                                                                                                                                                    | 
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 8x8 Channel Id      | Specify the channel ID that you created during the 8x8 configuration. <br> You can find this ID in the 8x8 admin console. Navigate to **Channels > Chat API**. In the channel list, find the channel that you created. Copy the **ID** from the channel row.                   |
| 8x8 Queue Id        | Specify the header value required for authenticating API calls to the 8x8 system. <br> You can find this ID in the 8x8 admin console. Navigate to **Channels > Chat API**. In the channel list, find the channel that you created. Copy the **Queue ID** from the channel row. |
| 8x8 JSON properties | Extend 8x8 properties with custom JSON.                                                                                                                                                                                                                                        |

For more information, read the [8x8 Handover Setup](../../../escalate/handover-reference/8x8.md#configure-8x8) documentation.  

### Ring Central Engage Settings

| Parameter               | Type           | Description                                                    |
|-------------------------|----------------|----------------------------------------------------------------|
| Additional Category Ids | CognigyScript  | IDs to be passed to the Ring Central Engage handover provider. |

For more information, read the [Ring Central Engage Integration](../../../escalate/handover-reference/ring-central-engage.md) documentation.

### Event Settings

| Parameter         | Type   | Description                                             |
|-------------------|--------|---------------------------------------------------------|
| Send Queue Event  | Toggle | Sends an event to the Flow once the Handover is queued. |
| Send Active Event | Toggle | Sends an event to the Flow once the Handover is active. |


## More Information

- [Handover Providers](../../../escalate/handover-reference/overview.md)
- [Check Agent Availability Node](check-agent-availability.md)
- [User Inactivity Detection and Handling](../../../escalate/user-inactivity-detection.md)