---
title: "Overview"
slug: "node-usage"
hidden: false
tags:
  - Cognigy.AI
  - Nodes
---

# Nodes

_Nodes_ are fundamental building blocks that are used to construct Flows and define the logic of AI Agents. Each Node represents a specific action, decision point, or interaction within the Flow. Users can create, configure, and connect Nodes to design complex conversational experiences.

Flow Nodes can be used to add interactivity to a Flow. When combined in a certain way, they can help create dynamic interactive conversations. There are many types of Nodes, ranging from Basic to Advanced.

## Create a Node

Nodes can be created by clicking on the + icon in a [Flow](../flows/overview.md), after which the Node selection menu appears.

Switch to the [Extensions](../extensions.md) tab to install Nodes from Extensions or click the Extension button in the corner to install new Extensions from the [Extension Marketplace](../extensions.md#extension-marketplace).

A Node can be copied by right-clicking it and pasted by right-clicking on a **+** section in the [Flow](../flows/overview.md).

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/nodes/node-copy-paste.jpg" width="100%" />
</figure>

## Remove a Node


To remove a Node, you can either delete or cut it. If you choose to cut the Node, you can paste it at the location of your choice. If you delete it, it is gone but can be restored by reverting the change. Removing a Node also removes all of its child Nodes.

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/nodes/node-cut.jpg" width="100%" />
</figure>

!!! note "Flow Editor Hotkeys"
    For a full list of flow editor keyboard shortcuts, see the [Hotkeys Page](../../administer/hotkeys.md).

## Copy a Node


You can copy a Node with the corresponding menu option. This also copies all child Nodes (e.g. all the Case and Default Nodes and their children, if you copy a Lookup Node).

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/nodes/node-copy.jpg" width="100%" />
</figure>

!!! note "Drag & Drop"
    The flow editor supports drag and drop within the flow editor. To copy a node, simply hold the **alt** key while dropping the node to the required location.

## Add Comment

You can add additional information about Nodes in the Node Comment. To add a comment, open a Node by clicking on it and scroll down to the **Styling** section. Here you can add a comment.

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/nodes/add-comment.jpg" width="100%" />
</figure>

## Add Label

Adding a Label replaces the bottom text line of a Node. This allows you to have a Node functionality summary that is directly visible in the Flow editor. You can change the Label by opening a Node and scrolling down to the **Styling** section.

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/nodes/add-comment.jpg" width="100%" />
</figure>

## Set Entrypoint

Any flow node can be added as an entrypoint for the flow. 

This means that a [Go To Node](../node-reference/logic/go-to.md) or an [Execute Flow Node](../node-reference/logic/execute-flow.md) can be set to start directly at any node. The **Start Node** is the default entrypoint for the flow and both [Question Nodes](../node-reference/basic/question.md) and [Optional Question Nodes](../node-reference/basic/optional-question.md) will be automatically assigned as an optional entrypoint when they are added.

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/nodes/set-entrypoint.jpg" width="100%" />
</figure>

Any other node can be manually assigned as a flow entrypoint by opening the node editing menu and selecting the three dot menu from the top right hand corner. The option to "Set Entrypoint" can be selected which will add this node to the list of available entrypoints.

!!! note "Naming Entrypoints"
    It is helpful to define unique names for each entry point node using the [label](#add-label) feature. This means that users will be able to easily differentiate when selecting them from a list of options. For example, all Question nodes will be called "Question" unless the label is manually adjusted.

## Warning

As of release v4.8, a warning message will be displayed in case your Flow includes more than 100 nodes:

- If you create a flow including more than 100 nodes you will get a warning.
- If you open an existing flow with more than 100 nodes you will get this warning.
- The error should disappear if you remove some nodes and sink below 100.
- You can disable the notification in your profile settings.

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/nodes/warn.svg" width="100%" />
  <figcaption>Warning information - Nodes > 100</figcaption>
</figure>

## Node ID

As of release Cognigy.AI (4.10.0), Cognigy.AI provides Node IDs in every Flow. Navigating such URL opens the sidebar and scrolls the viewport to the Node.

In detail:

- Clicking on a Node in the Flow Chart adds its ID to the URL.
- Closing the sidebar removes the ID from the URL.
- Opening the page containing Node ID will open the sidebar and center the viewport on the Node.

## Create Flow from Branch

It is possible to create a new Flow from a Node's execution branch.  Any Node that can create a *Child Flow* will have the option **Create Flow from Branch** within its context menu.

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/nodes/create-flow-from-children.png" width="100%" />
  <figcaption>Create flow from branch option.</figcaption>
</figure>

Clicking on **Create Flow from Branch** option will open a dialog box that prompts you to enter the name for your new Flow.

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/nodes/create-flow-from-children-2.png" width="100%" />
  <figcaption>Child Flow from Branch name</figcaption>
</figure>

Providing a valid Flow name and clicking the *Create* button in the dialog will do the following:

* Create a new Executed Flow containing all the Nodes from the selected branch.

* Replace all Nodes from the selected branch, with an **Execute Flow Node** from which the created Flow will be executed.

* The Intents/Slots will not be parsed, and the Context will not be absorbed when executing the new Executed Flow.

* Also, NLU configuration/settings/default Context etc. will not be copied to Executed Flow. Therefore, check and adjust the NLU section of the created Flow, as necessary.

## Dynamic Content in Nodes

Inside most Cognigy Flow Nodes, you can use what we call [CognigyScript](../cognigyscript.md). In most text fields, for example, you can use CognigyScript notation <span>{</span>{ }<span>}</span> to insert dynamic content from the [Input](../../test/interaction-panel/input.md), [Context](../../test/interaction-panel/context.md) and [Profile](../../test/interaction-panel/profile.md) objects.

See below for an example.

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/nodes/cognigyscript.jpg" width="90%" />
</figure>

If the user, for example, says "hi there", Cognigy would parse the CognigyScript at runtime and change the text above to "You said HI THERE".

CognigyScript is essentially JavaScript with access to our input, context and profile objects built in, so you can do all the things you can do in JavaScript, like the .toUpperCase() function above. See our [CognigyScript](../cognigyscript.md) page for more information.

