---
title: "Management UI"
slug: "management-ui"
description: "The Management UI is a web-based interface for managing system-wide and organization-specific settings in Cognigy.AI."
hidden: false
tags:
  - management ui
  - multi-tenancy
  - organizations
  - user management
  - system message
  - quotas
  - password policy
  - data privacy settings
  - expiration values
---

# Management UI

[![Version badge](https://img.shields.io/badge/Updated in-v4.92-blue.svg)](../../../release-notes/4.92.md)

The *Management UI* is a web-based interface for managing system-wide and organization-specific settings in Cognigy.AI.

Use the Management UI to configure users, organizations, quotas, password policies, data privacy settings, expiration values for sensitive data, and system messages.

The Management UI is especially useful for:

- System administrators, particularly in on-premises or dedicated SaaS installations.
- Advanced users who need to manage multiple organizations or adjust global settings.

## Key Features

- **User and Organization Management**. Create, modify, remove users, and add them to specific organizations, which serve as isolated environments within Cognigy.AI.
- **Resource Control through Quotas**. Set specific quotas for organizations to manage resource usage, including the number of user seats, Projects, and messages to prevent overuse and ensure equitable resource allocation.
- **Security and Privacy Settings**. Change password policies and manage data privacy settings, ensuring compliance with security standards and protecting sensitive information through features like data masking and retention policies.
- **Multitenancy and Impersonation Features**. Cognigy.AI supports multitenancy, enabling the management of multiple organizations under one installation, along with the ability to impersonate users for troubleshooting and assistance.

## Before you Begin

??? info "1. Check Availability"
    The Management UI is available for the following Cognigy.AI installations:
    
    - **Cognigy SaaS**:
        - **Shared SaaS** – the Management UI is controlled by Cognigy technical support. Contact them if you want to change any values.
        - **Dedicated SaaS** – the Management UI is available and can be used by the customer.
    - **On-Premises** – the Management UI is available and can be used by the customer. For more information on how to install the Management UI, refer to the [Cognigy GitHub](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/main/README.md#install-management-ui) repo.

??? info "2. Log in to the Management UI"
    To log in to the Management UI instance, you need the following information:
    
    | **Field**                   | **Description**                                                                                                              |
    |-----------------------------|------------------------------------------------------------------------------------------------------------------------------|
    | Cognigy.AI Backend Base URL | The base URL must follow this format: `https://api-<your installation domain>`. For example: `https://api-trial.cognigy.ai`. |
    | Service User                | The username provided by your Management UI administrator.                                                                   |
    | Service Password            | The password for the service user account, provided by your Management UI administrator.                                     |

## Manage Organizations

Organizations define the environment for users, Projects, and data in Cognigy.AI. Use the Management UI to create and configure organizations, adjust quotas and policies, and manage data privacy and expiration settings. Each organization has its own limits, users, and settings, allowing for secure and flexible multi-tenant environments.

Each installation includes at least one organization, which is created automatically. This initial organization is named `defaultOrg-xxx`.

??? info "Create an Organization"
    1. In the Management UI, select **Organisations** from the left-side menu, then click ![vertical-ellipsis](../../../_assets/icons/management-ui/plus.svg) in the bottom-right corner.
    2. In the **Create new Organisation** window, enter a name for the organization in the **Name** field and click **Create**. The organization will be created with the default settings an appers in the list of organizations.

??? info "View Organizations"
    After creating an organization, you can see the organization in the list of organizations.

    | **Field**                | **Description**                                                                                   |
    |--------------------------|---------------------------------------------------------------------------------------------------|
    | **General**              |                                                                                                   |
    | Name                     | The name and version of the organization.                                                         |
    | Enabled                  | Whether the organization is enabled.                                                              |
    | Max Users                | The maximum number of users allowed.                                                              |
    | Max Projects             | The maximum number of Projects allowed.                                                           |
    | Max Channels per Project | The maximum number of channels allowed per Project.                                               |
    | Max Messages per Day     | The maximum number of messages allowed per day.                                                   |
    | Billing Timezone         | The time zone used for billing.                                                                    |
    | **Data Privacy Settings**|                                                                                                   |
    | Apply to all projects    | Whether the data privacy settings are applied across all Projects.                               |
    | Contact Profiles         | Whether Contact Profiles are created for persisted user data.                                    |
    | Collect Analytics        | Whether analytics data is collected for all Endpoints.                                           |
    | Mask Sensitive Analytics | Whether sensitive analytics data is masked.                                                      |
    | Mask Sensitive Logging   | Whether sensitive logging data is masked.                                                        |
    | Collect Conversations    | Whether the conversation history is collected.                                                   |
    | Ignore List              | A list of Projects that use Endpoint-specific privacy settings instead of organization-level settings. |
    | **Conversation Counter** |                                                                                                   |
    | Conversation Counter     | The total number of conversations for a specific month and year.                                 |

??? info "Change Organization Quotas"
    To change organization quotas, select **Organisations** from the left-side menu. From the organization list, select the organization you want to change. On the **Organisation Details** page, click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) and select **Change Organisation Quotas**.
     
    !!! note
         Setting a quota to 0 disables it, meaning there is no limit.

    | **Quota Name**           | **Description**                                                                                                                                                                                                                                                                                |
    |--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Max users                | The maximum number of users that can be created within the organization.                                                                                                                                                                                                                       |
    | Max projects             | The maximum number of Projects that can be created within the organization.                                                                                                                                                                                                                    |
    | Max channels per project | The maximum number of different Endpoint allowed in a Project. For example, if this is set to 1, you can create an unlimited number of Amazon Alexa Endpoints, but you will receive an error when trying to add a WhatsApp Endpoint. The restriction applies to Endpoint types, not instances. |
    | Max messages per day     | The maximum number of messages that can be processed per day. This quota isn't currently enforced but may be subject to change in the future.                                                                                                                                                  |
    | Max knowledge chunks     | The maximum number of Knowledge Chunks that can be created within the organization.                                                                                                                                                                                                               |

??? info "Change Password Policy"
    The password policy defines the rules that users must follow when creating or updating their passwords. It helps ensure that passwords are strong and secure.
    To change the password policy for an organization, select **Organisations** from the left-side menu. From the organization list,  select the organization you want to change. On the **Organisation Details** page, click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) and select **Change Password Policy**.

    | **Rule**                               | **Description**                                                                                                                                                     |
    |----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Minimum Length                         | The minimum number of characters required in the password.                                                                                                          |
    | Maximum Length                         | The maximum number of characters allowed in the password.                                                                                                           |
    | Minimum Lowercase Characters           | The minimum number of lowercase letters required in the password.                                                                                                   |
    | Minimum Uppercase Characters           | The minimum number of uppercase letters required in the password.                                                                                                   |
    | Minimum Special Characters             | The minimum number of special characters, for example, `!`, `@`, `#`, required in the password.                                                                     |
    | Maximum Identical Characters           | The maximum number of identical characters allowed in the password.                                                                                                 |
    | Failed Login Attempts Before Disabling | Number of failed login attempts allowed before the account is disabled. Set to `0` to disable this feature. Disabled users can be re-enabled via the Management UI. |

    Clicking **Save & Enforce** logs out all users in the organization. Upon re-login, they are required to change their password to comply with the new policy.

??? info "Change Expiration Values"
    The expiration values define how long certain sensitive data is retained in the system before it is deleted. To change the expiration values for an organization, select **Organisations** from the left-side menu. From the organization list, select the organization you want to change. On the **Organisation Details** page, click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) and select **Change Expiration Values**.

    | **Setting**                      | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    |----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Contact Profiles Expiration      | The duration in minutes that a Contact Profile record is retained in the Analytics database.                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | Session Expiration               | The duration in minutes that a session remains active in the Analytics database after the last message is sent. Each new message resets this timer. Alternatively, session expiration can be configured using the `MAX_SESSION_STATE_TTL_IN_MINUTES` environment variable or per [Endpoint](../../deploy/endpoints/session-management.md). If both a global value (configured via the Management UI or environment variable) and an Endpoint-specific value are defined, the shorter duration takes precedence. |
    | Conversation Expiration          | The duration in minutes that a [Conversation](../../analyze/collecting-data.md) record is retained in the Analytics database.                                                                                                                                                                                                                                                                                                                                                                                   |
    | Analytics Expiration             | The duration in minutes that an [Analytics](../../analyze/collecting-data.md) record is retained in the Analytics database. This expiration also applies to data for [Goals](../../analyze/goals-and-tasks/overview.md).                                                                                                                                                                                                                                                                                        |
    | Insights Session Data Expiration | The duration in minutes that an Insights Session record is retained in the Analytics database.                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | Steps Data Expiration            | The duration in minutes that a [Step](../../analyze/collecting-data.md#steps) record is retained in the Analytics database.                                                                                                                                                                                                                                                                                                                                                                                     |

    For more information about data expiration:
 
    - In Cognigy.AI, refer to [Data Expiration](../../analyze/data-expiration.md) in the Cognigy.AI documentation.
    
    - In Insights, refer to [Data Expiration](../../../insights/data-management/data-expiration.md) in the Insights documentation.

??? info "Change Billing Time Zone"
    The billing time zone defines the time zone used for billing purposes. To change the billing time zone for an organization, select **Organisations** from the left-side menu, select the organization you want to change. On the **Organisation Details** page, click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) and select **Change Billing Timezone**.

    Select a time zone from the list and click **Save**. The selected time zone will be used for billing purposes.

??? info "Data Privacy Settings"
    The data privacy settings define how user data is handled within the organization. To change the data privacy settings for an organization, select **Organisations** from the left-side menu. From the list, select the organization you want to change. On the **Organisation Details** page, click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) and select **Change Data Privacy Settings**.

    | **Setting**                  | **Description**                                                                                                       |
    |------------------------------|-----------------------------------------------------------------------------------------------------------------------|
    | Enable Data Privacy Settings | The data privacy settings applied to all Projects within the organization.                                            |
    | Contact Profiles             | The creation of individual Contact Profiles to store persisted user data across sessions.                             |
    | Collect Analytics            | The collection of analytics data from all Endpoints.                                                                  |
    | Mask Sensitive Analytics     | The masking of all sensitive analytics data collected from Endpoints.                                                 |
    | Mask Sensitive Logging       | The masking of all sensitive logging information generated by Endpoints.                                              |
    | Collect Conversations        | The collection of conversation history from all Endpoints.                                                            |
    | Ignore List                  | The list of Projects that override organization-wide settings with their own Endpoint-specific data privacy settings. |

## Manage Users

Create and manage users within your Cognigy.AI installation.
You can add users to organizations, view user details, impersonate users for troubleshooting, and enforce security settings like password policies or impersonation restrictions.

??? info "Create a User"
    1. In the Management UI, ensure that you have created an organization where you want to add a user.
    2. You can open a **Create new User** window by using one of the following options:
        - Select **Users** from the left-side menu, then click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) in the bottom-right corner.
        - Select **Organisations** from the left-side menu, select the organization where you want to add a user, then click **Create User** in the upper-right corner.
    3. In the **Create new User** window, fill in the following fields:
        - **Name** – enter the name of the user.
        - **Email** – enter the email address of the user. This is used for login and notifications.
        - **Organisation** – select the organization to which the user will be added. If you have opened the **Create new User** window from the **Organisations** page, the organization will be preselected.
        - **Password** – enter a password for the user. You can generate a random password by clicking ![change password](../../../_assets/icons/management-ui/change-password.svg).
    3. Click **Create**. The user will be created with the `admin` role by default, which grants them full access to the organization. You can change the user's role later on the [Access Control](admin-center/access-control.md) page for the organization where the user was added.

    You can add a user with the same email to multiple organizations. For details on how users access each organization, refer to the [Login for Users in Multiple Organizations](../../installation/access-to-cognigy-ai.md#multiple-organizations) page.

??? info "View User Details"
    After creating a user, you can view them in the user list. Select an organization to view its details.

    - **Name** – the name of the user.
    - **Email** – the email address of the user.
    - **Organisation** – the organization to which the user is added.

    | **Field**                 | **Description**                                                     | **Example**                                         |
    | ------------------------- | ------------------------------------------------------------------- | --------------------------------------------------- |
    | **General Info**          |                                                                     |                                                     |
    | Name                      | The user's display name.                                            | John Doe                                            |
    | Email                     | The user's login email address.                                     | [john-doe@cognigy.com](mailto:john-doe@cognigy.com) |
    | Organisation              | The organisation the user belongs to.                               | ACME                                                |
    | Roles                     | Roles assigned to the user that define their permissions.           | `admin`                                             |
    | **Meta Info**             |                                                                     |                                                     |
    | Created At                | The date the account was created (day-month-year format).           | 10/01/2025                                          |
    | Created By                | The user or system account that created this user.                  | system admin                                        |
    | Last Changed At           | The date the user record was last updated (day-month-year format).  | 10/01/2025                                          |
    | Last Changed By           | The user or system account that last modified the user details.     | system admin                                        |
    | **Status**                |                                                                     |                                                     |
    | Accepted Terms of Service | Whether the user has accepted the Terms of Service.                 | Yes                                                 |
    | User Enabled              | Whether the user account is currently active.                       | Yes                                                 |
    | Organisation Enabled      | Whether the user’s organisation is currently enabled in the system. | Yes                                                 |

??? info "Impersonate a User"
    When impersonating a user, you can log in to the system as the selected user without knowing their actual account password.
    To impersonate the user, select a user from the list click **Impersonate** in the upper-right corner of the **User Details** page.
    Make sure to log out after you have finished your work.

??? info "Block User Impersonation"
    To prevent unauthorized access and protect user privacy, blocking impersonation improves security and helps avoid misuse of accounts.

    You can block user impersonation as follows:

    - For SaaS installations, contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/).
    - For dedicated SaaS and on-premises installations, use the `BLOCK_IMPERSONATE_USER_ORG_WHITELIST` feature flag. You can block user impersonation for:
        - **One organization** — enter the `organisationId` in the `BLOCK_IMPERSONATE_USER_ORG_WHITELIST` feature flag.
        - **More than one organization** — enter the `organisationId` values separated by commas, for example, `BLOCK_IMPERSONATE_USER_ORG_WHITELIST=63c6af010aa7a0eadd88edbd,63c6af010aa7a0eadd88edbe`.
        - **All organizations** — set `BLOCK_IMPERSONATE_USER_ORG_WHITELIST=*`.

??? info "Other Operations"
    You can also disable or delete a user by selecting them from the user list, clicking ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg), and selecting the respective option on the **User Details** page.

## System Message

Use the System Message feature in the Management UI to notify users across all organizations about important events, such as scheduled maintenance or platform updates.
This feature is especially useful for notifying users in dedicated SaaS or on-premises installations about planned downtimes or system-wide changes.

??? info "Create a System Message"
    To create a system message:

    1. In the Management UI, select **System Message** in the left-side menu, then click ![vertical-ellipsis](../../../_assets/icons/management-ui/plus.svg) in the bottom-right corner.
    2. Specify the expiration date and time in the **Until when** field.
    3. Enter your message in the **Message** field. This message will be displayed to all users in the organization.
    4. _(Optional)_ Activate **Show on Login Screen** to display the message before users log in.

    !!! note
        Only one system message can be active at a time.