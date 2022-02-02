---
 title: "FAQs" 
 slug: "faqs" 
 hidden: false 
---
# FAQs

- [FAQs](#faqs)
  - [LiveAgent service](#liveagent-service)
    - [How to fix custom SSL certificate verification error?](#how-to-fix-custom-ssl-certificate-verification-error)
    - [How to fix SMTP for no authentication provider.](#how-to-fix-smtp-for-no-authentication-provider)
    - [How to create labels and how to map them to a particular conversation?](#how-to-create-labels-and-how-to-map-them-to-a-particular-conversation)
    - [How to request a file from Live Agent conversation?](#how-to-request-a-file-from-live-agent-conversation)
    - [How to add an agent to a new inbox?](#how-to-add-an-agent-to-a-new-inbox)
    - [How to create a team and add team members in the respective team?](#how-to-create-a-team-and-add-team-members-in-the-respective-team)
    - [How to see all the agents added in a particular inbox?](#how-to-see-all-the-agents-added-in-a-particular-inbox)
    - [How to get the Access Token(API Key)?](#how-to-get-the-access-tokenapi-key)
    - [How to view the account id and the inbox id?](#how-to-view-the-account-id-and-the-inbox-id)
    - [How to navigate to the Cognigy.ai platform from Live Agent?](#how-to-navigate-to-the-cognigyai-platform-from-live-agent)
    - [How to send a reset password link for Live Agent agent by an Admin?](#how-to-send-a-reset-password-link-for-live-agent-agent-by-an-admin)
    - [What happened if you remove an inbox from the LiveAgent?](#what-happened-if-you-remove-an-inbox-from-the-liveagent)
    - [What happened if you remove a user from the LiveAgent?](#what-happened-if-you-remove-a-user-from-the-liveagent)
    - [How do I remove a user?](#how-do-i-remove-a-user)
  - [LiveAgent OData service](#liveagent-odata-service)
    - [Why is the Odata service not returning all the information from the db?](#why-is-the-odata-service-not-returning-all-the-information-from-the-db)
    - [Why is the Odata service not working?](#why-is-the-odata-service-not-working)
    - [How to retrieve all content from a particular collection?(Ex: Conversation, Message)](#how-to-retrieve-all-content-from-a-particular-collectionex-conversation-message)
    - [How to filter OData with particular fields?](#how-to-filter-odata-with-particular-fields)


## LiveAgent service

### How to fix custom SSL certificate verification error?
That may happen because your custom installation is running using a custom ssl certificate. (Error can not validate certificate)
Solution: You will need to mount into your pod the system secret.
Please have a look [here](https://paraspatidar.medium.com/add-self-signed-or-ca-root-certificate-in-kubernetes-pod-ca-root-certificate-store-cb7863cb3f87)

### How to fix SMTP for no authentication provider.
You will need to comment out the SMPT variable/values from your .env file, otherwise LiveAgent attempts to use them being empty and does not work. 

### How to create labels and how to map them to a particular conversation? 
First of all you will need to create a label; for doing so, you will have to navigate into the settings->Labels and click on "Add Label".
Once your label has been created, navigate to your Conversations section, select an inbox, and then select a conversation from that inbox. On your right site you should see a menu panel, and in there there is a "Conversations Label" section where you will be able to add the labes you created above.

### How to request a file from Live Agent conversation? 
<figure>
<img src="{{config.site_url}}live-agent/images/LA-request-file.png" width="100%" alt="Live Agent request file" />
  <figcaption>Live Agent agent request file from the user</figcaption>
</figure>

### How to add an agent to a new inbox?
You will need to log into the Live Agent with and admin role, then navigate to settings->Inboxes, and look for the inbox you want.
From that inbox select settings/Collaborators and pick your agent name, once you are done click on "Update" button

### How to create a team and add team members in the respective team? 
You will need to navigate into settings/Teams and click on "Create new team" button. In the second step you will be able to add agents into the team. You can also edit the team on a later stage and add more agents then.

### How to see all the agents added in a particular inbox?
You will need to navigate into settings/Inboxes search for the inbox, and click on "Settings", in there you will see a "Collaborators" tab, where you will see all the collaborators agents for that inbox.

### How to get the Access Token(API Key)?
The access token associated to your user is available for you under your  => Profile Settings/Access Token.

### How to view the account id and the inbox id? 
You could take this information form the url of the page your are in. 
e.g if you navigate into any inbox. in your url you should see some like this: http://your-host-domain/app/accounts/1/inbox/4
from this url we can see that accounts/account_id/inbox/inbox_id, hence from the above example url you would have account_id = 1 and inbox_id = 4

### How to navigate to the Cognigy.ai platform from Live Agent?
Right now you can not. You will need to enter the url of your cognigy.ai host in your browser.

### How to send a reset password link for Live Agent agent by an Admin?
All the users administration must be done from the cognigy.ai platform, is in there where you can reset your password.

### What happened if you remove an inbox from the LiveAgent?
If you remove an inbox created manually by yourself nothing happends. But you should not change/update/delete the default inbox
created by the cognigy.ai platform, as you would break the communication protocol between LiveAgent and Cognigy.ai and there is no way
to easly undo this step.

### What happened if you remove a user from the LiveAgent?
Removing a user from the LiveAgent is a bit superfluous, the user would be removed but the next time she/he tries to log back in, his/her user would be recreated. All the users management must be done from the Cognigy.ai platform site. 

### How do I remove a user?
Removing a user can be achived from the cognigy.ai platform. You can take out its agent role, so that user will not be able to log into the LiveAgent system anymore or if you like you could completely remove that user from the cognigy.ai platform.
If you log into the Cognigy.ai as an admin, on the top righ, under the "User Menu", you will see an "Access Control" section. From there you can manage the user.


## LiveAgent OData service

### Why is the Odata service not returning all the information from the db?
The OData service can just return data belonging to your account.

### Why is the Odata service not working? 
Does your user have an admin role? Odata just  works for admin roles. 

### How to retrieve all content from a particular collection?(Ex: Conversation, Message)
To achive this you could use some trick like filtering by some value very big like:
e.g. http://{{host}}:{{port}}/v1.0/odata/Conversation?$filter=created_at le '2126-11-23T00:00:00'
This will return all the fields for the Converation model created before the 23/11/2126. 

Please refer to the [odata section](./tools/odata-endpoint.md) for more information.  

### How to filter OData with particular fields? 
e.g. http://{{host}}:{{port}}/v1.0/odata/Conversation?$select=id,account_id&$filter=created_at le '2026-11-23T00:00:00'
in this example it is requesting the fields id and account_id from the Converstaion model where the created_at field is lower than '2026-11-23T00:00:00'

Please refer to the [odata section](./tools/odata-endpoint.md) for more information.  

 