---
title: "Roles"
slug: "roles" 
hidden: false 
---

# Roles

In Live Agents, human agents can have three distinct user roles:

- [Agent](#agents)
- [Supervisor](#supervisor)
- [Administrator](#administrator)

These roles define the permissions and responsibilities of individuals using the Live Agents system.

## User Roles 

### Agent

Agents in this role can access inboxes and conversations, assign conversations to other agents or themselves, and resolve conversations. They can access only the inboxes they are part of, participate in conversations within those inboxes, edit their user profile settings, and add personal-level canned responses. Conversation assignment is limited to inbox members.

### Supervisor

Supervisors have unique access to the supervisor dashboard to observe conversation metrics and are also able to see and interact with all inboxes.

### Administrator

Administrators have access to all Cognigy Live Agent features enabled for your account, including settings, as well as all of a normal agent's privileges, except for the supervisor dashboard. This dashboard is exclusive to the supervisor role.

## Permissions

The following tables show single role permissions of Agents, Supervisors and Administrators.

### Agents

| Actions                         | Agent | Supervisor | Administrator |
|---------------------------------|-------|------------|---------------|
| Create an Agent [^1]            |  -    | -          | +             |
| Edit an Agent [^1]              |  -    | -          | +             |
| Delete an Agent[^1]             |  -    | -          | +             |
| Assign an Agent                 |  +    | +          | +             |

[^1]: This permission is granted on the Cognigy.AI side.

### Teams

| Actions                             | Agent | Supervisor | Administrator |
|-------------------------------------|-------|------------|---------------|
| Create a team                       | -     | -          | +             |
| Assign a team within a conversation | +     | +          | +             |
| Edit a team                         | -     | -          | +             |
| Delete a team                       | -     | -          | +             |
| Allow Auto Assign for a team        | -     | -          | +             |

### Inboxes

| Actions                                           | Agent | Supervisor | Administrator |
|---------------------------------------------------|-------|------------|---------------|
| Create an Inbox                                   | -     | -          | +             |
| Edit an Inbox                                     | -     | -          | +             |
| Delete an Inbox                                   | -     | -          | +             |
| Move Conversations from one Inbox to another [^4] | +     | +          | +             |
| Create AI Copilot Bot                             | -     | -          | +             |
| Edit AI Copilot Bot                               | -     | -          | +             |
| Delete AI Copilot Bot                             | -     | -          | +             |
| Add Agents to the Inbox                           | -     | -          | +             |
| Remove Agents from the Inbox                      | -     | -          | +             |
| Configure Conversation Assignment Settings        | -     | -          | +             |

[^4]: Users with the `Agent` role can assign conversations to the inboxes they have access to.

### Conversations

| Actions                              | Agent | Supervisor | Administrator |
|--------------------------------------|-------|------------|---------------|
| Resolve Conversations                | +     | +          | +             |
| Clear Conversation History           | -     | +          | +             |
| Mute Conversation                    | +     | +          | +             |
| Send Transcript                      | +     | +          | +             |
| Edit User Contact Profile            | -     | +          | +             |
| Assign an Agent                      | +     | +          | +             |
| Assign a Team                        | +     | +          | +             |
| Select Priority                      | +     | +          | +             |
| Filter Conversations                 | +     | +          | +             |
| Sort Conversations                   | +     | +          | +             |
| Search for messages in conversations | +     | +          | +             |

### Attachments

| Actions                                        | Agent | Supervisor | Administrator |
|------------------------------------------------|-------|------------|---------------|
| Send Attachments within a conversation         | +     | +          | +             |
| Request Attachments within a conversation [^2] | +     | +          | +             |
| View Attachments                               | -     | -          | +             |
| Sort Attachments                               | -     | -          | +             |
| Filter Attachments                             | -     | -          | +             |
| Delete Attachments                             | -     | -          | +             |
| Download Attachments                           | -     | -          | +             |

[^2]: By default, human agents cannot request files from users. To enable this feature, you need to install the [File Upload](https://github.com/Cognigy/WebchatPlugins/tree/master/plugins/file-upload) plugin in the [Webchat Endpoint](../webchat/v2/configuration.md).

### Audit Logs

| Actions                                        | Agent | Supervisor | Administrator |
|------------------------------------------------|-------|------------|---------------|
| Read Audit Logs                                | -     | -          | +             |

### Automation Rules

| Actions                                        | Agent | Supervisor | Administrator |
|------------------------------------------------|-------|------------|---------------|
| Add Automation Rules                           | -     | -          | +             |
| Edit Automation Rules                          | -     | -          | +             |
| Clone Automation Rules                         | -     | -          | +             |
| Delete Automation Rules                        | -     | -          | +             |
| Activate Automation Rules                      | -     | -          | +             |
| Deactivate Automation Rules                    | -     | -          | +             |

### Labels

| Actions                                        | Agent | Supervisor | Administrator |
|------------------------------------------------|-------|------------|---------------|
| Create a Label                                 | -     | +          | +             |
| Edit a Label                                   | -     | +          | +             |
| Delete a Label                                 | -     | +          | +             |
| Add a Label to a conversation                  | +     | +          | +             |

### Skills

| Actions                                        | Agent | Supervisor | Administrator |
|------------------------------------------------|-------|------------|---------------|
| Add Skills                                     | -     | +          | +             |
| Edit Skills                                    | -     | +          | +             |
| Delete Skills                                  | -     | +          | +             |
| Add Skills to an Agent                         | -     | -          | +             |

### Canned Responses

| Actions                                     | Agent | Supervisor | Administrator |
|---------------------------------------------|-------|------------|---------------|
| Create a Canned Response [^3]               | +     | +          | +             |
| Use a Canned Response within a conversation | +     | +          | +             |
| Edit a Canned Response [^3]                 | +     | +          | +             |
| Delete a Canned Response [^3]               | +     | +          | +             |
| Import Canned Responses [^3]                | +     | +          | +             |

[^3]: Users with the Agent role can create canned responses for their own usage, edit, and delete canned resources that they created.

### Reports

| Actions                  | Agent | Supervisor | Administrator |
|--------------------------|-------|------------|---------------|
| View the Overview Report | -     | +          | -             |
| View the Inbox Report    | -     | +          | +             |
| View the Agent Report    | -     | +          | +             |
| View the Label Report    | -     | +          | +             |
| View the Team Report     | -     | +          | +             |
| Download Reports         | -     | +          | +             |

### Assistants

| Actions                       | Agent | Supervisor | Administrator |
|-------------------------------|-------|------------|---------------|
| **AI Copilot**                |       |            |               |
| Activate AI Copilot workspace | +     | +          | +             |
| **AI Copilot Bot**            |       |            |               |
| Edit AI Copilot Bot Settings  | +     | +          | +             |
| Reset Session                 | +     | +          | +             |

### Account and Profile Settings

| Actions                               | Agent | Supervisor | Administrator  |
|---------------------------------------|-------|------------|----------------|
| Configure Account Settings            |   -   |     -      | +              |
| Configure Profile Settings            |   +   |     +      | +              |

## Assign Roles

[![Version badge](https://img.shields.io/badge/Added in-v4.44-blue.svg)](../release-notes/4.44.md)

You can assign roles to human agent.

To create an Agent with certain access rights, do the following steps:

1. Create an Agent from the [Cognigy.AI Access Control](../ai/administer/access/admin-center/access-control.md).
2. Assign one of the following roles to the Agent:
    - `liveAgentAgent`
    - `liveAgentSupervisor`
    - `liveAgentAdmin` <br>If you have an Admin role in Cognigy.AI, you do not need to add the Administrator role for your user because the Cognigy.AI role already includes the right to administer Live Agent.
3. _(Optional)_ Add any additional roles the Agent should have. For example, if you already have a `liveAgentAgent` role, you can add a `liveAgentSupervisor` role to allow access to the Overview report.
4. View the created user in Live Agent. Go to **Settings > Agents** in the Live Agent menu.

To see the roles applied to the Agent, the specific Agent must log in once to have the roles applied.

## Troubleshooting

### Assigned Roles are not Applied

If a human agent already has a specific role in Live Agent, assigned roles may not be applied.
For example, if you want to assign a user with `Administrator` rights the role of `Supervisor`,
the new role will only take effect once the user logs out of Cognigy.AI and Live Agent.
After logging out and logging back in, the new roles should be applied successfully.

## More Information

- [Conversation Workflow](./conversation/overview.md)
- [Account Settings](./settings/account-settings.md)