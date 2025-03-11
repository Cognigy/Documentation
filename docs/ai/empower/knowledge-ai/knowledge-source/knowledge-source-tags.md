---
title: "Knowledge Source Tags"
slug: "knowledge-source-tags"
description: "Knowledge Source Tags serve to refine the scope of your knowledge search. They allow you to include only the most pertinent sections of the knowledge base and, as a result, improve the accuracy of search outputs."
hidden: false
tags: ['Source Tags', 'Knowledge Filtering', 'Search Refinement', 'Content Organization', 'Knowledge Management']
---

# Knowledge Source Tags

_Knowledge Source Tags_, also known as Source Tags, are labels that you can add to your [Knowledge Sources](knowledge-source.md) to improve how your AI Agents reply to your customers. With Source Tags, Knowledge AI's search engine can focus on specific Knowledge Sources and provide AI Agents targeted results.

Source Tags have the following benefits:

- **Increased search accuracy**. Source Tags direct the search engine to specific Knowledge Sources, ensuring that only the most relevant results are included, which is useful with a large number of Knowledge Sources.
- **Flexible tag filtering**. Using `AND` and `OR` operators for Source Tags refine searches and improve results.
- **Faster search performance**. Limiting the queried Knowledge Sources speeds up Knowledge Queries.
- **Enhanced content organization**. Categorizing Knowledge Sources improves information management and retrieval.

## Prerequisites

- You have created a [Knowledge Store](../knowledge-store.md).
- You have created a [Knowledge Source](knowledge-source.md).

## Limitations

- You can add up to 10 Source Tags per Knowledge Source.
- You can add up to 5 Source Tags per Search Extract Output Node.

## Naming Guidelines

- Include only lowercase and alpha-numerical (a-z, 0-9) characters, underscores, and hyphens.
- You can include [CognigyScript](../../../build/cognigyscript.md) in Source Tag names. In this case, make sure the CognigyScript input is lowercase with the `.toLowerCase()` method, for example, `{{"{{input.text.toLowerCase()}}"}}`. Using CognigyScript as a Source Tag name allows your AI Agent to filter Knowledge Sources dynamically according to the user input.

## Working with Source Tags

To configure Source Tags, you need to first add them to a Knowledge Source in **Build > Knowledge** or directly to the [CTXT file](../knowledge-source/text-formats/ctxt.md). Then, you need to add the Source Tag to the [Search Extract Output Node](../knowledge-search-and-extraction/search-extract-output.md) in the [Flow editor](../../../build/flows/editor.md#exploring-the-flow-editor). You can test the knowledge query results in the [Interaction Panel](../../../test/interaction-panel/overview.md).

## Examples

To reproduce the results presented later in this section, follow these steps:

1. Create a new Knowledge Store.
2. Upload the following files as Knowledge Sources:
    - [CTXT](https://docs.cognigy.com/_assets/ai/empower/knowledge-ai/cognigy-voice-copilot-endpoint-sample.ctxt) — the Source Tags are already in the CTXT file.
    - [DOCX](https://docs.cognigy.com/_assets/ai/empower/knowledge-ai/cognigy-voice-gateway-endpoint-sample.docx) — add the following Source Tags: `endpoint`, `webchat`, and `text-based`.
    - [PDF](https://docs.cognigy.com/_assets/ai/empower/knowledge-ai/cognigy-webchat-v3-endpoint-sample.pdf) — add the following Source Tags: `endpoint`, `voice`, and `voice-gateway`.
    
    After uploading the files, the Knowledge Sources have the following Source Tags:

    | Knowledge Sources | Source Tags in                 |
    |-------------------|--------------------------------|
    | CTXT              | endpoint, voice, copilot       |
    | DOCX              | endpoint, voice, voice-gateway |
    | PDF               | endpoint, webchat, text-based  |

3. Navigate to the Flow and add the Search Extract Output Node. Test the following examples to retrieve information based on the Source Tags you add to the Search Extract Output Node. To track how the output changes with different Source Tag combinations, use the input `Could you share a list of native endpoints for Cognigy?` for each Knowledge Source in the Interaction Panel. To check the output results in the Interaction Panel, use the `input.knowledgeSearch.topK` Input object in **INFO > Input**.

### Example 1

Source Tags in the Search Extract Output Node: `endpoint`

| Operator | Expected Result |
|----------|-----------------|
| AND      | All files       |
| OR       | All files       |

Top-3 Key Results for:

??? info "Both Operators"

    ```json
    "knowledgeSearch": {
      "topK": [
        {
          "text": "Cognigy Voice Copilot Endpoint Cognigy Voice Copilot Endpoint is a native Endpoint designed for voice-based applications within Cognigy.AI. The Endpoint manages audio stream transcriptions and integrates seamlessly with AI Copilot Flows. This Endpoint splits the audio into user and agent inputs, ensuring accurate updates to the AI Copilot workspace.",
          "distance": 0.85143244,
          "sourceMetaData": {
            "sourceName": "cognigy-voice-copilot-endpoint.ctxt",
            "sourceType": "ctxt",
            "title": "Cognigy Voice Copilot Endpoint",
            "url": "https://www.cognigy.com"
          },
          "chunkMetaData": {
            "image": "https://docs.cognigy.com/_assets/ai/deploy/endpoint-reference/voice-copilot.png",
            "url": "https://docs.cognigy.com/ai/deploy/endpoint-reference/voice-copilot/"
          }
        },
        {
          "text": "Cognigy Webchat v3 Endpoint is a native Endpoint within the Cognigy.AI platform designed to integrate AI Agents directly into your website. This connection allows for seamless interaction between users and AI Agents via the Webchat v3 interface.",
          "distance": 0.85023737,
          "sourceMetaData": {
            "sourceName": "cognigy-webchat-v3-endpoint.pdf",
            "sourceType": "pdf"
          },
          "chunkMetaData": {
            "firstPage": "1",
            "lastPage": "1"
          }
        },
        {
          "text": " Cognigy Voice Gateway Endpoint Cognigy Voice Gateway Endpoint is a native Endpoint within the Cognigy.AI platform that enables AI agents to interact with users through voice communication. This native or first-party integration connects AI Agents to contact centers or phone numbers, allowing users to speak with the agents instead of writing.",
          "distance": 0.84896475,
          "sourceMetaData": {
            "sourceName": "cognigy-voice-gateway-endpoint.docx",
            "sourceType": "docx"
          },
          "chunkMetaData": {
            "firstPage": "1",
            "lastPage": "1"
          }
        }
      ]
    }
    ```

### Example 2

Source Tags in the Search Extract Output Node: `endpoint`, `voice`

| Operator | Expected Result |
|----------|-----------------|
| AND      | CTXT and PDF    |
| OR       | All files       |


Top-3 Key Results for:

??? info "`AND`"

    ```json
      "knowledgeSearch": {
        "topK": [
          {
            "text": "Cognigy Voice Copilot Endpoint Cognigy Voice Copilot Endpoint is a native Endpoint designed for voice-based applications within Cognigy.AI. The Endpoint manages audio stream transcriptions and integrates seamlessly with AI Copilot Flows. This Endpoint splits the audio into user and agent inputs, ensuring accurate updates to the AI Copilot workspace.",
            "distance": 0.85143244,
            "sourceMetaData": {
              "sourceName": "cognigy-voice-copilot-endpoint.ctxt",
              "sourceType": "ctxt",
              "title": "Cognigy Voice Copilot Endpoint",
              "url": "https://www.cognigy.com"
            },
            "chunkMetaData": {
              "image": "https://docs.cognigy.com/_assets/ai/deploy/endpoint-reference/voice-copilot.png",
              "url": "https://docs.cognigy.com/ai/deploy/endpoint-reference/voice-copilot/"
            }
          },
          {
            "text": " Cognigy Voice Gateway Endpoint Cognigy Voice Gateway Endpoint is a native Endpoint within the Cognigy.AI platform that enables AI agents to interact with users through voice communication. This native or first-party integration connects AI Agents to contact centers or phone numbers, allowing users to speak with the agents instead of writing.",
            "distance": 0.84896475,
            "sourceMetaData": {
              "sourceName": "cognigy-voice-gateway-endpoint.docx",
              "sourceType": "docx"
            },
            "chunkMetaData": {
              "firstPage": "1",
              "lastPage": "1"
            }
          },
          {
            "text": "Key Features - Automatic Transcription Handling: Receives and processes transcriptions, identifying user and session IDs for precise session management. - Native Integration: As a native Endpoint, it is built directly into the Cognigy.AI platform, offering smooth functionality and compatibility with supported handover providers.",
            "distance": 0.8258752,
            "sourceMetaData": {
              "sourceName": "cognigy-voice-copilot-endpoint.ctxt",
              "sourceType": "ctxt",
              "title": "Cognigy Voice Copilot Endpoint",
              "url": "https://www.cognigy.com"
            },
            "chunkMetaData": {
              "url": "https://docs.cognigy.com/ai/deploy/endpoint-reference/voice-copilot/"
            }
          }
        ]
      }
    ```

??? info "`OR`"

    ```json
      "knowledgeSearch": {
        "topK": [
          {
            "text": "Cognigy Voice Copilot Endpoint Cognigy Voice Copilot Endpoint is a native Endpoint designed for voice-based applications within Cognigy.AI. The Endpoint manages audio stream transcriptions and integrates seamlessly with AI Copilot Flows. This Endpoint splits the audio into user and agent inputs, ensuring accurate updates to the AI Copilot workspace.",
            "distance": 0.85143244,
            "sourceMetaData": {
              "sourceName": "cognigy-voice-copilot-endpoint.ctxt",
              "sourceType": "ctxt",
              "title": "Cognigy Voice Copilot Endpoint",
              "url": "https://www.cognigy.com"
            },
            "chunkMetaData": {
              "image": "https://docs.cognigy.com/_assets/ai/deploy/endpoint-reference/voice-copilot.png",
              "url": "https://docs.cognigy.com/ai/deploy/endpoint-reference/voice-copilot/"
            }
          },
          {
            "text": "Cognigy Webchat v3 Endpoint is a native Endpoint within the Cognigy.AI platform designed to integrate AI Agents directly into your website. This connection allows for seamless interaction between users and AI Agents via the Webchat v3 interface.",
            "distance": 0.85023737,
            "sourceMetaData": {
              "sourceName": "cognigy-webchat-v3-endpoint.pdf",
              "sourceType": "pdf"
            },
            "chunkMetaData": {
              "firstPage": "1",
              "lastPage": "1"
            }
          },
          {
            "text": " Cognigy Voice Gateway Endpoint Cognigy Voice Gateway Endpoint is a native Endpoint within the Cognigy.AI platform that enables AI agents to interact with users through voice communication. This native or first-party integration connects AI Agents to contact centers or phone numbers, allowing users to speak with the agents instead of writing.",
            "distance": 0.84896475,
            "sourceMetaData": {
              "sourceName": "cognigy-voice-gateway-endpoint.docx",
              "sourceType": "docx"
            },
            "chunkMetaData": {
              "firstPage": "1",
              "lastPage": "1"
            }
          }
        ]
      }
    ```

### Example 3
    
Source Tags in the Search Extract Output Node: `voice`, `text-base`

| Operator | Expected Result           |
|----------|---------------------------|
| AND      | No Knowledge Chunks found |
| OR       | All Knowledge Chunks      |


Top-3 Key Results for:

??? info "`AND`"

    ```json
    "knowledgeSearch": {
      "topK": []
    }
    ```       

??? info "`OR`"
      
    ```json
      "knowledgeSearch": {
        "topK": [
          {
            "text": "Cognigy Webchat v3 Endpoint is a native Endpoint within the Cognigy.AI platform designed to integrate AI Agents directly into your website. This connection allows for seamless interaction between users and AI Agents via the Webchat v3 interface.",
            "distance": 0.8642316,
            "sourceMetaData": {
              "sourceName": "cognigy-webchat-v3-endpoint.pdf",
              "sourceType": "pdf"
            },
            "chunkMetaData": {
              "firstPage": "1",
              "lastPage": "1"
            }
          },
          {
            "text": " Cognigy Voice Gateway Endpoint Cognigy Voice Gateway Endpoint is a native Endpoint within the Cognigy.AI platform that enables AI agents to interact with users through voice communication. This native or first-party integration connects AI Agents to contact centers or phone numbers, allowing users to speak with the agents instead of writing.",
            "distance": 0.85569,
            "sourceMetaData": {
              "sourceName": "cognigy-voice-gateway-endpoint.docx",
              "sourceType": "docx"
            },
            "chunkMetaData": {
              "firstPage": "1",
              "lastPage": "1"
            }
          },
          {
            "text": "Cognigy Voice Copilot Endpoint Cognigy Voice Copilot Endpoint is a native Endpoint designed for voice-based applications within Cognigy.AI. The Endpoint manages audio stream transcriptions and integrates seamlessly with AI Copilot Flows. This Endpoint splits the audio into user and agent inputs, ensuring accurate updates to the AI Copilot workspace.",
            "distance": 0.8550185,
            "sourceMetaData": {
              "sourceName": "cognigy-voice-copilot-endpoint.ctxt",
              "sourceType": "ctxt",
              "title": "Cognigy Voice Copilot Endpoint",
              "url": "https://www.cognigy.com"
            },
            "chunkMetaData": {
              "image": "https://docs.cognigy.com/_assets/ai/deploy/endpoint-reference/voice-copilot.png",
              "url": "https://docs.cognigy.com/ai/deploy/endpoint-reference/voice-copilot/"
            }
          }
        ]
      }
    ```
  
## More Information

- [Knowledge Source](knowledge-source.md)
- [Knowledge Store](../knowledge-store.md)
- [CTXT file](text-formats/ctxt.md)
- [Search Extract Output Node](../../../build/node-reference/other-nodes/search-extract-output.md)
- [Interaction Panel](../../../test/interaction-panel/overview.md)
