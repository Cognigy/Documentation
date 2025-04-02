---
title: "Add Memory"
slug: "add-memory"
description: "The Add Memory Node stores text, such as user input and other relevant details, within the Contact Profile."
hidden: false
---

# Add Memory

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/analytics/add-memory.png" width="50%" />
</figure>

## Description

{! _includes/ai/beta.md !}

The Add Memory Node stores memories within the [Contact Profile](../../../analyze/contact-profiles.md).
A memory entry can be any text, such as user input and other relevant details.

Recorded memories are also accessible within the [Profile](../../../test/interaction-panel/profile.md) object in the Interaction Panel.
The array of memories consists of multiple memory objects.
Each memory object contains:

- `id` — a unique identifier for the memory.
- `timestamp` — the exact time the memory was created, recorded in ISO 8601 format.
- `text` — the content of the memory.

Each time the Add Memory Node is triggered, it adds a new memory object to the array, updating the AI Agent's long-term memory.

By referencing stored memories, the AI Agent can generate responses based on past interactions, offering a more personalized and context-aware experience for the end user.

## Parameters

| Parameter  | Type          | Description                                                                    |
|------------|---------------|--------------------------------------------------------------------------------|
| New Memory | CognigyScript | The text that will be stored in the **Memories** field of the Contact Profile. |

## More Information

- [Agent AI](../ai//ai-agent.md)
- [Agentic AI](../../../empower/agentic-ai/overview.md)
- [Contact Profile](../../../analyze/contact-profiles.md)
