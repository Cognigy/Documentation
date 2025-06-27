---
title: "Slot Fillers"
slug: "slot-fillers"
description: "Cognigy.AI Slot Fillers let you monitor every user input for specific Slot matches and store them in context. This way, if an answer is already provided, the AI Agent skips the corresponding question."
hidden: false
tags:
  - slot fillers
  - cognigy nlu
  - slots
---

# Slot Fillers

_Slot Fillers_ let you monitor every user input for specific [Slot](slots/overview.md) matches
and store them in the [Context](../../build/ai-agent-memory/context.md) object.
This way, if an answer is already provided, the AI Agent skips the corresponding question in the Question Node.
For example, if a user says
`I'm flying from San Francisco on United` and the AI Agent asks
`What city are you departing from?` — this question would be redundant and create a poor user experience.
Instead, Slot Fillers ensure that only missing information is requested.

## Key Benefits

- **Collecting and Remembering Information**. With Slot Fillers, all required data is gathered and retained throughout the conversation, reducing errors and making conversations with the AI Agent smoother and more natural.
- **Handling Different Input Types**. Slot Fillers accept various formats, for example, dates and numbers, making it flexible for user inputs.

To learn more about the benefits of using Slot Fillers and how they work, watch this video:

<div style="text-align:center;">
  <iframe width="500" height="313" style="border: 1px solid #ccc; border-radius: 12px;" src="https://www.youtube.com/embed/bAP-r9iYeL0?si=-a5hMumF7aZ1O2eW" title="Cognigy Sessions: Cognigy.AI Slot Fillers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Restrictions

- Slot Fillers fail when multiple values share the same Slot type, making it impossible to distinguish between them. For example, `I'm flying from SFO to ORD on United`. The AI Agent can't distinguish between departure airport and arrival airport because both match `airport_code`. 
  To avoid this restriction, you can:
    - Create separate Slot Fillers for each value:
        - `Departure Airport` — use a Context Key, for example, `departure_city`.
        - `Arrival Airport` — use a Context Key, for example, `arrival_city`.
    - Modify the Flow to ask distinct questions for each Slot instead of extracting both from a single user input.

## Working with Slot Fillers

=== "GUI"
     You can create, edit, and delete Slot Fillers in **NLU > Slot Fillers** in the Flow editor.

=== "API"
     You can create, edit, and delete Slot Fillers by using [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#patch-/v2.0/flow/-flowId-/slotfillers).

To capture and store Slot matches, ensure you specify the Slot Filler in your Question Node by selecting the **Slot** question type, then activate the **Skip if answer exists in Context** option in the Node.

### Slot Filler Settings

??? info "Required Fields"

     | Field              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Example                          |
     |--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
     | Name               | The display name of the Slot Filler, used for identification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `Departure Airport Slot`         |
     | Type               | Defines the type of input expected. You can select from the following Slot types: <br>- **Slot** – a [Lexicon Slot](slots/user-defined/lexicon.md). Make sure a Lexicon is attached and that this Slot is included in it.<br>- **Regular Expression** – a [Regex Slot](slots/user-defined/regex.md).<br>- **Intent** – extracts values based on recognized Intents. Useful when Slot filling is tied to Intent classification.<br>- **System Slot** – [predefined Slot types](slots/system-defined.md) that automatically extract common entity types such as dates, numbers, temperatures, and more. | -                                |
     | Slot Name          | This parameter appears if the **Slot** type is selected. Specifies which Slot this Filler is associated with.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `airport_code`, `date`, `name`   | 
     | Regular Expression | This parameter appears if the **Regular Expression** type is selected. Enter the regular expression to extract specific patterns from user input. Regex expressions must start with `/` and end with `/g` for global matching, for example, `/^\d{3}-\d{3}-\d{4}$/g`.                                                                                                                                                                                                                                                                                                                                 |    
     | Context Key        | The variable name used to store the extracted value in the Context object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `departure_city`, `arrival_date` |

??? info "Optional Fields"

     | Field                                    | Description                                                                               | Example                                               |
     |------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------|
     | Additional Validation                    | Allows extra validation rules to ensure correct formatting or values.                     | Ensure date format is `YYYY-MM-DD`.                   |
     | Result Location                          | Determines where the extracted data is stored.                                            | Context or Contact Profile.                           |
     | Store result in Context                  | Stores the extracted value in the Context object.                                         | `"departure_city": "SFO"`.                            |
     | Store result in Contact Profile          | Stores the extracted value in the Contact Profile for future interactions.                | Store **"preferred_airline"** for returning users.    |
     | Store Detailed Results                   | Stores metadata about the extracted Slot, for example, confidence scores.                 | Confidence score of `0.92` for `"ORD"`.               |
     | Use Positive Keyphrases Only             | Limits Slot extraction to predefined keyphrases.                                          | Only accept `"San Francisco"` for `departure_city`.   |
     | Skip if the result is already in Context | Prevents asking for the Slot again if a valid value already exists in the Context object. | If `"departure_city": "LAX"` is set, don’t ask again. |

## Example

??? info "Step 1. Add Slots"
    1. Create a new Flow called `Slot Fillers`.
    2. Navigate to the **NLU** tab and attach relevant Lexicons, for example, `airports` and `airlines`.
    3. On the **Slot Fillers** tab, follow these steps:
        1. Create a new Slot Filler named `Airline`. 
        2. Select **Slot** from the **Type** list.
    4. Enter `airline` in both the **Slot name** and **Context Key** fields. 
    5. Repeat the steps 3.1 and 3.2 to create another Slot Filler named `Airport`, enter `airport_code` in the **Slot name** and **Context Key** fields.
    6. Click **Build Model**.

??? info "Step 2. Configure Question Nodes"  
    1. Create a Question Node, enter `What is your departure airport?` in the **Text** field and select **Slot** from the **Question Type** list.
    2. Enter `airport_code` in **Slot Name** and **Context Key to use**.
    3. Enable **Skip if answer exists in Context**.
    4. Repeat the process for `What is your airline?`, enter `airline` in the **Slot name** and **Context Key** fields.

??? info "Step 3. Test Slot Fillers"
    Provide all information at once: <br>
    **User Input**: `I'm leaving San Francisco on United.`<br>
    **Result**: `No additional questions are asked.`<br><br>
    Provide partial information: <br>
    **User Input**: `I'm flying on United.`<br>
    **AI Agent**: `What is your departure airport?`<br>
    **User Input**: `SFO`<br>
    **Result**: The AI Agent skips asking for the airline.

## More Information

- [Overview](overview.md)
