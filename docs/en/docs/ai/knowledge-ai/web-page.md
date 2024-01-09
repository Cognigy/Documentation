---
title: "Web Page"
slug: "web-page"
description: "Web page source knowledge for Cognigy Knowledge AI"
hidden: false
---

# Web Page

[![Version badge](https://img.shields.io/badge/Updated in-v4.67-blue.svg)](../../release-notes/4.67.md)

Knowledge AI supports using a web page as a type when creating a new Knowledge Source. 

## Restrictions

Using a Web Page as a knowledge source has a current set of restrictions:

- Any text that is visible on the page to the user will be included in the result. This includes cookie notices, for example
- The content has to be a public facing website, accessible from the Cognigy environment
- No images or OCR capabilities are supported

## How to Ingest a Web Page

Before you can use a web page as a source, you must first follow the steps to [Create a Knowledge Store](overview.md#create-a-knowledge-store).

To ingest a web page as a new Knowledge Store, perform the following steps:

1. In the left-side menu, navigate to **Build** and then select **Knowledge**.
2. Click **+ New Knowledge Store** and enter a name and optional description.
3. Click **Save** and then click **New Knowledge Sources**.
4. Click the drop-down menu under **Type** and select **Web Page**.
5. Copy and paste the URL of the web page you want to ingest into the **URL** field.
6. _(Optional)_ Add a Description and Source Tags.
7. Click **Create**. A new entry will appear in the Knowledge Store, and a task will be started to Parse Website Content.
8. Wait until the status column shows a green checkmark.

You can now click the name of your Knowledge Source and inspect the results in the [Chunk Editor](overview.md#chunk-editor).

## Chunking Process

When ingesting a web page, the Knowledge AI chunking process will perform the following:

1. Visit the URL as a page of a browser session
2. Scroll to the bottom of a web page 
3. Access "lazy-loaded" content by checking for any text changes until the page is stable and no longer loading additional text
4. Generate Knowledge Source content based on the result of visible text

The web page content will be imported into a knowledge source once. The source is not automatically updated to reflect future content changes on the web page.

## More Information

- [Knowledge AI Overview](overview.md)
- [Create a Knowledge Store](overview.md#create-a-knowledge-store)
- [Chunk Editor](overview.md#chunk-editor)
- [Cognigy Text Format](ctxt.md)
- [PDF](pdf.md)