---
title: "Organization Details" 
slug: "organization-details" 
hidden: false 
---

# Organization Details

The **Organization Details** page includes an analytics overview section labeled **Billable Conversations**,
offering platform administrators a comprehensive report on the volume of conversations
that have taken place among all agents in the organization.

To access the **Organization Details** page, 
click **User Menu** in the upper-right corner of any Cognigy.AI page and then select **Organisation Details**.

## Billable Conversations

The chart shows a number of [billable conversations](../billing.md).

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/billable-conversations.png" width="100%" />
  <figcaption>The Billable Conversations report</figcaption>
</figure>

## Report Filtering

The report can be filtered by year and month using the date filter dropdown lists in the top right of the page.

## Delete an Organization

This feature will delete all the data from your organization.

### Before Deleting an Organization

!!! danger
    There is no way to undo the deletion action. Once you initiate the process, all your data will be permanently deleted.

Before the organization deletion, you need to set up:

- A valid system administrator emails are set in the environment variable `SYS_ADMINISTRATOR_EMAIL` of the `values.yaml` file. For example: `SYS_ADMINISTRATOR_EMAIL: "admin1@domain.com,admin2@domain.com"`. Your administrators will receive a notification at these email addresses regarding the organization deletion request. By following the link provided in the email, the administrators can proceed with the organization deletion.
- The Cognigy.AI [Management UI](../access/organization-details.md) is installed, and its path set in the environment variable `MANAGEMENTUI_BASE_URL_WITH_PROTOCOL` of the `values.yaml` file. For example: `MANAGEMENTUI_BASE_URL_WITH_PROTOCOL: http://management-ui`.

### Deletion Process for an Organization

This process contains the following steps:

1. A user with the `admin` role (system administrator) will request to delete the organization from the **Organisation Details** page. This action will trigger a request to be sent to the system administrator (email set as `SYS_ADMINISTRATOR_EMAIL`) for the next step.

    <figure>
      <img class="image-center" src="../../../../_assets/ai/administer/access/delete-organisation-confirm_org_deletion.png" width="100%" />
      <figcaption>Delete Organization</figcaption>
    </figure>

2. Once the system administrator receives the email, they will be able to click on the provided link to the [Management UI](management-ui.md) with the embedded token to proceed with the deletion. The system administrator will need to have a valid user for the Cognigy Management UI.

    <figure>
      <img class="image-center" src="../../../../_assets/ai/administer/access/deleteOrg-request-email.png" width="100%" />
      <figcaption>Organization Deletion Email</figcaption>
    </figure>

3. After logging in to the Management UI, the system administrator needs to click the **Delete Organisation** button that signifies the point of no return for deleting the entire organization.

    <figure>
      <img class="image-center" src="../../../../_assets/ai/administer/access/delete-organisation-delete_org_management_ui.png" width="100%" />
      <figcaption>Delete an Organization in Management UI</figcaption>
    </figure>

Finally, once the deletion process has been completed,
the system administrator will receive an email notifying that the organization has been completely removed.

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/deleteOrg-complete-email.png" width="100%" />
  <figcaption>Delete Organization Completed Email</figcaption>
</figure>
