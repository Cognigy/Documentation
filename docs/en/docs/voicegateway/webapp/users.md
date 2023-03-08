---
 title: "users" 
 slug: "users" 
 hidden: false 
---

# Users

_Users_ allow you to manage members in your account: create new members, edit, or delete existing ones. 

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-users.png"  width="100%" />

## Scopes

Depending on Cognigy Voice Gateway installation, members can have the following roles (scopes):

- [Account](#accout)
- [Service Account](#service-account)
- [Admin](#admin)

### Account

Includes basic operations with Voice Gateway entities: creating, editing, and deleting entities. Allows editing user profiles, carriers, and speech services that belong to users with the Account scope.

### Service Account

Only for On-premises Cognigy Voice Gateway installation. 

Includes the Account scope. Additionally, allows editing user profiles, carriers, and speech services that belong to users with Account or Service Account scopes. 

Can create, edit and delete users with Account and Service provider scopes.

Also, Service Account can generate API keys.

### Admin

Only for On-premises Cognigy Voice Gateway installation.

Includes the Account and Servise provider scopes. Allows performing all operations in Voice Gateway.

Can create, edit and delete users with the Account, Service provider, and Admin scopes.

Also, Admin can generate API keys and change password requirements.