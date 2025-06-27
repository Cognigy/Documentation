---
title: "Logs" 
slug: "logs" 
hidden: false
description: "Cognigy.AI Logs are system records that contain information about input and output messages that AI Agents receive and send."
tags:
  - logs
  - debugging
  - monitoring
  - error tracking
  - log history
---

# Logs

_Logs_ are system records that contain information about input and output messages that AI Agents receive and send. The primary purpose of the logs is to debug workflows by observing if and where errors are occurring.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/logs.png" width="70%" />
</figure>

You can track logs in real time or load the log history to review outputs that occurred in the past.

??? note "Copying Log Entries"
    To improve browser performance, the log list uses virtualization. This means your browser loads only the log entries visible on your screen at any given time. As a result, you can't copy more lines than what's currently visible.

### Log entries

The following table provides an overview of the log entries.

| Field       | Description                                                                                                                                                                                                                                                                                                                            |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `timestamp` | The date and time of the log entry. The format is `YYYY-MM-DD HH:MM:SS`.                                                                                                                                                                                                                                                               |
| `log type`  | One of the following log entry types: <ul><li>`info` — a log entry that contains general information about the normal operation of a Flow.</li><li>`error` — a log entry that a log entry that might contain information for diagnosing an issue in the Flow.</li><li>`debug` — a log entry that contains debug information.</li></ul> |
| `message`   | Describes the event of the log entry.                                                                                                                                                                                                                                                                                                  |
| `metadata`  | Additional data associated with the log entry, for example, `organisationID`, `flowID`, `text`, and other.                                                                                                                                                                                                                             |

## Working with Logs

=== "GUI"
    In **Test > Logs**, you can view and filter Project logs as well as search them by user ID and Flow name.

    **Settings**

    To configure the log entries displayed in the log list, use the following settings:

    | Setting Name             | Function                                                                                      |
    |--------------------------|-----------------------------------------------------------------------------------------------|
    | Live Logging             | Activates real-time log updates. This setting is activated by default.                        |
    | Show Timestamp           | Includes the timestamp of the log entries. This setting is activated by default.              |
    | Show Additional Metadata | Includes metadata related to input and output messages. This setting is activated by default. |
    | Info                     | Includes log entries of the `info` type. This setting is activated by default.                |
    | Error                    | Includes log entries of the `error` type. This setting is activated by default.               |
    | Debug                    | Includes log entries of the `debug` type. This setting is deactivated by default.             |

=== "API"
    You can view the logs of a Project with the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#tag--Logs-v2.0).
