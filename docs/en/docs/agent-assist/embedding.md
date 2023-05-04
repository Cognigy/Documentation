---
title: "Embedding"
slug: "embedding"
hidden: true
---

# Agent Assist Workspace Embedding

Agent Assist is Supported by all handover providers.

You can choose how to embed the Agent Assist Workspace into the provider contact center, for example, Genesys:

- [Use Voice Gateway with a provider in front](#voice-use-case)
- [Use Cognigy in front, allowing for a native handover](#chat-use-case)

Below are examples for the Genesys provider. To find more information on how to set up handover integration for Genesys Cloud, read [Genesys Cloud Handover Integration](https://support.cognigy.com/hc/en-us/articles/6229147435292-Genesys-Cloud-Handover-Integration).

## Voice Use Case

1. The call starts with Genesys, gets forwarded to the virtual voice agent, and then transferred back to a human agent.
2. While transferring back to the agent, use a Transfer Node in the Dial mode to stay within the session. This Node listens and transcribes the audio stream of the customer and the human agent.
3. Use a Code Node to submit `sessionId`, `orgId`, `projectId`, `userId`, and `configId` to Genesys to connect to the right session.

Code example: 

```js
/**
* This script will generate a "User-To-User" header payload for SIP transactions
* according to the convention which Genesys Cloud is following.
*
* You will be able to access it through input.UUIValue after running this code node.
*
* Make sure to update the values within the "CHANGEME" part when using this script in other places!
*/


/////////////////////////////////////////////////////////////////////////////////////////
// START OF "CHANGEME"
/////////////////////////////////////////////////////////////////////////////////////////

const aawBaseUrl = 'https://agent-assist-dev.cognigy.ai';
const projectId = '64257f5a9ebf0514e9c1c7bb';
const organisationId = '63babf6e92add771923e87b7';
const configId = '349e0111-de1c-413d-899d-92931c6ab3b9';
const URLToken = '0dc21ad1d09e3ca9be44be5546178a0af8f541f4cdebc1070853eadd33c13f2a';

/////////////////////////////////////////////////////////////////////////////////////////
// END OF "CHANGEME"
/////////////////////////////////////////////////////////////////////////////////////////



const encodeHex = (plain: string) => {
return plain.split("")
.map(c => c.charCodeAt(0).toString(16).padStart(2, "0"))
.join("");
}

const createUUIValue = (plain: string) => {
return `00${encodeHex(plain)};encoding=hex`;
}

const assistUserId = `assist-${input.userId}`;
const assistSessionId = `assist-${input.sessionId}`

const uui = `${aawBaseUrl}/?userId=${assistUserId}&sessionId=${assistSessionId}&URLToken=${URLToken}&organisationId=${organisationId}&projectId=${projectId}&configId=${configId}`;

input.assistUserId = assistUserId;
input.assistSessionId = assistSessionId;
input.UUIValue = createUUIValue(uui);
```
  
The transcription is forwarded to a webhook endpoint that directs to the Agent Assist Workspace, triggering the tile updates. This approach lets us use Voice Gateway without middleware to capture the audio stream.


## Chat Use Case

1. The conversation starts via Webchat Widget.
2. The virtual agent hands over to a human agent.
3. During the handover, Cognigy also submit the `sessionId`, `orgId`, `projectId`, `userId`, and `configId` to Genesys. 

This approach lets you connect to the right session and send tile updates. There is no need for manual effort, as the configuration and flow are set within the Endpoint.


## More information

- [Agent Assist Workspace](overview.md)
- [Getting started with Agent Assist](getting-started.md)
- [Agent Assist Configuration](configuration.md)
- [Agent Assist Nodes](../ai/flow-nodes/agent-assist/overview.md)
