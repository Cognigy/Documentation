---
title: "Knowledge Source Tags"
slug: "knowledge-source-tags"
description: "Source Tags serve to refine the scope of your knowledge search, allowing you to include only the most pertinent sections of the knowledge base and, as a result, improve the accuracy of search outputs."
hidden: false
---

# Knowledge Source Tags

_Source Tags_ act as filters that direct the search engine to focus on specific Knowledge Sources, narrow the search scope, and provide more targeted results.

Using Source Tags provides the following benefits:

- **Increased Search Accuracy**. Tags help focus on specific Knowledge Sources, ensuring that only the most relevant results are included, which is useful with a large number of sources.
- **Flexible Tag Filtering**. Refine search using `AND` and `OR` operators with Tags.
- **Faster Search Performance**. By limiting the number of sources considered, search queries are processed more quickly, leading to faster results.
- **Enhanced Content Organization**. Tags allow for precise and flexible categorization of content, improving the management and retrieval of information across different topics.

## Naming Guidelines for Source Tags

- You can add [CognigyScript](../../build/cognigy-script.md) within Source Tags.
- Source Tags are always lower-case, only alpha-numerics (a-z, 0-9), underscores, and hyphens are allowed.
- When using CognigyScript for Source Tags, it is important to lowercase them. For example, by using the following: `{{"{{input.text.toLowerCase()}}"}}`.

## How to Use 

To manage tags, you need to first create them and then add them to the Node in the Flow.

### Create Source Tags

You can create Source Tags with a new Knowledge Source or add them to an existing one:

=== "New Knowledge Source"
     1. Open the Cognigy.AI interface.
     2. Go to the Project that you want to change.
     3. In the left-side menu of the Project, select **Build > Knowledge**.
     4. Create a Knowledge Store or select an existing one.
     5. Open the created Knowledge Store by selecting it.
     6. In the upper-left corner, click **+ New Knowledge Sources**.
     7. In the **New Knowledge Sources** menu, select a type of the source from the **Type** list, for example, **File**. Note that if you select **Cognigy CTXT**, you need to [specify tags in the file](ctxt.md) before uploading it.
     8. Click **Browse files**, select a file from your computer and upload it. If you select **Web Page**, add a URL to the page that you want to upload.
     9. In the **Source Tags** field, specify tags that you want to add to the Knowledge Store. Press ++enter++ to add a Tag. You can add only up to 10 tags.
     10. Click **Create**.
  
     Once the Knowledge Source is created, the Source Tags will be available to view in the **Tags** column on the **Knowledge Sources** page.

=== "Existing Knowledge Source"
     1. Open the Cognigy.AI interface.
     2. Go to the Project that you want to change.
     3. In the left-side menu of the Project, select **Build > Knowledge**.
     4. Select a Knowledge Store from the list, and then select the Knowledge Source that you want to change.
     5. In the **New Knowledge Sources** menu, select a type of the source from the **Type** list, for example, **File**. Note that if you select **Cognigy CTXT**, you need to [specify tags in the file](ctxt.md) before uploading it.
     6. Click **Browse files**, select a file from your computer and upload it. If you select **Web Page**, add a URL to the page that you want to upload.
     7. In the **Source Tags** field, specify tags that you want to add to the Knowledge Store. Press ++enter++ to add a Tag. You can add only up to 10 tags.
     8. Click **Create**.
    
    Once you added Tags, they will be available to view in the **Tags** column on the **Knowledge Sources** page.

### Add Source Tags to Search Extract Output Node

1. Open the Cognigy.AI interface.
2. Go to the Project that you want to change.
3. In the left-side menu of the Project, navigate to **Build > Flows** and create a new Flow. 
4. In the **Flow** editor, add a **Search Extract Output** Node. 
5. In the **Node** editor, select the Knowledge Store that you recently created. 
6. Select one of the following modes:
    - **Search & Extract & Output** — performs a knowledge search, extracts key points, and outputs the result as text or adaptive card. For this mode, you need models from the [list of supported providers](../../empower/llms.md) that cover both the `LLM Prompt Node & Search Extract Output Node` and `Knowledge Search` cases.
    - **Search & Extract** — performs a knowledge search, extracts key points, but no automatic output. For this mode, you need models from the [list of supported providers](../../empower/llms.md) that cover both the `LLM Prompt Node & Search Extract Output Node` and `Knowledge Search` cases.
    - **Search only** — performs a knowledge search and retrieves information without extraction or automatic output. For this mode, you only need the `text-embedding-ada-002` model.

     <figure>
       <img class="image-center" src="../../../../_assets/ai/empower/knowledge-ai/configure-search-extract-output.png" width="100%" />
     </figure>

7. Check if **Context-Aware Search** is activated in the **Search settings** section. This feature considers the context of the transcript for the search, allowing an AI Agent to address follow-up questions. Be aware that this feature will consume LLM tokens on your LLM provider side.
8. When the **Context-Aware Search** setting is enabled, configure the number of **Transcript Steps**. This setting affects the depth of context considered when retrieving search results. 
9. In the **Source Tags** field, add tags by specifying each tag separately and pressing ++enter++. Before specifying tags, ensure that they were provided during the upload of the source file for the selected [Knowledge Source](#add-source-tags-to-knowledge-source). You can add up to 5 Tags.
10. If you specified more than one tag, select a parameter from the **Match Type for Source Tags** list. Select one of the following operators to filter Knowledge Sources by Source Tags:
    - **AND** — requires all tags to match across multiple Knowledge Sources.
    - **OR** — requires at least one tag to match across multiple Knowledge Sources.
11. Click **Save Node**.
12. Proceed to the [Interaction Panel](../../test/interaction-panel/overview.md) and send the input.

## Example

Consider an example where you upload two files in different formats to create Knowledge Sources. For each Knowledge Source, specific tags will be specified. In the Flow where the AI Agent is configured, you selectively add tags to the Search Output Node and test the results in the Interaction Panel.

1. Create a new Knowledge Store.
2. Upload the following files as Knowledge Sources:
    - [PDF](https://docs.cognigy.com/_assets/ai/empower/knowledge-ai/call-tracing-sample.pdf). Specify the following tags: `cognigy`, `architecture`, `Voice`, and `call-tracing`.
    - [CTXT](https://docs.cognigy.com/_assets/ai/empower/knowledge-ai/cognigy-sample.ctxt). The Tags are already specified in the file.
3. Review Tags in Knowledge Sources. After uploading the files, the Knowledge Sources will have the following tags:
    ```txt
    | Knowledge Sources | Tags in Knowledge Sources                  |
    |-------------------|--------------------------------------------|
    | PDF               | cognigy, architecture, voice, call-tracing |
    | CTXT              | cognigy, architecture, xapps               |
    ```
4. Navigate to the Flow and add the Search Output Node. Run the following scenarios to retrieve information based on the specified tags.

    **Scenario 1**

    Test the retrieval of knowledge related to call tracing.

    ```txt
    | Tags in Knowledge Search Output Node | User Input                  | Operator | Expected Result          |
    |--------------------------------------|-----------------------------|----------|--------------------------|
    | `xapps`, `voice`                     | Tell me about voice tracing | OR       | PDF                      |
    |                                      |                             | AND      | No Sources will be found |
    ```
    
    **Scenario 2**

    Test the retrieval of knowledge related to xApp and voice architecture.

    ```txt
    | Tags in Knowledge Search Output Node | User Input                                | Operator | Expected Result             |
    |--------------------------------------|-------------------------------------------|----------|-----------------------------|
    | `xapps`, `voice`, `architecture`     | Tell me about xApp and voice architecture | OR       | Combination of PDF and CTXT |
    |                                      |                                           | AND      | No Sources will be found    |
    ```

    **Scenario 3**

    Test the retrieval of knowledge the retrieval of documents related to Cognigy xApps.
    ```txt
    | Tags in Knowledge Search Output Node | User Input                  | Operator | Expected Result             |
    |--------------------------------------|-----------------------------|----------|-----------------------------|
    | `cognigy`                            | Tell me about Cognigy xApps | OR       | Combination of PDF and CTXT |
    |                                      |                             | AND      | Combination of PDF and CTXT |
    ```

## More Information

- [Overview](overview.md)
- [Search Extract Output Node](../../build/node-reference/other-nodes/search-extract-output.md)
