---
title: "AI Agent Management"
slug: "ai-agent-management"
hidden: false
---

# AI Agent Management

_Agentic AI_ represents a new generation of autonomous, goal-oriented, humanlike AI Agents designed to boost operational efficiency, enhance customer satisfaction, and drive superior enterprise outcomes.

Key features of Agentic AI:

- **Humanlike Reasoning**. Independently analyzes requests to determine the best course of action.
- **Autonomous Decision-Making**. Dynamically navigates and utilizes tools to accomplish tasks successfully.
- **Collaborative AI**. Works seamlessly with other AI Agents and humans to deliver efficient and accurate solutions.
- **Hyper-Personalization**. Built-in memory enables context-aware interactions, creating uniquely tailored experiences for each customer.

To manage a new generation of AI Agents, Cognigy.AI introduces the AI Agent Management interface,
where you can create, edit, and delete humanlike AI Agents.

## Create an AI Agent

To create a humanlike AI Agent, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu of the **Projects** page, select a Project.
3. In the left-side menu of the **Project** page, select **Build > AI Agents**.
4. On the **AI Agents** page, click **+ New AI Agent**.
5. In the **General Settings** step, fill in the following fields:
    - **Name** — enter a name for your AI Agent. This name will be for internal reference only and will not be visible to your end users.
    - **Description** — enter a description of the AI Agent that shapes its behavior and enhances its ability to understand the desired communication style. For example, describe the AI Agent as follows: `A laid-back individual who jokes easily, making others feel comfortable with a relaxed tone.`
6. Click **Next**.
7. In the **Speaking Style** step, configure how the AI Agent's choice of wording is influenced by the selected speaking style, which can affect the tone and clarity of its responses:
    - **Concise/Comprehensive** — adjust the slider to the left for brief responses and to the right for detailed responses.
    - **Formal/Informal** — adjust the slider to the left for more casual and conversational responses, and to the right for professional and structured responses.
8. Click **Next**.
9. In the **Knowledge & Instruction** step, configure the following fields:
    - **Instructions** — fine-tune AI Agents through custom commands and settings.
    - **Knowledge Store** — select the Knowledge Store from which the AI Agent will access information from documents you provide. By accessing and understanding knowledge bases, these AI Agents can provide more accurate, context-aware, and helpful responses to user queries.
10. Click **Next**.
11. In the **Data Privacy & Security** step, configure the following fields:
    - **Contact Profile Information** — select which information the AI Agent should use from the Cognigy Contact Profile.
    - **Safety Instructions** — customize how the AI Agent handles sensitive topics by selecting a safety level: no guidance, standard safety based on Cognigy-crafted instructions, or custom guidelines.
12. Click **Create & Chat** to save changes and open the flow with the created agent, or click **Create** to save changes without opening the flow.

## Edit an AI Agent

To edit a humanlike AI Agent, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu of the **Projects** page, select a Project.
3. In the left-side menu of the **Project** page, select **Build > AI Agents**.
4. On the **AI Agents** page, select the AI Agent you want to edit by clicking on its card.
5. Make the desired changes and click **Save**.

## Add AI Agents to a Flow

When you create a humanlike AI Agent and click **Create & Chat**, a default Flow with your AI Agent's name will be created.

However, you can create a dedicated Flow and add more than one AI Agent to it.

To do so, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu of the **Projects** page, select a Project.
3. In the left-side menu of the **Project** page, select **Build > Flow**.
4. On the **Flows** page, click **+ New Flow**.
5. In the **New Flow** window, fill in the following fields:
    - **Name** — create a meaningful name for your Flow. For example, `Customer Support`.
    - **Description** — this field is optional. Create a meaningful description for your Flow. For example, `Automates the processing of incoming orders and updates inventory accordingly`.
6. Click **Create**.
7. In the flow editor, click **+** to open the **Node Selection** menu.
8. On the **By Function** tab, go to the **AI** tab and select the **AI Agent** node from the list. The AI Agent node will appear in the Flow editor.
9. Right-click the node to open the Flow Editor.
10. Select the desired AI Agent from the AI Agent list.
11. Click **Save Node**.

## Hire an AI Agent

Instead of [creating creating humanlike AI Agents from scratch](#create-an-ai-agent)
or select a pre-made AI Agent template tailored to your industry,
such as airlines, finance, insurance, or utilities,
and customize it to suit your business needs.

To do so, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu on the **Projects** page, select a Project.
3. In the left-side menu on the **Project** page, select **Build > AI Agents**.
4. On the **AI Agents** page, click **Hire AI Agent**. The **Job Market** page will open.
5. Select an AI Agent from the list.

## Copy the AI Agent Reference ID

Reference IDs can be helpful if you want to edit humanlike AI Agents via the API.

To copy the Reference ID of a humanlike AI Agent, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu of the **Projects** page, select a Project.
3. In the left-side menu of the **Project** page, select **Build > AI Agents**.
4. On the **AI Agents** page, hover your cursor over the card of the AI Agent for which you want to copy the reference ID.
5. Click the ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) icon and select **Copy Reference ID**. The ID will be copied to the clipboard.

## Delete an AI Agent

Before deleting a humanlike AI Agent, make sure that it is not used in any of your Flows.  
Otherwise, all Flows related to the deleted AI Agent will stop working.

To delete a humanlike AI Agent, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu of the **Projects** page, select a Project.
3. In the left-side menu of the **Project** page, select **Build > AI Agents**.
4. On the **AI Agents** page, hover your cursor over the card of the AI Agent you want to delete.
5. Click the ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) icon and select **Delete**.
6. Click **Confirm**.

## More Information

- [Cheat Sheet: CognigyScript](https://support.cognigy.com/hc/en-us/articles/4403321637394-Cheat-Sheet-CognigyScript#general-0-0)
- [Input](../test/interaction-panel/input.md)
- [Context](../test/interaction-panel/context.md)
- [Profile](../test/interaction-panel/profile.md)