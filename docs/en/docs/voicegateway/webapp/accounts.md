---
 title: "Accounts" 
 slug: "vg-webapp-accounts" 
 hidden: false 
---

# Accounts

*Accounts* are containers for resources such as [applications](applications.md), [carriers](carriers.md), and [speech services](speech-services.md) that are used to create and manage voice applications.

In Voice Gateway, an account may represent a specific customer organization and can have multiple users associated with it. 

The account owner controls what the other users can see and do within the platform, ensuring that sensitive data and functions are kept secure. The account owner can be a user with Service Provider and Admin scopes. They can create more than one account and manage them. To create an account, in the left-side menu, select Accounts, then click **Add account** or **+**.

A user with the Account scope can view and edit only the account to which they belong.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-accounts.png"  width="100%" />

## Settings

| Settings                         | Description                                                                                                                  | Scope                           |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| Account SID                      | The value generates automatically when the admin creates an account                                                          | Account, Service Provider, Admin |
| Account name                     | A unique account name.                                                                                                       | Account, Service Provider, Admin |
| Unit                             | You can choose sessions or minutes and specify a maximum number of them.                                                     | Admin                           |
| Licensed sessions                | A number of purchased sessions.                                                                                              | Admin                           |
| SIP Realm                        | A domain name that SIP devices will register with.                                                                           | Account, Service Provider, Admin |
| Webhook Secret                   | A layer of security "signing" the webhook calls.                                                                             | Account, Service Provider, Admin |
| Application for SIP device calls | Select the application which is used to handle incoming calls from SIP users who have registered to the Account's SIP Realm. | Account, Service Provider, Admin |
| Application for SIPREC calls     | Select the application for [SIPREC](https://datatracker.ietf.org/doc/html/rfc7866) calls.                                    | Account, Service Provider, Admin |
| Registration Webhook             | A URL for your Web Application that handles registrations.                                                                   | Account, Service Provider, Admin |
| Queue Event Webhook              | A URL to notify when a member joins or leaves a queue.                                                                       | Account, Service Provider, Admin |
| Account API keys                 | You can generate API key by clicking **Add key**.                                                                            | Account, Service Provider, Admin |
