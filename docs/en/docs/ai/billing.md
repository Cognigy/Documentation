---
 title: "Billing" 
 slug: "billing" 
 hidden: false 
---

# Billing

[![Version badge](https://img.shields.io/badge/Updated in-v4.52-blue.svg)](../release-notes/4.52.md)

Cognigy has only one billable unit - a *conversation*. A billed conversation is an interaction between a user and a virtual or human agent, and represents one unit of consumption.

The billed conversation begins when a user sends their initial *input*, which can be either a chat or voice message.

The conversation will be ended for any of the following reasons:

- The user left a chat. 
- The human agent resolved a conversation. 
- The conversation has more than 50 user inputs. The 51st input will begin a new conversation. 
- The conversation is limited to a 24-hour period. Any user input sent after this time will begin a new conversation. 
- The user reloaded a browser page.

## Common scenarios

The following scenarios provide examples of billing for conversations.

The 24-hour period is determined according to your server time zone setting. Contact your administrator if you want to change this time zone setting.

### Scenario 1

A user sent less than 50 inputs during the conversation within 24 hours.

Example: 50 user inputs.

Billing: It will be charged as one conversation

### Scenario 2

A user sent more than 50 inputs during the conversation within 24 hours.

Example: 101 user inputs.

Billing: It will be charged as 3 conversations.

### Scenario 3

A user sent less than 50 messages during the conversation within 30 hours.

Example: 49 user inputs.

Billing: It will be charged as 2 conversations.

### Scenario 4

A user sent more than 50 messages during the conversation within 30 hours.

Example 1: 78 user inputs -> 49 within 24 hours and 29 within the next 6 hours.

Billing 1: It will be charged as 2 conversations.

Example 2: 78 user inputs -> 5 within 24 hours, 73 within the next 6 hours.

Billing 2: It will be charged as 3 conversations.

## xApps

xApps are a separately licensed Cognigy feature which must be purchased as an add-on to the Cogngiy.AI license.

In addition, the general billable unit for Cognigy.AI, the conversation, will be influenced if xApps are used. This is because an xApp session is a part of a Cognigy session.

The xApp submit data payload messages received by the Flow are counted as billing-relevant messages of the existing conversation.

Cognigy reserves the right to change the billing of xApps in the future.

### Scenario 1

During an xApp session, only the xApp submit data payload messages sent by the user are billed. 

Example: A user logs in by entering their login credentials and clicking the Authorize button (submit). Then, the user selects a seat and clicks the Confirm button (submit). Finally, the user enters their card details on the payment page and clicks the Order button (submit). This scenario involves 3 user inputs.

Billing: It will be charged as 1 conversation. 

### Scenario 2

Apart from the xApp nodes, a Flow may contain nodes that start and complete the main session. In this case, the xApp submit data payload messages and other user inputs from the main session are counted as part of the same session and conversation.

Example: A user initiates a chat with a bot and sends 2 messages. This action triggers an xApp session. During the xApp session, the user logs in by entering their login credentials and clicking the Authorize button (submit). Then, the user selects a seat and clicks the Confirm button (submit). Finally, the user enters their card details on the payment page and clicks the Order button (submit). After the xApp session is completed, the bot offers another option, and the user sends 2 more messages. This scenario involves 7 user inputs.

Billing: It will be charged as 1 conversation.

## Additional billing 

If you are using the following Endpoint [Transformers](../ai/endpoints/transformers/transformers.md):

- Input Transformer
- Inject Transformer
- Notify Transformer
  
and you return a `falsy` value from them (for example `null`, `undefined` or `false`), the message processing will be terminated in Cognigy system, and no Flow will be executed. In this case, Cognigy will charge 1 conversation per 50 Transformer executions.

Example: You built an Endpoint which only uses the Input Transformer to implement a custom Handover Provider and you are always returning a `falsy` value of `null` from it. 50 Input Transformers will be executed for user inputs -> 1 conversation will be charged.