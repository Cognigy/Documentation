---
 title: "Single Sign-on using SAML 2.0" 
 slug: "single-signin-saml2" 
 hidden: false 
---
# Single Sign-on using SAML 2.0

Cognigy.AI integrates with popular Single Sign-On (SSO) Identity Providers, such as Azure Active Directory, OneLogin, and Okta. This integration allows users within your organization to log in to Cognigy.AI without separate credentials. Using Single Sign-On automatically grants access that ensures a streamlined authentication process. Additionally, you can utilize the robust Access Control tool in Cognigy.AI to effectively manage and control the access rights of individual users.

## Get the SSO URL

<div class="divider"></div>

To configure Single Sign-on in your Identity Provider, you will need the URL that is used during the SAML authentication process. The SAML requests are sent to the API service, so you should use the API domain that you have configured for your installation. The SSO URL will have the following format:

```txt
https://<api-url>/auth/saml/login/<organization-id>
``` 

For example, the api-url for the app environment is `api-app.cognigy.ai`. The `organization-id` is the `id` of your organization within Cognigy.AI. You can get your `organizationId` on the [My Profile](../tools/interaction-panel/profile.md) page by clicking ![vertical-ellipsis](../../assets/icons/vertical-ellipsis.svg) **> Copy Organization ID**.

You will need the SSO URL when configuring your Identity Provider (IDP) using one of the setup guides provided.

To configure the SSO Provider with Cognigy.AI, refer to one of the specific guides for the [supported Identity Providers](#more-information). These guides provide examples of the required API requests. If your Identity Provider is not listed, we recommend following the [OneLogin guide](https://support.cognigy.com/hc/en-us/articles/360016310699-OneLogin#introduction-0-0) as an example. The API request for configuring SSO with Cognigy.AI is the same, but the configuration values may vary depending on the provider.

## Get the SLO URL
<div class="divider"></div>

!!! warning
    - Single Logout is only supported with OneLogin and Microsoft Azure Active Directory:
        - Service Provider initiated Single Logout is only supported with Microsoft Azure Active Directory.
        - Identity Provider initiated Single Logout is only supported with OneLogin.

To configure Single Logout for your Identity Provider, you will need the URL that is used to process the logout request from the IDP. During the Single Logout process, the IDP will redirect to the frontend of Cognigy.AI. Therefore, you should use the frontend domain that you have configured for your installation. The SLO URL will have the following format:

```txt
https://<frontend-url>/slo/<organization-id>
``` 

For instance, the frontend URL could be `app.cognigy.ai`.

Learn more about connecting to your proffered SSO provider in [Cognigy Help Center](https://support.cognigy.com/hc/en-us/sections/360004563679-Single-Sign-on).

## Change a Single Sign-on Configuration in Cognigy.AI

<div class="divider"></div>

You can have only one SSO configuration for your organization. If you want to change the configuration, you first need to delete it and create a new one. To delete an SSO configuration, send a ```POST``` request to:

```txt
https://<api-url>/v2.0/identityprovider/reset
``` 

Read more about using the Cognigy.AI API on the [API Reference Page](https://api-trial.cognigy.ai/openapi#post-/v2.0/identityprovider/reset).

## Log in via SSO

<div class="divider"></div>

When a user logs into Cognigy.AI via SSO for the first time, they need to do it from the Identity Provider. Doing this will give them the correct access rights in Cognigy.AI, and allow them to login via the Cognigy.AI login page on subsequent logins.

!!! warning "First time login"
    During the first login, users need to log in using their Identity Provider (IDP) credentials.

To log in to Cognigy.AI on the Login page, click **Log in with SSO** and enter your email. This will redirect you to your configured IDP if an IDP is configured for your organization.

## More information

- Help Center articles:
    - [SSO with Azure Active Directory](https://support.cognigy.com/hc/en-us/articles/360016310859-Azure-Active-Directory)
    - [SSO with Google](https://support.cognigy.com/hc/en-us/articles/360016274780-Google)
    - [SSO with Okta](https://support.cognigy.com/hc/en-us/articles/360016311079-Okta)
    - [SSO with OneLogin](https://support.cognigy.com/hc/en-us/articles/360016310699-OneLogin)
    - [SSO with Auth0](https://support.cognigy.com/hc/en-us/articles/360018693139)
