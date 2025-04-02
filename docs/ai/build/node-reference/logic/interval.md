---
title: "Interval" 
slug: "interval" 
hidden: false 
---

# Interval

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/interval.png" width="50%" />
</figure>

## Description

An Interval Node executes a part of the Flow only if it has not been executed within a certain time span.

On reaching an Interval Node, only if it has not been executed within the defined time span, its child Nodes are executed, otherwise it is skipped.

At the beginning of a session, all Interval Nodes are active.

## Parameters

| Parameter | Type   | Description            |
|-----------|--------|------------------------|
| Interval  | Number | Time (in milliseconds) |
