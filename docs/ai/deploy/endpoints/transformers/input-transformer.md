---
 title: "Input Transformer" 
 slug: "input-transformer" 
 hidden: false 
---
# Input Transformer

The `Input Transformer` is triggered on every message from the user before the Flow is executed. This makes it possible to manipulate the text before it has been sent to the Flow, communicate with external systems, implement integrations with a new channel, and much more.

The `Input Transformer` is configured by implementing the ``handleInput`` function in the Transformer in the Endpoint.

 <figure>
  <img class="image-center" src="../../../../../_assets/ai/deploy/endpoints/transformers/handle-input-transformer.png" width="100%" />
</figure>

## Transformer Function Arguments

The `handleInput` function gets a configuration object as an argument. This object always contains the key `endpoint`, which contains the Endpoint configuration. The rest of the keys in the object depends on the [base type](transformers.md#different-base-transformer-types) of the Transformer. 
An overview of the keys in the object can be seen in the table.

| Argument | Description                                                                                                                                    | Webhook Transformers | REST Transformers | Socket Transformers |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|-------------------|---------------------|
| endpoint | The configuration object for the Endpoint. Contains the URLToken etc.                                                                          | X                    | X                 | X                   |
| request  | The Express request object with a JSON parsed body.                                                                                            | X                    | X                 |                     |
| response | The Express response object.                                                                                                                   | X                    | X                 |                     |
| payload  | The payload object contains the userId, sessionId, text and data that was sent through the Socket. It also contains the channel of the client. |                      |                   | X                   |

## Return Values of the Transformer

## Regular Transformer Usage
The `Input Transformer` can return a valid user ID, session ID and text and/or data that should be sent to the Flow. These values should be extracted from the body of the request. It is important to note that the format of the request body will differ based on the specific channel being used, i.e. a request from Alexa looks very different compared to a request from Facebook (Meta) Messenger. It is, therefore, necessary to read the documentation from the specific channel to know how the request body is formatted. 

Example:

```javascript
return {
 userId: request.body.user,
 sessionId: request.body.conversation,
 text: request.body.messageText,
 data: { "test": 1 }
};
```

## Partial Transformer Results
If `undefined` is returned for userId, sessionId, text or data, the already extracted value from the Endpoint is used.

The following example overwrites `text` and `data`, but keeps the userId and sessionId as they are:

```javascript
return {
 userId: undefined,
 sessionId: undefined,
 text: request.body.messageText,
 data: { "test": 1 }
};
```

## Stopping Execution
If the `Input Transformer` returns a falsy value altogether, then the message from the user is never sent to the Flow.

Example:

```javascript
return null;
```

### Transformers and Conversation Counts
Conversations in Cognigy.AI are only counted if the Input Transformer returns a non-falsy result.


!!! warning "Return Value Validation"
    The return value of the `Input Transformer`, if provided, will be validated against a set of rules and rejected if the rules are not met. 
     Every value can return undefined. If something else is returned, these rules apply:

    - userId is a string with max length of 256 characters.
    - sessionId is a string with max length of 256 characters.
    - text is a string with a max length of 10000 characters.
    - data is an object

### Transformers and Event Messages

The Webchat and the Socket.IO Endpoints produce event messages that indicate user activity, such as whether the user is connected (`user-connected`) or disconnected  (`user-disconnected`). These event messages will not trigger Flows and will not be counted, but you may encounter them by using the Input Transformers:

```json
{
 "userId": "<current-user-id>",
 "sessionId": "<current-session-id>",
 "text": "",
 "data": {
  "_cognigy": {
"event": {
 "type": "user-connected"
}
  }
 }
}
```

The event messages inform Handover Providers about user activity, allowing human agents to determine if the user is still engaged in the conversation. 


When you come across these event messages in the Input Transformers, we advise you to pass them on without any changes. The event messages can only be recognized as such if their data payload follows a specific format. To achieve this result, you can use the following code snippet in your Input Transformer:

```javascript
{

 handleInput: async ({ payload, endpoint }) => {
  if (!!payload.data?._cognigy?.event) {
// pass on "event messages" without modification
			return payload;
		}

		// rest of your input transformer code
	}
}
```