---
title: "Cognigy.AI Sign-in and Sign-out"
slug: "AI-login"
hidden: false
---

# Cognigy.AI Sign-in and Sign-out

Users can sign in to Cognigy.AI with this URL:

```txt
https://<frontend-url>/login
```

For example, the `frontend-url` for the Trial Cognigy environment is `trial.cognigy.ai`.

## Limit active login sessions

By default, you can log in to Cognigy.AI sessions in differents browser at the same time. To limit the number of sessions, proceed as follows:

- For SaaS installations, contact Cognigy support.
- For on-premises installations, set `REFRESH_TOKEN_MAX_AMOUNT_PER_USER` to the number of sessions you want to allow in the `cognigy-env` config-map. For example, if you want to allow only one session, set `REFRESH_TOKEN_MAX_AMOUNT_PER_USER=1`.

## Log in to multiple organizations

Cognigy.AI allows users to be part of multiple organizations. A user, identified by an email address and a password, can be part of different organizations. The URL to log in to Cognigy.AI should be formatted as follows, specifying the organization the user wants to log in to:

```txt
https://<frontend-url>/login?organisationId=<organisation-id>
```

The `organization-id` is a unique identifier of 24 characters that identifies an organization in the Cognigy system.

<br>
<figure>
  <img class="image-center" src="../../../../_assets/ai/installation/CognigyAI_Login.png" width="100%" />
  <figcaption> Cognigy.AI User Login page</figcaption>
</figure>

!!! warning
    If a user is part of multiple organizations and no `organizationId` is passed in the login URL, the user will be denied a login.

    For a user assigned to a single organization, including the `organizationId` in the login URL is optional and has no impact.

### Multiple organization email notification

[![Version badge](https://img.shields.io/badge/Added in-v4.27.0-blue.svg)](../../release-notes/earlier-versions/cognigy-ai-pre-4.30.md)

When a user with a valid email address belongs to multiple organizations, and if no organizationId is passed in the login URL, the user will be denied a login; but will receive an email with direct login links for each organization they belong to.
Clicking those links will open the Cognigy.AI login page with the respective organizationId param in the URL.

<figure>
  <img class="image-center" src="../../../../_assets/ai/installation/multi-org-email.png" width="100%" />
  <figcaption>Multiple organization user email on failed login</figcaption>
</figure>

### Reset a Password

Suppose a user wants to reset the password for one of the organizations to which the user is assigned. In that case, having the organizationId in the login URL is mandatory when filling out the "Forgot Password" form.

### Log in with SSO

A user who is part of multiple organizations can log in with SSO using the above same login URL, including the organizationId, and then clicking **LOG IN WITH SSO**.

More information on configuring Cognigy.AI with SSO can be found on [Single Sign-on using SAML 2.0](single-signin-saml2.md) page.

## Automatic Sign-out

The **Automatic sign-out** feature allows you to set an inactivity period for members of your organization. If a user remains inactive during this period, they will be automatically signed out.

This feature is available only for on-premises and dedicated SaaS customers. To activate the feature, specify `FEATURE_ENABLE_AUTO_LOGOUT_ON_INACTIVITY= true` in the `values.yaml` file.

By default, the inactivity period is set to 15 minutes. You can change this value by specifying `AUTO_LOGOUT_IDLE_TIME_IN_MIN=<your time in minutes>` in the `values.yaml` file.
