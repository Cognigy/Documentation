---
title: "Lexicon Slots"
slug: "lexicon-slots"
description: "Lexicons are structured vocabularies that help your AI Agent recognize specific words or phrases, known as Keyphrases, in user inputs. Within a Lexicon, you define Keyphrases along with their categories and equivalent words. Lexicon Slots are user-defined categories within a Lexicon."
hidden: false
tags:
  - cognigy nlu
  - slots
  - user-defined slots
  - lexicons
  - lexicon slots
---

# Lexicon Slots

[![Version badge](https://img.shields.io/badge/Updated in-v4.52-blue.svg)](../../../../../release-notes/4.52.md)

_Lexicons_ are structured vocabularies that help your AI Agent recognize specific words or phrases, known as Keyphrases, in user inputs. Within a Lexicon, you define Keyphrases along with their categories and equivalent words. Keyphrases can include examples like product names, car brands, or zip codes.

_Lexicon Slots_ are user-defined categories within a Lexicon. You assign a Lexicon Slot to a Keyphrase, to classify the type of information it represents. This approach provides contextual meaning for the system to understand the Keyphrase's role in the conversation.

## Key Benefits

- **Improved Recognition of User Inputs**. Lexicon Slots allow the AI Agent to recognize variations of Keyphrases (Synonyms), enabling flexible user input handling without requiring exact matches.
- **Consistency Across Conversations**. Lexicon Slots ensure uniform interpretation of terms across different Flows, improving reliability.
- **Easier Maintenance**. Centralized Lexicon management makes it easy to update Lexicon Slots, reducing errors.

## Limitations

- Maximum of 250 Lexicon Slots per Lexicon.
- Maximum of 30 characters per Lexicon Slot name.
- Maximum of 1 Keyphrase and 199 Synonyms per Lexicon entry (row).
- Maximum of 100K entries per Lexicon.

## Key Components of a Lexicon

<figure>
  <img class="image-center" id="specific-image" src="../../../../../../_assets/ai/empower/nlu/lexicon-editor.png" width="70%" />
</figure>

| **Component**              | **Description**                                                                                                                                                                                                                                                                                                                                                                                                | **Example**                                                                                                 |  
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|  
| Keyphrase                  | A word or phrase that the NLU should recognize. A Keyphrase acts as the main entry in the Lexicon.                                                                                                                                                                                                                                                                                                             | `"Apple iPhone"`                                                                                            |  
| (Lexicon) Slots            | Categorizes a Keyphrase to provide context in a conversation. They help define what type of entity the Keyphrase represents. <br> You can access detected Slots in the Flow using the Input object with the following syntax: `{{ "{{input.slots.SlotName}}" }}`, where `SlotName` is the name of the Slot. For example, if the Slot name is device, you can reference it as `{{ "{{input.slots.device}}" }}`. | `"device": true, "mobile": true` > `"Apple iPhone"` is categorized as both `device` and `mobile`.           |  
| Synonyms                   | Allows the AI Agent to recognize variations of a Keyphrase. If a user types a Synonym instead of the Keyphrase, the system still understands it as the same Keyphrase.                                                                                                                                                                                                                                         | `"Cool phone"` > Recognized as `"Apple iPhone"`                                                             |  
| Data (Metadata/Attributes) | Stores additional structured data related to a Keyphrase, such as product IDs, brands, or custom attributes.                                                                                                                                                                                                                                                                                                   | `{ "id": "12345", "brand": "Apple", "releaseYear": 2023 }` > `"Apple iPhone"` is linked to product details. |

## Working with Lexicon Slots

Lexicon Slots are managed within Lexicons, which you can create and configure in Cognigy.AI to support conversational Flows.

=== "GUI"
     You can create, download, and upload Lexicons in **Build > Lexicons**.
     Also, you can generate Lexicons by using [Generative AI](../../../generative-ai.md).

=== "API"
     You can add, download, and upload Lexicons using the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#get-/v2.0/lexicons).

=== "CLI"
     You can clone, restore, push, pull, and diff Lexicons using the [Cognigy.AI CLI](https://github.com/Cognigy/Cognigy-CLI/blob/main/README.md).

### Attach Lexicons for Slot Usage

Lexicon Slots aren't automatically recognized by the NLU model. 
To use them in a Flow, you must [manually attach a Lexicon to the Flow](../../attachments.md). 
Once the Lexicon is attached, Slots are populated when Keyphrases or their synonyms are detected in user input.

### Upload and Download Lexicons

For easy Slot management, you can upload and download Lexicons in CSV format.

??? info "CSV File Requirements"
    To upload the file, make sure your CSV file is UTF-8 encoded.

    The CSV file should have the following format:
    
    ```txt
    KEYPHRASE,"TAGS","SYNONYMS","{DATA}"
    ```

    Example:
    
    ```txt
    Keyphrase1,"tag","synonym1","{""key1"":""value""}"
    Keyphrase2,"tag,tag2","synonym2,synonym2_2","{""key2"":""value""}"
    Keyphrase3,"tag,tag2,tag3","synonym3,synonym3_2,synonym3_3","{""key3"":""value""}"
    ```

    {! _includes/ai/forbidden-characters.md !}

??? info "Upload Lexicons"
    To upload Lexicons, follow these steps:

    1. In the upper-right corner of the Lexicon editor, click ![upload](../../../../../_assets/icons/upload.svg).
    2. In the **Import Lexicon CSV file** window, select one of the following options:
        - **Skip importing duplicate Keyphrases** — the option skips importing any Synonyms from the CSV file that already exist in the current Lexicon. If there are duplicate Synonyms in the CSV file, they will be ignored during the import process. Only new and unique Synonyms will be imported.
        - **Overwrite the current Keyphrases** — the option replaces all the current Keyphrases in the Lexicon with the Keyphrases from the CSV file. If there are any existing keyphrases in the Lexicon, they will be completely overwritten, and only the Keyphrases from the CSV file will be retained.
        - **Merge Tags & Synonyms from the current and imported Keyphrases** — the option allows merging the Synonyms of Keyphrases from both the current Lexicon and the CSV file. Only unique Synonyms will be merged. If a Synonym exists in both the current Lexicon and the CSV file, this Synonym will not be merged.
    3. Click **Choose CSV file**.
    
    To track the uploading process, you can view the **Import Lexicon** task by clicking ![task-menu](../../../../../_assets/icons/task-menu.svg) in the upper-right corner.

??? info "Download Lexicons"
    To download Lexicons, follow these steps:

    1. In the upper-right corner of the Lexicon editor, click ![download](../../../../../_assets/icons/download.svg). Wait for the CSV file to be generated for downloading. To track this process, you can view the **Export Lexicon** task by clicking ![task-menu](../../../../../_assets/icons/task-menu.svg) in the upper-right corner.
    2. When the task is completed, click ![cloud](../../../../../_assets/icons/cloud.svg) in the upper-right corner of the Lexicon editor.

    The file will be downloaded.

## More Information

- [Regex](regex.md)
- [System-Defined Slots](../system-defined.md)
- [Overview](../overview.md)