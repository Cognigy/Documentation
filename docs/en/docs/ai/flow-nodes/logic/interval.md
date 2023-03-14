---
 title: "Interval" 
 slug: "interval" 
 hidden: false 
---
# Interval

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/99371f7-IntervalNode.PNG" width="100%" />
</figure>

## Description
<div class="divider"></div>

An Interval Node is used to execute a part of the Flow only if it has not been executed within a certain timespan.

On reaching an Interval Node, only if it has not been executed within the defined timespan, its child nodes will be executed, otherwise it will be skipped.

At the beginning of a session, all Interval Nodes will be active.

| Parameter | Type          | Description            |
|-----------|---------------|------------------------|
| Interval  | CognigyScript | Time (in milliseconds) |
