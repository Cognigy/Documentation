---
 title: "Audit Events" 
 slug: "audit-events" 
 hidden: false 
---
# Audit Events

[![Version badge](https://img.shields.io/badge/Added in-v4.35.0-blue.svg)]({{config.site_url}})

Audit Events interface permits users with admin [role]({{config.site_url}}live-agent/roles) to track events on an organizational level. 

### Access Audit Events Dashboard

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/audit-events-button.png" width="100%" />
</figure>

As an admin user, you are able to see the **Audit Events** button on the user menu. Click on it to access the Audit Events dashboard:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/audit-events-dashboard.png" width="100%" />
</figure>

### Audit Events List
The Audit Events list includes all the events that happened during the last 30 days, represented by six informative columns to describe each event:

- **Type**: Event type, which can be one of the pre-defined event types (Action, Create, Replace, Patch, Delete, Unauthorized).
- **Action**: Specific column to describe the **Action** type. It has items like "cancelTask", "addRoleToUser", "addProjectMember".
- **Resource Type**: Type of [resource]({{config.site_url}}ai/resources/agents/agents) used in the event (e.g. Project, Node, Flow, ...etc). 
- **Timestamp**: The exact time of the event. 
- **Project**:  Identification number of the project in which the event happened. 
- **User E-mail**: Email of user who triggered the event. 

## Functionality

#### 1. Filter audit events
Audit events list can be filtered by user e-mail to find all events that a specific user triggered:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/filter-by-user-email.png" width="100%" />
</figure>

They can also be filtered by type to find a specific event (e.g. Action):

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/filter-by-type.png" width="100%" />
</figure>

#### 2. Sort audit events
By default, the audit events list is sorted by most recent event:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/default-sorting.png" width="100%" />
</figure>

It can be sorted by Type, Timestamp, or user E-mail. 

#### 3. View user details
Click on users email to see their profile for more details.

#### 4. Visualize event chain

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/event-chain.png" width="100%" />
</figure>

Hover over an event item to view the event's chain. It shows the dependency of all resources that are related to the event.

#### 5. View event details

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/raw-event-details.png" width="100%" />
</figure>

Click on an event item to see more details about the event in a technical format (JSON).

#### 6. Copy event details
Click on the secondary menu button next to the close (X) button to copy the event details.