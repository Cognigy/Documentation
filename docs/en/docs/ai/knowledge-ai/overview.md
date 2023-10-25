---
title: "Knowledge AI"
slug: "Knowledge AI"
description: "Cognigy Knowledge AI technology empowers you to upload existing knowledge as documents, such as PDF, text, and DOCX files, as well as files in a custom Cognigy format. This technology extracts meaningful information from these documents and makes it accessible to Flow designers via the Knowledge AI Nodes."
hidden: false
---

# Knowledge AI

[![Version badge](https://img.shields.io/badge/Updated in-v4.62-blue.svg)](../../release-notes/4.62.md)

{! _includes/ai/terms-of-use-ks.md !}

Knowledge AI can be used to enhance Natural Language Processing (NLP) and Conversational AI. The primary goal of Knowledge AI is to enable these systems to access and comprehend a vast amount of information from different formats, such as documents, articles, manuals, FAQs, and more. By accessing and understanding knowledge bases, these AI systems can provide more accurate, context-aware, and helpful responses to user queries.

With the new Cognigy Knowledge AI solution, you no longer need to rely solely on [Intents](../nlu/nlu-overview/ml-intents.md) and [Default Replies](../nlu/nlu-overview/overview.md#default-replies) to identify user questions and provide relevant content based on predefined responses. Crafting these question-and-answer pairs can be time-consuming and labor-intensive, requiring ongoing maintenance efforts.

Instead, Cognigy Knowledge AI technology lets you to upload existing knowledge as documents, such as PDF, text, and DOCX files, as well as files in a custom Cognigy format. This technology extracts meaningful information from these documents and makes it accessible to Flow designers via the Knowledge AI Nodes. This approach empowers you to build knowledge-based virtual agents quickly and effortlessly, bypassing the limitations of traditional intent-based systems and simplifying the process of creating sophisticated conversational experiences.

## Prerequisites

Before using this feature, create an account in one of the LLM Providers:

- [OpenAI](https://platform.openai.com/). You need to have a paid account or be a member of an organization that provides you access. Open your OpenAI user profile, copy the existing API Key, or create a new one and copy it.
- [Microsoft Azure OpenAI](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service). You need to have a paid account or be a member of an organization that provides you access. Ask your Azure Administrator to provide API Key, resource name, and deployment model name.

For the Knowledge AI case, you need only the `text-embedding-ada-002` model. However, if you intend to transform the Knowledge Search result and output it, you will also need an additional model from the **LLM Prompt Node & Search Extract Output Node** column in the [supported models](../resources/build/llm.md) list.

## Create a Knowledge Store

You can create a preconfigured knowlege store. To do this, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu, select **Knowledge**. The knowledge wizard will be opened.
3. Continue following the wizard instructions.
4. Specify a unique name and select an embedding model.

    <figure>
      <img class="image-center" src="{{config.site_url}}ai/images/knowledge-ai/knowledge-ai-wizard.png" width="100%" />
    </figure>

5. Click **Configure Connection** and enter credentials for the model:

    === "Microsoft Azure OpenAI"
        - **Connection name** — create a unique name for your connection.<br>
        - **apiKey** — add an [Azure API Key](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart?tabs=command-line&pivots=rest-api#retrieve-key-and-endpoint). This value can be found in the **Keys & Endpoint** section when examining your resource from the Azure portal. You can use either `KEY1` or `KEY2`.<br>
        - **resourceName** — add a [resource name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource). This value can be found under **Resource Management > Deployments** in the Azure portal or alternatively under **Management > Deployments** in Azure OpenAI Studio.<br>
        - **deploymentName** — add a [model name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#deploy-a-model).<br>
        - **apiVersion** — add an [API version](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference#rest-api-versioning). The API version to use for this operation in the `YYYY-MM-DD` format.<br>
    === "OpenAI"
        - **Connection name** — create a unique name for your connection.<br>
        - **apiKey** — add an API Key from your OpenAI account. You can find this key in the [User settings](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key) of your OpenAI account.<br>

6. Click **Next**.
7. Download the [cognigy-sample.ctxt](https://docs.cognigy.com/ai/images/knowledge-ai/cognigy-sample.ctxt) file in the `.ctxt` format.
8. In the **Upload Knowledge** step, select the **Cognigy CTXT** type and upload the saved file.
9. _(Optional)_ In the **Configure Answer Extraction Model** section, select the additional model if you want to extract key points and output the search result as text or adaptive card. Click **Configure Connection** and enter model credentials.
10. _(Optional)_ When the additional model is configured, click **Create Flow**. A Flow with the **Search Extract Output** Node will be created. 
11. Click **Next**.

Complete installation and start exploring knowledge AI project structure.   

To learn more about `ctxt`, refer to [Cognigy Text Format](ctxt.md).

## Explore a Knowledge AI project 

Working with Knowledge AI involves two phases similar to Intent workflow. The first phase is ingesting and preparing knowledge, and the second phase is querying the knowledge during runtime.

**First phase:**

1. **Raw Information Upload**. Cognigy.AI receives access to raw information via uploaded files that contain knowledge.
2. **Knowledge Chunk Extraction**. A collection of tools that extracts text and metadata from the raw information. Chunks are accessible for modification in the Chunk Editor.
3. **Vectorization**. The text of Knowledge Chunks is encoded into numeric representations using an Embedding machine learning model. Embeddings are high-dimensional vectors that encode word meaning and similarity into numeric representations. Cognigy.AI stores these vectors in a specialized internal database for quick access during runtime.

**Second phase:**

1. **Knowledge Base Querying**. During runtime, the Knowledge AI system can query the knowledge base to provide accurate and contextually appropriate responses to user queries.
2. **Knowledge-based Virtual Agents Building**. Virtual agents utilize the knowledge stored in the Knowledge Base to engage in more sophisticated and intelligent conversations with users. These agents can provide context-aware responses based on the information extracted from the uploaded files.

### Knowledge AI Management

Knowledge is organized in a hierarchy of stores, sources, and chunks to enable accurate responses by the system. These hierarchical structures are described below.

#### Knowledge Store

A _Knowledge Store_ is a container that holds and organizes multiple Knowledge Sources. It provides a centralized and structured environment for managing and categorizing various sources of knowledge.
The Knowledge Store helps streamline the knowledge management process by grouping related Knowledge Sources, making it easier to organize, search, and retrieve relevant information during runtime.

The maximum number of stores per project is described in the [Limitations](#limitations) section.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/knowledge-ai/knowledge-store.png" width="100%" />
</figure>

#### Knowledge Source

A _Knowledge Source_ represents the output of transforming various types of files into a structured and accessible format. Each file corresponds uniquely to a specific Knowledge Source, containing valuable knowledge in the form of user manuals, articles, FAQs, and other relevant information.

By breaking down the content of these files into smaller units known as _chunks_, the Knowledge Source becomes a specific collection of organized and structured knowledge.

In addition to the main content, you can include other types of information, such as links and dates, in the metadata.

The following types of files are supported:

- `.ctxt` (recommended) 
- `.txt`
- `.pdf`
- `.docx`

The `.ctxt` ([Cognigy text](ctxt.md)) format effectively splits the text into chunks and provides wide possibilities for working with metadata. For other formats, the results of file conversion may produce poorer outcomes.

The maximum number of sources per store is described in the [Limitations](#limitations) section.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/knowledge-ai/knowledge-source.png" width="100%" />
</figure>

#### Chunk 

A _Chunk_ is a unit of knowledge extracted from a Knowledge Source. Chunks are smaller, self-contained pieces of information that the Knowledge AI system can process and manage effectively.

For instance, a chunk can represent a single paragraph, a sentence, or even a smaller unit of text from a document. By dividing the content into chunks, the system gains better granularity, enabling it to analyze and respond to user queries more efficiently. The extraction of knowledge into chunks enhances the system's ability to match the right information to user questions, resulting in more accurate and contextually appropriate responses.

Each chunk can have associated metadata.
The number of meta-data key-value pairs is limited and supports only simple data types such as number,
string, and boolean.
The maximum number of Chunks as well as the maximum length of supported characters per Chunk are described in the [Limitations](#limitations) section.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/knowledge-ai/chunk.png" width="100%" />
</figure>

#### Chunk Editor

The _Chunk Editor_ is a tool that helps you interact with and manage chunks. 
The Editor provides a user-friendly interface that enables you to manipulate the content within each chunk.
Users can modify the text, add new information, delete sections,
or rearrange the order of content to ensure the accuracy and relevance of the knowledge.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/knowledge-ai/chunk-editor.png" width="100%" />
</figure>

## Search, Extract and Output Knowledge

1. Navigate to **Build > Flows** and create a new Flow.
2. In the **Flow** editor, add a **Search Extract Output** Node.
3. In the **Node** editor, select the knowledge store that you recently created.
4. Select one of the following modes:
    - **Search & Extract & Output** — performs a knowledge search, extracts key points, and outputs the result as text or adaptive card. For this mode, you need models from the [list of supported providers](../resources/build/llm.md) that cover both the `LLM Prompt Node & Search Extract Output Node` and `Knowledge Search` cases.
    - **Search & Extract** — performs a knowledge search, extracts key points, but no automatic output. For this mode, you need models from the [list of supported providers](../resources/build/llm.md) that cover both the `LLM Prompt Node & Search Extract Output Node` and `Knowledge Search` cases.
    - **Search only** — performs a knowledge search and retrieves information without extraction or automatic output. For this mode, you only the `text-embedding-ada-002` model.

     <figure>
       <img class="image-center" src="{{config.site_url}}ai/images/knowledge-ai/configure-search-extract-output.png" width="100%" />
     </figure>
5. Check if **Context-Aware Search** is activated in the **Search settings** section. This feature considers the context of the transcript for the search, allowing a virtual agent to address follow-up questions. Be aware that this feature will consume LLM tokens on your LLM prover side.
6. When the **Context-Aware Search** setting is enabled, configure the number of **Transcript Steps**. This setting affects the depth of context considered when retrieving search results. 
7. Click **Save Node**. 
8. Proceed to the [Interaction Panel](../tools/interaction-panel/interaction-panel.md) and send the `Can Cognigy connect to a Contact Center?` question.

You will receive a response generated from the absorbed Knowledge.

To learn more about the Search Extract Output Node, refer to the [related article](../flow-nodes/other-nodes/search-extract-output.md).

## Limitations

The table below presents limitations. These limitations are subject to future changes by Cognigy.

| Description                                     | Current Limit |
|-------------------------------------------------|---------------|
| Maximum number of Knowledge Stores per project  | 10            |
| Maximum number of Knowledge Sources per Store   | 10            |
| Maximum number of Chunks per Knowledge Source   | 1000          |
| Maximum number of Source metadata pairs         | 20            |
| Maximum number of Chunk metadata pairs          | 20            |
| Maximum number of characters for text per Chunk | 2000          |

!!! Snapshots
    Knowledge AI specific objects, such as Stores, Sources and Chunks, **are not** a part of Cognigy.AI [Snapshots](../resources/deploy/snapshots.md). This feature will be implemented soon.    

## FAQ

**Q1**: Will Knowledge AI be free of charge?

**A1**: No, we will provide pricing information in the near future.

**Q2**: I encountered a `Request failed with status code 429` error while attempting to upload a file. How can I solve this issue?

**A2**: The `429` error occurs when your organization's rate limit is exceeded on the side of your LLM's provider. To learn more, refer to your provider's documentation. For instance, if you're using the OpenAI API, check out the article [How can I solve 429: 'Too Many Requests' errors?](https://help.openai.com/en/articles/5955604-how-can-i-solve-429-too-many-requests-errors).

## More Information

- [Cognigy Text Format](ctxt.md)
- [Search Extract Output Node](../flow-nodes/other-nodes/search-extract-output.md)
- [LLM](../resources/build/llm.md)
- [Generative AI](../generative-ai.md)
