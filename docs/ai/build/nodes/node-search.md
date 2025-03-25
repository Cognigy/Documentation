---
title: "Node Search" 
slug: "node-search"
description: "Search through the Nodes in the Flow editor."
tags:
  - node search
  - flow editor
hidden: false 
---

# Node Search

With the _Node Search_ field, you can search through the Nodes in the [Flow editor](../flows/editor.md).

## How to Use

To open the Node Search field, click ![search icon](../../../_assets/icons/search.svg){width="24"} in the lower-left corner of the Flow editor.

??? info "Searchable Content"

    | Searchable Node Value | Description                                                                                                                                                                                                                                                                                       |
    |-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Label                 | The label displayed on a Node, configured in the **Settings** section of the Node editor.                                                                                                                                                                                                         |
    | Comment               | The comment made on a Node.                                                                                                                                                                                                                                                                       |
    | Analytics Step        | The [Analytics Step](../../analyze/collecting-data.md#analytics-steps) configured in a Node.                                                                                                                                                                                                      |
    | Type                  | The Node type, for example, Say Node or AI Agent Node.                                                                                                                                                                                                                                            |
    | ID                    | The unique database ID of a Node. You can obtain the Node ID number via [OData](../../analyze/odata.md#steps).                                                                                                                                                                                    |
    | Reference ID          | The ID you can use for setting a Node, for example, as an Entrypoint or for manipulating Nodes via the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi). You can copy the Reference ID from the ![vertical ellipsis](../../../_assets/icons/vertical-ellipsis.svg) menu in the Node editor. |
    | JSON editor content   | Code, keys, or values in the JSON editor inside a Node, for example, inside a Code Node or POST data object in an HTTP Request Node.                                                                                                                                                                |
    | Output types          | Any text in the Output type settings in configured [channels](channels.md).                                                                                                                                                                                                                       |
    | Button labels         | Button labels and values you have configured in Say, Question, and Optional Question Nodes.                                                                                                                                                                                                       |
    | Settings fields       | Setting fields in a Node or Extension.                                                                                                                                                                                                                                                            |

### Search Matches in the Flow Editor

When you enter a text into the Node Search field, the Flow editor highlights matching Nodes in yellow and scrolls to the first match. Use ![up arrow](../../../_assets/icons/arrow-up.svg) and ![down arrow](../../../_assets/icons/arrow-down.svg) to navigate between matches. Click ![close button](../../../_assets/icons/close-button.svg) to reset the search.

!!! tip "Toggle Search Results"
    To close the Node Search field but keep the matching Nodes highlighted, click ![search icon](../../../_assets/icons/search.svg){width="24"} again.

### Search Matches in the Node Editor

The Node search also matches text in the Node editor. When you open a matching Node, the field, section, or tab that matches the search text is highlighted.

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/nodes/node-editor-with-highlighting.png" width="60%" />
</figure>

## More Information

- [Nodes](overview.md)
- [Flows](../flows/overview.md)
- [Node Editor](../flows/editor.md)
