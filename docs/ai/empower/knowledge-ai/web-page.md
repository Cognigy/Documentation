---
title: "Web Page"
slug: "web-page"
description: "Web page source knowledge for Cognigy Knowledge AI"
hidden: false
---

# Web Page

[![Version badge](https://img.shields.io/badge/Updated in-v4.73-blue.svg)](../../../release-notes/4.73.md)

Knowledge AI supports using a web page as a type when creating a new Knowledge Source. 

## Restrictions

Using a Web Page as a Knowledge Source has a current set of restrictions:

- All visible text on the page, including items such as cookie notices, will be included in the result.
- The content must be hosted on a publicly accessible website, reachable from the Cognigy environment.
- The content hosted on websites with anti-crawling measures cannot be accessed.
- No images or OCR (Optical Character Recognition) capabilities are supported.

## How to Ingest a Web Page

Before using a web page as a source, check if at least one [Knowledge Store](overview.md#knowledge-store) is created in your Agent:

=== "There are no Knowledge Stores"
     1. In the left-side menu of the Project, go to **Build > Knowledge**. The Knowledge AI wizard will be opened.
     2. Continue following the wizard instructions.
     3. Specify a unique name, select an [embedding model](../llms/model-support-by-feature.md) if you did not add it before.
     4. Click **Next**.
     5. In the **Upload Knowledge** step, select the **Web Page** option.
     6. Copy and paste the URL of the web page you want to ingest into the **URL** field.
     7. _(Optional)_ Add a description to provide additional context or notes about the web page.
     8. Click **Next**.
     9. _(Optional)_ In the **Configure Answer Extraction Model** section, select the additional model if you want to extract key points and output the search result as text or an adaptive card. Click **Configure** and enter model credentials.
     10. _(Optional)_ When the additional model is configured, click **Create Flow**. A Flow with the **Search Extract Output** Node will be created.
     11. Click **Next**. A task will be initiated to parse website content.
     12. Wait until the process successfully finishes, then click **Finish**.
     13. A new Knowledge Store with the default name `url` appears on the Knowledge Store page. You can change its initial name by hovering the cursor over the Knowledge Store entry on the right side, clicking ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) and selecting **Edit**.
     14. Click the name of your Knowledge Store that you created to view the Knowledge Source.

=== "There is at least one Knowledge Store"
     1. In the left-side menu of the Project, go to **Build > Knowledge**.
     2. Click **+ New Knowledge Store** and enter a name and optional description.
     3. Click **Save** and then click **New Knowledge Sources**.
     4. Click the drop-down menu under **Type** and select **Web Page**.
     5. Copy and paste the URL of the web page you want to ingest into the **URL** field.
     6. _(Optional)_ Add a description to provide additional context or notes about the web page, and include Source Tags.
     7. Click **Create**. A new entry will appear in the Knowledge Store, and a task will be initiated to parse website content.
     8. Wait until the status column shows a green checkmark.

Now, you can click the name of your Knowledge Source and inspect the results in the [Chunk Editor](overview.md#chunk-editor).

## Chunking Process

When ingesting a web page, the Knowledge AI chunking process will perform the following:

1. Visit the URL as a page in a browser session.
2. Scroll to the bottom of the web page. 
3. Access lazy-loaded[^*] content by checking for any text changes until the page is stable and no longer loading additional text.
4. Generate Knowledge Source content based on the visible text result.

The web page content will be imported into a Knowledge Source once. The source is not automatically updated to reflect future content changes on the web page.

## More Information

- [Knowledge AI Overview](overview.md)
- [Create a Knowledge Store](overview.md#create-a-knowledge-store)
- [Chunk Editor](overview.md#chunk-editor)
- [Cognigy Text Format](ctxt.md)
- [PDF](pdf.md)
  
[^*]: Lazy loading is a technique in web development that defers the loading of non-critical or non-visible content until it is needed, improving page load times and user experience.