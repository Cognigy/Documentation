---
 title: "Fuzzy Search" 
 slug: "fuzzy-search" 
 hidden: false 
---
# Fuzzy Search

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/b315c2a-fuzzySearch.png" width="100%" />
</figure>

## Description
The Fuzzy Search Node enables a Flow to search through a list (string array) of source data by providing a search pattern. It will return the best possible match(es), based on a set of parameters.

The score assigned to each match ranges from 0 (the closest match - best) to 1 (no match - weakest).

The result will be stored in either the Cognigy context (`context.STORE`) or input object (`input.STORE`) using the store name given in the node's settings.

In case of an error, this is stored in either the Cognigy context (`context.STORE.error`) or input object (`input.STORE.error`). 

## Parameters

| Parameter          | Type    | Description                                                                                                                                                         |
|--------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Search Pattern     | String  | The pattern to search for                                                                                                                                           |
| Source Data        | JSON    | An array of strings or an object to search through                                                                                                                  |
| Is Case Sensitive  | Boolean | Indicates whether comparisons should be case sensitive                                                                                                              |
| Include Score      | Boolean | Whether the score should be included in the result set. A score of 1.0 indicates a perfect match, while a score of 0.0 indicates a complete mismatch                |
| Include Matches    | Boolean | Whether the matches should be included in the result set. When active, each record in the result set will include the indices of the matched characters             |
| Minimum Characters | Number  | Only the matches whose length exceeds this value will be returned                                                                                                   |
| Should Sort        | Boolean | Whether to sort the result list, by score                                                                                                                           |
| Find All Matches   | Boolean | When activated, the matching function will continue to the end of a search pattern even if a perfect match has already been located in the string                   |
| Location           | Number  | Determines approximately where in the text is the pattern expected to be found                                                                                      |
| Threshold          | Number  | At what point does the match algorithm give up. A threshold of 1.0 requires a perfect match (of both letters and location), a threshold of 0.0 would match anything |
| Distance           | Number  | Determines how close the match must be to the fuzzy location (specified by Location)                                                                                |
| Ignore Location    | Boolean | When activated, search will ignore Location and Distance, so it won't matter where in the string the pattern appears                                                |
