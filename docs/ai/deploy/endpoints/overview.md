---
title: "Overview" 
slug: "endpoints" 
hidden: false 
---

# Endpoints

*Endpoints* are connectors between Cognigy AI Agents and external systems or platforms, such as Facebook (Meta) Messenger, Slack, Alexa, and more.

Endpoints support text-based conversations as well as conversations on your contact center phone lines.

Endpoints convert channel-specific input and output, including images,
galleries and voice, to the standardized Cognigy Input object. This approach enables the development of platform-independent [Flow](../../build/flows/overview.md) that require no modification when adding new channels.

## General Endpoint Settings

Every Endpoint needs to be configured in the following configuration fields:

- [Snapshot](#snapshot)
- [Locale](#locale)
- [Endpoint URL](#endpoint-url)
- [NLU Connector](#natural-language-understanding)
- [Enable Endpoint](#enable-endpoint)

### Snapshot

Endpoints can be pointed to a specific [Snapshot](../snapshots.md)
if there is at least one Snapshot in the Agent.
This enables you to easily deploy different versions of your AI Agent.

While an Endpoint is active, you can replace or remove a Snapshot. Note that active sessions may continue to use the old Snapshot until they time out.

Keep in mind that if you have a configuration such as a Webchat Endpoint using [Persistent History](https://github.com/Cognigy/WebchatWidget/blob/master/docs/persistent-history.md),
the user's browser will retain message history. Even after the session expires, users will still see old messages, but any new message will initiate a new session.

When a Snapshot is replaced with a new one or is deleted, the following rules will be applied to the active session:

- If a Snapshot was replaced and not deleted, the active session will continue with the old Snapshot. The reason is that the system cannot recognize if the new Snapshot contains the same Flows and Nodes where the user might be active in their session.
- If the old Snapshot was deleted, the session will be reset, and the new Snapshot will be used.

For more information, read the [Snapshot](../snapshots.md) article.

#### Override Snapshot Connections

When Agents use a Snapshot, a toggle **Override Snapshot Connections** will be displayed in the Endpoint editor.
Enabling this option allows the Endpoint to override the [Connections](../../build/connections.md) in a Snapshot with Connections from the project. If a Connection is available only in the Snapshot, it will be used regardless of the toggle setting. If necessary, such Connections need to be manually updated.

!!! note "Default setting"
    By default, any Endpoint will continue using the Connections from the Snapshot unless the toggle is turned on.

To override the connection in the designated Agent, begin by either restoring it from a Snapshot or importing Connections from another Agent using a Package. Ensure that the Snapshot selected in the Endpoint Editor is created from the same Agent to ensure a match of Connections.

In this case, if the toggle is enabled, any change in the Connections of the restored Agent will take precedence over the Connections in the selected Snapshot.

!!! note
    You can verify or troubleshoot Connections by their `referenceId`, which needs to match both in the Project and the Snapshot for the override feature to work. To do that, use the [Cognigy.AI API](../../developers/api-and-cli.md) with the **Get all Connections** request.

### Flow

Endpoints need an entry [Flow](../../build/flows/overview.md) to start the conversation. You can switch Flows during a conversation.

To switch to a Flow during a conversation, do the following:

1. Go to **Deploy > Endpoints** and select the Endpoint you want to use, if required.
2. Open the drop-down menu of the **Flow** selection field.
3. Click ![jump to Flow](../../../_assets/icons/jump-to-flow.svg) next to the Flow selection field on the right-hand side. The selected Flow will be displayed and active.

To display the Flow ID of the currently selected Flow, click **Manual Input** below the Flow drop-down field.

To toggle back to the drop-down selection list of Flows, click the **Select from Dropdown** link.

### Locale

The [Localization](../../build/translation-and-localization/localization.md) feature in Cognigy.AI provides tools for enabling multilingual Agents. 

You can add a Locale that will be applied across an Agent and allow language-specific output messages to be configured within Flows. The system works with fallback layers, which means that a Locale that has no content configured will fall back to another Locale that has.

The locale selector is only available if you have created at least one additional locale beforehand.

To select a Locale, do the following:

1. Go to **Deploy > Endpoints** and select the Endpoint you want to use.
2. Click ![expand](../../../_assets/icons/expand.svg) next to the Locale selection field on the right-hand side to open the drop-down menu.
3. Select a locale.
4. Click **Save** to confirm your selection. The Endpoint is configured to that Locale now if the selected language has been edited.

As a result of the selected locale, your Endpoint, for example, **Webchat**, will use the selected language in a conversation based on your Flow.

You can test the functionality of your **Webchat** Endpoint locale setting as follows:

1. Click **Open Demo Webchat** at the top right of the Endpoint Editor. The Cognigy Webchat window is displayed.
2. Enter a text message in the text field at the bottom and click to send the message as a user.
3. The agent replies as configured in the Flow but using the language of your previously selected Locale.
4. Check if it works as expected. When no translated content of the selected Locale is defined, a fallback language will be used.

### Endpoint URL

The Endpoint URL serves as the interface to the Endpoint. For most channels, you'll need to copy it into the channel's settings to configure the connection to Cognigy.AI.

### Enable Endpoint

This setting allows you to quickly enable or disable the Endpoint.

### Natural Language Understanding

This setting allows you to select a different **NLU engine** for the selected Endpoint.

The [NLU Connectors](../../empower/nlu/external/nlu-connectors.md) that are configured to the agent are available to select from this drop-down menu. Alternatively, the [No NLU](../../empower/nlu/external/no-nlu.md) option can be selected to completely disable the intent and slot mapping for an endpoint.

### Data Protection & Analytics

In the [Data Protection & Analytics](data-protection-and-analytics.md) section, you can configure the collection of analytics and choose whether or not to gather any data.

#### Dashbot

When enabled, the **Dashbot** feature will collect analytics data for the selected Endpoint.

## Specific Endpoint Settings

You can use the following additional settings for the Endpoint configuration:

- [Data Protection & Analytics](data-protection-and-analytics.md)
- [Transformer Functions](transformers/transformers.md) 
- [Session Management](session-management.md)
- [Real-Time Translation Settings](real-time-translation-settings.md)  
- [Handover Settings](handover-settings.md)
- [AI Copilot](../../../ai-copilot/overview.md)
- [File Storage](file-storage.md)

## More Information

- [Localization](../../build/translation-and-localization/localization.md)