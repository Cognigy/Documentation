---
title: "Intent Upload and Download Formats" 
slug: "Intent Upload and Download Formats" 
hidden: false 
---

# Intent Upload and Download Formats

You can upload and download Intents from Cognigy.AI. Import them quickly, edit using your favorite spreadsheet or developer tools, and move them between Flows.

The following formats are supported:

- [CSV](#csv)
- [JSON](#json)

## CSV

Your CSV should be formatted as follows:

- No header.
- We automatically detect various CSV formats. If you encounter any issues, use UTF-8 encoding, comma (`,`) as the delimiter, double quotes (`"`) as your quote character, and newline (`\n`) as your line terminator.
- You are required to fill in the following columns:

| Name	                            | Property type	                                                                                                                         | Value                                                                                                 |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| The Intent name of type `string` | The property type corresponds to the following Cognigy properties: `exampleSentence`, `defaultReply`, `confirmationSentence`, `rules`. | The value of the field. For instance, an example sentence utterance `I want pizza`, of type `string`. |

CSV format example:

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

JSON format serves as a comprehensive specification for defining Intents within Cognigy.AI.

The provided JSON example illustrates the structure and content of a Cognigy Intent, including details such as Intent name (`Pizza`), example sentences, rules, tags, disambiguation sentence, default reply, and other configurations.

JSON format example:

```json
[
    {
        "name": "Pizza",
        "exampleSentences": [
            "I'd like to order many pizzas",
            "Do you have any meat pizza options?",
            "I'm interested in trying a vegan pizza",
            "Could I have a cheese pizza, please?",
            "I'm craving pizza right now"
        ],
        "rules": [],
        "tags": [],
        "condition": "",
        "disambiguationSentence": "",
        "childFeatures": false,
        "biasTowardsParentOrChildIntents": "parents",
        "parent": "",
        "defaultReply": {},
        "entryPoint": "",
        "isRejectIntent": false,
        "isDisabled": false,
        "overrideIntentDefaultRepliesAsExamples": ""
    }
]
```


## More Information

- [How-to: Upload Intents](../overview.md#upload-intents)
- [How-to: Download Intents](../overview.md#download-intents)