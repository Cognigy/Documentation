---
title: "System-Defined"
slug: "system-defined-slots"
description: "System-Defined Slots in Cognigy.AI refer to predefined Slot types that the system automatically detects in user input. These slots are used to categorize and capture specific types of data, such as dates, times, durations, or locations. In the JSON object, all system-defined Slot tags are capitalized for easy identification."
hidden: false
tags:
  - cognigy nlu
  - slots
  - system-defined slots
  - predefined slots
---

# System-Defined Slots

_System-Defined Slots_ refer to predefined Slot types that the system automatically detects in user inputs. 
These Slots are used to categorize and recognize specific types of data, such as dates, times, durations, and more. 

## Key Benefits

- **Automatic Extraction**. Cognigy.AI automatically detects and categorizes user input into predefined Slots, reducing manual configuration.
- **Data Consistency**. By using system-defined Slots, Cognigy.AI ensures all extracted data is consistently formatted and accurate.
- **Simplified Integration**. System-defined Slots simplify the handling of complex data types, enabling smooth integration with backend systems.

## All System-Defined Slots

In the JSON object, all system-defined Slot names are capitalized for easy identification.

??? info "List of System-Defined Slots"
    <table>
        <tr>
            <th>Slot Name</th><th>User Input</th><th>Slot JSON</th>
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

## DATE Slots

DATE Slot detection depends on the time zone you set in the [Project](../../../administer/access/project-settings.md#timezone) or through [Actions](../../../build/node-reference/basic/code/actions.md).

??? info "Supported Input Patterns and Formats"

    | Languages       | Supported input pattern examples                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    |-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | English         | Now, Today, Tomorrow, Yesterday, Last Friday, Last night<br/>17 August 2013 - 19 August 2013<br/>This Friday from 13:00 - 16.00<br/>5 days ago<br/>2 weeks from now<br/>Sat Aug 17 2013 18:40:39 GMT+0900 (JST)<br/>2014-11-30T08:15:30-05:30<br/>Day after tomorrow<br/>Days before yesterday<br/>Next Tuesday                                                                                                                                                                                                                                                            |
    | German          | Jetzt, Heute, Morgen, Gestern, Vorgestern<br/>Letzte Nacht, Heute Nacht, Diese Nacht, Morgen Vormittags, Gestern Abend<br/>Nach einem Tag, In einer Woche<br/>15/01/2021, 15.01.2021, 15. Jan 2021, Freitag den 15. Januar 2021<br/>17.08.2013 - 19.08.2013, 17.08.2013 bis 19.08.2013<br/>Kommenden Montag                                                                                                                                                                                                                                                                |
    | Dutch           | Nu, Deze Nacht, Deze Vannacht, Gisteren, Morgen, Gisteravond, Eergisteren, Overmorgen<br/>Morgen Middag, Deze Ochtend, Gisteren Voormiddag, Deze Namiddag, Morgen Avond, Overmorgen Nacht<br/>Binnen Een Dag, Na een halve Maand<br/>15/01/2021, 15.01.2021, 15. Jan 2021, Vrijdag de 15de Januari 2021<br/>17.08.2013 - 19.08.2013, 17.08.2013 tot 19.08.2013<br/>Laatste/vorige/volgende/komende Woensdag                                                                                                                                                                |
    | Japanese        | 今日, 当日, 昨日, 明日, 今夜, 今夕, 今晩, 今朝<br/>２０１６年２月１７日です<br/>Sat Aug 17 2013<br/>01/30/2018                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | French          | 15.04.2023 12:00<br/>15 aout 2015<br/>15 aout 2015 a 12 octobre 2016<br/>aujourd'hui, demain, hier<br/>hier soir, demain après-midi <br>avant-hier<br>vendredi prochain                                                                                                                                                                                                                                                                                                                                                                                                    |
    | Other languages | For languages like Finnish, Cognigy.AI supports standard date formats but has limited support for casual expressions. For example: <br>ylihuomenna (the day after tomorrow) — the system correctly matches it to a DATE Slot, but inconsistencies may arise due to limitations with casual expressions.<br>kolme viikkoa sitten (three weeks ago) — the system identifies it as a DURATION Slot instead of a DATE Slot.<br>kuukauden päästä (in one month) — the system doesn't recognize this input, highlighting a gap in handling relative time expressions in Finnish. |

### DATE Format Handling

DATE Slot parsing follows the NLU language set in the Flow. 
Different regions use different date formats for slash-separated dates. 
The table outlines the format handling:

| Languages                                         | Slash date format ordering                                                                                                                                                                       |
|---------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Default (English UK, German, Universal, and more) | Dates follow day/month/year (`dd/mm/YYYY`) order.                                                                                                                                                |
| English US, Japanese, Chinese                     | Dates follow month/day/year (`mm/dd/YYYY`) order. However, if the system detects an invalid date, for example, `13/01/2023` in `mm/dd/YYYY` format, it automatically falls back to `dd/mm/YYYY`. |

For a full list of country-specific date formats, refer to the [Date_format_by_country](https://en.wikipedia.org/wiki/Date_format_by_country) page on Wikipedia.

### Invalid Date Handling

Cognigy.AI automatically checks all dates from user inputs.
If a date is invalid, it won't be assigned to the DATE Slot.

The system ensures:

- Leap year validation: `February 29, 2024` is valid, but `February 29, 2023` isn't.
- Correct month-day mapping: `April 31` is invalid.
- Fallback correction for ambiguous formats: `13/01/2023` defaults to `dd/mm/YYYY` if `mm/dd/YYYY` is invalid.

### Future and Past Date Mapping

DATE Slot detection applies the current year by default unless specified otherwise. The system follows these rules:

| **Scenario**                                           | **User Input**     | **Today's Date** | **Processing Logic**                                                                                                                                         | DATE Slot Result                      |
|--------------------------------------------------------|--------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| Date is in the current month, no year provided         | `"July 21"`        | July 26, 2023    | Since the input date falls within the current month and no year is provided, the system assumes the current year.                                            | `"year": 2023, "month": 7, "day": 21` |
| Date is in a past month, no year provided              | `"March 30"`       | July 26, 2023    | The input date has already passed in the current year. Since no year is specified, the system assumes it refers to the next occurrence in the upcoming year. | `"year": 2024, "month": 3, "day": 30` |
| Date is in a past month, with a specific year provided | `"March 30, 2021"` | July 26, 2023    | The input includes a specific year, so the system directly assigns that year without modification.                                                           | `"year": 2021, "month": 3, "day": 30` |

## More Information

- [Overview](overview.md)
- [User-Defined Slots (Lexicons)](user-defined/lexicon.md)