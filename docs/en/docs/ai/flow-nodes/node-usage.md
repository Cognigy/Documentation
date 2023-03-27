---
 title: "General Node Usage" 
 slug: "node-usage" 
 hidden: false 
---
# General Node Usage
## Creating a Node
<div class="divider"></div>
Flow Nodes can be used to add interactivity to a Flow. When combined in a certain way, they can help create dynamic interactive conversations. There are many types of Nodes, ranging from Basic to Advanced. 

Nodes can be created by clicking on the + icon in a [**Flow**]({{config.site_url}}ai/resources/build/flows/), after which the Node selection menu appears.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/Node-Create-Menu.png" width="100%" />
</figure>

Switch to the [**Extensions**]({{config.site_url}}ai/resources/manage/extensions/) tab to install Nodes from Extensions or click the Extension button in the corner to install new Extensions from the [**Extension Marketplace**]({{config.site_url}}ai/resources/manage/extensions/#extension-marketplace).

A Node can be copied by right-clicking it and pasted by right-clicking on a **+** section in the [**Flow**]({{config.site_url}}ai/resources/build/flows/). 
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c032451-node-copy-paste.jpg" width="100%" />
</figure>

## Removing a Node
<div class="divider"></div>

To remove a Node you can either delete or cut it. If you choose to cut the Node, you can paste it at the location of your choice (see "Paste a Node" below). If you delete it, it is gone but can be restored by reverting the change. Removing a Node also removes all of its child Nodes.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9fdb2b4-node-cut.jpg" width="100%" />
</figure>

!!! note "Flow Editor Hotkeys"
    For a full list of flow editor keyboard shortcuts, see the [Hotkeys Page]({{config.site_url}}ai/tools/hotkeys/).
## Copy a Node
<div class="divider"></div>

You can copy a Node with the corresponding menu option. This also copies all child Nodes (e.g. all the Case and Default Nodes and their children, if you copy a Lookup Node).
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c032451-node-copy-paste.jpg" width="100%" />
</figure>

!!! note "Drag & Drop"
    The flow editor supports drag and drop within the flow editor. To copy a node, simply hold the **alt** key while dropping the node to the required location.
## Add Comment

<div class="divider"></div>

You can add additional information about Nodes in the Node Comment. To add a comment, open a Node by clicking on it and scroll down to the **Styling** section. Here you can add a comment.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/e710f5e-styling.jpg" width="100%" />
</figure>

## Add Label

<div class="divider"></div>

Adding a Label replaces the bottom text line of a Node. This allows you to have a Node functionality summary that is directly visible in the Flow editor. You can change the Label by opening a Node and scrolling down to the **Styling** section.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/e710f5e-styling.jpg" width="100%" />
</figure>

## Set Entrypoint

<div class="divider"></div>

Any flow node can be added as an entrypoint for the flow. This means that a [Go To Node]({{config.site_url}}ai/flow-nodes/logic/go-to/) or an [Execute Flow Node]({{config.site_url}}ai/flow-nodes/logic/execute-flow/) can be set to start directly at any node. The **Start Node** is the default entrypoint for the flow and both [Question Nodes]({{config.site_url}}ai/flow-nodes/message/question/) and [Optional Question Nodes]({{config.site_url}}ai/flow-nodes/message/optional-question/) will be automatically assigned as an optional entrypoint when they are added. 
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9d7d9bc-SetEntrypoint1.jpg" width="100%" />
</figure>

Any other node can be manually assigned as a flow entrypoint by opening the node editing menu and selecting the three dot menu from the top right hand corner. The option to "Set Entrypoint" can be selected which will add this node to the list of available entrypoints.

!!! note "Naming Entrypoints"
    It is helpful to define unique names for each entry point node using the [label]({{config.site_url}}ai/flow-nodes/node-usage/#add-label) feature. This means that users will be able to easily differentiate when selecting them from a list of options. For example, all Question nodes will be called "Question" unless the label is manually adjusted.

## Warning

<div class="divider"></div>

[![Version badge](https://img.shields.io/badge/Added in-v4.8.0-blue.svg)]({{config.site_url}})

As of release v4.8 a warning message will be displayed in case your Flow includes more than 100 nodes:

- If you create a flow including more than 100 nodes you will get a warning.
- If you open an existing flow with more than 100 nodes you will get this warning.
- The error should disappear if you remove some nodes and sink below 100.
- You can disable the notification in your profile settings.


<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/0faf93c-warning_more_than_100_nodes_in_Flow.svg" width="100%" />
  <figcaption>Warning information - Nodes > 100</figcaption>
</figure>

## Node ID

<div class="divider"></div>

[![Version badge](https://img.shields.io/badge/Added in-v4.10.0-blue.svg)]({{config.site_url}})

As of release Cognigy.AI (4.10.0), Cognigy.AI provides Node IDs in every Flow. Navigating such URL opens the sidebar and scrolls the viewport to the Node.

In detail:

- Clicking on a Node in the Flow Chart adds its ID to the URL.
- Closing the sidebar removes the ID from the URL.
- Opening the page containing Node ID will open the sidebar and center the viewport on the Node.

## Create Flow from Branch

<div class="divider"></div>

[![Version badge](https://img.shields.io/badge/Added in-v4.26.0-blue.svg)]({{config.site_url}})

It is possible to create a new Flow from a Node's execution branch.  Any Node that can create a *Child Flow* will have the option **Create Flow from Branch** within its context menu. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/create-flow-from-children.png" width="100%" />
  <figcaption>Create flow from branch option.</figcaption>
</figure>

Clicking on **Create Flow from Branch** option will open a dialog box that prompts you to enter the name for your new Flow.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/create-flow-from-children-2.png" width="100%" />
  <figcaption>Child Flow from Branch name</figcaption>
</figure>

Providing a valid Flow name and clicking the *Create* button in the dialog will do the following:

  * Create a new Executed Flow containing all the Nodes from the selected branch.

  * Replace all Nodes from the selected branch, with an **Execute Flow Node** from which the created Flow will be executed.

  * The Intents/Slots will not be parsed, and the Context will not be absorbed when executing the new Executed Flow.

  * Also, NLU configuration/settings/default Context etc. will not be copied to Executed Flow. Therefore, please check and adjust the NLU section of the created Flow, as necessary.