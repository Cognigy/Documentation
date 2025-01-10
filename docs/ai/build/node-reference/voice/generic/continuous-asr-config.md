---
title: "Continuous ASR - Config" 
slug: "continuous-asr-config" 
hidden: false 
tags: 
  - Voice Gateway
  - ASR
---

# Continuous ASR - Config

[![Version badge](https://img.shields.io/badge/Updated in-v4.90-blue.svg)](../../../../../release-notes/4.90.md)

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/generic-voice/continuous-asr-config.png" width="80%" />
  <figcaption>Generic Continuous ASR - Config Node</figcaption>
</figure>

## Description

{! _includes/ai/node-reference/voice/ac-and-generic-node-deprecation.md!}

Continuous ASR allows the system to combine multiple STT recognitions from the user and send them as a single textual message to the voice agent.

Once the Node is executed, the settings will remain active for the rest of the session

| Parameter                   | Type          | Description                                                                                                                                                   |
|-----------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable Continuous ASR       | Toggle        | Enables or disables Continuous ASR.                                                                                                                           |
| Continuous ASR Submit Digit | CognigyScript | Defines a special DTMF key that sends the accumulated recognitions to the Flow.                                                                               |
| Continuous ASR Timeout      | Number        | Defines the number of milliseconds of silence before the accumulated recognitions are sent to the Flow. The default value is 3000. The minimum value is 2000. |