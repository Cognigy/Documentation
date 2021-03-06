---
 title: "Conversation Workflow" 
 slug: "conversation-workflow" 
 hidden: false 
---
# Conversation Workflow

The customer initiates a Conversation from the website front end - through the Webchat widget.

For example: A customer types 'Hi'


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


Click on a the Conversation bubble icon in the sidebar. Then click on All Conversations. Conversations which customers have initiated can be seen here.

Now click on a specific Conversation. The Conversation will open, with further details and actions available in the right-hand side panel.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-3.png" width="100%" alt="Live Agent Conversations Details" />
  <figcaption>Conversations Details</figcaption>
</figure>

#### Show All Inbox Setting

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

Click on Add Labels within the Conversation Labels menu and select the category to which this Conversation belongs.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-6.png" width="100%" alt="Live Agent Assign Labels" />
  <figcaption>Assign Labels</figcaption>
</figure>



You can see in the screenshot below, that all actions perfomed by you, such as assigning a Conversation to an Agent, are seen in the chat window within the Agent Dashboard.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-7.png" width="100%" alt="Live Agent Conversations Actions" />
  <figcaption>Conversations Actions</figcaption>
</figure>


### Reply To A Conversation
<div class="divider"></div>

You can reply to a customer's Conversation by typing in the Reply section. 

Pressing Shift+Enter will allow you to enter an additional new line into your response, while pressing Enter will send the message.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-8.png" width="100%" alt="Live Agent Conversations Reply" />
  <figcaption>Reply Conversation</figcaption>
</figure>


Click on the Send button or press Enter to send your message to the customer.

###  Conversation Actions

Below is a list describing Conversation actions an Agent can take by clicking the following icons.

| Icon                 | Description                                                                                        |
|-------------------------|------------------------------------------------------------------------------------------------|
| <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-9.png" width="50%" alt="" />         | This button allows the Agent to select and include an Emoji in the message                                                             |
| <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-10.png" width="50%" alt="" />                 | This button allows the Agent to select and include attachments in the message                                                               |
| <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-11.png" width="50%" alt="" />                  | This button allows the Agent to request a file from the customer                                                             |

###  How to Send Canned Responses
<div class="divider"></div>

Should you wish to include an already prepared or "canned" response as a reply, type '/' and enter the short name of the message. An example is given below. Once you type '/', available canned responses will be listed and which you can select from.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-14.png" width="100%" alt="Live Agent Canned Responses" />
  <figcaption>Send Canned Response</figcaption>
</figure>


### Private Chat with Agents
<div class="divider"></div>

There is an option to discuss the customer's Conversation with another Agent, should you need some more clarification or assistance. This option is available beside the Reply tab, labeled Private Note.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-15.png" width="100%" alt="Live Agent Private Chat" />
  <figcaption>Private Chat with Agents</figcaption>
</figure>


Type '@' in the Private Note window, and all Agents who have been added to this Team will be listed. Select an Agent, and type in a message to consult with the selected Agent.


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

Replies sent by second Agent will be visible in the Private Note window.

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


To send a copy of the current conversation, click on the button labeled Send Transcript, placed on the top right corner.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-20.png" width="100%" alt="Live Agent Contact Details Menu" />
  <figcaption>Send transcript button</figcaption>
</figure>


A screen opens up which allows an email can be sent to Agents in the Team. The chat transcript can also be sent to the customer or another selected e-mail address.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-21.png" width="100%" alt="Live Agent Conversation Transcript Dialog" />
  <figcaption>Conversation Transcript Dialog</figcaption>
</figure>


Select your desired option and click on Submit. A message will be displayed "The chat transcript was sent successfully". The chosen recipient will receive the chat transcript in their email inbox.

### Transferring Agents
<div class="divider"></div>

You can transfer a issue/Conversation to another Agent by selecting a different Agent from Assigned Agent menu. The entire Conversation will be visible to the newly selected Agent.

### Setting Reminders and Status
<div class="divider"></div>

The status can be changed to 'Resolved' once a resolution is provided to the customer.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-22.png" width="100%" alt="Live Agent Conversations Status" />
  <figcaption>Conversations Status</figcaption>
</figure>


The Conversation statuses available are listed below.

| Options                 | Actions                                                                                        |
|-------------------------|------------------------------------------------------------------------------------------------|
| Mark as Pending         | Change the issue to Pending status                                                             |
| Resolve                 | Change the issue to Resolved status                                                               |
| Abort and Resolve       | Change the issue to Resolved status, and add the queryable abort attribute                         |
| Reopen                  | Change the issue to Open status                                                                |
| Open                    | Change the pending issue to Open status                                                        |
| Snooze Until Next Reply | The issue will be set aside for now, and status will change to Open on the next reply from customer |
| Snooze Until Tomorrow   | The issue will be set aside for now, and status will change to Open the next day                 |
| Snooze Until Next Week  | The issue will be set aside for now, and status will change to Open next week                |

Conversations can be selected and filtered by their statuses within the Conversation panel, as seen below.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-23.png" width="100%" alt="Live Agent Conversations Selections" />
  <figcaption>Select Conversation</figcaption>
</figure>

### Previous Conversations
<div class="divider"></div>

Once a Conversation has been marked as resolved - the next time the same customer starts a new Conversation, the previous Conversation associated with this customer will be shown in the Previous Conversations menu. This will help the Agent to understand the history of the customer's issue.

<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-12.png" width="50%" alt="Live Agent Previous Conversations" />
