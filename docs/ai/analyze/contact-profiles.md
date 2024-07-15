---
title: "Contact Profiles"
slug: "contact-profiles"
description: "Cognigy.AI Contact Profiles contain information about end users who interact with your AI Agents. Within Contact Profiles, you can view user data that was collected during the conversation, for example, first name, last name, and navigate through the transcript history of the conversation."
hidden: false
---

# Contact Profiles

_Contact Profiles_ contain information about end users who interact with your AI Agents. 
Within Contact Profiles, you can view user data that was collected during the conversation, for example, first name, last name, and navigate through the transcript history of the conversation. 
These Profiles enable personalized interactions and contact management across different channels, such as Webchat, WhatsApp, Slack, and more.

Contact Profiles offer the following benefits:

- **Data Collection**. Contact Profiles gather user data during interactions, using predefined schemas and allowing for custom fields.
- **Management Flexibility**. Contact Profiles can be managed flexibly, enabling you to navigate conversation histories and set expiration dates for data.
- **GDPR Compliance**. Cognigy provides tools to comply with GDPR (General Data Protection Regulation), including exporting user data, deleting Profiles, and managing data collection preferences for individual contacts.

## View Contact Profiles

1. Open the Cognigy.AI interface.
2. In the left-side menu, select a Project.
3. In the left-side menu of the Project page, select **Manage > Contact Profiles**.

On the **Contact Profiles** page, you can search for Contact Profiles using the search field in the upper-right corner and sort the results by clicking on the column headers. 
The **Hide Inactive Profiles** setting is activated by default, allowing you to browse only active Profiles.

## View a Contact Profile

1. Open the Cognigy.AI interface.
2. In the left-side menu, select a Project.
3. In the left-side menu of the Project page, go to **Manage > Contact Profiles**.
4. Select a Contact Profile from the list.
5. The Contact Profile for a specific user will open.

Within the individual Contact Profile, a list of conversation transcripts will be displayed, with the stored Contact Profile data available in the right pane.
To view more details about each session, select a session from the list. You will be routed to the [Transcript Explorer](../../insights/explorers/transcript.md) in Insights.

## Profile Schema

### Predefined Fields in the Profile Schema

The Profile Schema contains the following predefined fields:

| Field                   | Description                                                                                                                                                                                                                                                 |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Contact IDs             | Unique identifiers assigned to each end user.                                                                                                                                                                                                               |
| First Name              | The given name of the contact.                                                                                                                                                                                                                              |
| Last Name               | The surname or family name of the contact.                                                                                                                                                                                                                  |
| Accepted Privacy Policy | Indicates whether the contact has agreed to the privacy policy terms and specifies the time when the agreement was made. This field is applicable to Webchat v3 when an end user accepts the [Privacy Notice](../../webchat/v3/features.md#privacy-notice). |
| Accepted GDPR           | Indicates whether the contact has consented to the General Data Protection Regulation (GDPR) compliance terms.                                                                                                                                              |
| Goals Completed         | Refers to tasks completed within a Flow.                                                                                                                                                                                                                    |
| Email                   | The email address associated with the contact.                                                                                                                                                                                                              |
| Gender                  | The gender identity of the contact, if provided.                                                                                                                                                                                                            |
| Age                     | The age of the contact, represented in years.                                                                                                                                                                                                               |
| Birthday                | The date of birth of the contact.                                                                                                                                                                                                                           |
| Location                | The geographical location or address information associated with the contact.                                                                                                                                                                               |

### Custom Fields in the Profile Schema

#### Create a Custom Field

It is also possible to add custom fields to handle organization-specific data.

1. On the **Contact Profiles** page, click **Edit Schema** in the upper-left corner.
2. In the **Profile Schema** window, fill in the following fields:
    - **Field Name** — enter a name of the field.
    - **Internal Name** — enter a system name of the field that can only consist of alphanumeric characters (uppercase and lowercase letters `A-Z`, numbers `0-9`) and underscores (`_`). It is case-insensitive, meaning "NAME123" is considered the same as "name123". The internal name must be unique and should not duplicate internal names of existing parameters.
    - **Type** — select a field type:
        - **Text** — for string values. This type allows any combination of characters, including letters, numbers, symbols, and spaces.
        - **Number** — for integers. This type accepts whole numbers (no decimals) within the range of -9,007,199,254,740,991 to 9,007,199,254,740,991. Numbers exceeding this limit cannot be accurately represented in JavaScript.
        - **YesNo** — for boolean values. This type is used for `true` or `false` options.
        - **Complex** — for objects. This type allows you to define nested structures containing other data types.
3. Click **Save** to confirm your changes.

A new field apper in the individual Contact Profile.

To add an extra field, click **Add** in the upper-right corner of the Profile Schema field.

#### Delete a Custom Field

1. In the upper-left corner of the **Contact Profiles** page, click **Edit Schema**.
2. In the **Profile Schema** window, locate the field that you want to delete.
3. Next to the **Edit Field** title, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Delete**.
4. Confirm the field deletion by entering the internal field name and clicking **Confirm**. Any data related to this field will be removed from all Contact Profiles.

## Manage a Contact Profile

### Manage via Contact Profile Nodes

You can manage Contact Profiles using the following Nodes:

- [Activate Profile](../build/node-reference/analytics/activate-profile.md)
- [Deactivate Profile](../build/node-reference/analytics/deactivate-profile.md)
- [Delete Profile](../build/node-reference/analytics/delete-profile.md)
- [Update Profile](../build/node-reference/analytics/update-profile.md)
- [Merge Profile](../build/node-reference/analytics/merge-profile.md)

Store and retrieve this information from the [Profile](../test/interaction-panel/profile.md) object to create more personalized conversations based on each user's unique details.

### Turn off Collecting Data for a Contact Profile

By default, all user data is stored in the Contact Profile. You can disable this option for individual Profiles.

To disable data collection for a Profile, follow these steps:

1. Open the Cognigy.AI interface.
2. From the left-side menu, select a Project.
3. In the left-side menu of the Project page, navigate to **Manage > Contact Profiles**.
4. Select a row from the list.
5. The Contact Profile for a specific user will open.
6. In the upper-left corner, deactivate the **Data collection active** setting.
7. Confirm your decision:
    - Deactivating this setting will prevent future data collection for this Profile.
    - Choose whether to keep or delete the current Profile data and conversation history:
        - **Keep** — previously collected data will remain saved, but no new data will be collected.
        - **Delete Data** — all data, including past recordings, will be permanently deleted.

The changes will be applied according to the selected action.

### Export a Contact Profile as JSON

You can export individual Contact Profiles as a JSON file.

1. Open the Cognigy.AI interface.
2. From the left-side menu, select a Project.
3. In the left-side menu of the Project page, navigate to **Manage > Contact Profiles**.
4. Select a row from the list to open the Contact Profile for a specific user.
5. In the upper-right corner, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Export Contact**.

The contact will be exported as a JSON file.

### Delete a Contact Profile

1. Open the Cognigy.AI interface.
2. From the left-side menu, select a Project.
3. In the left-side menu of the Project page, navigate to **Manage > Contact Profiles**.
4. Select a row from the list to open the Contact Profile for a specific user.
5. In the upper-right corner, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Delete Contact**.

## Expiration Date for Contact Profiles

If you have a dedicated SaaS or on-premises installation, you can configure an expiration time for Contact Profiles, ensuring they are automatically deleted from the system. 
To configure the expiration date, go to the Management UI.

## More Information

- [Analytics](overview.md)
- [Profile Object](../test/interaction-panel/profile.md)
- [Transcript Explorer](../../insights/explorers/transcript.md)