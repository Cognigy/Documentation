---
title: "Single Sign-on using SAML 2.0" 
slug: "single-signin-saml2" 
hidden: false 
---

# Single Sign-on with SAML 2.0

Cognigy.AI integrates with popular Single Sign-on (SSO) Identity Providers (IDPs), such as Azure Active Directory, OneLogin, and Okta. This integration allows users within your organization to log in to Cognigy.AI without separate credentials.

Using SSO automatically grants access that ensures a streamlined authentication process. Additionally, you can use the robust Access Control tool in Cognigy.AI to effectively manage the access rights of individual users and fulfill security standards. If you need SSO to comply with security standards across your organization, you can [enforce login with SSO](#enforce-login-with-sso).

## Get the SSO URL

To configure an SSO in your IDP, you will need the URL that is used during the SAML authentication process. The SAML requests are sent to the API service, so you should use the API domain that you have configured for your installation. The SSO URL will have the following format:

```txt
https://<api-url>/auth/saml/login/<organization-id>
``` 

For example, the api-url for the app environment is `api-app.cognigy.ai`. The `organization-id` is the `id` of your organization within Cognigy.AI. You can get your `organisationId` on the [My Profile](../test/interaction-panel/profile.md) page by clicking ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Copy Organization ID**.

You will need the SSO URL when configuring your IDP using one of the setup guides provided.

To configure the SSO Provider with Cognigy.AI, refer to one of the specific guides for the [supported IDPs](#more-information). These guides provide examples of the required API requests. If your IDP is not listed, we recommend following the [OneLogin guide](https://support.cognigy.com/hc/en-us/articles/360016310699-OneLogin#introduction-0-0) as an example. The API request for configuring SSO with Cognigy.AI is the same, but the configuration values may vary depending on the provider.

## Get the SLO URL


!!! warning
    Single Logout is only supported with OneLogin and Microsoft Azure Active Directory:
        - Service Provider initiated Single Logout is only supported with Microsoft Azure Active Directory.
        - IDP initiated Single Logout is only supported with OneLogin.

To configure Single Logout for your IDP, you will need the URL that is used to process the logout request from the IDP. During the Single Logout process, the IDP will redirect to the frontend of Cognigy.AI. Therefore, you should use the frontend domain that you have configured for your installation. The SLO URL will have the following format:

```txt
https://<frontend-url>/slo/<organization-id>
``` 

For instance, the frontend URL could be `app.cognigy.ai`.

Learn more about connecting to your proffered SSO provider in [Cognigy Help Center](https://support.cognigy.com/hc/en-us/sections/360004563679-Single-Sign-on).

## Change an SSO Configuration in Cognigy.AI

You can have only one SSO configuration for your organization. If you want to change the configuration, you first need to delete it and create a new one. To delete an SSO configuration, send a `POST` request to:

```txt
https://<api-url>/v2.0/identityprovider/reset
``` 

Read more about using the Cognigy.AI API on the [API Reference Page](https://api-trial.cognigy.ai/openapi#post-/v2.0/identityprovider/reset).

## Enforce Login with SSO

Enforcing login with SSO can be useful to standardize the authentication process and meet security standards within your Cognigy.AI installation. By default, you can log in to Cognigy.AI with your credentials or with SSO. However, you can enforce login with SSO for all users across either all organizations or specific ones within your installation. In this case, users can only log in with SSO.

To enforce login with SSO, proceed as follows:

  - For shared SaaS installations, contact [Cognigy technical support](../../help/get-help.md). If you use your credentials to log in, you receive an error message. To log in, enter your email address and click **Sign in with SSO**.
  - For dedicated SaaS installations, contact [Cognigy technical support](../../help/get-help.md). You can enforce login with SSO for:
    - The entire Cognigy.AI installation — the login with credentials is deactivated for all users. To log in, enter your email address on the login page and click **Sign in with SSO**.
    - Specific organizations — if you use your credentials to log in, you receive an error message. To log in, enter your email address on the login page and click **Sign in with SSO**.
  - For on-premises installations, you can enforce login with SSO for:
    - The entire Cognigy.AI installation — set the `DEACTIVATE_NON_SSO_LOGIN` feature flag to `true`. The login with credentials is deactivated for all users. To log in, enter your email address on the login page and click **Sign in with SSO**. 
    - Specific organizations — set the `DEACTIVATE_NON_SSO_LOGIN` feature flag to `false` and assign the `organization-id` to the `DEACTIVATE_NON_SSO_LOGIN_ORG_WHITELIST` environment variable in `values.yml`. If you use your credentials to log in to the organizations listed in `DEACTIVATE_NON_SSO_LOGIN_ORG_WHITELIST`, you receive an error message. To log in, enter your email address on the login page and click **Sign in with SSO**.

## Log in with SSO

!!! warning "First time login"
    During the first login with SSO, you need to log in using your IDP credentials. Cognigy.AI redirects you to your configured IDP. You need to enter your IDP credentials to complete the login.

{! _includes/ai/overview/log-in-with-sso.md !}

## More Information

- Help Center articles:
    - [SSO with Azure Active Directory](https://support.cognigy.com/hc/en-us/articles/360016310859-Azure-Active-Directory)
    - [SSO with Google](https://support.cognigy.com/hc/en-us/articles/360016274780-Google)
    - [SSO with Okta](https://support.cognigy.com/hc/en-us/articles/360016311079-Okta)
    - [SSO with OneLogin](https://support.cognigy.com/hc/en-us/articles/360016310699-OneLogin)
    - [SSO with Auth0](https://support.cognigy.com/hc/en-us/articles/360018693139)
