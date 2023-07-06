---
 title: "Log Message" 
 slug: "log-message" 
 hidden: false 
---
# Log Message

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/log-message.png" width="80%" />
</figure>

## Description
<div class="divider"></div>
The Log Message Node writes a message into the [Agent Logs]({{config.site_url}}ai/resources/test/logs/);

| Parameter | Type          | Description                                                      |
|-----------|---------------|------------------------------------------------------------------|
| Message   | CognigyScript | The message to log                                               |
| Log Level | Select        | The log level to use. One of:<br/>- Debug<br/>- Info<br/>- Error |

!!! note "Log a message in a Code Node"
    Next to this Flow Node, one can execute the same functionality in a [Code Node]({{config.site_url}}ai/flow-nodes/code/code/) by using the [Actions / API object]({{config.site_url}}ai/flow-nodes/code/actions/).