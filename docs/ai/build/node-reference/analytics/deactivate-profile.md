---
title: "Deactivate Profile" 
slug: "deactivate-profile"
description: "The Deactivate Profile Node is used to deactivate a specific Contact Profile if the end user requests it."
hidden: false 
---
# Deactivate Profile

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/analytics/deactivate-profile.png" width="50%" />
</figure>

## Description

This Node deactivates a [specific Contact Profile](../../../analyze/contact-profiles.md#view-a-contact-profile) if the end user requests it.
After deactivation of the Contact Profile, the existing data is kept, but no new data is collected.

If you want to delete all stored profile data, activate the **Delete Data** parameter in the Node settings.

## Parameters

| Parameter   | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                |
|-------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Delete Data | Boolean | This parameter is inactive by default. If enabled, this Node will deactivate the Contact Profile and delete stored data including all analytics data and transcripts will be removed from the system. This operation is not revertible. The Contact Profile won't get deleted so that it is still possible to reactivate the Profile via the Activate Profile Node or the Data collection inactive toggle. |

{! _includes/ai/node-reference/analytics/profile-node-use-case.md !}

## More Information

- [Activate Profile](activate-profile.md)
- [Update Profile](update-profile.md)
- [Delete Profile](delete-profile.md)
- [Merge Profile](merge-profile.md)