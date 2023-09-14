---
title: "Cognigy Text Format"
slug: "cognigy-text-format"
hidden: false
---

# Cognigy Text Format

The _Cognigy text format_ (`ctxt`) is a specialized text format developed by Cognigy.
This format serves to import custom-chunked content into the [Knowledge AI Node](../flow-nodes/other-nodes/search-extract-output.md).

To adhere to the ctxt format, your files must comply with the formatting guidelines specified by Cognigy. This includes using the file extension .ctxt and ensuring the use of valid Markdown syntax. This approach facilitates easy editing of these files in code editors like Visual Studio Code, Notepad++, or Atom, offering a visual representation of the formatting.

There are rules governing the segmentation of content into sections:

- Content is divided into chunks based on double line breaks, rather than relying on headings.
- The first chunk starts immediately after the initial double-line break in the file.
- If a chunk of content exceeds the maximum supported length, the process will be halted, and you will encounter a `Chunk too long` error message.

## Structure

A `ctxt` format file must contain both [header](#header) and [body](#body) sections.

### Header

The header contains global metadata information with key-pair values.

The header should be separated from the [body](#body) by one line.

#### Parameters

| Parameter | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Mandatory |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| version   | The version of the ctxt format. The version number can be changed when a new version is introduced.                                                                                                                                                                                                                                                                                                                                                                                                                                   | yes       |
| title     | The document's name or a brief content description. When a user requests the information source, the virtual agent displays the document's title in the response message. This parameter helps users quickly identify the document's main topic. For instance, if the document is a product manual, the title field might contain 'Product Manual' or a similar descriptive title.<br>You can find this parameter in the `input.knowledgeSearch.topK[0].sourceMetaData.title` Input object.                                           | no        |
| url       | The document's source, like the website or location where the information was obtained. When a user requests the information source, the virtual agent displays a link to the source in the response message. This parameter enables users to access the source for more details or verification. For example, if the document's information came from your company's website, the URL field would contain the website's URL. <br>You can find this parameter in the `input.knowledgeSearch.topK[0].sourceMetaData.url` Input object. | no        |

#### Example

```txt
`version: 1`
`title: Cognigy xApps FAQs`
`url: https://www.cognigy.com`
```

### Body

The body contains paragraphs that include headers, clear and informative text, and relevant metadata.
Each paragraph is equal to one chunk.

Each paragraph should be separated by a single line.

#### Headers

Headers serve as titles for each paragraph and should accurately represent the question that a user might have in mind. 

Well-crafted headers help virtual agents quickly identify the topic of the paragraph and decide whether the content matches a user's request or not.

For instance, if the content is about xApp architecture, a header could be **How is the xApps architecture designed?** reflecting the specific topic covered in that paragraph.

The symbol `#` determines a title of a paragraph.

#### Text

Text is a main part of the paragraph, which is where you provide answers or convey knowledge to the user.
Ensure that the text is clear, concise, and directly addresses the question or topic indicated by the header.
Readers rely on the text to find the information they seek, so clarity and accuracy are crucial.

For example, if the header is **How is the xApps architecture designed?** the text should explain the principles and methods used in designing the xApps architecture.

#### Chunk Metadata

Metadata is additional information associated with a paragraph and can be found in the `input.knowledgeSearch.topK[0].chunkMetaData` Input object. It allows you to provide context-related details that enhance the user's understanding or engagement with the content. Metadata is presented in a key-value format, offering versatility in the type of content you can include.

Common metadata elements might include:

- URLs. To link to external sources or provide additional reading material.
- Images. To illustrate concepts or provide visual aids.
- Videos. To supplement the text with multimedia content.
- References. To cite sources or related articles for further exploration.

Including metadata enriches your content and can make it more engaging and informative for users. For instance, if your paragraph discusses the xApp Architecture topic, you could include metadata with links to related documentation URLs, images of architecture diagrams, or additional detailed information that may interest a limited number of users. Reusing such information can be beneficial when you use the 'Search only' type in a node or the 'Knowledge Search' node.

You can create your types of elements for metadata, for example, `details: For more information, contact our support team`.

To learn about metadata key-limits, go to [Limitations](overview.md#limitations) section.

#### Example

```txt

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