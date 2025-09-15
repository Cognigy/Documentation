---
title: "Overview"
slug: "input-and-output"
description: "Input and Output functions handle communication for a conversation. Use `say` to send messages to the user and `addToInput` to pass data to the next Node."
hidden: false
tags:
  - input and output
  - functions
  - overview
---

# Input and Output

The _Input and Output_ functions handle communication for a conversation.
You can use `say` to send messages to the user and `addToInput` to pass data to the next Node.

## [`addToInput`](addToInput.md)

**Syntax:** `addToInput(key, value)`

Writes a value into the Input object for the execution.
This function allows you to store data in the Input object, which can be accessed later in the execution context.

## [`output`](output.md)

**Syntax:** `output: TSayFunction`

**Alias:** `say`

Sends a message to the user.

## [`say`](say.md)

**Syntax:** `say: TSayFunction`

**Alias:** `output`

Sends a message to the user.