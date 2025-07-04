---
title: "Getting Started"
slug: "getting-started"
hidden: false
---

# Getting started with Agent Copilot

In this getting started guide, you will learn how to configure your first Agent Copilot workspace. 
The Agent Copilot workspace comes with a pre-built grid configuration, which you can edit directly from the Flow for more flexibility with different layouts. Alternatively, you can also manually configure your Agent Copilot workspace using the API Post request.

{! _includes/ai-copilot/before-you-begin.md !}

## Create Flows

To get started with the service:

1. Go to the Cognigy.AI interface.
2. Create a [Project](../ai/build/projects.md) or use an existing one.
3. In the left-side menu of the Project, go to **Build > Flows**.
4. Create a [Flow](../ai/build/flows/overview.md) or use an existing one, which will include a handover or transfer to a human agent.
5. Create a second Flow for Agent Copilot.
6. In the Agent Copilot Flow, add the [Set Grid Node](../ai/build/node-reference/ai-copilot/set-grid.md) to modify and preview your grid from within the Flow. 
7. Add your desired [Agent Copilot Flow Nodes](../ai/build/node-reference/ai-copilot/overview.md). For example, a [Profile Node](../ai/build/node-reference/ai-copilot/identity-tile.md) with your user's most important information, an AI-powered [Sentiment Node](../ai/build/node-reference/ai-copilot/sentiment-tile.md) displaying the user's current attitude, or a [Transcript Node](../ai/build/node-reference/ai-copilot/transcript-tile.md) with the transcribed content of the conversation.
8. Add the content that will be displayed within the Agent Copilot workspace.
9. Make sure that the Tile IDs in the Nodes correspond to the tiles in Agent Copilot Grid Configuration in the Set Grid Node.

Check that you have two Flows: the Main Flow and the Agent Copilot Flow.

## Create a Endpoint

To create your Endpoint, follow these steps:

1. In the left-side menu of the Project, go to **Deploy > Endpoint**.
2. Click **+New Endpoint**. 
3. In the **New Endpoint** window, add an Endpoint name and select your AI Agent Flow that hands you over to a human agent. 
4. In the **Endpoint type** list, select your desired Endpoint.
5. Click **Save**. 
6. On the **Endpoint Settings** page, go to the **Handover Settings** section and select your handover platform.
7. Go to the **Copilot** section and select **Workspace** from the **Copilot Type** list.
8. From the **Copilot Flow** list, select the previously created Agent Copilot Flow. The Flow will be executed once the conversation is handed over to a human agent. 
9. From the **Copilot Config** list, select **None** to use the default Agent Copilot configuration.
10. _(Optional)_ Add a Transcript Tile to display the conversation with the customer, by enabling the **Enable Transcript Tile with ID 'transcript' in the Agent Copilot Workspace** toggle in the **Copilot** section. Make sure to add the `transcript` Transcript Tile ID in your Agent Copilot grid to display the transcript to the human agent. This Endpoint toggle in turn enables additional settings:
    - Enable the chat input for the Transcript Tile to enable the agent to send messages to the customer — enables the human agent to send messages from the Transcript Tile.
    - Enable redaction of Transcript Tile messages - lets you hide sensitive data from the Transcript Tile.
11. Click **Save**.

## Explore the Agent Copilot Workspace

By now, your Agent Copilot grid and connection should be set up and ready for testing.

To observe the Agent Copilot workspace, start a conversation with your AI Agent in the chat.
In another tab, open your contact center desktop, for example Live Agent, and work through the Flow until the Handover to Agent Node.

If you are using the `standalone` version of Agent Copilot together with a provider that doesn't offer native Agent Copilot support, for example RingCentral Engage or Salesforce, you will receive a link to your Agent Copilot Workspace in the chat.

After the handover, the conversation history with the AI Agent and the current intent are forwarded to the human agent, together with a specific link to access the Agent Copilot workspace.

In case you are using the `embedded` version, the Agent Copilot workspace will be shown within an iFrame in your contact center desktop.

The widgets will populate with content once the handover to the contact center occurs.

## More Information

- [Agent Copilot Workspace](overview.md)
- [Agent Copilot Configuration](configuration.md)
- [Agent Copilot Nodes](../ai/build/node-reference/ai-copilot/overview.md)
- [Agent Copilot Embedding](embedding.md)
- [Agent Copilot for Voice](voice/voice-overview.md)
- [Agent Copilot for Chat](chat.md)
- [Integration with Contact Centers](contact-center-integration.md)
- [Agent Copilot Whisper](../live-agent/assistants/ai-copilot-whisper.md)
