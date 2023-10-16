---
 title: "Roles"
 slug: "roles" 
 hidden: false 
---

# Roles

Live Agent has three different roles for the users. Administrators, Agents, and Supervisors.

An Agent is a member of your Customer Support team. Agents will be able to view and reply to messages from your users. Access to Cognigy Live Agent's features are based on following roles:

### Agent

Agent - Agents with this role can only access inboxes, reports and conversations. They can assign conversations to other agents or themselves and resolve conversations.

### Administrator
 Administrator - The administrator has access to all Cognigy Live Agent features enabled for your account, including settings, along with all of a normal agents' privileges, except the supervisor dashboard. This dashboard is exclusive to the supervisor role.

### Supervisor
 Supervisor - The supervisor has unique access to the supervisor dashboard to observe conversation metrics and is also able to see and interact with all inboxes.

## Permissions

The following tables show single role permissions of Agents, Supervisors and Administrators.

### General Live Agent Settings

| Access Object - Action                | Agent | Supervisor | Administrator  |
|---------------------------------------|-------|------------|----------------|
| **Attachments**                       |  -    | -          | +              |
| View Attachments                      |  -    | -          | +              |
| Sort Attachments                      |  -    | -          | +              |
| Filter Attachments                    |  -    | -          | +              |
| Add Filter                            |  -    | -          | +              |
| Delete Attachments                    |  -    | -          | +              |
| Download Attachments                  |  -    | -          | +              |
| **Audit Logs**                        |       |            |                |
| Read Audit Logs                       |  -    | -          | +              |
| **Automation Rules**                  |  -    | -          | +              |
| Add Automation Rules                  |  -    | -          | +              |
| Edit Automation Rules                 |  -    | -          | +              |
| Clone Automation Rules                |  -    | -          | +              |
| Delete Automation Rules               |  -    | -          | +              |
| Activate Automation Rules             |  -    | -          | +              |
| Deactivate Automation Rules           |  -    | -          | +              |
| **Labels**                            |       |            |                |
| Create a Label                        |  -    | +          | +              |
| Edit a Label                          |  -    | +          | +              |
| Delete a Label                        |  -    | +          | +              |
| Add a Label to a conversation         |  +    | +          | +              |
| **Skills**                            |       |            |                |
| Add Skills                            |  -    | +          | +              |
| Edit Skills                           |  -    | +          | +              |
| Delete Skills                         |  -    | +          | +              |
| Add Skills to an Agent                |  -    | -          | +              |

### Account and Profile Settings

| Actions                               | Agent | Supervisor | Administrator  |
|---------------------------------------|-------|------------|----------------|
| Configure Account Settings            |   -   |     -      | +              |
| Configure Profile Settings            |   +   |     +      | +              |

### Agents

| Actions                               | Agent | Supervisor | Administrator  |
|---------------------------------------|-------|------------|----------------|
| **Agents**                            |       |            |                |
| Create an Agent                       |  -    | -          | + [^1]         |
| Edit an Agent                         |  -    | -          | + [^1]         |
| Delete an Agent                       |  -    | -          | + [^1]         |
| Assign an Agent                       |  +    | -          | +              |
| **Assist Bot**                        |       |            |                |
| Edit Assist Bot Settings              |  +    | +          | +              |
| Reset Session                         |  +    | +          | +              |
| **LA Agent Assist**                   |       |            |                |
| Activate Agent Assist Workspace       |  +    | +          | +              |

[^1]: provided by Cognigy.AI

### Canned Responses

| Actions                               | Agent   | Supervisor | Administrator  |
|---------------------------------------|-------- |------------|----------------|
| **Canned Responses**                  |         |            |                |
| Add a Canned Response                 |  + [^2] | + [^3]     | + [^3]         |
| Edit a Canned Response                |  + [^2] | + [^3]     | + [^3]         |
| Delete a Canned Response              |  + [^2] | + [^3]     | + [^3]         |
| Import Canned Responses               |  + [^2] | + [^3]     | + [^3]         |

[^2]: available Level: **Personal**

[^3]: available Levels: **Personal**, **Global** and **Team**

### Conversations

| Actions                               | Agent | Supervisor | Administrator  |
|---------------------------------------| ------|------------|----------------|
| Resolve Conversations                 |  +    | +          | +              |
| Clear Conversation History            |  -    | +          | +              |
| Mute Conversation                     |  +    | +          | +              |
| Send Transcript                       |  +    | +          | +              |
| Edit Contact                          |  -    | +          | +              |
| Assign an Agent                       |  +    | +          | +              |
| Assign a Team                         |  +    | +          | +              |
| Select Priority                       |  +    | +          | +              |
| Filter Conversations                  |  +    | +          | +              |
| Sort Conversations                    |  +    | +          | +              |
| Search for messages in conversations  |  +    | +          | +              |

### Inboxes

| Actions                               | Agent | Supervisor | Administrator  |
|---------------------------------------|-------|------------|----------------|
| Create an Inbox                       |  -    | -          | +              |
| Edit an Inbox                         |  -    | -          | +              |
| Delete an Inbox                       |  -    | -          | +              |
| Create Assist Bot                     |  -    | -          | +              |
| Edit Assist Bot                       |  -    | -          | +              |
| Delete Assist Bot                     |  -    | -          | +              |
| Add Agents to the Inbox               |  -    | -          | +              |
| Remove Agents from the Inbox          |  -    | -          | +              |
| Conversation Assignment Settings      |  -    | -          | +              |

### Reports

| Actions                               | Agent | Supervisor | Administrator  |
|---------------------------------------|-------|------------|----------------|
| Overview                              |  -    | +          | -              |
| Select Inbox                          |  -    | +          | +              |
| Select Agents                         |  -    | +          | +              |
| Select Labels                         |  -    | +          | +              |
| Select Team                           |  -    | +          | +              |
| Download Conversations Reports        |  -    | +          | +              |
| Download Agent Reports                |  -    | +          | +              |
| Download Label Reports                |  -    | +          | +              |
| Download Inbox Reports                |  -    | +          | +              |
| Download Team Reports                 |  -    | +          | +              |

### Teams

| Actions                               | Agent | Supervisor | Administrator  |
|---------------------------------------|-------|------------|----------------|
| Create a team                         |  -    | -          | +              |
| Edit a team                           |  -    | -          | +              |
| Delete a team                         |  -    | -          | +              |
| Allow Auto Assign for a team          |  -    | -          | +              |

## Assign a Single Role

You can assign a single role to an Agent.

To create an Agent with single role, do the following steps:

1. Create an Agent from the [Cognigy.AI Access Control](../ai/tools/user-menu/access-control.md) and assign oneof the following roles:

    - `liveAgentAdmin`
    - `liveAgentSupervisor`
    - `liveAgentAgent`

2. Add any additional role the Agent should have.
3. View the created user in Live Agent. Go to **Settings > Agents** in the Live Agent menu.

To see the role applied to the Agent, the specific Agent must log in once to have the role applied.


## Assign Multiple Roles

[![Version badge](https://img.shields.io/badge/Added in-v4.44-blue.svg)](../release-notes/4.44.md)

You can assign more than one role to an Agent.

To create an Agent with multiple roles, do the following steps:

1. Create an Agent from the [Cognigy.AI Access Control](../ai/tools/user-menu/access-control.md) and assign it one or more roles: `liveAgentAdmin`, `liveAgentSupervisor`, `liveAgentAgent`.
2. Add any additional role the Agent should have.
3. View the created user in Live Agent. Go to **Settings > Agents** in the Live Agent menu.

To see the roles applied to the Agent, the specific Agent must log in once to have the additional roles applied.

## More Information

- [Conversation Workflow](./conversation/conversation-workflow.md)
- [Account Settings](./settings/account-settings.md)