---
 title: "Cognigy.AI Sign-in and Sign-out" 
 slug: "AI-login" 
 hidden: false 
---

# Cognigy.AI Sign-in and Sign-out

<div class="divider"></div>

Users can sign in to Cognigy.AI with this url:

```
https://<frontend-url>/login
```

The frontend-url could for instance be trial.cognigy.ai

## Login for users in multiple organisation

<div class="divider"></div>

[![Version badge](https://img.shields.io/badge/Added in-v4.16.0-blue.svg)]({{config.site_url}})


Cognigy.AI allows users to be part of multiple organisations. A user, identified by an e-mail address and a password, can be part of different organisations. The URL to log in to Cognigy.AI should be like this, specifying which organisation the user wants to log in to:

```
https://<frontend-url>/login?organisationId=<organisation-id>
```

The `organisation-id` is a unique identifier of 24 characters which identifies an organisation in the system.

<br>
<figure>
  <img class="image-center" src="{{config.site_url}}ai/installation/images/CognigyAI_Login.png" width="100%" />
  <figcaption> Cognigy.AI User Login page</figcaption>
</figure>

!!! warning
    If a user is part of multiple organisations, and if no organisationId is passed in the login URL, then the user will be denied a login. 
    
    For a user assigned to single organisation, including the organisationId in the login URL is completely optional and has no impact.

### Multiple organisation email notification

[![Version badge](https://img.shields.io/badge/Added in-v4.27.0-blue.svg)]({{config.site_url}})

When a user with a valid email address belongs to multiple organisations, and if no organisationId is passed in the login URL, the user will be denied a login; but will receive an email with direct login links for each organisation they belong to. 
Clicking on those links will open the Cognigy.AI login page with the respective organisationId param in the URL.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/installation/images/multi-org-email.png" width="100%" />
  <figcaption>Multiple organisation user email on failed login.</figcaption>
</figure>


!!! note "Password Reset"
    If a user wants to reset the password for one of the organisations to which the user is assigned, then again it is mandatory to have the organisationId in the login url when filling out the "Forgot Password" form.

!!! note "Single Sign-on Login"
    A user who is part of multiple organisations can log in with SSO, using the above same login URL including the organisationId and then clicking "LOGIN WITH SSO". 

    More information on configuring Cognigy.AI with SSO can be found on [Single Sign-on using SAML 2.0]({{config.site_url}}ai/installation/single-signin-saml2) page

## Automatic Sign-out

This feature allows you to set an inactivity period for members of your organization. If the user is inactive during this period, the user will be automatically signed out.

This **Automatic sign-out** feature is available only for on-premises and dedicated SaaS customers. To activate the feature, specify `FEATURE_ENABLE_AUTO_LOGOUT_ON_INACTIVITY= true` in the values.yaml file.

By default, the inactivity period value is 15 minutes. You can change this value by specifying `AUTO_LOGOUT_IDLE_TIME_IN_MIN=<your time in minutes>` in the values.yaml file. 
