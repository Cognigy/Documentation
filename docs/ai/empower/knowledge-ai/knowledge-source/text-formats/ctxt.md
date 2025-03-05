---
title: "Cognigy Text Format"
slug: "cognigy-text-format"
description: "Cognigy text format (ctxt) is a specialized text format developed by Cognigy for the Cognigy Knowledge AI solution."
hidden: false
tags: ['CTXT Format', 'Text Formatting', 'Knowledge Chunks', 'Metadata', 'Content Structure']
---

# Cognigy Text Format

[![Version badge](https://img.shields.io/badge/Updated in-v4.63-blue.svg)](../../../../../release-notes/4.63.md)

The _Cognigy Text_ format (CTXT) is a file format developed by Cognigy for extracting knowledge with Knowledge AI. You can segment the text in a CTXT file into [Knowledge Chunks](../../knowledge-chunk/knowledge-chunk.md) before uploading the file as a [Knowledge Source](../knowledge-source.md).

You can edit CTXT files in text editors, such as [Visual Studio Code](https://code.visualstudio.com/) and [Notepad++](https://notepad-plus-plus.org/downloads/). Text editors improve the visual representation of Markdown syntax and make it easier to read a CTXT file. To make CTXT easier to read, you need to configure the text editor to highlight Markdown syntax:

- **Visual Studio Code** — access the [Change Language Mode](https://code.visualstudio.com/docs/languages/overview#_change-the-language-for-the-selected-file) section and select Markdown.
- **Notepad++** — select Markdown as a language using a [User Defined Language file](https://npp-user-manual.org/docs/user-defined-language-system/).

## Restrictions and Requirements

The CTXT format has the following formatting requirements:

- The file extension must be `.ctxt`.
- You must use the [CTXT structure](#ctxt-structure).
- You must use Markdown syntax.

And the following naming restrictions:

- The file name can have up to 200 characters.
- The file name can't start or end with a space.
- The file name can't contain `/`, `\`, `:`, `*`, `?`, `"`, `<`, `>`, `|`, or `¥`.

## Content Segmentation Basic Rules

To segment text into Knowledge Chunks in a CTXT, you need to meet the following rules:

- The first Knowledge Chunk starts immediately after the first double line break in the CTXT file.
- Double line breaks separate text into Knowledge Chunks.
- CTXT files must comply with [Knowledge Chunks limitations](../../knowledge-chunk/knowledge-chunk.md#limitations).

## CTXT Structure

A CTXT file must include a [header](#header) and a [body](#body).

??? info "CTXT file sample"

    ```markdown
    `version: 1`
    `title: Cognigy xApps FAQs`
    `url: https://www.cognigy.com`
    `tags: [cognigy, xapps, architecture]`
    
    What is Cognigy?
    Cognigy is a leading enterprise software provider for Conversational AI automation. Our platform, Cognigy.AI, automates customer and employee communications. Available in on-premises and SaaS environments, Cognigy.AI enables enterprises to have natural language conversations with their users on any channel - webchat, SMS, voice and mobile apps - and in any language. Cognigy.AI powers intelligent voice and chatbots that communicate consistently and accurately beyond simple FAQ, resulting in reduced contact center costs and increased efficiency while improving user experiences. The worldwide client portfolio of Cognigy includes Toyota, E.ON, Lufthansa, and many more.
    `url: https://www.cognigy.com/`
    
    What are xApps?
    Cognigy xApps are infinitely flexible micro-web applications for customer self-service. xApps can be used as a stand-alone application or complimentary to any channel to enhance virtual and human agents' capabilities. In multi-channel scenarios xApps close the experience gaps of existing voice and messaging channels to enable dynamic, fully connected customer engagements by helping to overcome limitations of communication channels like voice, Webchat Widget or Microsoft Teams compromising user experiences.
    `url: https://docs.cognigy.com/ai/xApp/overview/`
    
    What are use cases of xApps
    The use cases are endless as xApps are infinitely flexible due to the fact that they are essentially micro-web applications. Three potential use cases are listed here:
    - Authentication via Credentials: With xApps, you can allow users to authenticate using various methods such as email addresses, user numbers, or other identification details. Users can securely verify their identity and gain access to specific services or information.
    - Select a flight seat: With xApps, you can offer users an interface to choose their preferred seat for their flight. Users can view the available seats and select the seat of their choice, enhancing their travel experience.
    - Share location: With xApps, you can allow users to share their device's location information. This use case can be useful in various scenarios, such as providing location-based services, tracking deliveries, or finding nearby resources.
    `url: https://docs.cognigy.com/ai/xApp/use-cases/`
    
    How do xApps work?
    The behavior of xApps is controlled via a set of xApp Flow Nodes. An xApp session can be initialized via the "xApp: Init Session" Node. The xApp session can be updated with the actual xApp Pages in two ways, by providing HTML code via the "xApp: Show HTML" Node or by specifying an Adaptive Card in JSON via the "xApp: Show Adaptive Card" Node. Alternatively, for more customization, you can create your own Node to update the xApps state by implementing and uploading an Extension. To wait for the xApp user Input in a Flow, use the Question or the Optional Question Node. The xApp type of the Question Node is only considered to be answered if submitted results are available as part of the Input.
    `url: https://docs.cognigy.com/ai/xApp/build-an-xApp/`
    
    How is the xApps architecture designed?
    The xApp Shell Page loads its assets (HTML/CSS/JS) by requesting static files via HTTP/HTTPs 1.1 requests to service-static-files and establishes a WebSocket connection (via Socket.io) to serviceapp-session-manager to retrieve information about xApp sessions. This information includes an async event to initialize an xApp session, which creates a unique URL, and specifies which xApp will be displayed in a specific xApp session. The Elastic Load Balancer helps distribute incoming traffic, while Traefik dynamically routes traffic to backend servers based on specific requirements. The serviceapp-session-manager updates the xApp session state in the App Session DB, and the WebSocket transfers data to the Shell page, which loads xApps and provides data to the SDK.
    `url: https://docs.cognigy.com/ai/xApp/architecture/`
    `image: https://docs.cognigy.com/ai/images/xApp/architecture.png`       
    ```

You can download the [previous CTXT file sample](https://docs.cognigy.com/_assets/ai/empower/knowledge-ai/cognigy-sample.ctxt) for testing Knowledge AI.

### Header

The header of a CTXT file contains the [Source metadata](../knowledge-source.md#source-metadata) at the top of the CTXT file. In CTXT files, you must format Source metadata as key-value pairs wrapped by backticks. The keys refer to the information the Source metadata holds, and the value is the information. For example, in `title: Cognigy xApps FAQs`, `title` is the key and `Cognigy xApps FAQs` is the value.

#### Limitations

- You can add up to 20 Source metadata pairs per Knowledge Source.
- Source metadata can have up to 1000 characters.

#### Example

```markdown
`version: 1`
`title: Cognigy xApps FAQs`
`url: https://www.cognigy.com`
`tags: [cognigy, xapps, architecture]`
```

### Body

The body of a CTXT file contains [Knowledge Chunk text](../../knowledge-chunk/knowledge-chunk.md#knowledge-chunk-text) and [Chunk metadata](../../knowledge-chunk/knowledge-chunk.md#chunk-metadata). Knowledge Chunks must be separated by double line breaks.

#### Limitations

- You can add up to 1000 Knowledge Chunks per CTXT file.
- You can add up to 20 Chunk metadata pairs per CTXT file.
- Knowledge Chunk text can have up to 2000 characters.
- Chunk metadata can have up to 1000 characters

#### Examples

Example 1:

```markdown
What are use cases of xApps?
The use cases are endless as xApps are infinitely flexible due to the fact that they are essentially micro-web applications. Three potential use cases are listed here:
- Authentication via Credentials: With xApps, you can allow users to authenticate using various methods such as email addresses, user numbers, or other identification details. Users can securely verify their identity and gain access to specific services or information.
- Select a flight seat: With xApps, you can offer users an interface to choose their preferred seat for their flight. Users can view the available seats and select the seat of their choice, enhancing their travel experience.
- Share location: With xApps, you can allow users to share their device's location information. This use case can be useful in various scenarios, such as providing location-based services, tracking deliveries, or finding nearby resources.
`url: https://docs.cognigy.com/ai/xApp/use-cases/`
```

Example 2:

```markdown
How is the xApps architecture designed?
The xApp Shell Page loads its assets (HTML/CSS/JS) by requesting static files via HTTP/HTTPs 1.1 requests to service-static-files and establishes a WebSocket connection (via Socket.io) to serviceapp-session-manager to retrieve information about xApp sessions. This information includes an async event to initialize an xApp session, which creates a unique URL, and specifies which xApp will be displayed in a specific xApp session. The Elastic Load Balancer helps distribute incoming traffic, while Traefik dynamically routes traffic to backend servers based on specific requirements. The serviceapp-session-manager updates the xApp session state in the App Session DB, and the WebSocket transfers data to the Shell page, which loads xApps and provides data to the SDK.
`url: https://docs.cognigy.com/ai/xApp/architecture/`
`image: https://docs.cognigy.com/ai/images/xApp/architecture.png`
```

## More Information

- [Knowledge AI Overview](../../overview.md)
- [Knowledge Source](../knowledge-source.md)
- [Knowledge Chunk](../../knowledge-chunk/knowledge-chunk.md)
- [Search Extract Output Node](../../../../build/node-reference/other-nodes/search-extract-output.md)
- [Web Page](web-page.md)
- [PDF](pdf.md)
