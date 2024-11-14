---
title: "Agentic AI (Beta)"
slug: "agentic-ai"
description: "To manage a new generation of AI Agents, Cognigy.AI introduces the AI Agent Management interface, where you can create, edit, and delete humanlike AI Agents."
hidden: false
---

# Agentic AI (Beta)

{! _includes/ai/beta.md !}

_Agentic AI_ represents a new generation of autonomous, goal-oriented AI Agents designed to boost operational efficiency, enhance customer satisfaction, and drive superior enterprise outcomes.

Key features of Agentic AI:

- **Humanlike Reasoning**. Independently analyzes requests to determine the best course of action.
- **Autonomous Decision-Making**. Dynamically navigates and utilizes tools to accomplish tasks successfully.
- **Collaborative AI**. Works seamlessly with other AI Agents and humans to deliver efficient and accurate solutions.
- **Hyper-Personalization**. Built-in memory enables context-aware interactions, creating uniquely tailored experiences for each customer.

To manage a new generation of AI Agents, Cognigy.AI introduces the AI Agent Management interface,
where you can create, edit, and delete AI Agents.

## Prerequisites

Before using this feature, you need:

1. Create an account in one of the Generative AI Providers:
    - [OpenAI](https://platform.openai.com/). You need to have a paid account or be a member of an organization that provides you access. Open your OpenAI user profile, copy the existing API Key, or create a new one and copy it.
    - [Azure OpenAI](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service). You need to have a paid account or be a member of an organization that provides you access. Ask your Azure Administrator to provide API Key, resource name, and deployment model name.
    - [Anthropic Claude](https://console.anthropic.com/docs). You need to be a [member of an organization](https://console.anthropic.com/docs/access) that provides you access. 
2. Add two models:
    - A primary model to control the agent. It can be `gpt-4o` or `gpt-4o-mini` powered by [OpenAI](llms/providers/openai.md) or [Azure OpenAI](llms/providers/microsoft-azure-openai.md), or `claude-3-opus`, `claude-3-haiku`, or `claude-3-sonnet` by [Anthropic](llms/providers/anthropic.md).
    - If you want to enable the [Knowledge AI](knowledge-ai/overview.md) feature for your AI Agent, make sure to add an embedding model in addition to the primary model. We recommend using `text-embedding-ada-002` to enhance Agentic AI capabilities.
  
## Create an AI Agent

You can create an AI Agent from scratch or select a pre-made AI Agent template tailored to your industry,
such as airlines, finance, insurance, or utilities,
and customize it to suit your business needs.

To create an AI Agent, select one of the following options:

=== "Create AI Agent From Scratch"

    1. Open the Cognigy.AI interface.
    2. In the left-side menu of the **Projects** page, select a Project.
    3. In the left-side menu of the **Project** page, select **Build > AI Agents**.
    4. Click **Create AI Agent** if you are creating an agent for the first time, or click **+ New AI Agent** on the AI Agents page if you have created at least one AI Agent before.
    5. In the **General Settings** step, fill in the following fields:
        - **Name** — enter a name for your AI Agent. This name will be visible to end users when the AI Agent greets them in the chat or when one AI Agent transfers the conversation to another AI Agent. For example, `Hello, my name is Sara. How can I help you?` or `Our support specialist Alex will help with this question, transferring the conversation now`.
        - **Description** — enter a description of the AI Agent that shapes its behavior and enhances its ability to understand the desired communication style. For example, describe the AI Agent as follows: `Anna works at ACME and is highly skilled at making customers feel comfortable.`
    6. In the **Avatar** section select avatar of your choice or upload your custom one by clicking **+** next to avatars.
       You can create your own avatar for AI Agents using the [Cognigy.AI PSD template](https://docs.cognigy.com/_assets/ai/empower/agentic-ai/Template.psd). To open and customize the template, you will need Adobe Photoshop or [Paint.net](https://www.getpaint.net/) with the [PSD plugin](https://www.psdplugin.com/) installed. The requirements for the avatar are as follows:
        - Use an alpha channel for a transparent background.
        - Set the recommended width to 136px.
        - Set the recommended height to 184px.
        - Save the file as `.png`.
        - Include `_optimized` in the file name.
    7. Click **Next**.
    8. In the **Speaking Style** step, configure how the AI Agent's choice of wording is influenced by the selected speaking style, which can affect the tone and clarity of its responses:
        - **Concise/Comprehensive** — adjust the slider to the left for brief responses and to the right for detailed responses.
        - **Formal/Informal** — adjust the slider to the left for more casual and conversational responses, and to the right for professional and structured responses.
    9. Click **Next**.
    10. In the **Knowledge & Instructions** step, configure the following fields:
        - **Instructions** — provide special instructions to your AI Agent in bullet-point form. For example:
        ```txt
         - Greet users warmly and professionally.
         - Keep responses concise; expand only if requested.
         - Start with a formal tone; adjust as needed.
         - Share troubleshooting links for technical issues.
         - Apologize if errors occur, then correct promptly.
        ```
        - **Knowledge Store** — select the [Knowledge Store](knowledge-ai/overview.md#knowledge-store) that the AI Agent will use to access information from the documents you provide. By accessing and understanding knowledge bases, these AI Agents can provide more accurate, context-aware, and helpful responses to user queries.
    11. Click **Next**.
    12. In the **Data Privacy & Security** step, configure the following fields:
        - **Contact Profile Information** — select which information the AI Agent should use from the [Cognigy Contact Profile](../analyze/contact-profiles.md):
            - **None** — no data will be used from the Contact Profile. This option is selected by default.
            - **Selected Profile Fields** — enter specific fields from the Contact Profile for targeted data use. Specify the field using the [Profile keys](../../analyze/contact-profiles.md#predefined-fields) format and press ++enter++ to apply it.
            - **Completed Profile** — use all fields from the Contact Profile to provide comprehensive user details. 
            - **Profile Memories** — use the [Memories](../../analyze/contact-profiles.md#predefined-fields) field from the Contact Profile.
        - **Safety Instructions** — configure the risk mitigation measures for the AI Agent. The built-in instructions apply to content generation, chats, Q&A, rewriting, summarization, and other tasks. The selected components are included in the prompt to enhance safety, which may increase token usage. Select one of the following options:
            - **None** — no safety guidelines are applied.
            - **Standard** — apply standard safety guidelines based on Cognigy's instructions. This option is selected by default.
            - **Custom** — define your custom safety guidelines.
    13. Click **Create & Chat** to save changes and open the Flow with the created AI Agent, or click **Create** to save changes without opening the Flow.

=== "Create AI Agent From Template"

    1. Open the Cognigy.AI interface.
    2. In the left-side menu on the **Projects** page, select a Project.
    3. In the left-side menu on the **Project** page, select **Build > AI Agents**.
    4. On the **AI Agents** page, click **Hire AI Agent**. The **Job Market** page with a list of AI Agent templates will open.
    5. Hover your cursor over the desired AI Agent template and click **Hire**. This action will trigger the **Hire AI Agent** task in the Task Manager.
    6. Check the status of the **Hire AI Agent** task by clicking ![task-menu](../../_assets/icons/task-menu.svg) in the upper-right corner.
    7. Once the task is complete, go to **Build > Flows**  and find the Flow with the AI Agent name from the template you installed.

### Edit an AI Agent

To edit an AI Agent, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu of the **Projects** page, select a Project.
3. In the left-side menu of the **Project** page, select **Build > AI Agents**.
4. On the **AI Agents** page, select the AI Agent you want to edit by clicking on its card.
5. Make the desired changes and click **Save**.

## Add AI Agents to a Flow

When you create an AI Agent and click **Create & Chat**, a default Flow with your AI Agent's name will be created.

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
7. In the Flow editor, click **+** to open the **Node Selection** menu.
8. On the **By Function** tab, go to the **AI** tab and select the [AI Agent](../build/node-reference/ai/ai-agent.md) Node from the list. The AI Agent Node will appear in the Flow editor.
9. Left-click the Node to open the Flow editor.
10. Select the desired AI Agent from the AI Agent list. Configure the [rest of the fields](../build/node-reference/ai/ai-agent.md#ai-agent-settings).
11. Click **Save Node**.
12. Below the parent AI Agent Node, configure the [child Tool Node](../build/node-reference/ai/ai-agent.md#ai-agent-tool-settings). Specify the tool's use case, such as unlocking an account or registering a new user. Make sure the tool's name and description are clear and informative for the model.
13. Click **Save Node**.
14. Below the child Tool Node, add an Action Node. If you are editing the AI Agent for the first time, replace the placeholder Node with an Action Node. The Action Node can be any Node that allows your AI Agent to perform an action, such as sending an [HTTP request](../build/node-reference/service/http-request.md), [sending an email](../build/node-reference/data/email-notification.md), or [querying a database](../build/node-reference/service/mongo-db.md). This Action Node performs the task that the tool handles.
15. Below the Action Node, add a [Resolve Tool Action](../build/node-reference/ai/resolve-tool-action.md) Node to control how the AI Agent responds after executing the Action Node. The Node returns the conversation to the parent AI Agent Node, providing the option to choose a different tool.

### Configure Additional Nodes

To enhance the AI Agent's Flow, you can add more Nodes related to the Agentic AI feature:

- [Add Memory](../build/node-reference/analytics/add-memory.md)
- [AI Agent Handover](../build/node-reference/ai/ai-agent-handover.md)
- [Add Transcript Steps](../build/node-reference/service/add-transcript-steps.md)
- [Get Transcript](../build/node-reference/service/get-transcript.md)

## Other Operations

### Copy the AI Agent Reference ID

Reference IDs can be helpful if you want to edit AI Agents [via the API](https://api-trial.cognigy.ai/openapi#get-/beta/aiagents).

To copy the Reference ID of an AI Agent, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu of the **Projects** page, select a Project.
3. In the left-side menu of the **Project** page, select **Build > AI Agents**.
4. On the **AI Agents** page, hover your cursor over the card of the AI Agent for which you want to copy the reference ID.
5. Click the ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) icon and select **Copy Reference ID**. The ID will be copied to the clipboard.

### Delete an AI Agent

Before deleting an AI Agent, make sure the AI Agent isn't used in any Flows.
Otherwise, Nodes linked to the deleted AI Agent may cause the Flow to fail.

To delete an AI Agent, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu of the **Projects** page, select a Project.
3. In the left-side menu of the **Project** page, select **Build > AI Agents**.
4. On the **AI Agents** page, hover your cursor over the card of the AI Agent you want to delete.
5. Click the ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) icon and select **Delete**.
6. Click **Confirm**.

## More Information

- AI Agent Nodes:
    - [AI Agent](../build/node-reference/ai/ai-agent.md)
    - [Resolve Tool Action](../build/node-reference/ai/resolve-tool-action.md)
    - [AI Agent Handover](../build/node-reference/ai/ai-agent-handover.md)
    - [Add Memory](../build/node-reference/analytics/add-memory.md)
    - [Get Transcript](../build/node-reference/service/get-transcript.md)
    - [Add Transcript Step](../build/node-reference/service/add-transcript-steps.md)
- [LLMs](llms/overview.md)
- [Knowledge AI](knowledge-ai/overview.md)