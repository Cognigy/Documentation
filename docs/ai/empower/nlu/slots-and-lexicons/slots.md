---
title: "Slots"
slug: "slots"
hidden: false
---

# Slots

Slots are specific data types or custom keyphrases detected by the Cognigy NLU and placed into the [Input Object](../../../test/interaction-panel/input.md) under the property `input.slots`.

There are two types of slots:

- System-defined Slots
- User-defined Slots (Lexicons / keyphrases) - see [Lexicons](lexicons.md)

!!! tip "Tokenize Your Slots"
    Create [Tokens](../../../build/tokens.md) for your Slots to speed up the process of adding them to conversation logic and output fields.

## Accessing Slots via CognigyScript

System and User-Created slots can be accessed quite simply through CognigyScript.

`{{ " {{input.slots}}" }}` contains all found slots, tags and keyphrases.

| CognigyScript                      | Description                                       |
|------------------------------------|---------------------------------------------------|
| `{{ " {{input.slots.tagName}}" }}` | Returns the keyphrase array for the tag `tagName` |

## System-defined Slots

Cognigy.AI automatically detects the following Slots. All system-defined slot tags are capitalized.

<table>
    <tr>
        <th>Slot Tag</th><th>Example</th><th>Slot JSON</th>
    </tr>
    <tr>
        <td>DATE</td><td>tomorrow, August 1st at 5pm</td><td>
```json
"DATE": [
        {
        "start": {
            "day": 2,
            "month": 6,
            "year": 2018,
            "hour": 12,
            "minute": 0,
            "second": 0,
            "millisecond": 0,
            "text": "tomorrow",
            "weekday": 6,
            "dayOfWeek": "Saturday",
            "ISODate": "2018-06-02T12:00:00Z"
        },
        "end": null
        }
    ]
```
        </td>
    </tr>
    <tr>
        <td></td><td>next week</td><td>
```json
"DATE": [
        {
        "start": {
          "year": 2021,
          "month": 12,
          "day": 13,
          "hour": 0,
          "minute": 0,
          "second": 0,
          "milliseconds": 0,
          "weekday": 1,
          "dayOfWeek": "Monday",
          "ISODate": "2021-12-13T00:00:00+01:00",
          "plain": "December 13, 2021",
          "grain": "week"
        },
        "end": null,
        "text": "next week"
        }
    ]
```
        </td>
    </tr>
    <tr>
        <td>NUMBER</td><td>one hundred, 143</td><td>
```json
"NUMBER": [
      100,
      143
    ]
```
        </td>
    </tr>
    <tr>
        <td>DURATION</td><td>10 minutes 20 seconds</td><td>
```json
"DURATION": {
      "hour": null,
      "minute": 10,
      "second": 20
    }
```
        </td>
    </tr>
    <tr>
        <td>TEMPERATURE</td><td>50 degrees</td><td>
```json
"TEMPERATURE": [
      50
    ]
```
        </td>
    </tr>
    <tr>
        <td>AGE</td><td>32 years old</td><td>
```json
"AGE": [
      32
    ]
```
        </td>
    </tr>
    <tr>
        <td>EMAIL</td><td>info@cognigy.com</td><td>
```json
"EMAIL": [
      "info@cognigy.com"
    ]
```
        </td>
    </tr>
    <tr>
        <td>PERCENTAGE</td><td>5 percent </td><td>
```json
"PERCENTAGE": [
      5
    ]
```
        </td>
    </tr>
    <tr>
        <td>URL</td><td><a href=https://cognigy.com>https://cognigy.com</a></td><td>
```json
"URL": [
      "https://cognigy.com"
    ]
```
        </td>
    </tr>
    <tr>
        <td>MONEY</td><td>500 dollars</td><td>
```json
"MONEY": [
        {
        "value": 500,
        "unit": "$"
        }
    ]
```
        </td>
    </tr>
    <tr>
        <td>DISTANCE</td><td>12 kilometers</td><td>
```json
"DISTANCE": [
        {
        "value": 12,
        "unit": "kilometre"
        }
    ]
```
        </td>
    </tr>
</table>

## Date formats
---

!!! tip "Time Zone & Date Slots"
    Detection of dates depends on the time zone set for the [Agent](../../../administer/access/project-settings.md#timezone) or [Actions](../../../build/node-reference/basic/code/actions.md).

The following tables provide an overview of supported input patterns and formats.

| Languages       | Supported input pattern examples                                                                                                                                                                                                                                                                                                                                                                            |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| English         | Now, Today, Tomorrow, Yesterday, Last Friday, Last night<br/>17 August 2013 - 19 August 2013<br/>This Friday from 13:00 - 16.00<br/>5 days ago<br/>2 weeks from now<br/>Sat Aug 17 2013 18:40:39 GMT+0900 (JST)<br/>2014-11-30T08:15:30-05:30<br/>Day after tomorrow<br/>Days before yesterday<br/>Next Tuesday                                                                                             |
| German          | Jetzt, Heute, Morgen, Gestern, Vorgestern<br/>Letzte Nacht, Heute Nacht, Diese Nacht, Morgen Vormittags, Gestern Abend<br/>Nach einem Tag, In einer Woche<br/>15/01/2021, 15.01.2021, 15. Jan 2021, Freitag den 15. Januar 2021<br/>17.08.2013 - 19.08.2013, 17.08.2013 bis 19.08.2013<br/>Kommenden Montag                                                                                                 |
| Dutch           | Nu, Deze Nacht, Deze Vannacht, Gisteren, Morgen, Gisteravond, Eergisteren, Overmorgen<br/>Morgen Middag, Deze Ochtend, Gisteren Voormiddag, Deze Namiddag, Morgen Avond, Overmorgen Nacht<br/>Binnen Een Dag, Na een halve Maand<br/>15/01/2021, 15.01.2021, 15. Jan 2021, Vrijdag de 15de Januari 2021<br/>17.08.2013 - 19.08.2013, 17.08.2013 tot 19.08.2013<br/>Laatste/vorige/volgende/komende Woensdag |
| Japanese        | 今日, 当日, 昨日, 明日, 今夜, 今夕, 今晩, 今朝<br/>２０１６年２月１７日です<br/>Sat Aug 17 2013<br/>01/30/2018                                                                                                                                                                                                                                                                                                                          |
| Other languages | By example of French, the following patterns are supported. Some advanced patterns involving more advanced casual expressions such as "day before yesterday" or "next friday" would not be supported:<br/><br/>15.04.2023 12:00<br/>15 aout 2015<br/>15 aout 2015 a 12 octobre 2016<br/>aujourd'hui, demain, hier<br/>hier soir, demain après-midi                                                          |

DATE Slot parsing depends on the language set in the Flow. See here for an overview of [date formats by country](https://en.wikipedia.org/wiki/Date_format_by_country) we aim to support. The following table outlines the language-specific behaviors on slash-formatted dates:

| Languages                                    | Slash date format ordering (01/01/2019)                                                            |
|----------------------------------------------|----------------------------------------------------------------------------------------------------|
| Default (English UK, German, Universal etc.) | dd/mm/YYYY                                                                                         |
| English US, Japanese, Chinese                | mm/dd/YYYY<br/><br/>Note if mm/dd/YYYY yields an illegal date the parser falls back to dd/mm/YYYY. |

!!! warning "Invalid DATES"
    Cognigy.AI checks the validity of provided dates, including leap years, etc. Invalid dates will not appear in the detected slots.

### Future and Past Date Mapping

Date slot detection uses the current year for inputs of dates in the current month and for a date that has not yet occurred within the current year.

Date slot detection uses the upcoming year if the date of the input is not in the current month, has already occurred in the current year, and a year is not given in the input.

To assign a past date to the DATE Slot when it is from a previous month (not the current month), a year must be provided in the input.

#### Examples

When the input is a date from the current month:

- Today's date is July 26, 2023
- The Input is `July 21`
- DATE Slot Result: `"year": 2023, "month": 7, "day": 21`

When the input is a date not from the current month, but instead a previous month, and no year is provided:

- Today's date is July 26, 2023
- The Input is `March 30`
- DATE Slot Result: `"year": 2024, "month": 3, "day": 30`

When the input is a date not from the current month, but instead a previous month, and a year is provided:

- Today's date is July 26, 2023
- The Input is `March 30, 2021`
- DATE Slot Result: `"year": 2021, "month": 3, "day": 30`

## User-defined Slots (Lexicons)

User-defined Slots in Cognigy are called Keyphrases, which are created and maintained in the [Lexicons Editor](lexicons.md).

In Cognigy AI, Lexicons are lists of Keyphrases with Tags. A Lexicon can have any number of Keyphrases, which in turn can have any number of Tags and Synonyms.

If a Lexicon is assigned to a Flow, the Flow will parse the user input for all Keyphrases.
When detected, Keyphrases with the same Tag are assigned to Slots.
 
### Accessing Keyphrases

Detected Keyphrases will be exposed in the Input property `input.slots.lexiconTagName.keyphrase` (e.g. `input.slots.product.keyphrase.shirt`).

```json
{
    "slots": {
        "tag1": [
            {
                "keyphrase": "found keyphrase",
                "lower": "found keyphrase in lower case",
                "synonym": "found synonym, otherwise keyphrase",
                "count": "how often the keyphrase was found"
            }
        ]
    }
}
```

Keyphrases and Synonyms are detected in order of their word count, with the longest Keyphrase first. If `cake` and `cheese cake` are defined and the text is `I love cheese cake`, only `cheese cake` will be found.

If a Synonym is found, the returned Keyphrase is the Keyphrase the Synonym is mapped to, whilst the Synonym itself is recorded in a special `synonym` property of the result.

!!! note "Example of how Slots are filled"
    If the user says *I love pizza pie*, the `slots` Input property will look like this:

```json
{
    "food": [
        {
            "keyphrase": "pizza",
            "count": 1,
            "synonym": "pizza pie"
        }
    ]
}
```

!!! warning "Attach Lexicons to your flows"
    Lexicons must be attached to NLU training data for the NLU model to recognize the keyphrases and synonyms that have been created. Find out more on the  [Attached Lexicons Page](../attachments/attached-lexicons.md).