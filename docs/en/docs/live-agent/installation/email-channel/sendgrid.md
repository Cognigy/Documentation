---
title: Guide to setting up Conversation Continuity with SendGrid
sidebar_label: Sendgrid
---

This doc will help you set up [Conversation continuity](https://www.chatwoot.com/docs/self-hosted/configuration/features/email-channel/conversation-continuity) with SendGrid.

## Installation

This example is based on a Heroku installation of Live Agent, and using SendGrid for outgoing email. For more information about installing Live Agent, go [here](https://www.chatwoot.com/docs/self-hosted#deployment).

## Configuring inbound reply emails

Firstly, we need to tell our Live Agent instance what mailer we're using to handle incoming emails. We do that with a config var. Go to your Heroku dashboard, click on your Live Agent instance and click settings.

<img src="{{config.site_url}}live-agent/resources/images/sendgrid1.png" width="50%" style="margin-bottom: 5px">

Then scroll until you see two blank fields with an add button. There, enter:

```javascript
RAILS_INBOUND_EMAIL_SERVICE=sendgrid
```
<img src="{{config.site_url}}live-agent/resources/images/sendgrid2.jpg" width="50%" style="margin-bottom: 5px">

Next, we're going to set a password. We'll use this later on with SendGrid. For this example, we'll use something simple - like ```potatosalad```, but like all passwords - you should always use a secure mixture of letters, numbers and symbols.

<img src="{{config.site_url}}live-agent/resources/images/sendgrid3.jpg" width="50%" style="margin-bottom: 5px">

## SendGrid

Now we're going to set up the domain we're using for inbound emails. Because you're most likely going to have an email service like Google Workspace or Microsoft 365 for Business, you should use a subdomain for your inbound emails to Live Agent.

For example, let's say we used support.example.com as our domain. In this instance, we'd add an MX record pointing support.example.com to ```mx.sendgrid.net``` with a priority of ```10```.

You should wait a while (usually an hour will do). You can use [mxtoolbox.com](https://mxtoolbox.com) to check if the MX record has been propogated. If you see something like this, you can move onto the next step:

<img src="{{config.site_url}}live-agent/resources/images/sendgrid4.png" width="50%" style="margin-bottom: 5px">

Now, go to the SendGrid dashboard at [app.sendgrid.com](https://app.sendgrid.com). Select Settings, and Inbound Parse.

<img src="{{config.site_url}}live-agent/resources/images/sendgrid5.png" width="50%" style="margin-bottom: 5px">

Then click "Add Host & URL".

<img src="{{config.site_url}}live-agent/resources/images/sendgrid6.png" width="50%" style="margin-bottom: 5px">

**Receiving Subdomain** should be the domain you set up the MX record for earlier.

<img src="{{config.site_url}}live-agent/resources/images/sendgrid7.png" width="50%" style="margin-bottom: 5px">

Then add your **Destination URL**. Your Destination URL should look something like this:

```https://actionmailbox:potatosalad@chatwoot.example.com/rails/action_mailbox/sendgrid/inbound_emails```
``potatosalad`` is the password we set earlier, and ``Live Agent.example.com`` is the URL of our Live Agent instance. Everything else should stay the same.
<img src="{{config.site_url}}live-agent/resources/images/sendgrid8.png" width="50%" style="margin-bottom: 5px">
:::important
Make sure to check "POST the raw, full MIME message". In order to function correctly, Action Mailbox needs the raw MIME message.
<img src="{{config.site_url}}live-agent/resources/images/sendgrid-important.png" width="50%" style="margin-bottom: 5px">
:::
## Setting the inbound domain variable in Heroku
Finally, we need to tell our Live Agent installation what domain we're using with SendGrid.
Your variable should look like this:
```javascript
MAILER_INBOUND_EMAIL_DOMAIN=support.example.com
```

You should change ``support.example.com`` to the domain you used with SendGrid.

<img src="{{config.site_url}}live-agent/resources/images/sendgrid9.png" width="50%" style="margin-bottom: 5px">

## Next steps

You're done! Next, you should [enable the email channel](https://www.chatwoot.com/docs/self-hosted/configuration/features/email-channel/setup).