---
 title: "Organisation Details" 
 slug: "organisation-details" 
 hidden: false 
---

# Organisation Details

The **Organisation Details** contains an analytics overview feature in a section called _Billable Conversations_, that provides a report to platform administrators with insight into the **volume of conversations** that have occurred across all agents in an organization.

### Access Billable Conversations
To access the **Billable Conversations** report, select the **User Menu** icon from the top right of any page and click on the **Organisation Details** option.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/d242bd4-usageStats.png" width="100%" />
  <figcaption>The Billable Conversations report</figcaption>
</figure>

### Report Filtering

The report can be filtered by **year** and **month** using the date filter dropdown lists in the top right of the page.

### Delete Organisation

[![Version badge](https://img.shields.io/badge/Added in-v4.30.0-blue.svg)]({{config.site_url}})

The delete organisation feature will completely remove all the data from your organisation.
???+ warning "Be aware that there is NO way back from this. Once you start the process all your data will be gone."

In order to have this feature fully operational you will need to have some confiuration set up.

- A valid system adminitrator in the environment variable `SYS_ADMINISTRATOR_EMAIL`.
- The Cognigy UI-Management proper insalled, and its path set in the environment variable `MANAGEMENTUI_BASE_URL_WITH_PROTOCOL`.

This process consist in two steps:

- Step one, a user with an admin role will request to delete the organisation from the organisation details page. This will initiate a request that will be sent to the system administrator (email placed in 'SYS_ADMINISTRATOR_EMAIL') with the next steps.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/delete-organisation-delete_org_organisation_details.png" width="100%" />
  <figcaption>Delete organisation details</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/delete-organisation-confirm_org_deletion.png" width="100%" />
  <figcaption>Delete organisation details confirmation pop up</figcaption>
</figure>
  <figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/deleteOrg-request-email.png" width="100%" />
  <figcaption>Delete organisation request email</figcaption>
</figure>

- Step two, once the system administrator receives the email, they will be able to click on the provided link to the UI-management with the embedded token to proceed with the deletion. The system administrator will need to have a valid user for the Cognigy UI-Management system.
Once in the UI-Management, the user will be able to see a button to trigger the actual deletion process. Finally, once the deletion process has been completed the system administrator will receive and email notifying that the organisation is completely removed.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/delete-organisation-delete_org_management_ui.png" width="100%" />
  <figcaption>UI-Management Delete organisation</figcaption>
</figure>
<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/deleteOrg-complete-email.png" width="100%" />
  <figcaption>Delete organisation completed email</figcaption>
</figure>
