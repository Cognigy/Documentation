---
title: "Getting Started"
slug: "getting-started"
hidden: false
---

# Getting started with AI Copilot

In this getting started guide, you will learn how to configure your first AI Copilot workspace. 
The AI Copilot workspace comes with a pre-built grid configuration, which you can edit directly from the Flow for more flexibility with different layouts. Alternatively, you can also manually configure your AI Copilot workspace using the API Post request.

{! _includes/ai-copilot/before-you-begin.md !}

## Create Flows

To get started with the service:

1. Go to the Cognigy.AI interface.
2. Create a [Project](../ai/build/projects.md) or use an existing one.
3. In the left-side menu of your Project, select **Build > Flows**.
4. Create a [Flow](../ai/build/flows.md) or use an existing one, which will include a handover or transfer to a human agent.
5. Create a second Flow for AI Copilot.
6. In the AI Copilot Flow, add the [Set Grid Node](../ai/build/node-reference/ai-copilot/set-grid.md) to modify and preview your grid from within the Flow. 
7. Add your desired [AI Copilot Flow Nodes](../ai/build/node-reference/ai-copilot/overview.md).
8. Add the content, which will be displayed within the AI Copilot Workspace.
9. Make sure that the Title ID's in the Nodes correspond to the titles in Copilot Grid Configuration in the Set Grid Node.

## Create an Endpoint

To create your Endpoint, follow these steps:

1. Go to the Cognigy.AI interface.
2. In the left-side menu, select **Deploy > Endpoint**.
3. Create a new Endpoint or use an existing one.
7. On the **Endpoint Settings** page, go to the **Handover Settings** section and select your handover platform.
8. Go to the **Copilot** section and select **Workspace** from the **Copilot Type** list.
9. From the **Copilot Flow** list, select the previously created AI Copilot Flow.
10. From the **Copilot Config** list, select **None** to use the default AI Copilot configuration.
11. _(Optional)_ A transcript tile to display the conversation with the customer can be added by enabling the toggle in the AI Copilot Settings.
12. Click **Save**.

## Explore the AI Copilot Workspace

To observe the AI Copilot workspace, start a conversation with your AI Agent.

At one point, you will be handed over to a human agent. 

If you are using the `standalone` version of AI Copilot, you will receive the link to your AI Copilot Workspace at this point.

When a customer is handed over, not only is the conversation history with the bot and the current intent forwarded to the human agent, but also a specific link to access the AI Copilot Workspace.

In case you are using the `embedded` version, the AI Copilot Workspace will be shown within an iFrame in your Agents Desktop.

Once the human agent engages with the conversation, the grid will show an empty state with outlines of the widgets. 

The widgets will populate their content once the customer starts the conversation.

## _(Optional)_ Manually configure the API Connection

If you want to modify the default grid configuration to set up company-wide defaults, you can do that from within the API.

To do so, you need an API key and the Project ID:

1. In the upper-right corner of the Cognigy.AI interface, click **User Menu ![user-menu](../_assets/icons/user-menu.svg) > My Profile**.
2. In the **API Keys** section, click **+**.
3. Add an API key name and click **Confirm**. The API key will appear in the list.
4. Copy this API Key and go to the **AUTHENTICATION** section on the [Cognigy OpenApi](https://api-trial.cognigy.ai/openapi) site.
5. Paste the API Key to the following fields:
    - API Key (X-API-Key)
    - API Key (api_key)
6. Click **Set** near both fields.
7. Go to your Project in Cognigy.AI.
8. Copy the Project ID from your URL, for example, `https://app.cognigy.ai/agent/642c6a2cb45919dfae7b4428/`, where the Project ID is `642c6a2cb45919dfae7b4428`. 
9. Go to the [Post](https://api-trial.cognigy.ai/openapi#post-/v2.0/agentassistconfigs) request.
10. Add the Project ID in the Json projectId field.
9. Check your connection by clicking **Try**.

When the request is created and connection is established correctly, you will see the response code `201`.

### _(Optional)_ Create a Custom Default Grid from the API

To create your custom AI Copilot Config Grid with the API, follow these steps:

1. Go to the [Post](https://api-trial.cognigy.ai/openapi#post-/v2.0/agentassistconfigs) request.
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

## More Information

- [AI Copilot Workspace](overview.md)
- [AI Copilot Configuration](configuration.md)
- [AI Copilot Nodes](../ai/build/node-reference/ai-copilot/overview.md)
- [AI Copilot Embedding](embedding.md)
- [AI Copilot for Voice](voice/voice-overview.md)
- [AI Copilot for Chat](chat.md)
- [Integration with Contact Centers](contact-center-integration.md)


