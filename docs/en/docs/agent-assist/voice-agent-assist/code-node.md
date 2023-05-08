---
title: "Agent Assist for Voice"
slug: "voice-agent-assist-code-node"
hidden: true
---

# Agent Assist for Voice

## Code Node

To submit all relevant information (`aawBaseUrl`, `projectId`, `organisationId`, `configId`, `URLToken`, `sessionId` and `userId`) to your Contact Center to connect to the right session and the right Agent Assist Workspace you will need a `Code node` before your `Transfer`.

The Code Node below will generate a `UUIValue` that will be forwarded as a sip header while transfering the call:

!!! note
    This is currently scoped for the embedding into Genesys Cloud CX. Please note that further information might be needed for the embedding into other Contact Centers.

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



## More information for Voice Use Cases

- [Transfer Node](transfer-node.md)
- [Webhook Endpoint](webhook-endpoint.md)
- [Agent Assist for Voice](../agent-assist/voice-agent-assist/voice-overview.md)

## More general information

- [Agent Assist Workspace](overview.md)
- [Getting started with Agent Assist](getting-started.md)
- [Agent Assist Configuration](configuration.md)
- [Agent Assist Nodes](../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist Embedding](embedding.md)
- [Agent Assist for Chat](chat-agent-assist.md)
