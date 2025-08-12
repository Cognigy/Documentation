---
title: "Audit Events"
slug: "audit-events"
description: "The Audit Events interface allows users with the admin and fullSupportUser roles to track events at an organization-wide level."
hidden: false
tags:
  - admin center
  - audit events
  - access control
  - organization management
---

# Audit Events

[![Version badge](https://img.shields.io/badge/Updated in-v4.90-blue.svg)](../../../../release-notes/4.90.md)

The _Audit Events_ interface allows users with the `admin` and `fullUserSupport` roles to track events at an organization-wide level.

You can access the **Audit Events** page using one of the following options:

- Click **User Menu > Admin Center** on the **Main** page, then select **Audit Events** from the left-side menu.
- Select **Admin Center** from the User Menu in the bottom-left corner of the **Project** page, then select **Audit Events** from the left-side menu.

## Working with the Audit Events Interface

??? info "View List of Audit Events"
    The list of audit events displays all events that occurred in the past 30 days. You can filter and sort the events.
   
    | Column Name   | Description                                                                                                 |
    |---------------|-------------------------------------------------------------------------------------------------------------|
    | Type          | The category of the event, such as `Action`, `Create`, `Replace`, `Patch`, `Delete`, or `Unauthorized`.     |
    | Action        | The specific action that triggered the event, such as `cancelTask`, `addRoleToUser`, or `addProjectMember`. |
    | Resource Type | The type of resource involved in the event, such as Project, Node, Flow, and others.                        |
    | Timestamp     | The exact date and time when the event occurred.                                                            |
    | Project       | The identification number of the Project where the event occurred.                                          |
    | User Email    | The email address of the user who triggered the event, identifying the responsible party.                   |

??? info "View User Details"
    To view the details of the user who initiated the audit event, follow these steps:

    1. Access the **Audit Events** page using one of the following options:
        - Click **User Menu > Admin Center** on the **Main** page, then select **Audit Events** from the left-side menu.
        - Select **Admin Center** from the User Menu in the bottom-left corner of the **Project** page, then select **Audit Events** from the left-side menu.
    2. On the **Audit Events** page, click the user's email in the audit event row. The system will open a window showing the user's Projects and roles within the organization.

??? info "View Event Chain"
    To view an event chain, follow these steps:

    1. Access the **Audit Events** page using one of the following options:
        - Click **User Menu > Admin Center** on the **Main** page, then select **Audit Events** from the left-side menu.
        - Select **Admin Center** from the User Menu in the bottom-left corner of the **Project** page, then select **Audit Events** from the left-side menu.
    2. On the **Audit Events** page, hover your cursor over an audit event row to view the event's chain. The system will display the dependencies of all resources related to the event. For example, for the Node resource type, the dependencies will appear in the following format:
    
        ```txt
        locale 67291073e1a6d2732253b620
          → flow 6732fb2eb23a1561e0c4a91b
             → node 6732fc9903cb134f00e349ad
        ```
   
??? info "View Audit Event Details"
    To view audit event details, follow these steps:

    1. Access the **Audit Events** page using one of the following options:
        - Click **User Menu > Admin Center** on the **Main** page, then select **Audit Events** from the left-side menu.
        - Select **Admin Center** from the User Menu in the bottom-left corner of the **Project** page, then select **Audit Events** from the left-side menu.
    2. On the **Audit Events** page, select an event from the list. The **Raw Event Details** window appears on the right side of the page.

    The event is displayed in JSON format. You can copy the event data by clicking ![vertical-ellipsis](../../../../_assets/icons/vertical-ellipsis.svg) **> Copy Event Details**.

## More Information

- [Admin Center Dashboard](dashboard.md)
- [Admin Center](overview.md)
- [Access Control](access-control.md)