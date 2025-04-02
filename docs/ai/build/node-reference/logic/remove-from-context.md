---
title: "Remove From Context" 
slug: "remove-from-context" 
hidden: false 
---
# Remove From Context

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/remove-from-context.png" width="50%"/>
</figure>

## Description

This Node removes information from the [Context](../../../test/interaction-panel/context.md) object.

## Parameters

| Parameter | Type          | Description                                                                                                                |
|-----------|---------------|----------------------------------------------------------------------------------------------------------------------------|
| Key       | CognigyScript | The key you want to remove. This can be a key nested with dot, for example, `my.first.key`.                                |
| Value     | CognigyScript | The value to remove from the array if `Mode = Array` is chosen.                                                            |
| Mode      | Select        | <ul><li>Simple removes the key completely</li><li>Array removes the value from the array stored at `context.key`</li></ul> |