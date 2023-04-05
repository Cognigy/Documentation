---
title: "Getting Started"
slug: "getting-started"
hidden: true
---

# Getting started with Agent Assist

To get started with the service:

1. Go to the Cognigy.AI interface.
2. Create an [Agent](../ai/resources/agents/agents.md) or use an existing one.
3. Copy the Agent ID from your URL, for example, `https://app.cognigy.ai/agent/642c6a2cb45919dfae7b4428/`, where the Agent ID is `642c6a2cb45919dfae7b4428`.
4. Save the copied Agent ID for the later use.
5. Go to the left-side menu and click **Deploy > Flows**.
6. Create a [Flow](../ai/resources/build/flows.md) or use an existing one. 
7. Create the additional Flow for Agent Assist.

Check that you have two Flows: the Main flow and the Agent Assist flow.

## Configure Agent Assist

To configure Agent Assist only via API, do the following:

1. [Get an API Key](#get-api-key)
2. [Create a request](#create-a-request).

### Get an API Key

To get the API key, follow these steps:

1. In the upper-right corner of Cognigy.AI interface, click **User Menu ![user-menu](../assets/icons/user-menu.svg) > My Profile**.
2. In the **API Keys** section, click **+**.
3. Add an API key name anc click **Confirm**. The API key will appear in the list.
4. Copy this API Key and go to the **AUTHENTICATION** section on the [Cognigy OpenApi](https://api-trial.cognigy.ai/openapi) site.
5. Paste the API Key to the following fields:
    - API Key (X-API-Key)
    - API Key (api_key)
6. Click **Set** near both fields. 

### Create a request

1. Create an agent assist configuration by using the [Post](https://api-trial.cognigy.ai/openapi#post-/v2.0/agentassistconfigs) request. 
2. Define the grid size in the `config.grid` object of the configuration by specifying the number of rows and columns. 
3. Choose the placement of your tiles by adding the starting position and size of each tile in your grid:
    - The grid should consist of 6 columns and 9 rows, with a gap of 16 for a better layout. 
    - The configuration should include 2 tiles. 
    - Use the project ID value to specify the Agent ID you previously copied and saved.

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
            "style": "string"
          },
          "Voice Gateway": {
            "x": 1,
            "y": 1,
            "columns": 4,
            "rows": 2,
            "style": "string"
          }
        }
      },
      "projectId": "your Agent ID"
    }
    ```
4. Create the request by clicking **Try**.

When the request is created, you will see the response code `200`.

## Create Endpoint

To create an Endpoint, follow these steps:

1. Go to the Cognigy.AI interface.
2. In the left-side menu, select **Deploy > Endpoint**.
3. Click **+New Endpoint**. 
4. In the **New Endpoint** window, add an Endpoint name and select the Flow that you recently created. 
5. In the **Endpoint type** list, select **Webchat**. 
6. Click **Save**. 
7. Go to **Handover Settings**. 
8. In **Agent Assist Flow**, select the Flow. 
9. In **Agent Assist Config**, select the config which you recently created via API. 
10. Click **Save**.

## Configure an Agent Assist Flow

1. To configure the first tile, go into to the Agent Assist Flow.
2. Add the **HTTP request** Node. 
3. Choose patch and add the URL to send the HTTP request to. Then we add our JSON payload. 
4. To identify the right session, following IDs are necessary:
    - Session ID 
    - User ID 
    - Project ID 
    - Organisation ID
5. Add the content for the first tile, which will display Cognigy documentation as an iframe.
6. Ensure that the tile ID matches the ID chosen in the Agent Assist configuration. 
7. Add a header for authorization, and include the bearer token. 
8. To view the Agent Assist workspace, start a chat and trigger a handover to a human agent. 
9. A link with the Agent Assist workspace will be sent to the human agent. The human agent can access their Agent Assist workspace using this link. 
10. Clicking on the link will reveal the transcript. 
11. We have also added the outlines of the individual tiles before they have loaded. 
12. As the human agent chats with the end user, the workspace will load the available tiles.

## Explore an Agent Assist workspace

Now, we can observe the Agent Assist workspace.

A suggested reply is displayed on the left side, followed by the transcript, documentation, and a supporting image at the top.

Upon triggering a few intents, we can see that the Voice Gateway intent has been activated, modifying the suggested reply and the relevant documentation page.

Additionally, the supporting image can be helpful when discussing the setup of the Voice Gateway.

<figure>
  <img class="image-center" src="{{config.site_url}}agent-assist/images/agent-assist-vg.png" width="80%" />
</figure>

## More information

- [Agent Assist configuration](configuration.md)
- [Agent Assist embedding](embedding.md)
- [Agent Assist](overview.md)
- [Agent Assist Nodes](../ai/flow-nodes/agent-assist/overview.md)


