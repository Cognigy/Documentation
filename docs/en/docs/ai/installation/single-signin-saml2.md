---
 title: "Single Sign-on using SAML 2.0" 
 slug: "single-signin-saml2" 
 hidden: false 
---
# Single Sign-on using SAML 2.0

## Introduction

<div class="divider"></div>

Cognigy.AI integrates seemlessly with existing SSO (Single Sign-on) Identity Providers like Azure Active Directory, OneLogin and Okta, in order to allow users of an organisation to login to Cognigy.AI without having separate credentials for this. Users signed in through Single Sign-On will have access rights, meaning you can still use the Access Control tool in Cognigy.AI to manage the access rights of individual users.

## Getting the SSO URL

<div class="divider"></div>

In order to configure Single Sign-on in your Identity Provider, you need the URL that is used during the SAML authentication process. The SAML requests are sent to the API service, and you therefore need to use the API domain you configured for your installation. The SSO URL looks like this

```
https://<api-url>/auth/saml/login/<organisation-id>
``` 

As an example; The api-url for the trial environment is "api-trial.cognigy.ai". The *organisation-id* is the id of your organisation within Cognigy.AI. You can collect your organisationId from the [My Profile]({{config.site_url}}ai/tools/interaction-panel/profile/) page by selecting the extended menu (three dots in top right corner) and clicking "Copy Organization ID".

You will need this SSO URL when configuring your IDP in one of IDP setup guides.

!!! note "Configuring the SSO Provider with Cognigy.AI"
    Refer to one of the more specific guides for the **supported Identity Providers** at the bottom of the article under **Next Steps** for an example of the required API request. 
    In case your Identity Provider is not listed, we advise you to take [**OneLogin guide**](https://support.cognigy.com/hc/en-us/articles/360016310699-OneLogin#introduction-0-0) as an example. The API request for configuring SSO with Cognigy.AI is identical, yet the configuration values differ per provider.

## Getting the SLO URL
<div class="divider"></div>

!!! warning "Only avaiable for certain IDPs"
    Single Logout is currently only supported with OneLogin and Microsoft Azure Active Directory.

In order to configure Single Logout for your Identity Provider, you need the URL used to process the logout request from the IDP. During SLO, the IDP will redirect to the frontend of Cognigy.AI, and you therefore need to use the frontend domain you configured for your installation. The SLO URL looks like this

```
https://<frontend-url>/slo/<organisation-id>
``` 

The frontend-url could for instance be trial.cognigy.ai

!!! warning "SP initiated SLO"
    [![Version badge](https://img.shields.io/badge/Added in-v4.25.0-blue.svg)]({{config.site_url}})

    Service Provider initiated Single Logout is only supported with Microsoft Azure Active Directory.

!!! warning "IDP initiated SLO"
    Identity Provider initiated Single Logout is only supported with OneLogin

!!! warning "Cognigy Help Center"
    Find out more about connecting to your proffered SSO provider in our [Help Center](https://support.cognigy.com/hc/en-us/sections/360004563679-Single-Sign-on)

## Changing a Single Sign-on Configuration in Cognigy.AI

<div class="divider"></div>

You can only have one SSO configuration for your organisation. If you want to change the configuration, you first have to delete it and create a new one. To delete an SSO configuration, send a ```POST``` request to:

```
https://<api-url>/v2.0/identityprovider/reset
``` 

!!! note "API Reference"
    Read more about using the Cognigy.AI API on the [API Reference Page](https://api-trial.cognigy.ai/openapi#post-/v2.0/identityprovider/reset)

## Logging in via SSO


<div class="divider"></div>

When a user logs into Cognigy.AI via SSO for the first time, they have to do it from the Identity Provider. Doing this will give them the correct access rights in Cognigy.AI, and allow them to login via the Cognigy.AI login page on subsequent logins.

!!! warning "Logging in for the first time"
    Users have to login from the IDP on the first login.


To login to Cognigy.AI from the login page, click on ```Login with SSO``` and enter your email. This will redirect you to your IDP if an IDP is configured for your organisation.

## More information

- [Help Center: SSO with Azure Active Directory](https://support.cognigy.com/hc/en-us/articles/360016310859-Azure-Active-Directory)
- [Help Center: SSO with Google](https://support.cognigy.com/hc/en-us/articles/360016274780-Google)
- [Help Center: SSO with Okta](https://support.cognigy.com/hc/en-us/articles/360016311079-Okta)
- [Help Center: SSO with OneLogin](https://support.cognigy.com/hc/en-us/articles/360016310699-OneLogin)
- [Help Center: SSO with Auth0](https://support.cognigy.com/hc/en-us/articles/360018693139)
