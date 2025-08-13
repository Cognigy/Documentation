---
title: "Members"
slug: "members"
description: "The Members interface is the section within a Cognigy.AI Project where project admins can assign and manage Project-specific roles."
hidden: false
tags:
  - members
  - project roles
  - locale restrictions
  - access control
---

# Members

[![Version badge](https://img.shields.io/badge/Updated in-v4.75.0-blue.svg)](../../../release-notes/4.75.md)

The _Members_ interface in a Cognigy.AI Project allows Project admins to assign and manage Project-specific roles. This interface allows fine-grained control over who can create, edit, view, or update different parts of a Project, complementing the [global roles](admin-center/access-control.md) set in the Access Control.

## Project Roles

Project roles let you control what users can do within a specific Project. To manage permissions across the whole organization, use [global roles](admin-center/access-control.md).

!!! note
    Project roles assigned to users determine what actions a user can perform in the UI and through API endpoints, ensuring consistent access control across both interfaces.

Each permission works as follows:

- **Create** – create a new resource.
- **Read** – view or retrieve the resource and its details.
- **Update** – view and change an existing resource's data or settings.
- **Delete** – permanently remove the resource.

Having full permissions means a user can create, read, update, and delete the resource.

| Role                         | Description                                                                                                                                  |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `agentAssistConfigAdmin`     | Full permissions for the configuration of Agent Copilot workspace.                                                                                               |
| `agentAssistConfigViewer`    | Access to read the configuration of the Agent Copilot workspace.                                                                                                     |
| `analytics`                  | Full permissions for Analytics.                                                                                                              |
| `basic`                      | Access to read all Project resources except User Details, Contact Profiles, Node Comments, Logs, and Member Details.                         |
| `connection_admin`           | Full permissions for Connections.                                                                                                            |
| `contact_profile_admin`      | Full permissions for Contact Profiles and Conversation History.                                                                              |
| `contact_profile_editor`     | Access to update Contact Profiles.                                                                                                           |
| `contact_profile_viewer`     | Access to read Contact Profiles.                                                                                                             |
| `conversationHistory`        | Full permissions for Conversation History.                                                                                                   |
| `data_privacy_admin`         | Full permissions for data privacy settings (Collect Analytics, Store Contact Profiles, Collect Conversations, Mask Analytics, Mask Logging). |
| `data_privacy_editor`        | Access to update data privacy settings.                                                                                                      |
| `data_privacy_viewer`        | Access to read data privacy settings.                                                                                                        |
| `developer`                  | Full permissions for Extensions, Node Comments, Node Descriptions, Locales, Logs, and the Live Follow feature.                               |
| `endpoint_admin`             | Full permissions for Endpoints.                                                                                                              |
| `extension_admin`            | Full permissions for Extensions.                                                                                                             |
| `extension_editor`           | Access to update Extensions.                                                                                                                 |
| `extension_trust_admin`      | Access to mark Extensions as trusted or untrusted.                                                                                           |
| `flowEditor`                 | Full permissions for the Flow editor and access to update Intents.                                                                           |
| `flowNodeComments`           | Full permissions for Node Comments.                                                                                                          |
| `flowNodeDescription`        | Full permissions for Node Descriptions.                                                                                                      |
| `followUser`                 | Full permissions for the Live Follow feature.                                                                                                |
| `function_admin`             | Full permissions for Functions.                                                                                                              |
| `function_editor`            | Access to update Functions.                                                                                                                  |
| `handoverProviderAdmin`      | Full permissions for handover providers.                                                                                                     |
| `intents`                    | Full permissions for Intents.                                                                                                                |
| `knowledgeAdmin`             | Full permissions for Knowledge AI resources.                                                                                                 |
| `large_language_model_admin` | Full permissions for Large Language Models.                                                                                                  |
| `lexicon_admin`              | Full permissions for Lexicons.                                                                                                               |
| `lexicon_editor`             | Access to update Lexicons.                                                                                                                   |
| `localesAdmin`               | Full permissions for Locales.                                                                                                                |
| `logs`                       | Full permissions for Logs.                                                                                                                   |
| `memberManager`              | Full permissions for Member Details and read access to the Access Control page in the Admin Center.                                          |
| `nlu_connector_admin`        | Full permissions for NLU connectors.                                                                                                         |
| `packages_admin`             | Full permissions for Packages.                                                                                                               |
| `playbook_admin`             | Full permissions for Playbooks.                                                                                                              |
| `playbook_editor`            | Access to update Playbooks.                                                                                                                  |
| `projectAdmin`               | Full permissions for Project resources and read access to the Access Control page in the Admin Center.                                       |
| `snapshot_admin`             | Full permissions for Snapshots. Permission to restore a Snapshot remains with the `projectAdmin` role.                                       |
| `tokenAdmin`                 | Full permissions for Tokens.                                                                                                                 |
| `tokenEditor`                | Access to update Tokens.                                                                                                                     |

## Add a Member

1. In the left-side menu of the Project, go to **Manage > Members**, then click **+ Add new Member** in the upper-left corner.
2. In the **New Member** pane, select the user you want to add to the Project. Click **Add**.
3. In the **Project Roles** section, click **+** to select one or more roles to assign. You can assign multiple roles to a user.
4. *(Optional)* In the **Local restrictions** section, assign a user to specific locales by selecting the **User is restricted to the following locales** option and the locales.

## More Information

- [Access Control](admin-center/access-control.md)

