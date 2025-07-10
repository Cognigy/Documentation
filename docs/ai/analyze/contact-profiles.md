---
title: "Contact Profiles"
slug: "contact-profiles"
description: "Cognigy.AI Contact Profiles contain information about users who interact with your AI Agents. Within Contact Profiles, you can view user data that was collected during the conversation, for example, first name, last name, and navigate through the transcript history of the conversation."
hidden: false
tags:
  - contact profiles
  - user data management
  - user profiles
  - data collection
---

# Contact Profiles

[![Version badge](https://img.shields.io/badge/Updated in-v4.98-blue.svg)](../../release-notes/4.98.md)

_Contact Profiles_ contain information about users who interact with your AI Agents. In the Contact Profiles, you can view user data that was collected during conversations with AI Agents, for example, first name and email address, and navigate through the conversation transcript. With this data, AI Agents can provide personalized interactions and contact management across different channels, such as Webchat, WhatsApp, Slack, and more. You can access the Contact Profiles from a Flow through the [Profile](../build/ai-agent-memory/profile.md) object and manage them with specific Nodes.

Contact Profiles offer the following benefits:

- **Data Collection**. You can gather user data during interactions using predefined schemas and custom fields, and store this data in the Profile object.
- **Management Flexibility**. You can manage Contact Profiles flexibly to navigate conversation history and set expiration dates for data.
- **GDPR Compliance**. Cognigy.AI provides tools to comply with General Data Protection Regulation (GDPR), including exporting user data, deleting Contact Profiles, and managing data collection preferences for individual contacts.

## Limitations

- A Contact Profile is removed after 30 days if not read or modified. If you have a dedicated SaaS or on-premises installation, you can configure an expiration date for Contact Profiles in the [Management UI](../administer/access/management-ui.md).

## Profile Schema

The _Profile Schema_ organizes the Contact Profile information into fields that you can customize to meet your needs. By default, the Profile Schema has the following fields:

??? info "Default Profile Schema"

    | Field                   | Profile object Key | Description                                                                                                                                                                                                                                                  |
    |-------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | User ID                 | profileId          | A unique identifier assigned to each end user.                                                                                                                                                                                                               |
    | First Name              | firstname          | The first name of the end user.                                                                                                                                                                                                                              |
    | Last Name               | lastname           | The last name of the end user.                                                                                                                                                                                                                               |
    | Accepted Privacy Policy | privacy_policy     | Indicates whether the end user has agreed to the privacy policy terms and specifies the time when the agreement was made. This field is applicable to Webchat v3 when an end user accepts the [Privacy Notice](../../webchat/v3/features.md#privacy-notice). |
    | Accepted GDPR           | accepted_gdpr      | Indicates whether the end user has consented to the General Data Protection Regulation (GDPR) compliance terms.                                                                                                                                              |
    | Tasks Completed         | tasks              | Refers to all the [tasks](goals-and-tasks/tasks.md) that were completed by the end user during conversations with AI or human agents.                                                                                                                        |
    | Email                   | email              | The email address of the end user.                                                                                                                                                                                                                           |
    | Gender                  | gender             | The gender identity of the end user, if provided.                                                                                                                                                                                                            |
    | Age                     | age                | The age of the end user, in years.                                                                                                                                                                                                                           |
    | Birthday                | birthday           | The date of birth of the end user.                                                                                                                                                                                                                           |
    | Location                | location           | The geographical location or address information associated with the end user.                                                                                                                                                                               |
    | Memories                | memories           | The data recorded via [Add Memory Nodes](../build/node-reference/analytics/add-memory.md).                                                                                                                                                                   |

## Working with Contact Profiles

=== "GUI"

    You can view, export, and delete Contact Profiles in **Manage > Contact Profiles**, as well as copy the Contact Profile ID and access the **Contact Profile** page. Use the **Hide Inactive Profiles** option to hide or display inactive Contact Profiles. This option is activated by default.

    The **Contact Profile** page displays a list of conversation transcripts, with the stored Contact Profile data available in the right pane. To view more details about each session, select a session from the list. You are redirected to the [Transcript Explorer](../../insights/explorers/transcript.md) in Insights.

    **Flow Editor**

    In the Flow editor, you can manage Contact Profiles using the following Nodes:

    - [Activate Profile](../build/node-reference/analytics/activate-profile.md)
    - [Deactivate Profile](../build/node-reference/analytics/deactivate-profile.md)
    - [Delete Profile](../build/node-reference/analytics/delete-profile.md)
    - [Update Profile](../build/node-reference/analytics/update-profile.md)
    - [Merge Profile](../build/node-reference/analytics/merge-profile.md)

    With these Nodes, you can create personalized experiences. For example, you can deactivate a Contact Profile if a user requests to stop data collection or update a Contact Profile with new information.

=== "API"

    You can view, edit, and delete Contact Profiles using the [Cognigy.AI API](https://api-dev.cognigy.ai/openapi#tag--Profiles-v2.0).

### Customize the Profile Schema

=== "GUI"

    You can add custom fields to the Profile Schema. To add a custom field, follow these steps:

    1. In **Manage > Contact Profiles**, click **Edit Schema**.
    2. In the **Profile Schema** window, click **Add** and configure the following:
        - **Field Name** — enter a name for the custom field.
        - **Internal Name** — enter a system name for the custom field. The internal name:
            - Must consist only of uppercase and lowercase alphanumeric characters and underscores.
            - Is case-insensitive.
            - Must be unique and not duplicate internal names of other parameters.
        - **Type**:
            - **Text** — for string values. This type accepts any combination of characters, including letters, numbers, symbols, and spaces.
            - **Number** — for integers. This type accepts whole numbers within the range of `-9,007,199,254,740,991` to `9,007,199,254,740,991`. Numbers outside this range can't be accurately represented in JavaScript.
            - **YesNo** — for boolean values.
            - **Complex** — for objects. This type accepts nested structures containing other data types.
    3. Click **Save** to confirm your changes.

=== "API"

    You can add custom fields to the Profile Schema using the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#put-/v2.0/profiles/schema/-projectId-).

The custom field appears in both the Profile Schema and each Contact Profile.

To delete a custom field, select ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Delete** next to the field. When you delete a custom field, any data related to this field is removed from all Contact Profiles.

### Deactivate Data Collection for Contact Profiles

User data is stored in all Contact Profiles by default. You can deactivate data collection for specific Contact Profiles. To deactivate data collection for a Contact Profile, follow these steps:

1. In **Manage > Contact Profiles**, select a Contact Profile from the list and deactivate the **Data collection active** setting.
2. Confirm your decision by selecting:
     - **Keep** — keeps previously collected data.
     - **Delete Data** — deletes all data, including past recordings.

## More Information

- [Analytics](overview.md)
- [Profile Object](../build/ai-agent-memory/profile.md)
- [Transcript Explorer](../../insights/explorers/transcript.md)