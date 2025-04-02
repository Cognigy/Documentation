---
title: "Snapshots"
slug: "snapshots"
description: "Snapshots are immutable forms of an AI Agent in Cognigy.AI that includes various resources such as Flows, Lexicons, Connections, Functions, and more. Snapshots can be used to create a copy of an AI Agent for deployment, to create backups, or to revert to an earlier state if needed."
hidden: false
---

# Snapshots

_Snapshots_ are immutable forms of your AI Agent, including the following resources:

- Connections
- Extensions
- Flows
- Functions
- Large Language Models
- Lexicons
- Localization
- NLU Connectors
- Playbooks
- Settings
- Tokens
- Trained NLU Intent models

Once a resource has been included in a Snapshot, that resource within the Snapshot can no longer be modified through any operation, for example, in the Flow Editor or through Cognigy's RESTful APIs.

Snapshots can be used in the following cases:

- To create an immutable just-in-time copy of all relevant resources of an AI Agent. This copy can be deployed through Endpoints, which allows you to use the current version of your AI Agent while your developers are working on the next version.
- To create a backup of your AI Agent, which enables you to return to the previous state if necessary.

## Restrictions

The following resources are not included in the Snapshot:

* Endpoints
* Intent Trainer records
* Analytics data
* Contact Profiles
* Logs
* Members
* Knowledge AI
* Other Snapshots

## Quotas and Limitations

- The maximum number of Snapshots per Agent is 10. This limit can be modified in a dedicated product installation. It can be adjusted via the following environment variable in the `cognigy-env` config-map: `MAX_AMOUNT_SNAPSHOTS_IN_AGENT`.
- The maximum size of a packaged Snapshot is 256 MB. If you have reached this limit, you must first delete older Snapshots before creating new ones. With a dedicated installation, you can increase the maximum number of Snapshots using an environment variable in the `cognigy-env` config-map: `SNAPSHOT_MAX_FILE_SIZE`.
- The lifetime of a downloadable Snapshot until you have to re-create the download is 1 day.
- The [`text-embedding-3-model`](../empower/nlu/external/external-nlu-intent-recognition.md) external NLU model increases Snapshot size, leading to longer download and upload times.

## Snapshot File Format

The `.csnap` (Cognigy Snapshot) file is a special type that can only be used within the Cognigy.AI Snapshots. You cannot open or upload it outside of Cognigy.AI. Snapshots encrypt their data, including potentially sensitive information in the form of [Cognigy Connections](../build/connections.md).

## Create a new Snapshot

To create a new Snapshot of the current state of your AI Agent, do the following:

1. In the left-side menu of the Project, go to **Deploy > Snapshots**.
2. Click **New Snapshot**.
3. Enter a name and description for the new Snapshot. We recommend including a version number in the name field and providing a description of the changes made in this version in the description field.

Your Snapshot will appear in the list.

We highly encourage you to create Snapshots and **point productive Endpoints** only to Flows that are contained within Snapshots.

## Download a Snapshot

You can download Snapshots you have created previously. This is useful if you want to archive your Snapshots offline or if you have multiple Cognigy.AI systems, and you want to transfer a Snapshot to your other Cognigy.AI system.

To download a Snapshot, follow these steps:

1. When your Snapshot has been created, click ![vertical ellipsis](../../_assets/icons/vertical-ellipsis.svg) next to the Snapshot you want to download from the list.
2. Select **Prepare Download**. A downloadable Snapshot package will be created. A success notification will appear once your Snapshot package is prepared.
3. Click ![snapshot download](../../_assets/icons/snapshot-download.svg) next to the previously prepared Snapshot
   in order to initiate the download.

The web browser will start to download your prepared Snapshot package as a `.csnap` file.

## Upload a Snapshot

[![Version badge](https://img.shields.io/badge/Updated in-v4.47-blue.svg)](../../release-notes/4.47.md)

The use case for uploading a Snapshot is usually to deploy its Flows into production.
Since Snapshots live within AI Agents as other resources,
you have to either first create a new AI Agent or upload the Snapshot in one of your existing ones.

To upload a Snapshot, follow these steps:

1. In the left-side menu of the Project, go to **Deploy > Snapshots**.
2. On the **Snapshots** page, click **Upload Snapshot**.
3. Select a Snapshot with the `.csnap` format from your computer. When the file starts uploading, you will see a dialog window with a progress bar.
4. Once the file has been uploaded, a new [task](../build/projects.md), titled **Upload Snapshot**, will be created. To view the task, click ![task-menu](../../_assets/icons/task-menu.svg) in the upper-right corner.

After completing the **Upload Snapshot** task, your Snapshot will be installed and appear in the list on the **Snapshots** page.

## Procedure for Restoring a Project from a Snapshot

If you are using Snapshots as a way of archiving your AI Agent, you might want to restore your AI Agent to the point where the Snapshot was taken initially.

### Before Getting Started

- **Restoring a Snapshot overwrites all existing Agent resources**. Make sure that you are fully aware of the implications when restoring an AI Agent from a Snapshot. All resources within the AI Agent will be deleted before they will be reconstructed from the Snapshot. In case you have active Endpoints pointing to the Flows in your AI Agent, conversations will break as those Flows will be removed.
- **Restoring a Snapshot from another Agent may require manual changes to the Endpoints**. Restoring a Snapshot from another Agent will automatically update the Endpoints assigned with primary locale but would need a manual update for Endpoints with secondary locale. Those Endpoints will be indicated with a red dot beside the Endpoint name, like in the images below.

### Restore a Project from the Snapshot

Before initiating the restoration process, review the associated risks in the [Before Getting Started](#before-getting-started) section.

To restore a Project from a Snapshot, do the following:

1. Upload the Snapshot in case the Snapshot from which you want to restore is not present in your AI Agent.
2. Click ![vertical ellipsis](../../_assets/icons/vertical-ellipsis.svg) next to the Snapshot you want to restore. A selection menu will appear.
3. Click **Restore**. A warning dialog will appear.
4. Enter the name of the Snapshot in order to confirm the operation.

A new task will be created as deleting all current resources from the AI Agent and restoring the resources from the Snapshot can take some time.
A success notification will be displayed once your AI Agent has been successfully restored from the Snapshot.

## Delete a Snapshot

Once you reach the maximum number of Snapshots in your AI Agent, you have to start deleting older Snapshots.

!!! danger "Check usage of your Snapshot"
    In production, Endpoints should be directed to Snapshots. It is crucial to first check whether any Endpoints are still pointing to the Snapshot you intend to remove. Removing a Snapshot that is still referenced by one of your Endpoints will disrupt conversations for your customers.

To delete a Snapshot, do the following:

1. In the left-side menu of the Project, go to **Deploy > Snapshots**.
2. On the **Snapshots** page, select the Snapshot you want to delete.
3. Click ![vertical ellipsis](../../_assets/icons/vertical-ellipsis.svg) next to the Snapshot you want to delete. A selection menu will appear.
4. Select **Delete**.
5. Click **Confirm** in the dialog that opens.

A new task will be created, and your Snapshot will be removed.

## Snapshot Compatibility

Snapshots that were created in older versions of Cognigy.AI can be imported into newer versions of the platform without any issues, and are fully supported.

However, Snapshots created in newer versions may not be compatible with older versions, and are not supported.

Importing and restoring a Snapshot from a newer version into an older version of Cognigy.AI are not recommended, as they can cause unexpected errors.

## Deploy AI Agents to Production with Snapshots

The following three scenarios show the recommended methods for deploying AI Agents into production.
Consider an AI Agent in Cognigy.AI as analogous to a project in other software.

### Use a Single AI Agent

The Snapshot concept allows you to make your AI Agents available through Endpoints while you are already working on the next version of your AI Agent. This scenario is the simplest of all, but also quite elegant.

Let's assume that you have an AI Agent called **Order Bot** for your restaurant.

People developing the agent would create Flows, Lexicons, Intents, and all other resources as usual. Eventually, you reach a state where you want to publish to your customers. A new Snapshot needs to be created. You don't have to prepare a downloadable package for the Snapshot because you won't download and upload it to a different place — everything will remain in the current AI Agent's project.

To release the new Snapshot, go to your Endpoints, for example, your Webchat Endpoint used on your website, and select the new Snapshot and the Flows within it.

Since you are now using resources within the Snapshot in production, developers can modify the Flows in the AI Agent directly without breaking the conversation logic for your customers.

### Use Multiple AI Agents

For more control on what is actually running in production, this approach should be chosen.

Let's assume that you want to build an AI Agent for FAQs on their website.
In this case, two AI Agents should be created in Cognigy.AI:

- FAQ Bot development
- FAQ Bot production

Developers only have access to the **FAQ Bot development** Agent. All Flows, Lexicons, Intents, and all development, in general, happen here. Eventually, a certain state is reached, and a Snapshot is created. A downloadable package for the Snapshot has to be created, and the Snapshot has to be downloaded.

To release the Snapshot, someone with access to the **FAQ Bot production** Agent uploads the packaged Snapshot and then points the productive Webchat endpoint to the new version of the Snapshot.

Remember that **Snapshots do not need to be restored** for Endpoints to use their content. The **FAQ Bot production** Agent should not contain direct resources like Flows; it should only store Snapshots, and its Endpoints should directly point to these Snapshots.

<figure>
  <img class="image-center" src="../../../_assets/ai/deploy/snapshots/deployment-two-agents.png" width="100%" />
  <figcaption>Deployment concept using Snapshots and two Agents (projects)</figcaption>
</figure>

### Use Multiple AI Agents with Multiple Cognigy.AI Systems

You can go one step further compared to the [Using Multiple AI Agents](#use-multiple-ai-agents) concept if you have multiple physically separated Cognigy.AI installations.

Let's assume that you have the following environments:

- **Dev**. A Cognigy.AI installation with low-hardware specs for development purposes.
- **Staging**. A Cognigy.AI installation with higher hardware specs for staging purposes, where acceptance tests for new versions are conducted.
- **Production**. A Cognigy.AI installation with high-hardware specs for production purposes.

In this case, your developers only have access to AI Agent projects in the **Dev** installation.
They build agents, craft entire new experiences, or improve already existing solutions.
Once they reach a desired state in their projects, they create new Snapshots.
Downloadable packages for Snapshots are then created and provided to the teams working on the **Staging** installation.

People on staging receive the Snapshots from developers
and upload them into their AI Agent projects in the **Staging** system.
They point their Endpoints to the new Snapshots and run acceptance tests.
If they find defects, they inform their development teams, which then fix the problems and provide new Snapshots.
If testing goes well, the Snapshots are moved to the **Production** system.

People with access to the production system (usually only a very small group of people) point the productive Endpoints to the new Snapshots
provided by the teams who have verified the quality on the **Staging**
system.
The **Production**
system is also the place
in which [Cognigy Insights](../../insights/overview.md) will be used to understand how the actual users use the AI Agents,
as productive interaction only happens on this system.

## More Information

- [Endpoints](endpoints/overview.md)
- [Flows](../build/flows/overview.md)