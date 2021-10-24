# Access Control

The Access Control interface offers a user management tool for organizational level administration. It acts as an **Access Control List (ACL)** and makes it possible to assign a specific role to users.

Find the **Access Control** panel by:

1. Clicking the *Profile Icon* in the top right corner of the interface
2. Selecting *Access Control* from the drop down menu

## Users

<div class="divider"></div>

The **Users overview** lists all members of a particular **Organization**. Individual **Users** can subsequently be assigned to **specific Agents**, using the [**Members**]({{config.site_url}}ai/resources/manage/members/) interface.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/1fe77fc-usermenu-accesscontrol.jpg" width="100%" />
</figure>

???+ info "Tip: Global Users and Local Users (Members)"
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

???+ success "asswords can be changed anytime and are stored securely"
    The user can later change the password from the admin panel.

## Global User Access Control
<div class="divider"></div>

### Assigned Agents

Assign agents to a user by clicking the *+* button under *Assigned Projects* and selecting an agent. Once an agent has been assigned to a user, the agent will be visible on the user's home dashboard.

### Global Roles

*Roles* provide any given user profile with the privilege to execute create, read, update or delete (CRUD) actions and can be granted in a customized manner. **Global Roles** are assigned to a user to define the base access control list (ACL) displayed in the [Members Panel]({{config.site_url}}ai/resources/manage/members/) for each Agent.

The following **Global Roles** are available:

|Role|	Description|

|--|--|
|Admin|	Admins have unlimited access to anything inside their organisation. In a new installation, the system will create one user with this role. A platform owner should create a new user with this role and delete the automatically created one on first login.|
|Base Role|	The Basic role can view most entities in the system. Once a new user is created within the system, this role will get assigned automatically.|
|Project Manager|	Can create new projects (Agents), but not administer users.​|
|User Manager|	Can create new user accounts that can be assigned to projects.​|
|API Keys|	Can create organization-wide API keys for any user to access the Cognigy.AI RESTful API. The same permissions apply if an ApiKey is used.|
|OData|	Can use the Usage Statistics section and access to the ODATA interface to query analytics information|
|Livechat|	Can access the built-in Cognigy live chat feature|

???+ info "Control of Global Access Rights"
    The global roles assigned to a user will set the base access rights for every agent the user has access to. Project-level roles can be assigned via the [Members Panel]({{config.site_url}}ai/resources/manage/members/) to boost a user's rights to author selected elements of a specific agent.

More specific **Access Rights** can be defined for individual features within Agents such as flows, lexicons, playbooks down to fine grained flow properties such as [Basic]({{config.site_url}}ai/flow-nodes/message/message/) or [Advanced]({{config.site_url}}ai/flow-nodes/nlu/copy-slots-to-context/) flow nodes. These **Agent Level** access rights are complimentary to **Global Rights** and are assigned in the [Members]({{config.site_url}}ai/resources/manage/members/) panel of each agent.

## More information

- [Members]({{config.site_url}}ai/tools/user-menu/usage-statistics/)
- [Usage Statistics]({{config.site_url}}ai/resources/manage/members/)