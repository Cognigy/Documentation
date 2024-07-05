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
7. Add your desired [AI Copilot Flow Nodes](../ai/build/node-reference/ai-copilot/overview.md). For example, a [Profile Node](../ai/build/node-reference/ai-copilot/identity-tile.md) with your user's most important information, an AI-powered [Sentiment Node](../ai/build/node-reference/ai-copilot/sentiment-tile.md) displaying the user's current attitude, or a [Transcript Node](../ai/build/node-reference/ai-copilot/transcript-tile.md) with the transcribed content of the conversation.
8. Add the content that will be displayed within the AI Copilot workspace.
9. Make sure that the Title ID's in the Nodes correspond to the titles in Copilot Grid Configuration in the Set Grid Node.

## Create an Endpoint

To create your Endpoint, follow these steps:

1. Go to the Cognigy.AI interface.
2. In the left-side menu, select **Deploy > Endpoint**.
3. Create a new Endpoint or use an existing one.
4. On the **Endpoint Settings** page, go to the **Handover Settings** section and select your handover platform.
5. Go to the **Copilot** section and select **Workspace** from the **Copilot Type** list.
6. From the **Copilot Flow** list, select the previously created AI Copilot Flow.
7. From the **Copilot Config** list, select **None** to use the default AI Copilot configuration.
8. _(Optional)_ A transcript tile to display the conversation with the customer can be added by enabling the toggle in the AI Copilot Settings. Make sure to add a Transcript Node in your Copilot Grid if you wish to see the transcript.
9. Click **Save**.

## Explore the AI Copilot Workspace

By now, your Copilot grid and connection should be set up and ready for testing.

To observe the AI Copilot workspace, start a conversation with your AI Agent in the chat.
In another tab, open your contact center desktop, for example the Live Agent, and work through the Flow until the Handover to Agent Node triggers the Handover.

If you are using the `standalone` version of AI Copilot together with a provider that doesn't offer native AI Copilot support, for example RCE or Salesforce, you will receive a link to your AI Copilot Workspace in the chat.

After the handover, the conversation history with the AI Agent and the current intent are forwarded to the human agent, together with a specific link to access the AI Copilot Workspace.

In case you are using the `embedded` version, the AI Copilot Workspace will be shown within an iFrame in your contact center desktop.

Once the human agent engages with the conversation, the grid will show an empty state with outlines of the widgets. 

The widgets will populate with content once the customer starts the conversation.

## More Information

- [AI Copilot Workspace](overview.md)
- [AI Copilot Configuration](configuration.md)
- [AI Copilot Nodes](../ai/build/node-reference/ai-copilot/overview.md)
- [AI Copilot Embedding](embedding.md)
- [AI Copilot for Voice](voice/voice-overview.md)
- [AI Copilot for Chat](chat.md)
- [Integration with Contact Centers](contact-center-integration.md)