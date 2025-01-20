---
title: "Knowledge Source Tags"
slug: "knowledge-source-tags"
description: "Source Tags serve to refine the scope of your knowledge search, allowing you to include only the most pertinent sections of the knowledge base and, as a result, improve the accuracy of search outputs."
hidden: false
---

# Knowledge Source Tags

_Source Tags_ act as filters that direct the search engine to focus on specific Knowledge Sources, narrow the search scope, and provide more targeted results.

Using Source Tags provides the following benefits:

- **Increased Search Accuracy**. Tags help focus on specific Knowledge Sources, ensuring that only the most relevant results are included, which is useful with a large number of Sources.
- **Flexible Tag Filtering**. Refine search using `AND` and `OR` operators with Tags.
- **Faster Search Performance**. By limiting the number of sources considered, search queries are processed more quickly, leading to faster results.
- **Enhanced Content Organization**. Tags allow for precise and flexible categorization of content, improving the management and retrieval of information across different topics.

## Naming Guidelines for Source Tags

- You can add [CognigyScript](../../build/cognigy-script.md) within Source Tags.
- Source Tags are always lower-case, only alpha-numerics (a-z, 0-9), underscores, and hyphens are allowed.
- When using CognigyScript for Source Tags, it is important to lowercase them. For example, by using the following: `{{"{{input.text.toLowerCase()}}"}}`.

## How to Use 

To manage Tags, you need to first create them and then add them to the Node in the Flow.

### Create Source Tags

You can create Source Tags with a new Knowledge Source or add them to an existing one:

=== "New Knowledge Source"
     1. Open the Cognigy.AI interface.
     2. Go to the Project that you want to change.
     3. In the left-side menu of the Project, go to **Build > Knowledge**.
     4. Create a Knowledge Store or select an existing one.
     5. Open the created Knowledge Store by selecting it.
     6. In the upper-left corner, click **+ New Knowledge Sources**.
     7. In the **New Knowledge Sources** menu, select a type of the source from the **Type** list, for example, **File**. Note that if you select **Cognigy CTXT**, you need to [specify Tags in the file](ctxt.md) before uploading it.
     8. Click **Browse files**, select a file from your computer and upload it. If you select **Web Page**, add a URL to the page that you want to upload.
     9. In the **Source Tags** field, specify Tags that you want to add to the Knowledge Store. Press ++enter++ to add a Tag. You can add up to 10 Tags.
     10. Click **Create**.
  
     Once the Knowledge Source is created, the Source Tags will be available to view in the **Tags** column on the **Knowledge Sources** page.

=== "Existing Knowledge Source"
     1. Open the Cognigy.AI interface.
     2. Go to the Project that you want to change.
     3. In the left-side menu of the Project, go to **Build > Knowledge**.
     4. Select a Knowledge Store from the list, and then select the Knowledge Source that you want to change, click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) **> Edit** next to the Source. The **Edit Knowledge Source** window opens.
     5. In the **Source Tags** field, add new Tags by pressing ++enter++. You can add up to 10 Tags. 
     6. Click **Save**.
    
     Once you added Tags, they will be available to view in the **Tags** column on the **Knowledge Sources** page.

#### Edit Source Tags

If you have already added a Knowledge Source, you can edit the list of Source Tags by deleting or adding new ones. To do so, follow these steps:

1. Open the Cognigy.AI interface.
2. Go to the Project you want to modify.
3. In the left-side menu of the Project, go to **Build > Knowledge**.
4. On the **Knowledge Stores** page, select a Knowledge Store from the list.
5. On the **Knowledge Sources** page, find the Source whose Tags you want to change. Click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) **> Edit**. The **Edit Knowledge Source** window opens.
6. In the **Source Tags** field, add new Tags by pressing ++enter++ or remove existing Tags by clicking ![vertical-ellipsis](../../../_assets/icons/source-tag-cross.svg) next to the Tag name. 
7. Click **Save**.

### Add Source Tags to a Search Extract Output Node

1. Open the Cognigy.AI interface.
2. Go to the Project that you want to change.
3. In the left-side menu of the Project, go to **Build > Flows** and create a new Flow. 
4. In the **Flow** editor, add a **Search Extract Output** Node. 
5. In the **Node** editor, select the Knowledge Store that you recently created. 
6. In the **Source Tags** field, add Tags by specifying each Tag separately and pressing ++enter++. Before specifying Tags, ensure that they were provided during the upload of the content type for the selected [Knowledge Source](#create-source-tags). You can add up to 5 Tags. 
7. If you specified more than one Tag, select a parameter from the **Match Type for Source Tags** list. Select one of the following operators to filter Knowledge Sources by Source Tags:
    - **AND** — requires all Tags to match across multiple Knowledge Sources.
    - **OR** — requires at least one Tag to match across multiple Knowledge Sources.
8. Click **Save Node**.
9. Proceed to the [Interaction Panel](../../test/interaction-panel/overview.md) and send the input.

## Example

Consider an example where you upload three files in different formats to create Knowledge Sources. For each Knowledge Source, specific Tags will be specified. In the Flow where the AI Agent is configured, you selectively add Tags to the Search Output Node and test the results in the Interaction Panel.
For all examples,
enter the user input `Could you share a list of native endpoints for Cognigy?` in the Interaction Panel.
To check the output results in the Interaction Panel,
use the `input.knowledgeSearch.topK` Input object by navigating to **INFO > Input**.

1. Create a new Knowledge Store.
2. Upload the following files as Knowledge Sources:
    - [CTXT](https://docs.cognigy.com/_assets/ai/empower/knowledge-ai/cognigy-voice-copilot-endpoint-sample.ctxt). The Tags are already specified in the file.
    - [DOCX](https://docs.cognigy.com/_assets/ai/empower/knowledge-ai/cognigy-voice-gateway-endpoint-sample.docx). Specify the following Tags: `endpoint`, `webchat`, and `text-based`.
    - [PDF](https://docs.cognigy.com/_assets/ai/empower/knowledge-ai/cognigy-webchat-v3-endpoint-sample.pdf). Specify the following Tags: `endpoint`, `voice`, and `voice-gateway`.
3. Review Tags in Knowledge Sources. After uploading the files, the Knowledge Sources will have the following Tags:
    ```txt
    | Knowledge Sources | Tags in Knowledge Sources                  |
    |-------------------|--------------------------------------------|
    | CTXT              | endpoint, voice, copilot                   |
    | DOCX              | endpoint, voice, voice-gateway             |
    | PDF               | endpoint, webchat, text-based              |
    ```
4. Navigate to the Flow and add the Search Extract Output Node. Run the following scenarios to retrieve information based on the specified Tags.
   To track how the output changes with different Tag combinations, use the same input `Could you share a list of native endpoints for Cognigy?` in the Interaction Panel.
   To check the output results in the Interaction Panel, use the `input.knowledgeSearch.topK` Input object in **INFO > Input**.

    **Scenario 1**

    ```txt 
    | Tags in Knowledge Search Output Node | Operator | Expected Result |
    |--------------------------------------|----------|-----------------|
    |  endpoint                            | AND      | All files       |
    |                                      | OR       | All files       |
    ```
        
    ???+ note "Top-3 Key Results for both Operators"

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

    **Scenario 2**
    
     ```txt
     | Tags in Knowledge Search Output Node | Operator | Expected Result |
     |--------------------------------------|----------|-----------------|
     | endpoint, voice                      | AND      | CTXT and PDF    |
     |                                      | OR       | All files       |
     ```

    Top-3 Key Results for Operators:

    ??? note "`AND`"

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

    ??? note "`OR`"

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

    **Scenario 3**
    
    ```txt
    | Tags in Knowledge Search Output Node | Operator | Expected Result |
    |--------------------------------------|----------|-----------------|
    | voice, text-based                    | AND      | No files found  |
    |                                      | OR       | All files       |
    ```

    Top-3 Key Results for Operators:

    ??? note "`AND`"

        ```json
        "knowledgeSearch": {
          "topK": []
        }
        ```       

    ??? note "`OR`"
         
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

- [Overview](overview.md)
- [Search Extract Output Node](../../build/node-reference/other-nodes/search-extract-output.md)
