---
title: "AudioCodes Nodes" 
slug: "audiocodes" 
hidden: false
---

# AudioCodes

{! _includes/ai/node-reference/voice/ac-and-generic-node-deprecation.md!}

AudioCodes Nodes help you build a voice agent using [AudioCodes configuration](../../../../deploy/endpoint-reference/audiocodes.md).

### [Call Recording](call-recording.md)

This Node controls the voice recording capabilities of the conversation.

### [Hang Up](hangup.md)

This Node instructs AudioCodes to end the call.

### [Play URL](play-url.md)

This Node lets you retrieve a WAV file from a URL location and play it back to the user.

### [Send Message](send-message.md)

This Node sends a text (optionally with SSML) to AudioCodes, which then turns this text into speech (TTS) and outputs it to the caller.

### [Send Metadata](send-meta-data.md)

This Node sends metadata via SIP INFO messages to the connected SIP trunk.

### [Set Session Parameters](set-session-params.md)

This Node configures the AudioCodes Session. All parameters set within this Node are valid for the remainder of the session unless overwritten, either directly or by activity parameters.

### [Transfer](transfer-vg.md)

This Node enables the forwarding of an active call to a Tel or SIP target.
