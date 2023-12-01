---
title: "Tasks" 
slug: "tasks"
description: "Cognigy Tasks are specific activities, such as training Intents, importing Snapshots, or creating a new Agent. A Task is an asynchronous process that can run in the background and is associated with the notification system."
hidden: false 
---

# Tasks

[![Version badge](https://img.shields.io/badge/Updated in-v4.65-blue.svg)](../../../release-notes/4.65.md)

_Tasks_ are specific activities, such as training Intents, importing Snapshots, or creating a new Agent. A Task is an asynchronous process that can run in the background and is associated with the notification system.

## Task Panel

The Task Panel provides an overview of both current and previous tasks,
serving as a high-level change log for relevant activities.
It is accessible by clicking the **Task** icon ![task-menu](../../../assets/icons/task-menu.svg) located at the top-right of the Cognigy.AI interface.

<div class="right-image">
  <img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar_taskmenu.png">
</div>

The Task Panel displays both ongoing and finished tasks.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/task-panel.png"/>
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

## Notifications

After a task is completed, in the upper-right corner of the Cognigy.AI interface, you will receive one of the following notifications:

- **Success Notification**. This notification is displayed when a task is successfully completed.
- **Error Notification**. This notification is displayed when a task encounters an error and fails. The notification provides a description of the issue.
