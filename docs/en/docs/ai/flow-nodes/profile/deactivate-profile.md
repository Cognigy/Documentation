---
 title: "Deactivate Profile" 
 slug: "deactivate-profile" 
 hidden: false 
---
# Deactivate Profile

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/93835e7-profile-deactivate.jpg" width="100%" />
</figure>

## Description
<div class="divider"></div>
This Node is used to deactivate a specific contact profile in case a contact requests it. This node has one parameter, as it will deactivate the profile of the contact that hits the Node and could also delete the stored profile data if required.

| Parameter  | Type    | Description                                                                                                                                                                                                                             |
|------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DeleteData | Boolean | If True, this node will deactivate the contact profile and delete stored data including **all analytics data** and **all transcripts**. The **contact profile** won't get deleted so that it is still possible to re-activate the user. |

!!! tip "Common usage"
    It is common to place this node behind an ``If Node`` that is only activated if the contact specifically requests that you shouldn't collect data their data.

!!! danger "Important"
    If the "DeleteData" option is being used, **all analytics data** and **all transcripts** will be removed from the system. This operation is not revertible.