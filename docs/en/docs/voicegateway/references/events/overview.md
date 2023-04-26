---
title: "Voice Gateway Events"
slug: "vg-events"
hidden: false
---

# Voice Gateway Events

[![Version badge](https://img.shields.io/badge/Updated in-v4.45-blue.svg)](../../../release-notes/4.45.md)

During the call, the following voice events are recorded in the payload:

| Event                                       | Description                                                             |
|---------------------------------------------|-------------------------------------------------------------------------|
| [RECOGNIZED_SPEECH](RECOGNIZED_SPEECH.md)   | The user's answer was recognized by the virtual agent.                  |
| [RECOGNIZED_DTMF](RECOGNIZED_DTMF.md)       | The DTMF code was recognized by the virtual agent.                      |
| [CALL_CREATED](CALL_CREATED.md)             | The user created a call.                                                |
| CALL_RECONNECTED                            | The call was reconnected due to network problems.                       |
| [CALL_COMPLETED](CALL_COMPLETED.md)         | The call was terminated by the virtual agent or by the user.            |
| CALL_FAILED                                 | The call was terminated.                                                |
| [USER_INPUT_TIMEOUT](USER_INPUT_TIMEOUT.md) | The virtual agent terminated the call because the user did not respond. |



You can access Voice Gateway events either in the input object or in the output transformer. Advanced users can use these events for special purposes like analytics. The output transformer is executed after processing the flow. For example, if you receive the `CALL_COMPLETED` event, write some metrics in the transformer via HTTP request.