---
 title: "Agents" 
 slug: "agents" 
 hidden: false 
---
# Agents

All your conversational AI resources in one place.
## Description
<div class="divider"></div>

Agents contain collections of conversational AI resources, including [Flows]({{config.site_url}}ai/resources/build/flows/), [Lexicons]({{config.site_url}}ai/resources/build/lexicons/), [Endpoints]({{config.site_url}}ai/resources/deploy/endpoints/) and more. It is possible to work on a given Agent with multiple team members and Agents can deployed on a wide range of channels. 

## Create a new "Agent"
Below are the steps to create a Virtual Agent (VA) with Cognigy.AI. A VA is a bot that is designed to automatically handle interactions. It's simple to create one:

###1. The "Create Agent" wizard
When you login to Cognigy.AI as an Admin or Project Manager, you will be able to see "Create Agent" button on the top-left.
You can create Virtual Agents by clicking this button. A Virtual Agent is typically designed to tackle one use case and it can handle multiple user intents.

<img src="{{config.site_url}}ai/resources/images/create_agent.png" width="100%" style="margin-bottom: 5px">

###2. Step-by-step instructions to create your "Agent"
- Give your Virtual Agent(VA) a name that's describing its job. You will also be able to change the name later. 
- Select the primary language for your VA.
- Choosing a color helps you quickly navigate between VAs once you've set up a whole workforce.

<img src="{{config.site_url}}ai/resources/images/agent_wizard_basic_settings.png" width="100%" style="margin-bottom: 5px">

- If [Cognigy Live Agent]({{config.site_url}}live-agent/overview) is setup for your infrastructure, then you will be able to setup a [Live Agent Inbox]({{config.site_url}}live-agent/inboxes) and [Whisper Assist Flow]({{config.site_url}}ai/handover-providers/la-agent-assist-overview) for your Agent. You can see more details in the below section [3. Setup Project Live Agent Inbox]({{config.site_url}}ai/resources/agents/agents/#3-setup-project-live-agent-inbox)

- Select a Blank or any pre-build solution accelerators that can help you build the basic bot for you. 

<img src="{{config.site_url}}ai/resources/images/agent_wizard_solution_accelerator.png" width="100%" style="margin-bottom: 5px">

- Confirm the channels you want for the bot. You can also add more channels later.

<img src="{{config.site_url}}ai/resources/images/agent_wizard_channels.png" width="100%" style="margin-bottom: 5px">

- Select the pre-build skills if you want to use one for your bot.

<img src="{{config.site_url}}ai/resources/images/agent_wizard_skills.png" width="100%" style="margin-bottom: 5px">

- Click "Go to Agent" to view the created Virtual Agent.

<img src="{{config.site_url}}ai/resources/images/agent_wizard_go_to_agent.png" width="100%" style="margin-bottom: 5px">

###3. Setup Project Live Agent Inbox
The Live Agent section in the "Create Agent" wizard will only be visible if the Live Agent is configured at an infrastructure level (which means the FEATURE_USE_COGNIGY_LIVE_AGENT environment variable should be enabled for your environment).

- If you are an admin user and if no Live Agent Account is configured for your Organisation, then you will see an option in the "Create Agent" wizard to setup a Live Agent Account for your Organisation. Once the Live Agent Account is created, then you will be able to setup a [Live Agent Inbox]({{config.site_url}}live-agent/inboxes) for the Project by turning the toggle ON.

<img src="{{config.site_url}}ai/resources/images/agent_wizard_setup_liveagent_account.png" width="100%" style="margin-bottom: 5px">

- If you are a Project Manager, then you will not have an option to setup a Live Agent Account. Instead you need to contact your admin to first setup a Live Agent Account for your Organisation.

<img src="{{config.site_url}}ai/resources/images/agent_wizard_nonadmin-liveagent_setup.png" width="100%" style="margin-bottom: 5px">

- If the Live Agent Account is already configured for your Organisation, then you will be able to create a [Live Agent Inbox]({{config.site_url}}live-agent/inboxes) and the [Whisper Assist Flow]({{config.site_url}}ai/handover-providers/la-agent-assist-overview).

- Selecting "Don't use Whisper Agent Assist" will not setup any additional resources.

- Selecting "Setup Whisper Assist", a flow called "Whisper Assist" with a simple say node will be created and assigned as your Whisper Assist Flow.

<img src="{{config.site_url}}ai/resources/images/agent_wizard_setup_liveagent_inbox.png" width="100%" style="margin-bottom: 5px">

## Agent Dashboard

<div class="divider"></div>

<img src="{{config.site_url}}ai/resources/images/e56ba84-agent-overview.png" width="100%" style="margin-bottom: 5px">

The Agent Dashboard contains serves as an overview page for you Virtual Agent. It displays information that is relevant to your agent, including Analytics, Project Members, Recently Changed resources and more information on Cognigy.AI itself.

[![Version badge](https://img.shields.io/badge/Added in-v4.10.0-blue.svg)]({{config.site_url}})

**Analytics Widget**

As of release v4.10 Cognigy provides a completely new designed Analytics solution **"[Insights]({{config.site_url}}insights/cognigy-insights/)"**.

- When the "Insights" application is enabled in your product you will be led to the Insights Overview dashboard when clicking on the arrow icon in the Analytics widget on the Agents dashboard.
- When the Insights application is not enabled in your product you will be led to the Analytics page as before when clicking on the arrow icon in the Analytics widget on the Agents dashboard.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/7d29be7-Analytics_Insights_link.svg" width="100%" />
  <figcaption>Agent dashboard - Analytics widget</figcaption>
</figure>

More information on Cognigy Analytics you can find here: [Agent Analytics]({{config.site_url}}ai/tools/analytics/analytics/).

## Top Toolbar
<div class="divider"></div>

 <div class="right-image">
 <img src="{{config.site_url}}ai/resources/images/a6094e4-agent-header.jpg" width="70%" style="margin-bottom: 5px">
 </div>
 
Agents contain a **Top Toolbar** that is present in every view and provides quick access to Agent-specific resources like Search, Tasks and the Interaction Panel. The **Top Toolbar**, however, also contains items - like the **User Menu** and **Interaction Panel** -  that are always present. <br> With Cognigy.AI v4.11.0 tooltips are added to the Toolbar to improve the navigation with that hover option.

## Help Center Search

The **Help Center** Search feature can be used in order to find a potential answer in the list of articles provided under [https://support.cognigy.com/](https://support.cognigy.com/):

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/5586f34-helpCenterArticleSearchResult.PNG" width="100%" />
  <figcaption>List of available Help Center articles</figcaption>
</figure>

???+ info "Help Center"
    Head over to the [**Help Center**](https://support.cognigy.com/hc/en-us) for more information.

## Journeys
 <div class="right-image">
 <img src="{{config.site_url}}ai/resources/images/328d022-journeys.jpg" width="70%" style="margin-bottom: 5px">
 </div>


Journeys are on-screen tutorials that are part of the [Help Center](https://support.cognigy.com/hc/en-us) and provide step-by-step instructions, directly within the Cognigy.AI user interface. 

???+ info "Journeys"
    Head over to [**Journeys**]({{config.site_url}}ai/resources/agents/journeys/) for more information.

## Search
<div class="right-image">
<img src="{{config.site_url}}ai/resources/images/c519b4c-search.jpg" width="70%" style="margin-bottom: 5px">
</div>

The search interface can be used to search for resources that are part of the Agent. It provides a convenient way to quickly access resources and features an autocomplete interface. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/8b28e4e-search_screenshot.jpg" width="100%" />
</figure>

## Tasks
<div class="right-image">
<img src="{{config.site_url}}ai/resources/images/7325127-tasks.jpg" width="70%" style="margin-bottom: 5px">
</div>

Certain activities, like training **Intents**, importing **Snapshots** or the creation of a new **Agent**, generate so-called **Tasks**. A Task is an **asynchronous process** that can run in the background and is tied to the **notification system**.

???+ info "Tasks"
    Head over to the [**Help Center**](https://support.cognigy.com/hc/en-us) for more information.

## User Menu

 <div class="right-image">
 <img src="{{config.site_url}}ai/resources/images/bf9c1ca-usermenu.jpg" width="70%" style="margin-bottom: 5px">
 </div>


The User Menu provides access to a set of views. 

 <figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/a0487aa-usermenu-screenshot.jpg" width="100%" />
  <figcaption>User menu</figcaption>
</figure>


???+ info "User Menu"
    Head over to [**User Menu**]({{config.site_url}}ai/tools/user-menu/user-menu/) for more information.

## Interaction Panel

<div class="right-image">
 <img src="{{config.site_url}}ai/resources/images/Interaction Panel.png" width="30%" style="margin-bottom: 5px">
 </div>

The Interaction Panel can be used to interact with your virtual agent at any time. It is a useful tool that gives an impression of channel-specific output and can display more detailed debugging information. 

???+ info "Interaction Panel"
    Head over to [**Interaction Panel**]({{config.site_url}}ai/tools/interaction-panel/interaction-panel/) for more information.
