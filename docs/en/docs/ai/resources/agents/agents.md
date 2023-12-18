---
title: "Agents" 
slug: "agents"
description: "Cognigy.AI Agents are projects that contain collections of Conversational AI resources, including [Flows](../build/flows.md), [Lexicons](../build/lexicons.md), [Endpoints](../deploy/endpoints.md), and other resources. You can collaborate on a given Agent with multiple team members."
hidden: false 
---
# Agents

_Agents_ are projects that contain collections of Conversational AI resources, including [Flows](../build/flows.md), [Lexicons](../build/lexicons.md), [Endpoints](../deploy/endpoints.md), and other resources. You can collaborate on a given Agent with multiple team members.

Within an Agent as a project, you can create virtual agents. A virtual agent is a bot that is designed to automatically handle interactions. A virtual agent is typically designed to tackle one use case, and it can handle multiple user intents.
Virtual agents can deploy on a wide range of channels. 

## Create an Agent

1. Go to the Cognigy.AI interface.
2. In the upper-left corner, click **Create Agent**.

    <img class="image-center" src="{{config.site_url}}ai/resources/images/create_agent.png" width="80%" style="margin-bottom: 5px">

3. Give your project a unique name that describes its purpose. You will also be able to change the name later.
4. Select the primary language for your Agent.
5. Select a color that will be associated with your Agent.
6. _(Optional)_ Activate **Set up Live Agent**. For more information, refer to the [Create an Agent with Live Agent Flow](#create-an-agent-with-live-agent-flow) section.
7. Click **Next: Select Solution Accelerator**.

    <img class="image-center" src="{{config.site_url}}ai/resources/images/agent_wizard_basic_settings.png" width="80%">

8. Select **Blank** or any pre-build solution accelerators that can help you build a specific virtual agent for you.

    <img class="image-center" src="{{config.site_url}}ai/resources/images/agent_wizard_solution_accelerator.png" width="80%">

9. Select an Endpoint you want to use first for the Agent. You can also add more Endpoints later.

    <img class="image-center" src="{{config.site_url}}ai/resources/images/agent_wizard_channels.png" width="80%">

10. Select the pre-build skills if you want to use one for your Agent.

    <img class="image-center" src="{{config.site_url}}ai/resources/images/agent_wizard_skills.png" width="80%">

11. Click **Go to Agent** to view the created Agent.

    <img class="image-center" src="{{config.site_url}}ai/resources/images/agent_wizard_go_to_agent.png" width="80%">

Once these steps are completed, your Agent setup is finished.

## Create an Agent with Live Agent Flow

The setup of the Live Agent depends on your project role:

- If you are an **admin** and no Live Agent Account is configured for your organization, you will see an option in the **Create Agent** wizard to set up a Live Agent Account.
- If you are a **project manager**, you do not have the option to set up a Live Agent Account. Instead, contact your admin to set up a Live Agent Account for your organization.

For on-premises installations, the **Live Agent** section in the **Create Agent** wizard will only be visible if the Live Agent is configured at the infrastructure level, which requires the `FEATURE_USE_COGNIGY_LIVE_AGENT` environment variable to be enabled.

If the Live Agent Account is already configured for your organization, you can create an Agent with a Live Agent Flow by following these steps:

1. Create a [Live Agent Inbox](../../../live-agent/settings/inboxes.md) by activating **Create Cognigy Live Agent Inbox**.
2. Configure [AI Copilot](../../../live-agent/assistants/overview.md) in the **Copilot** section by selecting one of the following options:
    - **Disable Agent Assist** — this option doesn't require any additional resources. AI Copilot functionalities will be turned off.
    - **Enable Agent Assist** — this option creates an AI Copilot Flow. This Flow includes a Say Node, which allows the system to communicate messages. This AI Copilot Flow will be assigned as the one you use for AI Copilot interactions.
   
    <img src="{{config.site_url}}ai/resources/images/agent_wizard_setup_liveagent_inbox.png" width="80%" style="margin-bottom: 5px">

Complete the agent setup with the Live Agent feature by following the steps as you would for a [simple agent](#create-an-agent).

## Agent Dashboard

The Agent Dashboard serves as an overview page for your Agent. It displays relevant information about your agent, including Analytics, Project Members, Recently Changed resources, and additional information about Cognigy.AI itself.

<img class="image-center" src="{{config.site_url}}ai/resources/images/Agent_dashboard.png" width="80%">

### Analytics Widget

As of release v4.10, Cognigy provides a completely new designed Analytics solution called [Insights](../../../insights/cognigy-insights.md).

- When the Insights application is enabled in your product, clicking on the arrow icon in the Analytics widget on the Agents dashboard will lead you to the Insights Overview dashboard.
- When the Insights application is not enabled in your product, clicking on the arrow icon in the Analytics widget on the Agents dashboard will still lead you to the Analytics page, just as before.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/conversation-count-chart.png" width="100%"/>
  <figcaption>Agent dashboard - Analytics widget</figcaption>
</figure>

You can find more information about Cognigy Analytics on the [Agent Analytics](../../tools/analytics/analytics.md) page.

## Top Toolbar

Agents have a Top Toolbar in every view, offering quick access to Agent-specific resources, such as Search, Tasks, and the Interaction Panel. The Top Toolbar also includes items, such as the User Menu and Interaction Panel, that are consistently available. 

With Cognigy.AI version 4.11.0, tooltips have been added to the Toolbar to enhance navigation through hover interactions.

<div class="right-image">
<img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar.png">
</div>

### Help Center Search

The Help Center Search feature allows you to search for potential answers within the list of articles available on the [Cognigy Help Center](https://support.cognigy.com/) website.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/HelpCenter_search_result.png"/>
  <figcaption>List of available Help Center articles</figcaption>
</figure>

### Journeys

Journeys are on-screen tutorials that are a part of the [Cognigy Help Center](https://support.cognigy.com/hc/en-us) and offer step-by-step instructions directly within the Cognigy.AI user interface.

<div class="right-image">
 <img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar_journeys.png">
</div>

Head over to [Journeys](journeys.md) for more information.

### Search

The Search interface can be utilized to search for resources within the Agent.
It offers a convenient way to promptly access resources and includes an autocomplete feature. 

<div class="right-image">
  <img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar_search.png">
</div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/search.png"/>
</figure>

### Tasks

Tasks are specific activities, such as training Intents, importing Snapshots, or creating a new Agent. A Task is an asynchronous process that can run in the background and is associated with the notification system.

<div class="right-image">
<img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar_taskmenu.png">
</div>

Head over to the [Tasks](../../resources/agents/tasks.md) for more information.

### User Menu

The User Menu provides access to a set of views.

 <div class="right-image">
 <img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar_usermenu.png">
 </div>

 <figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/user_menu.png" />
  <figcaption>User menu</figcaption>
</figure>

Head over to [User Menu](../../tools/user-menu/user-menu.md) for more information.

### Interaction Panel

The Interaction Panel can be used to interact with your virtual agent at any time. It is a useful tool that provides a representation of channel-specific output and can display more detailed debugging information.

<div class="right-image">
 <img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar_Interaction_Panel.png" style="margin-bottom: 5px">
 </div>

Head over to [Interaction Panel](../../tools/interaction-panel/interaction-panel.md) for more information.
