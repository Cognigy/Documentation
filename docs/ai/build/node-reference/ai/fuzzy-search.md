---
 title: "Fuzzy Search" 
 slug: "fuzzy-search" 
 hidden: false 
---
# Fuzzy Search

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/fuzzy-search.png" width="40%" />
</figure>

## Description

The Fuzzy Search Node enables a Flow to search through a list (string array) of source data by providing a search pattern. This Node returns the best possible matches, based on a set of parameters.

The assigned score for each match varies between 0 and 1, 1 being the best match and 0 being the worst match.

The result is stored in either the [Context](../../../test/interaction-panel/context.md) (`context.STORE`) or [Input](../../../test/interaction-panel/input.md) object (`input.STORE`) using the store name given in the Node settings.

If an error occurs, it is stored in either the Cognigy context (`context.STORE.error`) or input object (`input.STORE.error`). 

## Parameters

| Parameter      | Type   | Description                                         |
|----------------|--------|-----------------------------------------------------|
| Search Pattern | String | The pattern to search for.                          |
| Source Data    | JSON   | An array of strings or an object to search through. |

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