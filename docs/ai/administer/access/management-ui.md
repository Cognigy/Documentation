---
title: "Management UI"
slug: "management-ui"
hidden: false
---

# Management UI

[![Version badge](https://img.shields.io/badge/Updated in-v4.92-blue.svg)](../../../release-notes/4.92.md)

The Cognigy Management UI is an additional product originally developed as a Cognigy internal tool for managing our own cloud installations. You need to install it in addition to our actual product in order to use it.

You can set up Management UI yourself if you have an on-premises Cognigy.AI installation. Otherwise, if you want to make changes in Management UI, contact [technical support](../../../help/get-help.md).

Many users don't know that Cognigy.AI is able to handle a multi-tenant scenario. These individual tenants are called **organizations** within Cognigy.AI.

An organization has completely separated:

- projects
- users
- api- access and -keys
- contact profile schemas
- quotas & limits

With the use of organizations, you can use your own Cognigy.AI installation, e.g. for multiple customers and separate their data in a safe manner. Although a new organization can be created by using a special sort of **internal API**, we created an additional tool called the **Cognigy Management UI**. This is an additional product you can deploy in your cluster. It then lets you connect to your installation to inspect e.g. all organizations within your system.

The following figure shows a screenshot of what this product looks like.

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/mui.png" width="100%" />
  <figcaption> The Cognigy.AI Management UI</figcaption>
</figure>

## Usage

The usage of the Management UI is quite self-explanatory. We have global navigation on the left side, which allows you to switch between:
- Users
- Organizations
- System Message

We will now have a look at the individual view and what can be done in there.

## Users

Here you can add new users to the system. A user needs to get assigned to an **organization**, so you might need to create a new organization first. To create a new user, click the huge pink button on the right-bottom corner of the view. You will then see a dialog where you enter the:

- name
- email
- select the organization

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/mui-2.png" width="100%" />
  <figcaption>Creating a new user is simple</figcaption>
</figure>

You can add a user (identified by an email address) to multiple organizations.
Details about how the user can log in to their organization can be found on the [Login for Users in multiple organization](../../installation/access-to-cognigy-ai.md#multiple-organizations) page.

If you click a user, the user details page opens. On the user details page, you can do the following:

- See general information
- See the users current [roles](admin-center/access-control.md)
- See certain status information
- Impersonate the user by clicking **Impersonate** in the upper-right corner. By impersonating a user, you are forwarded you to the Cogngiy.AI interface and logged in as if you were the selected user
- Disable or delete the user, or update the user's password by clicking ![vertical-ellipsis](https://docs.cognigy.com/_assets/icons/vertical-ellipsis.svg) and selecting the respective option.

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/mui-3.png" width="100%" />
  <figcaption> Details of a user</figcaption>
</figure>

### Block User Impersonation

When impersonating a user, you can log in to the system as the selected user without knowing their actual account password. Make sure to log out after you have finished your work.

You can block user impersonation as follows:

- For SaaS installations, contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/).
- For dedicated SaaS and on-premises installations, use the `BLOCK_IMPERSONATE_USER_ORG_WHITELIST` feature flag. You can block user impersonation for:
    - **One organization** — enter the relevant `organisationId` in the `BLOCK_IMPERSONATE_USER_ORG_WHITELIST` feature flag.
    - **More than one organization** — enter the relevant `organisationId` values separated by commas, for example, `BLOCK_IMPERSONATE_USER_ORG_WHITELIST=63c6af010aa7a0eadd88edbd,63c6af010aa7a0eadd88edbe`.
    - **All organizations** — set `BLOCK_IMPERSONATE_USER_ORG_WHITELIST=*`.

## Organizations

This view presents all organizations that exist within the system. Each installation has at least one organization that will be created automatically. This initial organization is called **defaultOrg-xxx**. Have a look at the following figure.

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/mui-4.png" width="100%" />
  <figcaption> All organizations within the system</figcaption>
</figure>

You can also create a new organization or disable an already existing one.

## System Message

If you have your own Cognigy.AI installation, you might want to schedule maintenance at a certain point. This is what you can use our **System Message** feature for. Select system message in the navigation on the left and click the pink button to create a new system message.

Only one system message can exist at a time. Such a message has an actual message text and a **valid until** date. The message will be displayed on all UI clients as long as the message is valid. It will automatically varnish when it is expired.

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/mui-5.png" width="100%" />
  <figcaption>Creating a new system message</figcaption>
</figure>

The system message will get displayed for all users - regardless of their organization.

## Quotas & Limits

With version 3.4.0 of Cognigy.AI, we have introduced quotas and limits on an organization level. Larger customers with multiple organizations can use these quotas to limit what is possible within certain organizations. To configure limits, first select an organization, open its details and click the triple-dot button on the right-top corner.

In the menu, select **Change Organisation Quotas**.

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/mui-6.png" width="100%" />
  <figcaption>Configuring quotas & limits for an organization</figcaption>
</figure>

You can currently configure the following quotas & limits:

| Attributes               | Description                                                                                                                                                                                                                                                                                                                                                   |
|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Max users                | This is the maximum number of users that can be created within the organization.                                                                                                                                                                                                                                                                              |
| Max projects             | The maximum number of projects that can be created within this organization.                                                                                                                                                                                                                                                                                  |
| Max channels per project | The maximum number of different types of channels within a single project. A channel is e.g. an Alexa-Endpoint. If this is e.g. set to one, you can create an infinite number of Alexa Endpoints but will get an error once you try to e.g. create a Google Actions Endpoint in addition. It's the number of different types of channels that gets restricted |
| Max messages per day     | This is currently a soft limit and will not do anything if projects go above it. We will introduce changes to this quota in the future.                                                                                                                                                                                                                       |
| Max knowledge chunk      | The maximum number of maximum number of Knowledge Chunks can be used within the organization.                                                                                                                                                                                                                                                                 |

Setting a quota to 0 disables the quota.

## Password Policy

It is also possible to configure the password policies of an organization in the Management UI. To configure the password policy, first select an organization and click the triple-dot button on the right-top corner.

In the menu, select **Change Password Policy**.

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/password-policy.png" width="100%" />
  <figcaption>Configuring a Password Policy for an organization</figcaption>
</figure>

It is currently possible to configure the following attributes of the password policy:

| Attributes                                             | Description                                                                                                                                                                                                         |
|--------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Minimum Length                                         | The minimum number of characters the password needs to consist of.                                                                                                                                                  |
| Maximum Length                                         | The maximum number of characters the password can consist of.                                                                                                                                                       |
| Minimum Amount of Lowercase                            | The minimum number of characters in the password which have to be lowercase.                                                                                                                                        |
| Minimum Amount of Uppercase                            | The minimum number of characters in the password which have to be uppercase.                                                                                                                                        |
| Minimum Amount of Special Characters                   | The minimum number of special characters in the password.                                                                                                                                                           |
| Maximum Amount of Identical Characters                 | The maximum number of characters which can be identical in the password.                                                                                                                                            |
| Amount of failed logins resulting in account disabling | Specifies how many times a user can attempt to log in before their account is disabled. Settings this to 0 means that the account will never be disabled. Disabled users can be enabled again in the Management UI. |

Clicking the **Save & Enforce** button results in all users of the organization to get logged out. Upon re-logging, they will be required to change their password.

## Data Privacy Settings

It is possible to set the data privacy settings of an organization in the Management UI. To configure the data privacy settings, first select and organization and then click the triple-dot button on the right-top corner.

In the menu, select **Change Data Privacy Settings**

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/docs-mngmt-org-data-privacy.png" width="100%" />
  <figcaption>Configuring Data Privacy Settings for an organization</figcaption>
</figure>

- Enable data privacy settings

Apply data privacy settings to all projects of this organization

- Contact Profiles

Create individual contact profiles to store persisted user data across sessions

- Collect Analytics

Collecting analytics data for all endpoints

- Mask Sensitive Analytics

Mask all sensitive analytics data for all endpoints

- Mask Sensitive Logging

Mask all sensitive logging for all endpoints

- Collect Conversations

Collecting conversation history for all endpoints

- Ignore List

The projects will ignore the organization data privacy settings and use the ones defined in the endpoint

## Expiration Values (TTL) for Sensitive Data

It is possible to configure when certain sensitive data expires and is deleted from the system. In order to change this, first select an organization and click the triple-dot button on the right-top corner.

In the menu, select **Change Expiration Values**.

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/exp-values.png" width="100%" />
  <figcaption> Configuring the expiration values for sensitive data in an Organization</figcaption>
</figure>

All the expiration values define how many minutes it takes from when the data was created until it expires. Setting an expiration value to 0 means that the data will never expire. 

Configure the expiration of the following data:

| Expiration value                 | Description                                                                                                                                                                                                                                                                                                                                                                          |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Contact Profiles Expiration      | Determines how long (in minutes) a Contact Profile record persists in the Analytics database.                                                                                                                                                                                                                                                                                        |
| Session Expiration               | Defines how long (in minutes) a session remains active in the Analytics database after the last message is sent. Each new message within a session resets this timer. You can also configure [session expiration](../../deploy/endpoints/session-management.md) for specific Endpoints. If both a global and endpoint-specific value are set, the shorter duration takes precedence. |
| Conversation Expiration          | Determines how long (in minutes) a [Conversation](../../analyze/collecting-data.md) record persists in the Analytics database.                                                                                                                                                                                                                                                       |
| Analytics Expiration             | Determines how long (in minutes) an [Analytics](../../analyze/collecting-data.md) record persists in the Analytics database. Also this expiration date applies to data for [Goals](../../analyze/goals-and-tasks/overview.md).                                                                                                                                                       |
| Insights Session Data Expiration | Determines how long (in minutes) Insights Session record persists in the Analytics database.                                                                                                                                                                                                                                                                                         |
| Steps Data Expiration            | Determines how long (in minutes) a [Step](../../analyze/collecting-data.md#steps) record persists in the Analytics database.                                                                                                                                                                                                                                                         |

For more information about data expiration in Insights, read [Data Expiration](../../../insights/data-management/ttl.md) in the Insights documentation.

You can set a maximum expiration time for all sensitive data across the server. This configuration is detailed in the infrastructure documentation, which is provided during installation.

## Installation

Further information about installing the Cognigy Management UI can be found on the [GitHub](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/main/README.md#install-management-ui) page, by contacting your Cognigy sales representative or by sending an email with your question to info@cognigy.com.