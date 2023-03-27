---
 title: "Complete Goal" 
 slug: "complete-goal" 
 hidden: false 
---
# Complete Goal

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/744a2aa-profile-complete.jpg" width="100%" />
</figure>

## Description
<div class="divider"></div>
The Complete Goal Node will set a specific goal as completed when the contact hits the Node.

| Parameter | Type          | Description                                                                   |
|-----------|---------------|-------------------------------------------------------------------------------|
| Goal      | CognigyScript | The name of the goal that should be completed when the contact hits the Node. |

!!! tip "Usage"
    The completed goal will be stored in the contact's profile and in analytics.

!!! warning "Difference between Complete Goal and Analytics Step"
    The Complete Goal is meant to be used at runtime and is tied to a contact profile. Analytics Steps are meant to be used to make individual events trackable in the analytics data. One can use goals to decide whether a user still needs to do something or not. the Analytics Steps are meant for storing data information.
