---
title: "Hang Up" 
slug: "hang-up" 
hidden: false 
tags:
  - Voice Gateway
  - Hangup
---

# Hang Up

[![Version badge](https://img.shields.io/badge/Updated in-v4.99-blue.svg)](../../../../../release-notes/4.99.md)

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/vg/hang-up.png" width="80%" />
  <figcaption>Voice Gateway Hang Up Node</figcaption>
</figure>

## Description

The Hang Up Node instructs Voice Gateway to end the call.

| Parameter               | Type   | Description                                                                                                                                                                                                                                              |
|-------------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Reason for hang up      | Text   | The reason for hanging up, which is shown in logs                                                                                                                                                                                                        |
| Enable Immediate Hangup | Toggle | When this setting is enabled, the ongoing call will be terminated immediately, bypassing any active operations that are currently awaiting execution. A typical use case is to automatically end an outbound call when an answering machine is detected. |