---
title: "Send Reply"
slug: "send-reply"
description: ""
hidden: false
---

# Send Responses

[![Version badge](https://img.shields.io/badge/Updated in-v4.59-blue.svg)](../../release-notes/4.59.md)

To respond to a user in the conversation chat, type your message in the **Reply** section.

For quick reply, you can use canned responses, variables, or a combination of both.

By default, you can send messages by pressing ++cmd+enter++ or ++ctrl+enter++ instead of clicking the **Send** button.
The ++enter++ key will be used for line breaks. If you want to change hotkey options, go to [Profile Settings](../profile-settings.md).

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/images/send-response.png" width="80%" alt="Live Agent Conversations Reply" />
  <figcaption>Reply to a Message</figcaption>
</figure>


## Audience



## Types of Responses

### What you can add within a Reply

Below is a list describing Conversation reply actions an Agent can take by clicking the following icons.

| Icon                                                                                                  | Description                                                                                              |
|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-9.png" width="50%" alt="" />  | **Show emoji selector** - This button allows a human agent to select and include an Emoji in the message.|
| <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-10.png" width="50%" alt="" /> | **Attach files** - This button allows  a human agent to select and include attachments in the message.   |
| <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-11.png" width="50%" alt="" /> | **Request file** - This button allows a human agent to request a file from the customer.                 |
| <img src="{{config.site_url}}live-agent/images/audio-icon.png" width="50%" alt="" />                  | **Record audio** - This button allows a human agent to send voice messages to the customer.              |
| <img src="{{config.site_url}}live-agent/images/link-icon.png" width="50%" alt="" />                   | **Insert link** - This button allows a human agent to send hyperlinked text to the customer.             |

### Quick Reply

For [quick reply](../../ai/endpoints/webchat/webchat-features.md#quick-replies) to a user in the conversation chat, you can use canned responses, variables, or a combination of both.

#### Send a Response with Variables

[![Version badge](https://img.shields.io/badge/Added in-v4.55-blue.svg)](../../release-notes/4.55.md)

Live Agent offers a limited list of variables for user contact profile data or human agent profile data that you can re-use in the **Reply** section. 

To include a variable, follow these steps:

1. Begin typing <code>&lcub;&lcub;</code> in the field. After that, a list of available variables will appear, allowing you to select the desired variable. 
2. Select a variable by using one of these methods:
    - Click on the desired variable.
    - Use the arrow keys on your keyboard to navigate to the variable, and then press **Enter**.<br>
    Alternatively, you can type out variables instead of selecting them from the suggestions.

The variable will be replaced with a value relevant to the current conversation.
For example, <code>&lcub;&lcub;contact.first_name&rcub;&rcub;</code> → `David`,
<code>&lcub;&lcub;conversation.id&rcub;&rcub;</code> → `3705`. If any of the variables do not have values, you will receive a corresponding warning.

Note that you cannot create a custom variable.

There is a list of available variables:

| Variable                | Description                                                                                                                                        |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `conversation.id`       | The ID of the current conversation.                                                                                                                |
| `contact.id`            | The ID belonging to a user who creates a conversation.                                                                                             |
| `contact.id`            | The user ID belonging to a user who creates a conversation.                                                                                        |
| `contact.name`          | The user's first and last names. If both are not specified in the profile, the default value `customer` will be used.                              |
| `contact.first_name`    | The user's first name. If it is not specified in the profile, the last name will be used. Otherwise, the default value `customer` will be applied. |
| `contact.last_name`     | The user's last name. If it is not specified in the profile, the first name will be used. Otherwise, the default value `customer` will be applied. |
| `contact.email`         | The user's email address.                                                                                                                          |
| `contact.age`           | The user's age.                                                                                                                                    |
| `contact.gender`        | The user's gender.                                                                                                                                 |
| `contact.birthday`      | The user's date of birth.                                                                                                                          |
| `contact.location`      | The user's current location.                                                                                                                       |
| `contact.accepted_gdpr` | The user's acceptance of the General Data Protection Regulation (GDPR) policy.                                                                     |
| `agent.name`            | The first and last names of the human agent.                                                                                                       |
| `agent.first_name`      | The human agent's first name. If it is not specified in the profile, the last name will be used.                                                   |
| `agent.last_name`       | The human agent's last name. If it is not specified in the profile, the first name will be used.                                                   |
| `agent.email`           | The human agent's email address.                                                   |

The same variables can be used multiple times within a single reply.

Example:

<code>
Hi &lcub;&lcub;contact.first_name&rcub;&rcub;,
Thank you for your recent message. We appreciate your inquiry.
Your conversation with the ID &lcub;&lcub;conversation.id&rcub;&rcub; has been received.
Our team will review it and provide a response as soon as possible.
&lcub;&lcub;contact.first_name&rcub;&rcub;, please let us know if you have any additional questions or need further assistance.
</code>

### Quick reply with Canned response

To include a [canned response](../settings/canned-responses.md) as a reply to the user, follow these steps:

1. In the **Reply to User** or **Reply to Bot** sections, type `/`. A list of available canned responses will be displayed. 
2. Select the desired canned response from the list.

The selected canned response will be inserted into your reply, allowing you to easily include pre-written messages in your conversation.

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/images/LA-conversation-workflow-14.png" width="80%" alt="Live Agent Canned Responses" />
  <figcaption>Send Canned Response</figcaption>
</figure>

#### Send a Canned Response with Variables

[![Version badge](https://img.shields.io/badge/Added in-v4.55-blue.svg)](../../release-notes/4.55.md)

You can create a text including [variables](#send-a-response-with-variables) for [canned responses](../settings/canned-responses.md).

A canned response with variables is called the same way as a [simple canned response](#quick-reply-with-canned-response), by using the symbol `/`.
When you select the canned response, variables in the response will be replaced with values relevant to the current conversation.
If any of the variables do not have values, you will receive a corresponding warning.

#### Request File Upload

By default, human Agents cannot request files from users. To enable this feature, you need to install the [File Upload](https://github.com/Cognigy/WebchatPlugins/tree/master/plugins/file-upload) plugin in the [Webchat Endpoint](../../ai/endpoints/webchat/deploy-webchat-endpoint.md#persistent-menu).

File requirements:

- Supported File Types are jpeg, jpg, png, docx, wav, ogg, pdf.
- Maximum file size is 40MB.

To request a file, follow these steps:

1. Click the **Request file** icon at the bottom of the Live Agent reply field. 

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
