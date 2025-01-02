---
title: "Projects"
slug: "projects"
description: "Cognigy.AI Projects contain collections of Conversational AI resources, including Flows, Lexicons, Endpoints, and other resources. You can collaborate on a given Project with multiple team members."
hidden: false
tags:
  - Cognigy.AI
  - Projects
---

# Projects

[![Version badge](https://img.shields.io/badge/Updated in-v4.91-blue.svg)](../../release-notes/4.91.md)

_Projects_ are collections of Conversational AI resources, including [Flows](../build/flows.md), [Lexicons](../empower/nlu/slots-and-lexicons/lexicons.md), [Endpoints](../deploy/endpoints/overview.md), and other resources. You can collaborate on a given Project with multiple team members.

Within a project, you can create AI Agents.
An AI Agent is a bot that is designed to automatically handle interactions.
It is designed to tackle one use case, and it can handle multiple user intents.
AI Agents can deploy on a wide range of channels.

## Create a Project

1. Go to the Cognigy.AI interface.
2. In the upper-left corner, click the **Plus button** to create a Project.
3. Give your Project a unique name that describes its purpose. You will also be able to change the name later.
4. Select the primary language for your Project.
5. Select a color that will be associated with your Project.
6. _(Optional)_ Activate **Set up Live Agent**. For more information, refer to the [Create a Project with Live Agent Flow](#create-a-project-with-live-agent-flow) section.
7. Click **Next: Select Project Type**.
8. Select your Project type:

    === "Agentic AI (Beta)"
         8.1 Click **Next**.<br>
         8.2 Create your [first AI-driven Agent](../empower/agentic-ai/manage-ai-agents.md).
    
    === "Intent-driven AI"
         8.1 Click **Next**.<br> 
         8.2 Select **Blank** or any pre-built solution accelerators that can help you build a specific AI Agent.<br>
         8.3 Select an Endpoint you want to use first for the Project. You can also add more Endpoints later.<br>
         8.4 Select the pre-build skills if you want to use one for your Project.<br> 
         8.5 Click **Go to Project** to view the created Project.

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

Complete the Project setup with the Live Agent feature by following the steps as you would for a [simple Project](#create-a-project).

## Search Projects

The Projects are sorted by last activity, with the most recently updated Projects displayed at the top of the list.

To search for Projects in Cognigy.AI, follow these steps:

1. Go to the Cognigy.AI interface.
2. On the left side of the screen, navigate to the **Search Projects** filed.
3. Enter the name of the Project you're looking for. As you start typing the Project name in the search field, the search results will dynamically change, providing you with a list of Projects that match the entered text.
4. Select the Project you want to edit.

## Copy the Project ID

Project IDs can be helpful if you want to create, edit, or delete Projects via API requests.

You can copy the Project ID using one of the following methods:

=== "From the UI" 

    1. Go to the Cognigy.AI interface.
    2. In the left-side menu, find the Project you need and hover your cursor over it.
    3. Click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg).
    4. Select **Copy Project ID**. The ID will be copied to the clipboard.

=== "From the URL" 

    1. Go to the Cognigy.AI interface.
    2. In the left-side menu, select the Project you need.
    3. Copy the Project ID from your URL, for example, `https://app.cognigy.ai/project/642c6a2cb45919dfae7b4428/`, where the Project ID is `642c6a2cb45919dfae7b4428`.
    4. Save the copied Project ID later use.

## Pin and Unpin Projects

If you have projects that you use more frequently than others, you can pin them under the **Your Projects** list in the Cognigy.AI interface to access them more easily.

To pin a project, hover over a project in the **Recent** section and select ![vertical-ellipsis](https://docs.cognigy.com/_assets/icons/vertical-ellipsis.svg) **> Pin Project**. If you don't have any pinned projects, a new **Pinned** section is created and your project is moved from the **Recent** section to the **Pinned** section. Projects in the **Pinned** section are listed in alphabetical order.

To unpin a project, hover over a project in the **Pinned** section and select ![vertical-ellipsis](https://docs.cognigy.com/_assets/icons/vertical-ellipsis.svg) **> Unpin Project**. Your project is moved from the **Pinned** section to the **Recent** section.

## Project Dashboard

The Project Dashboard serves as an overview page for your Project.
It displays relevant information about your Project, including Analytics, Project Members,
Recently Changed resources, and additional information about Cognigy.AI itself.

### Analytics Widget

As of release v4.10, Cognigy provides a completely new designed Analytics solution called [Insights](../../insights/overview.md).

- When the Insights application is enabled in your product, clicking on the arrow icon in the Analytics widget on the Projects dashboard will lead you to the Insights Overview dashboard.
- When the Insights application is not enabled in your product, clicking on the arrow icon in the Analytics widget on the Projects dashboard will still lead you to the Analytics page, just as before.

Find more information about Cognigy Analytics on the [Analytics](../analyze/overview.md) page.

## Top Toolbar

Projects have a Top Toolbar in every view, offering quick access to Project-specific resources, such as Search, Tasks, and the Interaction Panel.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/projects/toolbar.png">
</figure>

### Search

The Search interface can be utilized to search for resources within the Project.
To open the search, click the Search icon ![search](../../_assets/icons/search.svg) in the upper-right corner of the Project.
It offers a convenient way to promptly access resources and includes an autocomplete feature.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/projects/search.png"/>
</figure>

### Tasks

[![Version badge](https://img.shields.io/badge/Updated in-v4.65-blue.svg)](../../release-notes/4.65.md)

_Tasks_ are specific activities, such as training Intents, importing Snapshots, or creating a new Project. A Task is an asynchronous process that can run in the background and is associated with the notification system.

#### Task Panel

The Task Panel provides an overview of both current and previous tasks,
serving as a high-level change log for relevant activities.
It is accessible
by clicking the **Task Menu** icon ![task-menu](../../_assets/icons/task-menu.svg) in the upper-right corner of the Project.

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

### Interaction Panel

The Interaction Panel can be used to interact with your AI Agent at any time. It is a useful tool that provides a representation of channel-specific output and can display more detailed debugging information.

To open the Interaction Panel, click the **Chat with your Agent** icon ![interaction-panel](../../_assets/icons/interaction-panel.svg) in the upper-right corner of the Project.

Refer to the [Interaction Panel](../test/interaction-panel/overview.md) documentation for more information.

## Help Center Search

The Help Center Search feature allows you to search for potential answers within the list of articles available on the [Cognigy Help Center](https://support.cognigy.com/) website.

To open the Help Center widget, go to the left-side menu of the Project, click the **Help** icon ![help](../../_assets/icons/help.svg) in the bottom-left corner.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/projects/HelpCenter_search_result.png"/>
  <figcaption>List of available Help Center articles</figcaption>
</figure>

## User Menu

The User Menu provides access to a set of views.

To open the User Menu, go to the left-side menu of the Project, click the user icon in the bottom-left corner.

Refer to the [User Menu](../administer/user-menu/overview.md) documentation for more information.

## Notifications

After a task is completed, in the upper-right corner of the Cognigy.AI interface, you will receive one of the following notifications:

- **Success Notification**. This notification is displayed when a task is successfully completed.
- **Error Notification**. This notification is displayed when a task encounters an error and fails. The notification provides a description of the issue.
