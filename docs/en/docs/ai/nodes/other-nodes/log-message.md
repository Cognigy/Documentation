---
 title: "Log Message" 
 slug: "log-message" 
 hidden: false 
---
# Log Message

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/other/log-message.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

The Log Message Node writes a message into the [Agent Logs](../../resources/test/logs.md).

## Settings

| Parameter | Type          | Description                                                      |
|-----------|---------------|------------------------------------------------------------------|
| Message   | CognigyScript | The message to log                                               |
| Log Level | Select        | The log level to use. One of:<br/>- Debug<br/>- Info<br/>- Error |

!!! note "Log a message in a Code Node"
    Next to this Flow Node, one can execute the same functionality in a [Code Node](../../nodes/basic/code/overview.md) by using the [Actions / API object](../../nodes/basic/code/actions.md).