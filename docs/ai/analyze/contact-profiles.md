---
title: "Contact Profiles"
slug: "contact-profiles"
hidden: false
---

# Contact Profiles

_Contact Profiles_ contain information about end users who interact with your AI Agents. 
Within contact profiles, you can view user data that was collected during the conversation, for example, first name, last name, and navigate through the transcript history of the conversation. 
These profiles enable personalized interactions and contact management across different channels, such as Webchat, WhatsApp, Slack, and more.

## GDPR Compliance

At Cognigy, we help our clients follow Europe's General Data Protection Regulation (GDPR) by providing the following capabilities:

- Export of contact profiles via UI and API.
- Deletion of contact profiles.
- Turning off data collection for selected contact profiles and Endpoints.

## View a Contact Profile

1. Open the Cognigy.AI interface.
2. In the left-side menu, select a Project.
3. In the left-side menu of the Project page, select **Manage > Contact Profiles**.

Here you can search for contact profiles in the top right search field and sort the table by clicking on the column headers. 
**Hide Inactive Profiles** is activated by default. 
This way, our customers will only browse through active Profiles.

## Profile Schema

The Profile Schema contains the following predefined fields:

| Field                   | Description                                                                                                                                                                                                                                                    |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Contact IDs             | Unique identifiers assigned to each end user.                                                                                                                                                                                                                  |
| First Name              | The given name of the contact.                                                                                                                                                                                                                                 |
| Last Name               | The surname or family name of the contact.                                                                                                                                                                                                                     |
| Accepted Privacy Policy | Indicates whether the contact has agreed to the privacy policy terms and specifies the time when the agreement was made. This property is applicable to Webchat v3 when an end user accepts the [Privacy Notice](../../webchat/v3/features.md#privacy-notice). |
| Accepted GDPR           | Indicates whether the contact has consented to the General Data Protection Regulation (GDPR) compliance terms.                                                                                                                                                 |
| Goals Completed         | Refers to tasks completed within a Flow.                                                                                                                                                                                                                       |
| Email                   | The email address associated with the contact.                                                                                                                                                                                                                 |
| Gender                  | The gender identity of the contact, if provided.                                                                                                                                                                                                               |
| Age                     | The age of the contact, represented in years.                                                                                                                                                                                                                  |
| Birthday                | The date of birth of the contact.                                                                                                                                                                                                                              |
| Location                | The geographical location or address information associated with the contact.                                                                                                                                                                                  |

## Custom Fields

### Add a Custom Field

It is also possible to add customized schema properties to handle organization-specific data.

1. On the **Contact Profiles** page, click **Edit Schema** in the upper-left corner.
2. In the **Profile Schema** window, fill in the following fields:
    - **Field Name** - enter a name for the field.
    - **Internal Name** -  enter a unique system name.
    - **Type** - select a field type:
        - Text - for string values.
        - Number - for an integer. A schema field set to type *Number* should not be filled with a value higher than 2<sup>53</sup> - 1 or 9,007,199,254,740,991 (~9 quadrillion). Higher integers can't be correctly represented in JavaScript.
        - YesNo - for boolean (`true` or `false`) values.
        - Complex - for advanced data structures.
3. Click **Save** to confirm your changes.

A new filed apper in the individual contact profile.

To add an extra field, click **Add** in the upper-right corner of the Profile Schema field.

### Delete a Custom Field

1. In the upper-left corner of the **Contact Profiles** page, click **Edit Schema**.
2. In the **Profile Schema** window, locate the field that you want to delete.
3. Next to the **Edit Field** title, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Delete**.
4. Confirm the field deletion by entering the internal field name and clicking **Confirm**. Any data related to this field will be removed from all Contact Profiles.

## View a Contact Profile

1. Open the Cognigy.AI interface.
2. In the left-side menu, select a Project.
3. In the left-side menu of the Project page, go to **Manage > Contact Profiles**.
4. Select a row from the list.
5. The contact profile for a specific user will open.

Within the individual contact profile, a list of conversation transcripts will be displayed, with the stored contact profile data available in the right-hand pane. 
To view more details about each session, select a session from the list. You will be routed to the Transcript Explorer in Insights.

### Turn off Collecting Data for a Contact Profile

By default, all user data is stored in the contact profile. You can disable this option for individual profiles.

To disable data collection for a profile, follow these steps:

1. Open the Cognigy.AI interface.
2. From the left-side menu, select a Project.
3. In the left-side menu of the Project page, navigate to **Manage > Contact Profiles**.
4. Select a row from the list.
5. The contact profile for a specific user will open.
6. In the upper-left corner, deactivate the **Data collection active** setting.
7. Confirm your decision:
   - Deactivating this setting will prevent future data collection for this profile.
   - Choose whether to keep or delete the current profile data and conversation history:
      - **Keep** - previously collected data will remain saved, but no new data will be collected.
      - **Delete Data** - all data, including past recordings, will be permanently deleted.

### Export a Contact Profile as JSON

You can export individual contact profiles as a JSON file.

1. Open the Cognigy.AI interface.
2. From the left-side menu, select a Project.
3. In the left-side menu of the Project page, navigate to **Manage > Contact Profiles**.
4. Select a row from the list to open the contact profile for a specific user.
5. In the upper-right corner, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Export Contact**.

The contact will be exported as a JSON file.

### Delete a Contact Profile

1. Open the Cognigy.AI interface.
2. From the left-side menu, select a Project.
3. In the left-side menu of the Project page, navigate to **Manage > Contact Profiles**.
4. Select a row from the list to open the contact profile for a specific user.
5. In the upper-right corner, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Delete Contact**.

## Contact Profile Nodes

You can manage contact profiles using the following Nodes:

* Activate Profile
* Deactivate Profile
* Delete Profile
* Merge Profile

Personalize the user experience by utilizing contact profile data such as name, location, and date of birth.
Store and retrieve this information from the [Profile](../test/interaction-panel/profile.md) object to create more personalized conversations based on each user's unique details.

## Expiration Date for Contact Profiles

If you have a dedicated SaaS or on-premises installation, you can configure an expiration time for contact profiles, ensuring they are automatically deleted from the system. 
To configure the expiration date, go to the Management UI.
