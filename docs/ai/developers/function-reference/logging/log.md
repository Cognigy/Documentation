---
title: "log"
slug: "log"
description: "log writes a log entry to the execution logs."
hidden: false
tags:
  - log
  - logs
  - logging
---

# log

## Syntax

`log(level, message)`

## Description

Writes a log entry to the execution logs.

**Parameters:**

- `level`: `"fatal" | "error" | "warn" | "info" | "debug" | "trace"` — the log level.
- `message`: `string` — the log entry text.

**Returns:** `void`

## Example

```js
// Example: Write an error log entry
log("error", "Failed to load user profile due to network error.");

// Example: Write an info log entry
log("info", "User profile loaded successfully.");
```