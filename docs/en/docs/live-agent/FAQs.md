---
 title: "FAQs" 
 slug: "faqs" 
 hidden: false 
---
# FAQs

  - [Live Agent](#live-agent)
    - [How do I remove a user?](#how-do-i-remove-a-user)
    - [How to fix custom SSL certificate verification error?](#how-to-fix-custom-ssl-certificate-verification-error)
    - [How to fix SMTP for no authentication provider.](#how-to-fix-smtp-for-no-authentication-provider)
    - [How to create Labels and how to map them to a particular Conversation?](#how-to-create-labels-and-how-to-map-them-to-a-particular-conversation)
    - [How to request a file from Live Agent Conversation?](#how-to-request-a-file-from-live-agent-conversation)
    - [How to add an Agent to a new Inbox?](#how-to-add-an-agent-to-a-new-inbox)
    - [How to create a Team and add team members to the respective Team?](#how-to-create-a-team-and-add-team-members-to-the-respective-team)
    - [How to see all the agents added in a particular Inbox?](#how-to-see-all-the-agents-added-in-a-particular-inbox)
    - [How to get the Access Token(API Key)?](#how-to-get-the-access-tokenapi-key)
    - [How to view the Account ID and the Inbox ID?](#how-to-view-the-account-id-and-the-inbox-id)
    - [How to navigate to the Cognigy.AI platform from Live Agent?](#how-to-navigate-to-the-cognigyai-platform-from-live-agent)
    - [How to send a reset password link for Live Agent user Agent by an administrator?](#how-to-send-a-reset-password-link-for-live-agent-user-agent-by-an-administrator)
    - [What happens if you remove an Inbox from Live Agent?](#what-happens-if-you-remove-an-inbox-from-live-agent)
    - [Is antivirus file upload scanning enabled for App and Trial environments?](#is-antivirus-file-upload-scanning-enabled-for-app-and-trial-environments)

  - [Live Agent OData service](#live-agent-odata-service)
    - [Why is the OData service not returning all the information from the database?](#why-is-the-odata-service-not-returning-all-the-information-from-the-database)
    - [Are you getting an unauthorised error while querying the OData endpoint?](#are-you-getting-an-unauthorised-error-while-querying-the-odata-endpoint)
    - [How to retrieve all content from a particular collection?(Ex: Conversation, Message)](#how-to-retrieve-all-content-from-a-particular-collectionex-conversation-message)
    - [How to filter OData with particular fields?](#how-to-filter-odata-with-particular-fields)


## Live Agent

### How do I remove a user?
Removing a user needs to be done from the Cognigy.AI platform. For example, you can take out its Agent role so that the user will not be able to log into the  Live Agent system anymore or if you like, you could completely remove that user from the Cognigy.AI platform.
If you log into the Cognigy.AI as an admin, under the "User Menu" on the top right, you will see an "Access Control" section. From there, you can manage the user.

Please visit the Cognigy.AI Access Control section [***here***](./../ai/tools/user-menu/access-control.md) for more information.

### How to fix custom SSL certificate verification error?
That may happen because your custom installation is running using a custom SSL certificate. (Error can not validate certificate)
The deployment file used for the pods will need to be extended to mount a secret containing the CA on the pod filesystem. Our technical team can give support by opening a ticket. Also, as a temporary workaround, the SSL verification can be disabled.

Please have a look [***here***](https://paraspatidar.medium.com/add-self-signed-or-ca-root-certificate-in-kubernetes-pod-ca-root-certificate-store-cb7863cb3f87)

Please see this section [***here***](./installation/helm-values/helm-values.md#rest-client-ssl) for more information regarding the Helm SSL variables.

### How to fix SMTP for no authentication provider.
If yours is a self-hosted installation, you will have to update the values.yml under the smtp and configmap section.

Please see the Helm SMTP values section [***here***](./installation/helm-values/smtp.md) for more information.

### How to create Labels and how to map them to a particular Conversation? 
First of all, you will need to create a label; for doing so, you will have to navigate into the "Settings->Labels" and click on "Add Label".
Once your label has been created, navigate to your Conversations section, select an Inbox, and select a Conversation from that Inbox. On your right side, you should see a menu panel, and in there, there is a "Conversations Label" section where you will be able to add the labels you created above.

Please visit the Labels section [***here***](./labels.md) for more information.

### How to request a file from Live Agent Conversation? 
<figure>
<img src="{{config.site_url}}live-agent/images/LA-request-file.png" width="100%" alt="Live Agent request file" />
 <figcaption>Live Agent Agent request file from the user</figcaption>
</figure>

Please visit the Conversations Workflow/Conversation Actions [***here***](./conversation-workflow.md) for more information.

### How to add an Agent to a new Inbox?
You will need to log into Live Agent with an admin role, then navigate to "Settings->Inboxes", and look for the Inbox you want.
From that Inbox, select settings/Collaborators and pick your Agent name. Once you are done, click on the "Update" button.

Please visit the Inboxes section [***here***](./inboxes.md#inbox-collaborators) for more information.

### How to create a Team and add Team members to the respective Team?
You will need to navigate into "Settings->Teams" and click on the "Create new team" button. In the second step, you will be able to add agents to the Team. You can also edit the Team later and add more agents then.

Please visit the Teams section [***here***](./teams.md) for more information.

### How to see all the agents added in a particular Inbox?
You will need to navigate into "Settings->Inboxes", search for the Inbox, and click on "Settings" there, you will see a "Collaborators" tab, where you will see all the collaborators agents for that Inbox.

Please visit the Inboxes section [***here***](./inboxes.md#inbox-collaborators) for more information.

### How to get the Access Token(API Key)?
The access token associated with your user is available for you at the bottom of your [***profile settings***](./profile-settings.md).

### How to view the Account ID and the Inbox ID? 
You could take this information from the URL of the page you are on. 

e.g. if you navigate into any Inbox. in your URL, you should see some like this: ``http://your-host-domain/app/accounts/1/inbox/4``

from this url we can see that accounts/account_id/inbox/inbox_id, hence from the above example url you would have account_id = 1 and inbox_id = 4

### How to navigate to the Cognigy.AI platform from Live Agent?
In your profile setting, you have a link "Cognigy.AI", from which you will be moved back to the Cognigy.AI platform.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-link-cognigi.ai-platform.png" width="100%" alt="Link to Cognigy.AI platform" />
  <figcaption>Link to Cognigy.AI platform</figcaption>
</figure>


### How to send a reset password link for Live Agent user Agent by an administrator?
All the user's administration must be done from the Cognigy.AI platform. 
Please see the  [***Cognigy Login page***](./../ai/installation/AI-login.md) for more information.

### What happens if you remove an Inbox from Live Agent?
You can safely modify/remove Inboxes created manually. But you must not change/update/delete the default Inbox
created by the Cognigy.AI platform, as it will break the communication protocol between Live Agent and Cognigy.AI. There is no way
to undo this step quickly. In case you need to do so, please reach support.

### Is antivirus file upload scanning enabled for App and Trial environments?
The antivirus file upload scanning needs to be configured at the infrastructure level, and it is not enabled for the Trial and App instances at the moment. 

## Live Agent OData service

### Why is the OData service not returning all the information from the database?
The OData service returns data belonging to your account.

### Are you getting an unauthorised error while querying the OData endpoint? 
In case you are getting an unauthorised error, check that the API access token used belongs to a user that has the administrator role for the account used in the query.

### How to retrieve all content from a particular collection?(Ex: Conversation, Message)
To achive this, you could do a filtering for large values in the following way:

e.g.
```http://{{host}}:{{port}}/v1.0/odata/Conversation?$filter=created_at le '2126-11-23T00:00:00'```

This will return all the fields for the Conversation model created before 23/11/2126. 

Please refer to the OData section [***here***](./tools/odata-endpoint.md) for more information.

### How to filter OData with particular fields? 
e.g. ```http://{{host}}:{{port}}/v1.0/odata/Conversation?$select=id,account_id&$filter=created_at le '2026-11-23T00:00:00'```

In this example, it is requesting the fields "id" and "account_id" from The Conversation model where the "created_at" field is lower than '2026-11-23T00:00:00'.

Please refer to the OData section [***here***](./tools/odata-endpoint.md) for more information.
