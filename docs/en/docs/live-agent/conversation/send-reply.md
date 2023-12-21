---
title: "Send Replies"
slug: "send-replies"
description: "Within a Live Agent conversation, as a human agent, you can send replies to the end user, the virtual agent, and another human agent."
hidden: false
---

# Send Replies

Within a conversation, as a human agent, you can send a reply to the following actors:

- [end user](#send-a-reply-to-a-user)
- [another human agent](#send-a-reply-to-another-human-agent) 

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/conversation/images/reply-section.png" width="80%" alt="Live Agent Conversations Reply" />
  <figcaption>The Reply Section</figcaption>
</figure>

## Send a Reply to a User

To respond to a user in a conversation, type your message in the **Reply** section and click **Send**.

For quick replies, you can use canned responses, variables, or a combination of both.

By default, you can send messages by pressing ++cmd+enter++ or ++ctrl+enter++ instead of clicking the **Send** button.
The ++enter++ key will be used for line breaks. If you want to change hotkey options, go to [Profile Settings](../profile-settings.md).

### Reply Options

Human agents can access a range of reply options through the following buttons:

| Button                                               | Description                                                                                            |
|------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| ![emoji](../../assets/icons/emoji.svg)               | The **Show emoji selector** button allows a human agent to select and include an Emoji in the message. |
| ![attach-files](../../assets/icons/attach-files.svg) | The **Attach files** button allows a human agent to select and include attachments in the message.     |
| ![request-file](../../assets/icons/request-file.svg) | The **Request file** button allows a human agent to request a file from the end user.                  |
| ![record-audio](../../assets/icons/record-audio.svg) | The **Record audio** button allows a human agent to send voice messages to the end user.               |
| ![insert-link](../../assets/icons/insert-link.svg)   | The **Insert link** button allows a human agent to send hyperlinked text to the end user.              |

#### Request a File Upload

By default, human agents cannot request files from users. To enable this feature, you need to install the [File Upload](https://github.com/Cognigy/WebchatPlugins/tree/master/plugins/file-upload) plugin in the [Webchat Endpoint](../../ai/endpoints/webchat/deploy-webchat-endpoint.md#persistent-menu).

File requirements:

- Supported file types are jpeg, jpg, png, docx, wav, ogg, pdf.
- Maximum file size is 40 MB.

To request a file, follow these steps:

1. At the bottom of the **Reply to User** section, click ![request-file](../../assets/icons/request-file.svg). A window for the file request appears and prompts you to confirm.
2. Click **Send** to confirm that you want to send the file request to the end user to enable the file upload. A message should appear in the chat indicating that the file has been requested.

The end user will see a button in the chat to open a file upload dialog.

<figure>
  <img class="image-center" src="{{config.site_url}}live-agent/images/LA-conversation-workflow-27.png" width="100%" alt="Live Agent request file upload webchat" />
</figure>

After uploading the file, it should be reflected in both the Webchat and the Live Agent interfaces, making the file ready for download on the Live Agent side.

<figure>
  <img class="image-center" src="{{config.site_url}}live-agent/images/LA-conversation-workflow-28.png" width="80%" alt="Live Agent request file upload webchat completed" />
</figure>

The successful upload is displayed in Live Agent.

<figure>
  <img class="image-center" src="{{config.site_url}}live-agent/images/LA-conversation-workflow-29.png" width="100%" alt="Live Agent request file upload completed" />
</figure>

### Simple Quick Reply

For a simple quick reply to a user in the conversation chat, you can use canned responses, variables, or a combination of both.

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
| `contact.name`          | The user's first and last names. If both are not specified in the profile, the default value `end user` will be used.                              |
| `contact.first_name`    | The user's first name. If it is not specified in the profile, the last name will be used. Otherwise, the default value `end user` will be applied. |
| `contact.last_name`     | The user's last name. If it is not specified in the profile, the first name will be used. Otherwise, the default value `end user` will be applied. |
| `contact.email`         | The user's email address.                                                                                                                          |
| `contact.age`           | The user's age.                                                                                                                                    |
| `contact.gender`        | The user's gender.                                                                                                                                 |
| `contact.birthday`      | The user's date of birth.                                                                                                                          |
| `contact.location`      | The user's current location.                                                                                                                       |
| `contact.accepted_gdpr` | The user's acceptance of the General Data Protection Regulation (GDPR) policy.                                                                     |
| `agent.name`            | The first and last names of the human agent.                                                                                                       |
| `agent.first_name`      | The human agent's first name. If it is not specified in the profile, the last name will be used.                                                   |
| `agent.last_name`       | The human agent's last name. If it is not specified in the profile, the first name will be used.                                                   |
| `agent.email`           | The human agent's email address.                                                                                                                   |

The same variables can be used multiple times within a single reply.

Example:

<code>
Hi &lcub;&lcub;contact.first_name&rcub;&rcub;,
Thank you for your recent message. We appreciate your inquiry.
Your conversation with the ID &lcub;&lcub;conversation.id&rcub;&rcub; has been received.
Our team will review it and provide a response as soon as possible.
&lcub;&lcub;contact.first_name&rcub;&rcub;, please let us know if you have any additional questions or need further assistance.
</code>

### Advanced Quick Reply

To include a [canned response](../settings/canned-responses.md) as a reply to the user, follow these steps:

1. In the **Reply to User** or **Reply to Bot** sections, type `/`. A list of available canned responses will be displayed. 
2. Select the desired canned response from the list.

The selected canned response will be inserted into your reply, allowing you to easily include prewritten messages in your conversation.

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/images/LA-conversation-workflow-14.png" width="80%" alt="Live Agent Canned Responses" />
  <figcaption>Send Canned Response</figcaption>
</figure>

#### Send a Canned Response with Variables

[![Version badge](https://img.shields.io/badge/Added in-v4.55-blue.svg)](../../release-notes/4.55.md)

You can create a text including [variables](#send-a-response-with-variables) for [canned responses](../settings/canned-responses.md).

A canned response with variables is called the same way as a [simple canned response](#advanced-quick-reply), by using the symbol `/`.
When you select the canned response, variables in the response will be replaced with values relevant to the current conversation.
If any of the variables do not have values, you will receive a corresponding warning.

## Send a Reply to Another Human Agent

As a human agent, you can discuss the end user's conversation with another agent if you need additional clarification or assistance.

To send a reply to another human agent, follow these steps:

1. On the Private Note tab, type `@`. All agents who have been added to the team will be listed.
2. Select an Agent and type in a message to consult with the selected Agent.
3. Click **Add Note** to send the message. You can see a locked sign ![locked sign](../../assets/icons/locked.svg) in the chat next to the message that has been sent. This message will not be visible to the end user but only to you and your team.

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/conversations/images/private-message.png" width="100%" alt="Live Agent Private Message" />
  <figcaption>Private Message with Agent</figcaption>
</figure>

The second agent addressed in the private note will receive a notification in their account.
Subsequent replies by the second agent will be visible on the **Private Note** tab.

You can find all conversations where other agents mentioned you. To do so, use the **@Mentions** option at the top of the Inboxes list.

### Delete a Private Note

To delete a private note you have already sent, follow these steps:

1. Click ![vertical-ellipsis](../../assets/icons/vertical-ellipsis.svg) icon beside the sent message.
2. Select **Delete**. The private note will be deleted.

## More Information

- [Conversation](overview.md)
- [Conversation Assignment](assign-conversations.md)