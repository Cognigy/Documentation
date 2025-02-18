---
title: "File Storage"
slug: "file-storage"
description: "For some Cognigy.AI Endpoints, you can configure file uploading to enable users to submit documents, images, or other types of files for processing or storage within your conversational AI workflows."
hidden: false
---

# File Storage

[![Version badge](https://img.shields.io/badge/Updated in-v4.91-blue.svg)](../../../release-notes/4.91.md)

By default, users cannot attach files to chat messages.
To enable file uploads via drag and drop or the Attach file button,
you must connect your Endpoint to a third-party storage provider.

Enabling file uploads in your Endpoint enhances the user experience by allowing seamless sharing of documents,
images, and other files within the chat.
Users can upload screenshots to illustrate technical issues and share various documents such as contracts,
invoices, order confirmations, and photos of purchased goods.

After uploading a file to the chat interface, the file will be saved in the storage of your third-party provider and will be accessible for viewing by both the sender and the recipient in the chat.

## Supported Endpoints

You can use the File Storage section in the following Endpoints:

- [8x8](../endpoint-reference/8x8.md)
- [Webchat v2](../../../webchat/v2/overview.md)
- [Webchat v3](../../../webchat/v3/overview.md)
- [WhatsApp](../endpoint-reference/whatsapp.md)

## Security Measures

Cognigy.AI performs a virus scan on the file before uploading it to the cloud storage provider. 
This process ensures the file is checked for potential malware or viruses, helping to prevent harmful content from being stored or shared through the cloud.

## Create a Connection to a File Storage Provider

To enable file uploads, connect to one of the following file storage providers:

{! _includes/ai/file-storage.md !}

After setting up,
open the chat in test mode
and upload a file to the chat interface by either dragging it from your computer or using the Attach file button.
The file will begin uploading automatically.

To test file uploads for the Webchat v2 and Webchat v3 Endpoints, use [Demo Webchat](../../../webchat/demo.md).
For other Endpoints, testing only works in the production environment. 
Upload a file to the chat interface and go to the file storage on your provider's side.
If the file appears in the storage, then file uploads work correctly.

## Access Files in the Input Object

By default, uploaded files are recorded in the `input.data.attachments` array. 
Each file object in this array contains a file name, file type, and URL pointing to the uploaded file:

```json
{
  "name": "example_file.png",
  "url": "https://example.com/uploads/example_file.png",
  "type": "image"
}
```

### Use Cases

| Use Case                    | Description                                                                                                                        | CognigyScript                                 | Example Output                                 |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|------------------------------------------------|
| Confirm Uploaded Files      | To ensure the user uploaded the correct file, display the file name for confirmation.                                              | `{{"{{input.data.attachments[0].name}}"}}`    | `example_file.png`                             |
| Provide the Direct File URL | Share the direct URL of the uploaded file with the user.                                                                           | `{{"{{input.data.attachments[0].url}}"}}`     | `https://example.com/uploads/example_file.png` |
| Validate Attachments        | To check if a valid file has been uploaded in the most recent user input, verify the length of the `input.data.attachments` array. | `{{"{{input.data.attachments.length}}"}} > 0` | -                                              |

## Resize Images

For image file types, such as JPEG, PNG, GIF, WebP, and others, you can automatically resize images based on the query parameters in the URL. 
The available parameters are in the table.

| Query Parameter          | Description                                             |
|--------------------------|---------------------------------------------------------|
| `maxWidth`               | The maximum width of the image.                         |
| `maxHeight`              | The maximum height of the image.                        |
| `maxFileSizeInBytes`     | The maximum file size of the image, specified in bytes. |

#### Use Cases

| Use Case                      | Description                                                                                                                                       | Example                                                                                          | URL Example                                                             |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Use original Attachment URL   | An attachment is uploaded with the original URL.                                                                                                  | The image has dimensions of 3840 x 2160 and a size of 8 MB.                                      | `https://files-trial.cognigy.ai/123/456/789`                            |
| Resize to Specific Dimensions | When `maxWidth` and `maxHeight` parameters are provided, the image will be resized to fit within those bounds while maintaining its aspect ratio. | To resize the image to a maximum of 640x480, append the `maxWidth` and `maxHeight` parameters.   | `https://files-trial.cognigy.ai/123/456/789?maxWidth=640&maxHeight=480` |
| Limit File Size               | If the `maxFileSizeInBytes` parameter is provided, the image quality is gradually reduced until the image file size meets the specified limit.    | To ensure the image is less than 100 KB (102,400 bytes), use the `maxFileSizeInBytes` parameter. | `https://files-trial.cognigy.ai/123/456/789?maxFileSizeInBytes=102400`  |

#### HTTP Error Codes

| Error Code | Description                                                                                                                             |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| `500`      | Returns if the image can't be resized according to the specified parameters. For example, if the `maxFileSizeInBytes` can't be reached. |