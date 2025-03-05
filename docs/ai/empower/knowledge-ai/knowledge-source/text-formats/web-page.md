---
title: "Web Page"
slug: "web-page"
description: "Use web pages as Knowledge Sources for Knowledge AI."
hidden: false
tags: ['Web Scraping', 'Web Content', 'Text Extraction', 'Content Processing']
---

# Web Page

[![Version badge](https://img.shields.io/badge/Updated in-v4.73-blue.svg)](../../../../../release-notes/4.73.md)

Knowledge AI supports using web pages to create [Knowledge Sources](../knowledge-source.md).

## Restrictions

- The web page must be hosted on a publicly accessible website.
- When you create a Knowledge Source from a web page, Knowledge AI processes all visible text on the web page, including potentially unwanted text, such as cookie notices.
- Knowledge AI doesn't process web page content with anti-crawling measures.
- Knowledge AI doesn't support images or Optical Character Recognition (OCR) capabilities.

## Chunking Process

When processing a web page, Knowledge AI:

1. Visits the URL as a page in a browser session.
2. Scrolls to the bottom of the web page. 
3. Accesses lazy-loaded[^*] content by checking for any text changes until the web page is stable and no longer loads additional text.
4. Generates Knowledge Source content based on the visible text result.

Knowledge AI imports the web page content into a Knowledge Source once. If the web page you used as a source is updated and you want to include the new content in the web page, create a new Knowledge Source based on the updated web page.

## More Information

- [Knowledge AI Overview](../../overview.md)
- [Create a Knowledge Store](../../getting-started.md)
- [Chunk editor](../../knowledge-chunk/knowledge-chunk.md)
- [Cognigy Text Format](ctxt.md)
- [PDF](pdf.md)
  
[^*]: Lazy loading is a web development technique that delays loading non-critical or non-visible content until it is necessary. This technique improves web page loading times and user experience.