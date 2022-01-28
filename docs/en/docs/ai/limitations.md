---
 title: "Quotas and Limitations" 
 slug: "limitations" 
 hidden: false 
---

# Quotas and Limitations

This page contains default quotas and limitations that apply to new Cognigy AI installations. Any deviations from the default values for our Trial and App environments are also stated within the table below.

???+ info "Changing values for managed Cognigy AI environments"
    In case you want to request a change for your managed Cognigy  AI environment, please submit a Support request using this template: 
    ````
    Hello Cognigy Support, 

    I would like to raise the quota/limit “<Description>” to <x> value.  
    We need this because <short explanation of your use case>. 
 
    Best regards, 
    Your Name 
    ````

|Description|Default value|Trial|App|
|--|--|--|--|
|**Database and HTTP Node Calls** |||
|Maximum Database query result from DB Flow Nodes |500 kB |||
|Maximum Context size|65 kB||1.5 MB|
|Maximum HTTP payload size for HTTP-Request Flow Node | 65 kB| |
|Maximum HTTP response size for HTTP-Request Flow Node |524 kB |2.6 MB |1.5 MB |
|HTTP-Request Flow Node timeout |8 s ||15 s |
|Maximum JSON encoded payload size for requests to our RESTful API|60 kB |||
|Minimum HTTP text body (used in CSV) |100 kB |||
|Maximum text encoded (raw) payload size for request to our RESTful API (e.g. used to upload CSV files) |2 MB |||
|**NLU** |||
|Maximum number of Example Sentences per Intent in Flows |2000 |||
|Maximum time an Intent-Training task is allowed to run |10 m |||
|**Cognigy Functions** |||
|Maximum number of outbound HTTP requests in a single Cognigy Function instance |5||| 
|Maximum HTTP response size in Cognigy Functions |1 MB|||
|Maximum time a Cognigy Function can run |15 m |||
|Maximum time for how long data about Cognigy Function instances is stored |30 Days |||
|Maximum number of active/running Cognigy Functions per Organization |10 |||
|Maximum size of parameters object with which the function instance can be started |130 kB |||
|**Snapshots** |||
|Maximum size of a packaged Snapshot |256 MB |||
|Maximum number of Snapshots per Agent |10|||
|Lifetime of a downloadable Snapshot until you have to re-create the download| 1 Day |||
|**Packages** |||
|Maximum size of a Cognigy Package |256 MB |||
|**Locales** |||
|Maximum number of Locales per Agent |10 |||
|**Extensions** |||
|Extension actions |10 |||
|Maximum execution time for Flow Nodes from Extensions |20 s |||
|Maximum size of an individual Extension package | 128 MB ||||Maximum size for the File-System based cache for executing Extensions | 512 MB |||
|Maximum number of HTTP requests an Options Resolver can send |5|||
|Maximum HTTP response size in an Options Resolver |1 MB |||
|Maximum time an Options Resolver can run |5 s (max HTTP calls * 1 s) |||
|**Execution and Operations** |||
|Maximum number of times a Flow can execute the same Path for a single user message before “Infinite Loop protection” is triggered |4|||
|Maximum number of undo/redo operations to be stored per user in the Flow Editor |5|||
|**Transformers** |||
|Maximum number of HTTP requests that can be sent from a Cognigy Transformer  |1|2 ||
|Maximum amount of time a Cognigy Transformer can run before it will be stopped |5 s |||
|**SMTP Node** |||
|Maximum number of times the system retries to send an outbound Email |3 |||
|Maximum size of an Email attachment |10 MB |||
|**Code Node** |||
|Maximum code execution time |1 s |||

## Retention of Records

|Description|Default value|Trial|App|
|--|--|--|--|
|**Logs** |||
|Maximum time until a Log-Line on the product's Log page will be removed |1 Day |||
|**Sessions** |||
|Maximum time until relevant Flow-execution session information will be removed |30 Days |||
|**Data** |||
|Maximum time until a Contact Profile which has not been read or modified will be removed |30 Days |||
|Maximum time until Conversation transcripts will be removed |30 Days |||
|**Intent Trainer Records** |||
|Maximum time Intent Trainer records are stored in the database|30 Days |||
|**Audit Events** |||
|Maximum time until audit events will be removed |30 Days |||

 