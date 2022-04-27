---
 title: "Snapshots" 
 slug: "snapshots" 
 hidden: false 
---
# Snapshots

## Introduction
A Snapshot is an immutable form of your Virtual Agent including the following resources:

  * **Flows** (*Including any trained NLU models*)
  * **Lexicons**
  * **Connections**
  * **NLU Connectors**
  * **Functions**
  * **Playbooks**
  * **Settings**
  * **Localization**
  * **Tokens**
  * **Extensions**

Once a resource has been included into a Snapshot, this resource within the Snapshot can no longer be modified through any operation e.g. in the Flow Editor or through our RESTful APIs.

The **main use case** for Snapshots is to create an immutable just-in-time copy of all relevant resources of a Virtual Agent so this specific version can get deployed through Endpoints while your developers already work on the next version of your Virtual Agent. A **second use case** for Snapshots is to create a backup of your Virtual Agent in order to be able to go back in time and restore an older state of a Virtual Agent.

We highly encourage our customers to create Snapshots as soo as they have reached a state in their development process of their Virtual Agents and **point productive Endpoints** only to Flows that are contained within Snapshots.

???+ warning "A Snapshot does NOT include the following resources"
    * **Endpoints**
    * **Intent Trainer records** 
    * **Analytics data**
    * **Contact Profiles**
    * **Other Snapshots**
    * **Logs**
    * **Members**

## Managing Snapshots
<div class="divider"></div>

In order to see all Snapshots of your Virtual Agent, head over to **Deploy** --> **Snapshots**. Initially you will see an empty list as no Snapshots exist by default.

### Creating a new Snapshot
In order to create a new Snapshot of the current state of your Virtual Agent, click on **New Snapshot** followed by providing a name and description. We suggest to include some sort of a version number in the name field and describe what has changed in this version of the Snapshot in the description field.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/creating-a-snapshot.png" width="100%" />
</figure>

???+ info "Note"
    Since Snapshots contain a copy of your Virtual Agent, they can have a huge file-size. Hence we have introduced a limit of 10 Snapshots per Virtual Agent. If you have reached the limit, you have to first delete older Snapshots before you can create new ones. Customers with a dedicated installation can increase the maximum number of Snapshots via an environment variable in the cognigy-env config-map:
    MAX_AMOUNT_SNAPSHOTS_IN_AGENT.
    Please note that there is also a file size limit of Snapshots which can also be changed when a dedicated product installation is used. This aspect can be changed via the following environment variable in the cognigy-env config-map:
    SNAPSHOT_MAX_FILE_SIZE.

### Download a Snapshot
You can download Snapshots you have created previously. This is useful if you want to archive your Snapshots offline or if you have multiple Cognigy.AI systems and you want to transfer a Snapshot to your other Cognigy.AI system.

In order to download a Snapshot, you have to go through our two step process:

**Prepare a downloadable package**

  * Click on three-dot menu of a Snapshot from the list
  * Select "Prepare Download"
  * A new task will be created and your downloadable package will be created
  * A success notification will appear once your download is ready

**Download the packaged Snapshot**

  * Click on the blue icon of a Snapshot in order to initiate the download
  * The web browser will start to download your Snapshot in our proprietary ".CSNAP File Type"

???+ info ".CSNAP File Type"
    The .csnap (Cognigy Snapshot) file type is a dedicated proprietary file type that can only be uploaded and opened within the Snapshot tool of a Cognigy.AI v4 platform. We don't provide any tooling to open a Snapshot outside of Cognigy.AI. The data in your Snapshots will be encrypted as it also Snapshots also contain potentially sensitive data in the form of Cognigy Connections.

### Deleting a Snapshot
Once you reach the maximum number of Snapshots in your Virtual Agent, you have to start deleting older Snapshots. It is essential to make sure that no Endpoint is currently pointing to the Snapshot you are about to delete!

In order to actually delete the Snapshot, do the following:

  * Select "Delete" by clicking the three-dot menu for a Snapshot you want to remove
  * Click on "Confirm" in the dialog that will open
  * A new task will be created and your Snapshot will be removed

???+ danger "Check usage of your Snapshot!"
    Endpoints in production should point to Snapshots. It is important that you first check whether no Endpoints are any longer pointing to the Snapshot you want to remove. Removing a Snapshot which is still being referenced by one of your Endpoints will break the conversations for your customers!

### Upload a Snapshot
The use case for uploading a Snapshot is usually to deploy its Flows into production. Since Snapshots life within Virtual Agents as other resources, you have to either first create a new Virtual Agent or upload the Snapshot in one of your existing ones.

In order to upload a Snapshot, do the following:

  * Click on the "Upload Snapshot" button
  * Select the ".csnap" file for your Snapshot
  * A new task will be created and your Snapshot will be uploaded and processed

???+ info "Info"
    Uploading a Snapshot will not have any impact on the resources (e.g. the Flows) that are part of your Virtual Agent. Since you can only have 10 Snapshots in a Virtual Agent by default, make sure that your Agent has less than 10 Snapshots before starting to upload a new one.

### Restore Virtual Agent from Snapshot
If you are using Snapshots as a way of archiving your Virtual Agent, you might want to restore your Virtual Agent to the point where the Snapshot was taken initially. We offer this functionality through our "Restore Snapshot" option.

???+ danger "Restoring a Snapshot Overwrites all existing agent resources"
    Make sure that you are fully aware of the implications when restoring an Virtual Agent from a Snapshot. All resources within the Virtual Agent will be deleted before they will be reconstructed from the Snapshot. In case you have active Endpoints pointing to the Flows in your Virtual Agent, conversations will break as those Flows will be removed.

In order to restore an Virtual Agent from a Snapshot, do the following:

  * Upload the Snapshot in case the Snapshot from which you want to restore is not present in your Virtual Agent
  * Click on the "Restore" option in the three-dot menu
  * A warning dialog will appear
  * Enter the name of the Snapshot in order to confirm the operation
  * A new task will be created as deleting all current resources from the Virtual Agent and restoring the resources from the Snapshot can take some time
  * A success notification will be displayed once your Virtual Agent has been successfully restored from the Snapshot

???+ info "Restoring a snapshot from another agent may require manual changes to the endpoints"
    [![Version badge](https://img.shields.io/badge/Added in-v4.19.0-blue.svg)]({{config.site_url}})
    Restoring a snapshot from another agent will automatically update the endpoints assigned with primary locale but would need a manual update for endpoints with secondary locale. Those endpoints will be indicated with a red dot beside the endpoint name, like in the images below.

## System Compatibility
<div class="divider"></div>

We are constantly improving the Snapshot feature including the file format for Snapshots. We guarantee backward compatibility for Snapshot, meaning that you can import Snapshots that have been produced in older versions of Cognigy.AI (e.g. v4.4) into newer releases. Snapshots taken with a newer version of Cognigy.AI are not compatible with older versions though.

## Production deployment using Snapshots
### Using a single Virtual Agent

### Using multiple Virtual Agents

### Using multiple Virtual Agents with multiple Cognigy.AI systems