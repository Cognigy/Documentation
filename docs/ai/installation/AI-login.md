---
title: "Log In to and Log Out of Cognigy.AI"
slug: "AI-login"
hidden: false
---

# Log In to and Log Out of Cognigy.AI

## Prerequisites

- You need to have a Cognigy.AI account.

## Log In

You can log in to Cognigy.AI with the following login page URL:

```txt
https://<frontend-url>/login
```

For example, the `frontend-url` for the Trial Cognigy environment is `trial.cognigy.ai`.

To log in to Cognigy.AI, follow these steps:

1. Go to the login page and enter your credentials in the following fields:
  - **E-Mail**
  - **Password**
2. _(Optional)_ If you want to stay logged in after you close your session, activate the **Remember me** checkbox.
3. Click **Sign in**.

## Limit Active Login Sessions

By default, there is no limit to the number of sessions you can start in Cognigy.AI across different browsers. However, you can set a limit for the following installations:

- For dedicated SaaS, contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/).
2
- For on-premises, set the `REFRESH_TOKEN_MAX_AMOUNT_PER_USER` variable in `values.yml` to the number of active sessions you want to allow. For example, if you want to allow only one active session, set `REFRESH_TOKEN_MAX_AMOUNT_PER_USER=1`.

### Reset Password

1. Go to the login page and click **Forgot Password?**.
2. Enter your email in the **E-Mail** field and click **Send link**.

### Log In with Single Sign-on

If you have set up a [single sign-on (SSO)](single-sign-in-saml2.md) login method, you can log in to Cognigy.AI by following steps:

  1. Go to the login page and click **Login with SSO**.
  2. Enter your email in the **E-Mail** field and click **Sign in with SSO**.

### Log In with Multiple Organizations

In Cognigy.AI, you can be part of more than one organization. In this case, each organization has a different login page URL. For each organization, the login page URL follows the pattern below:

```txt
https://<frontend-url>/login?organisationId=<organisation-id>
```

The `organization-id` is a unique identifier with 24 characters that identifies an organization in Cognigy.AI.

To [reset your password](#reset-password) or [log in with single sign-on (SSO)](#log-in-with-single-sign-on), use the `organization-id` in the login page URL.

!!! warning
    If you are part of more than one organization, you need to include `organizationId` in the login page URL. Otherwise, the login fails.

    If you are part of only one organization, you don't need to include the `organizationId` in the login page URL.

#### Email Notification for Failed Login

[![Version badge](https://img.shields.io/badge/Added in-v4.27.0-blue.svg)](../../release-notes/earlier-versions/cognigy-ai-pre-4.30.md)

If your login fails because you didn't include a `organizationId` in the login page URL, you receive an email with login links for each organization you belong to.

The login links in the email redirect you to the Cognigy.AI login page with the `organizationId` of the respective organization in the URL.

## Log Out

1. In the upper-right corner of the **Projects** page, click the **User Menu**.
2. Select **Logout**.

## Automatic Sign-Out

The **Automatic sign-out** feature allows you to set an inactivity period for members in your organization. If a user remains inactive during this period, they will be automatically logged out.

By default, the inactivity period is 15 minutes. However, you can set a limit for the following installations:

- For dedicated SaaS, contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/).
2
- For on-premises, set the following variables in `values.yml`:
  - `FEATURE_ENABLE_AUTO_LOGOUT_ON_INACTIVITY=true`
  - `AUTO_LOGOUT_IDLE_TIME_IN_MIN` to the inactivity period you want in minutes
