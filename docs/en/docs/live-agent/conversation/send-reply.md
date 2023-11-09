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

## Types

### Quick Reply

For quick reply to a user in the conversation chat, you can use canned responses, variables, or a combination of both.

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

#### Send a Canned Response

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

A canned response with variables is called the same way as a [simple canned response](#send-a-response),
by using the symbol `/`.
When you select the canned response,
variables in the response will be replaced with values relevant to the current conversation.
If any of the variables do not have values, you will receive a corresponding warning.



### What you can add within a Reply

- link
- attach a file
- emoji
- microphone
- request a file

