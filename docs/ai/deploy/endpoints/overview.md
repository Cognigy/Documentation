---
title: "Overview" 
slug: "endpoints" 
description: "Cognigy.AI Endpoints support chat and voice conversations in contact centers and integrate with handover provider to manage these interactions."
hidden: false
tags:
  - endpoints
  - integration
  - deployment
  - channels
  - connectors
  - contact center
  - snapshots
---

# Endpoints

_Endpoints_ are connectors between AI Agents and [external systems or platforms](../endpoint-reference/overview.md), such as Facebook (Meta) Messenger, Slack, Alexa, and others.

Endpoints support chat and voice conversations in contact centers and integrate with [handover provider](../../escalate/handovers.md) to manage these interactions.

Endpoints convert [channel-specific](../../build/nodes/channels.md) input and output, including images, galleries, and voice, into the structure of the [Input object](../../build/ai-agent-memory/input.md). This approach allows the development of platform-agnostic [Flows](../../build/flows/overview.md) that require no modification when you add new channels.

## Working with Endpoints

=== "GUI"
    You can create, view, edit, and delete Endpoints in **Deploy > Endpoints**.

=== "API"
    You can view, create, and edit Endpoints using the [Cognigy API](https://api-trial.cognigy.ai/openapi#tag--Endpoints-v2.0).

=== "CLI"
    You can manage Endpoints using the [Cognigy CLI](https://github.com/Cognigy/Cognigy-CLI).

### General Endpoint Settings

For every Endpoint, you have the following basics:

| Setting         | Description                                                                                                                                                                                                                                                                                                                                                                  |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Snapshot        | This setting is optional. Select the [Snapshot](../snapshots.md) of the [Project](../../build/projects.md) you want to use.<br><br>By default, Endpoints use the [Connections](../../build/connections.md) from the Snapshot. If you select a Snapshot, the [Override Snapshot Connections](#override-snapshot-connections) toggle is displayed under the **Snapshot** list. |
| Locale          | This setting is optional. Select the [Locale](../../build/translation-and-localization/localization.md) for the Endpoint. The Locale list only appears if you've created a Locale beforehand.                                                                                                                                                                                |
| Flow            | Select the [Flow](../../build/flows/overview.md) to use for the Endpoint.<br><br>You can enter manually by clicking **Manual Input** below the Flow list. Click ![jump to Flow](../../../_assets/icons/jump-to-flow.svg) next to the **Flow** list to open the selected Flow in the Flow editor.                                                                             |
| Endpoint URL    | The Endpoint URL serves as the interface to the Endpoint. For most third-party platforms, you need to copy it into the channel's settings to configure the connection to Cognigy.AI.                                                                                                                                                                                         |
| NLU Connector   | Select the [NLU Connector](../../empower/nlu/external/nlu-connectors/overview.md) for the Endpoint. To disable Intent and Slot recognition, select the [No NLU](../../empower/nlu/external/nlu-connector-reference/no-nlu.md) option.                                                                                                                                        |
| Enable Endpoint | Toggle to activate or deactivate the Endpoint. This setting is enabled by default.                                                                                                                                                                                                                                                                                           |

#### Override Snapshot Connections

If you activate the **Override Snapshot Connections** toggle, the Endpoint overrides the [Connections](../../build/connections.md) in the Snapshot with Connections from the Project. If only the Snapshot has a Connection, the Connection isn't overridden. If necessary, you need to update such Connections manually.

To override the Connection of the AI Agent in production, you can:

- Make the necessary changes in a staging environment, create a Snapshot of the same AI Agent, and select the Snapshot in the Endpoint settings. Deactivate the **Override Snapshot Connections** toggle.
- Import Connections from another AI Agent using a [Package](../../build/packages.md). Activate the **Override Snapshot Connections** toggle.

## Specific Endpoint Settings

You can use the following additional settings for the Endpoint configuration:

- [Data Protection & Analytics](data-protection-and-analytics.md)
- [Transformer Functions](transformers/overview.md) 
- [Session Management](session-management.md)
- [Real-Time Translation Settings](real-time-translation-settings.md)  
- [Handover Settings](handover-settings.md)
- [Agent Copilot](../../../ai-copilot/overview.md)
- [File Storage](file-storage.md)

## More Information

- [Localization](../../build/translation-and-localization/localization.md)