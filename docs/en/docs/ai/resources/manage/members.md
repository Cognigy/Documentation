# Members

The **Members** panel allows **Project Admins** to manage the **Roles** that users in an organization have for a specific Agent. The roles assigned here are complimentary to the **Global Roles** assigned in the **[Access Control]({{config.site_url}}ai/tools/user-menu/access-control/)** panel.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/08460d1-members.png" width="100%" />
</figure>

## Project Roles
<div class="divider"></div>

In addition to global roles, Cogngiy.AI offers Agent-specific roles which can be assigned to compliment the global access rights that have been granted for a given user.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/508a047-members2.png" width="100%" />
</figure>

???+ info "Project Member Administration"
    A user profile requires the "Project Admin" role to be able to make changes to a any user access for that specific agent. This will automatically be assigned to any user who creates a new agent.

The **Project Roles** available to chose from are listed below:

| Project Role Name      | Permissions                          |
| ----------- | ------------------------------------ |
| Analytics | Adds the following permissions: <br> - full permissions on analytics |
| Basic | Adds the following permissions: <br> - read permission for all agent assets except: User Details, contact profiles, Node Comments, Node Descriptions, Logs and Member Details|
| Connection Admin   | Adds the following permissions: <br> - full permissions for Connections|
| Contact Profile Admin | Adds the following permissions: <br> - full permissions for Contact Profiles <br> - full permissions for Conversation History|
| Contact Profile Editor   | Adds the following permissions: <br> - read/update permissions for Contact Profiles|
| Contact Profile Viewer  | Adds the following permissions: <br> - read permissions for Contact Profiles|
| Conversation History |Adds the following permissions: <br> - full permissions for Conversation History|
| Developer  | Adds the following permissions: <br> - full permissions for Extensions <br> - full permissions for Flow Node Comments <br> - full permissions for Flow Node Description <br> - full permissions for Locales <br> - full permissions for Logs|
| Endpoint Admin  | Adds the following permissions: <br> - full permissions for Endpoints|
| Extension Admin  | Adds the following permissions: <br> - full permissions for Extensions|
| Extension Editor| Adds the following permissions: <br> - read/update permissions for Extensions|
| Flow Editor| Adds the following permissions: <br> - read/update permissions for Intents <br> - full permissions for Flow node comments <br> - full permissions for Flow node descriptions <br> - full permissions for Flow nodes <br> - full permissions for Copy/Paste etc <br> - full permissions for changing the order of Flow nodes|
| Flow Node Comments  |Adds the following permissions: <br> - full permissions for Flow node comments|
| Flow Node Descriptions| Adds the following permissions: <br> - full permissions for Flow node descriptions|
| Intents  | Adds the following permissions: <br> - full permissions for intents|
| Lexicon Admin  | Adds the following permissions: <br> - full permissions for Lexicons|
| Lexicon Editor | Adds the following permissions: <br> - read/update permissions for Lexicons|
| Locales Admin | Adds the following permissions: <br> - full permissions for Locales|
| Logs | Adds the following permissions: <br> - full permissions for Logs|
| Member Manager | Adds the following permissions: <br> - full permissions for Member Details|
| NLU Connector Admin | Adds the following permissions: <br> - full permissions for NLU Connectors|
| Playbook Admin | Adds the following permissions: <br> - full permissions for Playbooks|
| Playbook Editor | Adds the following permissions: <br> - Read/Update permissions for Playbooks|
| Project Admin | Adds the following permissions: <br> - full access to all project resources (create, read, update, delete)|
| Snapshot Admin| Adds the following permissions: <br> - full permissions for Snapshots (Note: Permission to restore a Snapshot remains with the Project Admin and above)|
| Snapshots | Adds the following permissions: <br> - full permissions for Snapshots|
| Token Admin| Adds the following permissions: <br> - full permissions for Tokens|
| Token Editor | Adds the following permissions: <br> - Read/Update permissions for Tokens|

???+ info "API Access"
    The same rights that control access to elements of the user interface also control access to the respective aspects of the API.

## Locale Restrictions
<div class="divider"></div>

The locale restrictions feature allows a user's access to be granted to a single locale. By enabling the "User is restricted to the following locales:" option, the user can be assigned any of the locales that exist within the agent.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/cd61670-localeRestrictions.PNG" width="100%" />
</figure>
The user's access rights will only be available for the assigned locales.
