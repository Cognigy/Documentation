---
 title: "Intent Hierarchy" 
 slug: "intent-hierarchy" 
 hidden: false 
---
# Intent Hierarchy

The intent training module includes a **Hierarchy** feature that enables intent grouping and layering. This means that parent intents are created which can inherit the example sentences from child intents to provide more flexibility to the agent's understanding and increase the chances of the correct intent being identified.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/hierarchy.png" width="80%" />
</figure>

## Overview

Intents are added as children by dragging and dropping on the parent intent via the intent list.

Intents can be structured into three layers:

- Level 1 Intents
- Level 2 Intents
- Level 3 Intents

!!! tip "Tip: Use Intent Naming Conventions"
    It is recommended to follow a pattern when naming your intents. Either create a topic category name or use a numbering system to group intent families.

Level 1 Intents can inherit Example Sentences from their level 2 child Intents, which can inherit Example Sentences from their level 3 grandchild Intents. 

## Inheritance

Enable the *"Inherit Example Sentences from Child Intents"* slider for each intent to incorporate the example sentences of all child intents in the training model. 

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/inherit.png" width="80%" />
</figure>

When an inherited example sentence is found, both the parent and the child intent will score a high intent mapping result but the child intent will be placed in the `input.intent` property. Find the parent as an additional high scoring intent in the `input.nlu.intentMapperResults.scores` array.
You can find the whole found Intent hierarchy in the `input.intentLevel` object and in the `input.nlu.intentMapperResults.intentPath` array.
