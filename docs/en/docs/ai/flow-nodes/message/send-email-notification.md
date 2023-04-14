---
title: "Email Notification"
slug: "email-notification"
hidden: false
---
# Send Email Notification

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/36b6341-Screenshot_from_2021-05-17_15-55-12.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

The Email Notification Node allows you to send quick and easy emails during presentation sessions or for in-house communications, without requiring any provider settings. Additionally, you can use the Email Notification Node to send emails from your Cognigy installation to users. This feature can be helpful if you want to trigger a report for your Flow architects, for example.

## Restrictions

*  Your SMTP Server settings need to be adjusted to use the internal Cognigy Email notification.
*  Email attachments are restricted (e.g. files, images). If required, use [Send SMTP Email Node](send-smtp-email.md).

## Authentication

This Node supports OAuth2 authentication method.

If you have on-premises installation, you need to add the following parameters to the `values.yaml` file:

object:

```yaml
smtpEmailNotificationCredentials:
 authType: "oauth2"
 oauth2:
  user: "<smtp-server>@domain.com"
  clientId: "your client id"
  clientSecret: "your client secret"
  refreshToken: "your refresh token"
  accessToken: "your access token"
```
variables:

```yaml
EMAIL_NOTIFICATION_SMTP_FROM: "<smtp-server>@domain.com"
EMAIL_NOTIFICATION_SMTP_AUTH_TYPE: "oauth2"
EMAIL_NOTIFICATION_SMTP_EMAIL_SERVICE_TYPE: "<for example, Outlook365>"
EMAIL_NOTIFICATION_SMTP_OAUTH2_TOKEN_ACCESS_URL: "https://login.microsoftonline.com/common/oauth2/v2.0/token"
EMAIL_NOTIFICATION_SMTP_OAUTH2_EXPIRY_DATE_UNIX_TIMESTAMP: "1681382246000"
EMAIL_NOTIFICATION_SMTP_TLS_REQUIRED: "starttls"
```

## Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/463d0cb-Screenshot_from_2021-05-17_15-58-55.png" width="75%" />
</figure>

### Recipients & Sender Configuration
#### Recipient Email Address
The recipient of your email. Separate multiple recipients with a comma or semicolon.

#### CC Email Addresses (Advanced)
The CC recipients of your email.

#### BCC (Advanced)
The BCC recipients of your email.

### Content
#### Email Subject
The subject of the email.

#### Email Content
The content of the email.
The field supports basic rich text editing.

#### Priority (Advanced)
You can use this to set your priority to "high", "normal" (default) or "low"

### Behavior
#### Result Storage
Can be set to "Don't store result" (default), "Input" or "Context".
If set to "Input" or "Context", you can define a location for the result within "Input" or "Context.
The result of the sent mail response will then be put at that location.

#### Stop on Error
If switched on, the flow execution will halt in case the mail-sending fails.

#### Execute Request asynchronous (Advanced)
If switched on, the flow execution will **continue directly after** the Send Email Node was triggered. If turned off, flow execution will **wait until the email is sent**.

## Email Template
<div class="divider"></div>

The email will be sent with templating around it, looking roughly like this:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/eccd2bc-Screen_Shot_080.PNG" width="100%" />
</figure>

The recipient will get the email notification

