---
title: "Cognigy Text Format"
slug: "cognigy-text-format"
description: "Cognigy text format (ctxt) is a specialized text format developed by Cognigy for the Cognigy Knowledge AI solution."
hidden: false
---

# Cognigy Text Format

_Cognigy text format_ (`ctxt`) is a specialized text format developed by Cognigy.
This format serves to import custom-chunked content into the [Cognigy Knowledge AI](overview.md) solution.

To adhere to the ctxt format, your files must comply with the formatting guidelines specified by Cognigy.
These guidelines include using the file extension .ctxt, applying the rules of the ctxt document structure, and ensuring the use of valid Markdown syntax.
You can edit the `.ctxt` file in code editors
such as [Visual Studio Code](https://code.visualstudio.com/),
[Notepad++](https://notepad-plus-plus.org/downloads/), or [Atom](https://github.com/atom/atom),
offering a visual representation of the formatting. Regardless of the text editor you are using, select the Markdown language mode. For example, in Visual Studio Code, you can adjust the language mode by accessing the [Change Language Mode]((https://code.visualstudio.com/docs/languages/overview#_change-the-language-for-the-selected-file)) section in the lower panel of the editor.

## Content Segmentation Basic Rules

Segmenting content into chunks includes the following basic rules:

- Content is divided into chunks based on double-line breaks, rather than relying on headings.
- The first chunk starts immediately after the initial double-line break in the file.
- If a chunk of content exceeds the [maximum supported length](overview.md#limitations), the process will be halted, and you will encounter a `Chunk too long` error message.

To split the text into chunks effectively and use the extensive metadata capabilities, create a `.ctxt` file that follows the document structure requirements below.

## Structure

A `ctxt` format file must contain both [header](#header) and [body](#body) sections.

???+ "Cognigy ctxt sample"

    ```markdown
    `version: 1`
    `title: Cognigy xApps FAQs`
    `url: https://www.cognigy.com`
    
    # What is Cognigy?
    Cognigy is a leading enterprise software provider for Conversational AI automation. Our platform, Cognigy.AI, automates customer and employee communications. Available in on-premises and SaaS environments, Cognigy.AI enables enterprises to have natural language conversations with their users on any channel - webchat, SMS, voice and mobile apps - and in any language. Cognigy.AI powers intelligent voice and chatbots that communicate consistently and accurately beyond simple FAQ, resulting in reduced contact center costs and increased efficiency while improving user experiences. The worldwide client portfolio of Cognigy includes Toyota, E.ON, Lufthansa, and many more.
    `url: https://www.cognigy.com/`
    
    # What are xApps?
    Cognigy xApps are infinitely flexible micro-web applications for customer self-service. xApps can be used as a stand-alone application or complimentary to any channel to enhance virtual and human agents' capabilities. In multi-channel scenarios xApps close the experience gaps of existing voice and messaging channels to enable dynamic, fully connected customer engagements by helping to overcome limitations of communication channels like voice, Webchat Widget or Microsoft Teams compromising user experiences.
    `url: https://docs.cognigy.com/ai/xApp/overview/`
    
    # What are use cases of xApps
    The use cases are endless as xApps are infinitely flexible due to the fact that they are essentially micro-web applications. Three potential use cases are listed here:
    - Authentication via Credentials: With xApps, you can allow users to authenticate using various methods such as email addresses, user numbers, or other identification details. Users can securely verify their identity and gain access to specific services or information.
    - Select a flight seat: With xApps, you can offer users an interface to choose their preferred seat for their flight. Users can view the available seats and select the seat of their choice, enhancing their travel experience.
    - Share location: With xApps, you can allow users to share their device's location information. This use case can be useful in various scenarios, such as providing location-based services, tracking deliveries, or finding nearby resources.
    `url: https://docs.cognigy.com/ai/xApp/use-cases/`
    
    # How do xApps work?
    The behavior of xApps is controlled via a set of xApp Flow Nodes. An xApp session can be initialized via the "xApp: Init Session" Node. The xApp session can be updated with the actual xApp Pages in two ways, by providing HTML code via the "xApp: Show HTML" Node or by specifying an Adaptive Card in JSON via the "xApp: Show Adaptive Card" Node. Alternatively, for more customization, you can create your own Node to update the xApps state by implementing and uploading an Extension. To wait for the xApp user Input in a Flow, use the Question or the Optional Question Node. The xApp type of the Question Node is only considered to be answered if submitted results are available as part of the Input.
    `url: https://docs.cognigy.com/ai/xApp/build-an-xApp/`
    
    # How is the xApps architecture designed?
    The xApp Shell Page loads its assets (HTML/CSS/JS) by requesting static files via HTTP/HTTPs 1.1 requests to service-static-files and establishes a WebSocket connection (via Socket.io) to serviceapp-session-manager to retrieve information about xApp sessions. This information includes an async event to initialize an xApp session, which creates a unique URL, and specifies which xApp will be displayed in a specific xApp session. The Elastic Load Balancer helps distribute incoming traffic, while Traefik dynamically routes traffic to backend servers based on specific requirements. The serviceapp-session-manager updates the xApp session state in the App Session DB, and the WebSocket transfers data to the Shell page, which loads xApps and provides data to the SDK.
    `url: https://docs.cognigy.com/ai/xApp/architecture/`
    `image: https://docs.cognigy.com/ai/images/xApp/architecture.png`       
    ```

You can also download this [cognigy-sample.ctxt](https://docs.cognigy.com/ai/images/knowledge-ai/cognigy-sample.ctxt) file in the `.ctxt` format.

### Header

The header contains global metadata information with key-value pairs.

A metadata unit is structured as a key-value pair enclosed in backticks.
For example:

```markdown
`url: https://www.cognigy.com`
```

The header should be separated from the [body](#body) by double-line breaks.

#### Parameters

| Parameter | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Mandatory |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| version   | The version of the ctxt format. The version number can be changed when a new version is introduced.                                                                                                                                                                                                                                                                                                                                                                                                                  | yes       |
| title     | The document's name or a brief content description. When a user requests the information source, the virtual agent displays the document's title in the response message. This parameter helps users quickly identify the document's main topic. For instance, if the document is a product manual, the title field might contain `Product Manual` or a similar title.<br>You can find this parameter in the `input.knowledgeSearch.topK[0].sourceMetaData.title` Input object.                                      | no        |
| url       | The document's source, the website where the information was obtained. When a user requests the information source, the virtual agent displays a link to the source in the response message. This parameter enables users to access the source for more details or verification. For example, if the document's information came from your company's website, the URL field would contain the website's URL. <br>You can find this parameter in the `input.knowledgeSearch.topK[0].sourceMetaData.url` Input object. | no        |

#### Example

```markdown
`version: 1`
`title: Cognigy xApps FAQs`
`url: https://www.cognigy.com`
```

### Body

The body contains paragraphs that include headings, clear and informative text, and relevant metadata.
Each paragraph is equal to one chunk.

Each paragraph should be separated by double-line breaks.

#### Headings

Headings serve as titles for each paragraph and should accurately represent the question that a user might have in mind. 

Well-crafted headings help virtual agents quickly identify the topic of the paragraph and decide whether the content matches a user's request or not.

For instance, if the content is about xApp architecture, a header could be **How is the xApps architecture designed?** reflecting the specific topic covered in that paragraph.

The symbol `#` determines a heading. You can use only first-level headings (`H1`).

#### Text

Text is a main part of the paragraph, which is where you provide answers or convey knowledge to the user.
Ensure that the text is clear, concise, and directly addresses the question or topic indicated by the heading.
Readers rely on the text to find the information they seek, so clarity and accuracy are crucial.

For instance, if the header is **How is the xApps architecture designed?** the text should explain the principles and methods used in designing the xApps architecture.

The text may contain bulleted and numbered lists in Markdown format. Other elements, such as links, may not display correctly in the chat conversation.

#### Chunk Metadata

Metadata is additional information associated with a paragraph
and can be found in the `input.knowledgeSearch.topK[0].chunkMetaData` Input object.
Metadata allows you to provide context-related details that enhance the user's understanding or engagement with the content.

Metadata is presented in a key-value format, offering versatility in the type of content you can include.

For instance, if your paragraph discusses the xApp Architecture topic,
you could include metadata with links to related documentation URLs,
images of architecture diagrams, or additional detailed information that may interest a limited number of users.
Reusing such information can be beneficial
when you use the **Search only** type in the [Search Extract Output](../flow-nodes/other-nodes/search-extract-output.md) Node or the [Knowledge Search](../flow-nodes/other-nodes/knowledge-search.md) Node.

A metadata unit is structured as a key-value pair enclosed in backticks. 
For example:

```markdown
`image: https://docs.cognigy.com/ai/images/xApp/architecture.png`
```

Common metadata might include the following elements:

- **URLs**. To link to external sources or provide additional reading material.
- **Images**. To illustrate concepts or provide visual aids.
- **Videos**. To add the text with multimedia content.
- **References.** To add sources or related articles for further exploration.

You can create your types of elements for metadata, for example,
`details: For more information, contact our support team`.

To learn about metadata limits, go to [Limitations](overview.md#limitations) section.

#### Example

The example below contains two paragraphs (chunks).

```markdown
# What are use cases of xApps
The use cases are endless as xApps are infinitely flexible due to the fact that they are essentially micro-web applications. Three potential use cases are listed here:
- Authentication via Credentials: With xApps, you can allow users to authenticate using various methods such as email addresses, user numbers, or other identification details. Users can securely verify their identity and gain access to specific services or information.
- Select a flight seat: With xApps, you can offer users an interface to choose their preferred seat for their flight. Users can view the available seats and select the seat of their choice, enhancing their travel experience.
- Share location: With xApps, you can allow users to share their device's location information. This use case can be useful in various scenarios, such as providing location-based services, tracking deliveries, or finding nearby resources.
`url: https://docs.cognigy.com/ai/xApp/use-cases/`
  
# How is the xApps architecture designed?
The xApp Shell Page loads its assets (HTML/CSS/JS) by requesting static files via HTTP/HTTPs 1.1 requests to service-static-files and establishes a WebSocket connection (via Socket.io) to serviceapp-session-manager to retrieve information about xApp sessions. This information includes an async event to initialize an xApp session, which creates a unique URL, and specifies which xApp will be displayed in a specific xApp session. The Elastic Load Balancer helps distribute incoming traffic, while Traefik dynamically routes traffic to backend servers based on specific requirements. The serviceapp-session-manager updates the xApp session state in the App Session DB, and the WebSocket transfers data to the Shell page, which loads xApps and provides data to the SDK.
`url: https://docs.cognigy.com/ai/xApp/architecture/`
`image: https://docs.cognigy.com/ai/images/xApp/architecture.png`
```

## More Information

- [Knowledge AI Overview](overview.md)
- [Search Extract Output Node](../flow-nodes/other-nodes/search-extract-output.md)
