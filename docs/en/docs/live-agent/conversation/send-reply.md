---
title: "Send Reply"
slug: "send-reply"
description: ""
hidden: false
---

# Send Responses

[![Version badge](https://img.shields.io/badge/Updated in-v4.59-blue.svg)](../../release-notes/4.59.md)

To respond to a user in a conversation, type your message in the **Reply** field and click **Send**.

For quick reply, you can use canned responses, variables, or a combination of both.

By default, you can send messages by pressing ++cmd+enter++ or ++ctrl+enter++ instead of clicking the **Send** button.
The ++enter++ key will be used for line breaks. If you want to change hotkey options, go to [Profile Settings](../profile-settings.md).

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/images/send-response.png" width="100%" alt="Live Agent Conversations Reply" />
  <figcaption>Reply to a Message</figcaption>
</figure>

## Audience to Assist Bot

With the help of the Assist Bot,which is one of the Live Agent assitants, human Agents will be able to actively converse with a Virtual Agent in a separate conversation, including follow up questions from the bot etc.. The Assist Bot will assist the human Agent, for example, by actively finding out information regarding a product, the customer or his requests.
This conversation is separate from the conversation between human agent and end user and will be shown in a separate panel on the right hand side. Human Agents will be able to forward messages from the Virtual Agent to the input field and will also be able to forward end user input to this separate conversation. One or several of such Assist Bots could be attached to an Inbox via Live Agent settings.

For more information, read the [Assist Bot](assist-bot.md) documentation.

### Audience to LA Agent Assist

**LA Agent Assist** is one of the Live Agent assistants, which enables human Agents to actively converse with a Virtual Agent in a separate conversation. The LA Agent Assist will assist the human Agent, for example, by actively finding out information regarding a product, the customer or his requests. 
This conversation is separate from the conversation between human agent and end user. 
When this option is active, the human Agent can use a corresponding reply field, which allows direct communication with LA Agent Assist. Human Agents will be able to forward messages from the Agent Assist to the input field by hovering over the Agent Assist conversation area in the Live Agent conversation and to reply the messages to the end user. 
You can use the Agent Assist in combination with other available assistants in Live Agent.

For more information and how to activate LA Agent Assist for Live Agent, read the [LA Agent Assist Setup](https://docs.cognigy.com/ai/handover-providers/la-agent-assist-setup/?h=agent+assist#set-up-a-flow) documentation:

### Private Chat with Agents

As a human Agent you can discuss the customer's conversation with another Agent, should you need some more clarification or assistance. This option is available beside the **Reply** tab, labeled **Private Note**.

1. Type '@' in the Private Note window. All Agents who have been added to this Team will be listed.
2. Select an Agent and type in a message to consult with the selected Agent.
3. Click **Add Note** to send the message. You can see a locked sign ![locked sign](../../assets/icons/locked.svg) in the chat next to the message that has been sent. This message will not be visible to the customer but only to you and your team.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-17.png" width="100%" alt="Live Agent Private Message" />
  <figcaption>Private Message with Agent</figcaption>
</figure>

The second Agent addressed in the private note will receive a notification in his account. Replies sent by the second Agent will be visible in the Private Note window.

#### Delete Private Note

To delete the private note which you have already sent, do the following: 

1. Click ![vertical-ellipsis](../../assets/icons/vertical-ellipsis.svg) icon beside the sent message. An options menu allows to **Delete** or **Copy** the private note.
2. Select **Delete**. The private note will be deleted.

## Types of Responses

In Live Agent conversations the human Agent can use different types of responses:

- [Quick Reply](#quick-reply)
- [Quick reply with Canned response](#quick-reply-with-canned-response)

### Quick Reply

For [Quick Reply](../../ai/endpoints/webchat/webchat-features.md#quick-replies) to a user in the conversation chat, you can use canned responses, variables, or a combination of both.

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

### Reply actions and what you can add within a Chat

Below is a list describing Conversation reply actions an Agent can take by clicking the following icons.

| Icon                                                                                                  | Description                                                                                              |
|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| <img src="{{config.site_url}}assets/icons/emoji.svg" width="50%" alt="" />                            | **Show emoji selector** - This button allows a human agent to select and include an Emoji in the message.|
| <img src="{{config.site_url}}assets/icons/attach-files.svg" width="50%" alt="" />                     | **Attach files** - This button allows  a human agent to select and include attachments in the message.   |
| <img src="{{config.site_url}}assets/icons/request-file.svg" width="50%" alt="" />                     | **Request file** - This button allows a human agent to request a file from the customer.                 |
| <img src="{{config.site_url}}assets/icons/record-audio.svg" width="50%" alt="" />                     | **Record audio** - This button allows a human agent to send voice messages to the customer.              |
| <img src="{{config.site_url}}assets/icons/insert-link.svg" width="50%" alt="" />                      | **Insert link** - This button allows a human agent to send hyperlinked text to the customer.             |

### Request File Upload

By default, human Agents cannot request files from users. To enable this feature, you need to install the [File Upload](https://github.com/Cognigy/WebchatPlugins/tree/master/plugins/file-upload) plugin in the [Webchat Endpoint](../../ai/endpoints/webchat/deploy-webchat-endpoint.md#persistent-menu).

File requirements:

- Supported file types are jpeg, jpg, png, docx, wav, ogg, pdf.
- Maximum file size is 40MB.

To request a file, follow these steps:

1. Click the **Request file** icon at the bottom of the Live Agent reply field. A window for the file request appears and prompts you to confirm.

    <figure>
    <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-24.png" width="100%" alt="Live Agent request file upload" />
      <figcaption>Request file upload</figcaption>
    </figure>

2. Click **Send**, to confirm that you want to send the file request to the customer to enable the file upload. A message should appear in the chat indicating that the file has been requested.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-26.png" width="100%" alt="Live Agent request file upload message" />
  <figcaption>Request file upload message</figcaption>
</figure>

The customer will see a button in the chat to open a file upload dialog.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-27.png" width="100%" alt="Live Agent request file upload webchat" />
  <figcaption>Request file upload Webchat</figcaption>
</figure>

After uploading the file, it should be reflected in the Webchat and the Live Agent and the file should be ready for download on the Live Agent side.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-28.png" width="100%" alt="Live Agent request file upload webchat completed" />
  <figcaption>Request file upload in Webchat completed</figcaption>
</figure>

The successful upload is displayed in Live Agent.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-29.png" width="100%" alt="Live Agent request file upload completed" />
  <figcaption>Request file upload completed in Live Agent</figcaption>
</figure>
