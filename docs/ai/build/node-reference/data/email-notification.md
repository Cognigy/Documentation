---
title: "Email Notification"
slug: "email-notification"
hidden: false
---
# Email Notification

[![Version badge](https://img.shields.io/badge/Updated in-v4.49-blue.svg)](../../../../release-notes/4.49.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/email-notification.png" width="50%" />
</figure>

## Description

The Email Notification Node allows you to send quick and easy emails during sessions or for in-house communications without requiring any provider settings to be set up in the UI. Instead, you can configure the necessary provider settings in the environment variables and secrets. Only one provider can be set up at a time. 

## Restrictions

-  Your SMTP Server settings need to be adjusted to use the internal Cognigy Email notification.
-  Email attachments are restricted (for example, files, images). If required, use [Send SMTP Email Node](send-smtp-email.md).

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
    EMAIL_NOTIFICATION_SMTP_TLS_REQUIRED: "<tls method, for example, 'tls' for default TLS on port 443, 'starttls' to upgrade an insecure connection on the same port, or 'none' to connect without TLS>"
    ```
    Cognigy.AI caches connections by default, and for OAuth2 connections, Cognigy.AI also caches the refresh and access tokens. To update the refresh token or access token, create a [Snapshot](../../../deploy/snapshots.md).

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
    EMAIL_NOTIFICATION_SMTP_TLS_REQUIRED: "<tls method, for example, 'tls' for default TLS on port 443, 'starttls' to upgrade an insecure connection on the same port, or 'none' to connect without TLS>"
    ```


## Parameters

| Parameter                    | Description                                                           |
|------------------------------|-----------------------------------------------------------------------|
| Recipient TO Email Addresses | Comma-separated list of email addresses to send the email to.         |
| Email Subject                | The subject of the email.                                             |
| Email Content                | The content of the email. The field supports basic rich text editing. |

??? info "Store location of SMTP Request result"
    | Option             | Description                                                                                |
    |--------------------|--------------------------------------------------------------------------------------------|
    | Don't store result | Default option. The result isn't stored.                                                   |
    | Input              | The result is stored at a specified location in the **Input Key to store Result** field.   |
    | Context            | The result is stored at a specified location in the **Context Key to store Result** field. |

    #### Stop on Error

    If switched on, the Flow execution will halt in case the mail-sending fails.

??? info "Advanced"
    | Parameter                    | Description                                                                                                                                                          |
    |------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | CC Email Addresses           | The CC recipients of your email.                                                                                                                                     |
    | BCC Email Addresses          | The BCC recipients of your email.                                                                                                                                    |
    | Email Priority               | The priority of the email.                                                                                                                                           |
    | Execute Request asynchronous | If switched on, the Flow execution continues directly after the Send Email Node has been triggered. If turned-off, the Flow execution waits until the email is sent. |
