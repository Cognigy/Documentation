---
 title: "Contact Profiles" 
 slug: "contact-profiles" 
 hidden: false 
---
# Contact Profiles

Contact Profiles store information about the end-users of your AI and can be accessed by Flows and Endpoints. Contact Profiles can be used to store information persistently and personalize discussions with users.

You can manage contacts who interact with your AI's in *Contact profiles* where the contact data and transcript history is available to view.

## Manage Contact Profiles
<div class="divider"></div>

The **Contact Profiles** menu is available under the **Manage** tab of the agent toolbar.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/4f02781-contact-profiles.png" width="100%" />
   <figcaption>The Contact Profile management interface</figcaption>
</figure>

[![Version badge](https://img.shields.io/badge/Added in-v4.2.0-blue.svg)]({{config.site_url}})

Here you can search for contact profiles in the top right search box and sort the table by clicking on the column headers. **With Cognigy.AI 4.2.0, we have introduced a new checkbox "Hide inactive Profiles" which will be activated by default.** This way, our customers will only browse through active Profiles.

### Profile Schema

The Profile Schema contains the following default schema values:

| Property Name|
| ----------- | 
| Contact IDs      | 
| First Name    |
| Last name    | 
| Accepted GDPR   | 
| Goals completed  | 
| Email    | 
| Gender    | 
| Age    | 
| Birthday    | 
| Location    | 

It is also possible to add customized schema properties to handle organization specific data.

  * Click the *Edit Schema* button in the top left of the **Contact Profiles** menu to open the editor.
  * The Profile Schema pane will appear displaying each custom profile data field.
  * Click the *add* button in the top right corner to add a new field.
  * Click on an existing field to edit a schema field


!!! note "Schema Fields"
    A schema field has a field name used in the user interface, a unique internal identifier *Internal Name* and a field type.

!!! warning "Field type limitations"
    A schema field set to type *Number* should not be filled  with a value higher than 2<sup>53</sup> - 1 or 9,007,199,254,740,991 (~9 quadrillion). Higher integers can't be correctly represented in JavaScript.

### Inspect Contact Profiles

Click on a contact row in the table of Contact Profiles to navigate to an individual contact profile.

Within the individual contact profile, a list of conversation transcripts will be displayed with the stored contact profile data available in the the right hand pane. 

To disable data collection for the profile, click the ***Data collection active*** switch.
To delete the contact profile, open the secondary menu from the top right corner and select ***Delete Contact***.

## Use Contact Profiles
<div class="divider"></div>

Contact profiles allow you to personalize and work with individual contacts also across channels.

They can be used through Flow Nodes or through CognigyScript, where profiles are exposed as `profile`.

To activate, deactivate, delete or merge contact profiles within your flow you can use the following nodes:

  * Activate Profile
  * Deactivate Profile
  * Delete Profile
  * Merge Profile

!!! tip "Use Contact Profile Data for a personalized user experience"
    Add stored contact profile information such as name and location to add a personal touch to user messages. Find out more about accessing profile data on the [**Profile**]({{config.site_url}}ai/tools/interaction-panel/profile/) page.

## GDPR
<div class="divider"></div>

Cognigy helps our customers to stay fully compliant to Europe's General Data Protection Regulation (GDPR) by allowing:

- The **export** of contact profiles via UI and API
- The **deletion** of contact profiles
- The **turning off** of data collection for individual profiles and endpoints

## Expiring Contact Profiles
<div class="divider"></div>

It is possible to configure an expiration time for contact profiles so that they will automatically be deleted from the system. This can be configured in the Management UI.


[![Version badge](https://img.shields.io/badge/Added in-v4.11.0-blue.svg)]({{config.site_url}})
## Sorting Conversation List
<div class="divider"></div>

As of Cognigy.AI v4.11.0 the conversations list in "Contact Profiles" page has been improved by sorting options. 

- To open the conversation list click on a "Contact ID" on the "Contact Profiles" page.

- Headers of the conversation list can be clicked and the sorting order changes accordingly.

An up or down arrow is displayed next to the header that was clicked most recently, initially it's at the start date.

Arrows indicate the proper sort order, ascending or descending.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/4f02781-contact-profiles.png" width="100%" />
  <figcaption>Contact Profiles: Start and End Date sorted in descending order (indicated by arrow)</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/797a434-Messages_sort.svg" width="100%" />
  <figcaption>Contact Profiles: Number of messages (related to Flows) sorted in descending order (indicated by arrow)</figcaption>
</figure>
