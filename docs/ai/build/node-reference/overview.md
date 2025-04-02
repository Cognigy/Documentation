---
title: "Overview"
slug: "nodes-overview"
hidden: false
---

# Node Reference

This Node reference provides details about the [Nodes'](../nodes/overview.md) parameters to help you configure your [Flow](../flows/overview.md).

## Node Categories

<div class="grid cards" style="text-align: center;" markdown>

-   :material-message-text:{ .lg .middle } __[Basic](basic/overview.md)__

    ---

    Use Basic Nodes for basic conversational Flows, for example, the [Say Node](basic/say.md) and the [Question Node](basic/question.md).


-   :material-code-braces:{ .lg .middle } __[Logic](logic/overview.md)__

    ---

    Use Logic Nodes to control the Flow execution, for example, the [If Node](logic/if.md) and the [Lookup Node](logic/lookup.md).

-   :material-microphone:{ .lg .middle } __[Voice](voice/overview.md)__

    ---

    Voice Nodes are for developing voice AI Agents.

-   :material-chart-line:{ .lg .middle } __[Analytics](analytics/overview.md)__

    ---

    Nodes for tracking and analyzing conversation data and taking advantage of Cognigy AI's comprehensive marketing functionality.

-   :material-cog:{ .lg .middle } __[Service](service/overview.md)__

    ---

    Use Service Nodes to trigger external services, like databases and email servers. Additional services can be added through [Extensions](../extensions.md).

-   :material-robot:{ .lg .middle } __[AI](ai/overview.md)__

    ---

    AI Nodes are a collection of Nodes for Cognigy.AI [NLU](../../empower/nlu/overview.md) and [Agentic AI](../../empower/agentic-ai/overview.md).

-   :material-database:{ .lg .middle } __[Data](data/overview.md)__

    ---

    Data Nodes are designed to manage, manipulate, process, or store data.

-   :material-account-tie:{ .lg .middle } __[AI Copilot](ai-copilot/overview.md)__

    ---

    Nodes for creating the AI Copilot workspace.

-   :material-application:{ .lg .middle } __[xApps](xApp/overview.md)__

    ---

    Nodes for creating xApps.

-   :material-dots-horizontal:{ .lg .middle } __[Other](other-nodes/overview.md)__

    ---

    Additional specialized Nodes.

</div>

If you want to create a custom Node, go to the [Extensions](../extensions.md) section.

!!! note
    Nodes can belong to multiple categories for easier search and navigation. In the following sections, each Node is assigned to a single category to avoid duplicated descriptions.

## Settings Common to All Node Types

All Node types include the **Settings** section, which contains the following parameters:

| Parameter      | Description                                                                                                              |
|----------------|--------------------------------------------------------------------------------------------------------------------------|
| Label          | The name of the Node that is displayed in the Flow editor. This is useful to distinguish between Nodes of the same type. |
| Comment        | A comment that is displayed in the Flow editor. This is useful to add additional information about the Node.             |
| Analytics Step | An [analytic step](../../analyze/collecting-data.md#analytics-steps) to track which paths users take in the Flow.        |
