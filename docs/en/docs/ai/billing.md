---
 title: "Cognigy Billing Policy" 
 slug: "billing" 
 hidden: false 
---

# Cognigy Billing Policy

Cognigy has only one billable unit - a *conversation*. A billed conversation is an interaction between a user and a virtual or human agent, and represents one unit of consumption.

The billed conversation begins when a user sends their initial *input*, which can be either a chat or voice message.

The conversation will be ended for any of the following reasons:

- The user left a chat.
- The human agent resolved a conversation.
- The conversation has more than 50 user inputs.
  The 51 input starts a new conversation.
- The conversation begins on one day and ends on another.
  The user input on another day starts a new conversation.  

## Common scenarios

The following scenarios provide examples of billing for conversations.

### Scenario 1

A user sent less than 50 inputs during the conversation within a single calendar day.

Example: 50 user inputs.

Billing: It will be charged as one conversation.

### Scenario 2

A user sent more than 50 inputs during the conversation.

Example: 101 user inputs.

Billing: It will be charged as 3 conversations.

### Scenario 3

A user sent less than 50 messages during the conversation over two calendar days.

Example: 49 user inputs.

Billing: It will be charged as 2 conversations.

The time zone settings determine the start of a new day and, as a result, the beginning of conversation billing for this new day.

### Scenario 4

A user sent more than 50 messages during the conversation over two calendar days.

Example: 78 user inputs.

Billing: It will be charged as 2 conversations.

The time zone settings determine the start of a new day and, as a result, the beginning of conversation billing for this new day.

## Additional billing 

You can be charged if you have enabled the [Transformer](../ai/endpoints/transformers/transformers.md) setting and Cognigy.AI returns a `falsy` value (for example, `null`, `undefined`, or `false`) from an Input, Inject, or Notify Transformer. In that case, Cognigy.AI will stop the execution at this point and count it as one input of a conversation.

Example: 50 user inputs + 1 Transformer `falsy` operation -> 51 inputs.

Billing: it will be charged as 2 conversations.
