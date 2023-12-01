---
 title: "My Profile" 
 slug: "my-profile" 
 hidden: false 
---
# My Profile

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/945574c-usermenu-profile.jpg" width="100%" />
</figure>

## Preferences

In this section the **user interface language** can be selected. Cognigy.AI currently supports the following user interface languages: **English**, **German**, **Korean**, **Japanese** and **Spanish**.

## Global Roles

The **Global Roles** section allows for the assignment of global roles that **apply across different Agents**. More granular Local Roles can be configured per Agent. 

## Login History

This section shows a list of previous login-sessions and their location (if available). This can be used for auditing purposes.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/8a69f25-usermenu-login-history.jpg" width="100%" />
</figure>

## API Keys

[![Version badge](https://img.shields.io/badge/Updated in-v4.49-blue.svg)](../../../release-notes/4.49.md)

Application Programming Interface (API) Keys are security tokens registered to a user account. These tokens can be used by external applications to access Cognigy.AI in the same way that a human user would enter their password to log in to the platform. 

API keys inherit the same permissions as the associated user profile, such as Admin, Project Manager, or OData. 

API keys provides authorization to perform requests made available via the [Cognigy Open API]({{config.site_url}}ai/developer-guides/using-api/)  or to return conversation data from the [Cognigy OData Analytics Endpoint]({{config.site_url}}ai/tools/analytics/odata-analytics-endpoint/).

### Create API Keys

A user that holds the global permissions can create their API keys on the **My profile** page:

To create an API key, follow these steps:

1. On the **My profile** page, go to the **API Keys** section.
2. Click **+**. 
3. Enter a unique name of the API key and click **Confirm**.
4. Copy the key by clicking on the key value, then save it to your local storage. For security reasons, the key is shown only once in this window, so if you do not save the key, you cannot see or copy the key value again.

Once the API key is created, its name and creation date will be displayed in the list of API keys.

### Revoke API Keys

To revoke an API key, follow these steps:

1. On the **My profile** page, go to the **API Keys** section.
2. Near the selected API key, click ![vertical-ellipsis](../../../assets/icons/vertical-ellipsis.svg) **> Revoke API Key**.

The API key will be revoked and can no longer be used for the requests.

## Connected Accounts

This section lets users manage their **Connected Accounts**, 3rd-party accounts that Cognigy.AI can connect to in order to make it easier to deploy to certain platforms. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/ca44eac-usermenu-accounts.jpg" width="100%" />
</figure>

## Extended Menu

The Profile page includes an extended menu accessed by clicking the three dots in the top right hand corner of the page. This provides access to the following functions:

  * Edit Profile
  * Copy Organization ID (Used for [Single Sign-on]({{config.site_url}}ai/installation/single-signin-saml2/))
  * Delete Account