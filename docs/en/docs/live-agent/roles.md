---
 title: "Roles"
 slug: "roles" 
 hidden: false 
---

# Roles

Live Agent has three different roles for the users. Administrators, Agents, and Supervisors.

## Single roles

See table below showing the single role permissions of Administrators, Agents, and Supervisors.


| Access Object - Action                | Agent | Supervisor | Administrator  |
|---------------------------------------|-------|------------|----------------|
| **Teams**                             |       |            |                |
| Create a team                         |  -    | -          | +              |
| Edit a team                           |  -    | -          | +              |
| Delete a team                         |  -    | -          | +              |
| Allow Auto Assign for a team          |  -    | -          | +              |
|                                       |       |            |                |
| **Audit Logs**                        |       |            |                |
| Read logs                             |  -    | -          | +              |
|                                       |       |            |                |
| **Agents**                            |       |            |                |
| Create an Agent                       |  -    | -          | ?              |
| Edit an Agent                         |  -    | -          | ?              |
| Delete an Agent                       |  -    | -          | ?              |
| Assign an Agent                       |  +    | -          | +              |
|                                       |       |            |                |
| **Inboxes**                           |       |            |                |
| Add/Create an Inbox                   |  -    | -          | +              |
| Edit/Configure an Inbox               |  -    | -          | +              |
| Delete an Inbox                       |  -    | -          | +              |
| Add/Edit Assist Bot                   |  -    | -          | +              |
| Add Agents                            |  -    | -          | +              |
|                                       |       |            |                |
| **Labels**                            |       |            |                |
| Add a Label                           |  -    | +          | +              |
| Edit a Label                          |  -    | +          | +              |
| Delete a Label                        |  -    | +          | +              |
|                                       |       |            |                |
| **Automation Rules**                  |  -    | -          | +              |
| Add Automation Rules                  |  -    | -          | +              |
| Edit Automation Rules                 |  -    | -          | +              |
| Clone Automation Rules                |  -    | -          | +              |
| Delete Automation Rules               |  -    | -          | +              |
| Activate/Deactivate Automation Rules  |  -    | -          | +              |
|                                       |  -    | -          | +              |
| **Canned Responses**                  |       |            |                |
| Add a Canned Response                 |  + (x)| +(xx)      | + (xx)         |
| Edit a Canned Response                |  + (x)| +(xx)      | + (xx)         |
| Delete a Canned Response              |  + (x)| +(xx)      | + (xx)         |
| Import Canned Responses               |  + (x)| +(xx)      | + (xx)         |
|                                       |       |            |                |
| **Attachments**                       |  -    | -          | +              |
| Sort Attachments                      |  -    | -          | +              |
| Filter Attachments                    |  -    | -          | +              |
| Add Filter                            |  -    | -          | +              |
| Delete Attachments                    |  -    | -          | -              |
| (Arrow down icon) Attachments         |  -    | -          | -              |
|                                       |       |            |                |
| **Account Settings**                  |  -    | -          | +              |
| Edit Account Settings                 |  -    | -          | +              |
| Enable Agent Assist Workspace         |  -    | -          | +              |
| Enable/Select Email Notifications     |  -    | -          | +              |
| Enable/Select Push Notifications      |  -    | -          | +              |
| Copy Account ID                       |  -    | -          | +              |
| Edit General Settings                 |  -    | -          | +              |
| Assign conversation to a busy Agent   |  -    | -          | +              |
|                                       |       |            |                |
| **Conversations**                     |       |            |                |
| Resolve Conversations                 |  +    | +          | +              |
| Clear Conversation History            |  -    | +          | +              |
| Mute Conversation                     |  +    | +          | +              |
| Send Transcript                       |  +    | +          | +              |
| Edit Contact                          |  -    | +          | +              |
| Assign an Agent                       |  +    | +          | +              |
| Assign a Team                         |  +    | +          | +              |
| Select Priority                       |  +    | +          | +              |
| Add Lables to group conversations     |  -    | +          | +              |
| Filter Conversations                  |  +    | +          | +              |
| Sort Conversations                    |  +    | +          | +              |
| Search for messages in conversations  |  +    | +          | +              |
|                                       |       |            |                |
| **Reports**                           |       |            |                |
| Overview                              |  -    | +          | -              |
| Select Inbox                          |  -    | +          | -              |
| Download Conversations Reports        |  -    | +          | +              |
| Download Agent Reports                |  -    | +          | +              |
| Download Label Reports                |  -    | +          | +              |
| Download Inbox Reports                |  -    | +          | +              |
| Download Team Reports                 |  -    | +          | +              |
|                                       |       |            |                |
| **Skills**                            |       |            |                |
| Add Skills                            |  -    | +          | +              |
| Edit Skills                           |  -    | +          | +              |
| Delete Skills                         |  -    | +          | +              |
|                                       |       |            |                |
| **Profile Settings**                  |       |            |                |
| Select Profile Image                  |  +    | +          | +              |
| Edit Display Name                     |  +    | +          | +              |
| Enable/Disable Audio Notifications    |  +    | +          | +              |
| Enable/Disable Email Notifications    |  +    | +          | +              |
| Enable/Disable Push Notifications     |  +    | +          | +              |
| Enable/Disable Agent Assist Workspace |  +    | +          | +              |
| Select a Hotkey to send messages      |  +    | +          | +              |
| Copy Access Token                     |  +    | +          | +              |
| Display of Unread Notifications       |  +    | +          | +              |
|                                       |       |            |                |
| **Set Status**                        |       |            |                |
| Status Online                         |  +    | +          | +              |
| Status Busy                           |  +    | +          | +              |
| Status Away                           |  +    | +          | +              |
| Status Offline                        |  +    | +          | +              |
|                                       |       |            |                |
| **Assist Bot**                        |       |            |                |
| Edit Assist Bot Settings              |  +    | +          | +              |
| Reset Session                         |  +    | +          | +              |
|                                       |       |            |                |
| **LA Agent Assist**                   |       |            |                |
|                                       |       |            |                |
| **Roles**                             |       |            |                |
|                                       |       |            |                |


(x)  - only for Level **Personal**

(xx) - for Levels **Personal, Global and Team**






### Administrator

- Can access to Reports, except for the [Supervisor Overview](reports.md#overview---supervisor-dashboard) dashboard.

### Agent

### Supervisor

- Has access only to the [Supervisor Overview](reports.md#overview---supervisor-dashboard) dashboard in Reports.









## Multiple roles

[![Version badge](https://img.shields.io/badge/Added in-v4.44-blue.svg)](../release-notes/4.44.md)

You can assign more than one role to an Agent.

To create an Agent with multiple roles, do the following steps:

1. Create an Agent from the [Cognigy.AI Access Control](../ai/tools/user-menu/access-control.md) and assign it one or more roles: `liveAgentAdmin`, `liveAgentSupervisor`, `liveAgentAgent`.
2. Add any additional role the Agent should have.
3. View the created user in Live Agent. Go to **Settings > Agents** in the Live Agent menu.

To see the roles applied to the Agent, the specific Agent must log in once to have the additional roles applied.