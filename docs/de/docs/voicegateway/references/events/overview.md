---
title: "Voice Gateway Events"
slug: "vg-events"
hidden: false
---

# Voice Gateway Events

[![Version badge](https://img.shields.io/badge/Updated in-v4.61-blue.svg)](../../../release-notes/4.61.md)

During the call, the following voice events are recorded in the payload:

| Event                                                         | Description                                                                                                              |
|---------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [ANSWERING_MACHINE_DETECTION](ANSWERING_MACHINE_DETECTION.md) | The call was initiated and the answering machine detection process started.                                              |
| [CALL_COMPLETED](CALL_COMPLETED.md)                           | The call was terminated by the virtual agent or by the user.                                                             |
| [CALL_CREATED](CALL_CREATED.md)                               | The user created a call.                                                                                                 |
| [CALL_FAILED](CALL_FAILED.md)                                 | The call was terminated.                                                                                                 |
| [CALL_RECONNECTED](CALL_RECONNECTED.md)                       | The call was reconnected due to network problems.                                                                        |
| [RECOGNIZED_SPEECH](RECOGNIZED_SPEECH.md)                     | The user's answer was recognized by the virtual agent.                                                                   |
| [RECOGNIZED_DTMF](RECOGNIZED_DTMF.md)                         | The DTMF code was recognized by the virtual agent.                                                                       |
| [TRANSFER_DIAL_ERROR](TRANSFER_DIAL_ERROR.md)                 | The call transfer using the `Dial` method failed due to various reasons, like unreachable destination or network issues. |
| [TRANSFER_DIAL_SUCCESS](TRANSFER_DIAL_SUCCESS.md)             | The call transfer using the `Dial` method succeeded with the new phone line established to the destination.              |
| [TRANSFER_REFER_ERROR](TRANSFER_REFER_ERROR.md)               | The call transfer using the `Refer` method failed, possibly due to an unavailable or rejecting destination.              |
| [TRANSFER_REFER_SUCCESS](TRANSFER_REFER_SUCCESS.md)           | The call transfer using the `Refer` method succeeded, with the call responsibility passed to another destination.        |
| [USER_BUSY](USER_BUSY.md)                                     | The user (caller) was busy and unable to answer the call or engage in the desired action.                                |
| [USER_INPUT_TIMEOUT](USER_INPUT_TIMEOUT.md)                   | The virtual agent terminated the call because the user did not respond.                                                  |
| [NO_ANSWER](NO_ANSWER.md)                                     | The user or recipient of the call does not answer.                                                                       |

You can access Voice Gateway events either in the input object `input.data.event` or in the [Output Transformer](../../../ai/endpoints/transformers/output-transformer.md). Advanced users can use these events for special purposes like [analytics](../../../ai/tools/analytics/analytics-concepts.md). 

The Output Transformer is executed after processing the flow. For example, if you receive the `CALL_COMPLETED` event, write some metrics in the transformer via HTTP request.

You can also utilize a **Lookup** Node with the [Call Event Status](../../../ai/flow-nodes/logic/lookup.md#call-event-status) type for reusing these events, streamlining call handling and improving efficiency.