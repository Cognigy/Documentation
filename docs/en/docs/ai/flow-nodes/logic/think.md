---
 title: "Think" 
 slug: "think" 
 hidden: false 
---
# Think

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/1e2ebc4-think.jpg" width="100%" />
</figure>

## Description
<div class="divider"></div>

A [Think Node]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#think) is used to re-execute the Flow within one invocation.

Upon reaching this Node, the Flow will stop and then restart executing at the Start Node.

You may specify an input text and input data which will then be treated as a simulated message from the user.

!!! note "Think NLU"
    When a Flow gets executed again via "Think", the new message will also be sent through the NLU pipeline again, finding Slots and matching Intents

## Settings

| Parameter | Type               | Description                             |
|-----------|--------------------|-----------------------------------------|
| Text      | CognigyScript      | A simulated message text from the user. |
| Data      | CognigyScript JSON | Simulated message data from the user.   |

You can select two **"Advanced"** options to integrate a Think Node functionality in your Flow:

1. **Think Text** (default setting)
2. **Trigger Intent**

[![Version badge](https://img.shields.io/badge/Added in-v4.2.0-blue.svg)]({{config.site_url}})

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/558c716-Screen_Shot_057.PNG" width="100%" />
</figure>

Using the **"Trigger Intent"** option you can re-execute the flow while forcing that a specific intent is found, instead of getting the intent result from our NLU engine. It is exactly the same behaviour as described in ["Trigger Intent"]({{config.site_url}}ai/nlu/nlu-overview/trigger-intent/).

You can trigger an intent with a user input like "cIntent:orderFood", then the intent "orderFood" will be triggered. 
Using the Think Node you can have the same behaviour by choosing the "Trigger Intent" option, and "orderFood" in the "intent to trigger" field.

## Alternatives

When you need to process user input or other text in the middle of a Flow to retrieve an NLU result, and you do not want to restart the Flow from the Start Node, use the [Execute Cognigy NLU Node](../nlu/execute-cognigy-nlu.md).