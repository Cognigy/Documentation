---
 title: "Log Message" 
 slug: "log-message" 
 hidden: false 
---
# Log Message

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/log-message.png" width="80%" />
</figure>

## Description

The Log Message Node writes a message into the [Agent Logs](../../../test/logs.md).

## Settings

| Parameter | Type          | Description                                                      |
|-----------|---------------|------------------------------------------------------------------|
| Message   | CognigyScript | The message to log                                               |
| Log Level | Select        | The log level to use. One of:<br/>- Debug<br/>- Info<br/>- Error |

!!! note "Log a message in a Code Node"
    Next to this Flow Node, one can execute the same functionality in a [Code Node](../basic/code/overview.md) by using the [Actions / API object](../basic/code/actions.md).