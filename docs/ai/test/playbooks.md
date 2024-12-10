---
 title: "Playbooks" 
 slug: "playbooks" 
 hidden: false 
---
# Playbooks

_Playbooks_ are automated conversations, which can help you test your Flows and ensure that they work as expected. Playbooks include Assertions that check different aspects of your Flow, giving you more confidence in your conversational experiences.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/playbooks/playbook.png" width="70%" />
</figure>

You can turn any conversation in your Interaction Panel directly into a playbook:

1. Go to the Interaction Panel and chat with your AI Agent.
2. Click the three dots right next to the Flow selection.
3. Select **Create Playbook**.

You will be taken to the Playbook Editor with a new Playbook based on your chat history. You can now go on and add assertions and additional steps.

## Limitations

- The maximum number of concurrent Playbook executions is 10. You can change this limit if you have the following environment: 
    - On-premises. Change the limit by specifying the `MAX_CONCURRENT_PLAYBOOK_EXECUTIONS` variable in the `values.yaml` file. 
    - Dedicated SaaS. Contact [Cognigy technical support](../../help/get-help.md).

## Functionality

#### Set timeout per step
To set the timeout threshold for each step in the playbook, type a duration in milliseconds into this text field. If a step takes longer than this threshold, an error will be thrown in the playbook player.

#### Toggle 'abort on error'
This setting determines whether to continue after a failed step or abort the playbook on the first step with errors.

#### Playbook Step
A **Step** represents a single input including both text and data, in combination with various **Assertions** on the Flow output and status.

!!! warning
    Playbooks contain a maximum of 50 steps.

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

In addition to executing a Playbook in the Interaction Panel, you can also schedule a Playbook Run from the Playbook Editor. When you open a Playbook from the list, you will now see a new tab named **Run** that will list all the previously scheduled Playbook runs.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/playbooks/playbook-runs.png" width="70%" />
</figure>

In order to schedule a new Run, click the *Run* button. In the dialog box that opens, select the Snapshot, Flow and Locale against which you want to run your current Playbook. Configuring a Playbook Run in this dialog box is similar to configuring a Playbook Execution in the Interaction Panel. When done, click the **Run** button in the dialog box.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/playbooks/playbook-runs-dialog.png" width="90%" />
</figure>

!!! tip "Schedule playbook runs in bulk using the Cognigy CLI"
    You can schedule multiple Playbook Runs simultaneously using the `run` command in the [Cognigy CLI](https://www.npmjs.com/package/@cognigy/cognigy-cli) than scheduling them one by one via the UI.

The Playbook Run will be created in the background, and a success notification will be displayed once the creation is complete. When the Playbook Run creation is successful, you can see the newly created run in the Runs list. Each item in this list shows the status, creator and the creation time of the Run. The list can be sorted by these three parameters. Furthermore, the list can also be filtered by its *Status* and *Creator*.

If the status of a Run is **Failed**, it means that there is one or more failing assertions in the Playbook Run. If the status is **Successful**, then all the Playbook assertions have passed. Clicking on a Playbook Run can give you further information on which assertions failed or passed, helping you to see what went wrong or right with the executed Flow.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/playbooks/playbook-run-details.png" width="70%" />
</figure>

### Schedule a Run from the Playbooks List

You can schedule a Run directly from the Playbooks list.
To do this, click the secondary button of the Playbook that you want to run.
In the menu, click the **Run Playbook** option. You can then configure and create a Playbook Run in the same way as you do in the *Runs* page.
Quick navigation to the Runs page is possible by clicking on the **Show Runs** option in the menu.