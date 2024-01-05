---
title: "Web Page"
slug: "web-page"
description: "Web page source knowledge for Cognigy Knowledge AI"
hidden: false
---

# Web Page

[![Version badge](https://img.shields.io/badge/Updated in-v4.67-blue.svg)](../../release-notes/4.67.md)

Knowledge AI supports using a web page as a type when creating a new Knowledge Source. 

## Chunking Process

To use a web page as a source when creating a new Knowledge Source, select Web Page as a type and provide the URL of the page in the provided field.

After clicking Create, the chunking process will perform the following:

1. Visit the URL as a page of a browser session
2. Scroll to the bottom of a web page 
3. Access "lazy-loaded" content by checking for any text changes until the page is stable and no longer loading additional text
4. Generate Knowledge Source content based on the result of visible text

The web page content will be imported into a knowledge source once. The source is not automatically updated to reflect future content changes on the web page.

## Current Limitations

Using a Web Page as a knowledge source has a current set of limitations:

- Any text that is visible on the page to the user will be included in the result. This includes cookie notices, for example
- The content has to be a public facing website, accessible from the Cognigy environment
- No images or OCR capabilities are supported

## More Information

- [Knowledge AI Overview](overview.md)
- [Cognigy Text Format](ctxt.md)
- [PDF](pdf.md)