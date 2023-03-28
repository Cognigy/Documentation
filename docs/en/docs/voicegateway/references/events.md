---
title: "Evens"
slug: "vg-events"
hidden: false
---

# Voice Gateway Events

[![Version badge](https://img.shields.io/badge/Updated in-v4.45-blue.svg)](../../release-notes/4.45.md)

During the call, the following voice events are recorded in the payload:

| Event              | Description                                                             |
|--------------------|-------------------------------------------------------------------------|
| RECOGNIZED_SPEECH  | The user's answer was recognized by the virtual agent.                  |
| RECOGNIZED_DTMF    | The DTMF code was recognized by the virtual agent.                      |
| CALL_CREATED       | The user created a call.                                                |
| CALL_RECONNECTED   | The call was reconnected due to network problems.                       |
| CALL_COMPLETED     | The user completed or terminated a call.                                |
| CALL_FAILED        | The call was terminated.                                                |
| USER_INPUT_TIMEOUT | The virtual agent terminated the call because the user did not respond. |
