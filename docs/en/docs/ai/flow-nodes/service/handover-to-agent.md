---
title: "Handover to Agent" 
slug: "handover-to-agent" 
hidden: false 
---

# Handover to Agent

The **Handover to Agent** Node has both general and specific settings for each handover provider.

The General settings are described below and the specific settings you can find in the [Handover Providers Overview](../../handover-providers/overview.md).

## Description 

Human support **Agent Handover** is a critical tool for incorporating virtual agents into existing contact center workflows. Direct communication between virtual agents and human agents will enrich the experience of a customer beyond the capabilities of a Conversational AI.

### Handover Processes

If a request from a user is an edge case that is just too specific to be handled by the Bot, the bot can offer the user to be forwarded to a support agent, a real human, that can intercept the conversation and help the customer manually without the need to change channels.

**Agent Handover Processes** can be integrated in a Flow by using the **Handover to Agent Node**. If this Node is triggered, a Handover request from the customer is sent to the **Contact Center Service** that has been configured in the [Endpoint Handover Settings]({{config.site_url}}ai/endpoints/handover-settings/). A human agent can then intercept and take over the conversation from the virtual agent.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/handover-flow.png" width="100%" />
</figure>

Once a Handover has been initiated, the normal execution of the Flow is paused until the customer who is waiting for a support agent cancels the request, or until an agent finishes the conversation. Before the conversation with an agent has started, the customer can cancel the request and go back to the normal flow execution by triggering a selected intent or a dedicated quick reply.

!!! note "New Handover Node"
    The old Handover Node has been replaced with a `Handover To Agent` Node. The content below is only applicable to the new `Handover to Agent` Node

When the Handover is finished, the Flow execution will continue below the Handover to Agent Node. A handover property will be added to the input object, which exposes information about why the handover was finished. The object that is exposed has the following structure:

```JavaScript
{
    "handover": {
        "status": "completed"
    }
}
```

The status can have the following values:

| Handover Status | Description                                    |
|-----------------|------------------------------------------------|
| completed       | The Handover was finished by the agent         |
| cancelled       | The user has cancelled the Handover request    |
| error           | An error occurred when requesting the Handover |

In case of an error, the handover object is extended to contain additional information:

```JavaScript
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

The error reason can either be `unsupported` in case the user channel does not support doing a Handover, or `error` if something went wrong when contacting the Handover Provider.

There is also a `Handover Status` [Token]({{config.site_url}}ai/resources/manage/tokens/) which can be used to access the handover status in the Flow.

### Handling the Handover Status

To configure different behavior of the Virtual Agent based on the Handover status, you can use a `Lookup` Node to handle the different possible outcomes of a Handover. In the `Lookup` Node you can select to lookup on the `Handover Status`.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/handover-node-usage.png" width="100%" />
</figure>

### Handover Providers

For a list of supported Handover services, refer to the [Handover Providers Overview](../../handover-providers/overview.md).

## Settings

### General Settings

| Parameter                        | Type          | Description                                                                                                                |
|----------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------|
| Handover Accepted Message        | CognigyScript | The message to output if the Handover was requested.                                                                       |
| Repeat Handover Accepted Message | Toggle        | Whether to re-output the Handover Accepted Message when the user sends a message while waiting in the queue for an agent.  |

### Cancel Handover Options

| Parameter          | Type          | Description                                                                       |
|--------------------|---------------|-----------------------------------------------------------------------------------|
| Cancel Intent      | CognigyScript | The intent the user has to trigger to cancel the Handover request.                 |
| Cancel Button Text | CognigyScript | The text for a quick reply button that cancels the Handover request when clicked. |

### On Resolve options

| Parameter                           | Type     | Description                                                                                         |
|-------------------------------------|----------|-----------------------------------------------------------------------------------------------------|
| Flow Continuation                   | Selector | - Below this Node - the user will be taken to the node below the Handover node once the agent resolves the conversation. In this case, the user would continue in a different flow, but the starting point would be the node below the Handover node. <br> - At current AgentInject Entrypoint - the user will continue the chat at the current agent inject entrypoint. This option allows the agent to guide the user to a specific part of the chat and then give control back to the user.                       | 
| Send resolve event to Virtual Agent | Toggle   | Sending an event when the virtual agent resolves a conversation.                                    |

### Live Agent Settings

| Parameter                 | Description               | 
|---------------------------|---------------------------|
| **Live Agent Inbox Id**   | Enter the Inbox ID that you obtained in the [previous step](live-agent-setup-handover-endpoint.md#account-id-and-api-key-in-live-agent).    |
| **Skills**                | Enter a list of skills that should be used to filter the available agents. For example, `technical support, billing`.                       |
| **Languages**             | Enter a list of languages that should be used to filter the available agents. For example, `english, spanish`.                            |
| **Priority**              | Select a priority for the conversation from the list. For example, `Urgent`.                                                                |

### Salesforce Settings

(### Create an Endpoint)

| Parameter                 | Description               | 
|---------------------------|---------------------------|
| **Live Agent Base URL**   | the Base URL which you need to retrieve from the Salesforce installation. On the **Home** page, navigate to **Feature Settings > Service > Chat > Chat Settings**. On the **Chat Settings** page, go to the **API Information > Chat API Endpoint**. Copy the Endpoint value without the `/chat/rest` part, for example `https://x.xxx-xx-xxx.salesforceliveagent.com`.                                    |
| **API Version**           | the value of the API version is `52`.                |
| **Organization ID**       | the ID of your organization in Salesforce.           |
| **Deployment ID**         | the ID of your deployment in Salesforce.             |
| **Button ID**             | the ID of your button for related deployment in Salesforce. <br>  o to the Salesforce installation to retrieve the Organization ID, Deployment ID, and Button ID.      Navigate to **Feature Settings > Service > Embedded Service > Embedded Service Deployments**.      In the raw with the deployment you want to use, click the **Show 3 more actions** button, then select **View**.      In the **Embedded Service Code Snippets** section, click **Get Code**.      A dialog with a code snippet will be opened.      Search the snippet for the following part and copy the commented values from the snippet to the Endpoint Settings.      Leave out the `''` markers.      <br>  ```javascript embedded_svc.init('https://...''https://...',gslbBaseURL'<your-organization-id>', // copy the Organization ID'...',{baseLiveAgentContentURL: '...',deploymentId: '<your-deployment-id>', // copy the Deployment IDbuttonId: '<your-button-id>', // copy the Button ID});```                        |


### Genesys Settings

You need to have an account in [Genesys Cloud](https://login.genesys.pure.cloud/).

#### Configure Handover Settings

In the **Handover to Agent** Node, configure the following settings:

| Parameter                 | Description                                                                             | 
|---------------------------|-----------------------------------------------------------------------------------------|
| **Language**              | Specify a language for the conversation. For example, `english`, `spanish`, `german`    |
| **Skills**                | Define skills for the conversation. For example, `escalation`.                          |
| **Priority**              | Set the priority for the conversation. For example, `1`. <br> If a priority is set, it triggers a flow in Genesys to prioritize or de-prioritize the conversation within the queue. <br> Note that this functionality requires the appropriate flow to be set up in Genesys.                          |
| **Custom Attributes**     | Add custom attributes in the `Key: Value` format, which allows you to include additional information.<br> For example:   ```json{"section": "section A","region": "Europe"}``` |

### 8x8 Settings

#### Configure 8x8

To continue setup, go to the 8x8 configuration:

{! _includes/ai/providers/8x8/8x8-config.md !}

#### Configure Handover Settings

In the **Handover to Agent** Node, configure the following settings:

| Parameter                 | Description   | 
|---------------------------|---------------|
| **8x8 Channel Id**        | Specify the channel ID that you created during the 8x8 configuration. <br> You can find this ID in the 8x8 admin console. Navigate to **Channels > Chat API**. In the channel list, find the channel that you created. Copy the **ID** from the channel row.  |
| **8x8 Queue Id**          | Specify the header value required for authenticating API calls to the 8x8 system. <br> You can find this ID in the 8x8 admin console. Navigate to **Channels > Chat API**. In the channel list, find the channel that you created. Copy the **Queue ID** from the channel row.   |
| **8x8 JSON properties**   | Extend 8x8 properties with custom JSON.           |

To check the handover, go to the installation that your server administrator has deployed.
For more information, read the [8x8 Handover Setup](../../handover-providers/8x8.md#configure-8x8) documentation.  

### Ring Central Engage Settings

RingCentral Engage is a customer engagement platform with built-in support for many channels and live-chat capabilities.
For more information, read the [Third party Endpoints](../../endpoints/overview.md#third-party-endpoints) documentation.

Cognigy has integrated RingCentral Engage as an additional handover provider that can be used by Cognigy customers to connect their users with human agents. You can read more about Agent Handover here.
For more information, read the [Ring Central Engage Integration](../../handover-providers/ringcentralengage-handover.md) documentation.

Additional Category Ids to be passed to Ring Central Engage handover provider

### Event Settings

| Parameter         | Type   | Description                                               |
|-------------------|--------|-----------------------------------------------------------|
| Send Queue Event  | Toggle | Sending an event to the Flow once the Handover is queued. |
| Send Active Event | Toggle | Sending an event to the Flow once the Handover is active. |


## More Information

- [Check Agent Availability Node](check-agent-availability.md)
- [User Inactivity Detection and Handling](../../handover-providers/user-inactivity-detection.md)