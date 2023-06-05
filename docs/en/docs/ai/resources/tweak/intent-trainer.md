---
 title: "Intent Trainer" 
 slug: "intent-trainer" 
 hidden: false 
---
# Intent Trainer

The **Intent Trainer** enables you to analyze the collected user inputs (records) and add them to **[Intents]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/)** to improve your **Agent**'s user input comprehension.  You can decide which user input record improves the Agents intent and then click on  **Add to Intent** - Then use the **"Train"** button in the top right above the record list to overtake the new intent to the **NLU intent list** in your Flow. You do not need to execute "Build Model", because the "Train" functionality of the 'Intent Trainer' did already the scoring - you will see that by the indicated scoring data and the color icons in the Intent list.  

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/31f53b3-Intent_Trainer_filter_options_800px.svg" width="100%" />
  <figcaption>Intent Trainer with filter options</figcaption>
</figure>

## Export and Import Intent Records

### Import Intent Records

To import intent records, follow these steps:

1. Go to **Tweak > Intent Trainer**.
2. In the upper-right corner, click ![vertical-ellipsis](../../../assets/icons/vertical-ellipsis.svg) **> Import Trainer Records**.
3. Select a file in the `CTRAIN` format from your computer and click **Open**.

Once the file is uploaded, you will receive a system success message.

### Export Intent Records

To export intent records, follow these steps:

1. Go to **Tweak > Intent Trainer**.
2. In the upper-right corner, click ![vertical-ellipsis](../../../assets/icons/vertical-ellipsis.svg) **> Export Trainer Records**.
3. Choose a date range by clicking the date and selecting the desired date in the calendar.
4. To include reviewed intents to the file, activate **Include reviewed**.
5. Click **Confirm**.
6. In the new window, click **Download Trainer Records**.

The file will be downloaded in the `CTRAIN` format.

## Filter Records

You can filter records using the following filters:

| **Filter**                                                      | **Option**                                                                                                                                                      | **Description**                                                       |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Snapshot                                                        | No Snapshot <br> (list of available Snapshots)                                                                                                                  | You can select available Snapshots.                                   |
| Locale                                                          | Any Locale <br> (list of available Locales)                                                                                                                     | You can select a Locale when available.                               |
| Intent                                                          | Any Locale <br> (list of available Locales)                                                                                                                     | You can select available Intents.                                     |
| Review Status                                                   | Any Intent <br> (list of available Intents)                                                                                                                     | Lists all Intents depending on filter option.                         |
| Found Intent                                                    | Not reviewed <br> Reviewed <br> Ignored <br> Skipped                                                                                                            | Lists all Intents found depending on selected filter.                 |
| [Found a Slot](../../nlu/slot-mapping/any-slots.md)             | Not selected <br> Found Intents <br> No Intent Found                                                                                                            | Lists all Slots found depending on selected filter option.            |
| Intent Score                                                    | Not selected <br> **Poor**(0-0.3) <br> **Fair** (0.3-0.7) <br> **Good**(0.7-1)                                                                                  | The respective scoring areas are indicated by **colored** dots.       |
| Input Types                                                     | positive Answer <br> Negative Answer <br> Greeting <br> Goodbye Message <br> Statement <br> Command <br> Why Question <br> How Question <br> Yes or No Question | You can select one or more types of user messages as a filter option. |
| [Slot](../../nlu/nlu-overview/ml-intents.md#slots-and-lexicons) | None <br> Lexicon Slots <br> System Slots                                                                                                                       | Lists all user messages depending on selected slot type.              |


The **Filter Preset** drop-down menu allows you to preset filter options with one mouseclick.

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