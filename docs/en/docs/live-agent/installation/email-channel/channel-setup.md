---
sidebar_label: "Channel Setup"
title: "Setting up Email Channel"
---

### Configure Email Channel

*Email channels require [conversation continuity configured]({{config.site_url}}/conversation-continuity.md)*

1 Enable `channel_email` (Login to rails console and execute the following)

```
account = Account.find(1)
account.enabled_features // This would list enabled features.
account.enable_features('channel_email')
account.save!
```

2 Now head over to inboxes page and create an email inbox with the support email as care@your-domain.com

<img src="{{config.site_url}}live-agent/resources/images/channel_setup_1.png" width="80%" style="margin-bottom: 5px">

3 Now Add Agents who can have access to the email channel box.

4 Now you will get the email channel box address in the last step.

<img src="{{config.site_url}}live-agent/resources/images/channel_setup_2.png" width="80%" style="margin-bottom: 5px">

5 Now create a forward rule in your care@your-domain.com inbox to forward emails to the address obtained at inbox creation step.

<img src="{{config.site_url}}live-agent/resources/images/channel_setup_3.png" width="80%" style="margin-bottom: 5px">

6 You should be able to receive emails in your newly created email inbox in chatwoot.

<img src="{{config.site_url}}live-agent/resources/images/channel_setup_4.png" width="80%" style="margin-bottom: 5px">

#### Sendgrid

You can send out emails only from a verified email address in SendGrid. For sending emails from wildcard domain, do verification at domain level instead of individual email.

#### Testing On Local

You can visit `http://localhost:3000/rails/conductor/action_mailbox/inbound_emails/new` to send inbound mails from local to chatwoot inbox.