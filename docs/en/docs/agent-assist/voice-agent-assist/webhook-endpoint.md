---
title: "Agent Assist for Voice"
slug: "voice-agent-assist-webhook-endpoint"
hidden: true
---

# Agent Assist for Voice: Webhook Endpoint 

A Webhook Endpoint needs to be created to receive the transcription and forward it to the Agent Assist Workspace Flow, triggering widget updates.

### Transformers

In the Endpoint configuration, enable input and output transformers.

To ensure that the transcription is received in a format that is easy to work with, add the following transformer code to the Transformer section of the Endpoint. This code will render user and agent messages and forward them to the flow.

With this configuration, you can use the `Agent Message` token to create if-conditions and configure actions based on user and agent input.

```js
createWebhookTransformer({

	/**
	 * This transformer is executed when receiving a message
	 * from the user, before executing the Flow.
	 *
	 * @param endpoint The configuration object for the used Endpoint.
	 * @param request The Express request object with a JSON parsed body.
	 * @param response The Express response object.
	 *
	 * @returns A valid userId, sessionId, as well as text and/or data,
	 * which has been extracted from the request body.
	 */
	handleInput: async ({ endpoint, request, response }) => {

		/**
		 * Extract the userId, sessionId and text
		 * from the request. Example:
		 *
		 * const { userId, sessionId, text, data } = request.body;
		 * 
		 * Note that the format of the request body will be different for
		 * every Endpoint, and the example above needs to be adjusted
		 * accordingly.
		 */
		const { userId, sessionId } = request.query;

		const source = (() => {
			switch (request.body.speech.channel_tag) {
				case 1:
					return "agent";
				case 2:
					return "user";
				default: 
					return null;
			}
		})();

		const text = request.body.speech.alternatives[0].transcript;

		const data = {
			source
		};

		return {
			userId,
			sessionId,
			text,
			data
		};
	},

	/**
	 * This transformer is executed on every output from the Flow.
	 * For Webhook based transformers, the return value of this transformer
	 * will be sent directly to the user.
	 *
	 * @param processedOutput The output from the Flow that has been processed into the final object
	 * that will be sent to the user. It is structured according to the data structure used
	 * on the specific Endpoint channel.
	 *
	 * @param output The raw output from the Flow.
	 * @param endpoint The configuration object for the used Endpoint.
	 * @param userId The unique ID of the user.
	 * @param sessionId The unique ID for this session. Can be used together with the userId
	 * to retrieve the sessionStorage object.
	 *
	 * @returns An object that will be sent to the user, unchanged. It therefore has to have the
	 * correct format according to the documentation of the specific Endpoint channel.
	 */
	handleOutput: async ({ processedOutput, output, endpoint, userId, sessionId }) => {
		return null;
		return processedOutput;
	},

	/**
  	 * This transformer is executed when the Flow execution has finished.
	 * Since all outputs have been sent to the user, this transformer does not return anything.
	 *
	 * @param userId The unique ID of the user.
	 * @param sessionId The unique ID for this session. Can be used together with the userId
	 * to retrieve the sessionStorage object.
	 *
	 * @param endpoint The configuration object for the used Endpoint.
	 *
	 * @returns This transformer cannot return anything.
	 */
	handleExecutionFinished: async ({ sessionId, userId, endpoint }) => {

	},

	/**
	 * This transformer is executed when receiving an inject event.
	 * The extracted text and data will be injected into the conversation
	 * for the given user in the given session.
	 *
	 * @param request The Express request object with a JSON parsed body.
	 * @param response The Express response object.
	 * @param endpoint The configuration object for the used Endpoint.
	 *
	 * @returns A valid userId, sessionId, as well as text and/or data,
	 * which has been extracted from the request body. The text and data
	 * will be injected into this conversation.
	 */
	handleInject: async ({ request, response, endpoint }) => {

		/**
		 * Extract the userId, sessionId and text
		 * from the request. Example:
		 *
		 * const { userId, sessionId, text, data } = request.body;
		 * 
		 * Note that the format of the request body will be different for
		 * every Endpoint, and the example above needs to be adjusted
		 * accordingly.
		 */
		const userId = "";
		const sessionId = "";
		const text = "";
		const data = {}

		return {
			userId,
			sessionId,
			text,
			data
		};
	},

	/**
	 * This transformer is executed when receiving a notify event.
	 * The extracted text and data will be sent directly to the
	 * given user in the given session as a notification.
	 *
	 * @param request The Express request object with a JSON parsed body.
	 * @param response The Express response object.
	 * @param endpoint The configuration object for the used Endpoint.
	 *
	 * @returns A valid userId, sessionId, as well as text and/or data,
	 * which has been extracted from the request body. The text and data
	 * will be sent directly to the user.
	 */
	handleNotify: async ({ request, response, endpoint }) => {

		/**
		 * Extract the userId, sessionId and text
		 * from the request. Example:
		 *
		 * const { userId, sessionId, text, data } = request.body;
		 *
		 * Note that the format of the request body will be different for
		 * every Endpoint, and the example above needs to be adjusted
		 * accordingly.
		 */
		const userId = "";
		const sessionId = "";
		const text = "";
		const data = {}

		return {
			userId,
			sessionId,
			text,
			data
		};
	}
})
```

## More information for Voice Use Cases

- [Code Node](code-node.md)
- [Transfer Node](transfer-node.md)
- [Agent Assist for Voice](voice-overview.md)

## More general information

- [Agent Assist Workspace](../overview.md)
- [Getting started with Agent Assist](../getting-started.md)
- [Agent Assist Configuration](../configuration.md)
- [Agent Assist Nodes](../../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist Embedding](../embedding.md)
- [Agent Assist for Chat](../chat-agent-assist.md)
