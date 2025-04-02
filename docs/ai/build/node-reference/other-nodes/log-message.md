---
title: "Log Message" 
slug: "log-message" 
description: "A Log Message Node writes a message into the Project Logs."
hidden: false 
---

# Log Message

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/log-message.png" width="50%" />
</figure>

## Description

This Node writes a message into the [Project Logs](../../../test/logs.md).

## Parameters

| Parameter | Type          | Description                                                                                                                                                                                                                                                                                                                                                 |
|-----------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message   | CognigyScript | The message to log. The message should be a string that provides the content of the log entry. For example: `User login attempt successful`.                                                                                                                                                                                                                |
| Log Level | Select        | The log level to use. The level determines the severity and visibility of the log message. Select one of the following options:<ul><li>**Debug** — logs detailed information for debugging purposes.</li><li>**Info** — logs general information about system operations.</li><li>**Error** — logs critical errors that need immediate attention.</li></ul> |

## Alternatives

To log messages, you can also use the [Actions/API](../basic/code/actions.md) object in a [Code](../basic/code/overview.md) Node.

If you want to send a debug message to the Interaction Panel, use the [Debug Message](../basic/debug-message.md) Node for more precise testing.