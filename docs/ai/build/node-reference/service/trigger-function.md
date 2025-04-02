---
 title: "Trigger Function" 
 slug: "trigger-function" 
 hidden: false 
---
# Trigger Function

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/trigger-function.png" width="50%" />
</figure>

## Description

This Node executes a [Function](../../functions.md).

If the Function was successfully scheduled, it will execute the **On Scheduled** branch, otherwise it will execute the **On Scheduling Failed** branch.

## Parameters

| Parameter           | Type | Description                            |
|---------------------|------|----------------------------------------|
| Function            | List | Select the Function to be executed.    |
| Function Parameters | JSON | Enter the parameters for the Function. |
