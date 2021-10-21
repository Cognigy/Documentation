# Intent Trainer

The **Intent Trainer** enables you to analyze the collected user inputs (records) and add them to **[Intents]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/)** to improve your **Agent**'s user input comprehension.  You can decide which user input record improves the Agents intent and then click on  **"Add to Intent"** - Then use the **"Train"** button in the top right above the record list to overtake the new intent to the **NLU intent list** in your Flow. You do not need to execute "Build Model", because the "Train" functionality of the 'Intent Trainer' did already the scoring - you will see that by the indicated scoring data and the color icons in the Intent list.  

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/31f53b3-Intent_Trainer_filter_options_800px.svg" width="100%" />
  <figcaption>Intent Trainer with filter options</figcaption>
</figure>

## Export/Import
You can export and import Intent Trainer records by selecting the option after clicking on the 'three dots button' beneath the "Train" button. To export Intent Trainer records select the date range then confirm. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/936a209-Export_Intent_Trainer_records.svg" width="100%" />
  <figcaption>Export Intent Trainer records</figcaption>
</figure>


[![Version badge](https://img.shields.io/badge/Added in-v4.8.0-blue.svg)]({{config.site_url}})

## Filter Records
As of release v4.8 you can filter records by **Snapshot**, **Locale**, **Flow**, **Intent**, **Review Status**, **Found Intent**, **[Found a Slot]({{config.site_url}}ai/nlu/slot-mapping/any-slots/)**,  **Intent Score**, **Intent Types** and **[Slot]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/#slots-and-lexicons)**.


| **Filter**      | **Option**                                | **Description**|
| ----------- | ------------------------------------- |------------|
| Snapshot| No Snapshot <br> (list of available Snapshots) |You can select available Snapshots.|
| Locale | Any Locale <br> (list of available Locales) |You can select a Locale when available.|
| Intent | Any Locale <br> (list of available Locales) |You can select available Intents.|
| Review Status | Any Intent <br> (list of available Intents)| Lists all Intents depending on filter option.|
| Found Intent | Not reviewed <br> Reviewed <br> Ignored <br> Skipped |Lists all Intents found depending on selected filter.|
| Found a Slot | Not selected <br> Found Intents <br> No Intent Found |Lists all Slots found depending on selected filter option.|
| Intent Score | Not selected <br> **Poor**(0-0.3) <br> **Fair** (0.3-0.7) <br> **Good**(0.7-1) |The respective scoring areas are indicated by **colored** dots.|
|Input Types| positive Answer <br> Negative Answer <br> Greeting <br> Goodbye Message <br> Statement <br> Command <br> Why Question <br> How Question <br> Yes or No Question|You can select one or more types of user messages as a filter option.|
| Slot | None <br> Lexicon Slots <br> System Slots |Lists all user messages depending on selected slot type.|


The **"Filter Preset"** drop-down menu allows you to preset filter options with one mouseclick.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/a68ad17-Filter_Preset.svg" width="100%" />
  <figcaption>Available filter presets</figcaption>
</figure>

## Add to Intent
Adding a record to an Intent requires you to select the Flow and the target Intent, you can also modify it before adding. The input will become an Intent example sentence afterwards.

## Skip
**Skip** moves the user input to the **Skipped** records, however, once a user enters the same input again, it will also show up again in the **Unhandled** records of the Intent Trainer.

## Ignore
**Ignore** moves the user input to the **Ignored** records and once a user enters the same input again it will also be ignored.