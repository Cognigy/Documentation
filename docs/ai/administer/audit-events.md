---
title: "Audit Events"
slug: "audit-events"
hidden: false
---
# Audit Events

Audit Events interface permits users with admin [roles](access/access-control.md) to track events on an organizational level.

### Access Audit Events Dashboard

As an admin user, you have access to the **Audit Events** button located in the user menu.
Click **Audit Events** to navigate to the Audit Events dashboard.

<figure>
  <img class="image-center" src="../../../_assets/administer/audit-events/audit-events-dashboard.png" width="100%" />
</figure>

### Audit Events List
The Audit Events list includes all the events that happened during the last 30 days, represented by six informative columns to describe each event:

- **Type**: Event type, which can be one of the pre-defined event types (Action, Create, Replace, Patch, Delete, Unauthorized).
- **Action**: Specific column to describe the **Action** type. It has items like "cancelTask", "addRoleToUser", "addProjectMember".
- **Resource Type**: Type of resource used in the event (e.g. Project, Node, Flow, ...etc).
- **Timestamp**: The exact time of the event.
- **Project**:  Identification number of the project in which the event happened.
- **User E-mail**: Email of user who triggered the event.

## Functionality

#### 1. Filter audit events
Audit events list can be filtered by user e-mail to find all events that a specific user triggered:

<figure>
  <img class="image-center" src="../../../_assets/administer/audit-events/filter-by-user-email.png" width="100%" />
</figure>

They can also be filtered by type to find a specific event (e.g. Action):

<figure>
  <img class="image-center" src="../../../_assets/administer/audit-events/filter-by-type.png" width="100%" />
</figure>

#### 2. Sort audit events
By default, the audit events list is sorted by most recent event:

<figure>
  <img class="image-center" src="../../../_assets/administer/audit-events/default-sorting.png" width="100%" />
</figure>

It can be sorted by Type, Timestamp, or user E-mail.

#### 3. View user details
Click on user email to see their profile for more details.

#### 4. Visualize event chain

<figure>
  <img class="image-center" src="../../../_assets/administer/audit-events/event-chain.png" width="100%" />
</figure>

Hover over an event item to view the event's chain. It shows the dependency of all resources that are related to the event.

#### 5. View event details

<figure>
  <img class="image-center" src="../../../_assets/administer/audit-events/raw-event-details.png" width="100%" />
</figure>

Click on an event item to see more details about the event in a technical format (JSON).

#### 6. Copy event details
Click on the secondary menu button next to the close (X) button to copy the event details.