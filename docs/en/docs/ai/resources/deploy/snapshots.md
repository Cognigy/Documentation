# Snapshots

A Snapshot is an exported Agent and includes the following resources:

  * **Flows** (*Including any trained NLU models*)
  * **Lexicons**
  * **Connections**
  * **NLU Connectors**
  * **Playbooks**
  * **Settings**
  * **Localization**
  * **Tokens**

  <figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/09182b7-upload_snapshot_button_detail.PNG" width="100%" />
</figure>

???+ success "Snapshots as a staging mechanism"
    Snapshots can be used to transfer an Agent from one environment to another as they hold all relevant information. This way, no more individual resources have to be exported.

???+ warning "A Snapshot does NOT include"
    * **Endpoints**
    * **Intent Trainer records** 
    * **Analytics data**
    * **Contact Profiles**
    * **Other Snapshots**

### Managing Snapshots

<div class="divider"></div>

You can manage your Snapshots by going to **Deploy** --> **Snapshots**:

???+ info "Note"
    Note that since Snapshots are a complete and runnable copy of your full Agent, there is a limit on how many Snapshots can exist 'online' in your Agent project. The default limit is 10 snapshots but can be changed if required via environment variable in the cognigy-env config-map: MAX_AMOUNT_SNAPSHOTS_IN_AGENT.
    Note that there is also a size limit of snapshots. That limit can also be changed via an environment variable in the cognigy-env config-map:
    SNAPSHOT_MAX_FILE_SIZE. There is no limit to how many Snapshots you can save 'offline', as these are simply files that you can download and store.

### Create a Snapshot
  * Select the "+ Create Snapshot" Button
  * Enter a name, the description is optional and select "Save"
  * A Snapshot generation task will be started and take a few moments to complete
  * When the snapshot is created, a success notification will appear.

## Download a Snapshot
 Downloading a Snapshot is a two step process:

#### 1. Prepare for Download
  * Prepare the Snapshot for download by selecting "Prepare Download" by clicking the submenu (indicated by three vertical dots) for the individual snapshot that is to be downloaded.
  * A Snapshot preparation task will be started and take a few moments to complete.
  * When the snapshot preparation is complete, a success notification will appear.

#### 2. Download the .csnap file
  * Once the preparation is finished, a light blue download button will appear on the Snapshot, click it to start the download.

???+ info ".CSNAP File Type"
    The .csnap (Cognigy Snapshot) file type is a dedicated file type that can only be uploaded and opened within the Snapshot module of a Cognigy.AI platform.

### Upload a Snapshot file

???+ danger "Attention!"
    Snapshots are uploaded into existing projects! To create a new Agent from a Snapshot, create a new empty Agent first!"

* Select the "Upload Snapshot" button.
* Restoring a Snapshot will overwrite everything except Endpoints, Snapshots, Analytics and Contact Profiles with the Snapshot content.

???+ info "Snapshot resources do not automatically populate in the agent after upload"
    Uploading a Snapshot does not directly affect anything in your agent beside adding the snapshot to the list so it can be linked to an endpoint. To edit the flows contained within a snapshot, it must also be manually restored (See below).

### Restore a Snapshot
If you have a Snapshot as an offline file, please upload the Snapshot file first as described above.

  - Select "Restore" from the submenu (indicated by three vertical dots) for the individual snapshot that is to be restored.
  - A warning message will appear and ask for the name of the snapshot to be entered. Enter the name of the snapshot and click "confirm".
  - A restoration task will be started and take a few moments to complete. Resources (flows, lexicons, etc) within the agent cannot be accessed while the restore is taking place. An error message will be received if this is attempted.
  - When the snapshot restore is complete, a success notification will appear and the resources will be available to edit within agent.

???+ danger "Restoring a Snapshot Overwrites all existing agent resources"
    Care should be exercised when restoring a snapshot to ensure all current agent resources are either backed up within another snapshot, or no longer required. A snapshot restore process will overwrite all current resources (listed at the top of this page) within the agent.

### Delete a Snapshot
  * Select "Delete" by clicking the submenu (indicated by three vertical dots) for the individual snapshot that is to be removed.
  * Select "Confirm" on the warning message that appears, to confirm the deletion.

## System Compatibility
<div class="divider"></div>

Cognigy is constantly improving the Snapshot feature and especially also the file format for Snapshots. 
We guarantee backward compatibility for Snapshot, meaning that you can import Snapshots that have been produced in older versions of Cognigy.AI (e.g. v4.4) into newer releases. Snapshots taken with a newer version of Cognigy.AI are not compatible with older versions though.