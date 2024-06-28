---
title: "Getting Started"
slug: "getting-started"
hidden: false
---

# Getting started with AI Copilot

In this getting started guide, you will learn how to configure your AI Copilot Workspace.

{! _includes/ai-copilot/before-you-begin.md !}

## Create Flows

To get started with the service:

1. Go to the Cognigy.AI interface.
2. Create a [virtual agent](../ai/build/projects.md) or use an existing one.
3. Copy the Project ID from your URL, for example, `https://app.cognigy.ai/agent/642c6a2cb45919dfae7b4428/`, where the Project ID is `642c6a2cb45919dfae7b4428`.
4. Save the copied Agent ID for the later use.
5. Go to the left-side menu and click **Build > Flows**.
6. Create a [Flow](../ai/build/flows.md) or use an existing one, which will include a handover or transfer to a human agent 
7. Create the additional flow for AI Copilot.

Check that you have two Flows: the Main Flow and the AI Copilot Flow.

### Get an API Key

To get your API key, follow these steps:

1. In the upper-right corner of the Cognigy.AI interface, click **User Menu ![user-menu](../_assets/icons/user-menu.svg) > My Profile**.
2. In the **API Keys** section, click **+**.
3. Add an API key name and click **Confirm**. The API key will appear in the list.
4. Copy this API Key and go to the **AUTHENTICATION** section on the [Cognigy OpenApi](https://api-trial.cognigy.ai/openapi) site.
5. Paste the API Key to the following fields:
    - API Key (X-API-Key)
    - API Key (api_key)
6. Click **Set** near both fields. 

### Create an AI Copilot Config

!!! Note
    AI Copilot Config comes with a default pre-defined grid. You can also edit and preview it directly from the Flow, by using the [Set Grid Node](../ai/build/node-reference/ai-copilot/set-grid.md).

To create your custom AI Copilot Config Grid, follow these steps:

1. Create an AI Copilot configuration by using the [Post](https://api-trial.cognigy.ai/openapi#post-/v2.0/agentassistconfigs) request. 
2. Define the grid size in the `config.grid` object of the configuration by specifying the number of rows and columns. 
3. Choose the placement of your tiles by adding the starting position and size of each tile in your grid.
4. Add the Project ID you copied earlier to ensure that the Config is mapped to the right Agent.

   ```json
   {
      "name": "AI Copilot Config sample",
      "description": "A sample configuration for AI Copilot showcasing the layout of tiles",
      "config": {
         "grid": {
            "columns": 3,
            "rows": 8,
            "gap": 10
         },
         "tiles": {
            "identity-assist": {
               "x": 1,
               "y": 1,
               "rows": 4,
               "columns": 1
            },
            "transcript-assist": {
               "x": 2,
               "y": 1,
               "rows": 2,
               "columns": 2
            },
            "next-action": {
               "x": 2,
               "y": 3,
               "rows": 2,
               "columns": 2
            },
            "knowledge-assist": {
               "x": 2,
               "y": 5,
               "rows": 4,
               "columns": 2
            },
            "event-assist": {
               "x": 1,
               "y": 5,
               "rows": 4,
               "columns": 1
            }
         }
      },
      "projectId": "your-project-id"
   }
   ```
5. Create the request by clicking **Try**.

When the request is created, you will see the response code `201`.

## Create an Endpoint

To create your Endpoint, follow these steps:

1. Go to the Cognigy.AI interface.
2. In the left-side menu, select **Deploy > Endpoint**.
3. Click **+New Endpoint**. 
4. In the **New Endpoint** window, add an Endpoint name and select your virtual agent Flow that hands you over to a human agent. 
5. In the **Endpoint type** list, select your desired Endpoint. 
6. Click **Save**. 
7. Go to **Handover Settings**. 
8. In **Copilot Flow**, select the AI Copilot Flow, that you created in the first steps. 
9. In **Copilot Config**, select the config, which you recently created via API.
10. _(Optional)_ A transcript tile to display the conversation with the customer can be added by enabling the toggle in the AI Copilot Settings.
11. Click **Save**.

## Configure an AI Copilot Flow

1. To configure your first workspace, go into to the AI Copilot Flow.
2. Add your desired [AI Copilot Flow Nodes](../ai/build/node-reference/ai-copilot/overview.md). 
3. Add the content, which will be displayed within the AI Copilot Workspace.
4. Ensure that the tile ID in the Nodes matches the tile ID chosen in the AI Copilot configuration; this defines the size and placement of the widgets within the Workspace.

## Explore an AI Copilot workspace

To observe the AI Copilot workspace, start a conversation with your virtual agent.

At one point, you will be handed over to a human agent. 

If you are using the `standalone` version of AI Copilot, you will receive the link to your AI Copilot Workspace at this point.

When a customer is handed over, not only is the conversation history with the bot and the current intent forwarded to the human agent, but also a specific link to access the AI Copilot Workspace.

In case you are using the `embedded` version, the AI Copilot Workspace will be shown within an iFrame in your Agents Desktop.

Once the human agent engages with the conversation, the grid will show an empty state with outlines of the widgets. 

The widgets will populate their content once the customer starts the conversation.

## More Information

- [AI Copilot Workspace](overview.md)
- [AI Copilot Configuration](configuration.md)
- [AI Copilot Nodes](../ai/build/node-reference/ai-copilot/overview.md)
- [AI Copilot Embedding](embedding.md)
- [AI Copilot for Voice](voice/voice-overview.md)
- [AI Copilot for Chat](chat.md)
- [Integration with Contact Centers](contact-center-integration.md)


