---
title: "Manage AI Agents"
slug: "manage-ai-agents"
description: "Manage the new generation of AI Agents with Cognigy.AI. The AI Agent Management interface lets you create, edit, and delete AI Agents."
hidden: false
---

# Manage AI Agents

[![Version badge](https://img.shields.io/badge/Added in-v4.91(Beta)-purple.svg)](../../../release-notes/4.91.md)

To manage a new generation of AI Agents, Cognigy.AI introduces the _AI Agent Management_ interface,
where you can create, edit, and delete AI Agents.

## Create an AI Agent

You can create an AI Agent from scratch or hire an AI Agent from the Job Market, designed for your industry, such as airlines, food services, or sales, and customize it to fit your business needs.

To create an AI Agent, select one of the following options:

=== "Create from Scratch"

    1. In the left-side menu of the **Project** page, select **Build > AI Agents**.
    2. Click **Create AI Agent** if you are creating an AI Agent for the first time, or click **+ New AI Agent** on the **AI Agents** page if you have created at least one AI Agent before.
    3. In the **General Settings** step, fill in the following fields:
        - **Name** — enter a name for your AI Agent. This name will be visible to end users when the AI Agent greets them in the chat or when one AI Agent transfers the conversation to another AI Agent. For example, `Hello, my name is Sara. How can I help you?` or `Our support specialist Alex will help with this question, transferring the conversation now`.
        - **Description** — enter a description of the AI Agent that shapes its behavior and enhances its ability to understand the desired communication style. For example, describe the AI Agent as follows: `Anna works at ACME and is highly skilled at making customers feel comfortable.`
    4. In the **Avatar** section, select avatar of your choice or upload your custom one by clicking **+** next to avatars.
       You can use any image as an avatar for your AI Agent, or create a Cognigy-style avatar using the [Cognigy.AI PSD template](https://docs.cognigy.com/_assets/ai/empower/agentic-ai/Template.psd). To open and customize the template, you will need Adobe Photoshop or [Paint.net](https://www.getpaint.net/) with the [PSD plugin](https://www.psdplugin.com/) installed. The requirements for the avatar are as follows:
        - Use an alpha channel for a transparent background.
        - Set the recommended width to 136px.
        - Set the recommended height to 184px.
        - Save the file as `.png`.
        - Include `_optimized` in the file name.
    5. Click **Next**.
    6. In the **Speaking Style** step, configure how the AI Agent's choice of wording is influenced by the selected speaking style, which can affect the tone and clarity of its responses:
        - **Concise/Comprehensive** — adjust the slider to the left for brief responses and to the right for detailed responses.
        - **Formal/Informal** — adjust the slider to the left for more casual and conversational responses, and to the right for professional and structured responses.
    7. Click **Next**.
    8. In the **Knowledge & Instructions** step, configure the following fields:
        - **Instructions** — provide special instructions to your AI Agent in bullet-point form. For example:
        ```txt
         - Greet users warmly and professionally.
         - Keep responses concise; expand only if requested.
         - Start with a formal tone; adjust as needed.
         - Share troubleshooting links for technical issues.
         - Apologize if errors occur, then correct promptly.
        ```
        - **Knowledge Store** — select the [Knowledge Store](../knowledge-ai/overview.md#knowledge-store) that the AI Agent will use to access information from the documents you provide. By accessing and understanding knowledge bases, these AI Agents can provide more accurate, context-aware, and helpful responses to user queries. Note that you need to configure the [embedding model](../knowledge-ai/overview.md#which-model-to-choose) to use Knowledge AI.
    9. Click **Next**.
    10. In the **Data Privacy & Security** step, configure the following fields:
        - **Contact Profile Information** — select which information the AI Agent should use from the [Cognigy Contact Profile](../../analyze/contact-profiles.md):
            - **None** — no data will be used from the Contact Profile. This option is selected by default.
            - **Selected Profile Fields** — enter specific fields from the Contact Profile for targeted data use. Specify the field using the [Profile keys](../../analyze/contact-profiles.md#predefined-fields) format and press ++enter++ to apply it.
            - **Complete Profile** — use all fields from the Contact Profile to provide comprehensive user details. 
            - **Profile Memories** — use the [Memories](../../analyze/contact-profiles.md#predefined-fields) field from the Contact Profile.
        - **Safety Instructions** — adjust the AI Agent's safety settings to guide content generation, interactions, and responses, ensuring compliance with ethical, legal, and operational standards. Although these settings reduce risks, occasional unexpected outputs may still occur. The selected safety instructions are included in the prompt to enhance safety, which may increase token usage. Select the safety instructions you want to apply:
            - **Avoid harmful content** — prevent generating content that could be harmful, offensive, or abusive to end users.
            - **Avoid ungrounded content** — prevent generating content that is based on speculation or unsupported claims, ensuring it is reliable and verifiable.
            - **Avoid copyright infringements** — prevent generating content that violates intellectual property rights or uses copyrighted material without authorization.
            - **Prevent jailbreak and manipulations** — prevent attempts to bypass security measures or manipulate the AI Agent into producing unauthorized or unsafe content.
    11. Click **Next**.
    12. In the **Job Selection** step, select one of the following options:
        - **Default** — create an AI Agent with a predefined Flow, then click **Create & Chat** to save changes and open the Flow with the created AI Agent.
        - **Personality Only** — create an AI Agent without a predefined Flow, then click **Create** to save changes.
        - **Job** — select one of the available jobs you want to assign to the AI Agent, then click **Create** to save changes.

=== "Hire from Job Market"

    1. In the left-side menu on the **Project** page, select **Build > AI Agents**.
    2. On the **AI Agents** page, click **Hire AI Agent**. The **Job Market** page displays a list of available AI Agents to hire.
    3. Hover your cursor over the desired AI Agent template and click **Hire**. This action will trigger the **Hire AI Agent** task in the Task Manager.
    4. Check the status of the **Hire AI Agent** task by clicking ![task-menu](../../../_assets/icons/task-menu.svg) in the upper-right corner.
    5. Once the task is complete, go to **Build > Flows**  and find the Flow with the AI Agent name from the template you installed.

## Edit an AI Agent

To edit an AI Agent, follow these steps:

1. On the **AI Agents** page, select the AI Agent you want to edit by clicking on its card.
2. Make the desired changes and click **Save**.

## Combine Custom and Hired AI Agents

You can reassign your custom AI Agent to take on the responsibilities of the hired AI Agent.
To do this, hire an AI Agent from the Job Market
and configure their interaction by defining which functions and personality traits should be combined.
This approach lets you combine the strengths of both AI Agents: ready-made job functions from the hired AI Agent and your brand's AI Agent persona from your custom AI Agent.

To combine custom and hired AI Agents, follow these steps:

1. On the **AI Agents** page, select **+ Hire AI Agent**. The **Job Market** page displays a list of available AI Agents to hire.
2. Hover your cursor over the desired AI Agent template and click ![expand](../../../_assets/icons/expand.svg) **> Hire & Configure**.
3. In the **Select an AI Agent to Combine** window, use the search field to find an AI Agent by name, then select the AI Agent from the list.
4. Click **Combine**. This action will trigger the **Hire AI Agent** and **Merge Package** tasks in the Task Manager.
5. In the left-side menu of the **Project** page, select **Build > Flows**.
6. Select the Flow that belongs to the hired AI Agent. In the Flow, you will see an AI Agent Node with your custom AI Agent persona.

## Copy the AI Agent Reference ID

Reference IDs can be helpful if you want to edit AI Agents [via the API](https://api-trial.cognigy.ai/openapi#get-/beta/aiagents).

To copy the Reference ID of an AI Agent, follow these steps:

1. On the **AI Agents** page, hover your cursor over the card of the AI Agent for which you want to copy the reference ID.
2. Click the ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) icon and select **Copy Reference ID**. The ID will be copied to the clipboard.

## Delete an AI Agent

Before deleting an AI Agent, make sure the AI Agent isn't used in any Flows.
Otherwise, Nodes linked to the deleted AI Agent may cause the Flow to fail.

To delete an AI Agent, follow these steps:

1. On the **AI Agents** page, hover your cursor over the card of the AI Agent you want to delete.
2. Click the ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) icon and select **Delete**.
3. Click **Confirm**.

## More Information

- [Overview](overview.md)
- [Getting Started](getting-started.md)
- [Build LLM-Driven Flows](build-llm-driven-flows.md)