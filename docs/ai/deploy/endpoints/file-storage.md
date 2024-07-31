---
title: "File Storage"
slug: "file-storage"
description: "For some Cognigy.AI Endpoints, you can configure file uploading to enable users to submit documents, images, or other types of files for processing or storage within your conversational AI workflows."
hidden: false
---

# File Storage

By default, users cannot attach files to chat messages.
To enable file uploads via drag and drop or the Attach file button,
you must connect your Endpoint to a third-party storage provider.

Enabling file uploads in your Endpoint enhances the user experience by allowing seamless sharing of documents,
images, and other files within the chat.
Users can upload screenshots to illustrate technical issues and share various documents such as contracts,
invoices, order confirmations, and photos of purchased goods.

After uploading a file to the chat interface, the file will be saved in the storage of your third-party provider and will be accessible for viewing by both the sender and the recipient in the chat.

## Supported Endpoints

The File Storage section is supported by the following Endpoints:

- [8x8](../endpoint-reference/8x8.md)
- [Alexa](../endpoint-reference/amazon-alexa.md)
- [Webchat v2](../../../webchat/v2/overview.md)
- [Webchat v3](../../../webchat/v3/overview.md)
- [WhatsApp](../endpoint-reference/whatsapp.md)

## Create a Connection to a File Storage Provider

To enable file uploads, connect to one of the following file storage providers:

{! _includes/ai/file-storage.md !}

After setting up,
open the chat in test mode
and upload a file to the chat interface by either dragging it from your computer or using the Attach file button.
The file will begin uploading automatically.

For testing file uploads for the Webchat v2 and Webchat v3 Endpoints, use [Demo Webchat](../../../webchat/demo.md).