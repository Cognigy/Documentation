---
title: "Debug Message" 
slug: "debug-message" 
hidden: false 
---

# Debug Message

[![Version badge](https://img.shields.io/badge/Added in-v4.83-blue.svg)](../../../../release-notes/4.83.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/message/debug-message.png" width="80%" />
</figure>

## Description

A **Debug Message** Node is used to send a debug message to the Interaction Panel. To be able to view it, the [Debug Mode](../../../test/interaction-panel/overview.md#debug-mode) needs to be enabled. 

## Settings

| Parameter    | Type          | Description                  |
|--------------|---------------|------------------------------|
| Debug Level  | Select        | The Debug message level. Error messages will be displayed with a red background. One of:<br/>- Info<br/>- Error |
| Header       | CognigyScript | The header text of the debug message. (optional)                                                                |
| Message      | CognigyScript | The message text of the debug message. (required)                                                               |


