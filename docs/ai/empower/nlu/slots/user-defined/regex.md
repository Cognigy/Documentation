---
title: "Regex Slots"
slug: "regex-slots"
description: "In Cognigy.AI, Regex Slots are user-defined Slots, which apply [regular expressions](https://regex101.com/) to match and extract specific patterns from user inputs."
hidden: false
tags:
  - cognigy nlu
  - slots
  - user-defined slots
  - regular expressions
  - regex slots
---

# Regex Slots

*Regex Slots* are user-defined Slots, which apply [regular expressions](https://regex101.com/) (regex) to match and extract specific patterns from user inputs.

Unlike Lexicon Slots, which rely on Keyphrases, Regex Slots are ideal for structured data that follows a predictable format, such as:

- Phone numbers (`(123) 456-7890`)
- Email addresses (`user@example.com`)
- Product codes (`ABC-123-XYZ`)

You can use this type of Regex Slots only as [Slot Fillers](../../slot-fillers.md).

## Recommendations

- Regex Slots require careful crafting to avoid overly broad or restrictive patterns.
- Complex regular expressions can be error-prone; test them thoroughly to avoid missing matches or capturing incorrect data.
- Avoid conflicts with Lexicon Slots and System Slots by ensuring unique Slot names.

## Working with Regex Slots

To start working with Regex Slots, you can use one of the following options:

=== "Apply to an Entire Flow"
     To define a regex pattern that runs on all user inputs in the Flow, follow these steps:

     1. In the Flow editor, go to **NLU > Slot Fillers**. 
     2. In the upper-left corner, click **+ New Slot Filler**.
     3. In the **New Slot Filler** window, fill in the following fields:
        - **Name** – enter a unique name for the Slot Filler. For example, `phone_number`.
        - **Type** – select **Regular Expression**. 
        - **Regular Expression** – enter a regex pattern. Regular expressions must start with `/` and end with `/`, for example, `/^\d{3}-\d{3}-\d{4}$/`.
        - **Context Key** – enter a Slot name to store the matched data in the Context object. For example, `phone_number`.

=== "Apply After a Specific Point in a Flow"
     To define a regex pattern that runs after a specific user input in the Flow, follow these steps:
     
     1. In the Flow editor, add a [Regex Slot Filler](../../../../build/node-reference/ai/regex-slot-filler.md) Node where you want to process the input, for example, after a Question Node.
     2. In the Node editor, configure the following fields:
        - **Regular Expression** - enter a regex pattern without leading and trailing slashes, for example, `^\d{3}-\d{3}-\d{4}$`.
        - **Flags** – enter flags you want to apply to the regular expression, for example, `i` for case-insensitive, `m` for multiline. Note that the `g` flag should be always specified.
        - **Slot Name** – enter the Slot name to store the matched data in the `slots.<slot-name>` Input object. For example, `phone_number`.

Once a Regex Slot is filled, the extracted data can be used in the conversation logic, for example, for the following purposes:

- Validating user input, for example, ensuring a valid email format.
- Triggering specific actions, for example, saving a phone number to the Contact Profile.
- Combining with Question Nodes to prompt users to re-enter missing or incorrectly formatted information.

### Example

**User Input**: `My phone number is 555-123-4567`<br>
**Regex Pattern**: `/^\d{3}-\d{3}-\d{4}$/g`<br>
**Slot Name**: `phone_number`<br>
**Result**: The `context.phone_number` Slot is populated with `555-123-4567`. The AI Agent responds `Thanks for providing your phone number: {{"{{context.slots.phone_number}}"}}!`

## Use Cases

- Extracting a booking code: `/^[A-Z]{3}-\d{4}$/g` to capture `XYZ-1234`.
- Capturing email addresses with the `@company` domain: `/^[a-zA-Z0-9._%+-]+@company\.com$/g`.
- Identifying dates in specific formats: `/^\d{2}\/\d{2}\/\d{4}$/g` for `04/22/2025`.

## More Information

- [Lexicon Slots](lexicon.md)
- [Overview](overview.md)
- [System-Defined](../system-defined.md)