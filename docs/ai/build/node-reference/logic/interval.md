---
title: "Interval" 
slug: "interval" 
hidden: false 
---

# Interval

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/interval.png" width="80%" />
</figure>

## Description

An Interval Node is used to execute a part of the Flow only if it has not been executed within a certain timespan.

On reaching an Interval Node, only if it has not been executed within the defined timespan, its child nodes will be executed, otherwise it will be skipped.

At the beginning of a session, all Interval Nodes will be active.

## Settings

| Parameter | Type          | Description            |
|-----------|---------------|------------------------|
| Interval  | CognigyScript | Time (in milliseconds) |
