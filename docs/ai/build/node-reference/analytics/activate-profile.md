---
 title: "Activate Profile" 
 slug: "activate-profile" 
 hidden: false 
---
# Activate Profile

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/profile/activate-profile.png" width="80%" />
</figure>

## Description


The Activate Profile Node is used to reactivate a profile that has been deactivated, in case the user disabled data collection by mistake or wants to allow data collection again. The Node doesn't take any parameters, since it just activates the profile of the contact who hit the Node.

!!! tip "Common usage"
    It is common to place this Node behind an `If Node` so that the Node is only hit if the contact specifically requests that data should be collected.