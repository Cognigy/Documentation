---
 title: "Lexicons" 
 slug: "lexicons" 
 hidden: false 
---
# Lexicons

**Lexicons** are collections of domain-specific **Keyphrases** (also known as **Entities**) that can be attached to a Flow. A Lexicon can be seen as a dictionary, that allows the Virtual Agent to "understand" specific words, like car brands, product groups or zipcodes. As soon as a Keyphrase is detected, it is published to the [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/) object for further use. This process is called **Slot Mapping**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/c95b04b-lexicon-small.jpg" width="100%" />
</figure>

!!! note "Want to learn how to use a Lexicon?"
    Have a look at the [**Match user expressions with a Lexicon**](https://support.cognigy.com/hc/en-us/articles/360014776979-Match-user-expressions-with-a-Lexicon) guide in the Help Center. 

## Managing Keyphrases
<div class="divider"></div>

Individual Lexicon entries are referred to as **Keyphrases**. Keyphrases have **Slots** (also known as Tags) and  **Synonyms**, and can be used by the [NLU]({{config.site_url}}ai/nlu/nlu-overview/overview/). 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/973f877-lexicon-keyphrase.jpg" width="100%" />
</figure>

In the example above, the **Keyphrase** is *Apple iPhone*. The **Slots** that are filled when this Keyphrase is detected, are *device* and *mobile*. Its synonym is *Cool phone*. 

### Adding Keyphrases
To add a new Keyphrase, go to the ``Enter new keyphrase`` input field, type the name of the Keyphrase and hit enter.

### Editing Keyphrases
To edit a Keyphrase, just click on the name of the Keyphrase, and an input field will appear. To add Tags/Synonyms, just click in the respective text field, type the Tag/Synonym name and hit enter. 

###Keyphrase Data Payloads
You can also add data to Lexicons, which will be displayed in the input object when a Keyphrase is triggered, and it is therefore useful to store something like product IDs here. To add data, simply click on the ``expand`` arrow on the right of the Keyphrase entry, and then type in the desired data in JSON format.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/1776c15-lexiconData.PNG" width="100%" />
</figure>

### Deleting Keyphrases
There are two ways to delete a Keyphrase: One is to expand the Keyphrase by clicking on the "expand" arrow on the right side of the menu, then clicking on the "DELETE" button in the bottom right corner. Another way is to mark the desired Keyphrase(s) by clicking the checkbox on the left of a Keyphrase, and then scrolling down to the bottom to delete it. You can delete several Keyphrases this way.

### Search
You can search through your Keyphrases via the search bar in the top right corner. This will return Keyphrase names, Tags and Synonyms in the search results.

### Pages
At the bottom, you can navigate to different pages and toggle the amount of Keyphrases you wish to show per page. This is quite handy when your Lexicons start to grow and have dozens of entries - just switch to a smaller page-size on smaller screens or increase the limit of entries on a page for large monitor usage.

!!! warning "Attach your Lexicons"
    Lexicons are not automatically recognized by the Cognigy NLU after adding them in the flow editor. They must be attached to the specific flows where they are to be used. See the [Attached Lexicons Page]({{config.site_url}}ai/nlu/attachments/attached-lexicons/) for more information.

!!! tip "Access slots in your Flow"
    Build smart virtual agents that recognize your custom libraries by finding Lexicon keyphrases in the NLU Slot mapping results. See the [Slot Mapping Page]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/) for more information.

## Importing & Exporting Lexicons

<div class="divider"></div>

Lexicons libraries can be uploaded and downloaded in CSV format by clicking on the up and down arrows in the top right corner of the Lexicon Editor.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/adc9dd8-lexicon-upload-download.png" width="100%" />
</figure>

### Prepare CSV File Download

[![Version badge](https://img.shields.io/badge/Added in-v4.22.0-blue.svg)]({{config.site_url}})

To prepare the Lexicon for download, click the down arrow. This will run a background task to prepare the CSV file. 
Once the task is completed, a notification will appear and a blue download button will be displayed in the Lexicon Editor top right corner, click the button to start the download.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/lexicon_download.png" width="200%" />
</figure>

### Lexicon .csv Format

To upload a Lexicon click on the "Choose CSV File" button. The .csv file should have the following format:
<div style="text-align: center">KEYPHRASE,"TAGS","SYNONYMS","{DATA}"</div>

#### Example

**CSV Format  Example**

```CSV
Keyphrase1,"tag","synonym1","{""key1"":""value""}"
Keyphrase2,"tag,tag2","synonym2,synonym2_2","{""key2"":""value""}"
Keyphrase3,"tag,tag2,tag3","synonym3,synonym3_2,synonym3_3","{""key3"":""value""}"
```

!!! warning "UTF-8 Encoding"
    In order to avoid any issues with special characters, make sure your CSV files are UTF-8 encoded.


### Built-in Slots

<div class="divider"></div>

Cognigy.AI features built-in Slot detection for a broad range common data types. It is not necessary to create custom Lexicon libraries to recognize these types of data, as they will be found automatically by the Cognigy NLU. The built-in Slot types are listed below:

| Slot type   |
|-------------|
| Date        |
| Number      |
| Duration    |
| Temperature |
| Age         |
| Email       |
| Percentage  |

!!! note "Built in Slot Details"
    Find out more about how to use built-in slots and their various formats on the [Slot Mapping Page]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/).


## Generative AI

To use Generative AI technology for creating a new Lexicon, read the [Generative AI](../../generative-ai.md#generate-lexicons) article.
