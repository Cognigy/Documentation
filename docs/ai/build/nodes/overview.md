---
title: "Overview"
slug: "node-usage"
hidden: false
description: "Nodes are the fundamental building blocks of Flows. They define the logic of AI Agents and are used to create complex conversational experiences."
tags:
  - nodes
---

# Nodes

_Nodes_ are the fundamental building blocks of [Flows](../flows/overview.md). Nodes define the logic of AI Agents and are used to create complex conversational experiences. Each Node represents a specific action, decision point, or interaction in the Flow. Users can configure and connect Nodes to design complex conversational experiences.

Cognigy.AI provides a wide range of [Node types](../node-reference/overview.md) to allow diverse conversational experiences.

Some Node types, for example, [If Nodes](../node-reference/logic/if.md) and [Lookup Nodes](../node-reference/logic/lookup.md), include child Nodes to control the Flow execution logic. Child Nodes function as a decision branch in the Flow, allowing different outcomes depending on the user input.

## Working with Nodes

=== "GUI"
    You can create and delete Nodes in the [Flow editor](../flows/editor.md). To edit a Node, open the Node editor by clicking the Node in the Flow editor. Node editors include settings specific to each Node type. In the Flow editor, you can also right-click a Node to copy, cut, and paste the Node as well as add comments to it.

    !!! tip "Use Hotkeys for Managing Nodes"
        To speed up building your AI Agent, use [keyboard shortcuts](../../administer/hotkeys.md).

=== "API"
    You can view, create, edit, and delete Nodes using the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#tag--Charts-v2.0). You can also search and move Nodes and add Locales to them. For Nodes that support Generative AI output, you can generate this kind of output through the API as well.

### Set a Node as an Entrypoint

If your AI Agent has, for example, a [Go To Node](../node-reference/logic/go-to.md) or an [Execute Flow Node](../node-reference/logic/execute-flow.md) to switch between Flows, you can set a Node as an _Entrypoint_. An Entrypoint is the Node at which the Flow starts. The **Start** Node is the default Entrypoint. To set a Node as an Entrypoint:

- right-click the Node in the Flow editor and select **Set Entrypoint**.
- select ![vertical ellipsis](../../../_assets/icons/vertical-ellipsis.svg) **> Set Entrypoint** in the Node editor.

!!! note "Naming Entrypoints"
    Define unique names for each Entrypoint Node using the **Label** field in the Node editor's **Settings** section. This approach is helpful to easily differentiate a Node with an Entrypoint from other Nodes of the same type.

### Create Flows from Node Branches

You can split complex Flows and create new ones from a child Node. To do so, right-click the child Node and select the **Create Flow from Branch** option in the context menu.

When you create a Flow from a child Node, you move the Nodes following the child Node to the new Flow. In the original Flow, these Nodes are replaced with an Execute Flow Node. The Execute Flow Node triggers the new Flow.

!!! warning
    NLU and Flow settings aren't copied to the new Flow. Check and adjust the **NLU** tab settings of the new Flow.

## Dynamic Content in Nodes

Most Nodes support [CognigyScript](../cognigyscript.md) and [Tokens](../tokens.md) for dynamic content use.

## More Information

- [CognigyScript](../cognigyscript.md)
- [Tokens](../tokens.md)
- [Flows](../flows/overview.md)
