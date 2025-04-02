---
title: "Handover to Agent" 
slug: "handover-to-agent" 
hidden: false 
tags:
   - handovers
   - handover providers
   - handover to agent node
   - contact centers
---

# Handover to Agent

[![Version badge](https://img.shields.io/badge/Updated in-v4.97-blue.svg)](../../../../release-notes/4.97.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/handover-to-agent.png" width="50%" />
</figure>

## Description

The Handover to Agent Node enables AI Agents to pass on conversations to human agents in contact centers.
This Node is useful when your AI Agent is unable to handle the complexity of the inquiry
or when a human touch is necessary to address sensitive issues or provide personalized assistance.
Besides adding this Node to the Flow,
create a [handover provider](../../../escalate/handover-reference/overview.md) and an [Endpoint](../../../deploy/endpoint-reference/overview.md)
and set up the connection to your contact center.

### Handover Process

The handover process contains the following steps:

1. **Identifying Edge Cases**. When a user request is too specific for the AI Agent, it can suggest forwarding the user to a human agent without changing channels.
2. **Integration with Agent Handover**. Once the **Handover to Agent** Node is triggered, it sends a handover request to the contact center configured in the [Endpoint Handover Settings](../../../deploy/endpoints/handover-settings.md), allowing a human agent to take over the conversation.
3. **Flow Pausing and Resumption**. When a handover is initiated, the Flow pauses until the end user cancels the request or an agent finishes the conversation. Upon completion, the Flow resumes execution below the Handover to Agent Node.
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

In case a channel doesn't support handover, the error reason is marked as `unsupported`. However, if there is an issue when contacting the handover provider, the error reason is marked as `error`.

Use the **Handover Status** [Token](../../tokens.md) to access handover status in Flow.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/handover-flow.png" width="80%" />
</figure>

### Handover Status

To configure the AI Agent's behavior based on the handover status,
use a [Lookup](../logic/lookup.md) Node to handle different outcomes.
Select the **Handover Status** option in the Lookup Node settings.

### Handover Providers

For a list of supported Handover services,
refer to the [Handover Providers Overview](../../../escalate/handover-reference/overview.md) documentation.

## Parameters

| Parameter                        | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                      |
|----------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Handover Provider                | Selector      | Select the handover provider from the list. The **Legacy** option is selected by default, meaning the node configuration points to the settings in **Deploy > Endpoints > Handover Settings**. To select a provider from the list, you need to either migrate your settings to the [Handover Providers](../../../escalate/migration.md) interface or create this handover provider from scratch. |
| Handover Accepted Message        | CognigyScript | The message to be outputted when the Handover is requested.                                                                                                                                                                                                                                                                                                                                      |
| Repeat Handover Accepted Message | Toggle        | Enable to repeatedly output the Handover Accepted Message if the user sends a message while waiting in the queue for an agent.                                                                                                                                                                                                                                                                   |

??? info "Cancel Handover Options"

    | Parameter          | Type          | Description                                                                       |
    |--------------------|---------------|-----------------------------------------------------------------------------------|
    | Cancel Intent      | CognigyScript | The Intent the user has to trigger to cancel the Handover request.                |
    | Cancel Button Text | CognigyScript | The text for a quick reply button that cancels the Handover request when clicked. |

??? info "On Resolve Options"

    | Parameter                           | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    |-------------------------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Flow Continuation                   | List   | <ul><li>**Below this Node** – the user is taken to the Node below the Handover Node once the agent resolves the conversation. In this case, the user would continue in a different flow, but the starting point would be the Node below the Handover Node.</li><li>**At current AgentInject Entrypoint** – the user continues the chat at the current agent inject entrypoint. This option allows the agent to guide the user to a specific part of the chat and then give control back to the user.</li></ul> |
    | Send resolve event to Virtual Agent | Toggle | Sending an event when the AI Agent resolves a conversation.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

??? info "Live Agent Settings"

    | Parameter                       | Description                                                                                                                                                                                                                                                                                                                                                            |
    |---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Live Agent Inbox Id             | Enter the Inbox ID that you obtained in the [previous step](../../../escalate/handover-reference/live-agent.md).                                                                                                                                                                                                                                                       |
    | Skills                          | Enter a list of skills that should be used to filter the available agents. For example, `technical support, billing`.                                                                                                                                                                                                                                                  |
    | Languages                       | Enter a list of languages that should be used to filter the available agents. For example, `english, spanish`.                                                                                                                                                                                                                                                         |
    | Priority                        | Select a priority for the conversation from the list. For example, `Urgent`.                                                                                                                                                                                                                                                                                           |
    | Get Queue Position              | Enable the system to retrieve the end user's current queue position. This parameter is inactive by default.                                                                                                                                                                                                                                                            |
    | Update Interval                 | Specify the interval, in seconds, for how often to receive updates on the queue status. This parameter appears if **Get Queue Position** is selected.                                                                                                                                                                                                                  |
    | Get Estimated Wait Time         | Enable the retrieval of the estimated wait time for the end user. This parameter is inactive by default.                                                                                                                                                                                                                                                               |
    | Wait Time Update Interval       | Set the interval, in seconds, for how often to receive updates on estimated wait time. This parameter appears if **Get Estimated Wait Time** is selected.                                                                                                                                                                                                              |
    | Alternative Update              | The alternative update options when certain conditions are met. This parameter is inactive by default.                                                                                                                                                                                                                                                                 |
    | Maximum Queue Position          | Set the threshold for the maximum queue position. If this threshold is reached, the alternative text is sent. This parameter appears if **Alternative Update** is selected.                                                                                                                                                                                            |
    | Maximum Estimated Wait Time     | Define the maximum estimated wait time in milliseconds. If this duration is exceeded, the alternative text is sent. This parameter appears if **Alternative Update** is selected.                                                                                                                                                                                      |
    | Alternative Text                | The message to be sent when either the maximum queue position or maximum wait time is reached. This parameter appears if **Alternative Update** is selected.                                                                                                                                                                                                           |
    | Enable User Disconnects Message | Notify human agents when an end user disconnects from the chat. The parameter is enabled by default. When the parameter is enabled, the message `User left the conversation` is sent as soon as the user closes the tab with the chat or switches to a new URL address within the current tab.                                                                         |
    | Enable User Connects Message    | Notify human agents when an end user reconnects to the chat. The parameter is enabled by default. When the parameter is enabled, the message `User joined the conversation` appears in the chat as soon as the end user opens a new URL on the same tab as the chat and then returns to the chat tab by clicking the **←** (back arrow) at the top bar in the browser. |

    For more information, read the [Live Agent Handover Setup](../../../../live-agent/getting-started/live-agent-setup/live-agent-setup-handover-flow.md) and [Real-Time Queue Notifications](../../../../live-agent/conversation/conversation-queue/real-time-queue-notifications.md) documentation.

??? info "Salesforce Settings"

    | Parameter           | Description                                                                                                                                                                                                                                                                                                                                                   |
    |---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Live Agent Base URL | The Base URL should be retrieved from the Salesforce installation. On the **Home** page, navigate to **Feature Settings > Service > Chat > Chat Settings**. On the **Chat Settings** page, go to the **API Information > Chat API Endpoint**. Copy the Endpoint value without the `/chat/rest` part. Example: `https://x.xxx-xx-xxx.salesforceliveagent.com`. |
    | API Version         | The API version value is `52`.                                                                                                                                                                                                                                                                                                                                |
    | Organization ID     | The ID of your organization in Salesforce.                                                                                                                                                                                                                                                                                                                    |
    | Deployment ID       | The ID of your deployment in Salesforce.                                                                                                                                                                                                                                                                                                                      |
    | Button ID           | The ID of your button for the related deployment in Salesforce. For more information, see [Salesforce Handover](../../../escalate/handover-reference/salesforce.md#create-an-endpoint).                                                                                                                                                                       |

    For more information, read the [Salesforce Handover](../../../escalate/handover-reference/salesforce.md#create-an-endpoint) documentation.

??? info "Genesys Settings"

    | Parameter                       | Description                                                                                                                                                                                                                                                                                                                                                            |
    |---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Language                        | Specify a language for the conversation. For example, `english`, `spanish`, `german`.                                                                                                                                                                                                                                                                                  |
    | Skills                          | Define skills for the conversation. For example, `escalation`.                                                                                                                                                                                                                                                                                                         |
    | Priority                        | Set the priority for the conversation. For example, `1`. <br> If a priority is set, it triggers a flow in Genesys to prioritize or de-prioritize the conversation within the queue. <br> Note that this functionality requires the appropriate flow to be set up in Genesys.                                                                                           |
    | Enable User Disconnects Message | Notify human agents when an end user disconnects from the chat. The parameter is enabled by default. When the parameter is enabled, the message `User left the conversation` is sent as soon as the user closes the tab with the chat or switches to a new URL address within the current tab.                                                                         |
    | Enable User Connects Message    | Notify human agents when an end user reconnects to the chat. The parameter is enabled by default. When the parameter is enabled, the message `User joined the conversation` appears in the chat as soon as the end user opens a new URL on the same tab as the chat and then returns to the chat tab by clicking the **←** (back arrow) at the top bar in the browser. |
    | Custom Attributes               | Add custom attributes in the `Key: Value` format, which allows you to include additional information.                                                                                                                                                                                                                                                                  |

    Example for the **Custom Attributes** parameter:

    ```json
    {
      "section": "section A",
      "region": "Europe"
    }
    ```
    For more information,
    read
    the [Genesys Cloud Guest Chat](../../../escalate/handover-reference/genesys-cloud-guest-chat.md#prerequisites) and [Genesys Cloud Open Messaging](../../../escalate/handover-reference/genesys-cloud-open-messaging.md) documentation.

??? info "8x8 Settings"

    | Parameter           | Description                                                                                                                                                                                                                                                                    |
    |---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | 8x8 Channel Id      | Specify the channel ID that you created during the 8x8 configuration. <br> You can find this ID in the 8x8 admin console. Navigate to **Channels > Chat API**. In the channel list, find the channel that you created. Copy the **ID** from the channel row.                   |
    | 8x8 Queue Id        | Specify the header value required for authenticating API calls to the 8x8 system. <br> You can find this ID in the 8x8 admin console. Navigate to **Channels > Chat API**. In the channel list, find the channel that you created. Copy the **Queue ID** from the channel row. |
    | 8x8 JSON properties | Extend 8x8 properties with custom JSON.                                                                                                                                                                                                                                        |

    For more information, read the [8x8 Handover Setup](../../../escalate/handover-reference/8x8.md#configure-8x8) documentation.  

??? info "Ring Central Engage Settings"

    | Parameter                       | Type                                                                                                                                                                                                                                                                                                                                                                   | Description |
    |---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
    | Additional Category Ids         | IDs to be passed to the Ring Central Engage handover provider.                                                                                                                                                                                                                                                                                                         |             |
    | Enable User Disconnects Message | Notify human agents when an end user disconnects from the chat. The parameter is enabled by default. When the parameter is enabled, the message `User left the conversation` is sent as soon as the user closes the tab with the chat or switches to a new URL address within the current tab.                                                                         |             |
    | Enable User Connects Message    | Notify human agents when an end user reconnects to the chat. The parameter is enabled by default. When the parameter is enabled, the message `User joined the conversation` appears in the chat as soon as the end user opens a new URL on the same tab as the chat and then returns to the chat tab by clicking the **←** (back arrow) at the top bar in the browser. |             |

    For more information, read the [Ring Central Engage Integration](../../../escalate/handover-reference/ring-central-engage.md) documentation.

??? info "Event Settings"

    | Parameter         | Type   | Description                                             |
    |-------------------|--------|---------------------------------------------------------|
    | Send Queue Event  | Toggle | Sends an event to the Flow once the Handover is queued. |
    | Send Active Event | Toggle | Sends an event to the Flow once the Handover is active. |


## More Information

- [Handover Providers](../../../escalate/handover-reference/overview.md)
- [Check Agent Availability Node](check-agent-availability.md)
- [User Inactivity Detection and Handling](../../../escalate/user-inactivity-detection.md)