---
 title: "Accounts" 
 slug: "vg-webapp-accounts" 
 hidden: false 
---

# VoiceGateway Web App - Accounts

The _Home_ page of the Web App shows your **VoiceGateway Account**. This represents your Organisation from Cognigy.AI. An **Account** can have multiple **Applications** linked.

<img src="{{config.site_url}}voicegateway/images/VG-webapp-accounts.png" alt="VoiceGateway WebApp Accounts" />

## Account Settings

<div class="divider"></div>

| Settings                         | Description                                                                                              |
| -------------------------------- | -------------------------------------------------------------------------------------------------------- |
| AccountSid                       | Unique Identifier                                                                                        |
| Name                             | Account Name                                                                                             |
| SIP Realm                        | Domain Name that SIP devices will register with                                                          |
| Webhook Secret                   | An additional layer of security "signing" the webhook calls                                              |
| Application for SIP Device Calls | Calls from SIP users or devices registered to the Account's SIP Realm will be routed to this Application |
| Registration Webhook             | URL for your Web Application that handles registrations                                                  |
| Queue Event Webhook              | URL to notify when a member joins or leaves a queue                                                      |
| Account API Keys                 | Generated tokens needed to make RESTful API calls                                                        |
