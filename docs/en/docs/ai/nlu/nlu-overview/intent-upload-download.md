---
 title: "Intent Up and Download" 
 slug: "Intent Up- and Download" 
 hidden: false 
---
# Intent Up and Download

You can upload and download intents from Cognigy. Quickly import intents, edit them with your favourite spreadsheet tool or developer scripts or quickly move intents between flows.

We currently support two formats

## CSV

Your CSV should be formatted as follows

* No header
* We auto detect various CSV formats, if you have any issues use UTF-8 encoding, comma (`,`) as the delimiter  and double quotes ( `"`) as your quote character and newline (`\n`) as your line terminator
* You will need to populate the following three columns:

| Name	                             | Property type	                                                                                                                         | Value                                                                                        |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| The intent name of type *string*	 | The type of property, corresponding to Cognigy intent properties<br/>*"exampleSentence" "defaultReply" "confirmationSentence" "rules"* | The value of the field, e.g., an example sentence utterance "I want pizza", of type *string* |

To illustrate:

|              |                      |                                          |
|--------------|----------------------|------------------------------------------|
| rejectIntent | exampleSentence      | this sentence is invalid, and that is ok |
| Intent1      | exampleSentence      | I want to go home                        |
| Intent1      | defaultReply         | Ok go home then                          |
| Intent1      | defaultReply         | Ok bye then                              |
| Intent1      | confirmationSentence | Are you sure you want to go home?        |
| Intent2      | exampleSentence      | I want to order a pizza with cheese      |
| Intent2      | exampleSentence      | I am hungry                              |

## JSON

The Cognigy Intent JSON format specifies your intents completely. For more details refer to our API documentation [here](https://api-trial.cognigy.ai/openapi#post-/v2.0).

## Example of Regional Settings: Windows Customize Format

!!! note
    Regional settings of your operating system influence the delimiter. This change can break a file and cause an upload failure.

<figure>
  <img class="image-center" src="{{config.site_url}}ai\nlu\images\customize-format.png" width="100%" />
  <figcaption>Windows operating systems: Customize Format</figcaption>
</figure>
