---
title: "Overview"
slug: "slots"
descriptions: "Cognigy.AI Slots are predefined data types or custom phrases detected by the Cognigy NLU and placed into the Input Object under the `input.slots` object. They allow AI Agents to extract structured information from user input and use it dynamically in conversations."
hidden: false
tags:
  - cognigy nlu
  - slots
  - lexicons
---

# Slots

_Slots_ are predefined data types or custom phrases detected by the Cognigy NLU
and stored in the [Input](../../../build/ai-agent-memory/input.md) object.
They allow AI Agents to extract structured information from user input and use it dynamically in conversations.

There are two types of Slots:

- [System-Defined](system-defined.md) — built-in Slots that Cognigy.AI can use to automatically recognize common data types such as dates, times, numbers, and emails.
- [User-Defined](user-defined/lexicon.md) — custom Slots based on your vocabularies or regular expressions, allowing detection of specific phrases, entities, or domain-specific terms.

## Working with Slots

Working with Slots depends on the type of Slot you choose. While some Slots automatically extract values from the user input, others require manual configuration to map detected values to specific variables.

### Accessing Slots via CognigyScript

By default, Slots are stored in the Input object, and you can access them via [CognigyScript](../../../build/cognigyscript.md).

The `{{ "{{input.slots}}" }}` object contains all system- and user-defined Slots found in a user input.

### Tokenize your Slots

Create [Tokens](../../../build/tokens.md) for your Slots to speed up the process of adding them to conversation logic and output fields.

## More Information

- [Slot Fillers](../slot-fillers.md)