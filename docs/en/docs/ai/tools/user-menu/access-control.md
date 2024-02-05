---
title: "Access Control"
slug: "access-control"
hidden: false
---
# Access Control

[![Version badge](https://img.shields.io/badge/Updated in-v4.69-blue.svg)](../../../release-notes/4.69.md)

The _Access Control_ interface provides a user management tool for organizational-level administration.
It acts as an Access Control List (ACL), enabling the assignment of specific roles to users.

You can assign the following types of roles:

- [Global Roles](#global-roles). These roles apply to all Agents (projects) within your organization. Global roles set basic access rights for all Agents the user can access.
- [Project Roles](../../resources/manage/members.md). These roles are specific to an Agent (project). You can assign project-level roles via the [Members Panel](../../resources/manage/members.md) to extend user permissions for creating, editing, viewing, and updating entities within a specific Agent.

Before assigning roles, create a user in your organization.

## Global Roles

Global Roles are assigned to a user to establish basic access control. This list serves as the basis for defining user permissions across the entire organization.

The following global roles are available:

| Role              | 	Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Admin             | 	Admins have unlimited access to anything inside their organisation. In a new installation, the system will create one user with this role. A platform owner should create a new user with this role and delete the automatically created one on first login.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Base Role         | 	The Basic role can view most entities in the system. Once a new user is created within the system, this role will get assigned automatically.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Project Manager   | 	Can create new projects (Agents), but not administer users.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| User Manager      | 	Can create new user accounts that can be assigned to projects.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| API Keys          | 	Can create organization-wide API keys for any user to access the Cognigy.AI RESTful API. The same permissions apply if an ApiKey is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| OData             | 	Can use the Organisation Details section and access to the OData interface to query analytics information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Live Agent Admin  | This role is assigned for users to access Cognigy Live Agent as an admin. This role has the same permissions as the Base Role in Cognigy AI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Live Agent Agent  | This role is assigned for users to access Cognigy Live Agent as an agent. This role has the same permissions as the Base Role in Cognigy AI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| userDetailsViewer | This role is limited to read-only access that grants users permissions to view user details, such as email addresses and usernames. The role allows an administrator to manage user details in Cognigy without granting any other access or privileges.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| voiceGatewayUser  | This role is assigned to users with the [Account](../../../voicegateway/webapp/users.md#account) role to access the Voice Gateway Self-Service Portal, allowing them to authorize via their Cognigy.AI user credentials.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| fullSupportUser   | This role is assigned to users who require Admin-level privileges. However, within this role, they are unable to assign Agents (projects) or global roles to other users. Additionally, access to the Voice Gateway and Live Agent is restricted. Access to OData and Cognigy API is included.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| basicSupportUser  | This role is assigned to users who require:<br>- Administrative privileges to set up projects and manage platform-related topics (for example, extension_trust_admin).<br>- Full access for error analysis and debugging virtual agents (for example, viewing logs, managing Playbooks, accessing Conversation History, and Contact Profiles).<br>- Read-only access to Endpoints, Connections, Flows, Nodes, Intents, NLU Connectors, Project Settings, Snapshots, States, Tasks, and Tokens.<br>- No access to technical connections (OData and API).<br>- No user management roles; users with this role cannot assign Agents (projects) or global roles to other users.<br>- No access to Knowledge AI.<br>- Restricted access to Live Agent and Voice Gateway. |
| projectAssigner   | This role is intended for users who need to assign Agents to themselves and others. The following restrictions apply to this role:<br>- Unable to assign global roles to other users or add new users to the Agent (project).<br>- No access to Knowledge AI, Contact Profiles, Conversation History, Live Agent, and Voice Gateway.<br>- Read-only access to Endpoints, Connections, Flows, Nodes, Intents, NLU Connectors, Project Settings, Snapshots, States, Tasks, Analytics, and Tokens.                                                                                                                                                                                                                                                                     |

## Create a New User

To register a new user in Cognigy for your organization, you must have an `Admin` global role.

To create a new user, follow these steps:

1. Open the Cognigy.AI interface.
2. In the upper-right corner, click **User Menu ![user-menu](../../../assets/icons/user-menu.svg) > Access Control**.
3. On the **Users** page, click **+ Create new User**.
4. In the **New User** window, fill in the following fields:
    - **Display Name** — a name that will be visible to other users within the organization.
    - **Email Address** — a unique email address associated with the user's account.
    - **Password** — a user password. Passwords can be modified at any time and are securely stored. Users have the ability to change their passwords later by navigating **User Menu ![user-menu](../../../assets/icons/user-menu.svg) >My Profile**.
5. Click **Save&Open** to assign the global roles and Agents (projects).

When you create a new user, this user will receive a notification at the email address specified in their profile. The email will include information about the project name and its URL.

## Assign Global Roles to a User

To assign global roles to a user, follow these steps:

1. Open the Cognigy.AI interface.
2. In the upper-right corner, click **User Menu ![user-menu](../../../assets/icons/user-menu.svg) > Access Control**.
3. Select a user you want to assign global roles to:

    === "New user"
        3.1 On the **Users** page, create a new user by clicking **+ Create new User**.<br>
        3.2 In the **New User** window, fill in the following fields:<br>
            - **Display Name** — a name that will be visible to other users within the organization.<br>
            - **Email Address** — a unique email address associated with the user's account.<br>
            - **Password** — a user password. Passwords can be modified at any time and are securely stored. Users have the ability to change their passwords later by navigating **User Menu ![user-menu](../../../assets/icons/user-menu.svg) > My Profile**.<br>
        3.3 Click **Save&Open** to assign the global roles.<br>
        3.4 In the **Global Roles** section, click **+** to open a list of roles.<br>
        3.5 Select the desired role from the list.<br>
    
    === "Existing user"
        3.1 On the **Users** page, select the user you want to assign roles to.
        3.2 In the **Global Roles** section, click **+** to open a list of roles.
        3.3 Select the desired role from the list.

Once a role has been assigned to a user, the role label will be displayed in the **Global Roles** section.

## Assign Agents to a User

To assign an Agent to a user, follow these steps:

1. Open the Cognigy.AI interface.
2. In the upper-right corner, click **User Menu ![user-menu](../../../assets/icons/user-menu.svg) > Access Control**.
3. Select a user you want to assign Agents to:

    === "New user"
        3.1 On the **Users** page, create a new user by clicking **+ Create new User**.<br>
        3.2 In the **New User** window, fill in the following fields:<br>
            - **Display Name** — a name that will be visible to other users within the organization.<br>
            - **Email Address** — a unique email address associated with the user's account.<br>
            - **Password** — a user password. Passwords can be modified at any time and are securely stored. Users have the ability to change their passwords later by navigating **User Menu ![user-menu](../../../assets/icons/user-menu.svg) > My Profile**.<br>
        3.3 Click **Save&Open** to assign the Agents (projects).<br>
        3.4 In the **Assigned Agents** section, click **+** to open a list of available Agents.<br>
        3.5 Type the Agent's name, then select them from the list, or scroll to find and make your selection.
    
    === "Existing user"
        3.1 On the **Users** page, select the user you want to assign Agents to.
        3.2 In the **Assigned Agents** section, click **+** to open a list of available Agents.
        3.3 Type the Agent's name, then select them from the list, or scroll to find and make your selection.

Once an Agent has been assigned to a user, the Agent label will be displayed in the **Assigned Agents** section.

When you assign an Agent to an existing user, this user will receive a notification at the email address specified in their profile. The email will include information about the project name and its URL.

## More Information

- [Members](../../resources/manage/members.md)
- [Organisation Details](../user-menu/organisation-details.md)