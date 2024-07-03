---
 title: "Deactivate Profile" 
 slug: "deactivate-profile" 
 hidden: false 
---
# Deactivate Profile

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/profile/deactivate-profile.png" width="80%" />
</figure>

## Description

This Node is used to deactivate a specific contact profile if the end user requests it. After deactivation of the contact profile, the existing data will be kept, but no new data will be collected.

If you want to delete all stored profile data, activate the Delete Data parameter in the Node settings.

## Settings

| Parameter   | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                 |
|-------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Delete Data | Boolean | This parameter is inactive by default. If enabled, this Node will deactivate the contact profile and delete stored data including all analytics data and transcripts will be removed from the system. This operation is not revertible. The Contact Profile won't get deleted so that it is still possible to re-activate the Profile via the Activate Profile Node or the Data collection inactive toggle. |

## Use Case

Consider placing this Node below an If Node to trigger it when the contact explicitly requests not to collect their data.