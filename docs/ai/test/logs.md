---
 title: "Logs" 
 slug: "logs" 
 hidden: false 
---
# Logs

The **Logs** feature allows platform users to track each input and output message that occurs with AI Agents. The Logs are most frequently used to debug workflows by observing if and where errors are occurring.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/logs.png" width="100%" />
</figure>

The logs can be followed in real-time as they will be automatically appended when new log outputs are emitted. The log history can also be loaded to review outputs that occurred in the past.

### Log entries

Each log entry consists of a `timestamp`, the `log type`, the log `message` and additional `metadata`.

##Log Filtering


### Display Settings
Configuration of the log display is possible by enabling or disabling the following features:

| Setting Name             | Function                                                               |
|--------------------------|------------------------------------------------------------------------|
| Live Logging             | Activates/Deactivates immediate update of the log as soon events occur |
| Show Timestamp           | Activates/Deactivates the timestamp of each event                      |
| Show Additional Metadata | Activates/Deactivates data attached to incoming and outgoing messages  |
| Info                     | Activates/Deactivates info type events                                 |
| Error                    | Activates/Deactivates error type events                                |
| Debug                    | Activates/Deactivates debugging type events                            |

### Searching

It is possible to search for specific user IDs and **Flow** names by entering these values in the respective search fields found at the top right of the logs page. The log will instantly be filtered by any value added to these fields.

!!! warning "Copying Log Entries"
    For browser performance reasons the log list is virtualized, which means that only the log entries that you see currently exist in your browser. This prevents scrolling and copying more lines than there are currently in your view.