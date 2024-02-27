---
title: "Voice Gateway Commands"
slug: "vg-commands"
hidden: false
---

# Voice Gateway Commands

To create a voice agent,
you need to build a Flow on the Cognigy.AI side using [Voice Nodes](../../../ai/flow-nodes/vg/voice-gateway.md).
These Nodes provide the basic commands required for your voice agent. If you require additional commands that are not available in the Voice Nodes,
you can add them using a [Code Node](#custom-commands-in-a-code-node). 

For incoming calls, you can use Voice Nodes and a Code Node. However, for outgoing calls, you must specify all parameters in the call request body, as described in the [Advanced Configuration Request](../../creating-outbound-calls.md#advanced-configuration-request) section.

## List of Commands

The table presents the list of supported commands.

| Command                                     | Description                                                                                                                                                                                                        | Node Analogue                                                                                                     |
|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| [Answering Machine Detection (AMD)](amd.md) | This command can be enabled on outbound calls to provide an indication of whether a call has been answered by a person or a machine. To use this feature, provide the `amd` property in a [dial](dial.md) command. | [Transfer](../../../ai/flow-nodes/vg/transfer.md) (**Dial > Answering Machine Detection** settings)               |
| [Config](config.md)                         | This command lets the developer to modify the default speech settings for the current session or to collect speech or DTMF input in the background while other commands are executed.                              | [Set Session Config](../../../ai/flow-nodes/vg/set-session-config.md)                                             |
| [Dial](dial.md)                             | This command initiates a new call by connecting to a telephone number, a registered SIP user, or a SIP URI.                                                                                                        | [Transfer](../../../ai/flow-nodes/vg/transfer.md) (**Dial** settings)                                             |                                                                      |
| [DTMF](dtmf.md)                             | This command generates a string of DTMF digit signals, which are transmitted as RTP payloads according to [RFC 2833](https://datatracker.ietf.org/doc/html/rfc2833).                                               | [DTMF](../../../ai/flow-nodes/vg/dtmf.md)                                                                         |
| [Gather](gather.md)                         | This command collects DTMF or speech input.                                                                                                                                                                        | -                                                                                                                 |
| [Hangup](hangup.md)                         | This command terminates the call and ends the session.                                                                                                                                                             | [Hangup](../../../ai/flow-nodes/vg/hangup.md)                                                                     |
| [Listen](listen.md)                         | This command sends real-time audio streams to your application over a WebSocket connection for processing. The [Call Recording](../../webapp/recent-calls.md#call-recordings) feature relies on this command.      | [Call Recording](../../../ai/flow-nodes/vg/call-recording.md)                                                     |
| [Play](play.md)                             | This command streams recorded audio to a call.                                                                                                                                                                     | [Play](../../../ai/flow-nodes/vg/play.md)                                                                         |
| [Say](say.md)                               | This command sends synthesized speech to the remote party. The text provided may be either plain text or use SSML tags.                                                                                            | [Say](../../../ai/flow-nodes/message/say.md#voice-gateway)                                                        |
| [SIP:request](sip-request.md)               | This command sends a SIP `INFO`, `NOTIFY`, or `MESSAGE` request on an established call, which is an in-dialog request.                                                                                             | -                                                                                                                 |
| [SIP:REFER](refer.md)                       | This command transfers a call and disconnect.                                                                                                                                                                      | [Transfer](../../../ai/flow-nodes/vg/transfer.md) (**Refer** settings)                                            |
| [Transcribe](transcribe.md)                 | This command generates real-time transcriptions of speech.                                                                                                                                                         | [Set Session Config](../../../ai/flow-nodes/vg/set-session-config.md)  (**Recognizer - Speech-To-Text** settings) |

## Custom Commands in a Code Node

The example shows how a [Code Node](../../../ai/flow-nodes/code/code.md) can send a customized [`dial`](dial.md) command with an Answering Machine Detection
(`amd`) action hook.

```javascript
api.output(null, {
    "_cognigy": {
        "_voiceGateway2": {
            "json": {
                "verb": "dial",
                "actionHook": "dial",
                "callerId": "+49XXXXXXXXXXX",
                "target": [
                    {
                        "type": "phone",
                        "number": "+49XXXXXXXXXXX",
                    }
                ],
                "amd": {
                    "actionHook": "amd",
                    "recognizer": {
                        "vendor": "microsoft",
                        "language": "en-US",
                    }
                }
            }
        }
    }
})
```