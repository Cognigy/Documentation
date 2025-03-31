# Members

The **Members** panel allows **Project Admins** to manage the **Roles** that users in an organization have for a specific Project. The roles assigned here are complimentary to the **Global Roles** assigned in the [Access Control](admin-center/access-control.md) panel.

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/members.png" width="100%" />
</figure>

## Project Roles

In addition to global roles, Cognigy.AI offers Project-specific roles, which can be assigned to compliment the global access rights that have been granted for a given user.

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/members2.png" width="100%" />
</figure>

!!! note "Project Member Administration"
    A user profile requires the "Project Admin" role to be able to make changes to any user access for that Project. This will automatically be assigned to any user who creates a new Project.

The available project roles are presented in the table below.

| Project Role           | Permissions                                                                                                                                                                                                                                                                                             |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Analytics              | Adds the following permissions: <br> - full permissions on analytics                                                                                                                                                                                                                                    |
| Basic                  | Adds the following permissions: <br> - read permission for all Project assets except: User Details, contact profiles, Node Comments, Logs, and Member Details                                                                                                                                           |
| Connection Admin       | Adds the following permissions: <br> - full permissions for Connections                                                                                                                                                                                                                                 |
| Contact Profile Admin  | Adds the following permissions: <br> - full permissions for Contact Profiles <br> - full permissions for Conversation History                                                                                                                                                                           |
| Contact Profile Editor | Adds the following permissions: <br> - read/update permissions for Contact Profiles                                                                                                                                                                                                                     |
| Contact Profile Viewer | Adds the following permissions: <br> - read permissions for Contact Profiles                                                                                                                                                                                                                            |
| Conversation History   | Adds the following permissions: <br> - full permissions for Conversation History                                                                                                                                                                                                                        |
| Data Privacy Admin     | ![Version badge](https://img.shields.io/badge/Added in-v4.38.0-blue.svg) Adds the following permissions: <br> - full permissions for data privacy settings (Collect Analytics, Store Contact Profiles, Collect Conversations, Mask Analytics, Mask Logging)                                             |
| Data Privacy Editor    | ![Version badge](https://img.shields.io/badge/Added in-v4.38.0-blue.svg) Adds the following permissions: <br> - read/update permissions for data privacy settings                                                                                                                                       |
| Data Privacy Viewer    | ![Version badge](https://img.shields.io/badge/Added in-v4.38.0-blue.svg) Adds the following permissions: <br> - read permissions for data privacy settings                                                                                                                                              |
| Developer              | Adds the following permissions: <br> - full permissions for Extensions <br> - full permissions for Flow Node Comments <br> - full permissions for Flow Node Description <br> - full permissions for Locales <br> - full permissions for Logs <br> - full permissions for Live Follow feature            |
| Endpoint Admin         | Adds the following permissions: <br> - full permissions for Endpoints                                                                                                                                                                                                                                   |
| Extension Admin        | Adds the following permissions: <br> - full permissions for Extensions                                                                                                                                                                                                                                  |
| Extension Editor       | Adds the following permissions: <br> - read/update permissions for Extensions                                                                                                                                                                                                                           |
| Trust an Extension     | Adds the following permissions: <br> - make Extensions trusted or untrusted                                                                                                                                                                                                                             |
| Flow Editor            | Adds the following permissions: <br> - read/update permissions for Intents <br> - full permissions for Node comments <br> - full permissions for Node descriptions <br> - full permissions for Nodes <br> - full permissions for Copy/Paste etc <br> - full permissions for changing the order of Nodes |
| Flow Node Comments     | Adds the following permissions: <br> - full permissions for Node comments                                                                                                                                                                                                                               |
| Flow Node Descriptions | Adds the following permissions: <br> - full permissions for Node descriptions                                                                                                                                                                                                                           |
| Follow User            | Adds the following permissions: <br> - full permissions for the Live Follow feature                                                                                                                                                                                                                     |
| Intents                | Adds the following permissions: <br> - full permissions for intents                                                                                                                                                                                                                                     |
| Knowledge Admin        | ![Version badge](https://img.shields.io/badge/Added in-v4.75.0-blue.svg) Adds the following permissions: full permissions for the [Knowledge AI](../../empower/knowledge-ai/overview.md) resources                                                                                                      |
| Lexicon Admin          | Adds the following permissions: <br> - full permissions for Lexicons                                                                                                                                                                                                                                    |
| Lexicon Editor         | Adds the following permissions: <br> - read/update permissions for Lexicons                                                                                                                                                                                                                             |
| Locales Admin          | Adds the following permissions: <br> - full permissions for Locales                                                                                                                                                                                                                                     |
| Logs                   | Adds the following permissions: <br> - full permissions for Logs                                                                                                                                                                                                                                        |
| Member Manager         | Adds the following permissions: <br> - full permissions for Member Details <br> - read permissions for the [Access Control](admin-center/access-control.md) page in the Admin Center                                                                                                                    |
| NLU Connector Admin    | Adds the following permissions: <br> - full permissions for NLU Connectors                                                                                                                                                                                                                              |
| Packages Admin         | Adds the following permissions: <br> - full permissions for Playbooks                                                                                                                                                                                                                                   |
| Playbook Admin         | Adds the following permissions: <br> - full permissions for Packages                                                                                                                                                                                                                                    |
| Playbook Editor        | Adds the following permissions: <br> - Read/Update permissions for Playbooks                                                                                                                                                                                                                            |
| Project Admin          | Adds the following permissions: <br> - full access to all project resources (create, read, update, delete) <br> - read permissions for the [Access Control](admin-center/access-control.md) page in the Admin Center                                                                                    |
| Snapshot Admin         | Adds the following permissions: <br> - full permissions for Snapshots (Note: Permission to restore a Snapshot remains with the Project Admin and above)                                                                                                                                                 |
| Token Admin            | Adds the following permissions: <br> - full permissions for Tokens                                                                                                                                                                                                                                      |
| Token Editor           | Adds the following permissions: <br> - Read/Update permissions for Tokens                                                                                                                                                                                                                               |

!!! note "API Access"
    The same rights that control access to elements of the user interface also control access to the respective aspects of the API.

## Notifications

[![Version badge](https://img.shields.io/badge/Added in-v4.50-blue.svg)](../../../release-notes/4.50.md)

When you create a new member in your project, that user will receive a notification at the email address specified in their profile. The email will include information about the project name and its URL.

## Locale Restrictions

The locale restrictions feature allows a user's access to be granted to a single locale. By enabling the "User is restricted to the following locales" option, the user can be assigned any of the locales that exist within the Project.

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/localeRestrictions.png" width="100%" />
</figure>
The user's access rights will only be available for the assigned locales.
