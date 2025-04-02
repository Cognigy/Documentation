---
title: "Generic Voice Nodes" 
slug: "generic-voice-nodes" 
hidden: false 
---

# Generic Voice Nodes

{! _includes/ai/node-reference/voice/ac-and-generic-node-deprecation.md!}

The Generic Voice Nodes are a set of Nodes for creating voice Flows that are not specific to one Endpoint.
These Voice Nodes are compatible with both voice integrations: AudioCodes and Voice Gateway.

### [Barge In - Config](barge-in-config.md)

This Node is a session config that enables the interruption of the voice AI Agent.

When executed, the settings will apply for the remainder of the session.

### [Continuous ASR - Config](continuous-asr-config.md)

Continuous ASR enables the system to concatenate multiple STT recognitions of the user
and then send them as a single textual message to the voice AI Agent.

### [DTMF Collect - Config](dtmf-collect-config.md)

Enables capturing of DTMF signals by the voice AI Agent during the entire call session.

When executed, the settings will apply for the remainder of the session.

### [Hang Up](hang-up.md)

This Node instructs the system to end the call.

### [Mute Speech Input](mute-speech-input.md)

This Node controls when speech user inputs can be collected in your Flow.

### [Play URL](play-url.md)

The Play URL Node lets you stream a sound file into the call with the ability to loop it. MP3 and WAV encoded files are supported.

### [Send Metadata](send-metadata.md)

The Send Metadata Node sends metadata via SIP INFO messages to the connected SIP trunk.

### [Session Speech Parameters - Config](session-speech-parameters-config.md)

This Node enables the change of speech parameters during the Flow.

### [Transfer](transfer.md)

This Node lets pass an active call to a tel or sip target.

### [User Input Timeout - Config](user-input-timeout-config.md)

This Node defines the action that the AI Agent should take if it does not receive any input from the user within a certain timeframe.