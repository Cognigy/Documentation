---
title: "Access Control"
slug: "access-control"
description: "The Access Control interface provides a user management tool for organizational-level administration. It acts as an Access Control List (ACL), enabling the assignment of specific roles to users."
hidden: false
---

# Access Control

[![Version badge](https://img.shields.io/badge/Updated in-v4.90-blue.svg)](../../../../release-notes/4.90.md)

The _Access Control_ interface provides a user management tool for organizational-level administration.
It acts as an Access Control List (ACL), enabling the assignment of specific roles to users.

You can assign the following types of roles:

- [Global Roles](#global-roles). These roles apply to all Projects within your organization. Global roles set basic access rights for all Agents the user can access.
- [Project Roles](../members.md). These roles are specific to a Project. You can assign project-level roles via the [Members Panel](../members.md) to extend user permissions for creating, editing, viewing, and updating entities within a specific Agent.

Before assigning roles, create a user in your organization.

## Global Roles

Global Roles are assigned to a user to establish basic access control. This list serves as the basis for defining user permissions across the entire organization.

The following global roles are available:

| Role                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `admin`               | Admins have access to anything inside their organization, except OData analytics information. In a new installation, the system will create one user with this role. A platform owner should create a new user with this role and delete the automatically created one on first login.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `base_role`           | Users with the Basic role can view most entities in the system. Once a new user is created within the system, this role will get assigned automatically.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `projectManager`      | Can create new Projects but can't administer users in the Project or Admin Center. Users with this role can't edit, delete, or update resources within the Project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `userManager`         | Can create new user accounts that can be assigned to projects.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `apiKeys`             | Can create organization-wide API keys for any user to access the Cognigy.AI RESTful API. The same permissions apply if an ApiKey is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `odata`               | Can use the Admin Center section and access to the OData interface to query analytics information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `liveAgentAdmin`      | This role is assigned for users to access Cognigy Live Agent as an admin. This role has the same permissions as the Base Role in Cognigy AI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `liveAgentSupervisor` | This role is assigned for users to access Cognigy Live Agent as a supervisor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `liveAgentAgent`      | This role is assigned for users to access Cognigy Live Agent as a human agent. This role has the same permissions as the Base Role in Cognigy AI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `userDetailsViewer`   | This role is limited to read-only access that grants users permissions to view user details, such as email addresses and usernames. The role allows an administrator to manage user details in Cognigy without granting any other access or privileges.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `voice-gatewayUser`   | This role is assigned to users with the [Account](../../../../voice-gateway/webapp/users.md#account) role to access the Voice Gateway Self-Service Portal, allowing them to authorize via their Cognigy.AI user credentials.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `fullSupportUser`     | This role is assigned to users who require Admin-level privileges. However, within this role, they are unable to assign Projects or global roles to other users. Access to OData, Cognigy API, and Audit Events is included.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `basicSupportUser`    | This role is assigned to users who require:<br>- Administrative privileges to set up projects and manage platform-related topics (for example, extension_trust_admin).<br>- Full access for error analysis and debugging AI Agents (for example, viewing logs, managing Playbooks, accessing Conversation History, and Contact Profiles).<br>- Read-only access to Endpoints, Connections, Flows, Nodes, Intents, NLU Connectors, Project Settings, Snapshots, States, Tasks, and Tokens.<br>- No access to technical connections (OData and API).<br>- No user management roles; users with this role cannot assign Agents (projects) or global roles to other users.<br>- No access to Knowledge AI. |
| `projectAssigner`     | This role is intended for users who need to assign Projects to themselves and others. The following restrictions apply to this role:<br>- Unable to assign global roles to other users or add new users to the Project.<br>- No access to Knowledge AI, Contact Profiles, Conversation History, Live Agent, and Voice Gateway.<br>- Read-only access to Endpoints, Connections, Flows, Nodes, Intents, NLU Connectors, Project Settings, Snapshots, States, Tasks, Analytics, and Tokens.                                                                                                                                                                                                              |

## Create a New User

To register a new user in Cognigy for your organization, you must have an `admin` or `userManager` global role.

To create a new user, follow these steps:

1. In the upper-right corner of the **Main** page, select **User Menu ![user-menu](../../../../_assets/icons/user-menu.svg) > Admin Center**.
2. In the Admin Center interface, select **Access Control** from the left-side menu, then click **+ Create new User**.
3. In the **New User** window, fill in the following fields:
    - **Display Name** — a name that will be visible to other users within the organization.
    - **Email Address** — a unique email address associated with the user's account.
    - **Password** — a user password. Passwords can be modified at any time and are securely stored. Users can change their passwords later by navigating **User Menu ![user-menu](../../../../_assets/icons/user-menu.svg) > My Profile** on the **Main** page or by selecting **My Profile** from the User Menu in the bottom-left corner of the Project page.
4. Click **Save&Open** to assign the global roles and Agents (projects).

When you create a new user, this user will receive a notification at the email address specified in their profile. The email will include information about the project name and its URL.

## Assign Global Roles to a User

To assign global roles to a user, follow these steps:

1. In the upper-right corner of the **Main** page, select **User Menu ![user-menu](../../../../_assets/icons/user-menu.svg) > Admin Center**.
2. In the Admin Center interface, select **Access Control** from the left-side menu. Select a user you want to assign global roles to:

    === "New user"
        1. On the **Users** page, create a new user by clicking **+ Create new User**.<br>
        2. In the **New User** window, fill in the following fields:<br>
            - **Display Name** — a name that will be visible to other users within the organization.<br>
            - **Email Address** — a unique email address associated with the user's account.<br>
            - **Password** — a user password. Passwords can be modified at any time and are securely stored. Users can change their passwords later by navigating **User Menu ![user-menu](../../../../_assets/icons/user-menu.svg) > My Profile** on the **Main** page or by selecting **My Profile** from the User Menu in the bottom-left corner of the Project page.<br>
        3. Click **Save&Open** to assign the global roles.<br>
        4. In the **Global Roles** section, click **+** to open a list of roles.<br>
        5. Select the desired role from the list.<br>
    
    === "Existing user"
        1. On the **Users** page, select the user you want to assign roles to.
        2. In the **Global Roles** section, click **+** to open a list of roles.
        3. Select the desired role from the list.

Once a role has been assigned to a user, the role label will be displayed in the **Global Roles** section.

## Assign Projects to a User

To assign a Project to a user, follow these steps:

1. In the upper-right corner of the **Main** page, select **User Menu ![user-menu](../../../../_assets/icons/user-menu.svg) > Admin Center**.
2. In the Admin Center interface, select **Access Control** from the left-side menu. Select a user you want to assign global roles to:

    === "New user"
        1. On the **Users** page, create a new user by clicking **+ Create new User**.<br>
        2. In the **New User** window, fill in the following fields:<br>
            - **Display Name** — a name that will be visible to other users within the organization.<br>
            - **Email Address** — a unique email address associated with the user's account.<br>
            - **Password** — a user password. Passwords can be modified at any time and are securely stored. Users can change their passwords later by navigating **User Menu ![user-menu](../../../../_assets/icons/user-menu.svg) > My Profile** on the **Main** page or by selecting **My Profile** from the User Menu in the bottom-left corner of the Project page.<br>
        3. Click **Save&Open** to assign the Projects.<br>
        4. In the **Assigned Agents** section, click **+** to open a list of available Projects.<br>
        5. Type the name of the Project, then select them from the list, or scroll to find and make your selection.
    
    === "Existing user"
        1. On the **Users** page, select the user you want to assign Projects to.
        2. In the **Assigned Agents** section, click **+** to open a list of available Projects.
        3. Type the name of the Project, then select them from the list, or scroll to find and make your selection.

Once a Project has been assigned to a user, the Project label will be displayed in the **Assigned Agents** section.

When you assign a Project to an existing user,
this user will receive a notification at the email address specified in their profile.
The email will include information about the Project name and its URL.

## Access to the Access Control Page

Users with `admin` rights have full control over the Admin Center interface. However, users with one of the following roles have access only to the **Access Control** page:

- `projectAdmin` – read-only access. See [Project Roles](../members.md#project-roles).
- `memberManager` – read-only access. See [Project Roles](../members.md#project-roles).
- `userManager` – full access. See [Global Roles](#global-roles).
- `userDetailsViewer` – read-only access. See [Global Roles](#global-roles).

## More Information

- [Members](../../access/members.md)
- [Admin Center](../../access/admin-center/overview.md)