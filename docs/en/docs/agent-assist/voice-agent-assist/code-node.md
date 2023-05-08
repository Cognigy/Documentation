---
title: "Agent Assist for Voice"
slug: "voice-agent-assist-code-node"
hidden: true
---

# Agent Assist for Voice: Code Node 

To connect to the correct session and Agent Assist Workspace in your contact center, submit all relevant information, including `aawBaseUrl`, `projectId`, `organizationId`, `configId`, `URLToken`, `sessionId`, and `userId`. To do this, you will need to add a Code Node before your Transfer Node.

The following Code Node will generate a **UUIValue**, which will be forwarded as a SIP header when transferring the call:

{! _includes/agent-assist/genesys-note.md !}

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

const aawBaseUrl = 'https://agent-assist-app.cognigy.ai';
const projectId = 'your projectId';
const organisationId = 'your organisationId';
const configId = 'your Agent Assist Configs Reference Id';
const URLToken = 'the embedding URL of your Agent Assist Workspace';

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


## More information for Voice Use Cases

- [Transfer Node](transfer-node.md)
- [Webhook Endpoint](webhook-endpoint.md)
- [Agent Assist for Voice](voice-overview.md)

## More general information

- [Agent Assist Workspace](../overview.md)
- [Getting started with Agent Assist](../getting-started.md)
- [Agent Assist Configuration](../configuration.md)
- [Agent Assist Nodes](../../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist Embedding](../embedding.md)
- [Agent Assist for Chat](../chat-agent-assist.md)
