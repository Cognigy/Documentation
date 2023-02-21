---
 title: "Billing" 
 slug: "billing" 
 hidden: false 
---

# Billing

Cognigy has only one billable unit - a *conversation*. A billed conversation is a chat or voice interaction between a user and a virtual or human agent, and represents one unit of consumption.

The billed conversation begins when a user sends a first chat or voice message (input). 

The conversation ends for one of the following reasons:

- The user left a chat.
- The conversation has more than 50 user inputs.
  The 51 input starts a new conversation.
- The conversation begins on one day and ends on another.
  The 1 user input on another day starts a new conversation.  

## Common scenarios

### Scenario 1

A user sent less than 50 inputs within the conversation.

Example: 50 user inputs
Billing: It will be charged as one conversation.

### Scenario 2

A user sent more than 50 inputs within the conversation.

Example: 101 user inputs
Billing: it will be charged as 3 conversations.

### Scenario 3

A user sent less than 50 messages within the conversation over two calendar days.

Example: 49 user inputs
Billing: it will be charged as 2 conversations.

The time zone the administrator sets in the Cognigy settings determines the start of the day for your users. To change the time zone value, contact your administrator.

### Scenario 4

A user sent more than 50 messages within the conversation over two calendar days.

Example: 78 user inputs
Billing: it will be charged as 2 conversations.

The time zone the administrator sets in the Cognigy settings determines the start of the day for your users. To change the time zone value, contact your administrator.

## Additional billing 

You can be charged if you have enabled the [Transformer](../ai/endpoints/transformers/transformers.md) setting.

Suppose Cognigy.AI returns a `falsy` value (for example, `null`, `undefined`, or `false`) from an Input, Inject, or Notify Transformer. In that case, Cognigy.AI will stop the execution at this point and count it as one input of a conversation.

Example: 50 user inputs + 1 Transformer `falsy` operation -> 51 inputs
Billing: it will be charged as 2 conversations.
