---
 title: "Cognigy.AI User Login" 
 slug: "AI-login" 
 hidden: false 
---

## Cognigy.AI User Login

<div class="divider"></div>

User can login to Cognigy.AI with this url:

```
https://<frontend-url>/login
```

The frontend-url could for instance be trial.cognigy.ai

## Login for users in multiple organisation

<div class="divider"></div>

[![Version badge](https://img.shields.io/badge/Added in-v4.16.0-blue.svg)]({{config.site_url}})


Cognigy allows users to be part of multiple organisation. An user identified by an e-mail address and a password, can be part of different organisation. The url to login to Cognigy.AI should be like this, that specifies which organisation the user wants to login to.

```
https://<frontend-url>/login?organisationId=<organisation-id>
```

The 'organisation-id' is an unique identifier of 24 characters which identies an organisation in the system.

<br>
<figure>
  <img class="image-center" src="{{config.site_url}}ai/installation/images/CognigyAI_Login.png" width="100%" />
  <figcaption> Cognigy.AI User Login page</figcaption>
</figure>

???+ warning
    If an user is part of multiple organisation, and if no organisationId is passed in the login url, then the user will be denied a login. 
    
    For an user assigned to single organisation, including the organisationId in the login url is completely optional.

???+ info "Password Reset"
    If an user wants to reset password for one of the organisation to which the user is assigned, then again it is mandatory to have the organisationId in the login url and then navigate to Forgot Password link.

???+ info "SSO Login"
    An user who is part of multiple organisation can login with SSO, using the above same login url including the organisationId and then clicking "LOGIN WITH SSO". 

    Configuration of Cognigy.AI with SSO can be found on [Single Sign-on using SAML 2.0]({{config.site_url}}ai/installation/single-signin-saml2) page