---
title: "Overview"
slug: "overview"
description: "Knowledge AI lets you upload files, such as PDF, text, and Cognigy Text format, as Knowledge Sources. This feature uses RAG to extract meaningful information from documents and makes it accessible to AI Agents through Knowledge AI Nodes."
hidden: false
tags: ['Knowledge AI', 'RAG', 'Information Retrieval', 'Document Processing', 'Knowledge Management']
---

# Knowledge AI

[![Version badge](https://img.shields.io/badge/Updated in-v4.93-blue.svg)](../../../release-notes/4.93.md)

{! _includes/ai/terms-of-use-ks.md !}

Knowledge AI is a knowledge search and management solution that uses Retrieval-Augmented Generation (RAG) to improve AI Agents' performance and assist human agents. Knowledge AI applies RAG to provide AI Agents with access to a large amount of structured information from different files in a knowledge base, such as articles, manuals, FAQs, and more. By accessing the knowledge base, AI Agents can retrieve and understand specific information, and provide more accurate, context-aware, and helpful responses to user queries.

With Knowledge AI, you have more options beyond relying on [Intents](../nlu/intents/ml-intents.md) and [Default Replies](../nlu/overview.md#default-replies) to identify user questions and provide relevant content based on predefined questions and answers. Creating question-and-answer pairs can be time-consuming and require labor-intensive maintenance.

Knowledge AI lets you upload knowledge in various formats, such as [PDF](knowledge-source/text-formats/pdf.md), [Cognigy Text](knowledge-source/text-formats/ctxt.md) (CTXT) and [web pages](knowledge-source/text-formats/web-page.md), as [Knowledge Sources](knowledge-source/knowledge-source.md). This technology extracts meaningful information from these documents and makes it accessible to conversation designers through the [Search Extract Output Node](knowledge-search-and-extraction/search-extract-output.md). With this Node, you can build knowledge-based AI Agents quickly, overcoming the limitations of traditional intent-based systems and simplifying the creation of sophisticated conversational experiences.

## Prerequisites

Before using Knowledge AI, follow these steps:

1. [Apply for a license and allocate quotas](activate.md).
2. Get access to an account from one of the following LLM Providers:

    - [OpenAI](https://platform.openai.com/)
    - [Microsoft Azure OpenAI](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service)
    - [Aleph Alpha](https://app.aleph-alpha.com/signup)

### Which Models to Choose?

To use the full potential of Knowledge AI, you need:

- An embedding model to convert information from documents into embeddings in Knowledge Sources and perform Knowledge Searches. Knowledge AI supports the following embedding models:

    | Model                                                                   | Comment                                                                                                                                                                                                                                                                                                                                                                                |
    |-------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | <span style="white-space: nowrap;">`text-embedding-ada-002`<span>       | -                                                                                                                                                                                                                                                                                                                                                                                      |
    | <span style="white-space: nowrap;">`text-embedding-3-small`<span>       | The model may be available only in geographically remote locations, leading to high latency for the search operation.                                                                                                                                                                                                                                                                  |
    | <span style="white-space: nowrap;">`text-embedding-3-large`<span>       | The model may be available only in geographically remote locations, leading to high latency for the search operation. The model outputs embedding vectors twice as large as the embedding vectors from `text-embedding-ada-002` and `text-embedding-3-small`. Larger embedding vectors lead to higher memory use and larger [Package](../../build/packages.md) sizes for Knowledge AI. |
    | <span style="white-space: nowrap;">`amazon.titan-embed-text-v2:0`<span> | You can use the `FEATURE_ENABLE_AWS_BEDROCK_EMBEDDING_LLM_WHITELIST` environment variable to make this model available to individual or all feature flag.                                                                                                                                                                                                                              |

- A generative model that supports [LLM Prompt Nodes or Answer Extraction](../../empower/llms/model-support-by-feature.md) to use Knowledge Search results to generate context-aware response to user questions.

Once a model is set up within a [Project](../../build/projects.md), all other [Knowledge Stores](#knowledge-store) will use the same model. If you want to switch to a different model, you must either delete all existing Knowledge Stores in the current Project or create a new Project.

## Knowledge Management

Knowledge AI has the following knowledge hierarchy:

- [Knowledge Store](knowledge-store.md) — a container that includes Knowledge Sources.
- [Knowledge Source](knowledge-source/knowledge-source.md) — a collection of organized and structured knowledge extracted from files, for example, user manuals, articles, FAQs, and other relevant information.
- [Knowledge Chunk](knowledge-chunk/knowledge-chunk.md) — a unit of knowledge inside a Knowledge Source.

<figure>
    <img class="image-center" src="../../../../_assets/ai/empower/knowledge-ai/knowledge-hierarchy.png" width="70%"/>
</figure>

## Knowledge AI Workflow

Working with Knowledge AI involves two phases, similar to the Intents workflow. The first phase consists of collecting, preprocessing, and integrating data — a process known as ingestion — from your knowledge base, and the second phase is querying the knowledge base during [run-time](../generative-ai.md#run-time-generative-ai-features).

### First Phase

1. **Raw Information Upload** — you upload information as files to Knowledge AI.
2. **Knowledge Chunk Extraction** — Knowledge AI extracts text and metadata from the raw information through a collection of tools and processes the information into a Knowledge Source. The Knowledge Source is divided in Knowledge Chunks, which you can edit in the Chunk editor.
3. **Vectorization** — Knowledge AI encodes Knowledge Chunks into embeddings. Embeddings are high-dimensional vectors that encode word meaning and similarity into numeric representations. Knowledge AI stores the embeddings in a specialized internal database for quick access during run-time.

### Second Phase

1. **Knowledge Base Querying**. During run-time, Knowledge AI queries the Knowledge Sources to provide accurate and contextually appropriate responses to user questions.
2. **Knowledge-based AI Agents Building**. AI Agents use the information stored in the Knowledge Sources to engage in more sophisticated and intelligent conversations with users.

## Use cases

With Knowledge AI, both human agents and AI Agents can retrieve information from various Knowledge Sources and provide better responses to your customers:

- **Knowledge AI for AI Agents** — use the [Search Extract Output Node](../../build/node-reference/other-nodes/search-extract-output.md) so that AI Agents can retrieve product-specific knowledge from Knowledge Sources, for example, manuals and web pages. This way, AI Agent's output more accurate information to customers.
- **Use Knowledge AI for human agents** — by retrieving data from different Knowledge Sources, LLMs reduce the burden on human agents, making information access quicker and more efficient. To let human agents use the Knowledge Sources for solving tasks, add a widget to the AI Copilot workspace using a [Copilot: Knowledge Tile Node](../../build/node-reference/ai-copilot/knowledge-tile.md). The widget serves as a search tool, enabling human agents to enter questions and retrieve information from the knowledge base.

??? note "FAQ"

    **Q1**: Is Knowledge AI free of charge?

    **A1**: Knowledge AI is not free of charge and requires a [separate license](activate.md#apply-for-a-license).

    **Q2**: I received `Request failed with status code 429` error message while attempting to upload a file. How can I solve this issue?

    **A2**: The `429` error occurs when your organization's rate limit is exceeded on the side of your LLM's provider. To learn more, refer to your provider's documentation. For instance, if you use the OpenAI API, check out the article [How can I solve 429: 'Too Many Requests' errors?](https://help.openai.com/en/articles/5955604-how-can-i-solve-429-too-many-requests-errors).

    **Q3**: I received a `Error while performing knowledge search. Remote returned error: Search failed: Could not fetch embeddings due to missing API resource name for Azure OpenAI` error message while using knowledge search features. How can I solve this issue?

    **A3**: In recent releases, we have updated the connection settings to Azure OpenAI LLMs and added new parameters, such as the Resource Name. If you have an older connection (for example, created in the 4.53 release) to Azure OpenAI LLMs, especially Azure OpenAI `text-embedding-ada-002` for Knowledge Search, you might receive this error message when you trigger an LLM. To resolve this issue, recreate the LLM and the connection so that both have the latest format.

## More Information

- [Getting started with Knowledge AI](getting-started.md)
- [Cognigy Text Format](knowledge-source/text-formats/ctxt.md)
- [PDF](knowledge-source/text-formats/pdf.md)
- [Web Page](knowledge-source/text-formats/web-page.md)
- [Search Extract Output Node](../../build/node-reference/other-nodes/search-extract-output.md)
- [LLM](../llms/overview.md)
- [Generative AI](../generative-ai.md)
