---
title: "Audit Events"
slug: "audit-events"
description: "The Audit Events interface allows users with the `admin` and `fullSupportUser` roles to track events at an organization-wide level."
hidden: false
---

# Audit Events

[![Version badge](https://img.shields.io/badge/Updated in-v4.90-blue.svg)](../../../../release-notes/4.90.md)

The _Audit Events_ interface allows users with the `admin` and `fullUserSupport` roles to track events at an organization-wide level.

You can access the **Audit Events** page using one of the following options:

- Click **User Menu ![user-menu](../../../../_assets/icons/user-menu.svg) > Admin Center** on the **Main** page, then select **Audit Events** from the left-side menu.
- Select **Admin Center** from the User Menu in the bottom-left corner of the Project page, then select **Audit Events** from the left-side menu.

## List of Audit Events

The list of Audit Events displays all events that occurred in the past 30 days. These events are organized into columns that provide a detailed breakdown of each action.

| Column Name   | Description                                                                                               |
|---------------|-----------------------------------------------------------------------------------------------------------|
| Type          | The category of the event, such as `Action`, `Create`, `Replace`, `Patch`, `Delete`, or `Unauthorized`.   |
| Action        | A specific action that triggered the event, such as `cancelTask`, `addRoleToUser`, or `addProjectMember`. |
| Resource Type | The type of resource involved in the event, such as `Project`, `Node`, `Flow`, and more.                  |
| Timestamp     | The exact date and time when the event occurred.                                                          |
| Project       | The identification number of the project in which the event occurred.                                     |
| User E-mail   | The email address of the user who triggered the event, identifying the responsible party.                 |

## Filter Audit Events

To filter audit events, follow these steps:

1. Access the **Audit Events** page using one of the following options:
    - Click **User Menu ![user-menu](../../../../_assets/icons/user-menu.svg) > Admin Center** on the **Main** page, then select **Audit Events** from the left-side menu.
    - Select **Admin Center** from the User Menu in the bottom-left corner of the Project page, then select **Audit Events** from the left-side menu.
2. On the **Audit Events** page, choose your preferred filter options:
    - **User email** — find all events triggered by a specific user, enter the user’s email in the search field. The list of audit events will update accordingly to display only the events related to that user. 
    - **Event type** — find a specific type of system event (for example, `Action`, `Create`, `Patch`), select a type from the **Filter by Type** list. The list of audit events will update to show only events matching the selected type.

## Sort Audit Events

By default, the list of audit events is sorted by the most recent events.
To change the order, follow these steps:

1. Access the **Audit Events** page using one of the following options:
    - Click **User Menu ![user-menu](../../../../_assets/icons/user-menu.svg) > Admin Center** on the **Main** page, then select **Audit Events** from the left-side menu.
    - Select **Admin Center** from the User Menu in the bottom-left corner of the Project page, then select **Audit Events** from the left-side menu.
2. On the **Audit Events** page, sort evets by their `Type`, `Timestamp`, or `E-mail` parameters. To select a sorting parameter, hover your cursor over a column title and select the option you prefer:
    - Click the up arrow ![arrow-up-black](../../../../_assets/icons/arrow-up-black.svg) to sort in ascending order.
    - Click the down arrow ![arrow-down-black](../../../../_assets/icons/arrow-down-black.svg) to sort in descending order.

## View User Details

To view the details of the user who initiated the audit event, follow these steps:

1. Access the **Audit Events** page using one of the following options:
    - Click **User Menu ![user-menu](../../../../_assets/icons/user-menu.svg) > Admin Center** on the **Main** page, then select **Audit Events** from the left-side menu.
    - Select **Admin Center** from the User Menu in the bottom-left corner of the Project page, then select **Audit Events** from the left-side menu.
2. On the **Audit Events** page, click the user's email in the audit event row. The system will open a window showing the user's Projects and roles within the organization.

## View Event Chain

To view an event chain, follow these steps:

1. Access the **Audit Events** page using one of the following options:
    - Click **User Menu ![user-menu](../../../../_assets/icons/user-menu.svg) > Admin Center** on the **Main** page, then select **Audit Events** from the left-side menu.
    - Select **Admin Center** from the User Menu in the bottom-left corner of the Project page, then select **Audit Events** from the left-side menu.
2. On the **Audit Events** page, hover your cursor over an audit event row to view the event's chain. The system will display the dependencies of all resources related to the event. For example, for the Node resource type, the dependencies will appear in the following format:
    
    ```txt
    locale 67291073e1a6d2732253b620
      → flow 6732fb2eb23a1561e0c4a91b
 	    → node 6732fc9903cb134f00e349ad
    ```
   
## View Audit Event Details

To view audit event details, follow these steps:

1. Access the **Audit Events** page using one of the following options:
    - Click **User Menu ![user-menu](../../../../_assets/icons/user-menu.svg) > Admin Center** on the **Main** page, then select **Audit Events** from the left-side menu.
    - Select **Admin Center** from the User Menu in the bottom-left corner of the Project page, then select **Audit Events** from the left-side menu.
2. On the **Audit Events** page, select an event from the list. The **Raw Event Details** window appears on the right side of the page.

The event will be displayed in JSON format.
You can copy the JSON by clicking ![vertical-ellipsis](../../../../_assets/icons/vertical-ellipsis.svg) **> Copy Event Details**.

## More Information

- [Admin Center Dashboard](dashboard.md)
- [Admin Center](overview.md)
- [Access Control](access-control.md)