---
title: "Call Recording"
slug: "call-recording"
hidden: false
---

# Call Recording

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/audiocodes/call-recording.png" width="80%" />
  <figcaption>AudioCodes Call Recording</figcaption>
</figure>

## Description

{! _includes/ai/node-reference/voice/ac-and-generic-node-deprecation.md!}

The Call Recording Node controls the voice recording capabilities of the conversation.

Recording is done by the SBC (SRC) using the SIPRec protocol and functioning as the Session Recording Client (SRC).
The session recording server (SRS) can be, for example, AudioCodes SmartTAP recording solution or any other SRS.

| Parameter             | Type          | Description                                                                                               |
|-----------------------|---------------|-----------------------------------------------------------------------------------------------------------|
| Activity              | Select        | Whether to start or stop a call recording.                                                                |
| Call Recording Server | CognigyScript | Defines the SRS as an IP Group name (as configured on the SBC) to record the call.                        |
| Call Recording ID     | CognigyScript | Defines the recording ID session, which is forwarded by the SBC to the SRS in the XML body.               |
| Destination Username  | CognigyScript | Defines the username that is used in the SIP Request-URI and To headers of the INVITE request for SIPRec. |
