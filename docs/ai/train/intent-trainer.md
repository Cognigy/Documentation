---
title: "Intent Trainer" 
slug: "intent-trainer" 
hidden: false
tags: 
  - train intents
  - intent trainer
  - NLU
  - scoring
---

# Intent Trainer

[![Version badge](https://img.shields.io/badge/Updated in-v4.99-blue.svg)](../../release-notes/4.99.md)

One of the key strengths of AI Agents is their ability to improve over time.
Cognigy.AI offers the *Intent Trainer* feature that allows you to refine AI Agents based on existing dialogs.
This tool improves the AI Agent's understanding by letting you review and add user inputs to [Intents](../../ai/empower/nlu/intents/ml-intents.md).

## Key Features

- **Analysis of Collected User Inputs**. Review and analyze Intent Trainer records to identify areas for improvement.
- **Adding Inputs to Intents**. Choose which Intent Trainer records will enhance specific Intents and add them to the Intent Sentences list.
- **Instant Training**. After refining Intent Trainer records, quickly update the NLU model on the Intent Trainer page. This action eliminates the need to rebuild the model on the Flow page.
- **Automatic Scoring**. The Train capability automatically scores Intents, and you can visually track progress with color-coded icons and scoring data in the list.

## Limitations

- By default, the Intent Trainer records Time-to-Live (TTL) is set to 10 days (14400 minutes). If you have on-premises or dedicated SaaS installations, you can change this value using the following variable: `TRAINERRECORD_TTL_IN_MINUTES`. For example, to set the TTL to 30 days, configure the variable as follows: `TRAINERRECORD_TTL_IN_MINUTES="43200"`.
- The maximum file size for uploading Intent Trainer records is 150 MB.

## Working with Intent Trainer

In **Tweak > Intent Trainer**, you can:

1. [Find Intent Trainer records by using filters](#filter-intent-trainer-records)
2. [Refine Intent Trainer records: add to Intents, skip, or ignore](#manage-intent-trainer-records) 
3. [Train the NLU model](#train-the-nlu-model)
4. [_(Optional)_ Import and Export Intent Trainer records](#import-and-export-intent-trainer-records)

### Filter Intent Trainer Records

Review the collected input records from users and search for them using filters.

??? info "Predefined Filters"

    The **Filter Preset** allows you to filter records based on predefined categories for more efficient navigation and analysis.

    | **Filter Preset Option** | **Description**                                                |
    |--------------------------|----------------------------------------------------------------|
    | Not Understood           | View all records that the system didn't understand.           |
    | Show All                 | View all available records without any filters applied.        |
    | Found Intents            | View records with Intents identified by the system.            |
    | Found Lexicon Slots      | View records where Lexicon Slots were detected.                |
    | Poor Intent Score        | View records with Intents that have a low confidence score.    |
    | Fair Intent Score        | View records with Intents that have a medium confidence score. |


??? info "Custom Filters"

    When you select **Custom** in the Filter Preset, you can apply any filter. If you modify a filter while a preset option is selected, the Filter Preset automatically changes to **Custom**.

    | **Filter**                                                      | **Descriptions**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    |-----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Snapshot                                                        | Select a specific Snapshot to view Intents and related records. By default, **No Snapshot** is selected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | Locale                                                          | Filter records by language or locale when multiple locales are used. By default, **Any Locale** is selected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | Intent                                                          | Filter by specific Intents to refine the results. By default, **Any Intent** is selected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | Review Status                                                   | Filter records by their review status to track progress:<br> <ul><li>**Not Reviewed** — a record was not reviewed.</li><li>**Reviewed** — a record was added to the Intent and reviewed.</li><li>**Ignored** — a record, along with all future inputs containing the same text, is ignored.</li><li>**Skipped** — a record is skipped for now and can be revisited later, with the option to review it again.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | Found Intent                                                    | Filter records based on whether an Intent was identified or not. By default, **No Intent Found** is selected. You can select one of the following options: <br><ul><li>**Found Intent** — shows records where an Intent was successfully matched.</li><li>**No Intent Found** — shows records where no Intent was identified.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | [Found a Slot](../empower/nlu/slots-and-lexicons/any-slots.md)  | View all Slots found based on the selected filter option. By default, **Not Selected** is chosen. You can select one of the following options: <br><ul><li>**Found Intents** — shows records where a Slot was identified.</li><li>**No Intent Found** — shows records where no Slot was identified.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | Intent Score                                                    | Filter records by confidence score, shown as color-coded icons. By default, **Not Selected** is chosen. You can select one of the following options: <ul><li>**Poor** (0–0.3) — low confidence score, meaning the Intent was not accurately identified.</li><li>**Fair** (0.3–0.7) — medium confidence score, showing a moderately accurate identification.</li><li>**Good** (0.7–1.0) — high confidence score, indicating a very accurate Intent identification.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | Input Types                                                     | Filter records by user input type. You can select one of the following input types: <br> <ul><li>**Positive Answer** — user responded affirmatively. For example, `yes`, `sure`.</li><li>**Negative Answer** — user responded negatively. For example, `no`, `never`.</li><li>**Greeting** — user initiated a greeting. For example, `hi`, `hello`.</li><li>**Goodbye Message** — user expressed farewell. For example, `goodbye`, `see you later`.</li><li>**Statement** — user made a declarative statement. For example, `I like this product`.</li><li>**Command** — user issued a command. For example, `turn on the light`.</li><li>**Why Question** — user asked a `why` question. For example, `Why is it included in the package?`.</li><li>**How Question** — user asked a `how` question. For example, `How does this work?`.</li><li>**Yes or No Question** — user asked a `yes/no` question. For example, `Do you have this item in stock?`.</li></ul> |
    | [Slot](../empower/nlu/intents/ml-intents.md#slots-and-lexicons) | Filter records by selected Slot type. You can select one of the following options: <br> <ul><li>**None** — no Slots identified.</li><li>**Lexicon Slots** — identified lexicon-based Slots, which are user-defined categories.</li><li>**System Slots** — Slots that are predefined in the system, such as dates or numbers.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Manage Intent Trainer Records

Based on the analysis, decide which user inputs will improve a particular Intent, add those inputs to the corresponding Intent.

??? info "Add Records to Intents"

    === "GUI"
        1. In the Intent Trainer, select a record from the list and click **Add to Intent**.
        2. In the **Edit Record** window, select an Intent to which you want to add a record.  
        Change the text of the Intent in the **Text** field.  
        Additionally, you can create a new Keyphrase or Synonym.  
        Save changes and apply them. The Intent record will be added as a sentence to the selected Intent.

    === "API"
         You can add a user input record to a specific Intent using the [Cognigy.AI API POST /v2.0/trainer/batch](https://api-dev.cognigy.ai/openapi#post-/v2.0/trainer/batch) request, specify `"action": "addToIntent"` in the `operations` object.

??? info "Skip Records"

    === "GUI"
        1. In the Intent Trainer, select a record from the list and click **Skip**.
        2. Apply changes. This action moves the input to **Skipped** records, but it will reappear in **Not reviewed** if the same input is entered again.
 
    === "API"
         You can skip Intent Trainer records using he [Cognigy.AI API POST /v2.0/trainer/batch](https://api-dev.cognigy.ai/openapi#post-/v2.0/trainer/batch) request, specify `"action": "skip"` in the `operations` object.

??? info "Ignore Records"

    === "GUI"
        1. In the Intent Trainer, select an Intent record from the list and click **Ignore**.  
        2. Apply changes. This action moves the user input to the **Ignored** records, and if a user enters the same input, it will also be ignored.

    === "API"
         You can skip Intent Trainer records using he [Cognigy.AI API POST /v2.0/trainer/batch](https://api-dev.cognigy.ai/openapi#post-/v2.0/trainer/batch) request, specify `"action": "ignore"` in the `operations` object.

### Train the NLU Model

After adding a record to the Intent, click **Train** in the top-right corner of the **Intent Records** page.  
You don't need to run **Build Model** in the Flow — the Intent Trainer has already scored the Intent, shown in the scoring data and color-coded icons.

### Import and Export Intent Trainer Records

You can import and export records between production and development environments.  
The Intent Trainer [temporarily stores records](#limitations).
To ensure data safety, export the records for local storage.

??? info "Import Records"

    === "GUI"
        1. Go to **Tweak > Intent Trainer**.
        2. In the upper-right corner, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Import Trainer Records**.
        3. Select a file in the `CTRAIN` format from your computer and click **Open**.
    
        Once the file is uploaded, you will receive a system success message.
    
    === "API"
         You can import Intent Trainer records using the [Cognigy.AI API POST /v2.0/trainer/upload](https://api-trial.cognigy.ai/openapi#post-/v2.0/trainer/upload) request.


??? info "Export Records"

    === "GUI"
        1. Go to **Tweak > Intent Trainer**.
        2. In the upper-right corner, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Export Trainer Records**.
        3. Select a date range by clicking the date and selecting the desired date in the calendar.
        4. To include reviewed records in the file, activate **Include reviewed**.
        5. Click **Confirm**, then **Download Trainer Records**.
    
        The file will be downloaded in the `CTRAIN` format.

    === "API"
        You can export Intent Trainer records using the Cognigy.AI API. First, create a file via the [POST /v2.0/trainer/package](https://api-trial.cognigy.ai/openapi#post-/v2.0/trainer/package) request, and then download it via the [POST /v2.0/trainer/downloadlink](https://api-trial.cognigy.ai/openapi#post-/v2.0/trainer/downloadlink).

## More Information

- [Intents](../empower/nlu/overview.md)