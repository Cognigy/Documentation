---
title: "Configuration"
slug: "configuration"
hidden: true
---

# Agent Assist Workspace Configuration

The Agent Assist configuration refers to the Agent Assist Config which you can define via API to configure the position and size of the widgets in your grid. This gives full  flexibility to use the Agent  Assist Workspace as efficient as possible.​ 

The workspace can be customized to display various types of content, such as HTML, adaptive cards, or iframes. While configuring your grid you can choose the best placement for specific types of widgets.

The Agent Assist configurations can be created, modified, and deleted **only** using the [Agent Assist API](https://api-trial.cognigy.ai/openapi#get-/v2.0/agentassistconfigs).

## Grid

The Agent Assist workspace is based on a customizable grid layout where widgets can be added to display different information. 

The gird is fully customizable and gives you the possibility to configure the number of columns, rows, as well as the gaps between them.

## Tile ID

Each tile must have a name, for example, `map`, `profile`, or `history`, that works as a unique identifier. This exact tile ID is needed for the Agent Assist Node configuration, to ensure the content is displayed in the right Widget.

## Example

Let's assume that we need to create Agent Assist configuration based on this mockup:

<figure>
  <img class="image-center" src="{{config.site_url}}agent-assist/images/grid-mockup.png" width="80%" />
</figure>

You can investigate the Request and Response examples below.

### Request

This cURL command creates a new Agent Assist configuration on Cognigy.ai's API. The JSON payload specifies a dashboard's name and description, a grid of tiles with varying content types, a unique tile identifier, and the project's ID where the configuration will be created.

```json
curl -X POST "https://api-dev.cognigy.ai/new/v2.0/agentassistconfigs?api_key=<your API Key>" \
-H "Accept: application/json" \
-H "X-API-Key: <your X-API key>" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-d '{
    "name": "My Agent Assist dashboard",
    "description": "A dashboard for tracking various metrics",
    "config": {
        "grid": {
            "columns": 6,
            "rows": 11,
            "gap": 8
        },
        "tiles": {
            "html": {
                "x": 2,
                "y": 1,
                "columns": 3,
                "rows": 5,
                "style": "html"
            },
            "map": {
                "x": 5,
                "y": 1,
                "columns": 1,
                "rows": 5,
                "style": "adaptive card"
            },
            "profile": {
                "x": 1,
                "y": 1,
                "columns": 1,
                "rows": 5,
                "style": "adaptive card"
            },
            "transcript": {
                "x": 5,
                "y": 7,
                "columns": 1,
                "rows": 5,
                "style": "adaptive card"
            },
            "history": {
                "x": 1,
                "y": 7,
                "columns": 1,
                "rows": 5,
                "style": "adaptive card"
            },
            "website": {
                "x": 2,
                "y": 7,
                "columns": 3,
                "rows": 5,
                "style": "iframe"
            }
        }
    },
    "projectId": "63ce990f06c15b1c05cxxxxc"
}' \
```

### Response

The JSON response contains the details of the newly created Agent Assist configuration, including its ID, name, description, grid configuration, tile positions and styles, metadata such as creation and modification timestamps, and information about the user who created and last modified the configuration.

```json
{
    "_id": "642d4cde15f8997b965cc5de",
    "name": "My Dashboard1",
    "description": "A dashboard for tracking various metrics",
    "config": {
        "grid": {
            "columns": 6,
            "rows": 11,
            "gap": 8
        },
        "tiles": {
            "html": {
                "x": 2,
                "y": 1,
                "columns": 3,
                "rows": 5,
                "style": "html"
            },
            "map": {
                "x": 5,
                "y": 1,
                "columns": 1,
                "rows": 5,
                "style": "adaptive card"
            },
            "profile": {
                "x": 1,
                "y": 1,
                "columns": 1,
                "rows": 5,
                "style": "adaptive card"
            },
            "transcript": {
                "x": 5,
                "y": 7,
                "columns": 1,
                "rows": 5,
                "style": "adaptive card"
            },
            "history": {
                "x": 1,
                "y": 7,
                "columns": 1,
                "rows": 5,
                "style": "adaptive card"
            },
            "website": {
                "x": 2,
                "y": 7,
                "columns": 3,
                "rows": 5,
                "style": "iframe"
            }
        }
    },
    "referenceId": "3e8f9be8-ad3a-48ef-99b8-dc6b080cxxxx",
    "projectReference": "63ce990f06c15b1c05c4xxxx",
    "organisationReference": "63babf6e92add771923exxxx",
    "createdAt": 1680690398,
    "createdBy": "63ca7c200d733eefd75xxxx",
    "lastChanged": 1680690398,
    "lastChangedBy": "63ca7c200d733eefd751xxxx"
}
```

## More information

- [Agent Assist Workspace](overview.md)
- [Getting started with Agent Assist](getting-started.md)
- [Agent Assist Nodes](../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist Embedding](embedding.md)
- [Agent Assist for Voice](../agent-assist/voice-agent-assist/voice-overview.md)
- [Agent Assist for Chat](chat-agent-assist.md)


