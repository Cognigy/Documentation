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
  The 51st input will begin a new conversation.
- The conversation begins on one day and ends on another.
  The user input sent on a different day will begin a new conversation.  

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

The server time zone settings determine the start of a new day and, as a result, the beginning of conversation billing for this new day.

Contact your administrator if you want to change this time zone setting.

### Scenario 4

A user sent more than 50 messages during the conversation over two calendar days.

Example: 78 user inputs.

Billing: It will be charged as 2 conversations.

The server time zone settings determine the start of a new day and, as a result, the beginning of conversation billing for this new day.

Contact your administrator if you want to change this time zone setting.

## Additional billing 

If you are using the following Endpoint [Transformers](../ai/endpoints/transformers/transformers.md):

- Input Transformer
- Inject Transformer
- Notify Transformer
  
and you return a `falsy` value from them (for example `null`, `undefined` or `false`), the message processing will be terminated in Cognigy system, and no Flow will be executed. In this case, Cognigy will charge 1 conversation per 50 Transformer executions.

Example: You built an Endpoint which only uses the Input Transformer to implement a custom Handover Provider and you are always returning a `falsy` value of `null` from it. 50 Input Transformers will be executed for user inputs -> 1 conversation will be charged.