---
title: "Contact Profiles"
slug: "contact-profiles"
description: "Cognigy.AI Contact Profiles contain information about users who interact with your AI Agents. Within Contact Profiles, you can view user data that was collected during the conversation, for example, first name, last name, and navigate through the transcript history of the conversation."
hidden: false
---

# Contact Profiles

[![Version badge](https://img.shields.io/badge/Updated in-v4.98-blue.svg)](../../release-notes/4.95.md)

_Contact Profiles_ contain information about users who interact with your AI Agents. 
Within Contact Profiles, you can view user data that was collected during the conversation, for example, first name, last name, and navigate through the transcript history of the conversation. 
These Profiles enable personalized interactions and contact management across different channels, such as Webchat, WhatsApp, Slack, and more.

Contact Profiles offer the following benefits:

- **Data Collection**. You can gather user data during interactions using predefined schemas and custom fields, and store this data in the Profile object.
- **Management Flexibility**. Contact Profiles can be managed flexibly, enabling you to navigate conversation histories and set expiration dates for data.
- **GDPR Compliance**. Cognigy.AI provides tools to comply with GDPR (General Data Protection Regulation), including exporting user data, deleting Profiles, and managing data collection preferences for individual contacts.

## Limitations

- A Contact Profile will be removed after 30 days if not read or modified. If you have a dedicated SaaS or on-premises installation, you can configure an expiration date for Contact Profiles. To set the expiration date, go to the [management-ui](../administer/access/management-ui.md).

## View Contact Profiles

To view Contact Profiles, follow these steps:

1. In the left-side menu of the **Main** page, select a Project.
2. In the left-side menu of the Project page, select **Manage > Contact Profiles**.

On the **Contact Profiles** page, you can search for Contact Profiles using the search field in the upper-right corner and sort the results by clicking on the column headers. 
The **Hide Inactive Profiles** setting is activated by default, allowing you to browse only active Profiles.

## View a Contact Profile

To view a Contact Profile, follow these steps:

1. In the left-side menu of the **Main** page, select a Project.
2. In the left-side menu of the Project page, go to **Manage > Contact Profiles**.
3. Select a Contact Profile from the list. The Contact Profile shows user details.

Within the individual Contact Profile, a list of conversation transcripts will be displayed, with the stored Contact Profile data available in the right pane.
To view more details about each session, select a session from the list. You will be routed to the [Transcript Explorer](../../insights/explorers/transcript.md) in Insights.

## Profile Schema

The Profile Schema organizes information in Contact Profiles. It includes predefined and custom fields. 
The Profile Schema has a standard format that is used in the [Profile](../test/interaction-panel/profile.md) object, which makes it easier to store and retrieve data for creating more personalized conversations.

### Predefined Fields

The Profile Schema has the following predefined fields:

| Field                   | Profile Key    | Description                                                                                                                                                                                                                                                 |
|-------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| User ID                 | profileId      | A unique identifier assigned to each end user.                                                                                                                                                                                                              |
| First Name              | firstname      | The given name of the contact.                                                                                                                                                                                                                              |
| Last Name               | lastname       | The surname or family name of the contact.                                                                                                                                                                                                                  |
| Accepted Privacy Policy | privacy_policy | Indicates whether the contact has agreed to the privacy policy terms and specifies the time when the agreement was made. This field is applicable to Webchat v3 when an end user accepts the [Privacy Notice](../../webchat/v3/features.md#privacy-notice). |
| Accepted GDPR           | accepted_gdpr  | Indicates whether the contact has consented to the General Data Protection Regulation (GDPR) compliance terms.                                                                                                                                              |
| Tasks Completed         | tasks          | Refers to all the [tasks](goals-and-tasks/tasks.md) that were completed by the user during conversations with AI Agents or human agents.                                                                                                                    |
| Email                   | email          | The email address associated with the contact.                                                                                                                                                                                                              |
| Gender                  | gender         | The gender identity of the contact, if provided.                                                                                                                                                                                                            |
| Age                     | age            | The age of the contact, represented in years.                                                                                                                                                                                                               |
| Birthday                | birthday       | The date of birth of the contact.                                                                                                                                                                                                                           |
| Location                | location       | The geographical location or address information associated with the contact.                                                                                                                                                                               |
| Memories                | memories       | The data recorded via [Add Memory Nodes](../build/node-reference/analytics/add-memory.md).                                                                                                                                                                  |

### Custom Fields

If you want to extend the Profile Schema, you can create custom fields to make Profiles more personalized.

#### Create a Custom Field

To create a custom field, follow these steps:

1. In the left-side menu of the Project, go to **Manage > Contact Profiles**. 
2. On the **Contact Profiles** page, click **Edit Schema** in the upper-left corner. 
3. In the **Profile Schema** window, fill in the following fields:
    - **Field Name** — enter a name of the field.
    - **Internal Name** — enter a system name of the field that can only consist of alphanumeric characters (uppercase and lowercase letters `A-Z`, numbers `0-9`) and underscores (`_`). It is case-insensitive, meaning `NAME123` is considered the same as `name123`. The internal name must be unique and should not duplicate internal names of existing parameters.
    - **Type** — select a field type:
        - **Text** — for string values. This type allows any combination of characters, including letters, numbers, symbols, and spaces.
        - **Number** — for integers. This type accepts whole numbers (no decimals) within the range of -9,007,199,254,740,991 to 9,007,199,254,740,991. Numbers exceeding this limit cannot be accurately represented in JavaScript.
        - **YesNo** — for boolean values. This type is used for `true` or `false` options.
        - **Complex** — for objects. This type allows you to define nested structures containing other data types.
4. Click **Save** to confirm your changes.

A new field appears in both the Profile Schema and the individual Contact Profile.

To add an extra field, click **Add** in the upper-right corner of the **Profile Schema** window.

#### Delete a Custom Field

To delete a custom field, follow these steps:

1. In the left-side menu of the Project, go to **Manage > Contact Profiles**. 
2. In the upper-left corner of the **Contact Profiles** page, click **Edit Schema**. 
3. In the **Profile Schema** window, locate the field that you want to delete. 
4. Next to the **Edit Field** title, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Delete**. 
5. Confirm the field deletion by entering the internal field name and clicking **Confirm**. 

Once a custom field is deleted, any data related to this field will be removed from all Contact Profiles.

## Manage a Contact Profile via Nodes

You can manage Contact Profiles using the following Nodes:

- [Activate Profile](../build/node-reference/analytics/activate-profile.md)
- [Deactivate Profile](../build/node-reference/analytics/deactivate-profile.md)
- [Delete Profile](../build/node-reference/analytics/delete-profile.md)
- [Update Profile](../build/node-reference/analytics/update-profile.md)
- [Merge Profile](../build/node-reference/analytics/merge-profile.md)

By using these Nodes, you can create personalized experiences for each user.
For example, deactivate a Profile if a user requests to stop data collection or update a Profile with new information.

## Turn off Collecting Data for a Contact Profile

User data is stored in all Contact Profiles by default. You can turn off this for specific Profiles.

To turn off data collection for a Contact Profile, follow these steps:

1. In the left-side menu of the Project, go to **Manage > Contact Profiles**.
2. Select a Contact Profile from the list. The Contact Profile shows user details.
3. In the upper-left corner, deactivate the **Data collection active** setting.
4. Confirm your decision. Choose whether to keep or delete the current Profile data and conversation history:
     - **Keep** — previously collected data will remain saved, but no new data will be collected.
     - **Delete Data** — all data, including past recordings, will be permanently deleted.

The changes will be applied according to the selected action.

## Export a Contact Profile as JSON

You can export individual Contact Profiles as a JSON file.

To export a Contact Profile, follow these steps:

1. In the left-side menu of the Project, go to **Manage > Contact Profiles**.
2. Select a Contact Profile from the list.
3. In the upper-right corner, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Export Contact**.

The Contact Profile will be exported as a JSON file.

## Delete a Contact Profile

To delete a Contact Profile, follow these steps:

1. In the left-side menu of the Project, go to **Manage > Contact Profiles**.
2. Select a Contact Profile from the list.
3. In the upper-right corner, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Delete Contact**.

The Contact Profile will be deleted and its data cannot be recovered.

## More Information

- [Analytics](overview.md)
- [Profile Object](../test/interaction-panel/profile.md)
- [Transcript Explorer](../../insights/explorers/transcript.md)