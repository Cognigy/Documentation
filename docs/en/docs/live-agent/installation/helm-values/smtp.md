---
 title: "SMTP" 
 slug: "smtp" 
 hidden: false 
---
# SMTP

SMTP needs to be configured for functionalities such as agent notifications regarding new conversations, lost my password, verify agent accounts, etc.

## Values

| Name                                | Type                                                                | Default Value                                              |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `configmap.SMTP_ADDRESS`                  | Set your smtp address.                                                          |`""`                                      |
| `configmap.SMTP_AUTHENTICATION`           | Allowed values: `plain`,`login`,`cram_md5`                                      | `"plain"`                                |
| `configmap.SMTP_ENABLE_STARTTLS_AUTO`     | Defaults to true.                                                               | `"true"`                                 |
| `configmap.SMTP_OPENSSL_VERIFY_MODE`      | Can be: `none`, `peer`, `client_once`, `fail_if_no_peer_cert`                   | `"none"`                                 |
| `configmap.SMTP_PASSWORD`                 | SMTP password, ignored when the secret is defined                               | `""`                                     |
| `configmap.SMTP_PORT`                     | SMTP port                                                                       | `"587"`                                  |
| `configmap.SMTP_USERNAME`                 | SMTP username                                                                   | `""`                                     |
| `configmap.MAILER_SENDER_EMAIL`           | The email from which all outgoing emails are sent.                              | `""`                                     |

### Creating a secret for the SMTP passsword

Before installing Live Agent with Helm, create a secret on the Kubernetes cluster namespace where Live Agent is installed. Then note the name and the key down and set the following values:

| Name                                | Type                                                                | Default Value                                              |
| ----------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `smtp.secret`                  | SMTP secret name                                                          |`""`                                      |
| `smtp.secretPasswordKey`           | SMTP secret key                                      | `""`                                |

## Configuring different SMTP servers

Here is a sample of the configurations for getting mailing working for the Live Agent application.  Remember that the SMTP password is stored in the secret as mentioned above.

For sender, you could user either `email@yourdomain.com` or `BrandName <email@yourdomain.com>`

| Name            | Type | Value | 
| --------------- | ----- | ---- | 
| configmap.MAILER_SENDER_EMAIL | string | `""` |

and based on your SMTP server the following variables

| Name            | Type | Value | 
| --------------- | ----- | ---- | 
| configmap.SMTP_ADDRESS | string | `""` |
| configmap.SMTP_USERNAME | string | `""` |
| Password secret | string | `""` |

## No authentication

If you server don't need authentication, comment or don't provide these values SMTP_AUTHENTICATION. SMTP_USERNAME, SMTP_PASSWORD on the `values.yaml` file.

| Name            | Type | Value | 
| --------------- | ----- | ---- | 
| configmap.MAILER_SENDER_EMAIL | string | `"Your SMTP username>"` |
| configmap.SMTP_ADDRESS | string | `"smtp-mail.outlook.com"` |
| configmap.SMTP_ENABLE_STARTTLS_AUTO | bool | `true` |
| configmap.SMTP_PORT | string | `"587"` |

## Amazon SES

| Name            | Type | Value | 
| --------------- | ----- | ---- | 
| configmap.SMTP_ADDRESS | string | `"email-smtp.<region>.amazonaws.com"` |
| configmap.SMTP_AUTHENTICATION | string | `"plain"` |
| configmap.SMTP_ENABLE_STARTTLS_AUTO | bool | `true` |
| configmap.SMTP_USERNAME | string | `"<Your SMTP username>"` |
| Secret Password | string | `"<Your SMTP password>"` |


## Outlook

The sender and username must be the same in Outlook.

| Name            | Type | Value | 
| --------------- | ----- | ---- | 
| configmap.MAILER_SENDER_EMAIL | string | `"Your SMTP username>"` |
| configmap.SMTP_ADDRESS | string | `"smtp-mail.outlook.com"` |
| configmap.SMTP_AUTHENTICATION | string | `"login"` |
| configmap.SMTP_ENABLE_STARTTLS_AUTO | bool | `true` |
| configmap.SMTP_USERNAME | string | `"<Your SMTP username>"` |
| Secret Password | string | `"<Your SMTP password>"` |
| configmap.SMTP_PORT | string | `"587"` |


## SendGrid

| Name            | Type | Value | 
| --------------- | ----- | ---- | 
| configmap.SMTP_ADDRESS | string | `"smtp.sendgrid.net"` |
| configmap.SMTP_AUTHENTICATION | string | `"plain"` |
| configmap.SMTP_DOMAIN | string | `"<your verified domain>"` |
| configmap.SMTP_ENABLE_STARTTLS_AUTO | bool | `true` |
| configmap.SMTP_PORT | string | `"587"` |
| configmap.SMTP_USERNAME | string | `"apikey"` |
| Secret Password | string | `"<your Sendgrid API key>"` |


## MailGun

| Name            | Type | Value | 
| --------------- | ----- | ---- | 
| configmap.SMTP_ADDRESS | string | `"smtp.mailgun.org"` |
| configmap.SMTP_AUTHENTICATION | string | `"plain"` |
| configmap.SMTP_DOMAIN | string | `"<Your domain, this has to be verified in Mailgun>"` |
| configmap.SMTP_ENABLE_STARTTLS_AUTO | bool | `true` |
| configmap.SMTP_PORT | string | `"587"` |
| configmap.SMTP_USERNAME | string | `"<Your SMTP username, view under Domains tab>"` |
| Secret Password | string | `"<Your SMTP password, view under Domains tab>"` |


## Mandrill
If you would like to use Mailchimp to send your emails, use the following environment variables:
Note: Mandrill is the transactional email service for Mailchimp. You need to enable transactional email and login to mandrillapp.com.

| Name            | Type | Value | 
| --------------- | ----- | ---- | 
| configmap.SMTP_ADDRESS | string | `"smtp.mandrillapp.com"` |
| configmap.SMTP_AUTHENTICATION | string | `"plain"` |
| configmap.SMTP_DOMAIN | string | `"<Your verified domain in Mailchimp>"` |
| configmap.SMTP_ENABLE_STARTTLS_AUTO | bool | `true` |
| configmap.SMTP_PORT | string | `"587"` |
| configmap.SMTP_USERNAME | string | `"<Your SMTP username displayed under Settings -> SMTP & API info>"` |
| Secret Password | string | `"<Any valid API key, create an API key under Settings -> SMTP & API Info>"` |

