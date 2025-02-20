---
title: "Lexicons"
slug: "lexicons"
hidden: false
---

# Lexicons

[![Version badge](https://img.shields.io/badge/Updated in-v4.52-blue.svg)](../../../../release-notes/4.52.md)

_Lexicons_ are collections of domain-specific Keyphrases, also known as entities, that can be attached to a Flow.
A Lexicon can be seen as a dictionary that allows the AI Agent to understand
specific words, such as car brands, product groups, or zip codes.
As soon as a keyphrase is detected, it is published to the Input object for further use. This process is called Slot Mapping.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/lexicon-editor_Devices.png" width="80%" />
</figure>

To learn more about use cases for Lexicons, read [Match user expressions with a Lexicon](https://support.cognigy.com/hc/en-us/articles/360014776979-Match-user-expressions-with-a-Lexicon) Help Center article.

## Restrictions

- Maximum of 1 Keyphrase and 199 synonyms per entry (row).
- Maximum of 250 Slots per Lexicon.
- Maximum of 30 characters per Slot in a Lexicon.
- Maximum of 100K entries per Lexicon.

## Manage Keyphrases

Individual Lexicon entries are referred to as **Keyphrases**. Keyphrases have **Slots**, also known as Tags, and  **Synonyms**, and can be used by the [NLU](../../../empower/nlu/overview.md).

In the example above, the **Keyphrase** is *Apple iPhone*. The **Slots** that are filled when this Keyphrase is detected, are *device* and *mobile*. Its synonym is *Cool phone*.

### Add Keyphrases
To add a new Keyphrase, go to the `Enter new keyphrase` input field, type the name of the Keyphrase and hit **Enter**.

### Edit Keyphrases
To edit a Keyphrase, just click the name of the Keyphrase, and an input field will appear. To add Tags/Synonyms, just click in the respective text field, type the Tag/Synonym name and hit **Enter**.

### Add Keyphrase Data
You can also add data to Lexicons, which will be displayed in the input object when a Keyphrase is triggered, and it is therefore useful to store something like product IDs here. To add data, simply click ![expand](../../../../_assets/icons/expand.svg) on the right of the Keyphrase entry, and then type in the desired data in JSON format.

### Delete Keyphrases
There are two ways to delete a Keyphrase: One is to expand the Keyphrase by clicking ![expand](../../../../_assets/icons/expand.svg) on the right side of the menu, then clicking **DELETE** in the bottom right corner. Another way is to mark the desired Keyphrases by clicking the option on the left of a Keyphrase, and then scrolling down to the bottom to delete it. You can delete several Keyphrases this way.

### Search Keyphrases
You can search through your Keyphrases via the search bar in the top right corner. This will return Keyphrase names, Tags and Synonyms in the search results.

### Navigate Keyphrases

At the bottom, you can navigate to different pages and toggle the amount of Keyphrases you wish to show per page. This is quite handy when your Lexicons start to grow and have dozens of entries - just switch to a smaller page-size on smaller screens or increase the limit of entries on a page for large monitor usage.

!!! warning "Attach your Lexicons"
    Lexicons are not automatically recognized by the Cognigy NLU after adding them in the flow editor. They must be attached to the specific flows where they are to be used. See the [Attached Lexicons Page](../../../empower/nlu/attachments/attached-lexicons.md) for more information.

!!! tip "Access slots in your Flow"
    Build smart AI Agents that recognize your custom libraries by finding Lexicon keyphrases in the NLU Slot mapping results. See the [Slot Mapping Page](../../../empower/nlu/slots-and-lexicons/slots.md) for more information.

## Upload and Download Lexicons

Lexicon libraries can be uploaded and downloaded in CSV format.

### CSV File Requirements

#### Encoding

To upload the file, make sure your CSV file is UTF-8 encoded.

#### Format

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
#### Forbidden characters

{! _includes/ai/forbidden-characters.md !}

### Upload Lexicons

To upload Lexicons, follow these steps:

1. Go to **Build > Lexicons**.
2. Open the existing Lexicon.
3. In the upper-right corner of the Lexicon Editor page, click ![upload](../../../../_assets/icons/upload.svg).
4. In the **Import Lexicon CSV file** window, select one of the following options:
    - **Skip importing duplicate Keyphrases** — the option skips importing any Synonyms from the CSV file that already exist in the current Lexicon. If there are duplicate Synonyms in the CSV file, they will be ignored during the import process. Only new and unique Synonyms will be imported.
    - **Overwrite the current Keyphrases** — the option replaces all the current Keyphrases in the lexicon with the Keyphrases from the CSV file. If there are any existing keyphrases in the Lexicon, they will be completely overwritten, and only the Keyphrases from the CSV file will be retained.
    - **Merge Tags & Synonyms from the current and imported Keyphrases** — the option allows merging the Synonyms of Keyphrases from both the current Lexicon and the CSV file. Only unique Synonyms will be merged. If a Synonym exists in both the current Lexicon and the CSV file, this Synonym will not be merged.
5. Click **Choose CSV file**.

To track the uploading process, you can view the **Import Lexicon** task by clicking ![task-menu](../../../../_assets/icons/task-menu.svg) in the upper-right corner.

### Download Lexicons

To download Lexicons, follow these steps:

1. Go to **Build > Lexicons**.
2. Open the existing Lexicon.
3. In the upper-right corner of the Lexicon Editor page, click ![download](../../../../_assets/icons/download.svg). Waiting for when the CSV file will be generated for downloading. To track this process, you can view the **Export Lexicon** task by clicking ![task-menu](../../../../_assets/icons/task-menu.svg) in the upper-right corner.
4. When the task is completed, click ![cloud](../../../../_assets/icons/cloud.svg) in the upper-right corner of the Lexicon Editor page.

The file will be downloaded.

## Built-in Slots

Cognigy.AI features built-in Slot detection for a broad range common data types. It is not necessary to create custom Lexicon libraries to recognize these types of data, as they will be found automatically by the Cognigy NLU.

The built-in Slot types are listed below:

- Date
- Number
- Duration
- Temperature
- Age
- Email
- Percentage

Find more information
on how to use built-in slots and their various formats on the [Slot Mapping](../../../empower/nlu/slots-and-lexicons/slots.md) page.

## Generative AI

To use Generative AI technology for creating a new Lexicon, read the [Generative AI](../../../empower/generative-ai.md#generate-lexicons) article.
