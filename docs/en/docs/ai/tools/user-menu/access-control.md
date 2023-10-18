---
 title: "Access Control" 
 slug: "access-control" 
 hidden: false 
---
# Access Control

The Access Control interface offers a user management tool for organizational level administration. It acts as an **Access Control List (ACL)** and makes it possible to assign a specific role to users.

You will have access to the Access Control panel as follows:

1. Click the **Profile** icon in the top right corner of the interface.
2. Select **Access Control** in the drop-down menu.

## Users

<div class="divider"></div>

The **Users overview** lists all members of a particular **Organization**. Individual **Users** can subsequently be assigned to **specific Agents**, using the [**Members**]({{config.site_url}}ai/resources/manage/members/) interface.

[![Version badge](https://img.shields.io/badge/Added in-v4.19.0-blue.svg)]({{config.site_url}})

With this release, the user list is improved with user "Last Active" information. The record with "-" indicates that either the user did not log in after the release of v4.19.0, or that the user has not yet logged in at all.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/1fe77fc-usermenu-accesscontrol.png" width="100%" />
</figure>

!!! note "Tip: Global Users and Local Users (Members)"
    Administrators can create **Global Users** on an organizational-level, that can then be assigned to specific Agents. These **Local Users** can have more granular roles within specific Agent projects that are configured using the [Members]({{config.site_url}}ai/resources/manage/members/) panel within each Agent.

## Create new Users
Administrators can use the *Create new User* button to add a User to the Organization. The following fields have to be filled out: 

  * Display Name
  * Email Address
  * Password
  * Confirm Password

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/0f3231e-usermenu-accesscontrol-newuser.jpg" width="100%" />
</figure>

!!! tip "Passwords can be changed anytime and are stored securely"
    The user can later change the password from the admin panel.

## Global User Access Control
<div class="divider"></div>

### Assigned Agents

Assign Agents to a user by clicking the **+** button under **Assigned Projects** and selecting an Agent. Once an Agent has been assigned to a user, the Agent will be visible on the user's home dashboard.

### Global Roles

*Roles* provide any given user profile with the privilege to execute create, read, update or delete (CRUD) actions and can be granted in a customized manner. **Global Roles** are assigned to a user to define the base access control list (ACL) displayed in the [Members Panel]({{config.site_url}}ai/resources/manage/members/) for each Agent.

The following **Global Roles** are available:

| Role              | 	Description                                                                                                                                                                                                                                                  |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Admin             | 	Admins have unlimited access to anything inside their organisation. In a new installation, the system will create one user with this role. A platform owner should create a new user with this role and delete the automatically created one on first login. |
| Base Role         | 	The Basic role can view most entities in the system. Once a new user is created within the system, this role will get assigned automatically.                                                                                                                |
| Project Manager   | 	Can create new projects (Agents), but not administer users.                                                                                                                                                                                                  |
| User Manager      | 	Can create new user accounts that can be assigned to projects.                                                                                                                                                                                               |
| API Keys          | 	Can create organization-wide API keys for any user to access the Cognigy.AI RESTful API. The same permissions apply if an ApiKey is used.                                                                                                                    |
| OData             | 	Can use the Organisation Details section and access to the OData interface to query analytics information.                                                                                                                                                   |
| Live Agent Admin  | This role is assigned for users to access Cognigy Live Agent as an admin. This role has the same permissions as the Base Role in Cognigy AI.                                                                                                                  |
| Live Agent Agent  | This role is assigned for users to access Cognigy Live Agent as an agent. This role has the same permissions as the Base Role in Cognigy AI.                                                                                                                  |
| userDetailsViewer | This role is limited to read-only access that grants users permissions to view user details, such as email addresses and usernames. The role allows an administrator to manage user details in Cognigy without granting any other access or privileges.       |
| userDetailsViewer | This role is limited to read-only access that grants users permissions to view user details, such as email addresses and usernames. The role allows an administrator to manage user details in Cognigy without granting any other access or privileges.       |
| voiceGatewayUser  | This role is assigned to users with the [Account](../../../voicegateway/webapp/users.md#account) role to access the Voice Gateway Self-Service Portal, allowing them to authorize via their Cognigy.AI user credentials.                                      |

!!! note "Control of Global Access Rights"
    The global roles assigned to a user will set the base access rights for every agent the user has access to. Project-level roles can be assigned via the [Members Panel]({{config.site_url}}ai/resources/manage/members/) to boost a user's rights to author selected elements of a specific agent.

More specific **Access Rights** can be defined for individual features within Agents such as flows, lexicons, playbooks down to fine-grained flow properties such as [Basic]({{config.site_url}}ai/flow-nodes/message/message/) or [Advanced]({{config.site_url}}ai/flow-nodes/nlu/copy-slots-to-context/) flow nodes. These **Agent Level** access rights are complimentary to **Global Rights** and are assigned in the [Members]({{config.site_url}}ai/resources/manage/members/) panel of each Agent.

## Notifications

[![Version badge](https://img.shields.io/badge/Added in-v4.50-blue.svg)](../../../release-notes/4.50.md)

When you create a new user or assign a project to an existing user, that user will receive a notification at the email address specified in their profile. The email will include information about the project name and its URL.


## More information

- [Members]({{config.site_url}}ai/resources/manage/members/)
- [Organisation Details]({{config.site_url}}ai/tools/user-menu/organisation-details/)
