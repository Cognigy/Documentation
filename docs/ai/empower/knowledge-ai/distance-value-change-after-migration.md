---
title: "Migration from Weaviate to Qdrant: Distance Value Change"
slug: "distance"
hidden: false
tags: ['Migration', 'Vector Database', 'Similarity Search', 'Distance Values', 'Qdrant', 'Weaviate']
---

# Migration from Weaviate to Qdrant: Distance Value Change

After the release of Cognigy.AI 4.74.0, all Cognigy.AI installations have been updated to use Qdrant as the vector database for Knowledge AI instead of Weaviate. This migration changes the Knowledge AI calculates the `distance` value in the `topK` object of the Search Extract Output Node.

Weaviate and Qdrant are tools that calculate [similarity](https://en.wikipedia.org/wiki/Cosine_similarity) in different ways:

- Weaviate calculates similarity values within the range of 0 to 2, where 0 represents maximum similarity and 2 represents minimum similarity.
- Qdrant calculates similarity values within the range of -1 to 1, where 1 represents maximum similarity and -1 represents minimum similarity.

These differences lead to a new interpretation of the `distance` value. If you use `distance` to make decisions in the [Flow](../../build/flows/overview.md), consider the new similarity range of -1 to 1.

!!! warning
    The [LLM embedding model](../llms/overview.md) you use defines how precisely Knowledge AI calculates `distance`. The different LLM embedding models can provide considerably different `distance` values. Use the `distance` value for decision-making in Flows with caution.

## Adapting Distance Values: Before and After 4.74.0 Version

If your Flows used `distance` values within the range of 0 to 2 before the release of Cognigy.AI 4.74.0 and you want to keep this approach, change your Flows as follows:

- Replace all `distance` instances with `1 - distance`.

If you are using `distance` for the first time in Cognigy.AI v4.74.0 or later, use the value within the range of -1 to 1.

## More Information

- [Flows](../../build/flows/overview.md)