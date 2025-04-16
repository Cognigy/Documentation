---
title: "Overview"
slug: "vg-events"
hidden: false
---

# Voice Gateway Events

[![Version badge](https://img.shields.io/badge/Updated in-v4.90-blue.svg)](../../../release-notes/4.90.md)

During the call, the following voice events are recorded in the payload:

| Event                                                         | Description                                                                                                                                                       |
|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ANSWERING_MACHINE_DETECTION](ANSWERING_MACHINE_DETECTION.md) | The call was initiated and the answering machine detection process started.                                                                                       |
| [CALL_COMPLETED](CALL_COMPLETED.md)                           | The call was terminated by the AI Agent or by the user.                                                                                                           |
| [CALL_CREATED](CALL_CREATED.md)                               | The user created a call.                                                                                                                                          |
| [CALL_FAILED](CALL_FAILED.md)                                 | The call was terminated.                                                                                                                                          |
| [CALL_IN_PROGRESS](CALL_IN_PROGRESS.md)                       | The call is in progress once the call has been successfully established. This event is only available, when the event is activated in the Voice Gateway Endpoint. |
| [CALL_RECONNECTED](CALL_RECONNECTED.md)                       | The call was reconnected due to network problems.                                                                                                                 |
| [RECOGNIZED_SPEECH](RECOGNIZED_SPEECH.md)                     | The user's answer was recognized by the AI Agent.                                                                                                                 |
| [RECOGNIZED_DTMF](RECOGNIZED_DTMF.md)                         | The DTMF code was recognized by the AI Agent.                                                                                                                     |
| [TRANSFER_DIAL_ERROR](TRANSFER_DIAL_ERROR.md)                 | The call transfer using the `Dial` method failed due to various reasons, like unreachable destination or network issues.                                          |
| [TRANSFER_DIAL_SUCCESS](TRANSFER_DIAL_SUCCESS.md)             | The call transfer using the `Dial` method succeeded with the new phone line established to the destination.                                                       |
| [TRANSFER_REFER_ERROR](TRANSFER_REFER_ERROR.md)               | The call transfer using the `Refer` method failed, possibly due to an unavailable or rejecting destination.                                                       |
| [TRANSFER_REFER_SUCCESS](TRANSFER_REFER_SUCCESS.md)           | The call transfer using the `Refer` method succeeded, with the call responsibility passed to another destination.                                                 |
| [USER_BUSY](USER_BUSY.md)                                     | The user (caller) was busy and unable to answer the call or engage in the desired action.                                                                         |
| [USER_INPUT_TIMEOUT](USER_INPUT_TIMEOUT.md)                   | The AI Agent terminated the call because the user did not respond.                                                                                                |
| [NO_ANSWER](NO_ANSWER.md)                                     | The recipient of the call does not answer.                                                                                                            |

You can [collect event data](../../../ai/analyze/collecting-data.md) for further analysis in [Insights](../../../ai/analyze/insights.md). To collect this data, you can access Voice Gateway events in the [Output Transformer](../../../ai/deploy/endpoints/transformers/output-transformer.md) and the `input.data.event` Input object, except for the `CALL_COMPLETED` event. You can't access `CALL_COMPLETED` in `input.data.event` since the Input object's content is deleted after `CALL_COMPLETED` occurs. Alternatively, you can register the `CALL_COMPLETED` events by enabling the `CALL_COMPLETED` toggle in the Call Events section of the [Voice Gateway Endpoint](../../../ai/deploy/endpoint-reference/voice-gateway.md) configuration.

The Output Transformer is executed after processing the flow. For example, if you receive the `CALL_COMPLETED` event, write some metrics in the transformer via HTTP request.

You can also use a **Lookup** Node with the [Call Event Status](../../../ai/build/node-reference/logic/lookup.md) type for reusing these events, streamlining call handling and improving efficiency.