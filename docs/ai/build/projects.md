---
title: "Projects"
slug: "projects"
description: "Cognigy.AI Agents are projects that contain collections of Conversational AI resources, including Flows, Lexicons, Endpoints, and other resources. You can collaborate on a given Project with multiple team members."
hidden: false
---

# Projects

_Projects_ are collections of Conversational AI resources, including [Flows](../build/flows.md), [Lexicons](../empower/nlu/slots-and-lexicons/lexicons.md), [Endpoints](../deploy/endpoints/overview.md), and other resources. You can collaborate on a given Project with multiple team members.

Within a project, you can create virtual agents. A virtual agent is a bot that is designed to automatically handle interactions. A virtual agent is typically designed to tackle one use case, and it can handle multiple user intents.
Virtual agents can deploy on a wide range of channels.

## Create a Project

1. Go to the Cognigy.AI interface.
2. In the upper-left corner, click **Create Project**.
3. Give your project a unique name that describes its purpose. You will also be able to change the name later.
4. Select the primary language for your Project.
5. Select a color that will be associated with your Project.
6. _(Optional)_ Activate **Set up Live Agent**. For more information, refer to the [Create an Project with Live Agent Flow](#create-a-project-with-live-agent-flow) section.
7. Click **Next: Select Solution Accelerator**.
8. Select **Blank** or any pre-build solution accelerators that can help you build a specific virtual agent for you.
9. Select an Endpoint you want to use first for the Project. You can also add more Endpoints later.
10. Select the pre-build skills if you want to use one for your Project.
11. Click **Go to Project** to view the created Project.

Once these steps are completed, your Project setup is finished.

## Create a Project with Live Agent Flow

The setup of the Live Agent depends on your project role:

- If you are an **admin** and no Live Agent Account is configured for your organization, you will see an option in the **Create Project** wizard to set up a Live Agent Account.
- If you are a **project manager**, you do not have the option to set up a Live Agent Account. Instead, contact your admin to set up a Live Agent Account for your organization.

For on-premises installations, the **Live Agent** section in the **Create Project** wizard will only be visible if the Live Agent is configured at the infrastructure level, which requires the `FEATURE_USE_COGNIGY_LIVE_AGENT` environment variable to be enabled.

If the Live Agent Account is already configured for your organization, you can create a Project with a Live Agent Flow by following these steps:

1. Create a [Live Agent Inbox](../../live-agent/settings/inboxes.md) by activating **Create Cognigy Live Agent Inbox**.
2. Configure [AI Copilot](../../live-agent/assistants/overview.md) in the **Copilot** section by selecting one of the following options:
    - **Disable AI Copilot** — this option doesn't require any additional resources. AI Copilot functionalities will be turned off.
    - **Enable AI Copilot** — this option creates an AI Copilot Flow. This Flow includes a Say Node, which allows the system to communicate messages. This AI Copilot Flow will be assigned as the one you use for AI Copilot interactions.

Complete the agent setup with the Live Agent feature by following the steps as you would for a [simple Project](#create-a-project).

## Project Dashboard

The Project Dashboard serves as an overview page for your Project. It displays relevant information about your agent, including Analytics, Project Members, Recently Changed resources, and additional information about Cognigy.AI itself.

### Analytics Widget

As of release v4.10, Cognigy provides a completely new designed Analytics solution called [Insights](../../insights/overview.md).

- When the Insights application is enabled in your product, clicking on the arrow icon in the Analytics widget on the Projects dashboard will lead you to the Insights Overview dashboard.
- When the Insights application is not enabled in your product, clicking on the arrow icon in the Analytics widget on the Projects dashboard will still lead you to the Analytics page, just as before.

Find more information about Cognigy Analytics on the [Analytics](../analyze/overview.md) page.

## Top Toolbar

Projects have a Top Toolbar in every view, offering quick access to Project-specific resources, such as Search, Tasks, and the Interaction Panel. The Top Toolbar also includes items, such as the User Menu and Interaction Panel, that are consistently available.

With Cognigy.AI version 4.11.0, tooltips have been added to the Toolbar to enhance navigation through hover interactions.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/projects/toolbar.png">
</figure>

### Help Center Search

The Help Center Search feature allows you to search for potential answers within the list of articles available on the [Cognigy Help Center](https://support.cognigy.com/) website.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/projects/HelpCenter_search_result.png"/>
  <figcaption>List of available Help Center articles</figcaption>
</figure>

### Journeys

{! _includes/release-notes/cognigy-journeys-removal.md !}

Journeys are on-screen tutorials that are a part of the [Cognigy Help Center](https://support.cognigy.com/hc/en-us) and offer step-by-step instructions directly within the Cognigy.AI user interface.

<figure>
 <img class="image-center" src="../../../_assets/ai/build/projects/toolbar_journeys.png">
</figure>

Head over to [Journeys](#journeys) for more information.

### Search

The Search interface can be utilized to search for resources within the Project.
It offers a convenient way to promptly access resources and includes an autocomplete feature.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/projects/toolbar_search.png">
</figure>

<figure>
  <img class="image-center" src="../../../_assets/ai/build/projects/search.png"/>
</figure>

### Tasks

[![Version badge](https://img.shields.io/badge/Updated in-v4.65-blue.svg)](../../release-notes/4.65.md)

_Tasks_ are specific activities, such as training Intents, importing Snapshots, or creating a new Project. A Task is an asynchronous process that can run in the background and is associated with the notification system.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/projects/toolbar_taskmenu.png">
</figure>

#### Task Panel

The Task Panel provides an overview of both current and previous tasks,
serving as a high-level change log for relevant activities.
It is accessible by clicking the **Task** icon ![task-menu](../../_assets/icons/task-menu.svg) located at the top-right of the Cognigy.AI interface.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/projects/toolbar_taskmenu.png">
</figure>

The Task Panel displays both ongoing and finished tasks.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/projects/task-panel.png"/>
</figure>

To navigate to the source of the launched task, click the task in the list.

Note that only the most recent 100 tasks are visible on the Task panel.
To view tasks beyond the latest 100,
use the [Get Tasks](https://api-trial.cognigy.ai/openapi#get-/v2.0/tasks) API request.
When making the API request, include the `limit` and `skip` parameters.
For example, if you want to see the previous 100 tasks not displayed in the UI,
set `limit` to `100` and `skip` to `100`.
This means
you are requesting to skip the first 100 tasks
and display the next 100 to view the preceding tasks that are not visible on the UI.

### User Menu

The User Menu provides access to a set of views.

 <figure>
   <img class="image-center" src="../../../_assets/ai/build/projects/toolbar_usermenu.png">
 </figure>

Head over to the [User Menu](../administer/user-menu/overview.md) documentation for more information.

### Interaction Panel

The Interaction Panel can be used to interact with your virtual agent at any time. It is a useful tool that provides a representation of channel-specific output and can display more detailed debugging information.

<figure>
   <img class="image-center" src="../../../_assets/ai/build/projects/toolbar_Interaction_Panel.png" style="margin-bottom: 5px">
 </figure>

Head over to the [Interaction Panel](../test/interaction-panel/overview.md) documentation for more information.


## Notifications

After a task is completed, in the upper-right corner of the Cognigy.AI interface, you will receive one of the following notifications:

- **Success Notification**. This notification is displayed when a task is successfully completed.
- **Error Notification**. This notification is displayed when a task encounters an error and fails. The notification provides a description of the issue.
