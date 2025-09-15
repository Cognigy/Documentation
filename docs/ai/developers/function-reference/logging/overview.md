---
title: "Overview"
slug: "logging-and-monitoring"
description: "The Logging and Monitoring functions help you monitor and debug a conversation. They let you log messages and track token usage."
hidden: false
tags:
  - logging
  - monitoring
  - log
  - getLLMTokenUsageForSession
  - setSensitiveLoggingSettings
---

# Logging and Monitoring

The _Logging and Monitoring_ functions help you monitor and debug a conversation. They let you log messages and track token usage.

## [`log`](log.md)

**Syntax:** `log(level, message)`

Writes a log entry to the execution logs.

## [`getLLMTokenUsageForSession`](getLLMTokenUsageForSession.md)

**Syntax:** `getLLMTokenUsageForSession()`

Retrieves the token usage information for the conversation session. Returns `null` if no token usage information is available.

## [`setSensitiveLoggingSettings`](setSensitiveLoggingSettings.md)

**Syntax:** `setSensitiveLoggingSettings(settings)`

Adjusts the masking and redaction configuration for the conversation.