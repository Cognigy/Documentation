---
 title: "Activate Profile" 
 slug: "activate-profile" 
 hidden: false 
---
# Activate Profile

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/12ff73a-profile-activate.jpg" width="100%" />
</figure>

## Description
<div class="divider"></div>
The Activate Profile Node is used to reactivate a profile that has been deactivated, in case the user disabled data collection by mistake or wants to allow data collection again. The Node doesn't take any parameters, since it just activates the profile of the contact who hit the Node.

???+ success "Common usage"
    It is common to place this Node behind an ``If Node`` so that the Node is only hit if the contact specifically requests that data should be collected.