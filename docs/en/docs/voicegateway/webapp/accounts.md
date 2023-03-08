---
 title: "Accounts" 
 slug: "vg-webapp-accounts" 
 hidden: false 
---

# Accounts

*Accounts* represent your [Organisation](../../ai/tools/user-menu/organisation-details.md) from Cognigy.AI. 

To create an account, in the left-side menu, select Accounts, then click **Add account** or **+**.

You can create more than one account.

After creating an account, you can edit or delete it.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-accounts.png"  width="100%" />

## Settings

| Settings                         | Description                                                                                                                  | Scope                           |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------| ------------------------------- |
| Account SID                      | The value generates automatically when the admin creates an account                                                          | Account, Service Provider, Admin|
| Account name                     | A unique account name.                                                                                                       | Account, Service Provider, Admin|
| Unit                             | You can choose sessions or minutes and specify a maximum number of them.                                                     | Admin                           |
| Licensed sessions                | A number of purchased sessions.                                                                                              | Admin                           |
| SIP Realm                        | A domain name that SIP devices will register with.                                                                           | Account, Service Provider, Admin|
| Webhook Secret                   | A layer of security "signing" the webhook calls.                                                                             | Account, Service Provider, Admin|
| Application for SIP device calls | Select the application which is used to handle incoming calls from SIP users who have registered to the Account's SIP Realm. | Account, Service Provider, Admin|
| Application for SIPREC calls     | Select the application for [SIPREC](https://datatracker.ietf.org/doc/html/rfc7866) calls.                                    | Account, Service Provider, Admin|
| Registration Webhook             | A URL for your Web Application that handles registrations.                                                                   | Account, Service Provider, Admin|
| Queue Event Webhook              | A URL to notify when a member joins or leaves a queue.                                                                       | Account, Service Provider, Admin|
| Account API keys                 | You can generate API key by clicking **Add key**.                                                                            | Account, Service Provider, Admin|
