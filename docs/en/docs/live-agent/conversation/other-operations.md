---
title: "Other Operations"
slug: "other-operations"
description: ""
hidden: false
---

# Other Operations

Step-by-step instructions for the following cases:

## Mute / Unmute Conversation

## Send a conversation Transcript by email

_### Sending E-mails_
<div class="divider"></div>


To send a copy of the current conversation, click on the button labeled Send Transcript, placed in the top right corner.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-20.png" width="100%" alt="Live Agent Contact Details Menu" />
  <figcaption>Send transcript button</figcaption>
</figure>


A screen opens up which allows an email to be sent to Agents in the Team. The chat transcript can also be sent to the customer or another selected e-mail address.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-21.png" width="100%" alt="Live Agent Conversation Transcript Dialog" />
  <figcaption>Conversation Transcript Dialog</figcaption>
</figure>


Select your desired option and click on Submit. A message will be displayed "The chat transcript was sent successfully". The chosen recipient will receive the chat transcript in their email inbox.





## Clear Conversation History

## Enable Agent Masking 

...when the end user does not see a name and an image of the human agent in the chat.

## Notifications

Send a notification when something has happened in the conversation.




## Private Chat with Agents
<div class="divider"></div>

There is an option to discuss the customer's Conversation with another Agent, should you need some more clarification or assistance. This option is available beside the Reply tab, labeled Private Note.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-15.png" width="100%" alt="Live Agent Private Chat" />
  <figcaption>Private Chat with Agents</figcaption>
</figure>


Type '@' in the Private Note window, and all Agents who have been added to this Team will be listed. Select an Agent and type in a message to consult with the selected Agent.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-16.png" width="100%" alt="Live Agent Private Chat 2" />
  <figcaption>Private Chat with Agent -2</figcaption>
</figure>


Click on Add Note to send the message. You can see a locked sign on the message that has been sent. This message will not be visible to the customer.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-17.png" width="100%" alt="Live Agent Private Message" />
  <figcaption>Private Message with Agent</figcaption>
</figure>


The second Agent addressed in the private note will receive a notification in their account.

Replies sent by the second Agent will be visible in the Private Note window.




### Delete Private Note
<div class="divider"></div>
There is an option to delete the private note which you have already sent. Click on the 3 dots(...) beside the sent message.
An option is available to copy, or to delete the private note.
Click on Delete. The private note will be deleted.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-18.png" width="100%" alt="Live Agent Delete Message" />
  <figcaption>Delete Message</figcaption>
</figure>

## Request File Upload

By default, human agents cannot request files from users. To enable this feature, you need to install the [File Upload](https://github.com/Cognigy/WebchatPlugins/tree/master/plugins/file-upload) plugin in the [Webchat Endpoint](../../ai/endpoints/webchat/deploy-webchat-endpoint.md#persistent-menu).

File requirements:

- Supported File Types are jpeg, jpg, png, docx, wav, ogg, pdf.
- Maximum file size is 40MB.

To request a file, follow these steps:

1. Click the **Request file** icon at the bottom of the Live Agent reply box. 

    <figure>
    <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-24.png" width="100%" alt="Live Agent request file upload" />
      <figcaption>Request file upload</figcaption>
    </figure>

2. Confirm that you want to send it to the customer to enable the file upload.

    <figure>
    <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-25.png" width="100%" alt="Live Agent request file upload confirm" />
      <figcaption>Request file upload confirm</figcaption>
    </figure>

A message should appear in the chat indicating that the file has been requested.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-26.png" width="100%" alt="Live Agent request file upload message" />
  <figcaption>Request file upload message</figcaption>
</figure>

Now the customer should see a button to open a file upload dialog.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-27.png" width="100%" alt="Live Agent request file upload webchat" />
  <figcaption>Request file upload Webchat</figcaption>
</figure>

After uploading the file, it should be reflected in the Webchat and the Live Agent and the file should be ready for download on the Live Agent side.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-28.png" width="100%" alt="Live Agent request file upload webchat completed" />
  <figcaption>Request file upload in Webchat completed</figcaption>
</figure>

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-29.png" width="100%" alt="Live Agent request file upload completed" />
  <figcaption>Request file upload completed in Live Agent</figcaption>
</figure>




