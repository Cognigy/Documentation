---
title: "Admin Center Dashboard"
slug: "admin-center-dashboard"
description: "The Admin Center Dashboard allows you to track the number of billable conversations, Knowledge Chunks, and Queries within your organization. Additionally, you can activate other Cognigy services, such as Live Agent and Voice Gateway, as well as delete the organization if necessary."
hidden: false
tags:
  - admin center
  - dashboard
  - billable conversations
  - knowledge ai
  - cognigy products
  - delete organization
---

# Admin Center Dashboard

[![Version badge](https://img.shields.io/badge/Updated in-v4.89-blue.svg)](../../../../release-notes/4.89.md)

The _Admin Center Dashboard_ allows you to track the number of billable conversations, Knowledge Chunks, and Queries within your organization. Additionally, you can activate other Cognigy products, such as Live Agent and Voice Gateway, as well as delete organizations if necessary.

On the Admin Center Dashboard, you can perform the following actions:

- [View Charts](#charts)
- [Set up Cognigy Products](#set-up-cognigy-products)
- [Delete Organizations](#delete-organizations)

You can access the **Dashboard** page using one of the following options:

- Click **User Menu > Admin Center** on the **Main** page, then select **Dashboard** from the left-side menu.
- Select **Admin Center** from the User Menu in the bottom-left corner of the **Project** page, then select **Dashboard** from the left-side menu.

## Charts

Charts display key metrics, such as billable conversations and Knowledge AI usage, to help manage costs within the organization. Data can be filtered by month and year.

??? info "Billable Conversations"
    The chart shows the number of [billable conversations](../../billing.md) for the organization.

    <figure>
      <img class="image-center" src="../../../../../_assets/ai/administer/access/billable-conversations.png" width="90%" />
    </figure>

    The billable conversations metrics include the following:

    1. The number of billable conversations created within the selected period.
    2. The total number of billable conversations created overall.

??? info "Knowledge AI"
    Within each organization, if the Knowledge AI feature is used, you can monitor the number of Knowledge Queries and Knowledge Chunks.

    Knowledge Chunks and Knowledge Queries are billable units. Tracking their usage helps manage costs and optimize resource allocation.

    <figure>
      <img class="image-center" src="../../../../../_assets/ai/administer/access/knowledge-ai.png" width="90%" />
    </figure>

    The Knowledge AI metrics include the following:

    1. The number of Knowledge Queries performed within the selected period.
    2. The total number of Knowledge Queries performed.
    3. The number of Knowledge Chunks currently available in the organization.
    4. The maximum number of Knowledge Chunks allocated to the organization.

    For more information on how to activate Knowledge AI for your organization, read the [Knowledge AI](../../../empower/knowledge-ai/activate.md) documentation.

## Set up Cognigy Products

The **Cognigy Products** section allows you to activate additional Cognigy products for your organization, such as [Live Agent](../../../../live-agent/index.md) and [Voice Gateway](../../../../voice-gateway/index.md).

## Delete Organizations

??? info "1. Before Deleting Organizations"

    !!! danger
        Deleting an organization is irreversible and permanently erases all associated data.

    Before the organization deletion, you need to set up:

    - Valid system administrator emails in the environment variable `SYS_ADMINISTRATOR_EMAIL` of the `values.yaml` file. For example, `SYS_ADMINISTRATOR_EMAIL: "admin1@domain.com,admin2@domain.com"`. Your administrators receive a notification at these email addresses regarding the organization deletion request. By following the link provided in the email, the administrators can proceed with the organization deletion. For dedicated SaaS installations, contact Cognigy technical support to set this variable. 
    - The Cognigy.AI [Management UI](../../access/management-ui.md) is installed, and its path is set in the `MANAGEMENTUI_BASE_URL_WITH_PROTOCOL` variable of the `values.yaml` file. For example, `MANAGEMENTUI_BASE_URL_WITH_PROTOCOL: http://management-ui`. For dedicated SaaS installations, contact Cognigy technical support to set this variable.

??? info "2. Deletion Process for Organizations"
    This process contains the following steps:

    1. On the **Dashboard** page, a user with the admin role requests to delete the organization by clicking **Delete Organization**. This request is sent to the system administrator's email.
    2. The system administrator receives the email and follows the link to the [Management UI](../management-ui.md).
    3. The system administrator deletes the organization in the Management UI and then receives a confirmation email.