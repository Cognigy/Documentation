---
 title: "Call Recording" 
 slug: "call-recording" 
 hidden: false 
---
# Call Recording

[![Version badge](https://img.shields.io/badge/Added in-v4.45-blue.svg)](../../../../../release-notes/4.45.md)

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/vg/call-recording.png" width="50%" />
</figure>

## Description

The Voice Gateway Call Recording Node controls the voice recording capabilities of the conversation. This Node initiates or terminates the recording of a conversation.

The Call Recording Node uses a Voice Gateway API to act as a [SIPREC](https://datatracker.ietf.org/doc/html/rfc7866) client to record the audio using the SIPREC protocol. The recorded audio is sent to a Session Recording Server (SRS) for storage. You can use any SRS for storing audio records.

Note that this Node controls a specific Flow. If you want to enable call recording for all Flows and record entire calls, configure the [Call Recording](../../../../../voice-gateway/webapp/accounts.md#call-recording-configuration) setting on the Voice Gateway Self-Service Portals.

## Parameters

| Parameter             | Type          | Description                                                                                                                                                                                                                                                                                                                                | Activity type        |
|-----------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| Activity              | Select        | Whether to start, stop, pause, or resume a call recording.                                                                                                                                                                                                                                                                                 | -                    |
| Call Recording Server | CognigyScript | Specify an IP group (a collection of IP addresses), for example, `sip:3.208.57.175` or `sip:siprec.cognigy.ai`. <br> The Voice Gateway sends call recordings to an IP group linked to the SRS, ensuring that calls are properly recorded and saved for future use. Based on the setup, the IP group may be linked to multiple SRS servers. | Start Call Recording |
| Call Recording ID     | CognigyScript | Defines the recording session identifier, which is forwarded by the Voice Gateway to the SRS.                                                                                                                                                                                                                                              | Start Call Recording |



