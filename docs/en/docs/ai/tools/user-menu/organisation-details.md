---
title: "Organisation Details" 
slug: "organisation-details" 
hidden: false 
---

# Organisation Details

The **Organisation Details** page includes an analytics overview section labeled **Billable Conversations**,
offering platform administrators a comprehensive report on the volume of conversations
that have taken place among all agents in the organization.

To access the **Organisation Details** page, 
click **User Menu** in the upper-right corner of any Cognigy.AI page and then select **Organisation Details**.

## Access to Billable Conversations

The chart shows a number of [billable conversations](../../billing.md).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/d242bd4-usageStats.png" width="100%" />
  <figcaption>The Billable Conversations report</figcaption>
</figure>

## Report Filtering

The report can be filtered by year and month using the date filter dropdown lists in the top right of the page.

## Delete Organisation

[![Version badge](https://img.shields.io/badge/Added in-v4.30.0-blue.svg)]({{config.site_url}})

This feature will delete all the data from your organization.

!!! danger
    There is no way to undo the deletion action. Once you initiate the process, all your data will be permanently deleted.

Before the organization deletion, you need to set up:

- A valid system administrator email in the environment variable `SYS_ADMINISTRATOR_EMAIL`.
- The Cognigy.AI [Management UI](organisation-details.md) properly installed, and its path set in the environment variable `MANAGEMENTUI_BASE_URL_WITH_PROTOCOL`.

This process contains the following steps:

1. A user with an admin role (system administrator) will request to delete the organization from the **Organisation Details** page. This action will trigger a request to be sent to the system administrator (email set as `SYS_ADMINISTRATOR_EMAIL`) for the next step.

    <figure>
      <img class="image-center" src="{{config.site_url}}ai/tools/images/delete-organisation-confirm_org_deletion.png" width="100%" />
      <figcaption>Delete Organization</figcaption>
    </figure>

2. Once the system administrator receives the email, they will be able to click on the provided link to the [Management UI](../management-ui.md) with the embedded token to proceed with the deletion. The system administrator will need to have a valid user for the Cognigy Management UI.

    <figure>
      <img class="image-center" src="{{config.site_url}}ai/tools/images/deleteOrg-request-email.png" width="100%" />
      <figcaption>Organization Deletion email</figcaption>
    </figure>

3. After logging in to the Management UI, the system administrator needs to click the **Delete Organisation** button that signifies the point of no return for deleting the entire organization.

    <figure>
      <img class="image-center" src="{{config.site_url}}ai/tools/images/delete-organisation-delete_org_management_ui.png" width="100%" />
      <figcaption>Delete an Organization in Management UI</figcaption>
    </figure>

Finally, once the deletion process has been completed,
the system administrator will receive an email notifying that the organization has been completely removed.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/deleteOrg-complete-email.png" width="100%" />
  <figcaption>Delete Organization Completed Email</figcaption>
</figure>
