---
 title: "Playbooks" 
 slug: "playbooks" 
 hidden: false 
---
# Playbooks

**Playbooks** help you test your **Flows** and make sure that they work as intended. They are automated conversations, which include **Assertions** that can check various elements of your **Flow**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/68fdbe2-playbook.png" width="100%" />
</figure>

???+ info "Create Playbooks from the Interaction Panel"
    You can turn any conversation in your Interaction Panel directly into a playbook:<br><br>
    1. Go to the Interaction Panel and chat with your bot<br>
    2. Click the three dots right next to the Flow selection<br>
    3. Select *Create Playbook*<br><br>
    You will be taken to the Playbook Editor with a new Playbook based on your chat history. You can now go on and add assertions and additional steps.

## Functionality

#### Set timeout per step
To set the timeout threshold for each step in the playbook, type a duration in miliseconds into this text field. If a step takes longer than this threshold, an error will be thrown in the playbook player.

#### Toggle 'abort on error'
This setting determines whether to continue after a failed step or abort the playbook on the first step with errors.

#### Playbook Step
A **Step** represents a single input including both text and data, in combination with various **Assertions** on the Flow output and status.

#### Assertion
**Assertions** are checks on various Flow related elements, you can check on:

* Output text
* Output data
* Flow State
* Context 
* Slots
* Intent

All Assertion results can be inverted.

## Playbook Runs

[![Version badge](https://img.shields.io/badge/Added in-v4.26.0-blue.svg)]({{config.site_url}})

In addition to executing a Playbook in the Interaction Panel, you can also schedule a Playbook Run from the Playbook Editor. When you open a Playbook from the list, you will now see a new tab named **Run** that will list all the previously scheduled Playbook runs.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/playbook-runs.png" width="100%" />
</figure>

In order to schedule a new Run, click on the *Run* button. In the dialog box that opens, select the Snapshot, Flow and Locale against which you want to run your current Playbook. Configuring a Playbook Run in this dialog box is similar to configuring a Playbook Execution in the Interaction Panel. When done, click on the **Run** button in the dialog box.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/playbook-runs-dialog.png" width="100%" />
</figure>

The Playbook Run will be created in the background and a success notification will be displayed once the Run has been executed. After that, you can see the new Run in the Runs list. Each item in this list shows the status, creator and the creation time of the run. The list can be sorted by these three parameters. Further, the list can also be filtered by its *Status* and *Creator*.

If the status of a Run is **Failed**, it means that there is one or more failing assertions in the Playbook Run. If the status is **Successful**, then all the Playbook assertions have passed. Clicking on a Playbook Run can give you further information on which assertions failed or passed, helping you to see what went wrong or right with the executed Flow.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/playbook-run-details.png" width="100%" />
</figure>

???+ info "Tip: Schedule a Run or Navigate to Runs page from Playbooks List"
    You can also schedule a Run directly from the Playbooks list. To do this, click on the secondary button of the Playbook that you wand to run. In the menu, click on **Run Playbook** option. You can then configure and create a Playbook Run in the same way as you do in the *Runs* page.
	Quick navigation to the Runs page is possible by clicking on **Show Runs** option in the menu.
