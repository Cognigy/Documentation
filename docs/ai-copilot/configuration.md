---
title: "Configuration"
slug: "configuration"
hidden: false
---

# AI Copilot Configuration

The AI Copilot configuration refers to the size and position of widgets in your grid. The AI Copilot workspace can be customized to display various types of content, including HTML, adaptive cards, or iframes. This customization enables human agents to quickly access important data, such as user profiles or ticket information related to the user's issue, without needing to spend additional time searching the knowledge database.

AI Copilot comes with a default, pre-configured grid, which you can modify by using the Copilot: Set Grid Node. Alternatively, the AI Copilot configuration can be created, modified, and deleted using the [AI Copilot API](https://api-trial.cognigy.ai/openapi#get-/v2.0/agentassistconfigs) and can serve as a template if selected from the Copilot Config within the Endpoint settings.

## AI Copilot Grid

The AI Copilot workspace is based on a fully customizable grid layout, where widgets can be added to display different information. 

The grid gives you the possibility to configure the number of columns, rows, as well as the gaps between them.

You can edit the grid in the following ways:

- Use the [Copilot: Set Grid Node](../ai/build/node-reference/ai-copilot/set-grid.md) (this option is recommended).
- Create a custom grid in the [AI Copilot API](#create-a-custom-grid-using-the-api-post-request).

### (Optional) Create a Custom Grid via the API

If you want to create a new AI Copilot Config template instead of using the default one, you can do so in the API.

#### Create an API Key

1. On the **Main** page of the Cognigy.AI interface, click **User Menu ![user-menu](../_assets/icons/user-menu.svg) > My Profile** in the upper-right corner. 
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
10. Add the Project ID you copied earlier to the `projectId` field in the JSON body of the request. 
11. Check your connection by clicking **Try**.

When the request is created, you will see the response code `201`.

#### Create a Custom Grid using the API Post Request

To create your custom AI Copilot Config Grid with the API, follow these steps:

1. Go to the [Post](https://api-trial.cognigy.ai/openapi#post-/v2.0/agentassistconfigs) request.
2. Define the grid size in the `config.grid` object of the configuration by specifying the number of rows and columns. 
3. Choose the placement of your tiles by adding the starting position and size of each tile in your grid.
4. Add the Project ID you copied earlier to ensure that the Config is mapped to the right Project.

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

## Tile ID

[![Version badge](https://img.shields.io/badge/Updated in-v4.54-blue.svg)](../release-notes/4.54.md)

Each tile must have a name, for example, `map`, `profile`, or `history`, that works as a unique identifier. This exact tile ID is needed for the AI Copilot Node configuration, to ensure the content is displayed in the right Widget.

If AI Copilot receives updates for a Tile ID not present in the AI Copilot configuration, the tile will not be rendered. In such cases, a warning indicator will be displayed in the lower-right corner of the workspace, indicating that an "unknown tile update" has been received.

## URL

[![Version badge](https://img.shields.io/badge/Updated in-v4.65-blue.svg)](../release-notes/4.65.md)

If you are using AI Copilot as a standalone application, the AI Copilot URL follows the pattern:

{! _includes/ai-copilot/url-pattern.md !}

If you are utilizing the embedded AI Copilot workspace, you can also use this URL to investigate the workspace before deploying it to production.

## Transcript Tile

The Transcript Tile in the AI Copilot workspace acts as a chat interface for human agents. It allows them to seamlessly read messages from end users and respond without having to switch back to the main chat interface.

To activate the Transcript Tile feature for the AI Copilot workspace, go to the **Endpoint Settings** editor and then to the **Copilot** section. This Tile is recommended only for contact centers that use a standalone AI Copilot workspace, such as the one provided by Genesys.

The Transcript Tile feature is intended specifically for [chat use cases](chat.md). For voice-related scenarios, use the [Copilot: Transcript Tile](../ai/build/node-reference/ai-copilot/transcript-tile.md) Node.

| Setting                                                                                            | Description                                                                                                                                                                               |
|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable Transcript Tile with ID 'transcript' in the AI Copilot workspace                            | If the option is enabled, you can view the session messages on the Transcript Tile. To display this tile, you must include the `transcript` tile ID it in your AI Copilot Config via API. |
| Enable the chat input for the Transcript Tile to enable the agent to send messages to the customer | If the option is enabled, the human agent can send messages to the end user from the Transcript Tile.                                                                                     |
| Enable redaction of Transcript Tile messages                                                       | If the option is enabled, a credit card number in the messages of the Transcript Tile will be masked and replaced with the placeholder `CREDIT_CARD_NUMBER`.                              |

## More Information

- [AI Copilot Workspace](overview.md)
- [Getting started with AI Copilot](getting-started.md)
- [AI Copilot Nodes](../ai/build/node-reference/ai-copilot/overview.md)
- [AI Copilot Embedding](embedding.md)
- [AI Copilot for Voice](voice/voice-overview.md)
- [AI Copilot for Chat](chat.md)
- [Integration with Contact Centers](contact-center-integration.md)