---
title: "Access Control"
slug: "access-control"
description: "The Access Control interface provides a user management tool for organizational-level administration. It acts as an Access Control List (ACL), enabling the assignment of specific roles to users."
hidden: false
tags:
  - admin center
  - access control
  - user management
  - global roles
  - project roles
---

# Access Control

[![Version badge](https://img.shields.io/badge/Updated in-v4.90-blue.svg)](../../../../release-notes/4.90.md)

The _Access Control_ interface provides a user management tool for organizational-level administration.
The interface acts as an Access Control List (ACL), enabling the assignment of specific roles to users.

In the Access Control interface, you can assign global roles only. These roles apply to all Projects within your organization and set basic access rights for all agents the user can access. If you want to assign Project-specific roles, refer to [Members](../members.md).

## Before you Begin

??? info "1. Explore Global Roles"
    Global roles are assigned to a user to establish access control across the entire organization. For more granular control within a Project, assign [Project-specific roles](../members.md).

    | Role                  | Description                                                                                                                                                                                                                                                                                                                                                               |
    |-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `admin`               | Access to all organization resources, except the Cognigy.AI OData endpoint. The system creates one admin user during installation. A platform owner should create a new admin user and delete the default one after the first login.                                                                                                                                      |
    | `base_role`           | Access to view most resources in the system. Automatically assigned to new users upon creation.                                                                                                                                                                                                                                                                           |
    | `projectManager`      | Access to create new Projects. No permission to administer users or modify resources within the Projects.                                                                                                                                                                                                                                                                 |
    | `userManager`         | Access to create new user accounts assignable to Projects.                                                                                                                                                                                                                                                                                                                |
    | `apiKeys`             | Access to create organization-wide API keys for Cognigy.AI RESTful API access. Permissions apply equally when using API keys.                                                                                                                                                                                                                                             |
    | `odata`               | Access to the Admin Center section and the OData interface for querying analytics information.                                                                                                                                                                                                                                                                            |
    | `liveAgentAdmin`      | Access to Live Agent as an admin. Same permissions as the Base Role in Cognigy.AI.                                                                                                                                                                                                                                                                                        |
    | `liveAgentSupervisor` | Access to Live Agent as a supervisor.                                                                                                                                                                                                                                                                                                                                     |
    | `liveAgentAgent`      | Access to Cognigy Live Agent as a human agent. Same permissions as the base role in Cognigy.AI.                                                                                                                                                                                                                                                                           |
    | `userDetailsViewer`   | Access to view user details, such as email addresses and usernames with read-only permissions. Enables user detail management without additional privileges.                                                                                                                                                                                                              |
    | `voice-gatewayUser`   | Access to the Voice Gateway Self-Service Portal with authorization via Cognigy.AI user credentials. Assigned to users with the Account role.                                                                                                                                                                                                                              |
    | `fullSupportUser`     | Access with admin-level privileges excluding the ability to assign Projects or global roles to others. Includes access to the Cognigy.AI OData endpoint, Cognigy.AI API, and Audit Events.                                                                                                                                                                                |
    | `basicSupportUser`    | Access with admin-level privileges for Project setup and platform management, for example, `extension_trust_admin`. Full access for AI Agent debugging and error analysis, for example, logs, Playbooks, Conversation History, Contact Profiles. Read-only access to various Project resources. No access to technical connections, user management, or Knowledge AI.     |
    | `projectAssigner`     | Access to assign Projects to self and others. Restrictions include no permission to assign global roles or add users. Read-only access to multiple Project components. No access to Knowledge AI, Contact Profiles, Conversation History, Live Agent, or Voice Gateway.                                                                                                   |

??? info "2. Check Who Can Access the Access Control Page"
    Users with `admin` rights have full control over the Admin Center interface. However, users with one of the following roles have access only to the **Access Control** page:

    - `projectAdmin` – a [Project role](../members.md#project-roles), read-only access.
    - `memberManager` – a [Project role](../members.md#project-roles), read-only access.
    - `userManager` – a global role, full access.
    - `userDetailsViewer` – a global role, read-only access.

## Working with the Access Control interface

??? info "Create New Users"

    To create a new user in Cognigy.AI for your organization, you must have the `admin` or `userManager` global role.

    To create a new user, follow these steps:

    1. In the Admin Center interface, select **Access Control** from the left-side menu, then click **+ Create new User**.
    2. In the **New User** window, fill in the following fields:
        - **Display Name** — a name that is visible to other users within the organization.
        - **Email Address** — a unique email address associated with the user's account.
        - **Password** — a user password. Passwords can be modified at any time and are securely stored. Users can change their passwords later by navigating **User Menu > My Profile** on the **Main** page or by selecting **My Profile** from the User Menu in the bottom-left corner of the **Project** page.
    3. Click **Save & Open**. A page opens where you can assign global roles and Projects to the user.

    When you create a new user, this user receives a notification at the email address specified in their profile.

??? info "Assign Global Roles to Users"
    To assign global roles to a user, follow these steps:

    1. In the upper-right corner of the **Main** page, select **User Menu > Admin Center**.
    2. In the Admin Center interface, select **Access Control** from the left-side menu. Select a user you want to assign global roles to:

    === "New user"
        1. On the **Users** page, create a new user by clicking **+ Create new User**.
        2. In the **New User** window, fill in the following fields:
            - **Display Name** — a name that is visible to other users within the organization.
            - **Email Address** — a unique email address associated with the user's account.
            - **Password** — a user password. Passwords can be modified at any time and are securely stored. Users can change their passwords later by navigating **User Menu > My Profile** on the **Main** page or by selecting **My Profile** from the User Menu in the bottom-left corner of the **Project** page.
        3. Click **Save & Open**. A page opens where you can assign global roles to the user.
        4. In the **Global Roles** section, click **+** to open a list of roles. Select a role from the list.

    === "Existing user"
        1. On the **Users** page, select the user you want to assign roles to.
        2. In the **Global Roles** section, click **+** to open a list of roles. Select a role from the list.

    After a role is assigned to a user, the role label is displayed in the **Global Roles** section.

??? info "Assign Projects to Users"
    To assign a Project to a user, follow these steps:

    1. In the upper-right corner of the **Main** page, select **User Menu > Admin Center**.
    2. In the Admin Center interface, select **Access Control** from the left-side menu. Select a user you want to assign global roles to:

    === "New user"
        1. On the **Users** page, create a new user by clicking **+ Create new User**.
        2. In the **New User** window, fill in the following fields:
            - **Display Name** — a name that is visible to other users within the organization.
            - **Email Address** — a unique email address associated with the user's account.
            - **Password** — a user password. Passwords can be modified at any time and are securely stored. Users can change their passwords later by navigating **User Menu > My Profile** on the **Main** page or by selecting **My Profile** from the User Menu in the bottom-left corner of the **Project** page.
        3. Click **Save & Open**. A page opens where you can assign Projects to the user. 
        4. In the **Assigned Projects** section, click **+** to open a list of available Projects.
        5. Type the name of the Project, then select it from the list, or scroll to find and select a Project.

    === "Existing user"
        1. On the **Users** page, select the user you want to assign Projects to.
        2. In the **Assigned Agents** section, click **+** to open a list of available Projects.
        3. Type the name of the Project, then select it from the list, or scroll to find and select a Project.

    After a Project is assigned to a user, the Project label is displayed in the **Assigned Projects** section.

    When you assign a Project to an existing user, this user receives a notification at the email address specified in their profile. The email includes information about the Project name and its URL.

## More Information

- [Members](../../access/members.md)
- [Admin Center](../../access/admin-center/overview.md)