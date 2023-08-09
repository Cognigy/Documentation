---
 title: "Attachments"
 slug: "attachments" 
 hidden: false 
---
# Attachments

## Overview
****Note:** Description of Attachments, brief summary, use cases (How can these help our users?)

Attachments are files or documents that are sent or received during a conversation between a human agent and a user.

These attachments can include various file types; `jpeg`, `jpg`, `png`, `docx`, `wav`, `ogg`, `pdf`.

Attachments can provide additional information or media, for example: an invoice or a photo related to the issue a customer is facing.

In Live Agent you can perform the following actions with Attachments:

- Upload Attachments
- Request Attachments
- Download Attachments
- Delete Attachments
- Filter Attachments
- Open the Conversation of Attachments

## How to Upload or Request an Attachment

### How to Upload

To upload a file in a conversation within Live Agent, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. In the **Inboxes** column, select an Inbox.
4. Select your conversation.
5. At the bottom of the conversation chat, in the **Reply to User** section, click **Attach files**.
6. In the opened window, select the file you want to upload and click **Open**.
7. When the file is uploaded, click **Send**.

The file will be sent to the user and will appear in the chat. The user can download this attachment.

### How to Request an Attachment

To request an attachment in a conversation within Live Agent, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. In the **Inboxes** column, select an Inbox.
4. Select your conversation.
5. At the bottom of the conversation chat, in the **Reply to User** section, click **Request file**.
6. In the opened window, click **Send**. The file will be requested from the user and the request will appear in the chat.
7. Wait for the attachment to be sent by the user. The file will appear in the chat. (Need to verify this after testing)

When the file has been uploaded, you can view and download this file directly from the chat.

!!! Note When using a Webchat Endpoint, you need to to use the [File Upload plugin](https://github.com/Cognigy/WebchatPlugins/tree/master/plugins/file-upload). 

## How to download an Attachment

To download an attachment within Live Agent, this can be done either in a conversation or the Attachments page.

**Note: Use tabs here (like in the OData page)**

(Attachments page)
1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. Go to **Attachments**.
4. Go to the file you want to download.
5. In the **ACTIONS** column, click **Download**.  

The file will be opened in a new tab of your browser. Click on your file to save it to your local device.

(Conversation)

## How to delete an Attachment

To delete an attachment within Live Agent, this can be done in the Attachments page.

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. Go to **Attachments**.
4. Go to the file you want to download.
5. In the **ACTIONS** column, click **Delete**.  
6. Confirm the deletion.

The file will be deleted from the Attachments page and will no longer be available in the conversation where it was uploaded.

## How to Filter Attachments

To filter attachments within Live Agent, this can be done in the Attachments page.

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. Go to **Attachments**.
4. On the **Attachments** page, click **Filter Attachments**
5. In the **Filter Attachments** window, select the options you need to filter by: 
- **Cognigy Session ID**
- **Cognigy User ID**
- **Filename**
6. Enter the value you need to filter by and click **Apply filters**.

Optionally, you can add additional filters by clicking  **+ Add Filter**.

The Attachments page will only display results that match the applied filter.

To drop the filter, click **Clear Filters**.

## How to open the source of the Attachment

The source can be Inbox, Conversation, or Cognigy Session ID

To investigate a conversation or Inbox where an attachment was uploaded, this can be done in the Attachments page.

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. Go to **Attachments**.
4. Go to the row of the file you want to investigate.
5. On this row, click one of the following links:
- **INBOX** - This will navigate to the Inbox of the conversation where the attachment was uploaded.
- **CONVERSATIONS** - This will navigate to the conversation where the attachment was uploaded.
- **COGNIGY SESSION ID** - This will navigate to the conversation where the attachment was uploaded.