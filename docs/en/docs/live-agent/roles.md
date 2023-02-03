---
 title: "Roles"
 slug: "roles" 
 hidden: false 
---

# Roles

Live Agent has three different roles for the users. Administrators, Agents, and Supervisors.

## Single roles

### Administrator

The Administrator has access to most features of Live Agent. 

- Add, edit and delete Inboxes.

- Add, edit and delete Agents/Teams. The Administrator can modify the account user's role.

- Add, edit and delete Labels. The Administrator can modify the account user's role.

- Modify the settings of its account and the account Inboxes.

- Access the OData Endpoint with its access token.

- Create custom attributes to Conversations.

- Does not have access to Reports.

### Agent

The Agent has restricted access.

- Access to the Inboxes/Teams assigned to them.

- Access and ability to add existing Labels to the Conversations.

- Access and ability to add existing custom attributes to the Conversations.

- Cannot manipulate settings related to the account, except for Canned Responses.

- Can reassign the Conversations of their Inboxes to other Agents, or unassign them.

- Does not have access to Reports.

- By default, Agents can see all Conversations of an Inbox they are assigned to. This can be disabled in the settings of an Inbox so that Agents can only see Conversations they are assigned to.

### Supervisor

The Supervisor has restricted access.

- Access to the Inboxes/Teams.

- Access and ability to add existing Labels to the Conversations.

- Access and ability to add existing custom attributes to the Conversations.

- Cannot manipulate settings related to the account, except for Canned Responses.

- Can reassign the Conversations to other Agents, or unassign them.

- Has access to Reports.

## Multiple roles

[![Version badge](https://img.shields.io/badge/Added in-v4.44-blue.svg)](../release-notes/4.44.md)

You can assign more than one role to an Agent.

To create an Agent with multiple roles, do the following steps:

1. Create an Agent from the [Cognigy.AI Access Control](../ai/tools/user-menu/access-control.md) and assign it one or more roles: `liveAgentAdmin`, `liveAgentSupervisor`, `liveAgentAgent`.
2. Add any additional role the Agent should have.
3. View the created user in Live Agent. Go to **Settings > Agents** in the Live Agent menu.

To see the roles applied to the Agent, the specific Agent must log in once to have the additional roles applied.