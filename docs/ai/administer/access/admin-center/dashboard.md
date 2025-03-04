---
title: "Admin Center Dashboard"
slug: "admin-center-dashboard"
description: "The Admin Center Dashboard allows you to track the number of billable conversations, Knowledge Chunks, and Queries within your organization. Additionally, you can activate other Cognigy services, such as Live Agent and Voice Gateway, as well as delete the organization if necessary."
hidden: false
---

# Admin Center Dashboard

[![Version badge](https://img.shields.io/badge/Updated in-v4.89-blue.svg)](../../../../release-notes/4.89.md)

The _Admin Center Dashboard_ allows you to track the number of billable conversations, Knowledge Chunks, and Queries within your organization. Additionally, you can activate other Cognigy services, such as Live Agent and Voice Gateway, as well as delete the organization if necessary.

You can access the **Admin Center Dashboard** page using one of the following options:

- Click **User Menu ![user-menu](../../../../_assets/icons/user-menu.svg) > Admin Center** on the **Main** page, then select **Dashboard** from the left-side menu.
- Select **Admin Center** from the User Menu in the bottom-left corner of the Project page, then select **Dashboard** from the left-side menu.

## Billable Conversations

The chart shows a number of [billable conversations](../../billing.md) for the organization.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/administer/access/billable-conversations.png" width="90%" />
</figure>

The Billable Conversations metrics include the following:

1. The number of billable conversations created within the selected time frame.
2. The total number of billable conversations created.

## Knowledge AI

Within each organization, if the Knowledge AI feature is used,
you can view its metrics to monitor the number of Knowledge Queries and Knowledge Chunks.

Knowledge Chunks and Knowledge Queries are billable units.
Tracking the usage of these units helps manage costs effectively
and make informed decisions about resource allocation.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/administer/access/knowledge-ai.png" width="90%" />
</figure>

{! _includes/ai/administer/access/knowledge-ai-metrics.md !}

For more information on how to activate Knowledge AI for your organization, read the [Knowledge AI](../../../empower/knowledge-ai/activate.md) documentation.

## Report Filtering

The report can be filtered by year and month using the date filter dropdown lists in the top right of the page.

## Delete an Organization

This feature will delete all the data from your organization.

### Before Deleting an Organization

!!! danger
    There is no way to undo the deletion action. Once you initiate the process, all your data will be permanently deleted.

Before the organization deletion, you need to set up:

- A valid system administrator emails are set in the environment variable `SYS_ADMINISTRATOR_EMAIL` of the `values.yaml` file. For example: `SYS_ADMINISTRATOR_EMAIL: "admin1@domain.com,admin2@domain.com"`. Your administrators will receive a notification at these email addresses regarding the organization deletion request. By following the link provided in the email, the administrators can proceed with the organization deletion.
- The Cognigy.AI [Management UI](../../access/management-ui.md) is installed, and its path set in the environment variable `MANAGEMENTUI_BASE_URL_WITH_PROTOCOL` of the `values.yaml` file. For example: `MANAGEMENTUI_BASE_URL_WITH_PROTOCOL: http://management-ui`.

### Deletion Process for an Organization

This process contains the following steps:

1. A user with the `admin` role (system administrator) will request to delete the organization from the **Admin Center** page. This action will trigger a request to be sent to the system administrator (email set as `SYS_ADMINISTRATOR_EMAIL`) for the next step.

    <figure>
      <img class="image-center" src="../../../../../_assets/ai/administer/access/delete-organisation-confirm_org_deletion.png" width="100%" />
      <figcaption>Delete Organization</figcaption>
    </figure>

2. Once the system administrator receives the email, they will be able to click the provided link to the [Management UI](../../access/management-ui.md) with the embedded token to proceed with the deletion. The system administrator will need to have a valid user for the Cognigy Management UI.

    <figure>
      <img class="image-center" src="../../../../../_assets/ai/administer/access/deleteOrg-request-email.png" width="100%" />
      <figcaption>Organization Deletion Email</figcaption>
    </figure>

3. After logging in to the Management UI, the system administrator needs to click the **Delete Organisation** button that signifies the point of no return for deleting the entire organization.

    <figure>
      <img class="image-center" src="../../../../../_assets/ai/administer/access/delete-organisation-delete_org_management_ui.png" width="100%" />
      <figcaption>Delete an Organization in Management UI</figcaption>
    </figure>

Finally, once the deletion process has been completed,
the system administrator will receive an email notifying that the organization has been completely removed.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/administer/access/deleteOrg-complete-email.png" width="100%" />
  <figcaption>Delete Organization Completed Email</figcaption>
</figure>
