---
title: "My Profile" 
slug: "my-profile" 
hidden: false 
---

# My Profile

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/profile.jpg" width="100%" />
</figure>

## Preferences

### Select Language

You can select the user interface language.
To do this, open the **Select Language** list.

Cognigy.AI supports the following user interface languages: 

- English
- French
- German
- Japanese
- Korean
- Spanish

## Global Roles

The **Global Roles** section allows for the assignment of global roles that **apply across different Agents**. More granular Local Roles can be configured per Agent. 

## Login History

This section shows a list of previous login-sessions and their location (if available). This can be used for auditing purposes.

## API Keys

[![Version badge](https://img.shields.io/badge/Updated in-v4.49-blue.svg)](../../../release-notes/4.49.md)

Application Programming Interface (API) Keys are security tokens registered to a user account. These tokens can be used by external applications to access Cognigy.AI in the same way that a human user would enter their password to log in to the platform. 

API keys inherit the same permissions as the associated user profile, such as Admin, Project Manager, or OData. 

API keys provide authorization to perform requests made available via the [Cognigy Open API](../../developers/api-and-cli.md) or to return conversation data from the [Cognigy OData Analytics Endpoint](../../analyze/odata.md).

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
2. Near the selected API key, click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) **> Revoke API Key**.

The API key will be revoked and can no longer be used for the requests.

## Connected Accounts

This section lets users manage their **Connected Accounts**, 3rd-party accounts that Cognigy.AI can connect to in order to make it easier to deploy to certain platforms. 

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/accounts.jpg" width="100%" />
</figure>

## Extended Menu

The Profile page includes an extended menu accessed by clicking the three dots in the top-right corner of the page. This provides access to the following functions:

  * Edit Profile
  * Copy `organisationId` (Used for [Single Sign-on](../../installation/single-sign-on-saml2.md))
  * Delete Account