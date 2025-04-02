---
title: "Voice Gateway Nodes" 
slug: "voice-gateway" 
hidden: true 
---

# Voice Gateway Nodes

Voice Gateway Nodes help you build a voice agent using [Voice Gateway configuration](../../../../../voice-gateway/overview.md).

<div class="grid cards" style="text-align: center;" style="text-align: center;" markdown>

-   :material-record-circle:{ .lg .middle } __[Call Recording](call-recording.md)__

    ---

    The Call Recording Node starts or stops a conversation recording.

-   :material-dialpad:{ .lg .middle } __[DTMF](dtmf.md)__

    ---

    The DTMF Node plays DTMF digits to the caller.

-   :material-phone-hangup:{ .lg .middle } __[Hang Up](hangup.md)__

    ---

    The Hang Up Node instructs Voice Gateway to end the call.

-   :material-microphone-off:{ .lg .middle } __[Mute Speech Input](mute-speech-input.md)__

    ---

    The Mute Speech Input Node controls when speech and DTMF user inputs are collected in your Flow.

-   :material-play:{ .lg .middle } __[Play](play.md)__

    ---

    The Play Node[^1] lets you stream a sound file into the call, also in a loop. The Node supports encoded MP3 and WAV files.

-   :material-information:{ .lg .middle } __[Send Metadata](send-metadata.md)__

    ---

    The Send Metadata Node sends metadata via SIP INFO messages to the connected SIP trunk.

-   :material-cog-refresh:{ .lg .middle } __[Set Session Config](set-session-config.md)__

    ---

    The Set Session Config Node configures the Voice Gateway session. This configuration applies for the rest of the session unless overwritten, either directly or by activity parameters.

-   :material-phone-forward:{ .lg .middle } __[Transfer](transfer.md)__

    ---

    The Transfer Node lets you transfer an ongoing call to a Tel or SIP target.

</div>

[^1]: This Node can be configured with [Parameter Details](parameter-details.md).
