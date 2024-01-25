---
title: "Think" 
slug: "think"
hidden: false 
---

# Think

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/think.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node is used to re-execute the Flow within a single iteration. The Node is helpful when you need to process user input in the middle of a Flow to retrieve an NLU result.

Upon reaching the Think Node, the Flow will stop and then restart executing at the Start Node.
This behavior can be changed if you use an Execute Flow Node in the parent Flow to access a child Flow with a Think Node. When the Think Node is reached, the child Flow stops,
and execution resumes from the beginning of the parent Flow at its Start node.

## Settings

| Parameter         | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Think Action      | Select        | A type of action to execute:<br> - **Think Text (default)** — lets you rerun the Flow with input text and/or input data, which will then be treated as a simulated message from the end user. This input will be sent through the NLU engine again, identifying Slots and matching Intents. This option is selected by default. <br> - **Trigger Intent** — lets you rerun the Flow, ensuring a specific Intent is found instead of relying on the NLU engine. This approach is similar to the process outlined in [Trigger Intent](../../nlu/nlu-overview/trigger-intent.md), where using an input like `cIntent:orderFood` triggers the `orderFood` Intent. You can achieve the same result by selection this option and entering `orderFood` in the **Intent to trigger** field. |
| Text to think     | CognigyScript | This field appear if the **Think Text (default)** action is selected.<br><br> The provided text serves as a message to emulate user input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Data to think     | JSON          | This field appear if the **Think Text (default)** action is selected.<br><br> The provided data serves as a message to emulate user input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Intent to trigger | CognigyScript | This field appear if the **Trigger Intent** action is selected.<br><br> Cognigy will trigger the Intent using the [`cIntent`](../../nlu/nlu-overview/trigger-intent.md) method.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Alternatives

When you need to process user input or other text in the middle of a Flow to retrieve an NLU result, and you do not want to restart the Flow from the Start Node, use the [Execute Cognigy NLU Node](../nlu/execute-cognigy-nlu.md).