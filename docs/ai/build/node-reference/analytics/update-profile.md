---
title: "Update Profile" 
slug: "update-profile" 
hidden: false 
---

# Update Profile

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/analytics/update-profile.png" width="50%" />
</figure>

## Description

This Node updates users' Contact Profiles.
The available Profile Schema fields correspond to all defined fields in the Project's [Profile Schema](../../../analyze/contact-profiles.md#profile-schema). 
If an invalid field is used, no action is taken.

## Parameters

| Parameter            | Type          | Description                                                                                                                                                                                                                                                                                  |
|----------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Profile Schema Field | Selector      | Identify the field in the user's Contact Profile that needs to be updated. The predefined Profile Schema fields are described in [Contact Profiles](../../../analyze/contact-profiles.md); you can also create a [custom field](../../../analyze/contact-profiles.md#create-a-custom-field). |
| Value                | CognigyScript | The value of the field.                                                                                                                                                                                                                                                                      |

## More Information

- [Activate Profile](activate-profile.md)
- [Deactivate Profile](deactivate-profile.md)
- [Delete Profile](delete-profile.md)
- [Merge Profile](merge-profile.md)