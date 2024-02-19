---
 title: "Delete Profile" 
 slug: "delete-profile" 
 hidden: false 
---
# Delete Profile

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/profile/delete-profile.png" width="80%" />
</figure>

## Description
<div class="divider"></div>
This Node is used to **delete** a specific contact's profile in case a contact requests it.

!!! danger "Important"
    The user's data won't be available anymore after executing this node: It deletes the whole profile including **all analytics data** and **all transcripts** this user had so far.

!!! tip "Common usage"
    It is common to place this node behind an ``If Node`` that is only activated if the contact specifically requests that they want you to delete the persisted data.