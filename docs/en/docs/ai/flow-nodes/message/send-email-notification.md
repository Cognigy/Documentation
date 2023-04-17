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

The Email Notification Node allows you to send quick and easy emails during sessions or for in-house communications without requiring any provider settings to be set up in the UI. Instead, you can configure the necessary provider settings in the environment variables and secrets. Only one provider can be set up at a time. 

## Restrictions

*  Your SMTP Server settings need to be adjusted to use the internal Cognigy Email notification.
*  Email attachments are restricted (for example, files, images). If required, use [Send SMTP Email Node](send-smtp-email.md).

## Authentication

This Node supports both Basic Auth and OAuth2 authentication methods.

If you have on-premises installation, you need to add the following parameters to the `values.yaml` file:

=== "OAuth2 (recommended)"
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
    EMAIL_NOTIFICATION_SMTP_EMAIL_SERVICE_TYPE: "<email service, for example, Outlook365>"
    EMAIL_NOTIFICATION_SMTP_OAUTH2_TOKEN_ACCESS_URL: "<provider token access url, for example, for Microsoft https://login.microsoftonline.com/common/oauth2/v2.0/token, for Google https://accounts.google.com/o/oauth2/token>"
    EMAIL_NOTIFICATION_SMTP_OAUTH2_EXPIRY_DATE_UNIX_TIMESTAMP: "<unix timestamp for the current accessToken, for example, 1681382246000>"
    EMAIL_NOTIFICATION_SMTP_TLS_REQUIRED: "<tls method>"
    ```

=== "Basic Auth"
    object:

    ```yaml
    smtpEmailNotificationCredentials:
      authType: "basic"
      basic:
        username: "<your email client's username>"
        password: "<your email clientl's password>"
    ```
    variables:

    ```yaml
    EMAIL_NOTIFICATION_SMTP_AUTH_TYPE: "basic"
    EMAIL_NOTIFICATION_SMTP_HOST: "<SMTP_HOST>"
    EMAIL_NOTIFICATION_SMTP_PORT: "<SMTP_PORT>"
    EMAIL_NOTIFICATION_SMTP_FROM: "<smtp-server>@domain.com"
    EMAIL_NOTIFICATION_SMTP_TLS_REQUIRED: "<tls method>"
    ```


## Settings

### Recipient TO Email Addresses

Comma-separated list of email addresses to send the email to.

### Email Subject

The subject of the email.

### Email Content

The content of the email.
The field supports basic rich text editing.

### Store location of SMTP Request result

Can be set to **Don't store result** (default), **Input**, or **Context**.
If set to **Input** or **Context**, you can define a location for the result within **Input** or **Context**.
The result of the sent mail response will then be put at that location.

#### Stop on Error

If switched on, the flow execution will halt in case the mail-sending fails.

#### CC Email Addresses

The CC recipients of your email.

#### BCC Email Addresses

The BCC recipients of your email.

#### Execute Request asynchronous

If switched on, the flow execution will **continue directly after** the Send Email Node was triggered. If turned-off, flow execution will **wait until the email is sent**.

## Email Template
<div class="divider"></div>

The email will be sent with templating around it, looking roughly like this:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/eccd2bc-Screen_Shot_080.PNG" width="100%" />
</figure>

The recipient will get the email notification

