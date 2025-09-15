---
title: "output"
slug: "output"
description: "output sends a message to the user."
hidden: false
tags:
   - output
   - say
   - input and output
---

# output

## Syntax

`output: TSayFunction`

**Alias:** `say`

## Description

Sends a message to the user.

**Parameters:**

`TSayFunction` has the following parameters:

- **text** — the message to send. Can be an empty string `""` or `null` if you're only sending structured content.
- **data** — a structured content payload containing rich UI elements like buttons, carousels, quick replies, and images. This parameter is optional.
- **settings** — a configuration object related to a handover to a human agent, such as whether the message can be forwarded and the output destination (user, human agent, or both). This parameter is optional.

**Returns:** depends on the `TSayFunction` implementation.

## Example

```js
output("Hello, world!", { key: "value" });
```

For more details on `TSayFunction` and its examples, refer to the [`say` function documentation](say.md).