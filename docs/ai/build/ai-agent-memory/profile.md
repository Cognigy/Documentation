---
title: "Profile" 
slug: "profile"
description: "The Profile Object is a JSON object that stores persistent information about the user."
hidden: false 
tags:
   - profile object
   - user data
   - contact profiles
   - contact profile data
   - profile properties
---
# Profile

The _Profile Object_ is a JSON object that serves as the long-term AI Agent memory. The Profile object stores persistent information about the user.

Each user who connects to Cognigy.AI has a unique Contact Profile. The Contact Profile uses the Profile object to store user data in Cognigy.AI. When the user disconnects from Cognigy.AI, the Contact Profile retains the data and retrieves it upon reconnection with the same user ID. This approach allows multichannel conversations to take place by accessing the stored Contact Profile when the user connects through a different channel.

With [Nodes](../../build/nodes/overview.md), such as the [Say](../../build/node-reference/basic/say.md) or [Question](../../build/node-reference/basic/question.md) Nodes, you can access the Profile object and retrieve information.

## Limitations

- You can store up to 1.5 MB in the Profile object. For dedicated SaaS and on-premises installations, you can configure the limit using the `MAX_MEMORY_OBJECT_SIZE` variable in the `values.yaml` file. Increasing the object size could lead to performance issues.

## Working with the Profile Object

=== "GUI"

    You can view the Profile object by navigating to **Info > Profile** in the [Interaction Panel](../../../ai/test/interaction-panel/overview.md). You can copy the exact JSON path of a Profile object value by right-clicking it and selecting **Copy JSON Path**.

=== "API"

    You can edit a Contact Profile and the respective data with the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#tag--Profiles-v2.0) to change the data available in the Profile object.

### Managing Information in the Profile Object

The data in the Profile object corresponds to the [Contact Profile data](../../../ai/analyze/contact-profiles.md), which you can manage in **Settings > Contact Profiles**.

### Accessing the Profile object

Nodes can dynamically access **Profile** properties with [CognigyScript](../../build/cognigyscript.md), for example, `{{"{{profile.property}}"}}`, or [Tokens](../../build/tokens.md). The CognigyScript expression used to access the Profile object follows the dot notation `property.child.child`.

You can also use [Analytics Nodes](../node-reference/analytics/overview.md), such as the [Add Memory Node](../node-reference/analytics/add-memory.md), to store data in the Contact Profile.

#### Example Profile Object

Consider the following Profile object:

```json
{
  "firstname": "Bastian",
  "lastname": "Bux",
  "email": "b.bux@neverendingstory.com",
  "age": 30
}
```

- `{{"{{profile.firstname}}"}}` returns `Bastian`.
- `{{"{{profile.lastname}}"}}` returns `Bux`.
