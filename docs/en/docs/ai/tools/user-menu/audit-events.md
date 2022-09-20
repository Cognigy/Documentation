---
 title: "Audit Events" 
 slug: "audit-events" 
 hidden: false 
---
# Audit Events

Audit Events interface permits users with admin [role]({{config.site_url}}live-agent/roles) to track events on an organizational level. 

## Access Audit Events Dashboard

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/audit-events-button.png" width="100%" />
</figure>

As an admin user, you are able to see the **Audit Events** button on the user menu and by clicking on it you access the dashboard:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/audit-events-dashboard.png" width="100%" />
</figure>

### Audit Events List
Audit Events list includes all the events that happened during the last 30 days represented by six informative columns to describe each event:

- **Type**: Event type and it can be one of the pre-defined event types (Action, Create, Replace, Patch, Delete, Unathorized).
- **Action**: Specific column to describe the **Action** type. It has items like "cancelTask", "addRoleToUser", "addProjectMember".
- **Resource Type**: Type of [resource]({{config.site_url}}ai/resources/agents/agents) used in the event (e.g. Project, Node, Flow, ...etc). 
- **Timestamp**: Exact time of when the event occurred. 
- **Project**:  Identification number of the project in which the event happened. 
- **User E-mail**: Email of user who performed the operation. 

## Functionality

#### Filter audit events
Audit events list can be filtered by user email to find all operations that a specific user executed:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/filter-by-user-email.png" width="100%" />
</figure>

Or filtered by type to find a specific event for (e.g. Action):

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/filter-by-type.png" width="100%" />
</figure>

#### Sort audit events
By default, the audit events list is sorted by most recent event:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/default-sorting.png" width="100%" />
</figure>

It can be sorted by Type, Timestamp or user E-mail. 

#### View user details
Click on users email to see their profiles for more details.

#### Visualize event chain

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/event-chain.png" width="100%" />
</figure>

Hover over an event item to view the event's chain (series of actions from different users).

#### View event details

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/raw-event-details.png" width="100%" />
</figure>

Click on an event item to see more details about the event in a technical format (JSON).

#### Copy event details
Click on the 'three' dots button next to the close (X) button to copy the event details.