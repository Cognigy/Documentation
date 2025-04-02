---
 title: "Match Pattern" 
 slug: "match-pattern" 
 hidden: false 
---
# Match Pattern

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/match-pattern.png" width="40%" />
</figure>

## Description

The Match Pattern Node enables a user to find patterns in text and expose them in the [Input object](../../../test/interaction-panel/input.md).

You can define patterns to search for in the input text or in the alternate text that was provided. If a pattern is found, a `matchedPatterns` group is created in the Input object.

## Patterns

Patterns can be any text and can contain references to Slots by using the `@` symbol. 

Example: `@color @product`

In `I need a green shirt`, two Slots are found and assigned to `color = green` and `product = shirt`.

### Tags

You can tag Slots in a pattern to make it easier to identify them later.

Example: `from @city>origin to @city>destination`.

In `I want to go from Düsseldorf to Tokyo`, the `city` Slot is found in a matched pattern group with origin and destination tags.

## Parameters

| Parameter               | Type        | Description                                                                   |
|-------------------------|-------------|-------------------------------------------------------------------------------|
| Patterns                | TextArray   | The patterns to be applied to the text.                                       |
| Pattern Group Name      | CognigyText | The name of the pattern matching group.                                       |
| Create New Slots        | Boolean     | Indicate whether new Slots are created from tags or not.                      |
| Tag Existing Slots      | Boolean     | Indicate whether existing Slots are tagged or not.                            |
| Detailed Compound Slots | Boolean     | Indicate whether detailed results for the matched patterns are stored or not. |
| Alternate Input         | CognigyText | The input text to use instead of the current input text.                      |

## Example

Text: `I want to fly from bErlin to NEW York with 3 or 4 people on October 1st 2021 if its 30 degrees and I am 22 years old 100%`

Pattern: `from @city>origin to @city>destination with @NUMBER>ppl1 or @NUMBER>ppl2 people @DATE>date if its @TEMPERATURE>celsius degrees and I am @AGE>userage years old @PERCENTAGE>perc`

Result:

```JSON
"matchedPatterns": {
        "group": [
            {
                "matchedPhrase": "from bErlin to NEW York with 3 or 4 people on October 1st 2021 if its 30 degrees and I am 22 years old 100%",
                "origin": "Berlin",
                "destination": "New York",
                "ppl1": 3,
                "ppl2": 4,
                "date": {
                    "day": 1,
                    "month": 10,
                    "year": 2021,
                    "hour": 12,
                    "minute": 0,
                    "second": 0,
                    "millisecond": 0,
                    "weekday": 1,
                    "dayOfWeek": "Monday",
                    "ISODate": "2020-06-15T12:00:00"
                },
                "celsius": 30,
                "userage": 22,
                "perc": 100
            }
        ]
    }
```