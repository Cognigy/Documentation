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



## More Information

- [AI Copilot Workspace](overview.md)
- [AI Copilot Configuration](configuration.md)
- [AI Copilot Nodes](../ai/build/node-reference/ai-copilot/overview.md)
- [AI Copilot Embedding](embedding.md)
- [AI Copilot for Voice](voice/voice-overview.md)
- [AI Copilot for Chat](chat.md)
- [Integration with Contact Centers](contact-center-integration.md)


