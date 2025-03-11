---
 title: "Profile" 
 slug: "profile" 
 hidden: false 
---
# Profile

The Profile is a JSON object that stores persistent information about the end-user.

Every contact that connects to Cognigy.AI has their own **Contact Profile** that is stored within the platform. When a contact disconnects from Cognigy.AI, the **Profile Data** is retained in the database and retrieved upon reconnection with the same user ID. This enables multichannel conversations to take place by accessing the stored user profile when the user connects from an alternate channel.

The [Flow](../../build/flows/overview.md) can read from and write to the **Profile** by saving user messages, slots, intents or any other data available throughout the session. For more information about the lifespan of the profile, see the [CognigyScript](../../build/cognigyscript.md#life-span-of-cognigy-objects) page.

## Accessing the Profile object


Flow nodes can dynamically access **Profile** properties via [Tokens](../../build/tokens.md) or [CognigyScript](../../build/cognigyscript.md) e.g. `{{ " {{profile.property}}" }}`. The Cognigy Script used to access the profile object follows the dot-notation `property.child.child`.

**Example Profile Object**

```JavaScript
{
    "firstname": "Thijs",
    "lastname": "Waanders"
}
```

* `{{ " {{profile.firstname}}" }}` would return `Thijs`

Flow nodes can also be used to update the stored profile data for a user. Find out more about which nodes to use on the [Nodes](../../build/node-reference/analytics/overview.md) page.