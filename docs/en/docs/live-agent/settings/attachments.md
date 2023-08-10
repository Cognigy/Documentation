---
 title: "Attachments"
 slug: "attachments" 
 hidden: false 
---
# Attachments


_Attachments_ are files or documents that are sent or received during a conversation between a human agent and a user.

These attachments can include various file types; `jpeg`, `jpg`, `png`, `docx`, `wav`, `ogg`, `pdf`.

Attachments can provide additional information or media, for example: an invoice or a photo related to the issue a customer is facing.


## Upload or Request an Attachment

###  Upload an Attachment

To upload a file in a conversation within Live Agent, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. In the **Inboxes** column, select an Inbox.
4. Select your conversation.
5. At the bottom of the conversation chat, in the **Reply to User** section, click **Attach files**.
6. In the opened window, select the file you want to upload and click **Open**.
7. When the file is uploaded, click **Send**.

The file will be sent to the user and will appear in the chat. The user can download this attachment.

### Request an Attachment

When using a Webchat Endpoint with Live Agent, human agents can request an attachment from a user.

Other Endpoint channels do not support the attachment request functionality. Users can still upload a file using their built in app file upload features.

To request an attachment in a conversation within Live Agent, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. In the **Inboxes** column, select an Inbox.
4. Select your conversation.
5. At the bottom of the conversation chat, in the **Reply to User** section, click **Request file**.
6. In the opened window, click **Send**. The file will be requested from the user and the request will appear in the chat.
7. Wait for the attachment to be sent by the user. The file will appear in the chat. (Need to verify this after testing)

When the file has been uploaded, you can view and download this file directly from the chat.

!!! note
  If you use [Cognigy Webchat](https://docs.cognigy.com/ai/endpoints/webchat/webchat/), you will also need to add the [File Upload plugin](https://github.com/Cognigy/WebchatPlugins/tree/master/plugins/file-upload) to the Webchat Endpoint to upload files. 

## Download an Attachment

To download an attachment within Live Agent, this can be done either in a conversation or the **Attachments** page.

=== "Attachment Page"

    1. Go to Live Agent.
    2. On the left side of the screen, select **Settings**.
    3. Go to **Attachments**.
    4. Go to the file you want to download.
    5. In the **ACTIONS** column, click **Download**.  


=== "Conversation Page"

    1. Go to Live Agent.
    2. On the left side of the screen, select **Conversations**.
    3. In the **Inboxes** column, select an Inbox.
    4. Select your conversation.
    5. Find the attachment in the conversation, click **Download**.


The file will be opened in a new tab of your browser. Click on your file to save it to your local device.

## Delete an Attachment

To delete an attachment within Live Agent, this can be done in the Attachments page.

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. Go to **Attachments**.
4. Go to the file you want to download.
5. In the **ACTIONS** column, click **Delete**.  
6. Confirm the deletion.

The file will be deleted from the Attachments page and will no longer be available in the conversation where it was uploaded.

## Filter Attachments

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

The **Attachments** page will only display results that match the applied filter.

To drop the filter, click **Clear Filters**.

## Open the source of the Attachment

The source can be Inbox, Conversation, or Cognigy Session ID.

To investigate a conversation or Inbox where an attachment was uploaded, this can be done in the Attachments page.

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. Go to **Attachments**.
4. Go to the row of the file you want to investigate.
5. On this row, click one of the following links:
    - **INBOX** - the option will navigate you to the Inbox of the conversation where the attachment was uploaded.
    - **CONVERSATIONS** - the option will navigate you to the conversation where the attachment was uploaded.
    - **COGNIGY SESSION ID** - the option will navigate you to the conversation where the attachment was uploaded.