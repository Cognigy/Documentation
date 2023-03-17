---
 title: "FAQs" 
 slug: "faqs" 
 hidden: false 
---
# FAQs

## Live Agent

### How to remove a user?
Removing a user (human Agent) from Live Agent can be done from the Cognigy.AI [Members page](../ai/resources/manage/members.md). The `liveAgentAdmin`/`liveAgentAgent` roles need to be removed, and this will prevent the human Agent from logging into Live Agent. This can also be achieved by deleting the user from Cognigy.AI.

Head over to [Cognigy.AI Access Control](../ai/tools/user-menu/access-control.md) for more information.

### How to create an Agent with multiple roles?

To create an Agent with multiple roles, read the [Roles](roles.md#multiple-roles) article.

### What happens if an Inbox is deleted?
Inboxes created manually can be safely deleted, except those with the `-default` suffix. Deleting Inboxes with `-default` breaks the integration between Live Agent and Cognigy.AI. If this Inbox is accidentally deleted, please see the solution in the question below.

### What should I do if the Inbox is deleted?

You need to create a new Inbox. To do that, use the [Adding another Inbox for your Project](../ai/handover-providers/live-agent-setup/live-agent-setup-additional-inbox.md) article.

### Where can I check what the default Inbox is? Does it have a special account id?

The default Inbox has a pattern name `XXXX-default`, for example, `7119-default`. You can rename it in [Inbox Settings](../live-agent/inboxes.md#inbox-settings)

### How to fix custom SSL certificate verification error?
That may happen because Cognigy.AI is running under a custom SSL certificate (Error can not validate certificate). And Live Agent is failing to perform the requests to it as SSL requests can not be verified.

Head over to [Rest Client SSL Helm values](../live-agent/installation/helm-values/helm-values.md#rest-client-ssl) for configuring it.

### How to fix SMTP for no authentication provider.
For self-hosted installations, the SMTP configuration needs to be modified.

Head over to [Helm SMTP values](../live-agent/installation/helm-values/smtp.md) for more information.

### How to create labels and assign them to conversations? 
Once a label has been created, navigate to a conversation. There is a section called ***"Conversation Labels"*** on the right side, where labels can be added.

Head over to [Labels](../live-agent/labels.md) for more information.

### How to request a file from a conversation? 

<figure>
  <img src="{{config.site_url}}live-agent/images/LA-request-file.png" width="100%" alt="Live Agent request file" />
  <figcaption>Request File Upload Button</figcaption>
</figure>

Head over to [Conversations Workflow](../live-agent/conversation/conversation-workflow.md) for more information.

### How to add Agents to an Inbox?
Administrator users can only do this action. Navigate to ***"Settings"*** > ***"Inboxes"***, look for the Inbox to be edited and click on the settings icon. Then click on the tab ***"Collaborators"*** and pick the Agent name. For updating the current inbox, click on the ***"Update"*** button.

Head over to [Inboxes](../live-agent/inboxes.md#inbox-collaborators) for more information.

### How to create a team and add members to it?
Navigate to ***"Settings"*** > ***"Teams"*** and click on the ***"Create new team"*** button. In the second step, add the desired Agents. The added Agents can be updated later.

Head over to [Teams](../live-agent/teams.md) for more information.

### How to get the user access token (API Key)?
The user access token is displayed at the bottom of the [Profile Settings](../live-agent/profile-settings.md).

### How to view the account ID and the inbox ID? 
This information can be obtained from the Live Agent URL. 

A quick way is to select an Inbox on the dashboard screen. The URL will look like: ``https://<live-agent-domain>/app/accounts/1/inbox/4``.

The URL follows the pattern `accounts/{Account ID}/inbox/{Inbox ID}`, where the account ID is **1** and inbox ID is **4**

### Can a TTL be set for attachments contained in messages?
Yes, a TTL for attachments contained in messages per account can be defined under the [Account Settings](../live-agent/account-settings.md#attachment-ttl).

### Is antivirus file upload scanning enabled for App and Trial environments?
The antivirus file upload scanning needs to be configured at the infrastructure level, and it is not enabled for the Trial and App instances at the moment.
Head over to [File Upload Antivirus Scan Helm Values](../live-agent/installation/helm-values/helm-values.md#file-upload-antivirus-scan) for learning how to configure it.

### How to navigate to Cognigy.AI from Live Agent?
Under the profile menu, there is a link called "Cognigy.AI" that heads over to the Cognigy.AI. If it is not present, head over to [URLs Helm values](../live-agent/installation/helm-values/helm-values.md#urls) for configuring it.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-link-cognigi.ai-platform.png" width="100%" alt="Link to Cognigy.AI" />
  <figcaption>Link to Cognigy.AI</figcaption>
</figure>

### Get a Google Maps API key
To see a location sent from WhatsApp with Google Maps, you need to get a [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key). Head over to the [App](../live-agent/installation/helm-values/helm-values.md#app) to configure it.


## Live Agent OData service

### Why is the OData service not returning all the information from the database?
The OData service returns data belonging to your account.

Head over to [OData Endpoint](../live-agent/tools/odata-endpoint.md) for more information.

### Why is the OData endpoint throwing an unauthorised error while querying?
While getting an unauthorised error, please check that the API access token belongs to a user with the administrator role for the account used in the query.

### How to retrieve all content from a particular collection? (e.g. Conversation, Message)
The following filtering query can be performed:

e.g. ```http://{{host}}:{{port}}/v1.0/odata/Conversation?$filter=created_at le '2126-11-23T00:00:00'```

It will return all the fields for the Conversation model created before 23/11/2126. 

Head over to [OData Endpoint](../live-agent/tools/odata-endpoint.md) for more information.

### How to filter OData with particular fields?
e.g. ```http://{{host}}:{{port}}/v1.0/odata/Conversation?$select=id,account_id&$filter=created_at le '2026-11-23T00:00:00'```

In this example, it is requesting the fields "id" and "account_id" from The Conversation model where the "created_at" field is lower than '2026-11-23T00:00:00'.

Head over to [OData Endpoint](../live-agent/tools/odata-endpoint.md) for more information.
