---
 title: "Match Pattern" 
 slug: "match-pattern" 
 hidden: false 
---
# Match Pattern

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/nlu/match-pattern.png" width="80%" />
</figure>

## Description

The Match Pattern Node enables a user to find patterns in text and expose them in the [Input Object](../../tools/interaction-panel/input.md).

You can define patterns that will be searched for in the input text or the alternate text that was provided. If a pattern is found, a matchedPatterns group will be created in the [Input Object](../../tools/interaction-panel/input.md).

## Patterns

Patterns can be any text and can contain references to slots by using the `@` symbol. 

Example: `@color @product`

A text like `I need a green shirt` would find the compound slot group and assign `color = green` and `product = shirt`.

### Tags

Slots can be tagged in a pattern to be easier identifiable later.

Example: `from @city>origin to @city>destination`.

A text like `I want to go from Düsseldorf to Tokyo` would find a matched pattern group with origin and destination set.

## Parameters

| Parameter               | Type        | Description                                                                          |
|-------------------------|-------------|--------------------------------------------------------------------------------------|
| Patterns                | TextArray   | The patterns to be applied to the text.                                              |
| Pattern Group Name      | CognigyText | The name of the pattern matching group.                                              |
| Create New Slots        | Boolean     | Indicates whether new slots should be created from tags or not.                      |
| Tag Existing Slots      | Boolean     | Indicates whether existing slots should be tagged or not.                            |
| Detailed Compound Slots | Boolean     | Indicates whether detailed results for the matched patterns should be stored or not. |
| Alternate Input         | CognigyText | The input text to be used instead of the current input text.                         |

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