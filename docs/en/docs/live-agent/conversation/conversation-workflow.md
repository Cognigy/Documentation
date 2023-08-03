---
 title: "Conversation Workflow" 
 slug: "conversation-workflow" 
 hidden: false 
---
# Conversation Workflow

The customer initiates a Conversation from the website front end - through the Webchat widget.

For example, A customer types 'Hi'


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-1.png" width="100%" alt="Cognigy Webchat Widget" />
  <figcaption>Cognigy Webchat Widget</figcaption>
</figure>


An automated response set in the Cognigy.AI Flow will immediately be displayed on the screen as a reply.

Now let us look at how this message is captured in the Agent Dashboard.

### Conversations
<div class="divider"></div>

Go to the home screen of Live Agent Agent Dashboard


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-2.png" width="100%" alt="Live Agent Conversations" />
  <figcaption>Conversations</figcaption>
</figure>


Click on the Conversation bubble icon in the sidebar. Then click on All Conversations. Conversations which customers have initiated can be seen here.

Now click on a specific Conversation. The Conversation will open with further details and actions available in the right-hand side panel.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-3.png" width="100%" alt="Live Agent Conversations Details" />
  <figcaption>Conversations Details</figcaption>
</figure>

#### Show All Conversations: Inbox Settings

By default, users with the Agent role cannot see the "All" tab for all Conversations. However, there is a setting enabling it per Inbox. When enabled, the user can see all Conversations, including those from other Agents. Otherwise, access will be restricted.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-13.png" width="100%" alt="Live Agent Conversations Details" />
  <figcaption>Show All Inbox setting</figcaption>
</figure>

### Assign Agent
<div class="divider"></div>

If the Inbox has been created without 'auto assign' selected, Conversations will not be automatically assigned to Agents.

Click on the drop-box within the Assigned Agent menu and select the Agent name. You can change the Agents assigned here at any time.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-4.png" width="100%" alt="Live Agent Assign Agent" />
  <figcaption>Assign Agent</figcaption>
</figure>


### Assign Team
<div class="divider"></div>

Click on the drop-box within the Assigned Team menu and select the Team to which this Conversation belongs.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-5.png" width="100%" alt="Live Agent Assign Teams" />
  <figcaption>Assign Teams</figcaption>
</figure>


### Assign Labels
<div class="divider"></div>

To assign a label to a conversation within Live Agent, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. From the **Inboxes** list, select an Inbox.
4. From the **Conversations** list, select your conversation where you want to add a label.
5. On the right of the conversation chat, go to **Details > Conversation Actions**.
6. Under the **Conversation Labels** section, click **Add Labels**.
7. Scroll or type to search for a label, then click a label. You can add multiple labels at once. 

The label will be added to the conversation.

### Send a Response 
<div class="divider"></div>

To respond to a user in the conversation chat, type your message in the **Reply** section.

For quick reply, you can use canned responses, variables, or a combination of both.

If you need to add a new line in your response, press ++shift+enter++.
When you're ready to send the message, click **Send Button** or press ++enter++.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-8.png" width="100%" alt="Live Agent Conversations Reply" />
  <figcaption>Reply to a Message</figcaption>
</figure>

### Send Quick Responses

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

### Conversation Actions

[![Version badge](https://img.shields.io/badge/updated in-v4.45-blue.svg)](../../release-notes/4.45.md)

Below is a list describing Conversation actions an Agent can take by clicking the following icons.

| Button                                                                                                | Description                                                                         |
|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-9.png" width="50%" alt="" />  | This button allows a human agent to select and include an Emoji in the message.     |
| <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-10.png" width="50%" alt="" /> | This button allows  a human agent to select and include attachments in the message. |
| <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-11.png" width="50%" alt="" /> | This button allows a human agent to request a file from the customer.               |
| <img src="{{config.site_url}}live-agent/images/audio-icon.png" width="50%" alt="" />                  | This button allows a human agent to send voice messages to the customer.            |
| <img src="{{config.site_url}}live-agent/images/link-icon.png" width="50%" alt="" />                   | This button allows a human agent to send hyperlinked text to the customer.          |


### Agent Assist (Beta)
<div class="divider"></div>

When Agent Assist is enabled, 
Agents will (based on customer input) receive AI-powered Agent Assist output as part of the conversation, which can help to better answer a customer.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-agentview.png" width="75%" />
    </figure>

If forwarding was enabled for Assist messages, the Agent can click the blue arrow to forward content to the end user or customer.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-agentview-forward.png" width="75%" />
    </figure>


### How to request file upload
<div class="divider"></div>

!!! note
    Supported File Types: jpeg, jpg, png, docx, wav, ogg, pdf
    
    Maximum File Size: 40MB

There is an option to enable bots to request files from users. On the bottom of the Live Agent reply box, you can click on the "Request file" icon.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-24.png" width="100%" alt="Live Agent request file upload" />
  <figcaption>Request file upload</figcaption>
</figure>

Then you need to confirm that you want to send it to the customer to enable the file upload.

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

More details on the customer side can be found under [File Upload Plugin](https://github.com/Cognigy/WebchatPlugins/tree/master/plugins/file-upload)

### Private Chat with Agents
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

#### Delete Private Note
<div class="divider"></div>
There is an option to delete the private note which you have already sent. Click on the 3 dots(...) beside the sent message.
An option is available to copy, or to delete the private note.
Click on Delete. The private note will be deleted.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-18.png" width="100%" alt="Live Agent Delete Message" />
  <figcaption>Delete Message</figcaption>
</figure>


### Sending E-mails
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

### Transferring Agents
<div class="divider"></div>

You can transfer an issue/Conversation to another Agent by selecting a different Agent from the Assigned Agent menu. The entire Conversation will be visible to the newly selected Agent.

### Setting Reminders and Status
<div class="divider"></div>

The status can be changed to 'Resolved' once a resolution is provided to the customer.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-22.png" width="100%" alt="Live Agent Conversations Status" />
  <figcaption>Conversations Status</figcaption>
</figure>

The Conversation statuses available are listed below. Once a conversation is marked as resolved, its state cannot be changed back to open or pending.

| Options                 | Actions                                                                                             |
|-------------------------|-----------------------------------------------------------------------------------------------------|
| Mark as Pending         | Change the issue to Pending status                                                                  |
| Resolve                 | Change the issue to Resolved status                                                                 |
| Abort and Resolve       | Change the issue to Resolved status, and add the queryable abort attribute                          |
| Open                    | Change the pending issue to Open status                                                             |
| Snooze Until Next Reply | The issue will be set aside for now, and status will change to Open on the next reply from customer |
| Snooze Until Tomorrow   | The issue will be set aside for now, and status will change to Open the next day                    |
| Snooze Until Next Week  | The issue will be set aside for now, and status will change to Open next week                       |

Conversations can be selected and filtered by their statuses within the Conversation panel, as seen below.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-23.png" width="100%" alt="Live Agent Conversations Selections" />
  <figcaption>Select Conversation</figcaption>
</figure>

### Previous Conversations
<div class="divider"></div>

Once a Conversation has been marked as resolved - the next time the same customer starts a new Conversation, the previous Conversation associated with this customer will be shown in the Previous Conversations menu. This will help the Agent to understand the history of the customer's issue.

<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-12.png" width="50%" alt="Live Agent Previous Conversations" />
