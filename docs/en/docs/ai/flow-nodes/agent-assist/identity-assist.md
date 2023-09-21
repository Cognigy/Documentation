---
title: "Identity Assist"
slug: "identity-assist"
hidden: true
---

# Identity Assist

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/agent-assist/identity-assist.png" width="80%" />
</figure>

## Description

This Node serves the purpose of displaying and processing customer-specific information directly within the tile of your Agent Assist Workspace, enhancing the context and usability of the identity-related data.

## Settings

| Parameter     | Type          | Description                                                                                                                                      |
|---------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Tile ID       | CognigyScript | The ID that you created in the Agent Assist configuration.                                                                                       |
| Widget Layout | Select        | The number of user inputs that should be analyzed by a model.                                                                                    |
| Image Shape   | Select        | The shape or format of the image (round or square).                                                                                              |
| Image URL     | URL           | The URL where the image is hosted or located.                                                                                                    |
| Customer Data | CognigyScript | Additional customer-specific data for analysis in a key-value format. For example, the key is `Email` and the value is `{{"{{profile.email}}"}}` |


