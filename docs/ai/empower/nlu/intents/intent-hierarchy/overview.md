---
title: "Overview" 
slug: "intent-hierarchy"
description: "Cognigy.AI Intent Hierarchy allows you to structure Intents into layered groups, connecting parent Intents with their children and grandchildren."
hidden: false 
tags:
  - cognigy nlu
  - intent hierarchy
  - intents
  - parent and child intents
---

# Intent Hierarchy

_Intent Hierarchy_ allows you to structure Intents into layered groups, connecting parent Intents with their children and grandchildren.
This organization of Intents helps AI Agents interpret user inputs by inheriting example sentences across levels. It increases flexibility and boosts Intent detection accuracy for more natural conversations.

## Restrictions

- Intent hierarchies are limited to three levels (Level 1, Level 2, and Level 3), preventing deeper nesting.
- By default, parent Intents don't use example sentences from their child Intents. To change this behavior, use the [Inheritance Mechanism](inherit-child-example-sentences.md) feature.
- When user input matches both parent and child Intents, this overlap may cause ambiguity. Use the [Intent Mapping Priority](inherit-child-example-sentences.md) feature to ensure the AI Agent selects the most specific Intent.

## Intent Hierarchy Structure

An Intent hierarchy follows this structure:

- **Parent Intents** – top-level Intents that represent a broader category or topic. They can inherit example sentences from their child Intents for broader recognition.
- **Child Intents** – more specific Intents nested under parent Intents. Each child Intent focuses on a narrower aspect of the parent's category and can share example sentences with their parent Intents.

??? info "Example: Intent Hierarchy Structure"

    ```txt
    Flow
    ├── Intent A
    │   └── Intent A.1
    │       └── Intent A.2
    └── Intent B
    ```

    - **Intent A** (Level 1) – the parent Intent, representing a broad Intent category.
        - **Intent A.1** (Level 2) – a child Intent, providing a more specific Intent under `Intent A`.
            - **Intent A.1.1** (Level 3) – a grandchild Intent, the most detailed Intent under `Intent A.1`.
    - **Intent B** (Level 1) – another parent Intent, which stands alone at this level.

??? info "Example: Intent Hierarchy Structure in Customer Support Flow"
    ```txt
    Customer Support Flow
    ├── Order Support
    │   └── Order Status
    │       └── Tracking Information
    └── Account Support
    ```

    - **Order Support** (Level 1) – the parent Intent, representing general questions about orders.
        - **Order Status** (Level 2) – a child Intent under `Order Support` that handles questions about order tracking. 
            - **Tracking Information** (Level 3) – a grandchild Intent under `Order Status` that deals with requests for tracking numbers or delivery updates.
    - **Account Support** (Level 1) – a separate parent Intent, focusing on account-related questions.

## Working with Intent Hierarchy

In **NLU > Intents**, drag Intents from the list onto a parent Intent to build hierarchies.

## More Information

- [Intents](../overview.md)