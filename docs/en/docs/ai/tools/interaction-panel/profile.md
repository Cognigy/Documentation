---
 title: "Profile" 
 slug: "profile" 
 hidden: false 
---
# Profile

The Profile is a JSON object which stores persistent information about the end-user.

Every contact that connects to Cognigy.AI has their own **Contact Profile** which is stored within the platform. When a contact disconnects from Cognigy.AI, the **Profile Data** is retained in the database and retrieved upon reconnection with the same user ID. This enables multichannel conversations to take place by accessing the stored user profile when the user connects from an alternate channel.

The [Flow]({{config.site_url}}ai/resources/build/flows/) can read from and write to the **Profile** by saving user messages, slots, intents or any other data available throughout the session. For more information about the lifespan of the profile, see the [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/#cognigy-objects-life-span/) page.

## Accessing the Profile object
<div class="divider"></div>

Flow nodes can dynamically access **Profile** properties via [Tokens]({{config.site_url}}ai/resources/manage/tokens/) or [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) e.g. `{{ " {{profile.property}}" }}`. The Cognigy Script used to access the profile object follows the dot-notation `property.child.child`.

**Example Profile Object**

```JavaScript
{
    "firstname": "Thijs",
    "lastname": "Waanders"
}
```

* `{{ " {{profile.firstname}}" }}` would return `Thijs`

Flow nodes can also be used to update the stored profile data for a user. Find out more about which nodes to use on the [Flow Nodes]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#profile-nodes) page.