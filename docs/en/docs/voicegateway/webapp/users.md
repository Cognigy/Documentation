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

This scope includes basic operations with Voice Gateway entities, such as creating, editing, and deleting entities. 

It also allows for editing user profiles, carriers, and speech services that belong to users with the Account scope.

### Service Account

This scope is only available for On-premises Cognigy Voice Gateway installations. 

It includes all of the operations in the Account scope and the ability to edit user profiles, carriers, and speech services that belong to users with either the Account scope or the Service Account scope. 

Additionally, users with the Service Account scope can create, edit, and delete users with the Account and Service Provider scopes, and they can generate API keys.

### Admin

This scope is only available for On-premises Cognigy Voice Gateway installations. 

It includes all operations in the Account and Service Provider scopes, allowing for performing all operations in the Voice Gateway. 

Additionally, Admins can create, edit, and delete users with the Account, Service Provider, and Admin scopes. They can also generate API keys and change password requirements.