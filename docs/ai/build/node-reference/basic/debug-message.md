---
title: "Debug Message" 
slug: "debug-message" 
description: "A Debug Message Node sends a debug message to the Interaction Panel."
hidden: false 
---

# Debug Message

[![Version badge](https://img.shields.io/badge/Added in-v4.84-blue.svg)](../../../../release-notes/4.84.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/message/debug-message.png" width="80%" />
</figure>

## Description

This Node sends a debug message to the Interaction Panel.
Debug messages can help
you track the flow of data and diagnose issues
by providing real-time information about what's happening during the Flow execution.
To view the debug message, [Debug Mode](../../../test/interaction-panel/overview.md#debug-mode) needs to be enabled. 

## Settings

| Parameter   | Type          | Description                                                                                                                                                                                                                                                                                                                                                         |
|-------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Debug Level | Select        | The Debug message level. Select one of the following options:<br/>- **Info** — info messages will be displayed with a blue background and contain general information. For example: `User successfully logged in`. <br/>- **Error** — error messages will be displayed with a red background to highlight issues. For example: `Failed to connect to the database`. |
| Header      | CognigyScript | The header text of the debug message. This parameter is optional.<br/>Examples:<br/>- `User Action`<br/>- `System Error`<br/>- `Database Connection`                                                                                                                                                                                                                |
| Message     | CognigyScript | The message text of the debug message. This parameter is mandatory.<br/>Examples:<br/>- `User input received: {{"{{inut.text}}"}}`<br/>- `Invalid phone number entered: {{"{{ profile.email }}"}}`                                                                                                                                                                  |

## Examples

### Info Message

To show that the message relates to user's actions, such as completing a task or making a selection, you can use a Debug Message Node with the header `User Action`. 
It can be helpful when a user fills out an [Adaptive Card](say.md#adaptive-card) form or clicks the [Submit](../xApp/set-html-xApp-state.md) button in xApps to confirm an action.

```txt
Header: "User Action"
Message: "User successfully completed the registration process"
```

### Error Message

To show that the message relates to an error related to database operations,
use a Debug Message Node with the header `Database Error`.
It can be useful for tracking errors that occur during database requests. For example, it can help identify issues when using [MongoDB](../service/mongo-db.md) Nodes.

```txt
Header: "Database Error"
Message: "Failed to retrieve user data"
```

## Alternatives

If you want to debug a Flow when your AI Agent experiences issues on the production side, consider adding a [Log Message](../other-nodes/log-message.md) Node. You can specify a log level and a message, and view them on the Logs page.