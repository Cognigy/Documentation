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
- We automatically detect various CSV formats. If you encounter any issues, use UTF-8 encoding, comma (`,`) as the delimiter, double quotes (`"`) as your quote character, and newline (`\n`) as your line terminator.
- You are required to fill in the following columns:

| Name	                            | Property type	                                                                                                                       | Value                                                                                                 |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| The intent name of type `string` | The type of property corresponding to Cognigy intent properties: `exampleSentence`, `defaultReply`, `confirmationSentence`, `rules`. | The value of the field. For instance, an example sentence utterance `I want pizza`, of type `string`. |

CSV file example:

```txt
|--------------|----------------------|------------------------------------------------|
| rejectIntent | exampleSentence      | This request cannot be fulfilled at this time. |
| Intent1      | exampleSentence      | Could you please assist me with this issue?    |
| Intent1      | defaultReply         | Your request has been successfully processed.  |
| Intent1      | defaultReply         | Thank you for your inquiry.                    |
| Intent1      | confirmationSentence | Are you sure you want to proceed?              |
| Intent2      | exampleSentence      | I'd like to make a reservation, please.        |
| Intent2      | exampleSentence      | I need assistance with my account.             |
```

### Consistent OS Regional Settings

Keep Regional Settings Consistent on your Operating System. Regional format settings in your Operating System influence the delimiter in the CSV file. Make sure that the regional settings match the standard settings, as changes can break a file and cause an upload failure.

## JSON

The Cognigy Intent JSON format specifies your Intents completely.
For more details, refer to the [Cognigy API](https://api-trial.cognigy.ai/openapi#post-/v2.0).

## More Information

- [How-to: Upload Intents](overview.md#upload-intents)
- [How-to: Download Intents](overview.md#download-intents)