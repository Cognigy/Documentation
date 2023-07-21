---
title: "Getting Started"
slug: "getting-started"
hidden: false
---

# Getting started with the Agent Assist Workspace

In this getting started guide, you will learn how to configure your Agent Assist Workspace.

{! _includes/agent-assist/before-you-begin.md !}

## Create Flows

To get started with the service:

1. Go to the Cognigy.AI interface.
2. Create a [Virtual Agent](../ai/resources/agents/agents.md) or use an existing one.
3. Copy the Project ID from your URL, for example, `https://app.cognigy.ai/agent/642c6a2cb45919dfae7b4428/`, where the Project ID is `642c6a2cb45919dfae7b4428`.
4. Save the copied Agent ID for the later use.
5. Go to the left-side menu and click **Build > Flows**.
6. Create a [Flow](../ai/resources/build/flows.md) or use an existing one, which will include a handover or transfer to a human agent 
7. Create the additional flow for Agent Assist.

Check that you have two Flows: the Main flow and the Agent Assist flow.

## Configure the Agent Assist Config

With the Agent Assist Config  API you can configure the position and size of the tiles in your grid. This gives full flexibility to use the Agent Assist Workspace as efficient as possible.​

1. [Get your API Key from your Profile](#get-an-api-key)
2. [Create your Agent Assist Config](#create-an-agent-assist-config)

### Get an API Key

To get your API key, follow these steps:

1. In the upper-right corner of the Cognigy.AI interface, click **User Menu ![user-menu](../assets/icons/user-menu.svg) > My Profile**.
2. In the **API Keys** section, click **+**.
3. Add an API key name anc click **Confirm**. The API key will appear in the list.
4. Copy this API Key and go to the **AUTHENTICATION** section on the [Cognigy OpenApi](https://api-trial.cognigy.ai/openapi) site.
5. Paste the API Key to the following fields:
    - API Key (X-API-Key)
    - API Key (api_key)
6. Click **Set** near both fields. 

### Create an Agent Assist Config

To create your Agent Assist Config, follow these steps:

1. Create an agent assist configuration by using the [Post](https://api-trial.cognigy.ai/openapi#post-/v2.0/agentassistconfigs) request. 
2. Define the grid size in the `config.grid` object of the configuration by specifying the number of rows and columns. 
3. Choose the placement of your tiles by adding the starting position and size of each tile in your grid.
4. Add the Project ID, you copied earlier, to ensure the Config is mapped to the right Agent

    ```json
    {
      "name": "string",
      "description": "string",
      "config": {
        "grid": {
          "columns": 6,
          "rows": 9,
          "gap": 16
        },
        "tiles": {
          "Live Agent": {
            "x": 1,
            "y": 1,
            "columns": 4,
            "rows": 2,
          },
          "Voice Gateway": {
            "x": 1,
            "y": 1,
            "columns": 4,
            "rows": 2,
          }
        }
      },
      "projectId": "your Project ID"
    }
    ```
5. Create the request by clicking **Try**.

When the request is created, you will see the response code `201`.

## Create an Endpoint

To create your Endpoint, follow these steps:

1. Go to the Cognigy.AI interface.
2. In the left-side menu, select **Deploy > Endpoint**.
3. Click **+New Endpoint**. 
4. In the **New Endpoint** window, add an Endpoint name and select your Virtual Agent Flow that hands you over to a human agent. 
5. In the **Endpoint type** list, select your desired Endpoint. 
6. Click **Save**. 
7. Go to **Handover Settings**. 
8. In **Agent Assist Flow**, select the Agent Assist Flow, that you created in the first steps. 
9. In **Agent Assist Config**, select the config which you recently created via API.
10. _(Optional)_ A transcript tile to display the conversation with the customer can be added by enabling the toggle in the Agent Assist Settings.
11. Click **Save**.

## Configure an Agent Assist Flow

1. To configure the first Widget, go into to the Agent Assist Flow.
2. Add your desired Agent Assist Flow Node. 
3. Add the content, which will be displayed as a Widget in the Agent Assist Workspace.
4. Ensure that the tile ID matches the ID chosen in the Agent Assist configuration, this defines the size and placement of the Widget within the Workspace.

## Explore an Agent Assist workspace

Now, we can observe the Agent Assist workspace.

To get to the Agent Assist Workspace, start a conversation with your Virtual Agent. At one point you will be handed over to a human agent. 

If you use the `standalone` version of Agent Assist, this is when you will receive the link to your Agent Assist Workspace.​

When a customer is being  handed over not only the  conversation history with the  bot and the current intent are  being forwarded to the human agent, but also a specific link to access the Agent Assist  Workspace.​

In case you are using the `embedded` version, the Agent Assist Workspace will be shown within an iFrame in your Agents Desktop.

Once the human agent engages with the conversation, the grid will show an empty state with outlines of the widgets. 

The widgets will populate their content once the customer starts the conversation.


## More information

- [Agent Assist Workspace](overview.md)
- [Agent Assist Configuration](configuration.md)
- [Agent Assist Nodes](../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist Embedding](embedding.md)
- [Agent Assist for Voice](../agent-assist/voice-agent-assist/voice-overview.md)
- [Agent Assist for Chat](chat-agent-assist.md)
- [Integration with Contact Centers](contact-center-integration.md)


