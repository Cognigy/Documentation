---
 title: "Single Sign-on using OpenID Connect" 
 slug: "single-signin-openid-connect" 
 hidden: false 
---
# Single Sign-on using OpenID Connect

## Description 


Cognigy.AI already supports [SSO (Single Sign-on)](single-sign-on-saml2.md) through the usage of our SAML 2.0 integration. 

With release v4.3.0, Cognigy has added Single Sign-on support for OpenID Connect. Customers can now select the type of strategy they want to use to implement their corporate SSO strategy.

How to use Open ID Connect with Auth0 as a provider read the following article: [Single Sign-on](https://support.cognigy.com/hc/en-us/articles/360021171120-Auth0-OpenID-Connect#introduction-0-0).

!!! warning "How to use OpenID Connect"
    Want to learn how to use OpenID Connect? Have a look at [Auth0 - OpenID Connect](https://support.cognigy.com/hc/en-us/articles/360021171120-Auth0-OpenID-Connect#introduction-0-0) in the Cognigy Help Center.

!!! note
    This guide covers how to set up SSO in Cognigy.AI with Auth0 as the Identity Provider using the OpenID Connect protocol. After completing this guide, your users will be able to log in to Cognigy.AI through Auth0, and a user account will be automatically created for them in Cognigy.AI. This account will be assigned a Cognigy.AI access role as defined by the administrator in Auth0.

    When setting up SSO with Auth0, you can choose between two different SSO protocols. This article covers the OpenID Connect protocol. 
    
    For SAML 2.0, refer to the following article: [Auth0 - SAML 2.0](https://support.cognigy.com/hc/en-us/articles/360018693139)


## Configuring SSO in Cognigy.AI for OpenID Connect

After configuring SSO in your identity provider, you are finally ready to create an SSO configuration for your organisation in Cognigy.AI.
 - see [Auth0 - OpenID Connect](https://support.cognigy.com/hc/en-us/articles/360021171120-Auth0-OpenID-Connect#introduction-0-0)

To do this, send a POST request to the following URL:

````
https://<API ADRESS>/v2.0/identityprovider/configure
````

And attach the following JSON payload settings to the request with your unique values (see below):

````JSON
{
"idpType": "oidc",
"idpIssuer": "<DOMAIN>",
"idpClientId": "<CLIENT ID>",
"idpClientSecret": "<CLIENT SECRET>",
"idpIdTokenSignedResponseAlg": "RS256",
"idpTokenEndpointAuthMethod": "client_secret_basic"
}
````