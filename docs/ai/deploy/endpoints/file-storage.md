---
title: "File Storage"
slug: "file-storage"
description: "For some Cognigy.AI Endpoints, you can configure file uploading to enable users to submit documents, images, or other types of files for processing or storage within your conversational AI workflows."
hidden: false
tags:
  - upload files
  - file storage
  - attachments
---

# File Storage

[![Version badge](https://img.shields.io/badge/Updated in-v2025.14-blue.svg)](../../../release-notes/2025.14.md)

By default, users can't attach files to chat messages. However, you can configure a _File Storage_ in the Endpoint settings that allows users to upload files in the chat interface. To configure the file storage, you need to create a connection to a third-party storage provider.

After uploading a file to the chat interface, the file is saved in the third-party storage and can be viewed by both the sender and the recipient.

## Key Features

- **Improved Conversational Experience**. Users can upload screenshots to illustrate technical issues and share various documents, such as contracts, invoices, order confirmations, and photos of purchased goods. File uploads allow for richer interactions and more capabilities for your Flow.
- **File Manipulation**. You can retrieve file data, resize images, and validate files.
- **Security Measures**. Cognigy.AI performs a virus scan on the file before uploading it to the cloud storage provider, checking for potential malware or viruses, and preventing harmful content from being stored or shared through the cloud.

## Prerequisites

- You have access to one of the following third-party storage providers:
    - [Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)
    - [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
    - [Google Cloud Storage](https://cloud.google.com/storage/docs/)
- Files in the third-party storage are publicly accessible.
    
## Restrictions

- Only the following Endpoints support file uploads:
    - [8x8](../endpoint-reference/8x8.md)
    - [Webchat v2](../../../webchat/v2/overview.md)
    - [Webchat v3](../../../webchat/v3/overview.md)
    - [WhatsApp](../endpoint-reference/whatsapp.md)

## How to Use the File Storage

## Create Connections to File Storage Providers

To enable file uploads, connect to one of the following file storage providers:

{! _includes/ai/file-storage.md !}

To test file uploads for the Webchat v2 and Webchat v3 Endpoints, use [Demo Webchat](../../../webchat/demo.md). Upload a file in the Demo Webchat interface by either dragging it from your computer or clicking ![attachment-icon](../../../_assets/icons/attach-files.svg).

For other Endpoints, testing only works in the production environment. Upload a file to the chat interface and go to the file storage on your provider's side. If the file appears in the storage, the file was successfully uploaded.

### Access the File Storage through the Input Object

By default, the data of uploaded files is stored in the `input.data.attachments` array. Each file object in this array contains a file name, type, and URL pointing to the uploaded file:

```json
{
  "name": "example_file.png",
  "url": "https://example.com/uploads/example_file.png",
  "type": "image"
}
```

??? info "Use Cases"

    | Use Case                    | Description                                                                                                                        | CognigyScript                                 | Example Output                                 |
    |-----------------------------|------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|------------------------------------------------|
    | Confirm uploaded files      | To ensure the user uploaded the correct file, display the file name for confirmation.                                              | `{{"{{input.data.attachments[0].name}}"}}`    | `example_file.png`                             |
    | Provide the direct file URL | Share the direct URL of the uploaded file with the user.                                                                           | `{{"{{input.data.attachments[0].url}}"}}`     | `https://example.com/uploads/example_file.png` |
    | Validate attachments        | To check if a valid file has been uploaded in the most recent user input, verify the length of the `input.data.attachments` array. | `{{"{{input.data.attachments.length}}"}} > 0` | -                                              |

### Resize Images

For image file types, such as JPEG, PNG, GIF, WebP, and others, you can automatically resize images based on the query parameters in the URL. 
The available parameters are in the table.

| Query Parameter      | Description                                             |
|----------------------|---------------------------------------------------------|
| `maxWidth`           | The maximum width of the image.                         |
| `maxHeight`          | The maximum height of the image.                        |
| `maxFileSizeInBytes` | The maximum file size of the image, specified in bytes. |

??? info "Use Cases"

    | Use Case                      | Description                                                                                                                                        | Example                                                                                                 | URL Example                                                             |
    |-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
    | Attach image without changes  | An attachment is uploaded with the original URL.                                                                                                   | The image has dimensions of 3840 x 2160 and a size of 8 MB.                                             | `https://files-trial.cognigy.ai/123/456/789`                            |
    | Resize to specific dimensions | If you provide the `maxWidth` and `maxHeight` parameters, the image is resized to fit these parameters while maintaining the aspect ratio.         | To resize the image to a maximum of 640x480, append the `maxWidth=640` and `maxHeight=480` parameters.  | `https://files-trial.cognigy.ai/123/456/789?maxWidth=640&maxHeight=480` |
    | Limit file size               | If you provide the `maxFileSizeInBytes` parameter, the image quality is gradually reduced until the image file size meets the specified file size. | To ensure the image is less than 100 KB (102,400 bytes), use the `maxFileSizeInBytes=102400` parameter. | `https://files-trial.cognigy.ai/123/456/789?maxFileSizeInBytes=102400`  |

    **HTTP Error Codes**

    | Error Code | Description                                                                                                                             |
    |------------|-----------------------------------------------------------------------------------------------------------------------------------------|
    | `500`      | Returns if the image can't be resized according to the specified parameters. For example, if the `maxFileSizeInBytes` can't be reached. |

## More Information

- [Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)
- [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
- [Google Cloud Storage](https://cloud.google.com/storage/docs)
- [Create a Bucket in Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal#create-a-container)
- [Create a Bucket in Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html)
- [Create a Bucket in Google Cloud Storage](https://cloud.google.com/storage/docs/creating-buckets)