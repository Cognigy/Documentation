---
title: "Fuzzy Search" 
slug: "fuzzy-search"
description: "The Fuzzy Search Node enables a Flow to search fuzzy string patterns in a list of source data and returns the best possible matches."
hidden: false
tags: 
  - fuzzy search
  - string matching
  - data retrieval
  - similarity scoring
---

# Fuzzy Search

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/fuzzy-search.png" width="40%" />
</figure>

## Description

[![Version badge](https://img.shields.io/badge/Updated in-v2025.20-blue.svg)](../../../../release-notes/2025.20.md)

The Fuzzy Search Node searches through a list of strings of source data using a search pattern during the Flow execution. This Node returns the best possible matches based on a set of parameters.

The Node assigns each match a score between 0 and 1, where 1 indicates the best match and 0 the worst based on the search pattern.

The matches can be stored in either the [Context](../../ai-agent-memory/context.md) or [Input](../../ai-agent-memory/input.md) object.

## Parameters

| Parameter      | Type   | Description                                                                                                                                                                                                                              |
|----------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Search Pattern | String | The string to search for in the source data. The Fuzzy Search Node compares this pattern against each element in the array and returns the best matches. Example: `Aple`, `Jon`.                                                         |
| Source Data    | JSON   | A CognigyScript reference to the array that should be searched. The reference can point to the Context, Input, or Profile object. The type must be set to `array`. Example: `{ "$cs": { "script": "context.names", "type": "array" } }`. |

??? info "Basic Options"
    | Parameter          | Type    | Description                                                                                                                                                  |
    |--------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Is Case Sensitive  | Boolean | Specify whether comparisons should be case-sensitive.                                                                                                        |
    | Include Score      | Boolean | Specify whether the score should be included in the result set.                                                                                              |
    | Include Matches    | Boolean | Specify whether the matches should be included in the result set. When active, each record in the result set includes the indices of the matched characters. |
    | Minimum Characters | Number  | Only the matches whose length exceeds this value is returned.                                                                                                |
    | Should Sort        | Boolean | Specify whether to sort the result list by score.                                                                                                            |

??? info "Fuzzy Matching Options"

    | Parameter        | Type    | Description                                                                                                                                                        |
    |------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Find All Matches | Boolean | When activated, the matching function continues to the end of a search pattern even if a perfect match has already been located in the string.                     |
    | Location         | Number  | Determine approximately where in the text the pattern is expected to be found.                                                                                     |
    | Threshold        | Number  | At what point does the match algorithm give up. A threshold of 1 requires a perfect match (of both letters and location), a threshold of 0.0 would match anything. |
    | Distance         | Number  | Determine how close the match must be to the fuzzy location (specified by Location).                                                                               |
    | Ignore Location  | Boolean | When activated, the search ignores Location and Distance, so it won't matter where in the string the pattern appears.                                              |

??? info "Storage Options"

    | Parameter                 | Type   | Description                                                          |
    |---------------------------|--------|----------------------------------------------------------------------|
    | Where to store the result | List   | Specify whether the result is stored in the Input or Context object. |
    | Input Key to store Result | String | The key to store the result in.                                      |

## Example

In this example, the Fuzzy Search Node searches for the pattern `Jon` in an array of names stored in the Context object at `context.names`. The Node is configured to store the results in the Input object at `input.search`. 
The Node returns each name in the array along with a score indicating how closely it matches the search pattern.

??? info "View Example"
    1. Add data to the Context object.

        ```json
        {
          "names": ["John", "Jonathan", "Johnny", "Alice", "Bob"]
        }
        ```

    2. Specify the search pattern in the Fuzzy Search Node.

        ```txt
        Jon
        ```

    3. Specify the path for the source data in the Fuzzy Search Node.

        ```json
        {
          "$cs":{
            "script":"context.names",
            "type":"array"
          }
        }
        ```

    4. Check the search results in the Input object.

        ```json
        {
          "search": [
            {
              "item": "Jonathan",
              "refIndex": 1,
              "score": 0.999
            },
            {
              "item": "John",
              "refIndex": 0,
              "score": 0.6666666666666667
            },
            {
              "item": "Johnny",
              "refIndex": 2,
              "score": 0.6666666666666667
            },
            {
              "item": "Bob",
              "refIndex": 4,
              "score": 0.33333333333333337
            }
          ]
        }
        ```

## Troubleshooting

??? info "Error: this.docs.forEach is not a function"
    This error occurs when the source data provided to the Fuzzy Search Node isn't an array. The Node expects an array of strings to iterate over and calculate similarity scores.