---
title: "Default Reply" 
slug: "default-reply"
description: "Cognigy.AI Default Reply feature provides a configurable, Intent-specific response triggered when the NLU detects a matching Intent from user input."
hidden: false
tags:
  - Cognigy NLU
  - default reply
---

# Default Reply

The _Default Reply_ feature provides a configurable,
Intent-specific response triggered when the NLU model detects a matching Intent from the user input.

## Key Benefits

- **Instant Response Delivery**. A predefined reply, for example, `Thank you for your order`, is sent as soon as the Intent is recognized, improving the user experience with prompt feedback.
- **Flexible Flow Control**.  You can decide whether the Flow proceeds or pauses after the default reply, offering adaptability to different use cases.
- **Enhanced Understanding of User Queries**. With the default reply providing additional context, the AI Agent can better interpret diverse user inputs, leading to improved recognition accuracy and more effective responses.

## Prerequisites

Before using the default reply, ensure the following:

1. A Flow is created in Cognigy.AI with at least one defined Intent.
2. Access to the NLU settings within the Flow to configure the default reply.

## Restriction

- The default reply is tied to specific Intents and requires manual configuration. It won't activate if it is overridden by other settings like attached Flows or Question Node validations.

## How to Use

Add the default reply to a specific Intent.
If you've configured the default reply for multiple Intents, adjust the settings at the Flow level to ensure consistent default reply behavior.

### Add the Default Reply 

1. In the Flow editor, go to **NLU > Intents** and select an Intent. 
2. Go to the **Default Reply** section and configure the following settings:

| **Setting**                           | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Include Default Reply in NLU Training | Defines whether the default reply should be used in the NLU model training. You can select one of the following options:<br>- **Use Flow Settings** — the NLU training settings will follow the configuration in the **Include Default Reply in NLU Training** setting defined in **Settings > Configuration**. <br>- **On** — the default reply will be included in the NLU model training. <br> - **Off** — the default reply won't be used in the NLU model training. | 
| Channel                               | Specifies the channel to which the response applies. The default channel is **AI**.                                                                                                                                                                                                                                                                                                                                                                                      |
| Output Type                           | Specifies the type of response, supporting the same output types as the [Say Node](../../../build/node-reference/basic/say.md). The default output is **Text**.                                                                                                                                                                                                                                                                                                          |
| Reset                                 | Resets the **Output Type** setting to its default value.                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Configure the Default Reply for All Intents in the Flow

1. In the Flow editor, go to **Settings > Configuration** and select an Intent.
2. Go to the **General Flow Logic** section and configure the following settings:

| **Setting**                           | **Description**                                                                                                                                                                                                 |
|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pass Default Reply into Flow          | Passes the default reply into the `nlu.intentMapperResults.finalIntentDefaultReply` Input object for use in Flow logic. The default reply message won't appear in the chat. The setting is disabled by default. |
| Continue Flow after Default Reply     | Continues executing the Flow logic immediately after the default reply has been delivered, without waiting for the user input. The setting is disabled by default.                                              |
| Include Default Reply in NLU Training | Includes the default replies in the NLU model training for matching Intents. This setting is enabled by default and can be customized for each Intent.                                                          |

### How to Test

1. In the Interaction Panel, enter a phrase matching the Intent. For example, `I want to order a pizza`. 
2. Verify that the default reply is sent immediately. 

The Flow continues or pauses depending on how you configured the **Continue Flow after Default Reply** setting.

## Example

Imagine a pizza ordering AI Agent. 

Intent: `Order Pizza`<br>
Default reply: `Great choice! Your order is being processed.`<br>
User Input: `I'd like a pizza`

The NLU detects the Intent, the AI Agent sends the default reply,
and the Flow either continues to ask for toppings or pauses. 

## More Information

- [Intents](overview.md)
- [Example Sentences](example-sentences.md)