---
title: "Voice Copilot"
slug: "voice-copilot"
hidden: false
---

# Voice Copilot

[![Version badge](https://img.shields.io/badge/Updated in-v4.66-blue.svg)](../../../release-notes/4.66.md)

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/voice-copilot.png" width="100%" />
</figure>

The Voice Copilot Endpoint handles transcripts from voice calls via webhooks, processes them in real time and sends them to [Agent Copilot](../../../ai-copilot/overview.md) Flows. After receiving a transcript, the Endpoint passes the `userId` and `sessionId` variables to Cognigy.AI to identify the Agent Copilot workspace to be updated.

The Voice Copilot Endpoint works with any [handover provider](../../escalate/handover-reference/overview.md) supported by Cognigy.AI. This Endpoint also supports integration with SIP recording (SIPREC). SIPREC is an open SIP-based protocol for call recording in contact centers. Session Border Controllers (SBC) integrate SIPREC with the contact center.

You can [configure](#configure-the-voice-copilot-endpoint) the Voice Copilot Endpoint in the following setups:

- Cognigy.AI in front of a contact center
- A SIPREC contact center integration in front of Voice Gateway

## Key Features

- Processes real-time speech transcripts.
- Manages user and session identification.
- Supports human agent and user tagging in channels.
- Implements output buffering for sequential message processing.
- Handles SIPREC INVITE requests for call setup.

## Prerequisites

- You have configured an [Agent Copilot Flow](../../../ai-copilot/configuration.md).

## Transcript Data Flow

The data flow shows how the Endpoint receives call transcripts, identifies the speaker, sends the data to Agent Copilot for processing, and then processes the responses to send back.

```mermaid
flowchart TD
    A[Receives call transcript via webhook] --> B[Processes speech data with source identification]
    B --> C[Transforms data for processing in Cognigy.AI]
    C --> D[Sends the data to the Agent Copilot Flow]
    D --> E[Buffers and processes responses]
```

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md)
- [Transformer Functions](../endpoints/transformers/overview.md)

## Set up a Voice Copilot Endpoint

1. In **Deploy > Endpoints**, click **+ New Endpoint**.
2. In the **New Endpoint** section, configure the following:
    - **Endpoint Type** — select **Voice Copilot**.
    - **Name** — enter a unique name.
    - **Flow** — select a Flow from the list.
3. In the **Configuration Information** section, copy the Endpoint URL for later use in the Transfer Node if you use [Cognigy.AI in front](#configure-the-voice-copilot-endpoint) of your contact center.

## Configure the Voice Copilot Endpoint

=== "Cognigy.AI in Front"

    Configure the Voice Copilot Endpoint in a Transfer Node:

    1. In **Build > Flows**, select a voice Flow from the list.
    2. In the Transfer Node, select the **Dial** transfer type.
        1. Activate the **Enable Copilot** setting.
        2. Enter the **Copilot Headers Key**. The key is provider-dependent. For example, for Genesys, the key is `User-to-User`. The generated value becomes accessible after engaging the Transfer Node, located in the Input object as `{{ "{{input.UUIValue}}" }}`. You don't need to handle this value manually. It is automatically generated and added to the header.
        3. In the **Transcribe** section, enter the Voice Copilot Endpoint URL in the **Transcript Webhook** field. You need to copy this Endpoint URL from the **Endpoint URL** field in the Endpoint settings. For example, `https://endpoint.cognigy.ai/<your-endpoint-id>`. This setup ensures that the Voice Copilot Endpoint receives the transcript and the corresponding session and user IDs, ensuring the transcript is correctly matched with the Agent Copilot workspace.

=== "SIPREC Contact Center Integration in Front"

    When a call is transferred to a human agent, [Voice Gateway](../../../voice-gateway/overview.md) transcribes the audio from a SIPREC call and sends it to the Voice Copilot Endpoint for processing. This approach replaces the [user ID and session ID](../../analyze/user-and-session-identification.md) for contact center-specific identifiers, for example, agent ID and conversation ID.

    **Configure a SIPREC Contact Center Integration**

    On the SIPREC contact center side, configure the following:

    1. In the SIPREC call settings, set the Voice Gateway IP addresses as the target of the audio stream. You can find the Voice Gateway IP addresses in the Voice Gateway Self-Service Portal under [Carriers](../../../voice-gateway/webapp/carriers.md). Make sure you allow your carriers to send data to and receive data from Voice Gateway's SIP signaling IPs.
    2. In the SIP headers, you need to provide identifiers that match the identifiers of the Agent Copilot workspace. This approach ensures that the transcripts are correctly transferred from the SIPREC call to the Agent Copilot workspace. For example, if you use agent ID and conversation ID in the contact center, configure the SIP headers as follows:

    ```text
    X-Session-ID = {conversationId}
    X-User-ID = {agentId}
    ```

    **Configure a Voice Gateway Application**

    1. In the Voice Gateway Self-Service Portal, configure an [application](../../../voice-gateway/webapp/applications.md) to receive the call transcripts.
    2. In **Accounts**, select the account you want to use for SIPREC calls and select the application you've just configured in the **Application for SIPREC calls** list.

    **Configure Agent Copilot**

    To ensure that the [Agent Copilot workspace](../../../ai-copilot/overview.md) receives the transcripts from the SIPREC call, the identifiers of the Agent Copilot workspace URL and of the SIP headers must match. For example, if you use agent ID and conversation ID in the SIP headers, the Agent Copilot URL should be as follows:

    ```text
    ${AICopilotBaseUrl}/?userId=${agentId}&sessionId=${conversationId}&URLToken=${URLToken} 
    ```

## More Information

- [Agent Copilot](../../../ai-copilot/overview.md)
- [Voice Gateway](../../../voice-gateway/overview.md)
