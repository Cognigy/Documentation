# Update Profile

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/7abec39-profile-update.jpg" width="100%" />
</figure>

## Description
<div class="divider"></div>
The Update Profile Node is used to update the users' Contact Profile.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/18cbc8a-update-profile.jpg" width="100%" />
</figure>

The available `Key` options are all defined fields in the Profile Schema of this Project.

 
If the key used is an invalid value, it will not perform any function. For a list of default profile property keys, see the [Contact Profiles Page]({{config.site_url}}ai/resources/manage/contact-profiles/)

| Parameter | Type | Description |
| ----------- | ----------- | ----------- |
| Key | select | Which field in the user's Contact Profile to update. |
| Value | CognigyScript | The value you want to set. |