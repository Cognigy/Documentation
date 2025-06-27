---
title: "Playbooks"
slug: "playbooks"
hidden: false
description: "Cognigy.AI Playbooks are conversation scripts that you can run automatically to test your Flows."
tags:
  - playbooks
  - testing
  - flow testing
  - assertions
  - test automation
  - conversation scripts
---

# Playbooks

_Playbooks_ are conversation scripts that you can run automatically to test your Flows. When running a Playbook, you can set the Flow, Locale, and Snapshot you want to test.

Playbooks include:

- **Steps** — simulate a user input and can include an input text and input data.
- **Assertions** — check the AI Agent's responses and different aspects of the Flow for each Step against a defined value. You can also invert the Assertion check, which means the Assertion checks if the defined value is missing.

??? info "Assertion Types"
    | Type                   | Description                                                | API Value       |
    |------------------------|------------------------------------------------------------|-----------------|
    | Message text assertion | Checks the text content of the AI Agent's response.        | `assertText`    |
    | Message data assertion | Checks the data the AI Agent sent.                         | `assertData`    |
    | State assertion        | Checks the current State of the Flow.                      | `assertState`   |
    | Context assertion      | Checks the current data in the Context object of the Flow. | `assertContext` |
    | Slots assertion        | Checks if specific Slots have been recognized.             | `assertSlots`   |
    | Intent assertion       | Checks if specific Intents have been recognized.           | `assertIntent`  |


## Limitations

- You can run up to 10 Playbooks simultaneously. You can change this limit for:
    - On-premises — specify the `MAX_CONCURRENT_PLAYBOOK_EXECUTIONS` variable in the `values.yaml` file. 
    - Dedicated SaaS — contact [Cognigy technical support](../../help/get-help.md).
- A Playbook can contain up to 50 Steps.

### Working with Playbooks

=== "GUI"

    In **Test > Playbooks**, you can create, delete, and run Playbooks as well as export them as a Package. To define Steps and Assertions the Playbook editor, select a Playbook from the list. Playbook runs are [Tasks](../build/projects.md#task-panel) and take place in the background. The results are available in the Playbook editor.
    
    Alternatively, you can also run a Playbook and view the results from the [Interaction Panel](interaction-panel/overview.md), as well as create Playbooks from a conversation with the AI Agent.

    **Playbook Editor**

    In the Playbook editor, configure the following settings for all Steps:

    | Setting              | Description                                                                                                                                                                            |
    |----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Set timeout per step | The timeout for each step in the Playbook in milliseconds. If a step takes longer than the set timeout, an error is displayed in the Playbook player. The default timeout is 20000 ms. |
    | Abort on error       | Select whether to continue or abort the Playbook after a failed step.                                                                                                                  |

    For each Step, you can enter input text and data to send to the AI Agent, and add Assertions to check the AI Agent's response to the input.

    **Runs Tab**

    On the **Runs** tab in the Playbook editor, you can run Playbooks and view the results of the Playbook runs. You can also filter the runs by status and creator. 
    
    After the Playbook run is completed, click it in the list to see the results. In the pane that opens on the right, you can hover over the Assertion checks for more details.
   
    **Interaction Panel**

    To run a Playbook in the Interaction Panel, select and run a Playbook from the ![playbook](../../_assets/icons/playbooks-interaction-panel.svg) tab. You can hover over the Assertion checks for more details.
    
    To create Playbooks from a conversation, follow these steps:

    1. Chat with the AI Agent on the ![chat](../../_assets/icons/chat-interaction-panel.svg) tab.
    2. Click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) above the chat window and select **Create Playbook**.

    You are redirected to the Playbook editor. You can then add Assertions and additional Steps.

=== "CLI"
    You can run Playbooks using the [Cognigy.AI CLI](https://github.com/Cognigy/Cognigy-CLI?tab=readme-ov-file#command-run). Schedule multiple Playbook runs simultaneously using the `run` command.

=== "API"
    You can create, edit, and delete Playbooks using the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#tag--Playbooks-v2.0) as well as run Playbooks.

## Examples

The following video provides examples of how to create and run a Playbook using the Interaction Panel.

<div style="text-align:center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/juB7Wy4Anvc?si=7lMt55YSMdqdaP2i&amp;start=44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
