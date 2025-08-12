---
title: "My Profile" 
slug: "my-profile"
description: "The My Profile page allows you to manage your user profile, preferences, API keys, and connected accounts."
hidden: false
tags: ['my profile', 'user profile', 'preferences', 'api keys', 'connected accounts']
---

# My Profile

[![Version badge](https://img.shields.io/badge/Updated in-v4.49-blue.svg)](../../../release-notes/4.49.md)

_My Profile_ lets you manage your user profile, preferences, API keys, and connected accounts.

The **My Profile** page includes:

- [Preferences](#preferences)
- [Global Roles](#global-roles)
- [Login History](#login-history)
- [API Keys](#api-keys)
- [Connected Accounts](#connected-accounts)

## Working with My Profile

Access the **My Profile** page by clicking your user icon in the upper-right corner of the Main page or the bottom-left corner of the **Project** page.

On the **My Profile** page, you can update preferences, view login history, manage API keys, and more. Click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) in the upper-right corner to access the extended menu, where you can select the following actions:

- **Edit Profile** — opens the profile editing page where you can update your personal information.
- **Copy Organization ID** — copies the organization ID associated with your user account. This ID is used for Single Sign-On (SSO) and other integrations.
- **Delete Account** — permanently deletes your user profile from Cognigy.AI, including all API keys and connected accounts. This action is irreversible.

### Preferences

Customize your user experience in Cognigy.AI by setting your preferred language, time zone for Insights, and other interface preferences.

| **Preference**                      | **Description**                                                                                                                                                                          | **Default Value**         |
|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| Select Language                     | Sets the language for the user interface.<br><br>Cognigy.AI supports the following user interface languages:<br>- English<br>- French<br>- German<br>- Japanese<br>- Korean<br>- Spanish | English                   |
| Select Insights Time Zone           | Defines the time zone for viewing Insights and analytics data.                                                                                                                           | (UTC+02:00) Europe/Berlin |
| Show Node Count Warnings            | Displays warnings if the number of Nodes in a Flow exceeds best practice limits.                                                                                                         | Enabled                   |
| Use Contrast Colors for Node Label  | Improves the readability of Node labels by applying higher contrast colors.                                                                                                              | Enabled                   |
| Use Extended Keyboard Accessibility | Enables additional keyboard shortcuts and focus options to support accessible navigation.                                                                                                | Enabled                   |

### Global Roles

View user's [global roles](../access/admin-center/access-control.md) that apply across multiple Projects. You can configure more granular roles for each individual Project.

### Login History

View a list of previous login sessions and their location (if available). You can use this information for auditing purposes.

### API Keys

API keys allow third-party services to access Cognigy.AI in the same way a human user would by entering their password to log in to the platform.

API keys inherit the same permissions as the associated user profile, such as Admin, Project Manager, or OData. 

API keys provide authorization to perform requests made available via the [Cognigy Open API](../../developers/api-and-cli.md) or to return conversation data from the [Cognigy OData Analytics Endpoint](../../analyze/odata.md).

Only users with [global roles](../access/admin-center/access-control.md) can manage their API keys.

??? info "Create an API Key"
    To create an API key, follow these steps:

    1. On the **My profile** page, go to the **API Keys** section and click **+**. 
    2. Enter a unique name for the API key and click **Confirm**. 
    3. Copy the API key by clicking its value and save it securely. For security reasons, the key is shown only once in this window; if not saved, you won’t be able to view or copy it again.

    Once the API key is created, its name and creation date will be displayed in the list of API keys.

??? info "Revoke an API Keys"
    To revoke an API key, follow these steps:

    1. On the **My profile** page, go to the **API Keys** section.
    2. Select ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) **> Revoke API Key** next to the API key you want to revoke.

    The API key will be revoked and can no longer be used for authentication in API requests

### Connected Accounts

Manage third-party accounts that Cognigy.AI connects to, simplifying deployment to supported platforms. Currently, only Amazon accounts are supported.