---
 title: "Roles"
 slug: "roles" 
 hidden: false 
---

# Roles

Live Agent has two different roles for the users. Agents and Administrators.

## Administrator

The Administrator has access to most features of Live Agent. 

- Add, edit and delete Inboxes.

- Add, edit and delete Agents/Teams. The Administrator can modify the account user's role.

- Add, edit and delete Labels. The Administrator can modify the account user's role.

- Modify the settings of its account and the account Inboxes.

- Access the OData Endpoint with its access token.

- Create custom attributes to Conversations.

- Does not have access to Reports.

## Agent

The Agent has restricted access.

- Access to the Inboxes/Teams assigned to them.

- Access and ability to add existing Labels to the Conversations.

- Access and ability to add existing custom attributes to the Conversations.

- Cannot manipulate settings related to the account, except for Canned Responses.

- Can reassign the Conversations of their Inboxes to other Agents, or unassign them.

- Does not have access to Reports.

- By default, Agents can see all Conversations of an Inbox they are assigned to. This can be disabled in the settings of an Inbox so that Agents can only see Conversations they are assigned to.

## Supervisor

The Supervisor has restricted access.

- Access to the Inboxes/Teams.

- Access and ability to add existing Labels to the Conversations.

- Access and ability to add existing custom attributes to the Conversations.

- Cannot manipulate settings related to the account, except for Canned Responses.

- Can reassign the Conversations to other Agents, or unassign them.

- Has access to Reports.


???+ info "Support of multiple roles"
    Please be aware that currently Live Agent does not support multiple Live Agent roles for one user.