---
title: "Users" 
slug: "users"
hidden: false
---

# Users

_Users_ allow you to manage members in your account: create new members, edit, or delete existing ones. 

<figure>
  <img class="image-center"  src="../../../_assets/voice-gateway/VG-webapp-users.png"  width="60%" />
  <figcaption>Users</figcaption>
</figure>

## Scopes

Depending on Cognigy Voice Gateway installation, members can have the following roles (scopes):

- [Account](#account)
- [Service Provider](#service-provider)
- [Admin](#admin)

### Account

[![Version badge](https://img.shields.io/badge/Updated in-v4.62-blue.svg)](../../release-notes/4.62.md)

This scope includes basic operations with Voice Gateway entities, such as creating, editing, and deleting entities. 

It also allows for editing user profiles, carriers, and speech services that belong to users with the Account scope.

Users with the Account role can be authorized in the Voice Gateway Self-Service Portal via their Cognigy.AI user credentials.
To activate this option, you need to activate the **Set up Voice Gateway**
button in the **User menu > Admin Center** of the Cognigy.AI UI.
Go to **User Menu > Admin Center > Access Control** and add a `voice-gatewayUser` role for selected users.

### Service Provider

This scope is only available for on-premises Cognigy Voice Gateway installations. 

It includes all the operations in the Account scope and the ability to edit user profiles, carriers, and speech services that belong to users with either the Account scope or the Service Provider scope. 

Additionally, users with the Service Provider scope can create, edit, and delete users with the Account and Service Provider scopes, and they can generate API keys.

### Admin

This scope is only available for on-premises Cognigy Voice Gateway installations. 

It includes all operations in the Account and Service Provider scopes, allowing for performing all operations in the Voice Gateway. 

Additionally, Admins can create, edit, and delete users with the Account, Service Provider, and Admin scopes. They can also generate API keys and change password requirements.