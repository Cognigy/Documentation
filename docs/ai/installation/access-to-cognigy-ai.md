---
title: "Access to Cognigy.AI"
slug: "access-to-cognigy-ai"
description: "Access to Cognigy.AI allows you to log in to and log out of Cognigy.AI."
hidden: false
---

# Access to Cognigy.AI

Access to Cognigy.AI allows you to log in to and log out of Cognigy.AI.

## Prerequisites

- You need to have a Cognigy.AI account.

## Login

### Limit Active Login Sessions

By default, there is no limit to the number of sessions you can start in Cognigy.AI across different browsers. However, you can set a limit for the following installations:

- For dedicated SaaS, contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/).
- For on-premises, set the `REFRESH_TOKEN_MAX_AMOUNT_PER_USER` variable in `values.yml` to the number of active sessions you want to allow. For example, if you want to allow only one active session, set `REFRESH_TOKEN_MAX_AMOUNT_PER_USER=1`.

### Log in to Cognigy.AI

You can access Cognigy.AI's login page through the following login URL:

```txt
https://<frontend-url>/login
```

`frontend-url` depends on your installation:

- For on-premises, `frontend-url` is a domain you defined to run Cognigy.AI.
- For dedicated and shared SaaS, `frontend-url` is provided to you during deployment.

For example, `frontend-url` for Cognigy.AI's trial environment is `trial.cognigy.ai`, and the login URL is `https://trial.cognigy.ai/login`.

To log in to Cognigy.AI, follow these steps:

1. Go to the login page and enter your account credentials in the following fields:

    - **E-Mail** — the email you provided to your Cognigy.AI admin to register your Cognigy.AI account.
    - **Password** — the password you received from your Cognigy.AI admin. If you don't remember your password, you can [reset your password](#reset-password).

2. _(Optional)_ If you want to stay logged in after you close your session, activate the **Remember me** option.
3. Click **Sign in**.

!!! note
    If you enter the wrong password, your account is temporarily locked. An error message appears on the screen and displays a countdown to unlock your account. The more times you enter the wrong password, the longer your account is locked.

### Reset Password

1. Go to the login page and click **Forgot Password?**.
2. Enter your email in the **E-Mail** field.
3. Click **Send link**.

You will receive an email with instructions to reset your password. You need to choose a password according to the [password policy](../administer/access/management-ui.md#password-policy) your admin set up. 

### Log in with Single Sign-on

In Cognigy.AI, you can set up [single sign-on (SSO)](single-sign-on-saml2.md) and, if necessary, you can [enforce login with SSO](single-sign-on-saml2.md) for your users.

To log in with SSO, follow these steps:

{! _includes/ai/overview/log-in-with-sso.md !}

### Multiple Organizations

In Cognigy.AI, you can be part of more than one [organization](../administer/access/management-ui.md#organizations). Each organization has a different login URL. For each organization, the login URL follows this pattern:

```txt
https://<frontend-url>/login?organisationId=<organization-id>
```

The `organization-id` parameter is a unique identifier with 24 characters that identifies an organization in Cognigy.AI.

!!! warning
    If you are part of more than one organization, you need to include `organisationId` in the login URL. Otherwise, the login fails.

#### Email Notification for Failed Login

[![Version badge](https://img.shields.io/badge/Added in-v4.27.0-blue.svg)](../../release-notes/earlier-versions/cognigy-ai-pre-4.30.md)

If your login fails because you didn't include `organisationId` in the login URL, you receive an email with login links for each organization you belong to.

The login links in the email redirect you to the Cognigy.AI login page with the `organisationId` parameter of the respective organization in the URL.

## Logout

### Log out of Cognigy.AI

To log out of Cognigy.AI, you have two options:

- In the upper-right corner of the **Main** page, select **User Menu > Logout**.
- In the bottom-left corner of the Project page, click **User Menu > Logout**.

### Automatic Logout

The **Automatic logout** feature allows you to set an inactivity period for users in your organization. If a user remains inactive longer than this period, they are automatically logged out.

By default, the inactivity period is 15 minutes. However, you can set a limit for the following installations:

- For dedicated SaaS, contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/).
- For on-premises, set the following variables in `values.yml`:
    - `FEATURE_ENABLE_AUTO_LOGOUT_ON_INACTIVITY=true`.
    - `AUTO_LOGOUT_IDLE_TIME_IN_MIN` to the inactivity period you want in minutes.