---
title: "Flow Editor"
slug: "flows"
hidden: false
tags:
  - Flows
  - Flow Editor
  - Nodes
---

# Flow Editor

[![Version badge](https://img.shields.io/badge/Updated in-v4.80-blue.svg)](../../../release-notes/4.80.md)

The _Flow Editor_ is a user interface (UI) where you can see a graphic representation of a [Flow](overview.md), the _Flow Chart_, and design AI Agents' conversations. In the Flow editor, the Flow consists of Nodes that represent various actions or decision points. The [Nodes](../nodes/overview.md) are linked to one another by lines that indicate the conversation's path, from the **Start** Node to the **End** Node.

A green arrow next to a Node indicates the Flow Entrypoint. The Entrypoint is where the AI Agent expects a user entry. The Flow editor highlights the path of the conversation in green. The green path allows you to understand the Flow execution path at each step, depending on the input in the [Interaction Panel](../../test/interaction-panel/overview.md).

## Limitations

- You can add up to 100 Flow Nodes in the Flow editor.

## Exploring the Flow Editor

The following image shows an overview of the Flow editor:

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/flows/flow-editor.png" width="70%" />
</figure>

??? info "1. Top Bar"
    Besides the controls from the [Project Page](../../overview/user-interface/project-page.md) top bar, the Flow editor includes the following elements from left to right:

    | UI&nbsp;Element | Type | Description                                                                                                                                                                                                                                                                                                                                         |
    |-----------------|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Flow List       | List | Search for Flows by name and switch between them.                                                                                                                                                                                                                                                                                                   |
    | Locale List     | List | Switch between Locales.                                                                                                                                                                                                                                                                                                                             |
    | Chart           | Tab  | Display the Flow chart.                                                                                                                                                                                                                                                                                                                             |
    | NLU             | Tab  | Display the NLU settings, where you can configure [Intents](../../empower/nlu/intents/ml-intents.md), [States](../../test/interaction-panel/state.md), [Slot Fillers](../../empower/nlu/slot-fillers.md), as well as attach [Flows](../../empower/nlu/overview.md#attached-flows) and [Lexicons](../../empower/nlu/slots-and-lexicons/lexicons.md). |
    | Settings        | Tab  | Display the [Flow Settings](overview.md#settings), [Default Context](../../test/interaction-panel/context.md), and [Locale Settings](../translation-and-localization/localization.md).                                                                                                                                                                 |

??? info "2. Flow Chart"
    |                       Button                       | Description                                                           |
    |:--------------------------------------------------:|-----------------------------------------------------------------------|
    | ![flow-plus](../../../_assets/icons/flow-plus.svg) | Click to add a new Node or [Extension](../extensions.md) to the Flow. |
    |   ![comment](../../../_assets/icons/comment.svg)   | Click to see the comments in the Node.                                |

    !!! note "Drag and Drop"
        The Flow editor supports drag and drop. To copy a Node, simply hold the ++alt++ or ++option++ while dragging the Node to another position.

??? info "3. Chart Controls"
    |                             Control                              | Description                                                                                                                                                             |
    |:----------------------------------------------------------------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    |                         **-** and **+**                          | Zoom out (-) or in (+).                                                                                                                                                 |
    |  ![flow-centralize](../../../_assets/icons/flow-centralize.svg)  | Centers the chart.                                                                                                                                                      |
    | ![magnifying-glass](../../../_assets/icons/magnifying-glass.svg) | Search for Nodes in the Flow.                                                                                                                                           |
    |     ![photo-camera](../../../_assets/icons/photo-camera.svg)     | Take a screenshot of the entire Flow and save it in PNG format. In the top left corner of each screenshot, the time of its creation and the Cognigy logo are displayed. |
    |    ![voice-preview](../../../_assets/icons/voice-preview.svg)    | Test voice outputs without executing the entire Flow.                                                                                                                   |
    |       ![arrow-back](../../../_assets/icons/arrow-back.svg)       | Undo the last step by going backward in history.                                                                                                                        |
    |    ![arrow-forward](../../../_assets/icons/arrow-forward.svg)    | Redo the last steps by going forward in history.                                                                                                                        |

## More Information

- [Flows](overview.md)
- [Nodes](../nodes/overview.md)
- [Interaction Panel](../../test/interaction-panel/overview.md)
- [Agents](../../overview/ai-workforce.md)