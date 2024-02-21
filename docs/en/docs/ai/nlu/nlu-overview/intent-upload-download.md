---
title: "Intent Upload and Download Formats" 
slug: "Intent Upload and Download Formats" 
hidden: false 
---

# Intent Upload and Download Formats

You can upload and download intents from Cognigy.AI. Import them quickly, edit using your favorite spreadsheet or developer tools, and move them between Flows.

The following formats are supported:

- [CSV](#csv)
- [JSON](#json)

## CSV

Your CSV should be formatted as follows:

- No header.
- We auto detect various CSV formats. If you encounter any problems, use UTF-8 encoding, comma (`,`) as the delimiter and double quotes (`"`) as your quote character, and newline (`\n`) as your line terminator. 
- You are required to fill in the following columns:

| Name	                            | Property type	                                                                                                                       | Value                                                                                                 |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| The intent name of type `string` | The type of property corresponding to Cognigy intent properties: `exampleSentence`, `defaultReply`, `confirmationSentence`, `rules`. | The value of the field. For instance, an example sentence utterance `I want pizza`, of type `string`. |

Example:

| Name	        | Property type	       | Value                                    |
|--------------|----------------------|------------------------------------------|
| rejectIntent | exampleSentence      | this sentence is invalid, and that is ok |
| Intent1      | exampleSentence      | I want to go home                        |
| Intent1      | defaultReply         | Ok go home then                          |
| Intent1      | defaultReply         | Ok bye then                              |
| Intent1      | confirmationSentence | Are you sure you want to go home?        |
| Intent2      | exampleSentence      | I want to order a pizza with cheese      |
| Intent2      | exampleSentence      | I am hungry                              |

### Consistent OS Regional Settings

Keep Regional Settings Consistent on your Operating System. Regional format settings in your Operating System influence the delimiter in the CSV file. Make sure that the regional settings match the standard settings, as changes can break a file and cause an upload failure.

## JSON

The Cognigy Intent JSON format specifies your Intents completely.
For more details, refer to the [Cognigy API](https://api-trial.cognigy.ai/openapi#post-/v2.0).

## More Information

- [How-to: Upload Intents](overview.md#upload-intents)
- [How-to: Download Intents](overview.md#download-intents)