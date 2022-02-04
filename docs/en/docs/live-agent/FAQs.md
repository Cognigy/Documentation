---
 title: "FAQs" 
 slug: "faqs" 
 hidden: false 
---
# FAQs

- [FAQs](#faqs)
  - [Live Agent](#live-agent)
    - [What happens if you remove a user from the LiveAgent?](#what-happens-if-you-remove-a-user-from-the-liveagent)
    - [How do I remove a user?](#how-do-i-remove-a-user)
    - [How to fix custom SSL certificate verification error?](#how-to-fix-custom-ssl-certificate-verification-error)
    - [How to fix SMTP for no authentication provider.](#how-to-fix-smtp-for-no-authentication-provider)
    - [How to create labels and how to map them to a particular Conversation?](#how-to-create-labels-and-how-to-map-them-to-a-particular-conversation)
    - [How to request a file from Live Agent Conversation?](#how-to-request-a-file-from-live-agent-conversation)
    - [How to add an Agent to a new Inbox?](#how-to-add-an-agent-to-a-new-inbox)
    - [How to create a team and add team members in the respective team?](#how-to-create-a-team-and-add-team-members-in-the-respective-team)
    - [How to see all the agents added in a particular Inbox?](#how-to-see-all-the-agents-added-in-a-particular-inbox)
    - [How to get the Access Token(API Key)?](#how-to-get-the-access-tokenapi-key)
    - [How to view the account id and the Inbox id?](#how-to-view-the-account-id-and-the-inbox-id)
    - [How to navigate to the Cognigy.AI platform from Live Agent?](#how-to-navigate-to-the-cognigyai-platform-from-live-agent)
    - [How to send a reset password link for Live Agent user Agent by a user Admin?](#how-to-send-a-reset-password-link-for-live-agent-user-agent-by-a-user-admin)
    - [What happens if you remove an Inbox from the LiveAgent?](#what-happens-if-you-remove-an-inbox-from-the-liveagent)
  - [LiveAgent OData service](#liveagent-odata-service)
    - [Why is the OData service not returning all the information from the db?](#why-is-the-odata-service-not-returning-all-the-information-from-the-db)
    - [Are you getting an unauthorised error while querying the OData endpoint?](#are-you-getting-an-unauthorised-error-while-querying-the-odata-endpoint)
    - [How to retrieve all content from a particular collection?(Ex: Conversation, Message)](#how-to-retrieve-all-content-from-a-particular-collectionex-conversation-message)
    - [How to filter OData with particular fields?](#how-to-filter-odata-with-particular-fields)


## Live Agent

### What happens if you remove a user from the LiveAgent?
Removing a user from the LiveAgent is a bit superfluous, the user would be removed but the next time they try to log back in, their user account would be recreated. All the users management must be done from the Cognigy.AI platform site. 

Please visit the Cognigy.AI Access Control section [***here***](./../ai/tools/user-menu/access-control.md) for more information.

### How do I remove a user?
Removing a user can be achieved from the Cognigy.AI platform. You can take out its Agent role, so that user will not be able to log into the LiveAgent system anymore or if you like you could completely remove that user from the Cognigy.AI platform.
If you log into the Cognigy.AI as an admin, on the top right, under the "User Menu", you will see an "Access Control" section. From there you can manage the user.

Please visit the Cognigy.AI Access Control section [***here***](./../ai/tools/user-menu/access-control.md) for more information.

### How to fix custom SSL certificate verification error?
That may happen because your custom installation is running using a custom SSL certificate. (Error can not validate certificate)
The deployment file used for the pods will need to be extended to mount a secret containing the CA on the pod filesystem. Our technical team can give support by opening a ticket. Also as a temporary workaround, the SSL verification can be disabled.

Please have a look [***here***](https://paraspatidar.medium.com/add-self-signed-or-ca-root-certificate-in-kubernetes-pod-ca-root-certificate-store-cb7863cb3f87)

### How to fix SMTP for no authentication provider.
If yours is a self hosted installation, then you will have to update the values.yml under the smtp and configmap section.

Please see the Helm SMTP values section [***here***](./installation/helm-values/smtp.md) for more information.

### How to create labels and how to map them to a particular Conversation? 
First of all you will need to create a label; for doing so, you will have to navigate into the settings->Labels and click on "Add Label".
Once your label has been created, navigate to your Conversations section, select an Inbox, and then select a Conversation from that Inbox. On your right site you should see a menu panel, and in there there is a "Conversations Label" section where you will be able to add the labes you created above.

Please visit the Labels section [***here***](./labels.md) for more information.

### How to request a file from Live Agent Conversation? 
<figure>
<img src="{{config.site_url}}live-agent/images/LA-request-file.png" width="100%" alt="Live Agent request file" />
  <figcaption>Live Agent Agent request file from the user</figcaption>
</figure>

Please visit the Conversations Workflow/Conversation Actions [***here***](./conversation-workflow.md)  for more information.

### How to add an Agent to a new Inbox?
You will need to log into the Live Agent with and admin role, then navigate to settings->Inboxes, and look for the Inbox you want.
From that Inbox select settings/Collaborators and pick your Agent name, once you are done click on "Update" button

### How to create a team and add team members in the respective team? 
You will need to navigate into settings/Teams and click on "Create new team" button. In the second step you will be able to add agents into the team. You can also edit the team on a later stage and add more agents then.

### How to see all the agents added in a particular Inbox?
You will need to navigate into settings/Inboxes search for the Inbox, and click on "Settings", in there you will see a "Collaborators" tab, where you will see all the collaborators agents for that Inbox.

### How to get the Access Token(API Key)?
The access token associated to your user is available for you at the bottom of your [***profile settings***](./profile-settings.md).

### How to view the account id and the Inbox id? 
You could take this information form the url of the page your are in. 

e.g if you navigate into any Inbox. in your url you should see some like this: ``http://your-host-domain/app/accounts/1/inbox/4``

from this url we can see that accounts/account_id/inbox/inbox_id, hence from the above example url you would have account_id = 1 and inbox_id = 4

### How to navigate to the Cognigy.AI platform from Live Agent?
In your profile setting you have a link "Cognigy.AI" from which you will be moved back to the Cognigy.AI platform.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-link-cognigi.ai-platform.png" width="100%" alt="Link to Cognigy.AI platform" />
  <figcaption>Link to Cognigy.AI platform</figcaption>
</figure>


### How to send a reset password link for Live Agent user Agent by a user Admin?
All the users administration must be done from the Cognigy.AI platform, is in there where you can reset your password.

### What happens if you remove an Inbox from the LiveAgent?
If you remove an Inbox created manually by yourself nothing happends. But you should not change/update/delete the default Inbox
created by the Cognigy.AI platform, as you would break the communication protocol between LiveAgent and Cognigy.AI and there is no way
to easly undo this step.

## LiveAgent OData service

### Why is the OData service not returning all the information from the db?
The OData service can just return data belonging to your account.

### Are you getting an unauthorised error while querying the OData endpoint? 
In case you are getting an unauthorised error, check that the API access token used belongs to a user that has the administrator role for the account used in the query.

### How to retrieve all content from a particular collection?(Ex: Conversation, Message)
To achive this you could use some trick like filtering by some value very big like:

e.g.
```http://{{host}}:{{port}}/v1.0/odata/Conversation?$filter=created_at le '2126-11-23T00:00:00'```

This will return all the fields for the Converation model created before the 23/11/2126. 

Please refer to the OData section [***here***](./tools/odata-endpoint.md) for more information.  

### How to filter OData with particular fields? 
e.g. ```http://{{host}}:{{port}}/v1.0/odata/Conversation?$select=id,account_id&$filter=created_at le '2026-11-23T00:00:00'```

in this example it is requesting the fields id and account_id from the Converstaion model where the created_at field is lower than '2026-11-23T00:00:00'

Please refer to the OData section [***here***](./tools/odata-endpoint.md) for more information.  

 