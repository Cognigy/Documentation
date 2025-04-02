---
title: "AI Nodes" 
slug: "ai" 
hidden: false 
---

# AI

AI Nodes extend the toolset provided by the Basic Nodes to a more in-depth level, enabling interactions with system resources.

[Watch this Episode](https://support.cognigy.com/hc/en-us/articles/360019857220-Cognigy-Sessions-Cognigy-NLU) of Cognigy Sessions for a technical deep dive.

<div class="grid cards" style="text-align: center;" markdown>

-   :material-plus-box:{ .lg .middle } __[Add Lexicon Keyphrase](add-lexicon-keyphrase.md)__

    ---

    The Add Lexicon Keyphrase Node dynamically creates a [Lexicons](../../../empower/nlu/slots-and-lexicons/lexicons.md) Keyphrase entry, either based on hardcoded or dynamic data.

-   :material-robot:{ .lg .middle } __[AI Agent](ai-agent.md)__

    ---

    The AI Agent Node lets you assign a job to a AI Agents, provide them instructions, tool actions, and access to knowledge.

-   :material-account-switch:{ .lg .middle } __[AI Agent Handover](ai-agent-handover.md)__

    ---

    The AI Agent Handover Node transfers the conversation to another AI Agent Node or Flow.

-   :material-text-box:{ .lg .middle } __[Clean Text](clean-text.md)__

    ---

    The Clean Text Node enables a user to clean a provided text using the Text Cleaner class.

-   :material-content-copy:{ .lg .middle } __[Copy Slots to Context](copy-slots-to-context.md)__

    ---

    The Copy Slots to Context Node copies Slots that were detected and written to the [Input](../../../test/interaction-panel/input.md) or [Context](../../../test/interaction-panel/context.md) object.

-   :material-cancel:{ .lg .middle } __[Disable Slot Fillers](disable-slot-fillers.md)__

    ---

    The Disable Slot Fillers Node disables any active [Slot Fillers](../../../empower/nlu/overview.md).

-   :material-check-circle:{ .lg .middle } __[Enable Slot Fillers](enable-slot-fillers.md)__

    ---

    The Enable Slot Fillers Node enables a particular [Slot Filler](../../../empower/nlu/overview.md).

-   :material-play:{ .lg .middle } __[Execute Cognigy NLU](execute-cognigy-nlu.md)__

    ---

    The Execute Cognigy NLU Node explicitly executes [Cognigy NLU](../../../empower/nlu/overview.md).

-   :material-magnify:{ .lg .middle } __[Fuzzy Search](fuzzy-search.md)__

    ---

    The Fuzzy Search Node enables a Flow to search fuzzy string patterns in list of source data and returns the best possible matches.

-   :material-format-letter-matches:{ .lg .middle } __[Match Pattern](match-pattern.md)__

    ---

    The Match Pattern Node enables a user to find patterns in text and expose them in the [Input Object](../../../test/interaction-panel/input.md).

-   :material-regex:{ .lg .middle } __[Regex Slot Filler](regex-slot-filler.md)__

    ---

    The Regex Slot Filler Node creates a Slot based on a regex pattern. When the pattern is detected, a Slot is written to the [Input](../../../test/interaction-panel/input.md) object.

-   :material-check-decagram:{ .lg .middle } __[Resolve Tool Action](resolve-tool-action.md)__

    ---

    The Resolve Tool Action Node sends an answer as the response to a tool call to the AI Agent after completing a [tool action](ai-agent.md#ai-agent-tool).

</div>