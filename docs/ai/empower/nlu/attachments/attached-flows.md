---
 title: "Attached Flow" 
 slug: "attached-flows" 
 hidden: false 
---
# Attached Flow

The Flow attachment feature removes the need to duplicate functionality across Cognigy.AI agent Flows. Flows can simply be **Attached** to each other, in order to recognize the intents built in other locations.

Flow functionality is shared between Flows by making their [Intents](../overview.md#intents) available in the other Flow. If the Intent of the attached Flow is scored highest, the attached Flow is executed instead of the main Flow.

In order to attach a flow, the Flow with the shared functionality must first be written to populate the **Attached Flows** list.

!!! tip "Build and refactor Flows in a modular fashion"
    As the best practice, we recommend keeping your Flow size small. Refactor often and use a modular approach for clear, maintainable, and effective Flows.

    Note you can copy, cut & paste nodes and sub-trees also between Flows. Making it easy to, for example, cut sub-trees from a large Flow and distribute the logic to smaller attached Flows.

## Intent Inheritance

As described above, the Intents of the Attached Flow are added to the list of Intents on the Main Flow. Then, during Intent mapping, the attached *Intents* are scored together with the Main Intents.

!!! warning "Beware of Overlapping Intents"
    Cognigy small-talk Flows, and any other Attached Flow, may contain Overlapping Intents. You must ensure Intents across all attached Flows are distinct.

The order in which the Intents are scored is determined by the `Map global Intents first` setting in [Agent Settings](../../../administer/access/project-settings.md).

If the intents scored first get a score of 1.0 (the highest match), then the other intents are not evaluated.

| Map global Intents first | Effect                                     | Result                                                                                                              |
|--------------------------|--------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| false                    | Intents in the Main Flow are scored first  | If Intents in the Main Flow score the same or higher than Intents in Attached Flows, Intents in the Main Flow win.  |
| true                     | Intents in Attached Flows are scored first | If Intents in Attached Flows score the same or higher than Intents in the Main Flow, Intents in Attached Flows win. |

## Managing Attached Flows

### Accessing the Attachment Menu

From the flow editor, select the **NLU** tab in the top menu and then select the **Attachments** sub-tab to open the Attachments menu.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/attach-flows-menu.png" width="100%" />
</figure>

### Attach a Flow

Flows are attached by clicking the flow in the list, which enables the attachment toggle.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/attach-flows.png" width="100%" />
</figure>

!!! warning "Train Intents when Attaching"
    The NLU must be re-trained anytime a new flow or lexicon is attached.

### Sorting Flow Intent Mapping

You can sort the Intent mapping of available Flows as follows:

1. Click the *Sort* button next to the *Attach* button at the top of the flow list. The view will switch to Sort mode.
2. Sort attached Flows by dragging and dropping Flows into the desired order.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/sort-attached-flows.png" width="100%" />
</figure>