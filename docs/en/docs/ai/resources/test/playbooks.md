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