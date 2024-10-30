---
title: "SMTP" 
slug: "smtp" 
hidden: false 
tags:
  - Live Agent
  - Helm Values
  - SMTP
---

# SMTP

SMTP needs to be configured for functionalities such as Agent notifications for new conversations, password resets, to verify new Agent accounts, etc.

## Values

| Name                                  | Type                                                          | Default Value |
|---------------------------------------|---------------------------------------------------------------|---------------|
| `configmap.SMTP_ADDRESS`              | Set your SMTP address.                                        | `""`          |
| `configmap.SMTP_AUTHENTICATION`       | Allowed values: `plain`,`login`,`cram_md5`                    | `"plain"`     |
| `configmap.SMTP_ENABLE_STARTTLS_AUTO` | Defaults to true.                                             | `"true"`      |
| `configmap.SMTP_OPENSSL_VERIFY_MODE`  | Can be: `none`, `peer`, `client_once`, `fail_if_no_peer_cert` | `"none"`      |
| `configmap.SMTP_PASSWORD`             | SMTP Password, ignored when the secret is defined.            | `""`          |
| `configmap.SMTP_PORT`                 | SMTP Port                                                     | `"587"`       |
| `configmap.SMTP_USERNAME`             | SMTP Username                                                 | `""`          |
| `configmap.MAILER_SENDER_EMAIL`       | The email from which all outgoing emails are sent.            | `""`          |

### Creating A Secret For The SMTP Password

Before installing Live Agent with Helm, create a secret on the Kubernetes cluster namespace where Live Agent is installed. Take note of the SMTP secret name and key, and set the following values:

| Name                     | Type             | Default Value |
|--------------------------|------------------|---------------|
| `smtp.secret`            | SMTP Secret Name | `""`          |
| `smtp.secretPasswordKey` | SMTP Secret Key  | `""`          |

## Configuring Different SMTP Servers

Here is a sample of configurations for getting email functionality working for the Live Agent application.  Remember that the SMTP password is stored in the secret, as mentioned above.

For the following sender value, you could use either `email@yourdomain.com` or `BrandName <email@yourdomain.com>`

| Name                          | Type   | Value |
|-------------------------------|--------|-------|
| configmap.MAILER_SENDER_EMAIL | string | `""`  |

Set the following variables based on your SMTP server configuration.

| Name                    | Type   | Value |
|-------------------------|--------|-------|
| configmap.SMTP_ADDRESS  | string | `""`  |
| configmap.SMTP_USERNAME | string | `""`  |
| Password secret         | string | `""`  |

## No Authentication

If your server does not need authentication, comment, or don't provide these values: `SMTP AUTHENTICATION`, `SMTP_USERNAME`, `SMTP_PASSWORD` in the `values.yaml` file.

| Name                                | Type    | Value                     |
|-------------------------------------|---------|---------------------------|
| configmap.MAILER_SENDER_EMAIL       | string  | `"Your SMTP Username"`    |
| configmap.SMTP_ADDRESS              | string  | `"smtp-mail.outlook.com"` |
| configmap.SMTP_ENABLE_STARTTLS_AUTO | bool    | `true`                    |
| configmap.SMTP_PORT                 | string  | `"587"`                   |

## Amazon SES

| Name                                | Type   | Value                                 | 
|-------------------------------------|--------|---------------------------------------|
| configmap.SMTP_ADDRESS              | string | `"email-smtp.<region>.amazonaws.com"` |
| configmap.SMTP_AUTHENTICATION       | string | `"plain"`                             |
| configmap.SMTP_ENABLE_STARTTLS_AUTO | bool   | `true`                                |
| configmap.SMTP_USERNAME             | string | `"<Your SMTP Username>"`              |
| Secret Password                     | string | `"<Your SMTP Password>"`              |


## Outlook

The sender and username must be the same as in Outlook.

| Name                                | Type   | Value                     |
|-------------------------------------|--------|---------------------------|
| configmap.MAILER_SENDER_EMAIL       | string | `"Your SMTP Username"`    |
| configmap.SMTP_ADDRESS              | string | `"smtp-mail.outlook.com"` |
| configmap.SMTP_AUTHENTICATION       | string | `"login"`                 |
| configmap.SMTP_ENABLE_STARTTLS_AUTO | bool   | `true`                    |
| configmap.SMTP_USERNAME             | string | `"<Your SMTP username>"`  |
| Secret Password                     | string | `"<Your SMTP Password>"`  |
| configmap.SMTP_PORT                 | string | `"587"`                   |


## SendGrid

| Name                                | Type   | Value                       |
|-------------------------------------|--------|-----------------------------|
| configmap.SMTP_ADDRESS              | string | `"smtp.sendgrid.net"`       |
| configmap.SMTP_AUTHENTICATION       | string | `"plain"`                   |
| configmap.SMTP_DOMAIN               | string | `"<Your Verified Domain>"`  |
| configmap.SMTP_ENABLE_STARTTLS_AUTO | bool   | `true`                      |
| configmap.SMTP_PORT                 | string | `"587"`                     |
| configmap.SMTP_USERNAME             | string | `"apikey"`                  |
| Secret Password                     | string | `"<your Sendgrid API key>"` |


## MailGun

| Name                                | Type    | Value                                                 |
|-------------------------------------|---------|-------------------------------------------------------|
| configmap.SMTP_ADDRESS              | string  | `"smtp.mailgun.org"`                                  |
| configmap.SMTP_AUTHENTICATION       | string  | `"plain"`                                             |
| configmap.SMTP_DOMAIN               | string  | `"<Your Domain, this has to be verified in Mailgun>"` |
| configmap.SMTP_ENABLE_STARTTLS_AUTO | bool    | `true`                                                |
| configmap.SMTP_PORT                 | string  | `"587"`                                               |
| configmap.SMTP_USERNAME             | string  | `"<Your SMTP Username, view under Domains tab>"`      |
| Secret Password                     | string  | `"<Your SMTP Password, view under Domains tab>"`      |


## Mandrill
If you would like to use Mailchimp to send your emails, use the following environment variables:

>Note: Mandrill is the transactional email service for Mailchimp. You need to enable transactional email and log in to `mandrillapp.com`.

| Name                                | Type   | Value                                                                        |
|-------------------------------------|--------|------------------------------------------------------------------------------|
| configmap.SMTP_ADDRESS              | string | `"smtp.mandrillapp.com"`                                                     |
| configmap.SMTP_AUTHENTICATION       | string | `"plain"`                                                                    |
| configmap.SMTP_DOMAIN               | string | `"<Your Verified Domain in Mailchimp>"`                                      |
| configmap.SMTP_ENABLE_STARTTLS_AUTO | bool   | `true`                                                                       |
| configmap.SMTP_PORT                 | string | `"587"`                                                                      |
| configmap.SMTP_USERNAME             | string | `"<Your SMTP Username, displayed under Settings -> SMTP & API info>"`        |
| Secret Password                     | string | `"<Any Valid API key, create an API key under Settings -> SMTP & API Info>"` |

