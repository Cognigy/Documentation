---
title: "Migration from Weaviate to Qdrant: Distance Value Change"
slug: "distance"
hidden: false
---

# Migration from Weaviate to Qdrant: Distance Value Change

With Cognigy.AI release 4.74.0, all Cognigy-hosted environments have been updated to use Qdrant as the vector database for Knowledge AI instead of Weaviate.
This migration alters the behavior of the `distance` value, which returns as part of the `topK` result object from the Search Extract Output Node.

Weaviate and Qdrant are two different tools that calculate similarity values in different ways. While Weaviate calculates similarity values in the range of `[0, 2]`,
where 0 represents maximum similarity and 2 represents maximum dissimilarity, 
Qdrant calculates similarity values within the `[-1, 1]` range, 
where -1 represents maximum dissimilarity and 1 represents maximum similarity. Due to these differences in the ranges and interpretations, 
the same value may indicate different meanings in Weaviate and Qdrant. 
Note that the new value should be considered as a measure of similarity rather than distance. Therefore, if the `distance` value is used to make decisions in the Flow, it will no longer work after the migration.

The precise value of `distance` heavily depends on the embedding model used for ingestion and search.
The value can be significantly different for the same query-chunk pair with different embedding models. We recommend exercising caution when using the `distance` value for decision-making in a Flow.

## Adapting Distance Values: Pre and Post 4.74.0 Release

If you were using the distance value before the release of Cognigy.AI 4.74.0
and you have one or more Flows that require this value to be in the `[0,2]` range,
you can modify your existing Flows to follow these instructions:

Wherever you use `distance`, replace it with `1 - distance`. This change will map the value from the new cosine similarity value to the older distance value.

If you are using `distance` for the first time in Cognigy.AI v4.74.0 or later, use the value from the `[-1, 1]` range directly, rather than interpreting it as distance.